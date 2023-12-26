import React, { useState, useCallback } from "react";

function InputApiCaller() {
  const [id, setId] = useState("");
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [responseData, setResponseData] = useState();
  const submitHandler = useCallback(async function (event) {
    event.preventDefault();
    let url = "https://api.github.com/users/" + id;
    setId("");
    setError();
    setResponseData();
    setIsLoading(true);
    try {
      const response = await fetch(url);
      const data=await response.json()
      setResponseData(data);
      setIsLoading(false);
      if (!response.ok) {
        throw new Error(data.message);
      }
    } catch (err) {
      setIsLoading(false);
      setError(err.message);
    }
  },[id]);
  return (
    <div>
      <form onSubmit={submitHandler}>
        <input
          id="handle"
          value={id}
          onChange={(event) => {
            setId(event.target.value);
          }}
        />
        <button type="submit">Submit</button>
        <br />
        {isLoading && <h1>Loading</h1>}
        <br />
        {!isLoading && error && <h1>{error}</h1>}
        <br />
        {!isLoading && !error && responseData && (
          <h1>{responseData.login}</h1>
        )}
      </form>
    </div>
  );
}

export default InputApiCaller;
