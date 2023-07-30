import RecipeItem from "./recipe-item/RecipeItem";
import Header from "./header/Header"
import { useGetRecipesQuery } from "./store/api/api";
import CreateRecipe from "./components/CreateRecipe";



function App() {
   const { isLoading, data } =
    useGetRecipesQuery(null)


  return (
    <section>
      <Header />
      <CreateRecipe />
      <div>
        {isLoading ? (
          <div>Loading...</div>
        ) : data ? (
          data.map(recipe => <RecipeItem key=
            {recipe.id} recipe={recipe}/>)
        ) : (
          <div> Not found </div>
        )}
      </div>
    </section>
  );
}

export default App;


