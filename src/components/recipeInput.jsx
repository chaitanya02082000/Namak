import React, { useState } from 'react';
 
function RecipeInput({ onRecipeSubmit }) {
  const [url, setUrl] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Basic URL validation
    if (!url || !url.startsWith('http')) {
      setError('Please enter a valid URL');
      return;
    }
    
    setIsLoading(true);
    setError('');
    
    try {
      // This is where you'll later connect to your parser service
      // For now, just pass the URL to the parent component
      onRecipeSubmit(url);
    } catch (err) {
      setError('Failed to process recipe URL');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="recipe-input-container">
      <h2>Add a New Recipe</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="recipe-url">Recipe URL</label>
          <input
            type="text"
            id="recipe-url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="https://example.com/recipe"
            disabled={isLoading}
          />
        </div>
        {error && <p className="error-message">{error}</p>}
        <button 
          type="submit" 
          className="submit-button"
          disabled={isLoading}
        >
          {isLoading ? 'Processing...' : 'Add Recipe'}
        </button>
      </form>
    </div>
  );
}

export default RecipeInput;