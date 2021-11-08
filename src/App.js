import React from "react";
import HomePage from "./pages/homepage/homepage-component";
import { Route, Switch } from "react-router-dom";
import "./App.css";

const HatsPage = () => (
  <div>
    <h1>Hats Page</h1>
  </div>
);

// const JacketsPage = () => (
//   <div>
//     <h1>Jackets Page</h1>
//   </div>
// );
// const SneakersPage = () => (
//   <div>
//     <h1>Sneakers Page</h1>
//   </div>
// );

// const WomensPage = () => (
//   <div>
//     <h1>Womens Page</h1>
//   </div>
// );

// const MensPage = () => (
//   <div>
//     <h1>Mens Page</h1>
//   </div>
// );

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/hats" component={HatsPage} />
        {/* <Route path="/jackets" element={<JacketsPage />} />
        <Route path="/sneakers" element={<SneakersPage />} />
        <Route path="/womens" element={<WomensPage />} />
        <Route path="/mens" element={<MensPage />} /> */}
      </Switch>
    </div>
  );
}

export default App;
