import RecipeItem from "./recipe-item/RecipeItem";
import {BsFillBagHeartFill} from 'react-icons/bs'

function App() {
  return (
    <section>
      <header>
      <BsFillBagHeartFill/>
      </header>
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


