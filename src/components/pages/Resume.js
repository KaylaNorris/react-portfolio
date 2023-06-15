import React from 'react';
import resume from './UPDATEDRESUME.pdf'
import resumePic from '../../Assets/UPDATEDRESUME1024_1.jpg'

export default function Resume() {
  return (
    <div class="card mt-5 has-text-info">
    <div>
      <h1 class="mt-5 mb-5">My Resume</h1>
      <img src={resumePic} />
      <p class="mb-5">
Click <a href={resume}>here</a> to download my resume!
      </p>
    </div>
    </div>
  );
}