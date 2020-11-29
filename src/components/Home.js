import React, { Component } from 'react';
import Table from './Table';
import Form from './Form';

class Home extends Component {
  constructor() {
    super();

    this.state = {
      title: '',
      content: '',
      items: []
    }
  };

  handleFormSubmit = (e) => {
    e.preventDefault();

    let items = [...this.state.items];

    items.push({
      title: this.state.title,
      content: this.state.content
    });

    this.setState({
      items,
      title: '',
      content: ''
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
          newTitle={ this.state.title }
          newContent={ this.state.content } />
      </div>
    );
  }
}

export default Home;