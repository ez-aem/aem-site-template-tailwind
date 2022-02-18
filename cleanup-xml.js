const replace = require("replace-in-file");
const options = {
  files: "./site/**/*.xml",
  from: [
    /jcr:created="(.*?)"/g,
    /jcr:createdBy="(.*?)"/g,
    /jcr:lastModified="(.*?)"/g,
    /jcr:lastModifiedBy="(.*?)"/g,
    /cq:lastModified="(.*?)"/g,
    /cq:lastModifiedBy="(.*?)"/g,
  ],
  to: "",
  glob: {
    dot: true,
  },
};

try {
  const results = replace.sync(options);
  console.log("Replacement results:", results);
} catch (error) {
  console.error("Error occurred:", error);
}
