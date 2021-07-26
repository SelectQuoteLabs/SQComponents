/* eslint react-hooks/rules-of-hooks: 0 */
import React from 'react';
import {makeStyles} from '@material-ui/core';
import {withInfo} from '@storybook/addon-info';
import {withKnobs} from '@storybook/addon-knobs';
import {useArgs} from '@storybook/client-api';
import {ExpandingCard} from '../src';

export default {
  title: 'ExpandingCard',
  decorators: [withInfo, withKnobs],
};

export const expandingCard = () => {
  return (
    <div style={{width: '45rem', height: '80vh'}}>
      <ExpandingCard title="Test Card">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam rutrum
          consectetur nisl, ut porttitor felis porta eget. Donec quam tortor,
          sagittis a risus ut, aliquam euismod ligula. Aenean ipsum neque,
          bibendum eu ipsum vel, ultrices scelerisque neque. Aliquam fermentum
          nibh quis ante vestibulum condimentum. In viverra, libero at interdum
          commodo, mauris tellus consequat arcu, id ultrices nisi tortor vel
          sem. Nam accumsan lorem nunc, eu semper metus blandit id. Nunc cursus
          tortor tempus eros mollis ultrices. Fusce sed nulla massa. Phasellus
          non eros vel velit convallis euismod. Nulla iaculis rutrum sem.
        </p>

        <p>
          Pellentesque habitant morbi tristique senectus et netus et malesuada
          fames ac turpis egestas. Proin diam sapien, commodo non tortor eu,
          cursus iaculis lorem. In hac habitasse platea dictumst. Curabitur nibh
          risus, ornare nec orci a, suscipit finibus arcu. Integer vitae enim
          consequat, posuere tellus eu, varius dolor. Fusce dictum porttitor
          interdum. Nam gravida orci turpis, at pulvinar velit volutpat vel. Sed
          porttitor, magna sed pulvinar lobortis, mauris lorem ullamcorper
          mauris, ac rhoncus erat tellus sit amet mi. Nam ornare tempor magna
          nec suscipit. Integer ac congue mauris.
        </p>
      </ExpandingCard>
    </div>
  );
};

export const expandingCardWithSubheader = () => {
  return (
    <div style={{width: '45rem', height: '80vh'}}>
      <ExpandingCard title="Card" subheader="Testing">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam rutrum
          consectetur nisl, ut porttitor felis porta eget. Donec quam tortor,
          sagittis a risus ut, aliquam euismod ligula. Aenean ipsum neque,
          bibendum eu ipsum vel, ultrices scelerisque neque. Aliquam fermentum
          nibh quis ante vestibulum condimentum. In viverra, libero at interdum
          commodo, mauris tellus consequat arcu, id ultrices nisi tortor vel
          sem. Nam accumsan lorem nunc, eu semper metus blandit id. Nunc cursus
          tortor tempus eros mollis ultrices. Fusce sed nulla massa. Phasellus
          non eros vel velit convallis euismod. Nulla iaculis rutrum sem.
        </p>
      </ExpandingCard>
    </div>
  );
};

const tabs = [
  {
    label: 'First Tab',
    value: 'first-tab',
    body: <h3 style={{textAlign: 'center'}}>First Tab Content</h3>,
  },
  {
    label: 'Second Tab',
    value: 'second-tab',
    body: <h3 style={{textAlign: 'center'}}>Second Tab Content</h3>,
  },
  {
    label: 'Third Tab',
    value: 'third-tab',
    body: <h3 style={{textAlign: 'center'}}>Third Tab Content</h3>,
  },
];

export const expandingCardWithTabs = () => {
  return (
    <div style={{width: '45rem', height: '80vh'}}>
      <ExpandingCard title="Card" tabs={tabs} />
    </div>
  );
};

const ExternalControlStory = () => {
  const [{isCardExpanded}, setArgs] = useArgs();

  const toggleExpanded = isExpanded => {
    setArgs({isCardExpanded: isExpanded});
  };

  return (
    <div style={{width: '45rem', height: '80vh'}}>
      <ExpandingCard
        title="Open/Close with the knob"
        isCardExpanded={isCardExpanded}
        expandCard={toggleExpanded}
      >
        When fully implemented the open/close state can be triggered from the
        card or triggered from an outside source.
      </ExpandingCard>
    </div>
  );
};

export const expandingCardWithExternalControl = ExternalControlStory.bind({});

expandingCardWithExternalControl.argTypes = {
  isCardExpanded: {
    name: 'isCardExpanded',
    defaultValue: false,
    control: {type: 'boolean'},
  },
};

const useStyles = makeStyles(() => {
  return {
    card: {
      backgroundColor: 'dodgerblue',
      color: 'white',
      '& .MuiCardHeader-action': {
        borderColor: 'black',
      },
    },
    content: {
      backgroundColor: 'white',
      color: 'navy',
      fontSize: '14px',
      padding: '16px !important',
    },
    p: {
      margin: 0,
    },
  };
});

export const expandingCardWithCustomStyles = () => {
  const classes = useStyles();

  return (
    <div style={{width: '45rem', height: '80vh'}}>
      <ExpandingCard
        title="I'm pretty"
        cardClassName={classes.card}
        contentClassName={classes.content}
      >
        <p className={classes.p}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam rutrum
          consectetur nisl, ut porttitor felis porta eget. Donec quam tortor,
          sagittis a risus ut, aliquam euismod ligula. Aenean ipsum neque,
          bibendum eu ipsum vel, ultrices scelerisque neque. Aliquam fermentum
          nibh quis ante vestibulum condimentum. In viverra, libero at interdum
          commodo, mauris tellus consequat arcu, id ultrices nisi tortor vel
          sem. Nam accumsan lorem nunc, eu semper metus blandit id. Nunc cursus
          tortor tempus eros mollis ultrices. Fusce sed nulla massa. Phasellus
          non eros vel velit convallis euismod. Nulla iaculis rutrum sem.
        </p>
      </ExpandingCard>
    </div>
  );
};

export const expandingCardWithAutoHeight = () => {
  return (
    <div
      style={{
        width: '45rem',
        height: '90vh',
        border: '2px solid black',
        padding: '8px',
      }}
    >
      <div
        style={{
          height: '100px',
          border: '2px solid grey',
          textAlign: 'center',
          marginBottom: '8px',
        }}
      >
        <p>Sibling</p>
      </div>
      <ExpandingCard title="Card" isAutoHeight={true}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam rutrum
          consectetur nisl, ut porttitor felis porta eget. Donec quam tortor,
          sagittis a risus ut, aliquam euismod ligula. Aenean ipsum neque,
          bibendum eu ipsum vel, ultrices scelerisque neque. Aliquam fermentum
          nibh quis ante vestibulum condimentum. In viverra, libero at interdum
          commodo, mauris tellus consequat arcu, id ultrices nisi tortor vel
          sem. Nam accumsan lorem nunc, eu semper metus blandit id. Nunc cursus
          tortor tempus eros mollis ultrices. Fusce sed nulla massa. Phasellus
          non eros vel velit convallis euismod. Nulla iaculis rutrum sem.
        </p>
      </ExpandingCard>
    </div>
  );
};
