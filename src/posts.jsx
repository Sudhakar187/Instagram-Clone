import React, { useEffect, useState } from 'react'
import API_URL from "./config/api"
function Posts() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    fetch(`${API_URL}/posts`)
      .then((Response) => Response.json())
      .then((data => setPosts(data)))
      .catch(err => console.log(err))
  }, [])

  return (
    <div className='posts-container'>
      {posts.length > 0 ? (
        <div className='posts-list'>
          {posts.map((post) => (
            <div key={post.id} className="post-card">

              <div className="profile-section">
                <img
                  className="dp"
                  src={`${API_URL}${post.profilePic}`}
                  alt={post.username}
                />
                <h5 className="username-post">{post.username}</h5>
                <p className="timeAgo">. {post.timeAgo}</p>
                <div className='three-dot'>
                  <i className="bi bi-three-dots"></i>
                </div>
              </div>

              <div className="post-image">
                <img
                  className="post"
                  src={`${API_URL}${post.postImage}`}
                  alt={post.id}
                />
              </div>

              <div className="icons-row">
                <div className="left-icons">
                  <i className="bi bi-heart"></i>
                  <i className="bi bi-chat"></i>
                  <i className="bi bi-send"></i>
                </div>
                <div className="right-icons">
                  <i className="bi bi-bookmark"></i>
                </div>
              </div>

              <div className="likes">
                <b>{post.likes} Likes</b>
              </div>

              <div className="caption">
                {post.caption}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="loading">Loading...</div>
      )}
    </div>
  )
}

export default Posts
