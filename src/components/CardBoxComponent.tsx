import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import {
  utilityChangeDataCardLike,
  utilityAddDataCardToLS,
  utiliyGetDataCardFromLS,
} from "../utility";
import { useEffect, useState } from "react";
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
  boxShadow: "2px 2px 10px 2px rgba(0, 0, 0, 0.3)",
  overflow: "hidden",
}));

const Img = styled.img(() => ({
  borderTopLeftRadius: "8px",
  borderTopRightRadius: "8px",
  maxWidth: "100%",
  objectFit: "cover",
}));

const TitleContainer = styled.div(() => ({
  display: "flex",
  justifyContent: "space-between",
}));
const Title = styled.h2(() => ({
  textAlign: "center",
  margin: "10px",
  marginLeft: "20px",
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
  marginRight: "20px",
}));

const Description = styled.p(() => ({
  textAlign: "center",
  margin: "10px",
  marginBottom: "20px",
  fontSize: "medium",
}));

const CardBoxComponent: React.FC<{ isLikes: boolean; dataC: Array<Icard> }> = ({
  isLikes,
  dataC,
}): JSX.Element => {
  const [dataCard, setDataCard] = useState<Icard[]>(dataC);

  useEffect(() => {
    setDataCard(dataC);
  }, [dataC]);
  const handleClickHeart = (id: number): void => {
    utilityChangeDataCardLike(id);
    setDataCard(utiliyGetDataCardFromLS()!);
  };
  return isLikes ? (
    <CardContainer>
      {dataCard.map(
        (elem) =>
          elem.isLike && (
            <Card key={elem.id}>
              <Img src={elem.url} alt={elem.title}></Img>
              <TitleContainer>
                <Title>{elem.title}</Title>
                <HeartButton
                  onClick={() => handleClickHeart(elem.id)}
                  isLike={elem.isLike}
                >
                  <FontAwesomeIcon icon={faHeart} />
                </HeartButton>
              </TitleContainer>
              <Description>{elem.description}</Description>
            </Card>
          )
      )}
    </CardContainer>
  ) : (
    <CardContainer>
      {dataCard.map((elem) => (
        <Card key={elem.id}>
          <Img src={elem.url} alt={elem.title}></Img>
          <TitleContainer>
            <Title>{elem.title}</Title>
            <HeartButton
              onClick={() => handleClickHeart(elem.id)}
              isLike={elem.isLike}
            >
              <FontAwesomeIcon icon={faHeart} />
            </HeartButton>
          </TitleContainer>
          <Description>{elem.description}</Description>
        </Card>
      ))}
    </CardContainer>
  );
};

export default CardBoxComponent;
