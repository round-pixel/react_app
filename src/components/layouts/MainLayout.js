import React from 'react';
import PropTypes from 'prop-types';

import { Container, Navbar, NavbarBrand } from 'reactstrap';

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
  <Navbar color="danger" fixed="top">
    <NavbarBrand className="text-white">
      The Nature
    </NavbarBrand>
  </Navbar>
);

export default MainLayout;
