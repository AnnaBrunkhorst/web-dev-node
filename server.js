import express from 'express';
// import cors from 'cors';
import helloController
  from "./controllers/hello-controller.js";
import userController
  from "./controllers/user-controller.js";
import tuitsController
  from "./controllers/tuits-controller.js";
const app = express();
app.use(express.json());
// app.use(cors);
// As suggested by TA Nishtha Goswami (GitHub nishtha697) to solve problems with cors:
app.use(function(req,
    res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods",
      "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Credentials", "true");
  next();
});
// app.get('/hello', (req, res) => {res.send('Life is good!')})
app.get('/', (req, res) => {res.send('Welcome to Full Stack Development!')})
helloController(app);
userController(app);
tuitsController(app);
app.listen(process.env.PORT || 4000);