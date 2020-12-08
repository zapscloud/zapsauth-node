'use strict';

var debug = require('debug')('zapsauth:user');
const axios = require('axios');

module.exports = class User {
    constructor(){
    }
    createUser(data) {
        return new Promise((resolve, reject) => {
            axios.post(`https://auth.${this.stage}api.zapscloud.com/users`, data, this.header_param)
                .then(function (response) {
                    return resolve(response.data);
                })
                .catch(function (error) {
                    return reject(error.response?(error.response.data?error.response.data:error.response):error);
                });
        });
    }

    updateUser(userid, data) {
        return new Promise((resolve, reject) => {
            axios.put(`https://auth.${this.stage}api.zapscloud.com/users/${userid}`, data, this.header_param)
                .then(function (response) {
                    return resolve(response.data);
                })
                .catch(function (error) {
                    return reject(error.response?(error.response.data?error.response.data:error.response):error);
                });
        });
    }

    resetUserPassword(data) {
        return new Promise((resolve, reject) => {
            axios.put(`https://auth.${this.stage}api.zapscloud.com/users/secret`, data, this.header_param)
                .then(function (response) {
                    return resolve(response.data);
                })
                .catch(function (error) {
                    return reject(error.response?(error.response.data?error.response.data:error.response):error);
                });
        });
    }

    removeUser(userid) {
        return new Promise((resolve, reject) => {           
            axios.delete(`https://auth.${this.stage}api.zapscloud.com/users/${userid}`, this.header_param)
                .then(function (response) {
                    return resolve(response.data);
                })
                .catch(function (error) {
                    return reject(error.response?(error.response.data?error.response.data:error.response):error);
                });
        });
    }

    getUser(userid) {
        return new Promise((resolve, reject) => {
            axios.get(`https://auth.${this.stage}api.zapscloud.com/users/${userid}`, this.header_param)
                .then(function (response) {
                    return resolve(response.data);
                })
                .catch(function (error) {
                    return reject(error.response?(error.response.data?error.response.data:error.response):error);
                });
        });
    }

    getUserList(filterquery) {
        return new Promise((resolve, reject) => {
            var _filterquery = (filterquery ? `${filterquery}` : '');
            axios.get(`https://auth.${this.stage}api.zapscloud.com/users?${_filterquery}`, this.header_param)
                .then(function (response) {
                    return resolve(response.data);
                })
                .catch(function (error) {
                    return reject(error.response?(error.response.data?error.response.data:error.response):error);
                });
        });
    }

    validateUser(userid, usersecret) {
        return new Promise((resolve, reject) => {
            var data = {
                "user_id":userid,
                "user_secret":usersecret
            }
            axios.post(`https://auth.${this.stage}api.zapscloud.com/users`, data, this.header_param)
                .then(function (response) {
                    return resolve(response.data);
                })
                .catch(function (error) {
                    return reject(error.response?(error.response.data?error.response.data:error.response):error);
                });
        });
    }

}