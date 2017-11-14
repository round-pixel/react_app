import React from 'react';

import { Navbar,  NavbarBrand, Nav, NavItem,
  NavLink, Button, Container } from 'reactstrap';

import { Route } from 'react-router-dom';

import Link from 'components/blog/elements/Link';
import BlogPage from 'components/blog/ui/BlogPage';
import About from 'components/blog/view/AboutPage';
import Contact from 'components/blog/view/ContactPage';
import Post from 'components/blog/ui/Post';

import styles from 'components/constants/styles';

import history from 'components/helpers/history';

const MainLayout = () => (
  <div>
    <Header />
    <Container>
      <Route exact path="/" component={ BlogPage } />
      <Route path="/about" component={ About } />
      <Route path="/contact" component={ Contact } />
      <Route exact path="/posts/:id" component={ Post } />
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
          <NavbarBrand className="text-white">
            <Link to="/" style={ styles.logoLinkStyle }>
              The Nature
            </Link>
          </NavbarBrand>
          <Nav className="ml-auto" >
            <NavItem>
              <NavLink>
                <Link to="/about" style={ styles.headerLinkStyle }>
                  About
                </Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink >
                <Link to="/contact" style={ styles.headerLinkStyle }>
                  Contact
                </Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <GoBackButton />
            </NavItem>
          </Nav>
        </Container>
      </Navbar>
    );
  }
}

const GoBackButton = () => (
  <Button color="danger" onClick={ () => history.goBack() }>
    Back...
  </Button>
);

export default MainLayout;
