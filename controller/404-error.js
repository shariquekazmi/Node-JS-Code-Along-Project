exports.getShopError = (req, res, next) => {
    res.status(404).render('404-error', {
        pageTitle: 'Page Not Found !',
        path: ''
    });
}

