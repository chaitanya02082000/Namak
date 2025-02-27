import React, { useState } from 'react';
import './App.css';
import RecipeInput from './recipeInput';
function App() {
  const [recipeUrl, setRecipeUrl] = useState('');
  
  const handleRecipeSubmit = (url) => {
    setRecipeUrl(url);
    console.log('Recipe URL submitted:', url);
    // Later you'll parse the recipe here or call a service
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Recipe Saver</h1>
      </header>
      <main>
        <RecipeInput onRecipeSubmit={handleRecipeSubmit} />
        {recipeUrl && (
          <div className="submitted-url">
            <h3>Last Submitted URL:</h3>
            <p>{recipeUrl}</p>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;