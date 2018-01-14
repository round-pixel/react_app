const styles = theme => ({
  card: {
    maxWidth: '100%',
    margin: '15px',
  },
  media: {
    height: 194,
  },
  expand: {
    transform: 'rotate(0deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: '#FF4081',
  },
  flexGrow: {
    flex: 'auto 1 1',
  },
  likeCount: {
    fontWeight: 'bolder',
    padding: '0 10px',
    display: 'inline-flex',
  }
});

export default styles;
