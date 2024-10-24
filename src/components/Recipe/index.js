import { useState } from "react";
import { Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";
import * as Styled from './styles';

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
          <Styled.SeeNewTab onClick={() => window.open(recipeObj.url)}>See More</Styled.SeeNewTab>
          <Styled.SeeMoreText onClick={() => setShow(false)}>Close</Styled.SeeMoreText>
        </DialogActions>
      </DialogTitle>
    </Dialog>
    <Styled.RecipeContainer>
      <Styled.CoverImage src={recipeObj.image} alt=""/>
      <Styled.RecipeName>{recipeObj.label}</Styled.RecipeName>
      <Styled.IngredientsText onClick={() => setShow(true)}>Ingredients</Styled.IngredientsText>
      <Styled.SeeMoreText onClick={() => window.open(recipeObj.url)}>See Complete Recipe</Styled.SeeMoreText>
    </Styled.RecipeContainer>
    </>
  )
}
