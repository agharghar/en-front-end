import React, { Component } from 'react';
import {DropdownItem, DropdownMenu, DropdownToggle, Nav } from 'reactstrap';
import PropTypes from 'prop-types';
import SockJsClient from 'react-stomp';


import { AppAsideToggler, AppHeaderDropdown, AppNavbarBrand, AppSidebarToggler } from '@coreui/react';

import logo from '../../assets/img/brand/logoEna.png'
import sygnet from '../../assets/img/brand/enalg.png'
import avatar from '../../assets/img/avatars/myRabbit.jpg'

const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {};

class DefaultHeader extends Component {


  constructor(props) {
    super(props)
   /* setState({
      a : '' 
    })
    var socket = new SockJS(process.env.REACT_APP_HOST+'/websocketApp');
    stompClient = Stomp.over(socket);  
    stompClient.connect({}, null);
    stompClient.subscribe('/queue/privé.1',(data)=> { 
      console.log(a)
      setState({
          a : data

    }) } );*/
}

  render() {

    // eslint-disable-next-line
    const { children, ...attributes } = this.props;
    const url = process.env.REACT_APP_HOST+'/websocketApp' ; 
    return (
      <React.Fragment>
        <AppSidebarToggler className="d-lg-none" display="md" mobile />
        <AppNavbarBrand
         full={{ src: logo, width: 170, height: 50, alt: 'CoreUI Logo' }}
          minimized={{ src: sygnet, width: 30, height: 30, alt: 'CoreUI Logo' }}
        />
        <AppSidebarToggler className="d-md-down-none" display="lg" />
        <Nav className="ml-auto" navbar>
          <AppHeaderDropdown>
            <DropdownToggle nav>
              <img src={avatar} className="img-avatar" alt="admin@bootstrapmaster.com" />
            </DropdownToggle>
            <DropdownMenu right >
              <DropdownItem>
                <SockJsClient url={url} topics={['/queue/privé.2'] }
              onMessage={(msg) => { console.log(msg); }}
               />


              </DropdownItem>
            </DropdownMenu>
          </AppHeaderDropdown>
        </Nav>
        <AppAsideToggler className="d-md-down-none" />
        {/*<AppAsideToggler className="d-lg-none" mobile />*/}
      </React.Fragment>
    );
  }
}

DefaultHeader.propTypes = propTypes;
DefaultHeader.defaultProps = defaultProps;

export default DefaultHeader;
