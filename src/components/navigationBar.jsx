import React, { Component } from "react";
import { Avatar, Table } from "antd";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

class NavigationBar extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.toggleCollapse = this.toggle.bind(this);
    this.state = {
      isOpen: false,
      isCollapsed: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  toggleCollapse() {
    this.state({
      isCollapsed: !this.state.isCollapsed
    });
  }
  getHideStyle() {
    let styles = "styles.";
    styles += this.state.isOpen === 0 ? "hide" : "nhide";
    return styles;
  }

  render() {
    const styles = {
      //cara inline css
      tinggi: {
        height: "auto"
      },
      hide: {
        visibility: "hidden"
      },
      nHide: {
        visibility: "visible"
      }
    };

    return (
      <React.Fragment>
        <Navbar className="bg-cl-bl" dark expand="md">
          <span className="border-right-op" /*style={styles.tinggi}*/>
            {/* //cara inline css */}
            <NavbarBrand className="navBarTitle ml-5 " href="/">
              CREATABLE
            </NavbarBrand>
          </span>
          <img
            className="imgSearch ml-3"
            src={require("../assets/img/search.png")}
          />

          <span className="searchBarStyle">
            <form className="form-inline">
              <input
                className="form-control mr-1"
                placeholder="Find your idea, project or interest"
              />
            </form>
          </span>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="mr-2 ml-auto mt-2 " navbar>
              <NavItem>
                <NavLink>IDEA</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/investment">INVEST</NavLink>
              </NavItem>
              <NavItem className="mr-2 border-right-most">
                <NavLink className="mr-2" href="/teamup">
                  TEAM UP
                </NavLink>
              </NavItem>

              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  <Avatar icon="user" />
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>Option 1</DropdownItem>
                  <DropdownItem>Option 2</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>Reset</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>

              {/* <NavbarToggler onClick={this.toggleCollapse} profiles />
              <Collapse isCollapsed={this.state.isCollapsed} profiles>
                <Nav className="ml-auto" profiles>
                  <NavItem>
                    <NavLink href="#">My Profile</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="#">Log Out</NavLink>
                  </NavItem>
                </Nav>
              </Collapse> */}
              {/*
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Profiles
                </DropdownToggle>
                <DropdownMenu profile>
                  <DropdownItem>My Profile</DropdownItem>
                  <DropdownItem>Log Out</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              */}
            </Nav>
          </Collapse>
        </Navbar>
      </React.Fragment>

      /* BS 4
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">
          Navbar
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Link
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" href="#">
                Disabled
              </a>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
            />
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
            >
              Search
            </button>
          </form>
        </div>
      </nav>
      */

      /*
      <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        <a className="navbar-brand">
          Navbar{" "}
          <span className="badge badge-pill badge-secondary">
            {this.props.totalCounters}
          </span>
        </a>
      </nav>

      */
    );
  }
}

export default NavigationBar;
