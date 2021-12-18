import cucumber from "cypress-cucumber-preprocessor";
import { defaultOptions } from "@cypress/browserify-preprocessor";
export default async (on, config) => {
  on(
    "file:preprocessor",
    cucumber.default({
      ...defaultOptions,
      typescript: require.resolve("typescript"),
    })
  );

  return config;
};
