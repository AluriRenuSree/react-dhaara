import React from 'react';
import './SideBar.css';
import DashBoard from '../assets/images/Dashboard.svg';
const Sidebar = () => {
  const listItems = [
    {
      name: 'Dashboard',
      image: DashBoard, 
    },
  ];

  return (
    <div className="sidebarContainer">
      <ul className="list">
        {listItems?.map((item, index) => (
          <li key={index} className="listItem" >
            <div className="listItemIcon">
              <img src={item.image} alt={item.name} className="image" />
            </div>
            <span className="listItemText">{item.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
