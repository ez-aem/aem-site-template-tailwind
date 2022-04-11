const { generatePolicies } = require("@ez-aem/policies");
const { XMLBuilder } = require("fast-xml-parser");
const { writeFileSync } = require("fs");

const Builder = new XMLBuilder({ 
  format: true,
  ignoreAttributes: false,
  indentBy: "  ",
  attributeNamePrefix: "@",
  attributesGroupName: "attributes",
  suppressBooleanAttributes: false,
  // supressEmptyNode: true,
  // suppressUnpairedNode: true,
  // unpairedTags: ["item", "jcr:content", "?xml"],
  // stopNodes: ["jcr:content"],
});

const Policies = [
    require("./components/accordion"),
    require("./components/breadcrumb"),
    require("./components/button"),
    require("./components/carousel"),
    ...require("./components/container"),
    require("./components/download"),
    require("./components/embed"),
    ...require("./components/experiencefragment"),
    require("./components/form-button"),
    require("./components/form-container"),
    require("./components/image"),
    require("./components/languagenavigation"),
    require("./components/list"),
    require("./components/navigation"),
    require("./components/page"),
    require("./components/progressbar"),
    require("./components/search"),
    require("./components/separator"),
    require("./components/tabs"),
    require("./components/teaser"),
    require("./components/text"),
    require("./components/title"),
];


writeFileSync("../site/src/main/content/jcr_root/conf/aem-site-template-tailwind/settings/wcm/policies/.content.xml", Builder.build(generatePolicies(Policies)));