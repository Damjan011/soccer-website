import React from 'react';
import { Link } from 'gatsby';

const Menu = () => {
  return (
    <div className="menu-wrapper">
      <div className="menu-label">
        <p>NAVIGACIJA</p>
      </div>
      <div className="menu-item">
        <Link activeClassName="active" to="/o-nama">
          O nama
        </Link>
      </div>
      <div className="menu-item">
        <Link activeClassName="active" to="/nacin-uplate">
          Nacin uplate
        </Link>
      </div>
      <div className="menu-item">
        <Link activeClassName="active" to="/o-nama">
          Pravila igre
        </Link>
      </div>
    </div>
  )
}

export default Menu;