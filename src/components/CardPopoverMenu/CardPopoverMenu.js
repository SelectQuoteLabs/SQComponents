import React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import KabobIcon from '@material-ui/icons/MoreVert';
import cssVars from '../../styles/cssVars';
import OverflowPopover from './OverflowPopover';

const useTabStyles = makeStyles({
  root: {
    '& > span': {
      flexDirection: 'row',
      justifyContent: 'flex-end',
    },
  },
});

const indicatorInlineStyles = {
  style: {
    backgroundColor: 'unset',
  },
};

function CardPopoverMenu({disabled = false, tabs, selectedTab, selectTab}) {
  const tabClasses = useTabStyles();
  const [anchorElement, setAnchorElement] = React.useState(null);

  const overflowTabs = tabs.filter(tab => {
    return tab.value !== selectedTab.value;
  });

  const openOverflowPopover = event => {
    if (!disabled) {
      setAnchorElement(event.currentTarget);
    }
  };

  const closeOverflowPopover = () => {
    setAnchorElement(null);
  };

  const {
    colors: {spanishOrange},
    fontWeights: {bold},
  } = cssVars;

  return (
    <>
      <Tabs
        TabIndicatorProps={indicatorInlineStyles}
        value={selectedTab.value}
        onClick={openOverflowPopover}
      >
        {tabs.length ? (
          <Tab
            className={tabClasses.root}
            key={selectedTab.value}
            disabled={disabled}
            disableRipple={true}
            style={{
              fontWeight: bold,
              color: spanishOrange,
              padding: '0 6px',
            }}
            label={
              <>
                <Typography
                  style={{
                    color: spanishOrange,
                    fontWeight: 700,
                  }}
                  variant="subtitle2"
                >
                  {selectedTab.label}
                </Typography>
                {tabs.length ? (
                  <KabobIcon
                    color="primary"
                    style={{height: '24px', width: '24px', marginLeft: '6px'}}
                  />
                ) : null}
              </>
            }
            value={selectedTab.value}
          />
        ) : null}
      </Tabs>
      {overflowTabs.length ? (
        <OverflowPopover
          anchorEl={anchorElement}
          overflowTabs={overflowTabs}
          setSelectedTabValue={selectTab}
          onClose={closeOverflowPopover}
        />
      ) : null}
    </>
  );
}

CardPopoverMenu.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
      body: PropTypes.node,
      disabled: PropTypes.bool,
    })
  ).isRequired,
  disabled: PropTypes.bool,
  selectTab: PropTypes.func.isRequired,
  selectedTab: PropTypes.shape({
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    body: PropTypes.node,
    disabled: PropTypes.bool,
  }).isRequired,
};

export default CardPopoverMenu;
