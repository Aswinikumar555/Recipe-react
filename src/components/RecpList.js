import React, { Component } from 'react'
import '../App.css'
import { Link } from 'react-router-dom'
class RecpList extends Component {
constructor(){
    super()
    this.state={
        ingredients:"",
        instructions:"",
        ingredients2:"",
        instructions2:"",
        editrecpALL:[],


    }
    this.editData = this.editData.bind(this);
   this.dataChange= this.dataChange.bind(this);
    
}

dataChange(event){
    console.log(event.target.value)
    this.setState({
      [event.target.name]:event.target.value
    })
  }


editData = (book) => {
    this.setState({
        editrecpALL:book
    })
}

destroy = () =>{
    this.setState({
        editrecpALL:""
    })
}
delete_destroy = () =>{
    this.setState({
        editrecpALL:""
    })
}

render() { 
    const { recipes , postData,deleteRecp} = this.props
    const editRecp = this.state.editrecpALL
    const ingredients = this.state.ingredients
    const instructions = this.state.instructions
    const ingredients2 = this.state.ingredients2
    const instructions2 = this.state.instructions2
return (
    <div>
        {this.state.editrecpALL.length === 0 ?
        <div className="recphelf">
        <h2 className="recphelf-title">Recipes</h2>
        <div className="recphelf-books">
            <ol className="recphelf-grid">
                {recipes.map((book) => 
                    <div key={book.id} className="book">
                        <div className="top">
                            <div className="recp_img_box">
                                 <div className="recp_img_box_top">
                                     <div className="cover" key={book.id} > <img src={book.thumbnail} class="image" alt="s" /> </div>
                                 </div>
                            </div>
                        </div>
                        <span>
                            <div>
                                <h4 className="ingredients">Ingredients</h4>
                                <div className="ingredients" key={book.ingredients}>{book.ingredients}</div>
                                <div className="ingredients" key={book.ingredients}>{book.ingredients2}</div>

                            </div>

                        </span>
                        <span>
                            <div>
                                <h4 className="instructions">Instructions</h4>
                                <div className="instructions" key={book.instructions}>{book.instructions}</div>
                                <div className="instructions" key={book.instructions}>{book.instructions2}</div>
                            </div>

                        </span>
                       
                       
                        
                        <div className="Buttons_style">
                             <button className="Edit_button" onClick={() => this.editData(book)}>Edit</button>
                            <button className="Delete_button" onClick={() => deleteRecp(book) }> Delete </button>
                        </div>
                        
                    </div>
                        
                )}
            </ol>
        </div>
        <div className="open-search">
              <Link to="/search">Add a book</Link>
        </div>

    </div>


        :


        <div>
            <div className="editrecp">
              <h2 className="editrecp-title">Recipes</h2>
              <div className="editrecp-books">
                  <ol className="editrecp-grid">
                      
                          <div key={editRecp.id} className="recp">
                              <div className="editrecp-top">
                                  <div className="editrecp_img_box">
                                       <div className="editrecp_img_box_top">
                                           <div className="editrecp-cover" key={editRecp.id} style={{ backgroundImage: `url(${editRecp.thumbnail})`}} alt="book cover"></div>
                                       </div>
                                  </div>
                              </div>
                              <div>

                                <input type="text" name="ingredients" 
                                        className="editrecp-title"
                                         onChange={this.dataChange} 
                                         defaultValue={editRecp.ingredients}
                                    /><br/>

                                <input type="text" name="ingredients2" 
                                        className="editrecp-title"
                                         onChange={this.dataChange} 
                                         defaultValue={editRecp.ingredients2}
                                    />

                              </div>
                              <div>
                                <input type="text" name="instructions"
                                        defaultValue={editRecp.instructions}
                                         className="editrecp-authors"
                                          onChange={this.dataChange}
                                         
                                     />
                                     <input type="text" name="instructions2"
                                        defaultValue={editRecp.instructions2}
                                         className="editrecp-authors"
                                          onChange={this.dataChange}
                                         
                                     />

                              </div>
                                
                                    
                                     
                                    <div className="Buttons_style">
                                    <button className="submit-button" onClick={() => {postData(editRecp,ingredients,instructions,ingredients2,instructions2);this.destroy(editRecp);}}><Link to="/" className="destroy" >submit</Link></button>
                                    <button className="delete-button" onClick={() => {deleteRecp(editRecp);this.delete_destroy(editRecp); }}> <Link to="/" className="destroy" >Delete</Link> </button>
                                    </div>
                                
                         </div>
                              
                      
                  </ol>
              </div>
          </div>
          
        </div>
        
        }
         
    </div>
    )
  }
}


export default (RecpList)