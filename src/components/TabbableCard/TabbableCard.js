import React from 'react';
import PropTypes from 'prop-types';
import {Card, CardHeader, CardContent, makeStyles} from '@material-ui/core';
import CardPopoverMenu from '../CardPopoverMenu';
import {useAutoHeight} from '../../hooks/useAutoHeight';

const useStyles = makeStyles(() => ({
  card: {
    height: '100%',
    width: '100%',
  },
}));

function TabbableCard({tabs, title = '', isAutoHeight = false, cardStyles}) {
  const classes = useStyles();

  const {containerRef, autoHeight} = useAutoHeight();
  const height = (isAutoHeight && autoHeight) || '100%';

  const [selectedTab, setSelectedTab] = React.useState(tabs?.[0] || {});

  const handleTabSelected = selectedTabValue => {
    const selectedTab = tabs.find(({value}) => value === selectedTabValue);
    setSelectedTab(selectedTab);
  };

  return (
    <Card
      ref={containerRef}
      raised
      className={classes.card}
      style={{height, ...cardStyles}}
    >
      <CardHeader
        title={title}
        action={
          tabs && (
            <CardPopoverMenu
              tabs={tabs}
              selectedTab={selectedTab}
              selectTab={handleTabSelected}
            />
          )
        }
      />
      <CardContent>{selectedTab?.body}</CardContent>
    </Card>
  );
}

TabbableCard.propTypes = {
  /** Array of menu options with a body property that will be what is displayed inside the Card when selected */
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      body: PropTypes.node.isRequired,
      disabled: PropTypes.bool,
    })
  ),
  /** The Title for the Header component */
  title: PropTypes.string.isRequired,
  /** Boolean to determine whether the Card should determine it's own height or use 100% of its parent's height */
  isAutoHeight: PropTypes.bool,
  /** Optional styling on the card */
  cardStyles: PropTypes.object,
};

export default TabbableCard;
