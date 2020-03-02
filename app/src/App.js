import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
 
import Home from './Home';
import Authenticated from './Authenticated';
import Recipes from './Recipes';

class App extends Component {
  render() {
    return (      
       <BrowserRouter>
        <div>
            <Switch>
             <Route path="/" component={Home} exact/>
             <Route path="/authenticated" component={Authenticated}/>
             <Route path="/recipes" component={Recipes}/>
           </Switch>
        </div> 
      </BrowserRouter>
    );
  }
}
 
export default App;