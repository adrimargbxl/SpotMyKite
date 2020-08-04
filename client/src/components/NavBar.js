import React, { Component } from 'react';
import { Input, Menu, Form } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import Logo from '../images/logo.png';
import LogoIcon from '../images/kitesurfing.png';

export default class NavBar extends Component {
  state = { activeItem: 'home', search: '' };

  handleItemClick = (e, { name }) => {
    e.preventDefault();
    this.setState({ activeItem: name });
  };

  render() {
    const { activeItem } = this.state;

    return (
      <div
        style={{
          padding: '2vh',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Menu
          pointing
          style={{ backgroundColor: 'rgb(255,255,255,0.7)', width: '95vw' }}
        >
          <img
            src={LogoIcon}
            alt="logoIcon"
            style={{
              width: '3vw',
              height: '3vw',
              marginRight: '1vw',
              marginLeft: '1vw',
              marginTop: '0.5vw',
            }}
          />
          <img
            src={Logo}
            alt="logo"
            style={{
              width: '8.5vw',
              height: '3vw',
              marginRight: '2vw',
              marginTop: '0.5vw',
            }}
          />

          <Menu.Item
            name="home"
            active={activeItem === 'home'}
            onClick={this.handleItemClick}
          >
            <Link to="/" style={{ color: 'black' }}>
              Home
            </Link>
          </Menu.Item>
          <Menu.Item
            name="info"
            active={activeItem === 'info'}
            onClick={this.handleItemClick}
          >
            <Link to="/Info" style={{ color: 'black' }}>
              Info
            </Link>
          </Menu.Item>
          <Menu.Menu position="right">
            <Menu.Item>
              <Form
                onSubmit={() => {
                  this.props.onSearch(this.state.search);
                }}
              >
                <Input
                  icon="search"
                  placeholder="add spot"
                  onChange={(e) => this.setState({ search: e.target.value })}
                />
              </Form>
            </Menu.Item>
          </Menu.Menu>
        </Menu>
      </div>
    );
  }
}
