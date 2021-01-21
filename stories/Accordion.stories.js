import React from 'react';
import {withInfo} from '@storybook/addon-info';
import {withKnobs, boolean} from '@storybook/addon-knobs';
import {Accordion} from '../src';

import markdown from '../notes/Accordion.md';

export default {
  title: 'Accordion',
  decorators: [withInfo, withKnobs],
  parameters: {
    notes: {markdown},
  },
};

export const accordionUncontrolled = () => {
  const accordionPanels = [
    {
      title: 'Panel One',
      subtitles: ['Available', 'Pitched : 05/05/2021'],
      name: 'one',
      body: 'Lorem ipsum',
      isInitiallyExpanded: true,
    },
    {
      title: 'Panel Two',
      subtitles: ['Unavailable', 'Pitched : N/A'],
      isDisabled: true,
      name: 'two',
      body: (
        <>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
            rutrum consectetur nisl, ut porttitor felis porta eget. Donec quam
            tortor, sagittis a risus ut, aliquam euismod ligula. Aenean ipsum
            neque, bibendum eu ipsum vel, ultrices scelerisque neque. Aliquam
            fermentum nibh quis ante vestibulum condimentum. In viverra, libero
            at interdum commodo, mauris tellus consequat arcu, id ultrices nisi
            tortor vel sem. Nam accumsan lorem nunc, eu semper metus blandit id.
            Nunc cursus tortor tempus eros mollis ultrices. Fusce sed nulla
            massa. Phasellus non eros vel velit convallis euismod. Nulla iaculis
            rutrum sem.
          </p>

          <p>
            Pellentesque habitant morbi tristique senectus et netus et malesuada
            fames ac turpis egestas. Proin diam sapien, commodo non tortor eu,
            cursus iaculis lorem. In hac habitasse platea dictumst. Curabitur
            nibh risus, ornare nec orci a, suscipit finibus arcu. Integer vitae
            enim consequat, posuere tellus eu, varius dolor. Fusce dictum
            porttitor interdum. Nam gravida orci turpis, at pulvinar velit
            volutpat vel. Sed porttitor, magna sed pulvinar lobortis, mauris
            lorem ullamcorper mauris, ac rhoncus erat tellus sit amet mi. Nam
            ornare tempor magna nec suscipit. Integer ac congue mauris.
          </p>
        </>
      ),
    },
    {
      title: 'Panel Three',
      subtitles: ['Available', 'Pitched : Never'],
      name: 'three',
      body: 'Lorem ipsum dolor sit amet',
      onClick: () => alert('Click!'),
    },
  ];

  return (
    <div style={{width: '45rem', height: '80vh'}}>
      <Accordion accordionPanels={accordionPanels} />
    </div>
  );
};

export const accordionControlled = () => {
  const accordionPanels = [
    {
      title: 'Panel One',
      name: 'one',
      body: (
        <p style={{padding: '0 10px'}}>
          Toggle the knob checkbox to toggle the open state of this panel.
        </p>
      ),
      isInitiallyExpanded: true,
      isPanelExpanded: boolean(
        'isPanelExpanded',
        true,
        'Demo of the Accordion being a controlled component programatically opening/closing Panel One'
      ),
      expandPanel: () => {}, // noop, this would be setState in a component
    },
    {
      title: 'Panel Two',
      name: 'two',
      body: 'Lorem ipsum dolor sit amet',
    },
    {
      title: 'Panel Three',
      name: 'three',
      body: 'Lorem ipsum dolor sit amet',
    },
  ];

  return (
    <div style={{width: '540px', height: '40vh'}}>
      <Accordion accordionPanels={accordionPanels} />
    </div>
  );
};
