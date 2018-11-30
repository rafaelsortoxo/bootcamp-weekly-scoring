exports.isLoggedIn = (req, res, next) => {
  if (req.isAuthenticated()) {
    next();
  } else {
    res.send(401, 'Not Authorized');
  }
};

exports.isNotIc = (req, res, next) => {
  if (req.user.role !== 'ic') {
    next();
  } else {
    res.send(401, 'Not Authorized');
  }
};
