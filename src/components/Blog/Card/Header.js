import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { CardHeader } from 'material-ui/Card';
import Avatar from 'material-ui/Avatar';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui-icons/MoreVert';
import Typography from 'material-ui/Typography';
import styles from './styles';
import dateToString from 'constants/date';

function Header(props) {
  const { classes, metaInfo, message } = props;

  return (
    <CardHeader
      avatar={
        <Avatar aria-label="Recipe" className={classes.avatar}>
          {metaInfo.createdBy && metaInfo.createdBy.substring(0,2)}
        </Avatar>
      }
      action={
        <IconButton>
          <MoreVertIcon />
        </IconButton>
      }
      title={
        <Typography color="default" style={{fontWeight: 'bold'}}>
          { message }
        </Typography>
      }
      subheader={
        (metaInfo.createdAt && `Posted: ${dateToString(metaInfo.createdAt)}. `) +
        (metaInfo.updatedAt && `Updated: ${dateToString(metaInfo.updatedAt)}`)
      }
    />
  );
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
  metaInfo: PropTypes.object,
  message: PropTypes.string
};

export default withStyles(styles)(Header);
