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
<div class="row marketing">
	<div class="col">
      <h1>{recipe.name}</h1>
      <h2>Serves {recipe.quantity}</h2>
	</div>
</div>
)))}
      </header>
    </div>
    )
  }
}

export default Recipes