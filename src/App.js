import React, { useState } from "react";
import Modal from "./Modal";
import Sidebar from "./Sidebar";
import Home from "./Home";

function App() {
  return (
    <>
      <div>
        <Home />
        <Modal />
        <Sidebar />
      </div>
    </>
  );
}

export default App;
