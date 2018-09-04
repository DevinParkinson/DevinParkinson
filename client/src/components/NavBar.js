import React, { Component } from 'react';
import { Menu, Header, Icon, Dropdown, Divider } from 'semantic-ui-react';
import { Link } from 'react-router-dom';


class NavBar extends Component {

  render() {
    return (
      <div>
        <Menu pointing secondary>
        <Dropdown icon="bars" floating button className='icon'>
          <Dropdown.Menu>
            <Dropdown.Item>
              <Link to='/' style={{color: "black"}}>
                <Icon name="home" size="large" />
                Home
              </Link>
            </Dropdown.Item>
            <Divider />
            <Dropdown.Item>
              <Link to="/about" style={{color: "black"}}>
                <Icon name="question circle outline" size="large" />
                About
              </Link>
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Menu.Item position="right">
          <Header as="h3" style={{fontFamily: 'coven-medium,sans-serif'}}>Devin Parkinson</Header>
        </Menu.Item>
      </Menu>
      </div>
    );
  }
}

export default NavBar;
