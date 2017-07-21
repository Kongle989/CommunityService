import axios from 'axios';

const helpers = {
    login: data => {
        console.log('im logging in', data);

    },

    signup: data => {
        console.log('im signing up', data);
        // return axios.post('/create', data);
    },

    usernamecheck: () => {
        return axios.get('/getarticles')
            .then(response => {
                return response.data;
            })
    }
};

export default helpers;