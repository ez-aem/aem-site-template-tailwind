# Change Theme

The Tailwind AEM Site Template comes with two themes: Wireframe and WKND. It's quite easy to swap themes and only three lines of code to change. It's easiest to see this in action while running the `live` editing mode.

```js
// ./tailwind.config.js
- presets: [require("./demos/wireframe/tailwind.preset.js")],
+ presets: [require("./demos/wknd/tailwind.preset.js")],
```

```css
/* ./src/theme.css */

/* Demo CSS Theme - For Removal */
- @import "../demos/wireframe/theme.css";
+ @import "../demos/wknd/theme.css";
```

```js
// ./src/theme.ts

// Demo JavaScript
- import "../demos/wireframe/theme";
+ import "../demos/wknd/theme";
```

Once you've changed the theme you can build and deploy your code back to your repository and AEM Cloud Service Environment.
