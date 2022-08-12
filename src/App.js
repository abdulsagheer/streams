import { Route, Routes } from "react-router-dom";

import "./App.css";

const PageOne = () => {
  return <div>PageOne</div>;
};

const PageTwo = () => {
  return <div>PageTwo</div>;
};

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" exact element={PageOne} />
        <Route path="/pagetwo" element={PageTwo} />
      </Routes>
    </div>
  );
}

export default App;
