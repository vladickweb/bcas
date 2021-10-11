import axios from 'axios'

class AllowedUsersService {
    constructor(){
        this.instance = axios.create({
            baseURL: 'https://jsonplaceholder.typicode.com/users'
        })
    }

    getAllUsers = () => this.instance.get('/')
}

export default AllowedUsersService