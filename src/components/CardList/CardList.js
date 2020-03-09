import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
// import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Collapse from '@material-ui/core/Collapse';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

function CardList({headerContent, children, width, initiallyExpanded = true}) {
  const [expanded, setExpanded] = React.useState(initiallyExpanded);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card style={{width: width ? width : ''}}>
      <CardHeader
        action={
          <div>
            <IconButton
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </IconButton>
          </div>
        }
        title={headerContent}
      />
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent style={{height: '13.25rem', overflow: 'auto'}}>
          Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet
          over medium-high heat. Add chicken, shrimp and chorizo, and cook,
          stirring occasionally until lightly browned, 6 to 8 minutes. Transfer
          shrimp to a large plate and set aside, leaving chicken and chorizo in
          the pan. Add pimentón, bay leaves, garlic, tomatoes, onion, salt and
          pepper, and cook, stirring often until thickened and fragrant, about
          10 minutes. Add saffron broth and remaining 4 1/2 cups chicken broth;
          bring to a boil. Add rice and stir very gently to distribute. Top with
          artichokes and peppers, and cook without stirring, until most of the
          liquid is absorbed, 15 to 18 minutes. Reduce heat to medium-low, add
          reserved shrimp and mussels, tucking them down into the rice, and cook
          again without stirring, until mussels have opened and rice is just
          tender, 5 to 7 minutes more. (Discard any mussels that don’t open.)
          {children}
        </CardContent>
      </Collapse>
    </Card>
  );
}

CardList.propTypes = {
  /** boolean to override default behavior of intially expanded */
  initiallyExpanded: PropTypes.bool.isRequired,
  /** Elements to be rendered in the list in the card. */
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  /** optional prop to expand the width of the card.  Default is auto to children elements */
  width: PropTypes.string,
  /** Tab header to be desplayed. */
  headerContent: PropTypes.string,
};

export default CardList;
