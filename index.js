const http = require('http');
const dotenv = require('dotenv')
const EventEmitter= require('events')
dotenv.config()

const Router = require('./framework/Router')
const App= require('./framework/App')
const PORT =  process.env.PORT || 5000;



const app = new App();

const router = new Router();
router.get('/user',(req, res)=>{
    res.end('you send request')
})
app.addRoute(router);
app.listen(PORT, ()=> console.log('listening on port ' + PORT));

