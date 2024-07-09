module.exports = (req, res, next) => {
    console.log();
    console.log('Passei no middleware global');
    console.log();

    if(req.body.cliente) {
        console.log(`Vi que você postou ${req.body.cliente}`);
    }

    next();
};