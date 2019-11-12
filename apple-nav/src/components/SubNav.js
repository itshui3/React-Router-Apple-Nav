import React from 'react';
import {NavLink} from 'react-router-dom';
import {Nav, NavItem} from 'reactstrap';

const SubNav = ({devices, match}) => {
  const deviceType = devices[match.params.id]
  console.log(deviceType);

  return deviceType.map((d, i) => (
          <NavItem key={i}>
            {d}
          </NavItem>
        ))
      

  
}

export default SubNav;