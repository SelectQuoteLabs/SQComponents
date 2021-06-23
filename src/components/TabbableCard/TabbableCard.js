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

const CARD_ID_PREFIX = 'tabbable-card-id';

const useStyles = makeStyles(() => ({
  card: {
    height: '100%',
    width: '100%',
  },
}));

const useHeaderStyles = makeStyles(() => ({
  root: {
    borderBottom: '1px solid var(--color-lightGray)',
    height: 'var(--card-header-height)',
  },
  action: {
    marginTop: '-18px',
    marginRight: '-20px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
}));

const useContentStyles = makeStyles(theme => ({
  root: {
    height: '100%',
    padding: `${theme.spacing(2)}px ${theme.spacing(3)}px`,
    overflowY: 'auto',
  },
}));

function TabbableCard({tabs, title = '', isAutoHeight = false, cardStyles}) {
  const classes = useStyles();
  const headerClasses = useHeaderStyles();
  const contentClasses = useContentStyles();

  const [selectedTab, setSelectedTab] = React.useState(tabs?.[0] || {});

  const formattedTitle = React.useMemo(() => title.replace(/\s/g, '-'), [
    title,
  ]);

  const [heightToUse, setHeightToUse] = React.useState(0);

  React.useEffect(() => {
    const currentElement = document.getElementById(
      `${CARD_ID_PREFIX}-${formattedTitle}`
    );

    const topOffset = currentElement?.getBoundingClientRect().top;
    const offsetBasedHeight = `calc(100vh - ${topOffset}px - 24px)`;

    const parentHeight = currentElement.parentElement.clientHeight;
    const parentTopOffset = currentElement.parentElement.getBoundingClientRect()
      .top;
    const topDifferential = topOffset - parentTopOffset;
    const maxOffsetBasedHeight = `calc(${parentHeight}px - ${topDifferential}px)`;

    const calculatedHeight = `min(${offsetBasedHeight}, ${maxOffsetBasedHeight})`;

    const heightToUse = (isAutoHeight && calculatedHeight) || '100%';
    setHeightToUse(heightToUse);
  }, [formattedTitle, isAutoHeight]);

  const formattedMenuOptions = tabs?.map(tab => {
    const {id, label, isDisabled} = tab;
    return {
      id,
      label,
      onClick: () => setSelectedTab(tab),
      isDisabled: Boolean(isDisabled),
    };
  });

  return (
    <Card
      id={`${CARD_ID_PREFIX}-${formattedTitle}`}
      raised
      className={classes.card}
      style={{height: heightToUse, ...cardStyles}}
    >
      <CardHeader
        title={title}
        classes={headerClasses}
        action={
          formattedMenuOptions && (
            <>
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
            </>
          )
        }
      />
      <CardContent classes={contentClasses}>{selectedTab?.body}</CardContent>
    </Card>
  );
}

TabbableCard.propTypes = {
  /** Array of menu options with a body property that will be what is displayed inside the Card when selected */
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      label: PropTypes.string.isRequired,
      body: PropTypes.node.isRequired,
      isDisabled: PropTypes.bool,
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
