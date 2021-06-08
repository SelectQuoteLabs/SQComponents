import React from 'react';
import PropTypes from 'prop-types';
import {
  Card,
  CardHeader,
  CardContent,
  makeStyles,
  Typography,
} from '@material-ui/core';
import {MoreVert as MoreVertIcon} from '@material-ui/icons';
import IconButtonMenu from '../IconButtonMenu';

const useStyles = makeStyles(theme => {
  return {
    card: {
      display: 'grid',
      gridTemplateColumns: '1fr',
      gridTemplateRows: 'auto 1fr auto',
      gridTemplateAreas: `'header' 'content' 'footer'`,
      width: '100%',
    },
    cardHeaderRoot: {
      gridArea: 'header',
      borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
      padding: `${theme.spacing(2)}px ${theme.spacing(3)}px`,
    },
    cardHeaderAction: {
      marginTop: 0,
      paddingTop: '8px',
    },
    cardContent: {
      gridArea: 'content',
      overflowY: 'auto',
      padding: `${theme.spacing(2)}px ${theme.spacing(3)}px`,
      width: 'auto',
      margin: 0,
    },
  };
});

function TabbableCard({
  tabs = [],
  title = '',
  isSelfBounding = false,
  cardStyles = {},
}) {
  const classes = useStyles();

  const [selectedTab, setSelectedTab] = React.useState(tabs[0]);

  const formattedTitle = React.useMemo(() => title.replace(/\s/g, '-'), [
    title,
  ]);

  const [heightToUse, setHeightToUse] = React.useState(0);

  React.useEffect(() => {
    const currentElement = document.getElementById(
      `sqform-scrollable-card-id-${formattedTitle}`
    );

    const topOffset = currentElement?.getBoundingClientRect().top;
    const offsetBasedHeight = `calc(100vh - ${topOffset}px - 24px)`;

    const parentHeight = currentElement.parentElement.clientHeight;
    const parentTopOffset = currentElement.parentElement.getBoundingClientRect()
      .top;
    const topDifferential = topOffset - parentTopOffset;
    const maxOffsetBasedHeight = `calc(${parentHeight}px - ${topDifferential}px)`;

    const calculatedHeight = `min(${offsetBasedHeight}, ${maxOffsetBasedHeight})`;

    const heightToUse = (isSelfBounding && calculatedHeight) || '100%';
    setHeightToUse(heightToUse);
  }, [formattedTitle, isSelfBounding]);

  const handleTabClick = tab => {
    setSelectedTab(tab);
  };

  const formattedMenuOptions = tabs.map(tab => {
    const {id, label} = tab;
    return {
      id,
      label,
      onClick: () => handleTabClick(tab),
      isDisabled: false,
    };
  });

  console.log({selectedTab, label: selectedTab.label});

  return (
    <Card
      id={`sqform-scrollable-card-id-${formattedTitle}`}
      raised={true}
      elevation={1}
      square={true}
      className={classes.card}
      style={{height: heightToUse, ...cardStyles}}
    >
      <CardHeader
        title={title}
        classes={{
          root: classes.cardHeaderRoot,
          action: classes.cardHeaderAction,
        }}
        titleTypographyProps={{variant: 'h4'}}
        action={
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'flex-end',
              alignItems: 'center',
            }}
          >
            <Typography>{selectedTab.label}</Typography>
            <IconButtonMenu
              menuItems={formattedMenuOptions}
              placement="bottom"
              tooltipTitle="Select View"
              IconComponent={() => <MoreVertIcon fontSize="large" />}
              selectedItem={formattedMenuOptions.find(
                ({id}) => id === selectedTab.id
              )}
              excludeSelectedItem
            />
          </div>
        }
      />
      <CardContent className={classes.cardContent}>
        {selectedTab?.body}
      </CardContent>
    </Card>
  );
}

TabbableCard.propTypes = {
  /** Array of menu options with a body property that will be what is displayed inside the Card when selected */
  tabs: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      label: PropTypes.string,
      body: PropTypes.node,
    })
  ),
  /** The Title for the Header component */
  title: PropTypes.string.isRequired,
  /** Boolean to determine whether the Card should determine it's own height or use 100% of its parent's height */
  isSelfBounding: PropTypes.bool,
  /** Optional styling on the card */
  cardStyles: PropTypes.object,
};

export default TabbableCard;
