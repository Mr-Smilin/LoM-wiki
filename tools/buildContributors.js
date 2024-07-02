const fs = require("fs");
const axios = require("axios");

const owner = "Mr-Smilin";
const repo = "LoM-wiki";
const outputFile = "docs/public/json/contributors.json";

axios
	.get(`https://api.github.com/repos/${owner}/${repo}/contributors`)
	.then((response) => {
		const contributors = response.data.map((contributor) => ({
			avatar: contributor.avatar_url,
			name: contributor.login,
			title: "Contributor",
			links: [{ icon: "github", link: contributor.html_url }],
		}));

		fs.writeFileSync(outputFile, JSON.stringify(contributors, null, 2));
		console.log("Contributors list has been generated!");
	})
	.catch((error) => {
		console.error("Error fetching contributors:", error);
	});
