import styled from "styled-components"


export const HeaderContainer = styled.div`
  color: white;
  background-color: black;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  font-size: 25px;
  font-weight: bold;
  box-shadow: 0 3px 6px 0 #255;
`;

export const AppNameComponent = styled.div`
  display: flex;
  align-items: center;
`;

export const AppIcon = styled.img`
  width: 36px;
  height: 36px;
  margin: 15px;
`;

export const SearchContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: white;
  padding: 10px;
  border-radius: 6px;
  width: 50%;
`;

export const SearchIcon = styled.img`
 width: 32px;
 height: 32px;
`;

export const SearchInput = styled.input`
  width: 100%;
  border: none;
  outline: none;
  margin: 15px;
  font-size: 16px;
  font-weight: bold;
`;

