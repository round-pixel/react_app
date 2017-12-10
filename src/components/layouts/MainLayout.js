import React from 'react';
import PropTypes from 'prop-types';

import { Navbar,  NavbarBrand, Nav, NavItem,
  NavLink, Container } from 'reactstrap';

import Link from 'components/blog/elements/Link';
import SearchBlock from 'components/layouts/containers/SearchBlock';

import styles from 'constants/styles';

const MainLayout = ({ children }) => (
  <div>
    <Header />
    <Container>
      { children }
    </Container>
  </div>
);

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = { isOpen: false };
  }

  toggle() {
    this.setState({ isOpen: !this.state.isOpen });
  }

  render() {
    return (
      <Navbar color="info" fixed="top">
        <Container>
          <NavbarBrand tag={Link} to="/" style={ styles.logoLinkStyle }>
            The Nature
          </NavbarBrand>
          <SearchBlock />
          <Nav>
            <NavItem>
              <NavLink tag={Link} to="/about" style={ styles.headerLinkStyle }>
                About
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/contact" style={ styles.headerLinkStyle }>
                Contact
              </NavLink>
            </NavItem>
          </Nav>
        </Container>
      </Navbar>
    );
  }
}

export default MainLayout;

MainLayout.propTypes = {
  children: PropTypes.object
};
