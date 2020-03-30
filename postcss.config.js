const purgecss = require('@fullhuman/postcss-purgecss')({
  // Specify the paths to all of the template files in your project
  content: ['./pages/**/*.{js,jsx,ts,tsx}', './client/**/*.{js,jsx,ts,tsx}'],

  // Include any special characters you're using in this regular expression
  defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
});

module.exports = {
  plugins: [
    require('postcss-import'),
    require('tailwindcss'),
    // process.env.NODE_ENV === 'production' ? purgecss : undefined,
    require('postcss-preset-env')({ stage: 1 }),
    process.env.NODE_ENV === 'production' ? require('cssnano') : undefined,
  ],
};
