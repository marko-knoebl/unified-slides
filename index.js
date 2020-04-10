const unified = require("unified");

const remarkParse = require("remark-parse");
const { remarkInclude } = require("@karuga/remark-include");
const remarkRehype = require("remark-rehype");
const rehypeRaw = require("rehype-raw");
const rehypeHighlight = require("rehype-highlight");
const rehypeSlides = require("@karuga/rehype-slides");
const rehypeInline = require("rehype-inline");
const rehypeStringify = require("rehype-stringify");

const unifiedSlides = unified()
  .use(remarkParse)
  .use(remarkInclude)
  .use(remarkRehype, { allowDangerousHtml: true })
  .use(rehypeRaw)
  .use(rehypeHighlight)
  .use(rehypeSlides)
  .use(rehypeInline, { svgElements: true })
  .use(rehypeStringify, { closeSelfClosing: true });

module.exports = unifiedSlides;
