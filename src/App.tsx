import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import HomeComponent from "./components/HomeComponent";
import NavComponent from "./components/NavComponent";
import CardBoxComponent from "./components/CardBoxComponent";

export type ChangeRootFunction = (root: string) => void;

function App() {
  const [root, setRoot] = useState<string>(" Home");
  const handleChangeRoot = (root: string): void => {
    setRoot(root);
  };
  return (
    <>
      {root === " Home" ? (
        <>
          <NavComponent changeRoot={handleChangeRoot}></NavComponent>
          <HomeComponent></HomeComponent>
        </>
      ) : (
        <>
          <NavComponent changeRoot={handleChangeRoot}></NavComponent>
          <CardBoxComponent isLikes={true}></CardBoxComponent>
        </>
      )}
    </>
  );
}

export default App;
