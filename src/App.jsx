import RecipeItem from "./recipe-item/RecipeItem";
import Header from "./header/Header"

function App() {
  return (
    <section>
      <Header />
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
    </section>
  );
}

export default App;


