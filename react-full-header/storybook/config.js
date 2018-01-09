import { configure, addDecorator } from '@storybook/react';

import '../css/main.css';

function loadStories() {
  require('../stories/Main.js');
}

configure(loadStories, module);
