import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card from 'material-ui/Card';
import Header from './Header';
import Image from './Image';
import Body from './Body';
import Footer from './Footer';
import styles from './styles';

class MyCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = { expanded: false };
  }

  handleExpandClick() {
    this.setState({ expanded: !this.state.expanded });
  }

  render() {
    const { classes, metaInfo, message,
      id, likes, image } = this.props;

    return (
      <div>
        <Card className={classes.card}>
          <Header
            metaInfo={metaInfo}
            message={message}
          />
          <Image image={image}/>
          <Body />
          <Footer
            id={id}
            likes={likes}
          />
        </Card>
      </div>
    );
  }
}

MyCard.defaultProps = {
  id: 0,
  image: {
    src: '/images/river.jpg',
  },
  metaInfo: {},
};

MyCard.propTypes = {
  classes: PropTypes.object.isRequired,
  metaInfo: PropTypes.object,
  message: PropTypes.string,
  id: PropTypes.number,
  likes: PropTypes.number,
  image:PropTypes.object,
};

export default withStyles(styles)(MyCard);
