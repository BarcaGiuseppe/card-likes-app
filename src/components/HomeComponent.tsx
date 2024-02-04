import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import NavComponent from "./NavComponent";
import FormComponent from "./FormComponent";
import CardBoxComponent from "./CardBoxComponent";
import { useEffect, useState } from "react";
import { utiliyGetDataCardFromLS } from "../utility";

const HomeContainer = styled.div(() => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
}));

const ButtonLikes = styled.button(() => ({
  background: "#717D7E",
  color: "white",
  fontSize: "1em",
  margin: "1em",
  padding: "0.25em 1em",
  border: "2px solid black",
}));

const HomeComponent = (): JSX.Element => {
  const [isSub, setIsSub] = useState<boolean>(false);
  const dataCard =
    utiliyGetDataCardFromLS() !== null ? utiliyGetDataCardFromLS()! : [];

  const handleSubmitForm = (): void => {
    setIsSub(!isSub);
  };
  useEffect(() => {}, [isSub]);
  return (
    <>
      <HomeContainer>
        <FormComponent submit={handleSubmitForm}></FormComponent>
        <CardBoxComponent isLikes={false} dataC={dataCard}></CardBoxComponent>
      </HomeContainer>
    </>
  );
};

export default HomeComponent;
