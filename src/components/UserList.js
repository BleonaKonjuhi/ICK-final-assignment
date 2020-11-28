import React from 'react';

class UserList extends React.Component {
    render() {
        const users = this.props.users.map((e, i) => {
            return (
                <tr key={i}>
                    <td>{e.name}</td>
                    <td>{e.email}</td>
                    
                </tr>
            );
        })

        return (
            <div>
                <h2 style={{marginLeft: "670px"}}>List of Users</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {users}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default UserList;