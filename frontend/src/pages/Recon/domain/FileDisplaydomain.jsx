import React, { useState, useEffect } from "react";
import data from "./data.json";

function FileDisplaydomain() {
  const [jsonData, setJsonData] = useState(null);

  useEffect(() => {
    setJsonData(data);
  }, []);

  return (
    <div className="App">
      {jsonData ? (
        <pre>{JSON.stringify(jsonData, null, 2)}</pre>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default FileDisplaydomain;
