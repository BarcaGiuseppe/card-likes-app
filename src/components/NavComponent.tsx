import styled from "styled-components";
import { ChangeRootFunction } from "../App";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faHome } from "@fortawesome/free-solid-svg-icons";

const NavContainer = styled.div(() => ({
  display: "flex",
  justifyContent: "space-around",
  alignItems: "end",
  backgroundColor: "whitesmoke",
  boxShadow: "0 1px 3px 1px rgba(0, 0, 0, 0.3)",
}));

const NavItem = styled.div(() => ({
  display: "flex",
  gap: "10px",
  marginLeft: "auto",
}));

const Item = styled.h3(() => ({
  color: "black",
  cursor: "pointer",
  fontSize: "1em",
  margin: "1em",
  padding: "0.25em 1em",
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
        <Item onClick={handleOnClick}>
          <FontAwesomeIcon icon={faHome} /> Home
        </Item>
        <Item onClick={handleOnClick}>
          <FontAwesomeIcon icon={faHeart} /> Likes
        </Item>
      </NavItem>
    </NavContainer>
  );
};

export default NavComponent;
