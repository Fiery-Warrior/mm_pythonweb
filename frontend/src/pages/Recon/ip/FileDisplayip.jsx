import React, { useState } from 'react';

function FileDisplayip() {
  const [ipAddress, setIpAddress] = useState('');
  const [ipInfo, setIpInfo] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      const response = await fetch(`http://ip-api.com/json/${ipAddress}`);
      if (!response.ok) {
        throw new Error('Error retrieving data');
      }
      const data = await response.json();
      setIpInfo(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Enter an IP address:
          <input
            type="text"
            value={ipAddress}
            onChange={(event) => setIpAddress(event.target.value)}
          />
        </label>
        <button type="submit">Submit</button>
      </form>

      {loading && <p>Loading...</p>}

      {ipInfo && (
        <div>
          <p>IP address: {ipInfo.query}</p>
          <p>City: {ipInfo.city}</p>
          <p>State: {ipInfo.regionName}</p>
          <p>Country: {ipInfo.country}</p>
          <p>ISP: {ipInfo.isp}</p>
          <p>Latitude: {ipInfo.lat}</p>
          <p>Longitude: {ipInfo.lon}</p>
          <p>Timezone: {ipInfo.timezone}</p>
          <p>Zip code: {ipInfo.zip}</p>
          <p>Organization: {ipInfo.org}</p>
          {/* <p>AS Number: {ipInfo.as}</p>
          <p>Reverse DNS: {ipInfo.reverse}</p>
          <p>Mobile: {ipInfo.mobile ? 'Yes' : 'No'}</p>
          <p>Proxy: {ipInfo.proxy ? 'Yes' : 'No'}</p>
          <p>VPN: {ipInfo.vpn ? 'Yes' : 'No'}</p>
          <p>Hosting: {ipInfo.hosting ? 'Yes' : 'No'}</p> */}
        </div>
      )}

    </div>
  );
}

export default FileDisplayip;