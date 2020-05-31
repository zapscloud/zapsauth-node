'use strict';

var debug = require('debug')('zapsauth:client');
const axios = require('axios');

module.exports = class Client {
    constructor(){
    }
    createClient(data) {
        return new Promise((resolve, reject) => {
            axios.post(`${this.zapsurl}/auth/clients`, data, this.header_param)
                .then(function (response) {
                    return resolve(response.data);
                })
                .catch(function (error) {
                    return reject(error.response?(error.response.data?error.response.data:error.response):error);
                });
        });
    }

    updateClient(clientkey, data) {
        return new Promise((resolve, reject) => {
            axios.put(`${this.zapsurl}/auth/clients/${clientkey}`, data, this.header_param)
                .then(function (response) {
                    return resolve(response.data);
                })
                .catch(function (error) {
                    return reject(error.response?(error.response.data?error.response.data:error.response):error);
                });
        });
    }

    removeClient(clientkey) {
        return new Promise((resolve, reject) => {           
            axios.delete(`${this.zapsurl}/auth/clients/${clientkey}`, this.header_param)
                .then(function (response) {
                    return resolve(response.data);
                })
                .catch(function (error) {
                    return reject(error.response?(error.response.data?error.response.data:error.response):error);
                });
        });
    }

    getClient(clientkey) {
        return new Promise((resolve, reject) => {
            axios.get(`${this.zapsurl}/auth/clients/${clientkey}`, this.header_param)
                .then(function (response) {
                    return resolve(response.data);
                })
                .catch(function (error) {
                    return reject(error.response?(error.response.data?error.response.data:error.response):error);
                });
        });
    }

    getClientList(filterquery) {
        return new Promise((resolve, reject) => {
            var _filterquery = (filterquery ? `${filterquery}` : '');
            axios.get(`${this.zapsurl}/auth/clients?${_filterquery}`, this.header_param)
                .then(function (response) {
                    return resolve(response.data);
                })
                .catch(function (error) {
                    return reject(error.response?(error.response.data?error.response.data:error.response):error);
                });
        });
    }
    
    validateClient(clientkey, clientsecret) {
        return new Promise((resolve, reject) => {
            var data = {
                "client_key": clientkey,
                "client_secret": clientsecret
            }
            axios.post(`${this.zapsurl}/auth/clients`, data, this.header_param)
                .then(function (response) {
                    return resolve(response.data);
                })
                .catch(function (error) {
                    return reject(error.response?(error.response.data?error.response.data:error.response):error);
                });
        });
    }
}