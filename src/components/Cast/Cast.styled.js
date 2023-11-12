import styled from 'styled-components';

export const CastWrapper = styled.ul`
  margin-top: 20px;

  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-wrap: wrap;
  gap: 40px;
`;

export const CastItemWrapper = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

export const CastItemImg = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 50%;
  overflow: hidden;
`;

export const CastItemName = styled.p`
  color: #e8e8e8;
  font-size: 14px;
  text-align: center;

`;

export const CastItemRole = styled.p`
  color: #e8e8e8;
  font-size: 12px;
  text-align: center;
`;

export const CastNoInfo = styled.div`
  color: #e8e8e8;
  font-size: 14px;
`;
