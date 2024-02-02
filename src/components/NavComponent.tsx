import styled from "styled-components";
import { ChangeRootFunction } from "../App";

const NavContainer = styled.div(() => ({
  display: "flex",
  justifyContent: "space-around",
  alignItems: "end",
  backgroundColor: "#D2B48C",
}));

const NavItem = styled.div(() => ({
  display: "flex",
  gap: "10px",
  marginLeft: "auto", // Spinge il contenitore dei pulsanti verso la fine del NavContainer
}));

const Item = styled.h3(() => ({
  background: "#717D7E",
  color: "white",
  fontSize: "1em",
  margin: "1em",
  padding: "0.25em 1em",
  border: "2px solid black",
}));
const NavComponent: React.FC<{ changeRoot: ChangeRootFunction }> = ({
  changeRoot,
}): JSX.Element => {
  const handleOnClick = (event: React.MouseEvent<HTMLHeadingElement>): void => {
    const target = event.target as HTMLInputElement;
    console.log(target.innerText);
    changeRoot(target.innerText);
  };
  return (
    <NavContainer>
      <NavItem>
        <Item onClick={handleOnClick}>Home</Item>
        <Item onClick={handleOnClick}>Likes</Item>
      </NavItem>
    </NavContainer>
  );
};

export default NavComponent;
