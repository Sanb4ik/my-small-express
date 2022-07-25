const Router = require('../framework/Router');

users =[
    {id: 1, name: 'John'},
    {id: 2, name: 'Jane'}
]
const router = new Router();
router.get('/users',(req, res)=>{
    res.end(JSON.stringify(users))
})

module.exports = router;