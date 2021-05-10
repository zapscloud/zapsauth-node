'use strict';

var debug = require('debug')('zapsauth:user');
const axios = require('axios');

module.exports = class User {
    constructor(){
    }
    createUser(data) {
        return new Promise((resolve, reject) => {
            axios.post(`https://auth.api${this.stage}.zapscloud.com/users`, data, this.header_param)
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
            axios.put(`https://auth.api${this.stage}.zapscloud.com/users/${userid}`, data, this.header_param)
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
            axios.put(`https://auth.api${this.stage}.zapscloud.com/users/secret`, data, this.header_param)
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
            axios.delete(`https://auth.api${this.stage}.zapscloud.com/users/${userid}`, this.header_param)
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
            axios.get(`https://auth.api${this.stage}.zapscloud.com/users/${userid}`, this.header_param)
                .then(function (response) {
                    return resolve(response.data);
                })
                .catch(function (error) {
                    return reject(error.response?(error.response.data?error.response.data:error.response):error);
                });
        });
    }

    getUserList(filterquery, sortquery, skip, limit) {
        return new Promise((resolve, reject) => {
            var queryparam = (filterquery ? `?filter=${filterquery}` : '');
            queryparam = (sortquery ? (queryparam!=''?`${queryparam}&`:'?')+`sort=${sortquery}` : queryparam);
            queryparam = (skip ? (queryparam!=''?`${queryparam}&`:'?')+`skip=${skip}` : queryparam);
            queryparam = (limit ? (queryparam!=''?`${queryparam}&`:'?')+`limit=${limit}` : queryparam);

            axios.get(`https://auth.api${this.stage}.zapscloud.com/users${queryparam}`, this.header_param)
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
            axios.post(`https://auth.api${this.stage}.zapscloud.com/users`, data, this.header_param)
                .then(function (response) {
                    return resolve(response.data);
                })
                .catch(function (error) {
                    return reject(error.response?(error.response.data?error.response.data:error.response):error);
                });
        });
    }

}