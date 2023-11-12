import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const HomeWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 20px 100px;
`;

export const MoviesListWrapper = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
`;

export const MoviesItem = styled.li`
  width: calc((100% - 60px) / 4);
  height: 200px;
  border-radius: 20px;
  overflow: hidden;
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
`;

export const StyledLink = styled(NavLink)`
  object-fit: contain;
  position: relative;

  & > img {
    display: block;
    height: 100%;
    width: 100%;

    object-fit: cover;
    object-position: 50% 50%;
  }
`;

export const MoviesItemInfo = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 150px;
  z-index: 2;
  background: rgb(0, 0, 0);
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 1) 20%,
    rgba(0, 0, 0, 0.2763699229691877) 77%,
    rgba(0, 0, 0, 0) 100%
  );

  padding: 20px;
  display: flex;
  align-items: flex-end;
`;

export const MoviesItemText = styled.div`
width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
`;

export const MoviesItemTitle = styled.p`
  font-size: 16px;
  font-weight: 700;
  color: #e8e8e8;
`;

export const MoviesItemRating= styled.div`
  font-size: 14px;
  font-weight: 500;
  color: #e8e8e8;
`;

