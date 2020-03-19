import React from 'react';
import PropTypes from 'prop-types';
import {Tabs, Tab} from 'material-ui/Tabs';
import Kabob from 'material-ui/svg-icons/navigation/more-vert';
import cssVars from '../../styles/cssVars';
import OverflowPopover from './OverflowPopover';
import './CardPopoverMenu.css';

class CardPopoverMenu extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOverflowPopoverOpen: false,
      overflowPopoverAnchorElement: null,
      allTabs: null,
    };

    this.tabsContainerNODE = null;
    this.tabsNodes = [];
    this.minWidth = 140;

    this.openOverflowPopover = this.openOverflowPopover.bind(this);
    this.closeOverflowPopover = this.closeOverflowPopover.bind(this);
    this.calculateTabs = this.calculateTabs.bind(this);
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    const nextTabs = nextProps.tabs;
    const tabsDidChange = nextTabs && nextTabs !== prevState.allTabs;

    if (tabsDidChange) {
      return {
        viewableTabs: nextTabs,
        overflowTabs: [],
        allTabs: nextProps.tabs,
      };
    }
    return null; // no changes to state are necessary
  }

  componentDidMount() {
    this.calculateTabs();
  }

  componentDidUpdate(prevProps) {
    const {tabs, selectedTab} = this.props;

    const tabsDidChange =
      tabs &&
      (tabs !== prevProps.tabs || selectedTab !== prevProps.selectedTab);

    if (tabsDidChange) {
      this.calculateTabs();
      this.setState({
        isOverflowPopoverOpen: false,
      });
    }
  }

  calculateTabs() {
    const {tabs, selectedTab} = this.props;

    this.setState(() => ({
      viewableTabs: tabs.filter(tab => {
        return tab.label === selectedTab.label;
      }),
      overflowTabs: tabs.filter(tab => {
        return tab.label !== selectedTab.label;
      }),
    }));
  }

  openOverflowPopover(event) {
    event.preventDefault();
    const targetElement = event.currentTarget;

    this.setState(() => ({
      isOverflowPopoverOpen: true,
      overflowPopoverAnchorElement: targetElement,
    }));
  }

  closeOverflowPopover() {
    this.setState(() => ({isOverflowPopoverOpen: false}));
  }

  render() {
    const {selectedTab, selectTab, disabled} = this.props;
    const {
      viewableTabs,
      overflowTabs,
      isOverflowPopoverOpen,
      overflowPopoverAnchorElement,
    } = this.state;
    const {
      colors: {teal, slate, spanishOrange},
      fontWeights: {bold, normal},
    } = cssVars;

    return (
      <div
        className="cardPopoverMenu"
        ref={e => {
          this.tabsContainerNODE = e;
        }}
      >
        <Tabs
          value={selectedTab.value}
          onClick={this.openOverflowPopover}
          onChange={selectTab}
          inkBarStyle={{backgroundColor: disabled}}
          tabItemContainerStyle={{backgroundColor: 'inherit'}}
        >
          {viewableTabs.map((tab, index) => {
            const isSelected = selectedTab.value === tab.value;
            return (
              isSelected && (
                <Tab
                  className="cardPopoverMenu__kabob"
                  key={tab.label}
                  buttonStyle={{
                    fontWeight: isSelected ? bold : normal,
                    color:
                      disabled || tab.disabled
                        ? slate
                        : isSelected
                        ? spanishOrange
                        : teal,
                    padding: '0 0.5rem',
                  }}
                  label={
                    <>
                      <Kabob />
                      <span>&nbsp;&nbsp;</span>
                      {tab.label}
                    </>
                  }
                  value={tab.value}
                  disabled={disabled || tab.disabled}
                  ref={input => {
                    this.tabsNodes[index] = input;
                  }}
                />
              )
            );
          })}
        </Tabs>

        {overflowTabs.length > 0 && (
          <div>
            <OverflowPopover
              isOpen={isOverflowPopoverOpen}
              anchorEl={overflowPopoverAnchorElement}
              options={overflowTabs}
              selectedOption={selectedTab}
              selectOption={selectTab}
              handleClose={this.closeOverflowPopover}
            />
          </div>
        )}
      </div>
    );
  }
}

CardPopoverMenu.propTypes = {
  tabs: PropTypes.array.isRequired,
  selectedTab: PropTypes.object.isRequired,
  selectTab: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
};

CardPopoverMenu.defaultProps = {
  disabled: false,
};

export default CardPopoverMenu;
