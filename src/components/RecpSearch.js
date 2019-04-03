import React, { Component } from 'react'
import './Recpsearch.css'
import { Link } from 'react-router-dom'

class RecpSearch extends Component {
  constructor(){
    super()
    this.state = {
      ingredients:"",
      instructions:"",
      ingredients2:"",
      instructions2:""
  
    }
    this.dataChange = this.dataChange.bind(this)
  }

  dataChange(event){
    this.setState({
      [event.target.name]:event.target.value
    })

  }

  
  render() {
    const {newRecp} = this.props
    const ingredients = this.state.ingredients
    const instructions =  this.state.instructions
    const ingredients2 = this.state.ingredients2
    const instructions2 =  this.state.instructions2
    return (
    
      <div className="search">
      <div className="close-search">
      <Link to="/" className="close-search">Close</Link>
      </div>
        <div className="from-div">
        <div className="from-div-grid">

            <div className="ingredients-search">
                  <input
                      name="ingredients"
                      value={this.state.ingredients} 
                      onChange={this.dataChange}
                      className="add-ingredients" type="text" 
                      placeholder="ingredients" 
                  /><br/><br/>
                  <input
                      name="ingredients2"
                      value={this.state.ingredients2} 
                      onChange={this.dataChange}
                      className="add-ingredients" type="text" 
                      placeholder="ingredients" 
                  /><br/>
            </div>
              <div className="instructions-search">
                <input
                      name="instructions"
                      value={this.state.instructions} 
                      onChange={this.dataChange}
                      className="add-instructions" type="text"
                      placeholder="instructions" 
                    /><br/><br/>
                    <input
                      name="instructions2"
                      value={this.state.instructions2} 
                      onChange={this.dataChange}
                      className="add-instructions" type="text"
                      placeholder="instructions" 
                    /><br/>
              </div>
        
        </div>
        <button className="add-button" onClick={() => newRecp(ingredients,instructions,ingredients2,instructions2)}>Add</button>
        </div>
      </div>
    )
  }
}

export default RecpSearch