import React from 'react';
import { useNavigate } from 'react-router-dom';


function Sidebar() {
  const navigate = useNavigate()
  return (
    <div className='main-sidebar'>
      <div className='sidebar-menu'>
        <img src='/assets/instatext.png' className='logo-text' alt="Instagram" />
        <div onClick={() => { navigate('/') }}><i className="bi bi-house-door-fill"></i> Home </div>
        <div><i className="bi bi-search-heart-fill"></i> Search</div>
        <div><i className="bi bi-compass-fill"></i> Explore</div>
        <div><i className="bi bi-camera-reels-fill"></i> Reels</div>
        <div><i className="bi bi-send-fill"></i> Messages</div>
        <div><i className="bi bi-heart-fill"></i> Notifications</div>
        <div><i className="bi bi-plus-square-fill"></i> Create</div>
        <div onClick={() => { navigate('/profile') }}><i className="bi bi-person-circle"></i> Profile</div>
      </div>

      <div className='sidebar-b-menu'>
        <div><i className="bi bi-threads"></i> Threads</div>
        <div><i className="bi bi-list"></i> More</div>
      </div>
    </div>
  );
}

export default Sidebar;
