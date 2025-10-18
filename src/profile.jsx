import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Profile() {
  const [profile, setProfile] = useState(null);
  const [followers, setFollowers] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/profile')
      .then((res) => {
        setProfile(res.data[0]);
        console.log('Profile Data:', res.data);
      })
      .catch((err) => {
        console.error('Error fetching profile:', err);
      });
    axios.get('http://localhost:3000/followers')
      .then((res) => {
        setFollowers(res.data);
        console.log('Followers Data:', res.data);
      })
      .catch((err) => {
        console.error('Error fetching followers:', err);
      });
  }, []);

  const handleUpdate = async () => {
    try {
      await axios.put(`http://localhost:3000/profile/${profile.id}`, profile);
      alert('Profile updated successfully!');
      console.log('Profile updated successfully');
    } catch (err) {
      console.log('Error updating profile', err);
    }
  };

  const handleUsername = (e) => {
    setProfile((prev) => ({
      ...prev,
      username: e.target.value,
    }));
  };

  const deletefollowers = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/followers/${id}`)
      alert("unfollowed successfully")
      setFollowers(prev => prev.filter(f => f.id !== id));
    }
    catch (err) {
      console.log(err)
    }
  }

  if (!profile) {
    return <p className="loading">Loading profile...</p>;
  }

  return (
    <>
      <div className="insta-profile">
        <div className="profile-header">
          <img
            src={`http://localhost:3000${profile.dp}`}
            alt="Profile"
            className="profile-avatar"
          />

          <div className="profile-info">
            <div className="profile-top">
              <input
                type="text"
                value={profile.username}
                onChange={handleUsername}
              />
              <button className="edit-btn" onClick={handleUpdate}>
                Edit profile
              </button>
              <i className="fa fa-cog settings"></i>
            </div>

            <ul className="profile-stats">
              <li><strong>12</strong> posts</li>
              <li><strong>{followers.length}</strong> followers</li>
              <li><strong>890</strong> following</li>
            </ul>

            <div className="profile-bio">
              <h6>{profile.name}</h6>
            </div>
          </div>
        </div>
        <div className="followers-section">
          <h4>Followers</h4>

          {followers.length > 0 ? (
            <div className="followers-list">
              {followers.map((follower) => (
                <div key={follower.id} className="follower-card">
                  <span className="follower-username">{follower.username}</span>
                  <button className="unfollow-btn" onClick={() => { deletefollowers(follower.id) }}>Unfollow</button>
                </div>
              ))}
            </div>
          ) : (
            <p>No followers yet.</p>
          )}
        </div>

      </div>
    </>
  );
}

export default Profile;
