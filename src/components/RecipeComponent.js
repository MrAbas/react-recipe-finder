import { useState } from "react";
import { Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";
import styled from "styled-components"

const RecipeContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px;
  width: 300px;
  box-shadow: 0 3px 10px 0 #aaa;
`;

const CoverImage = styled.img`
  object-fit: cover;
  height: 200px;
`;

const RecipeName = styled.span`
  font-size: 18px;
  font-weight: 600;
  color: black;
  margin: 10px 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const SeeMoreText = styled.span`
  color: #eb3300;
  font-size: 18px;
  text-align: center;
  border: solid 1px #eb3300;
  border-radius: 3px;
  padding: 10px 15px;
  cursor: pointer;
`;

const IngredientsText = styled(SeeMoreText)`
  color: green;
  border: solid 1px green;
  margin-bottom: 12px;
`;

const SeeNewTab = styled(SeeMoreText)`
  color: green;
  border: solid 1px green;
`;



export default function RecipeComponent(props) {
  const { recipeObj } = props;
  const [show, setShow] = useState(false);

  return (
    <>
    <Dialog open={show}>
      <DialogTitle>
        <DialogContent>
        <table>
            <thead>
              <tr>
                <th>Ingredient</th>
                <th>Weight</th>
              </tr>
            </thead>
            <tbody>
              {recipeObj.ingredients.map((ingredient, index) => (
                <tr key={index}>
                  <td>{ingredient.text}</td>
                  <td>{ingredient.weight}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </DialogContent>
        <DialogActions>
          <SeeNewTab onClick={() => window.open(recipeObj.url)}>See More</SeeNewTab>
          <SeeMoreText onClick={() => setShow(false)}>Close</SeeMoreText>
        </DialogActions>
      </DialogTitle>
    </Dialog>
    <RecipeContainer>
      <CoverImage src={recipeObj.image} alt=""/>
      <RecipeName>{recipeObj.label}</RecipeName>
      <IngredientsText onClick={() => setShow(true)}>Ingredients</IngredientsText>
      <SeeMoreText onClick={() => window.open(recipeObj.url)}>See Complete Recipe</SeeMoreText>
    </RecipeContainer>
    </>
  )
}
