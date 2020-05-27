const generateFileFromTemplate = require('@momentum-ui/utils/src/generateFileFromTemplate');
const path = require('path');
const colorData = require('@momentum-ui/tokens/dist/colors.json');
colorData.prefix = 'md';

const generateColorsFromTokens = async () => {
  await generateFileFromTemplate(
    path.resolve(__dirname, '../scss/colors'),
    'settings-base.scss',
    colorData,
    path.resolve(__dirname, '../templates/colors-settings.hbs')
  );
  await generateFileFromTemplate(
    path.resolve(__dirname, '../scss/colors'),
    'utilities.scss',
    colorData,
    path.resolve(__dirname, '../templates/colors.hbs')
  );
};

generateColorsFromTokens();
