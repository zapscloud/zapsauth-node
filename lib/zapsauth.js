'use strict';

const Many = require('extends-classes')
const Auth = require('./auth')
const User = require('./user')
const Client = require('./client')

var debug = require('debug')('zapsauth:main');

const btoa = function (str) {
    return Buffer.from(str).toString('base64');
}

class ZapsAuth extends Many(Auth, User, Client){
    constructor(config) {
        super();
        var credentials = btoa(`${config.authkey}:${config.authsecret}`);
        var basicAuth = 'Basic ' + credentials;
        this.stage = config.stage?config.stage:'';
        this.header_param = {
            headers: {
                Authorization: basicAuth,
                Application: (config.app?config.app:'')
            }
        };
        if(config.tenant)
            this.header_param.headers['Tenant'] = config.tenant;
        
        debug('construct ', config, this.header_param, this.stage);
    }    
}


module.exports = ZapsAuth;