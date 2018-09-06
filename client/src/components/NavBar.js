import React, { Component } from 'react';
import { Menu, Header, Icon, Dropdown, Divider } from 'semantic-ui-react';
import { Link } from 'react-router-dom';


class NavBar extends Component {

  render() {
    return (
      <div>
        <Menu pointing secondary>
          <Menu.Item>
              <Link to='/' style={{color: "black"}}>
                Home
              </Link>
            </Menu.Item>
            <Menu.Item>
              <Link to="/about" style={{color: "black"}}>
                Personal Life
              </Link>
            </Menu.Item>
        <Menu.Item position="right">
          <Header as="h3" style={{fontFamily: 'coven-medium,sans-serif'}}>Devin Parkinson</Header>
        </Menu.Item>
      </Menu>
      </div>
    );
  }
}

export default NavBar;
