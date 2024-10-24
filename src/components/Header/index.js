
import { useState } from "react";
import * as Styled from './styles';

export default function Header({setRecipeList, fetchRecipe}) {
  const [timeoutId, setTimeoutId] = useState();

  const onTextChange = (e) => {
    clearTimeout(timeoutId);
    const timeout = setTimeout(() => fetchRecipe(e.target.value), 500);
    setTimeoutId(timeout);
  }
  
  return (
    <Styled.HeaderContainer>
        <Styled.AppNameComponent>
          <Styled.AppIcon src="hamburger.svg" alt=""/>
          <span>Recipe Finder</span>
          </Styled.AppNameComponent>
        <Styled.SearchContainer>
          <Styled.SearchIcon src="/searchIcon.svg" alt=""/>
          <Styled.SearchInput placeholder="Search Recipe" onChange={onTextChange}/>
        </Styled.SearchContainer>
      </Styled.HeaderContainer>
  )
}


