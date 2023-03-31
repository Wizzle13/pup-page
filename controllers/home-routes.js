const router = require('express').Router();

router.get('/', (req, res) => {
  res.render('homepage');
});

router.get('/about', (req, res) => {
  res.render('about');
});
router.get('/pics', (req, res) => {
  res.render('pics');
});
router.get('/stats', (req, res) => {
  res.render('stats');
});
router.get('/info', (req, res) => {
  res.render('info');
});

module.exports = router;