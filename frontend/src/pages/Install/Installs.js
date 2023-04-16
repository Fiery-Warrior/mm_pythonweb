import React from 'react';
import './install.css';
import { GrApple } from 'react-icons/gr';
import { DiLinux } from 'react-icons/di';
import { BsWindows } from 'react-icons/bs';

function Installs() {
  return (
    <div className="App">
      <main>
        <section className="connect">
          <h1><BsWindows /> Windows </h1>
          <p>Installation:</p>
          <ul>
            <li>Download the exploit file from the following link: <a href="https://www.exploit-db.com/exploits/">https://www.exploit-db.com/exploits/</a></li>
            <li>Save the exploit file in a preferred location on your computer</li>
            <li>Run the exploit file from the command prompt or terminal using the appropriate command</li>
          </ul>
        </section>
        <section className="anti-forensics">
          <h1><GrApple /> Mac </h1>
          <p>Installation:</p>
          <ul>
            <li>Download the exploit file from the following link: <a href="https://nvd.nist.gov/vuln/detail/CVE-2020-1472">https://nvd.nist.gov/vuln/detail/CVE-2020-1472</a></li>
            <li>Save the exploit file in a preferred location on your computer</li>
            <li>Run the exploit file from the command prompt or terminal using the appropriate command</li>
          </ul>
        </section>

        <section className="resources">
          <h2><DiLinux /> Linux </h2>
          <p>Installation:</p>
          <ul>
            <li>Download the exploit file from the following link: <a href="https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2020-1472">https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2020-1472</a></li>
            <li>Save the exploit file in a preferred location on your computer</li>
            <li>Run the exploit file from the command prompt or terminal using the appropriate command</li>
          </ul>
        </section>
      </main>

    </div>
  );
}

export default Installs;



