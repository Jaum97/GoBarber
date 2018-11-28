module.exports = (req, res, next) => {
  return req.session && !req.session.user
    ? next()
    : res.redirect('/app/dashboard')
}
