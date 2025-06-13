import React, { useEffect, useState } from "react";

const Github = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://api.github.com/users/vedant1994").then((Response) =>
      Response.json().then((data) => {
        console.log(data);
        setData(data);
      })
    );
  }, []);

  return (
    <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">
      Github follower: {data.followers}
      <img src={data.avatar_url} alt="Git Photot" width={300} />
    </div>
  );
};

export default Github;
