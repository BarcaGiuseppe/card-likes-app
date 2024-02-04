import styled from "styled-components";
import { ChangeRootFunction } from "../App";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faHome } from "@fortawesome/free-solid-svg-icons";

const NavContainer = styled.div(() => ({
  display: "flex",
  justifyContent: "space-around",
  alignItems: "end",
  backgroundColor: "#d1d1d1",
  boxShadow: "0 1px 3px 1px rgba(0, 0, 0, 0.3)",
}));

const NavItem = styled.div(() => ({
  display: "flex",
  gap: "10px",
  marginLeft: "auto",
}));

const Item = styled.h3(() => ({
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
    changeRoot(target.innerText);
  };
  return (
    <NavContainer>
      <NavItem>
        <Item onClick={handleOnClick}>
          <FontAwesomeIcon icon={faHome} /> Home
        </Item>
        <Item onClick={handleOnClick}>
          <FontAwesomeIcon icon={faHeart} color="red" /> Likes
        </Item>
      </NavItem>
    </NavContainer>
  );
};

export default NavComponent;
