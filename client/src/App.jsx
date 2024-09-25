import React from "react";
import {
  Navbar,
  Loader,
  Services,
  Footer,
  Welcome,
  Transaction,
} from "./components";
const App = () => {
  return (
    <div className="min-h-screen">
      <div className="gradient-bg-welcome">
        <Navbar></Navbar>
        <Welcome />
      </div>
      <Services />
      <Transaction />
      <Footer />
    </div>
  );
};

export default App;
