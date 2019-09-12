const path = require('path');
const { version } = require('./package');
const {
  template,
  theme,
} = require('./stylequide.styles');

module.exports = {
  title: 'UI Components',
  version,
  /** use template for styles from cdn
   * comment require section
   */
  template,
  theme,
  getComponentPathLine(componentPath) {
    const dir = path.dirname(componentPath);
    const name = dir.split('/').slice(-1)[0];

    return `import ${name} from 'ui-components/${dir};`;
  },
  usageMode: 'expand',
  pagePerSection: true,
  sections: [
    {
      name: 'Components',
      components: './src/components/**/*.js',
      content: './src/components/README.md',
      ignore: [
        './src/components/index.js',
      ],
      sectionDepth: 1,
    },
  ],
  /** for development use styles from node_modules,
   * can use npm link
   */
  // require: [path.join(__dirname, 'node_modules/@quizzy/static-pages/css/style.css')],
};
