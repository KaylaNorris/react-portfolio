import React from 'react';
import resume from './UPDATEDRESUME.pdf'

export default function Resume() {
  return (
    <div>
      <h1>My Resume</h1>
      <p>
Click <a href={resume}>here</a> to view my resume!
      </p>
    </div>
  );
}