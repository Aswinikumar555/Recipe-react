import React, { Component } from 'react'
import '../App.css'
import { Link } from 'react-router-dom'
class Edit extends Component {
  render() {
    const { editRecp} = this.props
    console.log(editRecp)
    return (
      <div>
          <div className="bookshelf">
            <h2 className="bookshelf-title">Recipes</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                    
                        <div key={editRecp.id} className="book">
                            <div className="book-top">
                                <div className="recp_img_box">
                                     <div className="recp_img_box_top">
                                         <div className="book-cover" key={editRecp.id} style={{ backgroundImage: `url(${editRecp.thumbnail})`}} alt="book cover"></div>
                                     </div>
                                </div>
                            </div>
                            <span className="book-title" key={editRecp.ingredients}>{editRecp.ingredients}</span>
                            <span className="book-authors" key={editRecp.instructions}>{editRecp.instructions}</span>
                            <div className="Buttons_style">
                                
                                <span className="Delete_button"> Delete </span>
                            </div>
                            
                        </div>
                            
                    
                </ol>
            </div>
        </div>
        
      </div>
    )
  }
}

export default Edit