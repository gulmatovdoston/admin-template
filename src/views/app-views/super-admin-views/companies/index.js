import React from "react";
import { useSelector } from "react-redux";

const Home = () => {
  const auth = useSelector((state) => state.auth);
  const token = auth && auth.accessToken;

  return (
    <div>
      Home component works!
      <button onClick={() => console.log(token)}>token</button>
    </div>
  );
};

export default Home;
