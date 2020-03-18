import React from 'react';
import markdown from '../notes/Section.md';
import {withInfo} from '@storybook/addon-info';

import {Section, SectionHeader, SectionBody} from '../src';

export default {
  title: 'Section',
  decorators: [withInfo],
  parameters: {
    notes: {markdown},
  },
};

export const simpleSection = () => (
  <Section>
    <SectionHeader>Section Header</SectionHeader>
    <SectionBody>
      {/* this part is totally up to the consumer */}
      <div style={{display: 'flex'}}>
        <div style={{padding: '1rem', border: '1px solid blue'}}>
          Do whatever.
        </div>
        <div style={{padding: '1rem', border: '1px solid blue'}}>
          Maybe an input?
        </div>
        <div style={{padding: '1rem', border: '1px solid blue'}}>
          Or some static stuff.
        </div>
      </div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin mattis
        augue dui, nec posuere eros scelerisque ut. Maecenas in bibendum nisi.
        Quisque egestas hendrerit justo mollis scelerisque. Ut iaculis blandit
        magna, eget congue neque bibendum in. Ut dignissim nisl a erat mattis
        bibendum. Proin at elit et ante tempor maximus vitae vel tortor.
      </p>
      <p>
        Nunc commodo commodo mi, semper feugiat erat. Sed vitae condimentum
        urna. Nam eros orci, tincidunt lobortis ex id, eleifend pharetra nibh.
        Fusce aliquam diam in tortor fermentum, vel fermentum enim consectetur.
        Phasellus id ullamcorper eros. Nulla vel luctus turpis. Donec blandit
        urna enim. Ut sit amet lacus porttitor, condimentum urna quis, feugiat
        magna. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
        posuere cubilia Curae;
      </p>
    </SectionBody>
  </Section>
);

export const sectionWithActionHeader = () => (
  <Section>
    <SectionHeader>
      {/* consumer could get fancy and compose a button into the header */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'baseline',
        }}
      >
        <div>Section Header</div>
        <label
          style={{
            fontSize: '1rem',
            display: 'flex',
          }}
        >
          An input!
          <input type="checkbox" />
        </label>
      </div>
    </SectionHeader>
    <SectionBody>
      <div style={{display: 'flex'}}>
        <div style={{padding: '1rem', border: '1px solid blue'}}>
          Do whatever.
        </div>
        <div style={{padding: '1rem', border: '1px solid blue'}}>
          Maybe an input?
        </div>
        <div style={{padding: '1rem', border: '1px solid blue'}}>
          Or some static stuff.
        </div>
      </div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin mattis
        augue dui, nec posuere eros scelerisque ut. Maecenas in bibendum nisi.
        Quisque egestas hendrerit justo mollis scelerisque.
      </p>
      <p>
        Nunc commodo commodo mi, semper feugiat erat. Sed vitae condimentum
        urna. Nam eros orci, tincidunt lobortis ex id, eleifend pharetra nibh.
        Fusce aliquam diam in tortor fermentum, vel fermentum enim consectetur.
        Phasellus id ullamcorper eros. Nulla vel luctus turpis. Donec blandit
        urna enim. Ut sit amet lacus porttitor, condimentum urna quis, feugiat
        magna. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
        posuere cubilia Curae;
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin mattis
        augue dui, nec posuere eros scelerisque ut.
      </p>
      <p>
        Nunc commodo commodo mi, semper feugiat erat. Sed vitae condimentum
        urna. Nam eros orci, tincidunt lobortis ex id, eleifend pharetra nibh.
        Fusce aliquam diam in tortor fermentum, vel fermentum enim consectetur.
        Phasellus id ullamcorper eros.
      </p>
    </SectionBody>
  </Section>
);
