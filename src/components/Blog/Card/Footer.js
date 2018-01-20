import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { CardActions } from 'material-ui/Card';
import LikeContainer from 'containers/LikeContainer';
import Button from 'material-ui/Button';
import styles from './styles';
import { postsPath, editPostPath } from 'helpers/routes';
import Link from 'components/Shared/Link';

function Footer(props) {
  const { classes, id } = props;

  return (
    <CardActions disableActionSpacing>
      <Link to={ postsPath(id) } >
        <Button color="primary">
          Read more
        </Button>
      </Link>
      <Link to={ editPostPath(id) } >
        <Button color="primary">
          Edit
        </Button>
      </Link>
      <div className={classes.flexGrow} />
      <LikeContainer {...props} />
    </CardActions>
  );
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
  id: PropTypes.number.isRequired,
};

export default withStyles(styles)(Footer);
