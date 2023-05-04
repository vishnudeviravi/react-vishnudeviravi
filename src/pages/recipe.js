import styles from "@/styles/recipe.module.css";
import Input from "@/components/Input";
import RecipeCard from "@/components/RecipeCard";
import { useState } from "react";

const recipes = [
  {
    title: "Butter Chicken",
    image: "/images/butter-chicken.jpg",
    description:
      "Tender and juicy chicken thanks to a deliciously spiced yogurt marinade,Butter Chicken is ridiculously easy to make. The curry sauce is out of this world!",
  },
  {
    title: "Gobi Manchurian",
    image: "/images/gobi-manchurian.jpg",
    description:
      "Tender and juicy chicken thanks to a deliciously spiced yogurt marinade,Butter Chicken is ridiculously easy to make. The curry sauce is out of this world!",
  },
  {
    title: "Biriyani",
    image: "/images/biriyani.jpeg",
    description:
      "Tender and juicy chicken thanks to a deliciously spiced yogurt marinade,Butter Chicken is ridiculously easy to make. The curry sauce is out of this world!",
  },
  {
    title: "Alfaham",
    image: "/images/alfaham.jpg",
    description:
      "Tender and juicy chicken thanks to a deliciously spiced yogurt marinade,Butter Chicken is ridiculously easy to make. The curry sauce is out of this world!",
  },
  {
    title: "Chilli Chicken",
    image: "/images/chilli-chicken.jpg",
    description:
      "Tender and juicy chicken thanks to a deliciously spiced yogurt marinade,Butter Chicken is ridiculously easy to make. The curry sauce is out of this world!",
  },
];

const Recipe = () => {
  const [recipe, setRecipe] = useState(recipes);
  const [value, setValue] = useState("");

  const onHandleChange = e => {
    console.log(e.target.value);
    setValue(e.target.value);

    if (e.target.value == "") {
      setRecipe(recipes);
    } else {
      const searchedRecipe = recipes.filter(i =>
        i.title.toLowerCase().includes(e.target.value.toLowerCase())
      );
      setRecipe(searchedRecipe);
    }
  };

  return (
    <div className={styles.recipeContainer}>
      <h1>Find your Recipe</h1>
      <Input onHandleChange={onHandleChange} />
      <div className={styles.recipeCardContainer}>
        {recipe.map(recipeee => (
          <RecipeCard recipe={recipeee} />
        ))}
      </div>
    </div>
  );
};

export default Recipe;
