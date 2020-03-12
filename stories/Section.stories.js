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
    </SectionBody>
  </Section>
);
