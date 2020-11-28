import React from 'react';

class UserForm extends React.Component {
    render() {
        return (
            <form onSubmit={this.props.handleSubmit}>
                <h2>Create new user</h2>
                <div>
                    <label htmlFor="name">First Name: </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={this.props.form.name}
                        onChange={this.props.handleChange}
                        placeholder="John Smith"
                        required
                    />
                </div>
               
               
               
                <div>
                    <label htmlFor="textarea">TextArea</label>
                    <textarea id="textarea" name="textarea" value={this.props.form.textarea} 
                    onChange={this.props.handleChange} rows="4" cols="50">

                    </textarea>
                </div>
                <button type="submit">Submit</button>
            </form>
        );
    }
}

export default UserForm;