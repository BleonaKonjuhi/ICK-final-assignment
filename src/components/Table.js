import React from 'react';

class Table extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            users: [
                { title: "JavaScript", content: 'JavaScript is a language for websites' },
                { title: "JavaScript", content: 'JavaScript is a language for websites' },,
                {title: "JavaScript", content: 'JavaScript is a language for websites' },
                { title: "JavaScript", content: 'JavaScript is a language for websites' }
             ],
            //isLoading:true,
            form:{
            title: '',
            content: ''
            }
        };
            // this.handleChange = this.handleChange.bind(this);
            // this.renderTableData=this.renderTableData.bind(this);
            // this.renderTableHeader=this.renderTableHeader.bind(this);

    }
    renderTableData() {
        return this.state.users.map((users, index) => {
           const { title, content } = users //destructuring
           return (
              <tr key={index}>
                 
                 <td>{title}</td>
                 <td>{content}</td>
                 
              </tr>
           )
        })
     }
     renderTableHeader() {
        let header = Object.keys(this.state.users[0])
        return header.map((key, index) => {
           return <th key={index}>{key.toUpperCase()}</th>
        })
     }
     render() {
        return (
           <div>
              <h1 id='title'>React Dynamic Table</h1>
              <table id='students'>
                 <tbody>
                    <tr>{this.renderTableHeader()}</tr>
                    {this.renderTableData()}
                 </tbody>
              </table>
           </div>
        )
     }
}
export default Table