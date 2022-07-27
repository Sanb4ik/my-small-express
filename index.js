const dotenv = require('dotenv')
dotenv.config()
const userRouter = require('./src/user-router')
const App= require('./framework/App')
const jsonParser = require('./framework/parseJSON')
const parseURL = require('./framework/parseURL')
const mongoose = require('mongoose');

const app = new App();
const PORT =  process.env.PORT || 5000;
const password = process.env.password

app.use(jsonParser);
app.use(parseURL(`http://localhost:${PORT}`));
app.addRoute(userRouter);

const start = async () => {
    try {
        await mongoose.connect(`mongodb+srv://sasha:${password}@cluster0.b5fkf.mongodb.net/?retryWrites=true&w=majority`)
        app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`))
    } catch (e) {
        console.log(e)
    }
}

start();


