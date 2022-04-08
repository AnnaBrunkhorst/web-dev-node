import express from 'express';
import cors from 'cors';
import helloController
  from "./controllers/hello-controller.js";
import userController
  from "./controllers/user-controller.js";
import tuitsController
  from "./controllers/tuits-controller.js";
const app = express();
app.use(express.json());
app.use(cors);
// app.get('/hello', (req, res) => {res.send('Life is good!')})
app.get('/', (req, res) => {res.send('Welcome to Full Stack Development!')})
helloController(app);
userController(app);
tuitsController(app);
app.listen(process.env.PORT || 4000);