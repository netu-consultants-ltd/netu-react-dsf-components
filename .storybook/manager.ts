import { addons } from '@storybook/addons';
import { create } from '@storybook/theming';

const theme = create({
  base: 'light',
  brandTitle: 'netu-react-dsf-components',
  brandUrl: 'https://github.com/netu-consultants-ltd/netu-react-dsf-components',
});

addons.setConfig({
  theme,
});
