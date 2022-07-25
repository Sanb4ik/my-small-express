const dotenv = require('dotenv')
dotenv.config()
const userRouter = require('./src/user-router')
const App= require('./framework/App')
const PORT =  process.env.PORT || 5000;



const app = new App();

app.addRoute(userRouter);
app.listen(PORT, ()=> console.log('listening on port ' + PORT));

