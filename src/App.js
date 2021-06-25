
import './App.css';
import { useState } from 'react';
import RecipeWindow from './components/RecipeWindow';

function App() {

  const YOUR_APP_ID = '88107293';
  const YOUR_APP_KEY = '04f0381c890da2cbb3eed46f8dcfd8ee';

  const [query, setQuery] = useState('');
  const [recipes, setRecipes] = useState([]);

  const url = `https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}`;
  
 

  const getRecipes = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setRecipes(data.hits);
  };

  const submitHandler = function (e) {
    e.preventDefault();
    getRecipes();
  };
  
  
  return (
    <div className="App">
      <h1>Search your Recipe</h1>
        <form className="form-control" onSubmit={submitHandler}>
          <input type = "text" placeholder= "Search for main ingredient"
           className="input-search" value={query}
           onChange={(e) => setQuery(e.target.value)}
           />
          <input type="submit" value="Submit" className="btn-submit"/>       
        </form>

        <RecipeWindow recipes={recipes}/>
    </div>
  );
}

export default App;
