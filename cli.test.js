const fs = require("fs");
const { execSync } = require("child_process");

const testFilename = "test_output.html";

beforeEach(() => {
  if (fs.existsSync(testFilename)) {
    fs.unlinkSync(testFilename);
  }
});

afterEach(() => {
  if (fs.existsSync(testFilename)) {
    fs.unlinkSync(testFilename);
  }
});

it("creates HTML presentation file with default options", () => {
  execSync("node cli.js test-input.md --output test_output.html");
  expect(fs.existsSync(testFilename)).toEqual(true);
  const fileContents = fs.readFileSync(testFilename, { encoding: "utf-8" });
  expect(fileContents).toMatch(
    /^<!doctype html>[\S\s]+<section class="slide">/
  );
  expect(fileContents).not.toMatch(/<section class="slides-section">/);
});

it("creates HTML file outputs", () => {
  execSync(
    "node cli.js test_input.md --output test_output.html --use '@karuga/rehype-slides=preset:\"headings_compact\"'"
  );
  expect(fs.existsSync(testFilename)).toEqual(true);
  expect(fs.readFileSync(testFilename, { encoding: "utf-8" })).toMatch(
    /^<!doctype html>[\S\s]+<section class="slides-section">/
  );
});
