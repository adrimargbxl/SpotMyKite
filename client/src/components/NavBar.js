import React, { Component } from 'react';
import { Input, Menu, Form } from 'semantic-ui-react';
import Logo from '../images/logo.png';
import LogoIcon from '../images/kitesurfing.png';

//incomplete

export default class NavBar extends Component {
  state = { activeItem: 'home', search: '' };

  handleItemClick = (e, { name }) => {
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
            href="/"
            name="home"
            active={activeItem === 'home'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            href="/ExtendedForecast"
            name="extended Forecast"
            active={activeItem === 'Extended Forecast'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            href="/SpotList"
            name="spot list"
            active={activeItem === 'spot list'}
            onClick={this.handleItemClick}
          />
          <Menu.Menu position="right">
            <Menu.Item>
              <Form
                onSubmit={() => {
                  this.props.onSearch(this.state.search);
                  this.props.sortList();
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
