import React from 'react';
import Table from './Table';
import UserForm from './UserForm';

class Form extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            // users: [
            //     {id=1, title: "JavaScript", content: 'JavaScript is a language for websites' },
            //     {id=2, title: "JavaScript", content: 'JavaScript is a language for websites' },,
            //     {id=3,title: "JavaScript", content: 'JavaScript is a language for websites' },
            //     {id=4, title: "JavaScript", content: 'JavaScript is a language for websites' },
            //  ],
            //isLoading:true,
            form:{
            title: '',
            content: ''
            }
        };
        this.handleChange = this.handleChange.bind(this);
        // this.renderTableData=this.renderTableData.bind(this);
        // this.renderTableHeader=this.renderTableHeader.bind(this);

    }
    // renderTableData() {
    //     return this.state.users.map((users, index) => {
    //        const { id,title, content } = users //destructuring
    //        return (
    //           <tr key={id}>
    //              <td>{id}</td>
    //              <td>{title}</td>
    //              <td>{content}</td>
                 
    //           </tr>
    //        )
    //     })
    //  }
    //  renderTableHeader() {
    //     let header = Object.keys(this.state.users[0])
    //     return header.map((key, index) => {
    //        return <th key={index}>{key.toUpperCase()}</th>
    //     })
    //  }
    handleChange(event){
        const name = event.target.name;
        

        this.setState(prevState => {
            return {
                form: {
                    ...prevState.form,
                    [name]: event.target.value
                    
                }
                
            }
        });console.log(event.target.value);
    }
    handleSubmit(event) {
        event.preventDefault();
        this.setState(prevState => {
            return{
            form:{
                title: '',
                content: ''
            }
        };
        });
    }
    render (){
        // if(this.state.isLoading){
        //     return <div class="loader"></div>
        // }
        return (
           <div>
               
               <UserForm
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                    form={this.state.form}
                />
                 <Table />
           </div>
        );


    }
}
export default Form;