export default async function(eleventyConfig) {
    
    eleventyConfig.addPassthroughCopy("src/styles.css");
    eleventyConfig.addPassthroughCopy("src/assets");
    
};

export const config = {
    dir: {
        input: "src",
        includes: "../_includes",
        data: "../data",
        output: "docs"
    }
};