// @flow

import React, { type Node } from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import Heading from './Heading';

storiesOf('Elements', module)
  .addDecorator(withInfo({ header: false, inline: true, source: false }))
  .add(
    'Heading',
    (): Node => (
      <div>
        <Heading level={1} size="lg" family="primary" weight="bold">
          Heading
        </Heading>
        <hr />
        <Heading level={2} size="sm">
          Level:
        </Heading>
        <p>
          Defines the H tag number for semantice reasons independantly from its
          size:
        </p>
        <Heading level={1} size="xs">
          Heading (h1)
        </Heading>
        <Heading level={2} size="xs">
          Heading (h2)
        </Heading>
        <Heading level={3} size="xs">
          Heading (h3)
        </Heading>
        <Heading level={4} size="xs">
          Heading (h4)
        </Heading>
        <hr />
        <Heading level={2} size="sm">
          Size:
        </Heading>
        <p>Defines the size of the H independantly from its semanticw</p>
        <Heading level={3} size="xs">
          Heading (h3)
        </Heading>
        <Heading level={3} size="sm">
          Heading (h3)
        </Heading>
        <Heading level={3} size="md">
          Heading (h3)
        </Heading>
        <Heading level={3} size="lg">
          Heading (h3)
        </Heading>
        <hr />
        <Heading level={2} size="sm">
          Weight:
        </Heading>
        <Heading level={3} size="xs" weight="light">
          Heading
        </Heading>
        <Heading level={3} size="xs" weight="normal">
          Heading
        </Heading>
        <Heading level={3} size="xs" weight="bold">
          Heading
        </Heading>
        <hr />
        <Heading level={2} size="sm">
          Family:
        </Heading>
        <Heading level={3} size="xs" family="primary">
          Heading (primary)
        </Heading>
        <Heading level={3} size="xs" family="secondary">
          Heading (secondary)
        </Heading>
        <hr />
      </div>
    ),
  );
