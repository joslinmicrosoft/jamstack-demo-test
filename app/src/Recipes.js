import React from 'react';
import logo from './logo.svg';
import './App.css';

class Recipes extends React.Component {
  state = {
    loading: true,
    error: false,
    fetchedData: [],
  }

  componentDidMount() {
    fetch("/.api/GetRecipes")
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
        <p>
          Thank you for logging in!
        </p>
		{loading ? (
          <p>Searching galaxy ..... </p>
        ) : (
          fetchedData.map(recipe => (
            <p key={recipe.name}>{recipe.name}</p>
          ))
        )}
      </header>
    </div>
    )
  }
}

export default FunctionsPage