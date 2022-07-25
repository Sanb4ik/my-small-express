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
    res.send(users)
})

module.exports = router;