import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { CardActions } from 'material-ui/Card';
import LikeContainer from 'containers/LikeContainer';
import Button from 'material-ui/Button';
import styles from './styles';
import { postsPath } from 'helpers/routes';
import Link from 'components/Shared/Link';

function Footer(props) {
  const { classes, id } = props;

  return (
    <CardActions disableActionSpacing>
      <Link to={ postsPath(id) } >
        <Button dense color="primary">
          Read more
        </Button>
      </Link>
      <div className={classes.flexGrow} />
      <LikeContainer {...props} />
    </CardActions>
  );
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Footer);
