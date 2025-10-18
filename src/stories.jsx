import React, { useEffect, useState } from 'react'

function Stories({ mystoryclick }) {
  const [storys, setStories] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/story')
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
                  <img src={`http://localhost:3000${item.user.profilepic}`} />
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