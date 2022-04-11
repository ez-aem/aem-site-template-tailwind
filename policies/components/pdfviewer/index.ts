import { ComponentPolicy } from "@ez-aem/policies";
import Styles from "../../../../../../theme/src/styles/accordion";

const Accordion = new ComponentPolicy({
  "@jcr:description": "Default Policy for Accordion Component",
  "@jcr:title": "Default Accordion Policy",
  "@sling:resourceType": "core/wcm/components/accordion/v1/accordion",
  "cq:styleGroups": Styles
});

export default Accordion;