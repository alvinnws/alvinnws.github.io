import pluginFilters from "./_config/filters.js";

export default async function(eleventyConfig) {
    
    eleventyConfig.addPassthroughCopy("src/styles.css");
    eleventyConfig.addPassthroughCopy("src/assets");
    eleventyConfig.addPassthroughCopy("src/CNAME");
    
    eleventyConfig.addPlugin(pluginFilters);

    eleventyConfig.addPreprocessor("drafts", "*", (data, content) => {
		if (data.draft) {
			data.title = `${data.title} (draft)`;
		}

		if(data.draft && process.env.ELEVENTY_RUN_MODE === "build") {
			return false;
		}
	});
};

export const config = {
    dir: {
        input: "src",
        includes: "../_includes",
        data: "../_data",
        output: "docs"
    }
};