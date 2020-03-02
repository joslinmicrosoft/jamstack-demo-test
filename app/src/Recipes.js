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
		) : 
		(
          fetchedData.map(recipe => (
			<div class="row marketing">
				<div class="col">
				  <h2>{recipe.name}</h2>
				  <h3>Serves {recipe.quantity}</h3>
				  <h3>Ingredients</h3>
				  <ul id="metric" class="ingredients">
					recipes.ingredients.map(ingredient => (<li>{ingredient}</li>))
				  </ul>
				</div>
			</div>)
			)
		)
		}
      </header>
    </div>
    )
  }
}

export default Recipes