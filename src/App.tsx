import { useState } from "react";
import Posts from "./components/Posts";
import Dogs from "./components/Dogs";
import DogList from "./components/DogList";

function App() {
  return (
    <div className="App">
      {/* <DogList />
      <Dogs /> */}
      <Posts />
    </div>
  );
}

export default App;
