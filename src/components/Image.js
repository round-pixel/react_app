import PropTypes from 'prop-types';
import DOM from 'react-dom-factories';


const Image = ({ src, width, height, alt }) => (
  DOM.img(
    {
      src,
      width,
      height,
      alt
    }
  )
);

Image.defaultProps = {
  src: 'https://tasmedes.nl/wp-content/themes/nucleare-pro/images/no-image-box.png',
  width: '70px',
  height:  '40px',
  alt: 'No imag'
};

Image.propTypes = {
  src: PropTypes.string,
  width: PropTypes.string,
  height:  PropTypes.string,
  alt: PropTypes.string
};
