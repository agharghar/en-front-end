import axios from 'axios'

class UserDataServices {
  retrieveAllTodos(name) {
    //console.log('executed service')
    return axios.get(`http://localhost:8080/users/${name}/todos`);
  }

  retrieveTodo(name, id) {
    //console.log('executed service')
    return axios.get(`http://localhost:8080/users/${name}/todos/${id}`);
  }

  deleteTodo(name, id) {
    //console.log('executed service')
    return axios.delete(`http://localhost:8080/users/${name}/todos/${id}`);
  }

  updateTodo(name, id, todo) {
    //console.log('executed service')
    return axios.put(`http://localhost:8080/users/${name}/todos/${id}`, todo);
  }

  createUser(user) {
    //console.log('executed service')
    return axios.post(`http://localhost:8080/users`, user);
  }

}

export default new UserDataServices()