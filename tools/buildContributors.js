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

		// PR 貢獻者抓不到，對 API 資源占用過高
		const manualContributors = [
			{
				avatar: "https://www.github.com/pon50895.png",
				name: "pon50895",
				title: "Contributor via PR",
				links: [{ icon: "github", link: "https://github.com/pon50895" }],
			},
		];

		const allContributors = [...contributors, ...manualContributors];

		fs.writeFileSync(outputFile, JSON.stringify(allContributors, null, 2));
		console.log("Contributors list has been generated!");
	})
	.catch((error) => {
		console.error("Error fetching contributors:", error);
	});
