import React, { useState } from 'react';

function FileDisplayPhone() {
  const [phone, setPhone] = useState('');
  const [country, setCountry] = useState('');

  const handleChange = (event) => {
    setPhone(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const myHeaders = new Headers();
    myHeaders.append("apikey", "7oSVdWpeHEsaFEpVbx2495dHXNJz09y8");

    const requestOptions = {
      method: 'GET',
      redirect: 'follow',
      headers: myHeaders
    };

    fetch(`https://api.apilayer.com/number_verification/validate?access_key=${process.env.REACT_APP_API_KEY}&number=${phone}`, requestOptions)
      .then(response => response.json())
      .then(result => setCountry(result.country_name))
      .catch(error => console.log('error', error));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Phone Number:
          <input type="text" value={phone} onChange={handleChange} />
        </label>
        <button type="submit">Submit</button>
      </form>
      {country && <p>Country: {country}</p>}
    </div>
  );
}

export default FileDisplayPhone;
