import RecipeItem from "./recipe-item/RecipeItem";

function App() {
  return (
    <div>
      <RecipeItem recipe ={{
        id: 1,
        name: 'Pizza',
      }}
      />
      <RecipeItem recipe ={{
        id: 2,
        name: 'Pasta',
      }}
      />
      <RecipeItem recipe ={{
        id: 3,
        name: 'Carry',
      }}
      />
    </div>
  );
}

export default App;
