import React, { Component } from 'react';
import Table from './Table';
import Form from './Form';

class Home extends Component {
  constructor() {
    super();

   
    this.state = {
      
      title: '',
      content: '',
      items: [],
      disabledUpvote: false,
      disabledDownvote: false
     

    }
    this.handleUpvoteClicked = this.handleUpvoteClicked.bind(this);
    this.handleDownvoteClicked = this.handleDownvoteClicked.bind(this);
  }; 
  handleUpvoteClicked() {
    if (!this.state.disabledUpvote) {
      this.setState({
        disabledUpvote: true,
        disabledDownvote: false
      });
    }
  }
  
  handleDownvoteClicked() {
    if (!this.state.disabledDownvote) {
      this.setState({
        disabledUpvote: false,
        disabledDownvote: true
      });
    }
  }
  handleFormSubmit = (e) => {
    e.preventDefault();
     if (!this.state.title || this.state.title.length < 2) {
            alert('Field should not be empty or has less than 2 characters.')
            return;
        }
       
        if (!this.state.content || this.state.content.length < 10) {
          alert('Field should not be empty or has less than 10 characters.')
          return;
      }


        
    let items = [...this.state.items];

    items.push({
      title: this.state.title,
      content: this.state.content,
      
    });

    this.setState({
      items,
      title: '',
      content: '',
      
    });
  };

  handleInputChange = (e) => {
    let input = e.target;
    let name = e.target.name;
    let value = input.value;

    this.setState({
      [name]: value
    })
  };

  render() {
    return (
      <div className="App">
        <Table items={ this.state.items }/>
        <Form handleFormSubmit={ this.handleFormSubmit } 
          handleInputChange={ this.handleInputChange }
          handleDeleteRow={this.handleDeleteRow}
          newTitle={ this.state.title }
          newContent={ this.state.content }
           />
           <div>
             <button className="up"  label="Upvote" 
                primary={true} 
                disabled={this.state.disabledUpvote}
                onClick={this.handleUpvoteClicked} >Like</button>
                <button className="down" label="Downvote" 
                secondary={true}
                disabled={this.state.disabledDownvote}
                onClick={this.handleDownvoteClicked}>DissLike</button>
           </div>
      </div>
    );
  }
}

export default Home;