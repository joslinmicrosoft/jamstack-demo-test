import React from 'react';
import './App.css';

class Recipes extends React.Component {
  state = {
    loading: true,
    error: false,
    fetchedData: [],
  }

  componentDidMount() {
    fetch("/.api/GetJamRecipes")
      .then(response => {
        return response.json()
      })
      .then(json => {
        this.setState({
          fetchedData: json.results,
          loading: false,
        })
      })
  }

  render() {
    const { loading, fetchedData } = this.state
    return (
    <div className="App">
      <header className="App-header">
      <h1>JAM Recipes</h1>
        {loading ? (
          <p>Searching for recipes ..... </p>
        ) : (
          fetchedData.map(recipe => (
            <p key={recipe.name}>{recipe.name}</p>
            <p>Makes {recipe.quantity}</p>
            <p>Ingredients
            <ul>
                recipe.ingredients.map(ingredient => <li>{ingredient}</li>)
            </ul>
            </p>
          ))
        )}
      </header>
    </div>
    )
  }
}

export default Recipes