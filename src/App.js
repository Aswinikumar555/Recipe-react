import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom'
import {connect} from 'react-redux';
import RecpList from './components/RecpList'
import RecpSearch from './components/RecpSearch'


class App extends Component {
  state={
    recipes:[],
    newObj:{}

 }

componentDidMount(){
this.setState({
        recipes:this.props.recpi
     })
    
}

postData = (recp,ingre,initruct,ingre2,initruct2) => {

  const index = this.state.recipes.findIndex((b) =>{
    return b.id === recp.id;
  })

  const book= Object.assign({},this.state.recipes[index])
  book.ingredients = ingre
  book.instructions = initruct
  book.ingredients2 = ingre2
  book.instructions2 = initruct2

  const books=Object.assign([],this.state.recipes)
  books[index]=book

  this.setState({recipes:books})

}

deleteRecp = (recp) =>{
  
  const index = this.state.recipes.findIndex((b) =>{
    return b.id === recp.id;
  })
  const users=Object.assign([],this.state.recipes)
    users.splice(index,1)
    this.setState({recipes:users})

}


newRecp = (ingredients,instructions,ingredients2,instructions2) => {
  const ob ={
    ingredients,instructions,
    ingredients2,instructions2
  }
  const list = this.state.recipes
  list.push(ob)

}
 

  render() { 
    return (
      
        <div className="app">

        <Route exact path="/" render={() => (
            <RecpList recipes={this.state.recipes} 
            postData = {this.postData}
            deleteRecp= {this.deleteRecp}
           
                 
            /> )} />
                      

          <Route exact path="/search" render={() => (
            <RecpSearch 
                newRecp = {this.newRecp}
              /> )} />
          
        </div>
    
    );
  }
}

function mapStateToProps(state) {
  return {
      recpi: state.TotalData
  };
}

export default connect(mapStateToProps)(App)
