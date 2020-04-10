#!/usr/bin/env node

const fs = require("fs");
const markdownExtensions = require("markdown-extensions");
const unifiedArgs = require("unified-args");
const unifiedSlides = require("./index.js");

const packageJson = fs.readFileSync(__dirname + "/package.json");

const shortName = "unifiedslides";

unifiedArgs({
  processor: unifiedSlides,
  name: packageJson.name,
  description: packageJson.description,
  version: packageJson.version,
  pluginPrefix: shortName,
  extensions: markdownExtensions,
  packageField: `${shortName}Config`,
  rcName: `.${shortName}rc`,
  ignoreName: `${shortName}ignore`
});
