import styled from 'styled-components';

export const MoviesWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  gap: 40px;
  padding: 20px 200px;
`;

export const SearchBar = styled.div`
  display: flex;
  align-items: center;
  
`;

export const SearchInput = styled.input`
  font-family: inherit;
  font-size: inherit;
  background-color: #f4f2f2;
  border: none;
  color: #646464;
  padding: 10px 20px;
  border-radius: 30px;
  width: 200px;
  margin-right: 10px;
`;

export const SearchBtn = styled.button`
  background-color: #f4f2f2;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  width: 38px;
  height: 38px;
`;
