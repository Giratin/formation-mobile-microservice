var express = require('express');
var router = express.Router();

/**
 * @Path /users
 */
/* GET users listing. */
router.get('/', (req, res, next) => {
  var obj = { name: "imed", classe: "5SIM" }
  res.status(404).json(obj);
});

router.get('/:id', (req, res, next) => {
  let { id } = req.params;
  // let id = req.params.id
  //var obj = { name: "imed", classe : "5SIM", id }
  var obj = {};
  obj.imed = {
    name: "t",
    age: 21,
    classes: [1, true, "string", { name: "str", c: 3 }]
  }
  obj.test = "OK"
  res.status(200).json(obj);
});

router.post('/', function (req, res, next) {

  let { users, name, age } = req.body;
  res.status(202).json({ users, name, age });

});

module.exports = router;
