import React, { Component } from 'react';

class Form extends React.Component {
  render() {
    return (
    
        <form className="form" onSubmit={this.props.handleFormSubmit}>
            <div className="inputTitle">
          <label htmlFor="title">
          Title:</label>
          <input id="title" value={this.props.newTitle} 
            type="text" name="title"
            onChange={this.props.handleInputChange} />
          
          </div>
          <div className="textareaContet">
          <label htmlFor="content">
          Content:</label>
          <textarea id="content" value={this.props.newContent} 
             name="content"
            onChange={this.props.handleInputChange} />
          
          </div>
          <div>
          <button id="addItem" type="submit" value="Submit">Add Item</button>
          </div>
        </form>
      
    );
  }
}

export default Form;