import React from "react";
import Routeing from "./components/Routeing";
import GetRequestApp from "./components/GetRequestApp";
import PostsRequestApp from "./components/PostsRequestApp";
import JokePage from "./components/JokePage";
import FerryPage from "./components/FerryPage";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <NavBar />
      {/* <FerryPage/>
    <Routeing />
    <GetRequestApp />
    <PostsRequestApp />
    <JokePage/> */}
      <img
        src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExNjhoYm1pMXZnMzByY3BubWd2bnZub3NhczFpaWRyd3Q0Z3cxdXg4byZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/26tP3M3i03hoIYL6M/giphy.gif"
        alt="boy playing"
      />
    </>
  );
}

export default App;
