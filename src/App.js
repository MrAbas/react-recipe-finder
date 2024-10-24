import { useState } from "react";
import axios from "axios";
import Header from "./components/Header";
import RecipeComponent from "./components/Recipe";
import styled from "styled-components"

const APP_ID = "d5c0ebd9";
const APP_KEY = "6d0934500325f6c98e5783b6803be6a7";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const RecipeListContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 20px;
  padding: 30px;
`;

const Placeholder = styled.img`
  width: 120px;
  height: 120px;
  margin: 200px;
  opacity: 50%;
`;

export default function App() {
  const [recipeList, setRecipeList] = useState([]);
  
  const fetchRecipe = async (searchString) => {
    const response = await axios.get(
       `https://api.edamam.com/search?q=${searchString}&app_id=${APP_ID}&app_key=${APP_KEY}`
     );
     setRecipeList(response.data.hits)
   }

  return (
    <Container>
      <Header setRecipeList={setRecipeList} fetchRecipe={fetchRecipe}/>
      <RecipeListContainer>
        {recipeList.length ?
          recipeList.map((recipeObj, index) => (
          <RecipeComponent key={index} recipeObj={recipeObj.recipe}/>
          )) : <Placeholder src="hamburger.svg" alt=""/>}
      </RecipeListContainer>
    </Container>
  );
}
