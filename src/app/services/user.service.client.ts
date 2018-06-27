export class UserServiceClient {

  findUserById(userId) {
    return fetch('https://web-dev-final-project-data.herokuapp.com/api/user/' + userId)
      .then(response => response.json());
  }

  profile() {
    console.log('profile');
    return fetch('https://web-dev-final-project-data.herokuapp.com/api/profile',
      {
        credentials: 'include', // include, same-origin, *omit
      })
      .then(response => response.json());
  }

  register(username, password, role) {
    console.log([username, password, role]);
    const user = {
      username: username,
      password: password,
      userType: role
    };
    return fetch('https://web-dev-final-project-data.herokuapp.com/api/register', {
      body: JSON.stringify(user),
      credentials: 'include', // include, same-origin, *omit
      headers: {
        'content-type': 'application/json'
      },
      method: 'post'}).then(function (response) {
      return response.json();
    });
  }

  findAllUsers() {
    const url = 'https://web-dev-final-project-data.herokuapp.com/api/user';
    return fetch(url)
      .then(response =>
        response.json());
  }

  createUser(username, password, firstName, lastName, userType) {
    const user = {
      username: username,
      password: password,
      firstName: firstName,
      lastName: lastName,
      userType: userType
    };
    return fetch('https://web-dev-final-project-data.herokuapp.com/api/user', {
      body: JSON.stringify(user),
      credentials: 'include', // include, same-origin, *omit
      headers: {
        'content-type': 'application/json'
      },
      method: 'post'}).then(function (response) {
      return response.json();
    });
  }

  deleteUser(userId) {
    return fetch('https://web-dev-final-project-data.herokuapp.com/api/user/' + userId,
      {
        method: 'DELETE',
        credentials: 'include'
      });
  }

  updateUser(userId, newUsername, newPassword, newFirstName, newLastName, newUserType) {
    const user = {
      username: newUsername,
      password: newPassword,
      firstName: newFirstName,
      lastName: newLastName,
      userType: newUserType
    };
    return fetch('https://web-dev-final-project-data.herokuapp.com/api/user/' + userId, {
      method: 'put',
      body: JSON.stringify(user),
      credentials: 'include',
      headers: {
        'content-type': 'application/json'
      }
    });
  }

  updateProfileUser(newFirstName, newLastName, newEmail) {
    const user = {
      firstName: newFirstName,
      lastName: newLastName,
      email: newEmail
    };
    return fetch('https://web-dev-final-project-data.herokuapp.com/api/profile', {
      method: 'put',
      body: JSON.stringify(user),
      credentials: 'include',
      headers: {
        'content-type': 'application/json'
      }
    })
      .then(function(response) {
        return response.json();
      });
  }

  logout() {
    return fetch('https://web-dev-final-project-data.herokuapp.com/api/logout', {
      method: 'post',
      credentials: 'include'
    });
  }

  login(username, password) {
    const credentials = {
      username: username,
      password: password
    };
    return fetch('https://web-dev-final-project-data.herokuapp.com/api/login', {
      method: 'post',
      body: JSON.stringify(credentials),
      credentials: 'include',
      headers: {
        'content-type': 'application/json'
      }
    });
  }
}