import React, { useEffect, useState } from 'react'
import API_URL from "./config/api"
function Stories({ mystoryclick }) {
  const [storys, setStories] = useState([])

  useEffect(() => {
    fetch(`${API_URL}/story`)
      .then((data) => data.json())
      .then((data) => setStories(data))
      .catch((err) => console.log(err))
  }, []);
  return (
    <>
      <div className='story '>
        {storys.length > 0 ? (
          <div className='story-list'>
            {storys.map((item) => (
              <div className='storynumbers' key={item.id} onClick={() => mystoryclick(item.id)}>
                <div className='image-container'>
                  <img src={`${API_URL}${item.user.profilepic}`} />
                </div>
                <div>{item.user.username}</div>
              </div>
            ))}
          </div>
        ) : (
          <div>
            Loading...
          </div>
        )}
      </div>
    </>
  );
}

export default Stories