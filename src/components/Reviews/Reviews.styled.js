import styled from 'styled-components';

export const ReviewsWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 20px;
`;

export const ReviewsItem = styled.li`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 10px;

  border-radius: 15px;
  border: 1px #e8e8e8 solid;

  padding: 20px;
`;

export const ReviewsAuthor = styled.p`
 color: #e8e8e8;
  font-size: 16px;
`

export const ReviewsAuthorText = styled.p`
 color: #b0b0b0;
  font-size: 14px;
`

export const ReviewsNoInfo = styled.div`
  color: #e8e8e8;
  font-size: 14px;
`;