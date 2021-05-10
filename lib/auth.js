'use strict';
var debug = require('debug')('zapsauth:auth');
const axios = require('axios');

module.exports = class Auth {
    constructor(){
    }

    tokenService (req, res) {
        debug('user data ', req.body);
        debug('user id', req.headers)

        var data = {
            auth: req.headers.authorization,
            tokenrequest: req.body
        }
        return this.accessToken(data)
            .then(function(resmsg){
                res.header({"Content-Type": "application/json"});
                res.status(200)
                res.send(resmsg)
            })
            .catch(function(err){
                res.header({"Content-Type": "application/json"});
                res.status(err.error_code)
                res.send(err)
            })
    }

    validationService (req, res, next) {
        debug('user data ', req.body);
        debug('user id', req.headers)

        var token = req.headers.authorization.split(' ')[1];
        return this.validateToken(token)
            .then(function(resmsg){
                //res.header({"Content-Type": "application/json"});
                //res.status(200)
                //res.send(resmsg)
                debug('validation response ', resmsg);
                next();
            })
            .catch(function(err){
                res.header({"Content-Type": "application/json"});
                res.status(err.error_code)
                res.send(err)
            })
    }
    
    accessToken (data) {
        return new Promise((resolve, reject) => {
            axios.post(`https://auth.api${this.stage}.zapscloud.com/token`,data, this.header_param)
                .then(function (response) {
                    return resolve(response.data);
                })
                .catch(function (error) {
                    return reject(error.response?(error.response.data?error.response.data:error.response):error);
                });
        });
    }

    validateToken(token) {
        return new Promise((resolve, reject) => {
            axios.post(`https://auth.api${this.stage}.zapscloud.com/token/${token}`,'', this.header_param)
                .then(function (response) {
                    return resolve(response.data);
                })
                .catch(function (error) {
                    return reject(error.response?(error.response.data?error.response.data:error.response):error);
                });
        });
    }

}