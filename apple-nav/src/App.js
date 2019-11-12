import React, {useState} from 'react';
import styled from 'styled-components';
import {Nav, NavItem} from 'reactstrap';
import {NavLink,  Route} from 'react-router-dom';
import Devices from './data/devices';

import SubNav from './components/SubNav';

const SNav = styled(Nav)`
  background: black;
  color: white;
  display: flex;
  justify-content: space-around;
  list-style: none;
`;

const SbNav = styled(SNav)`
  color: black;
  background: white;
`;

const SNavLink = styled(NavLink)`
  color: white;
  text-decoration: none;
`;

const NavHeading = styled.div`
  display: flex;
  flex-direction: column;
`;

function App() {

  const [devices] = useState(Devices);
  return (
    <NavHeading>
      <SNav>
        <NavItem>
          <SNavLink to="/mac">Mac</SNavLink>
        </NavItem>
        <NavItem>
          <SNavLink to="/ipad">iPad</SNavLink>
        </NavItem>
        <NavItem>
          <SNavLink to="/iphone">iPhone</SNavLink>
        </NavItem>
        <NavItem>
          <SNavLink to="/watch">Watch</SNavLink>
        </NavItem>
        <NavItem>
          <SNavLink to="/tv">TV</SNavLink>
        </NavItem>
        <NavItem>
          <SNavLink to="/music">Music</SNavLink>
        </NavItem>
      </SNav>
      <SbNav>
        <Route path="/:id" render={(props) => <SubNav {...props} devices={devices} />} />
      </SbNav>
      

    </NavHeading>
  );
}

export default App;
