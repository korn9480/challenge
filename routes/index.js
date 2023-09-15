var express = require('express');
var router = express.Router();

const fibonacci = require("../controller/fibonacci_controller")

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET api/v1/test/8 */
router.get('/api/v1/test/:number', function(req, res, next) {
  let number = req.params.number

  if (number>=1 && number<=100){
    let result = fibonacci.calculatFibonacci(number)
    return res.json({
      member_count: number,
      sequence: result.sequence,
      total: result.total
    })
  }
  else {
    let error = "เลข "+number+" ไม่ได้อยู่ในช่วง 1-100"
    throw new Error(error)
  }
});

module.exports = router;
