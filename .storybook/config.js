import { configure } from '@storybook/react';

const componentStories = require.context(
  '../src/components',
  true,
  /story.js$/,
);

const loadStories = () => {
  componentStories.keys().forEach(componentStories);
};

configure(loadStories, module);
