import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import NavComponent from "./NavComponent";
import FormComponent from "./FormComponent";
import CardBoxComponent from "./CardBoxComponent";
import { useState } from "react";

const HomeContainer = styled.div(() => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
}));

interface ButtonProps {}

const ButtonLikes = styled.button(() => ({
  background: "#717D7E",
  color: "white",
  fontSize: "1em",
  margin: "1em",
  padding: "0.25em 1em",
  border: "2px solid black",
}));

const HomeComponent = (): JSX.Element => {
  return (
    <>
      <HomeContainer>
        <FormComponent></FormComponent>
        <CardBoxComponent isLikes={false}></CardBoxComponent>
      </HomeContainer>
    </>
  );
};

export default HomeComponent;
