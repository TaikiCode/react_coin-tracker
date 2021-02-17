import React from "react";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import CoinMainPage from "./pages/CoinMainPage";
import CoinDetailPage from "./pages/CoinDetailPage";

function App() {
  return (
    <div className="container mt-5">
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Route exact path="/" component={CoinMainPage} />
        <Route path="/coins/:id" component={CoinDetailPage} />
      </BrowserRouter>
    </div>
  );
}

export default App;


