import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function Terminal() {
  const [command, setCommand] = useState('');
  const [output, setOutput] = useState('');
  const [currentDir, setCurrentDir] = useState('/');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (command.startsWith('cd ')) {
        const newDir = command.slice(3);
        setCurrentDir(newDir);
        setOutput(`Current directory: ${newDir}\n`);
      } else {
        const res = await axios.post('http://localhost:80/api/execute', { command });
        setOutput(`Current directory: ${currentDir}\n${res.data.stdout}`);
      }
    } catch (err) {
      console.error(err);
    }
    setCommand('');
  }

  return (
    <div className="App">
      <section className='terminal'>
        <form onSubmit={handleSubmit}>
          <input type="text" value={command} onChange={e => setCommand(e.target.value)} placeholder="Enter command" />
          <button type="submit">Submit</button>
        </form>
        <pre className='terminal-output'>{output}</pre>
      </section>
    </div>
  );
}

export default Terminal;
