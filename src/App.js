import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./routes/Home";
import Detail from  "./components/Detail";

function App() {
  return (
    <BrowserRouter>
      <Route path="/" component={Home}/>
      <Route path="/:nasa_id" component={Detail}/>
    </BrowserRouter>
  );
}

export default App;
