import React from 'react';
import {withKnobs, select} from '@storybook/addon-knobs';
import markdown from '../notes/Section.md';
import {withInfo} from '@storybook/addon-info';

import {Section, SectionHeader, SectionBody, TextButton} from '../src';

export default {
  title: 'Section',
  decorators: [withInfo, withKnobs],
  parameters: {
    notes: {markdown},
  },
};

export const simpleSection = () => (
  <Section>
    <SectionHeader title="Section Header" />
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

export const simpleSectionWithInformativeHeading = () => (
  <Section>
    <SectionHeader
      type={select('type', [
        null,
        'initial',
        'success',
        'warning',
        'error',
        'info',
      ])}
      title="Section Header"
      informativeHeading="I am an informative heading"
    />
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
    <SectionHeader title="Section Header">
      <TextButton onClick={() => alert('You are awesome.')} tooltip="Get TCPA">
        Get TCPA
      </TextButton>
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

export const sectionWithActionHeaderAndInformativeHeading = () => (
  <Section>
    <SectionHeader
      title="Section Header Lorem ipsum dolor too much text"
      type="error"
      informativeHeading="You've done something wrong"
    >
      <TextButton
        onClick={() => alert('You are awesome.')}
        tooltip="Text button with a lot of text"
      >
        Text button with a lot of text
      </TextButton>
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

export const sectionWithHeaderStyleOverrides = () => (
  <Section>
    <SectionHeader
      title="Section Header"
      containerStyles={{
        marginBottom: '5rem',
        borderTop: '1px solid var(--color-lightGray)',
      }}
    />
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
