JavaScript library / npm script to convert markdown files to HTML presentations; based on unified.js and reveal.js

# installation

```bash
npm install @karuga/unified-slides
```

# running from the command line

## simple slides

slide separator: `---` (`hr`)

`in.md`:

```md
this is slide 1

---

this is slide 2

- list item 1
- list item 2
- list item 3
```

build via:

```bash
npx @karuga/unified-slides -- in.md --output out.html
```

## sectioned slides

section separator: `h1`

slide separator: `h2`

`in.md`:

```md
# section 1

slide 1.0 content

## slide 1.1

slide 1.1 content

# section 2

slide 2.0 content
```

build via:

```bash
npx @karuga/unified-slides -- in.md --output out.html --use @karuga/rehype-slides=preset:"headings_compact"
```

# using from JavaScript

```js
const unifiedSlides = require("./index.js");
const fs = require("fs");

const main = async () => {
  const result = await unifiedSlides.process("# slide 1\n\n---\n\n# slide 2");
  await fs.writeFileSync("slides.html", result.toString());
};

main();
```
