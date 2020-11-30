import React, { Component } from 'react';

class Table extends React.Component {
    constructor(props){
        super(props);
        let today = new Date(),


        date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        
        this.state ={
          message:"",
            items: [
                { title: "JavaScript", content: 'JavaScript is a language for websites' },
                { title: "Python", content: 'Python is an awesome language' },
                {title: "Php", content: 'Php is a dynamic language ' },
                { title: "C#", content: 'C# is an old programming language ' }
             ],
             currentDate: date
            
        };
            this.handleDeleteRow=this.handleDeleteRow.bind(this);

    }
    handleDeleteRow(i) {
        let items = this.state.items;
        items.splice(i, 1)
        this.setState({ 
          items: items
        });
      }
      
      updateMessage(event){
        this.setState({
          message:event.target.value
        });
      }
      handleClick(){
        let items = this.state.items;
        items.push(this.state.message);
        this.setState({
          items: items,
          message: ""
        });
       
      }
      
      
    renderTableData() {
      let context = this;
        return this.state.items.map((items, index) => {
           const { title, content } = items //destructuring
           return (
              <tr key={index}>
                 
                 <td>{title}</td>
                 <td>{content}</td>
                 <td>{this.state.currentDate}</td>
                 <td><button className="edButton" onClick={context.handleDeleteRow.bind(context,index)}>Delete</button></td>
                  <td><button className="edButton" onClick={this.handleClick.bind(this)}>Edit</button></td>
              </tr>
           )
        })
     }
     
   
  render() {
    const items = this.props.items;
    return (
      <div >
          <h1 id='Headtitle' style={{marginBottom: "-80px", marginTop: "100px"}}>User Table</h1>
        <table id='table'>
          <tbody>
            <tr>
              <th>Title</th>
              <th>Content</th>
              <th>Creation Date</th>
              <th>Delete</th>
              <th>Edit</th>

              
            </tr>
                {this.renderTableData()}
            {
                
            items.map((items, index) => {
              return (
                <tr key={index}>
                  <td>{items.title}</td>
                  <td>{items.content}</td>
                  <td>{this.state.currentDate}</td>
                  <td><button className="edButton" onClick={this.handleDeleteRow.bind(items,index)}>Delete</button></td>
                  <td><button className="edButton" onClick={this.handleClick.bind(this)}>Edit</button></td>
                  
                </tr>
              );
            })
            }
          </tbody>
        </table>
      </div>
    );
  }
}

export default Table;