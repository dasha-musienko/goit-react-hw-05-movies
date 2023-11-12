import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const PageWrapper = styled.div`
  width: 100%;
`;

export const NavWrapper = styled.nav`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 30px 0;
`;

export const LinksWrapper = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 30px;
`;

export const StyledLink = styled(NavLink)`
  box-sizing: content-box;
  color: white;
  font-size: 18px;
  text-decoration: none;
  font-weight: 500;
  padding: 8px 12px;
  border: 1px transparent solid;
  border-radius: 15px;
  transition: all 0.1s linear;

  &.active {
    border: 1px white solid;
    border-radius: 20px;
  }
`;
