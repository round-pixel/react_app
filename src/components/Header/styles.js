const styles = theme => ({
  root: {
    width: '100%',
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  button: {
    margin: theme.spacing.unit,
  },
  link: {
    color: 'white',
    textDecoration: 'none',
    '&:hover': {
      color: 'white',
    }
  },
  container: {
    padding: '0 10%',
  }
});

export default styles;
