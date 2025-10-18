import React from 'react'
import Stories from './stories'
import Posts from './posts'
import { useNavigate } from 'react-router-dom';

function Feed() {
  const navigate = useNavigate()

  function handlestoryclick(id) {
    navigate(`/story/${id}`)
  }

  return (
    <>
      <Stories mystoryclick={handlestoryclick} />
      <Posts />
    </>
  )
}

export default Feed