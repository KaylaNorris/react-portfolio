import React from 'react';
import profilePic from '../../Assets/profile-pic.jpg'

export default function About() {
  return (
    <div class="card mt-5">
  <div class="card-content">
    <div class="content"></div>
<div className='has-text-info'>
      <h1 class="mt-3 mb-5">About Me</h1>
      <img src={profilePic} class="mb-5" />
      <p>
      I was born in Germany but raised in Columbus, Ohio (GO BUCKS!).<br />
                I have a background in Veterinary Technology and Life Insurance Sales. However, I've always had a love
                for all things Design. <br /> I enjoy the complexity of making things flow
                in a zen-like manner. With my previous background, I've gained meticulous organizational skills as well
                as genuine interpersonal skills. <br /> I am very determined and have a self-directed mindset. I look forward to working
                with you on future projects!
      </p>
    </div>
    </div>
    </div>
  );
}