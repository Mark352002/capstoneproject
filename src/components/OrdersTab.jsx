import React from 'react';
import { NavLink } from 'react-router-dom';

const OrdersTab = () => {
  return (
    <div>
      <p className='mt-5'>&nbsp;</p>
        <center className='mt-4'>
            <hr className="hr-title" />
            <h4 className="mb-3">Orders</h4>
            </center>
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <NavLink exact to={'/pending'} className="nav-link" activeClassName="active">Pending</NavLink>
        </li>
        <li className="nav-item">
          <NavLink exact to={'/toship'} className="nav-link" activeClassName="active">To Ship</NavLink>
        </li>
        <li className="nav-item">
          <NavLink exact to={'/toreceive'} className="nav-link" activeClassName="active">To Receive</NavLink>
        </li>
        <li className="nav-item">
          <NavLink exact to={'/received'} className="nav-link" activeClassName="active">Received</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default OrdersTab;
