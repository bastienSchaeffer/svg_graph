import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, select } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';

import Button from './Button';

/*
  Dropdown knob Size
*/
const label = 'Size';
const sizeOptions = {
  Small: 'sm',
  Medium: 'md',
  large: 'lg',
};
const defaultValue = 'sm';

/*
  Button stories
*/
storiesOf('Elements', module)
  .addDecorator(withKnobs)
  .addDecorator(withInfo({ header: false, inline: true, source: false }))
  .add('Button', () => (
    <div>
      <h1>Button</h1>
      <hr />
      <h2>Size</h2>
      <Button size="sm">Button: sm</Button>
      <Button size="md">Button: md</Button>
      <Button size="lg">Button: lg</Button>
      <hr />
      <h2>Type</h2>
      <Button palette="primary">Button: primary</Button>
      <Button palette="secondary">Button: secondary</Button>
      <Button palette="naked">Button: naked</Button>
      <hr />
      <h2>Other:</h2>
      <Button disabled={true}>Button: :disabled</Button>
      <Button fullWidth={true}>Button: fullWidth</Button>
      <hr />
    </div>
  ));

// size={select(label, sizeOptions, defaultValue)}
// {text('Label', 'Button')}
