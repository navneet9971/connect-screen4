import React, { useState, useEffect } from 'react';


function MiddleSection() {
  return (
    <div className="middle-section">
      <h3>Middle Section</h3>
      <p>Description of Middle Section</p>
    </div>
  );
}


function CheckProductBox() {
    return (
      <div className="lab-testing-box">
        <button5>Choose Product</button5>
      </div>
    );
  }

function LabTestingBox() {
  return (
    <div className="lab-testing-box">
      <h3>Lab Testing</h3>
      <p>Description of Lab Testing</p>
      <button7>Requsite Testing</button7>
      <button7>Status</button7>
    </div>
  );
}


function DocumentBox() {
  return (
    <div className="document-box">
      <h3>Documents</h3>
      <p>Description of Documents</p>
      <button6 onClick={uploadDocument}>Upload</button6>
      <button6 onClick={downloadDocument}>Download</button6>
      <button6 onClick={viewDocument}>View</button6>
    </div>
  );
}

function uploadDocument() {
  // Open file input dialog
  const input = document.createElement('input');
  input.type = 'file';
  input.accept = 'application/pdf';
  input.onchange = (event) => {
    const file = event.target.files[0];
    console.log("Uploading file:", file);
    // Code to handle uploading the file
  };
  input.click();
}

function downloadDocument() {
  // Code to fetch and download the file
  console.log("Downloading file...");
  const downloadUrl = 'https://example.com/document.pdf';
  const link = document.createElement('a');
  link.href = downloadUrl;
  link.download = 'document.pdf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

function viewDocument() {
  // Code to open a new tab and display the file
  console.log("Viewing file...");
  const viewUrl = 'https://example.com/document.pdf';
  window.open(viewUrl, '_blank');
}


function Thirdpage() {
  const [videoUrl, setVideoUrl] = useState('');

  useEffect(() => {
    fetch('https://example.com/video')
      .then(response => response.json())
      .then(data => {
        setVideoUrl(data.url);
      })
      .catch(error => console.error(error));
  }, []);

  return (
    <div className="app">
      <div className="left-section">
        <CheckProductBox/>
        <LabTestingBox />
        <DocumentBox />
      </div>
      <div className="center-section">
        <MiddleSection/>
      </div>
      <div className="right-section">
        <div className="video-box">
          <video controls>
            <source src={videoUrl} type="video/mp4" />
          </video>
          <div className="video-content">
            <h2>Video Title</h2>
            <p>Video Description</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Thirdpage;
