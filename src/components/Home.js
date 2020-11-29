import React from 'react';
import axios from 'axios';
import UserList from './UserList';
import UserForm from './UserForm';

class Home extends React.Component {
    constructor() {
        super();
        this.state = {
            users: [],
            isLoading: true,
            form: {
                name: '',
                email: '',
                phone: '',
                website: ''
            }
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        // API Call
        axios
            .get('https://jsonplaceholder.typicode.com/users')
            .then(res => {
                this.setState({
                    users: res.data,
                    isLoading: false
                });
            })
            .catch(e => {
                this.setState({
                    isLoading: false
                });
                alert('Could not fetch users.');
            });
    }

    handleChange(event) {
        const name = event.target.name;

        this.setState(prevState => {
            return {
                form: {
                    ...prevState.form,
                    [name]: event.target.value
                }
            }
        });
    }

    handleSubmit(event) {
        event.preventDefault();

        // const { name, email, phone, website } = this.state.form;

        // if (!name || !email || !phone || !website) {
        //     alert('Form invalid.')
        //     return;
        // }

        this.setState(prevState => {
            return {
                users: [
                    prevState.form,
                    ...prevState.users
                ],
                form: {
                    name: '',
                    email: '',
                    phone: '',
                    website: ''
                }
            };
        });
    }
    
    render() {
        if (this.state.isLoading) {
            return <h1>Loading...</h1>
        }

        return (
            <div>
                <UserForm
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                    form={this.state.form}
                />
                <UserList users={this.state.users} />
            </div>
        );
    }
}

export default Home;