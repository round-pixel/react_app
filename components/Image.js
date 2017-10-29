const Image = ({ src, width, height, alt }) => (
  DOM.img(
    {
      src: src,
      width: width,
      height: height,
      alt: alt
    }
  )
);

Image.defaultProps = {
    src: "https://tasmedes.nl/wp-content/themes/nucleare-pro/images/no-image-box.png",
    width: "70px",
    height:  "40px",
    alt: "No image"
};

Image.propTypes = {
  src: PropTypes.string,
  width: PropTypes.string,
  height:  PropTypes.string,
  alt: PropTypes.string
};
