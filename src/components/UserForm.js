import React from 'react';

class UserForm extends React.Component {
    render() {
        return (
            <form onSubmit={this.props.handleSubmit}>
                <h2>Create new User</h2>
                <div>
                    <label htmlFor="title">Title</label>
                    <input 
                        type="text"
                        id="title"
                        name="title"
                        value={this.props.form.title}
                        onChange={this.props.handleChange}
                    />
                    
                </div>
                <div>
                    <label htmlFor="content">Content</label>
                    <textarea
                        name="content" 
                        id="content"
                        value={this.props.form.content}
                        onChange={this.props.handleChange}
                    />
                </div>
                <div>
                    <button  type="submit">Submit</button>
                </div>
            </form>
        );


    }
}

export default UserForm;