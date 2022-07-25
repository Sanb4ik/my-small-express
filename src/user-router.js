const Router = require('../framework/Router');

users =[
    {id: 1, name: 'John'},
    {id: 2, name: 'Jane'}
]
const router = new Router();
router.get('/users',(req, res)=>{
    //res.writeHead(200, {'Content-Type': 'application/json'});
    res.send(users)
})

router.post('/users',(req, res)=>{
    //res.writeHead(200, {'Content-Type': 'application/json'});
    console.log(req.body);
    const user = req.body;
    users.push(user);
    res.send(users)
})

module.exports = router;