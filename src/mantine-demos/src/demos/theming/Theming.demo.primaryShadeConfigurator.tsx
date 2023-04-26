import React from 'react';
import { MantineDemo } from '@mantine/ds';
import { Button, Group, MantineProvider } from '@mantine/core';

const code = (props: any) => `
import { MantineProvider, Button, Group } from '@mantine/core';

function Demo() {
  return (
    <MantineProvider theme={{ primaryShade: ${props.primaryShade} }}>
      <Group>
        <Button>Filled</Button>
        <Button variant="light">Light</Button>
        <Button variant="outline">Outline</Button>
      </Group>
    </MantineProvider>
  );
}
`;

function Wrapper(props: any) {
  return (
    <div id="primary-color-demo-root">
      <MantineProvider
        cssVariablesSelector="#primary-color-demo-root"
        theme={{ primaryShade: props.primaryShade }}
      >
        <Group>
          <Button>Filled</Button>
          <Button variant="light">Light</Button>
          <Button variant="outline">Outline</Button>
        </Group>
      </MantineProvider>
    </div>
  );
}

export const primaryShadeConfigurator: MantineDemo = {
  type: 'configurator',
  component: Wrapper,
  code,
  centered: true,
  controls: [
    {
      type: 'number',
      prop: 'primaryShade',
      initialValue: 6,
      libraryValue: '__none__',
      min: 0,
      max: 9,
    },
  ],
};
