import React, { useEffect, useState } from 'react'
import axios from "axios";


function Suggestions() {

  const [profile, setProfile] = useState([])
  const [suggestion, setSuggestion] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/profile')
      .then((data) => data.json())
      .then((data) => setProfile(data))
      .catch(err => console.log(err))

    fetch('http://localhost:3000/suggestions')
      .then((data) => data.json())
      .then((data) => setSuggestion(data))
      .catch(err => console.log(err))
  }, []);

  const handlefollowers = async (id, username) => {
    try {
      await axios.post("http://localhost:3000/followers", { "id": id, "username": username });
      alert("followed successfully");
    }
    catch (err) {
      console.log(err)
    }
  };
  return (
    <>
      <div className="suggestion-bar">
        {profile && profile.length > 0 ? (
          <div className="profile-bar">
            <img src={`http://localhost:3000${profile[0].dp}`} alt={profile[0].username} />
            <div className="profile-info">
              <div className="username">{profile[0].username}</div>
              <div className="name text-muted">{profile[0].name}</div>
            </div>
            <a className="switch-btn">Switch</a>
          </div>
        ) : (
          <div className="loading">Loading...</div>
        )}

        <div className="suggestion-container">
          <div className="suggestion-header">
            <span className="text-muted">Suggested for you</span>
            <a className="see-btn">See All</a>
          </div>

          {suggestion.length > 0 ? (
            <div className="suggestion-list">
              {suggestion.map((item) => (
                <div className="member" key={item.id}>
                  <div className="member-left">
                    <img src={`http://localhost:3000${item.dp}`} alt={item.username} />
                    <div className="member-info">
                      <div className="username">{item.username}</div>
                      <div className="text-muted small">{item.caption}</div>
                    </div>
                  </div>
                  <a className="follow-btn" onClick={() => { handlefollowers(item.id, item.username) }}>Follow</a>
                </div>
              ))}
            </div>
          ) : (
            <div className="loading">Loading...</div>
          )}
        </div>
        <div style={{ marginTop: '40px', }} className='footer'>
          <p>About.Help.Press.API.Jobs.Privacy.Terms
            .Locations.Language.Meta Verified</p>
          <p>© 2025 INSTAGRAM FROM META</p>
        </div>
      </div>

    </>
  )
}

export default Suggestions