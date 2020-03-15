import React from "react";

const Recipe = ({ title, calories, image, ingredients }) => {
  return (
    <div style={styles.recipe}>
      <h1>{title}</h1>
      {ingredients.map(ingredient => (
        <li>{ingredient.text}</li>
      ))}
      <p>Calories: {calories.toFixed(0)}</p>
      <img style={styles.image} src={image} alt="" />
    </div>
  );
};

export default Recipe;

const styles = {
  recipe: {
    borderRadius: "10px",
    boxShadow: "0px 5px 20px grey",
    margin: "20px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    background: "white",
    alignItems: "center",
    minWidth: "40px"
  },
  image: {
    borderRadius: "50%",
    width: "100px",
    height: "100px"
  }
};
