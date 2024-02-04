import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import HomeComponent from "./components/HomeComponent";
import NavComponent from "./components/NavComponent";
import CardBoxComponent from "./components/CardBoxComponent";
import { utiliyGetDataCardFromLS } from "./utility";

export type ChangeRootFunction = (root: string) => void;

function App() {
  const [root, setRoot] = useState<string>(" Home");
  const handleChangeRoot = (root: string): void => {
    setRoot(root);
  };
  const dataCard =
    utiliyGetDataCardFromLS() !== null ? utiliyGetDataCardFromLS()! : [];

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
          <CardBoxComponent isLikes={true} dataC={dataCard}></CardBoxComponent>
        </>
      )}
    </>
  );
}

export default App;
