import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { utiliyGetDataCardFromLS } from "../utility";
import { useState } from "react";
import { Icard } from "../interfaces/Icard";

const CardContainer = styled.div(() => ({
  display: "flex",
  flexWrap: "wrap",
  margin: "20px",
}));

const Card = styled.div(() => ({
  display: "flex",
  flexDirection: "column",
  border: "1px solid black",
  borderRadius: "12px",
  justifyContent: "space-around",
  margin: "10px",
  maxWidth: "300px",
}));

const Img = styled.img(() => ({ borderRadius: "8px", maxWidth: "100%" }));

const TitleContainer = styled.div(() => ({
  display: "flex",
  justifyContent: "space-between",
}));
const Title = styled.h2(() => ({
  textAlign: "center",
  margin: "10px",
}));

const HeartButton = styled.button<{ isLike: boolean }>((props) => ({
  background: "transparent",
  border: "none",
  cursor: "pointer",
  padding: 0,
  fontSize: "2em",
  color: props.isLike ? "red" : "",
  outline: "none",
  margin: "10px",
}));

const CardBoxComponent: React.FC<{ isLikes: boolean }> = ({
  isLikes,
}): JSX.Element => {
  const [dataCard, setDataCard] = useState<Icard[]>(
    utiliyGetDataCardFromLS() !== null ? utiliyGetDataCardFromLS()! : []
  );
  console.log("isLike" + isLikes);
  //const dataCard = isLikes ? utilityGetLikesCards() : utilityGetCards();
  //const dataCard = utilityGetCards();
  console.log(dataCard.length);
  return isLikes ? (
    <CardContainer>
      {dataCard.map(
        (elem) =>
          elem.isLike && (
            <Card>
              <Img src={elem.url} alt={elem.title}></Img>
              <TitleContainer>
                <Title>{elem.title}</Title>
                <HeartButton isLike={elem.isLike}>
                  <FontAwesomeIcon icon={faHeart} />
                </HeartButton>
              </TitleContainer>
            </Card>
          )
      )}
    </CardContainer>
  ) : (
    <CardContainer>
      {dataCard.map((elem) => (
        <Card>
          <Img src={elem.url} alt={elem.title}></Img>
          <TitleContainer>
            <Title>{elem.title}</Title>
            <HeartButton isLike={elem.isLike}>
              <FontAwesomeIcon icon={faHeart} />
            </HeartButton>
          </TitleContainer>
        </Card>
      ))}
    </CardContainer>
  );
};

export default CardBoxComponent;
