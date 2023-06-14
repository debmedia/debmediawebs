import { getPlaiceholder } from "plaiceholder";

// toma la lista de Post que viene del graphql y le agregar el blur
// TODO: Sacarlo a otro archivo, error handling
export async function generateBlurPlaceholders(posts) {
    const promises = posts.map(async (post) =>{
        const {base64, img} = await getPlaiceholder(post.featuredImage.node.mediaItemUrl);
        return  base64;
    });
    const metaImages = await Promise.all(promises);
    return posts.map((post, index) => {
        //deep copy cabeza
        const copyPost = JSON.parse(JSON.stringify(post));
        copyPost.featuredImage.node.blur = metaImages[index];
        return copyPost;
    });
}