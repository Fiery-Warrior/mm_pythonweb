import React from 'react';
import './hambar.css';

function Hambar() {
  return (
    <div className="App">

      <main>
        <section className="connect">
          <h2>Connect phone/App</h2>
          <p>To download the phone application you can visit moriarty.com or download directly from the Apps Store. If you have made an account on this website the mobile app will be able to connect and display Your Objective Notes, a proxy button, some scanners, and other information you have saved to your account.</p>
        </section>
        <section className="anti-forensics">
          <h2>Anti-forensics</h2>
          <p>Anti-forensics can be used into ways (or specially use them together)</p>
          <ol>
            <li>Hiding any tracks you were there</li>
            <li>Obfuscating or deleting records, showing that something happened, but unsure what</li>
          </ol>
        </section>
        <section className="commands">
          <h2>Commands</h2>
          <ul>
            <li><strong>Linux</strong><br />$ls</li>
            <li><strong>Mac</strong><br />$ifconfig</li>
            <li><strong>Windows</strong><br />$dir</li>
          </ul>
        </section>
        <section className="anonymity">
          <h2>Anonymity</h2>
          <p>Use Tor and</p>
        </section>
        <section className="resources">
          <h2>Resources</h2>
          <p>Some great websites to learn about ________</p>
          <ul>
            <li><a href="#">Website 1</a></li>
            <li><a href="#">Website 2</a></li>
            <li><a href="#">Website 3</a></li>
          </ul>
        </section>
      </main>

    </div>
  );
}

export default Hambar;
