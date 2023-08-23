const fs = require("fs");
const sharp = require("sharp");

const INDENT_SPACES = 2;

// variables para cada caso
const JSON_FILE_PATH = "json/setps-debsign.json";
const IMAGE_BASE_PATH = "public/debsigntabs/"
const IMAGE_URL_PROPERTY = ".image.url"
const IMAGE_WIDTH_PROPERTY = ".image.width"
const IMAGE_HEIGHT_PROPERTY = ".image.height"

// Read the image dimensions
async function getImageSize(imagePath) {
    try {
        const metadata = await sharp(imagePath)
            .metadata();
        return { width: metadata.width, height: metadata.height };
    } catch (err) {
        console.error("Error reading image metadata:", err);
    }
}


async function main() {
    const data = JSON.parse(fs.readFileSync(JSON_FILE_PATH, {encoding: "utf-8"}));
    for(let locale in data){
        console.log(locale)
        for(let item of data[locale]){
            // item es cada objeto del array
            const url = getPropertyValue(item, IMAGE_URL_PROPERTY)
            console.log(url);
            const size = await getImageSize(IMAGE_BASE_PATH + url);
            console.log(size);
            setPropertyValue(item, IMAGE_WIDTH_PROPERTY, size.width);
            setPropertyValue(item, IMAGE_HEIGHT_PROPERTY, size.height);
        }
    }
    fs.writeFileSync(JSON_FILE_PATH, JSON.stringify(data, null, INDENT_SPACES), {encoding: "utf-8"});
}

// si obj = {bar: {baz: "hello"}}
// y str = ".bar.baz"
// devuelve "hello"
function getPropertyValue(obj, str) {
    const props = str.split(".").filter((prop) => prop);
    let res = obj;
    for(let prop of props) {
        res = res[prop];
    }
    return res;
}

function testGetPropertyValue(){
    const obj = {bar: {baz: "hello"}};
    const str = ".bar.baz";
    const result = getPropertyValue(obj, str);
    console.log(result);
}

function setPropertyValue(obj, str, val) {
    const props = str.split(".").filter((prop) => prop);
    let res = obj;
    for (let i = 0; i < props.length -1; i++) {
        const prop = props[i];
        res = res[prop];
    }
    let lastProp = props[props.length-1];
    res[lastProp] = val;
    return obj;
}

function testSetPropertyValue(){
    const obj = {bar: {baz: "hello"}};
    const str = ".bar.baz";
    const val = "world"
    const result = setPropertyValue(obj, str, val);
    console.log(result);
}

main();