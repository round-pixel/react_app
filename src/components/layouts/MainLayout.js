import React from 'react';

import { Navbar,  NavbarBrand, Nav, NavItem,
  NavLink, Container } from 'reactstrap';

import { Route } from 'react-router-dom';

import Link from 'components/blog/elements/Link';
import BlogPage from 'components/blog/containers/BlogPage';
import About from 'components/layouts/AboutPage';
import Contact from 'components/layouts/ContactPage';
import SearchBlock from 'components/layouts/containers/SearchBlock';

import styles from 'constants/styles';

const MainLayout = () => (
  <div>
    <Header />
    <Container>
      <Route path="/about" component={ About } />
      <Route path="/contact" component={ Contact } />
      <BlogPage />
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
