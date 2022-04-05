const { generatePolicies } = require("@ez-aem/policies");
const { XMLBuilder } = require("fast-xml-parser");
const { writeFileSync } = require("fs");

const Builder = new XMLBuilder({ 
  format: true,
  ignoreAttributes: false,
  indentBy: "  ",
  attributeNamePrefix: "@",
  supressEmptyNode: true,
});

const Policies = [
    require("./components/accordion"),
    require("./components/breadcrumb"),
    require("./components/button"),
    require("./components/carousel"),
    ...require("./components/container"),
// import Button from "./components/button";
// import Carousel from "./components/carousel";
// import Container from "./components/container";
// import Download from "./components/download";
// import Embed from "./components/embed";
// import ExperienceFragment from "./components/experiencefragment";
// import FormButton from "./components/form-button";
// import FormContainer from "./components/form-container";
// import FormOptions from "./components/form-options";
// import FormText from "./components/form-text";
// import Image from "./components/image";
// import LanguageNavigation from "./components/languagenavigation";
// import List from "./components/list";
// import Navigation from "./components/navigation";
// import Page from "./components/page";
// import ProgressBar from "./components/progressbar";
// import Search from "./components/search";
// import Separator from "./components/separator";
// import Tabs from "./components/tabs";
// import Teaser from "./components/teaser";
// import Text from "./components/text";
// import Title from "./components/title";
];


writeFileSync("../site/src/main/content/jcr_root/conf/aem-site-template-tailwind/settings/wcm/policies/.content-test-2.xml", Builder.build(generatePolicies(Policies)));