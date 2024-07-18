import React from 'react';
import './header.css'
function Header() {
  return (
    <>
    <div className='header'>
      <div className='logo-name'>
          <img src="https://www.iconpacks.net/icons/2/free-reddit-logo-icon-2436-thumb.png" alt='reddit-logo' />
          <h5 className='title'>MiniReddit</h5>
      </div>
      <div className='search-input'>
        <input className="form-control" type="search" placeholder="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </div>     
    </div>
    </>
  )
}

export default Header;
