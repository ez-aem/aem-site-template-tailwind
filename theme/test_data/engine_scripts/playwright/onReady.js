module.exports = async (
  page,
  scenario,
  viewport,
  isReference,
  browserContext
) => {
  console.log("SCENARIO > " + scenario.label);

  // add more ready handlers here...
  await require("./loginAndLazyLoadScroll")(page, scenario);
  await require("./clickAndHoverHelper")(page, scenario);
};
