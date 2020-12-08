# zapsauth-node
Zapscloud Auth Package

**Initialize Library with config values**

    var _zapsauth = new ZapsAuth({
        app: 'appname',
        authkey: ' ',
        authsecret: ' '
    })

**Snippet for oAuth2 Token Service**

>   Handling grant types 
    (password / refresh_token / client_authentication)

    app.post('/auth', (req,res) => {
        return _zapsauth.tokenService (req, res);
    });

**Snippet for oAuth2 Token Validation Service**

    function validation(req, res, next){
        return _zapsauth.validationService (req, res, next);
    }

    app.get('/main',validation,(req,res) => {
        res.end('Successful');
    });


**Snippet for Get oAuth2 Access Token**

    // Get access token with user auth details
    // accessToken(jsondata)
    _zapsauth.accessToken{
        "auth":"Basic YXV0aDAwMTpzZWNyZXQwMDE=",
        "tokenrequest":{
            "grant_type":"password",
            "username": "user001",
            "password": "secret001",
            "scope":[
                "login","report","view"
            ]
        }
    })
    .then(function (response) {
        // reset password successful
    })
    .catch(function (err) {
        // reset password failure 
    });

**Snippet for Get oAuth2 Access Token for client**

    // Get access token for client credentials
    // accessToken(jsondata)
    _zapsauth.accessToken{
        "auth":"Basic YXV0aDAwMTpzZWNyZXQwMDE=",
        "tokenrequest":{
            "grant_type":"client_credentials",
            "scope":[
                "login","report","view"
            ]
        }
    })
    .then(function (response) {
        // reset password successful
    })
    .catch(function (err) {
        // reset password failure 
    });
    
**Snippet for oAuth2 Refresh Token**
    
    // Get access token
    // accessToken(jsondata)
    _zapsauth.accessToken{
        "auth":"Basic YXV0aDAwMTpzZWNyZXQwMDE=",
        "tokenrequest":{
            "grant_type":"refresh_token",
            "refresh_token": "31b8211862e0cc08049221a734a6b4a6c466915f",
            "scope":[
                "login","report","view"
            ]
        }
    })
    .then(function (response) {
        // reset password successful
    })
    .catch(function (err) {
        // reset password failure 
    });

**Snippet for oAuth2 Validate Token**

    // Validate Token
    // validateToken(token)
    _zapsauth.validateToken("31b8211862e0cc08049221a734a6b4a6c466915f")
    .then(function (response) {
        // reset password successful
    })
    .catch(function (err) {
        // reset password failure 
    });
   

>   User Management
    (create / update / delete / get / get many / validate / reset password)

**Snippet for Validate User**

    // Validate User
    // validateUser(userid, usersecret)
    _zapsauth.validateUser("user001","secret001")
    .then(function (response) {
        // validation successful
    })
    .catch(function (err) {
        // validation failure 
    });

**Snippet for Reset User Password**

    // Reset user password
    // resetUserPassword(userid, jsondata)
    _zapsauth.resetUserPassword{
	    "user_id":"user005",
        "user_secret":"secretnew",
    })
    .then(function (response) {
        // reset password successful
    })
    .catch(function (err) {
        // reset password failure 
    });

**Snippet for Update User**

    // Update a user
    // updateUser(userid, jsondata)
    _zapsauth.updateUser("user005",{
	    "user_id":"user005",
        "user_secret":"secret005",
        "user_name":"User 005 Updated secret",
        "user_status":"A"
    })
    .then(function (response) {
        // update successful
    })
    .catch(function (err) {
        // update failure 
    });

>   Client Management
    (create / update / delete / get / get many / validate)

**Snippet for Validate Client**

    // Validate Client
    // validateClient(clientkey, clientsecret)
    _zapsauth.validateClient("cauth001","secret001")
    .then(function (response) {
        // validation successful
    })
    .catch(function (err) {
        // validation failure 
    });

**Snippet for Create Client**

    // Create a client
    // createClient(jsondata)
    _zapsauth.createClient({
        "client_key": "auth001",
        "client_secret": "secret001",
        "scope": [
            "password",
            "refresh_token"
            ]
        }
    )
    .then(function (response) {
        // client creation successful
    })
    .catch(function (err) {
        // client creation failure 
    });