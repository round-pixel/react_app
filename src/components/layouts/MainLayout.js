import React from 'react';
import PropTypes from 'prop-types';

import { Container, Navbar, NavbarBrand, Button } from 'reactstrap';

import Link from 'components/blog/elements/Link';

import styles from 'components/constants/styles';

import history from 'components/helpers/history';

const MainLayout = ({ children }) => (
  <div>
    <Container>
      <Header />
      { children }
    </Container>
  </div>
);

MainLayout.propTypes = {
  children: PropTypes.node
};

const Header = () => (
  <Navbar color="info" fixed="top">
    <NavbarBrand className="text-white">
      <Link to="/" style={ styles.logoLinkStyle }>
        The Nature
      </Link>
    </NavbarBrand>
    <GoBackButton />
  </Navbar>
);

const GoBackButton = () => (
  <Button color="danger" onClick={ () => history.goBack() }>
    Back...
  </Button>
);

export default MainLayout;
