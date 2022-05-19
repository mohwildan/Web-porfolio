import { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import Link from "next/link";
import styled from "styled-components";
import { BsMoon, BsSun } from "react-icons/bs";
function Navbar() {
  const [click, setClick] = useState(false);

  const closeMenuMobile = () => setClick(false);
  const context = useContext(AppContext);
  return (
    <NavHeader>
      <NavContainer>
        <Link href="/">
          <NavLogo>
            M<span>W</span>
          </NavLogo>
        </Link>
        <NavMenu click={click}>
          <NavList onClick={closeMenuMobile}>
            <Link href="/">
              <NavItem>Home</NavItem>
            </Link>
          </NavList>
          <NavList onClick={closeMenuMobile}>
            <Link href="/AboutMe">
              <NavItem>About</NavItem>
            </Link>
          </NavList>
          <NavList onClick={closeMenuMobile}>
            <Link href="/">
              <NavItem>Porfolio</NavItem>
            </Link>
          </NavList>
          <NavList onClick={closeMenuMobile}>
            <Link href="/">
              <NavItem>Contact</NavItem>
            </Link>
          </NavList>
        </NavMenu>
        <NavTheme
          onClick={() =>
            context.setTheme(context.theme === "dark" ? "white" : "dark")
          }
        >
          {context.theme === "dark" ? <BsMoon /> : <BsSun /> }
        </NavTheme>
        <NavToggle onClick={() => setClick(!click)}>
          <NavToggleList className={click && "toggle"}></NavToggleList>
          <NavToggleList className={click && "toggle"}></NavToggleList>
          <NavToggleList className={click && "toggle"}></NavToggleList>
        </NavToggle>
      </NavContainer>
    </NavHeader>
  );
}

export default Navbar;

const NavHeader = styled.div`
  width: 100%;
  position: relative;
  left: 0;
  right: 0;
  height: 80px;
  z-index: 1000;
  display: flex;
  align-items: center;
`;
const NavContainer = styled.div`
  position: relative;
  width: min(100%, 75rem);
  margin-inline: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1.5rem;
`;
const NavLogo = styled.h1`
  font-size: clamp(2rem, 1.0625rem + 3vw, 3.3125rem);
  color: ${({ theme }) => theme.title};
  cursor: pointer;
  font-weight: 500;

  span {
    color: #dbde3d;
  }
`;
const NavMenu = styled.ul`
  display: flex;
  list-style: none;

  @media (max-width: 768px) {
    position: absolute;
    left: ${(props) => (props.click ? "0" : "-100%")};
    top: 80px;
    flex-direction: column;
    width: 100%;
    height: calc(100vh - 80px);
    justify-content: center;
    align-items: center;
    font-size: clamp(2rem, 0.6588rem + 4.2918vw, 2.625rem);
    background: ${({ theme }) => theme.body};
    transition: 0.3s ease-in-out;
  }
`;
const NavList = styled.li`
  margin-right: 3.938rem;

  @media (max-width: 768px) {
    margin: 1rem 0;
  }
`;
const NavItem = styled.a`
  color: ${({ theme }) => theme.title};
  opacity: 0.8;
  cursor: pointer;
  letter-spacing: 0.145em;
  transition: opacity 0.3s;
  font-size: clamp(1rem, 0.9107rem + 0.2857vw, 1.125rem);
  position: relative;

  &:hover {
    opacity: 1;
  }

  &::after {
    content: "";
    position: absolute;
    width: 0%;
    height: 3px;
    background: #dbde3d;
    left: 50%;
    bottom: 0;
    transition: 0.3s;
  }

  &:hover::after {
    width: 100%;
    left: 0;
  }

  @media (max-width: 768px) {
    font-size: clamp(1rem, 1.5536rem + 1.4286vw, 2.625rem);
  }
`;

const NavToggle = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: block;
  }
`;
const NavToggleList = styled.div`
  width: 2.4rem;
  height: 3px;
  background-color: ${({ theme }) => theme.title};
  border-radius: 4px;
  display: block;
  margin-block: 8px;
  transition: 0.3s;
`;
const NavTheme = styled.div`
  color: ${({ theme }) => theme.title};
  font-size: 1.8rem;
  cursor: pointer;
  position: relative;
  user-select: none;


`;
