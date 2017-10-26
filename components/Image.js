const Image = ({ src: src, width: width='70px', height: height="40px", alt: alt="No image" }) => (
  DOM.img(
    {
      src: src,
      width: width,
      height: height,
      alt: alt
    }
  )
);
