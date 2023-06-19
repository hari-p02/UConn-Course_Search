import React from 'react'
import "./Card.css"
const Card = ({title,
              score,
              course_description,
              course_title,
              grading_basis,
              num_credits,
              prerequisites}) => {
                
  return (
    <div class="post-card">
      <div className='top'>
        <div class="avatar">{title}</div>
        <svg className='info' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
        </svg>
      </div>
      <a class="title" href={"https://catalog.uconn.edu/directory-of-courses/course/" + title.replace(/\s/g, '/')} rel="noreferrer" target="_blank">{course_title}</a>
      <span class="datetime">{num_credits}</span>
      <div class="image-preview">
        <div className='course-desc-container'>
          <p className='course-desc'>{course_description}</p>
        </div>
      </div>
      <div className='reddit-btn'>
        <button class="button">
          <img className='reddit-logo' src='/images/redditlogo.png' alt='search reddit' />
          <span class="lable">Look at Reddit!</span>
        </button>
      </div>
    </div>
  )
}

export default Card