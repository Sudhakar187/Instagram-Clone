import React, { useEffect, useState } from 'react'
import Insta from './assets/instatext.png'
import { useNavigate, useParams } from 'react-router-dom'
import API_URL from "./config/api"
function PersonStory() {
  const { storyid } = useParams();
  const navigate = useNavigate();
  const [onestory, setonestory] = useState(null)

  useEffect(() => {
    fetch(`${API_URL}/story/${storyid}`)
      .then((Response) => Response.json())
      .then((data) => setonestory(data))
      .catch(err => console.log(err))
  }, [storyid])

  function handleclose() {
    navigate(-1);
  }

  if (!onestory) return <div>Loading...</div>

  return (
    <>

      {onestory ?
        (
          <div className="viewstory-page">
            <span className='insta-logo-image' onClick={handleclose}>
              <img src={Insta} alt="Close Story" width={30} style={{ cursor: 'pointer', width: '110px', margin: '14px' }} />
            </span>
            <span className='story-closebtn' onClick={handleclose}>
              <i class="bi bi-x-lg"></i>
            </span>
            <div className='viewstory-section'>
              <div className='viewstory-pic'>
                <img src={`${API_URL}${onestory.storypic}`} />
                <img src={`${API_URL}${onestory.user.profilepic}`} />
                <p>{onestory.user.username}</p>
                <p>{onestory.user.timeago}.</p>
                <div>
                  <i class="bi bi-volume-mute-fill"></i>
                  <i class="bi bi-pause-fill"></i>
                  <i className='bi bi-three-dots'></i>
                </div>
                <div className='reply-section'>
                  <div>Reply to {onestory.user.username}</div>

                  <div className='reply-icons'>
                    <i class="bi bi-heart"></i>
                    <i class="bi bi-send"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) :
        (
          <div>Loading...</div>
        )}

    </>
  )
}

export default PersonStory


