exports.middlewareGlobal = (req, res, next) => {
    console.log('Estou passando no middleware global');
    next();
};