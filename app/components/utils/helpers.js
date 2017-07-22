import axios from 'axios';

const helpers = {
    login: data => {
        return axios.get('/logon', {
            params: {
                username: data.username,
                password: data.password
            }
        }).then(data => {
            return data.data;
        });

    },

    signup: data => {
        return axios.post('/create', data);
    },

    usernamecheck: () => {
        return axios.get('/getarticles')
            .then(response => {
                return response.data;
            })
    },

    getposts: () => {
        return axios.get('/getposts').then(data => {
            return data.data;
        })
    },

    makepost: (data) => {
        return axios.post('/makepost', data)
    }
};

export default helpers;