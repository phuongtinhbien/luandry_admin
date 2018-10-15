import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Collapse } from 'react-bootstrap';


class Nav extends Component {

  state = {};

  render() {
    let { location } = this.props;
    return (
      <ul className="nav">
        <li className={location.pathname === '/' ? 'active' : null}>
          <Link to="/">
            <i className="pe-7s-graph"></i>
            <p>Dashboard</p>
          </Link>
        </li>
        <li className={this.state.componentMenuOpen ? 'active' : null}>
          <a onClick={() => this.setState({ componentMenuOpen: !this.state.componentMenuOpen })}
            data-toggle="collapse">
            <i className="pe-7s-plugin"></i>
            <p>
              General Management
            <b className="caret"></b>
            </p>
          </a>
          <Collapse in={this.state.componentMenuOpen}>
            <div>
              <ul className="nav">
                <li className={this.isPathActive('/admin/general-management/cloth-category') ? 'active' : null}>
                  <Link to="/admin/general-management/cloth-category">Cloths Categories</Link>
                </li>
                <li className={this.isPathActive('/admin/general-management/cloth-list') ? 'active' : null}>
                  <Link to="/admin/general-management/cloth-list">Clothes</Link>
                </li>
                <li className={this.isPathActive('/admin/general-management/washer-list') ? 'active' : null}>
                  <Link to="/admin/general-management/washer-list">Washer</Link>
                </li>
                <li className={this.isPathActive('/admin/general-management/dryer-list') ? 'active' : null}>
                  <Link to="/admin/general-management/dryer-list">Dryer</Link>
                </li>
                {/* <li className={this.isPathActive('/components/panels') ? 'active' : null}>
                  <Link to="/components/panels">Panels</Link>
                </li> */}
                {/* <li className={this.isPathActive('/components/sweetalert') ? 'active' : null}>
                  <Link to="/components/sweetalert">Sweet Alert</Link>
                </li> */}
                {/* <li className={this.isPathActive('/components/typography') ? 'active' : null}>
                  <Link to="/components/typography">Typography</Link>
                </li> */}
              </ul>
            </div>
          </Collapse>
        </li>
        <li className={this.isPathActive('/charts') ? 'active' : null}>
          <Link to="/charts">
            <i className="pe-7s-albums"></i>
            <p>Services Management</p>
          </Link>
        </li>
        <li className={this.isPathActive('/charts') ? 'active' : null}>
          <Link to="/charts">
            <i className="pe-7s-gift"></i>
            <p>Promotion Management</p>
          </Link>
        </li>
        <li className={this.isPathActive('/tables') || this.state.tableMenuOpen ? 'active' : null}>
          <a onClick={() => this.setState({ tableMenuOpen: !this.state.tableMenuOpen })} data-toggle="collapse">
            <i className="pe-7s-users"></i>
            <p>Account <b className="caret"></b></p>
          </a>
          <Collapse in={this.state.tableMenuOpen}>
            <div>
              <ul className="nav">
                <li className={this.isPathActive('/tables/regular-tables') ? 'active' : null}>
                  <Link to="/tables/regular-tables">Customer</Link>
                </li>
                <li className={this.isPathActive('/tables/extended-tables') ? 'active' : null}>
                  <Link to="/tables/extended-tables">Staff</Link>
                </li>
                <li className={this.isPathActive('/tables/fixed-data-table') ? 'active' : null}>
                  <Link to="/tables/react-bootstrap-table">Utilities</Link>
                </li>
              </ul>
            </div>
          </Collapse>
        </li>
        <li className={this.isPathActive('/forms') || this.state.formMenuOpen ? 'active' : null}>
          <a onClick={() => this.setState({ formMenuOpen: !this.state.formMenuOpen })} data-toggle="collapse">
            <i className="pe-7s-more"></i>
            <p>Others <b className="caret"></b></p>
          </a>
          <Collapse in={this.state.formMenuOpen}>
            <div>
              <ul className="nav">
                <li className={this.isPathActive('/forms/regular-forms') ? 'active' : null}>
                  <Link to="/forms/regular-forms">Payments Method</Link>
                </li>
                <li className={this.isPathActive('/forms/extended-forms') ? 'active' : null}>
                  <Link to="/forms/extended-forms">Shipping</Link>
                </li>
                <li className={this.isPathActive('/forms/extended-forms') ? 'active' : null}>
                  <Link to="/forms/extended-forms">Schedule Time</Link>
                </li>
                <li className={this.isPathActive('/forms/extended-forms') ? 'active' : null}>
                  <Link to="/forms/extended-forms">Color/Color Group</Link>
                </li>
                <li className={this.isPathActive('/forms/extended-forms') ? 'active' : null}>
                  <Link to="/forms/extended-forms">Units</Link>
                </li>
                <li className={this.isPathActive('/forms/extended-forms') ? 'active' : null}>
                  <Link to="/forms/extended-forms">Materials</Link>
                </li>
                <li className={this.isPathActive('/forms/extended-forms') ? 'active' : null}>
                  <Link to="/forms/extended-forms">Labels</Link>
                </li>
              </ul>
            </div>
          </Collapse>
        </li>
        {/* <li className={this.isPathActive('/forms') || this.state.formMenuOpen ? 'active' : null}>
          <a onClick={() => this.setState({ formMenuOpen: !this.state.formMenuOpen })} data-toggle="collapse">
            <i className="pe-7s-note2"></i>
            <p>Forms <b className="caret"></b></p>
          </a>
          <Collapse in={this.state.formMenuOpen}>
            <div>
              <ul className="nav">
                <li className={this.isPathActive('/forms/regular-forms') ? 'active' : null}>
                  <Link to="/forms/regular-forms">Regular Forms</Link>
                </li>
                <li className={this.isPathActive('/forms/extended-forms') ? 'active' : null}>
                  <Link to="/forms/extended-forms">Extended Forms</Link>
                </li>
                <li className={this.isPathActive('/forms/validation-forms') ? 'active' : null}>
                  <Link to="/forms/validation-forms">Validation Forms</Link>
                </li>
              </ul>
            </div>
          </Collapse>
        </li> */}
        
       <li className={this.isPathActive('/maps') || this.state.mapMenuOpen ? 'active' : null}>
          <a onClick={() => this.setState({ mapMenuOpen: !this.state.mapMenuOpen })} data-toggle="collapse">
            <i className="pe-7s-map-marker"></i>
            <p>Map <b className="caret"></b></p>
          </a>
          <Collapse in={this.state.mapMenuOpen}>
            <div>
              <ul className="nav">
                <li className={this.isPathActive('/maps/google-map') ? 'active' : null}>
                  <Link to="/maps/google-map">Google Map</Link>
                </li>
                <li className={this.isPathActive('/maps/vector-map') ? 'active' : null}>
                  <Link to="/maps/vector-map">Vector Map</Link>
                </li>
              </ul>
            </div>
          </Collapse>
        </li>
        <li className={this.isPathActive('/charts') ? 'active' : null}>
          <Link to="/charts">
            <i className="pe-7s-help1"></i>
            <p>Help</p>
          </Link>
        </li>
        {/* <li className={this.isPathActive('/calendar') ? 'active' : null}>
          <Link to="/calendar">
            <i className="pe-7s-date"></i>
            <p>Calendar</p>
          </Link>
        </li> */}
      </ul>
    );
  }

  isPathActive(path) {
    return this.props.location.pathname.startsWith(path);
  }
}

export default withRouter(Nav);