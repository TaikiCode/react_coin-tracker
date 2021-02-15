import React from "react";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import CoinMainPage from "./pages/CoinMainPage";
import CoinDetailPage from "./pages/CoinDetailPage";

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Route exact path="/" component={CoinMainPage} />
        <Route path="/coins" component={CoinDetailPage} />
      </BrowserRouter>
    </div>
  );
}

export default App;
