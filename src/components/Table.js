import React, { Component } from 'react';

class Table extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            items: [
                { title: "JavaScript", content: 'JavaScript is a language for websites' },
                { title: "JavaScript", content: 'JavaScript is a language for websites' },
                {title: "JavaScript", content: 'JavaScript is a language for websites' },
                { title: "JavaScript", content: 'JavaScript is a language for websites' }
             ],
            
        };
            // this.handleChange = this.handleChange.bind(this);
            // this.renderTableData=this.renderTableData.bind(this);
            // this.renderTableHeader=this.renderTableHeader.bind(this);

    }
    renderTableData() {
        return this.state.items.map((items, index) => {
           const { title, content } = items //destructuring
           return (
              <tr key={index}>
                 
                 <td>{title}</td>
                 <td>{content}</td>
                 
              </tr>
           )
        })
     }
    //  renderTableHeader() {
    //     let header = Object.keys(this.state.items[0])
    //     return header.map((key, index) => {
    //        return <th key={index}>{key.toUpperCase()}</th>
    //     })
    //  }
  render() {
    const items = this.props.items;
    return (
      <div >
          <h1 id='title'>User Table</h1>
        <table id='table'>
          <tbody>
            <tr>
              <th>Title</th>
              <th>Content</th>
              
            </tr>
            {/* <tr>{this.renderTableHeader()}</tr> */}
                    {this.renderTableData()}
            {items.map(item => {
              return (
                <tr>
                  <td>{item.title}</td>
                  <td>{item.content}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Table;