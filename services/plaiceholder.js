import { getPlaiceholder } from "plaiceholder";
import { Log } from "./log";

// toma la lista de Post que viene del graphql y le agregar el blur
// TODO: Sacarlo a otro archivo, error handling
export async function generateBlurPlaceholders(posts) {
    const promises = posts.map(async (post) =>{
        if (post?.featuredImage?.node?.mediaItemUrl) {
            const {base64, img} = await getPlaiceholder(post.featuredImage.node.mediaItemUrl);
            return  base64;
        } else {
            Log.warn(`[generateBlurPlaceholders] Post with slug "${post.slug}" does not contain featuredImage.node.mediaItemUrl`);
            return "";
        }
    });
    const metaImages = await Promise.all(promises);
    return posts.map((post, index) => {
        //deep copy cabeza
        const copyPost = JSON.parse(JSON.stringify(post));
        if(copyPost?.featuredImage?.node){
            copyPost.featuredImage.node.blur = metaImages[index];
        } else {
            copyPost.featuredImage = {node: {blur: metaImages[index]}};
        }
        return copyPost;
    });
}