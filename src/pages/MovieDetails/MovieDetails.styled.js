import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const MovieDetailsWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  gap: 40px;

  padding: 20px 200px;
`;

export const BackLink = styled(NavLink)`
  background-color: white;
  width: fit-content;
  font-size: 12px;
  text-decoration: none;
  font-weight: 700;
  padding: 6px 8px;
  color: black;
  border-radius: 14px;

  display: flex;
  align-items: center;
  gap: 5px;
`;

export const MovieDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
`;

export const MovieInfoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;
`;

export const MovieImage = styled.img`
  border-radius: 20px;
  overflow: hidden;
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: flex-start;
`;
export const MovieHeading = styled.h1`
  color: #e8e8e8;
  font-weight: 500;
  font-size: 40px;

  margin-bottom: 20px;
`;

export const MovieText = styled.p`
  color: #e8e8e8;
  font-weight: 400;
  font-size: 18px;
`;

export const MovieOverview = styled.p`
  color: #b0b0b0;
  font-weight: 400;
  font-size: 16px;

  width: 350px;
`;

export const GenresContainer = styled.ul`
  display: flex;
  align-items: center;
  gap: 14px;

  margin-top: 10px;
`;

export const Genre = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px 14px;
  border: 1px solid #e8e8e8;
  border-radius: 16px;
  color: #e8e8e8;
`;

export const DetailsContainer = styled.ul`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

export const DetailLink = styled(NavLink)`
  font-size: 16px;
  text-decoration: none;
  color: #e8e8e8;
  position: relative;
  padding: 10px 2px;

  &.active{
   border-bottom: 1px #e8e8e8 solid;
  }
`;