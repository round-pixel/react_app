const Image = ({ src, width="70px", height="40px", alt="No image" }) => (
  DOM.img(
    {
      src: src,
      width: width,
      height: height,
      alt: alt
    }
  )
);
