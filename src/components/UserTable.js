import React, { Component } from 'react';
import axios from 'axios';

class UserTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };
  }

  componentDidMount() {
    axios.get('https://dummyjson.com/users')
      .then((response) => {
        this.setState({ users: response.data.users });
      })
      .catch((error) => {
        console.error('An error occurred:', error);
      });
  }

  render() {
    const { users } = this.state;

    const tableStyle = {
      margin: '0 auto',
      backgroundColor: 'black',
      color: 'white',
      border: 'solid white',
    };

    const containerStyle = {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'black'
    };

    const cellStyle = {
      border: '1px solid white',
      padding: '8px',
    };

    return (
      <div style={containerStyle}>
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={cellStyle}>Sno</th>
              <th style={cellStyle}>Profile pic</th>
              <th style={cellStyle}>First Name</th>
              <th style={cellStyle}>Last Name</th>
              <th style={cellStyle}>Gender</th>
              <th style={cellStyle}>E-mail</th>
              <th style={cellStyle}>Username</th>
              <th style={cellStyle}>Domain</th>
              <th style={cellStyle}>IP</th>
              <th style={cellStyle}>University</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>
                  <img src={user.image} alt="Profile" style={{ maxWidth: '50px' }} />
                </td>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.gender}</td>
                <td>{user.email}</td>
                <td>{user.username}</td>
                <td>{user.domain}</td>
                <td>{user.ip}</td>
                <td>{user.university}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default UserTable;
