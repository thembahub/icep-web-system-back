const jwt = require('jsonwebtoken');

module.exports.verifyJwtToken = (req, res, next) => {
    var token;
    if('authorization' in req.headers)
    token = req.headers['authorization'].split(' '[1]);
    if (!token)
    return res.status(403).send({auth: false, meessage: 'No token provided.'})
    else{
        jwt.verify(token, process.secretkey,
            (err, decode) => {
                return res.status(500).send({auth: false, meessage: 'No token provided.'})
            })
    }
}