// import posts from "./tuits/tuits.js";
// let tuits = posts;
import * as tuitsDao from "./tuits/tuits-dao.js";

const createTuit = async (req, res) => {
  const newTuit = req.body;
  const insertedTuit = await tuitsDao.createTuit(newTuit);
  insertedTuit._id = (new Date()).getTime()+'';
  // newTuit.topic = "Web Development";
  // Postman seems to have issues with allowing this method to create nested or
  // layered values, like the one below. Not sure why, but in Postman, all layered
  // values must be set to something before attempting to create a tuit; this method
  // will then be able to overwrite those values with these defaults.
  // newTuit.postedBy.username = "Anna";
  // newTuit.liked = false;
  // newTuit.disliked = false;
  // newTuit.verified = false;
  // newTuit.handle = "annab";
  // newTuit.time = "now";
  // newTuit.title = "";
  // Set by user when tuiting
  // newTuit.tuit = "";
  // newTuit.attachments.video = "";
  // newTuit.attachments.image = "";
  // newTuit.logoimage = "./muskpfp.png";
  // newTuit.avatarimage = "./muskpfp.png";
  // newTuit.stats.comments = 0;
  // newTuit.stats.retuits = 0;
  // newTuit.stats.likes = 0;
  // newTuit.stats.dislikes = 0;
  // tuits.push(newTuit);
  // res.json(newTuit);
  res.json(insertedTuit);
}

const findAllTuits = async (req, res) => {
  const tuits = await tuitsDao.findAllTuits();
  res.json(tuits);
}

const updateTuit = async (req, res) => {
  const tuitdIdToUpdate = req.params.tid;
  const updatedTuit = req.body;
  const status = await tuitsDao.updateTuit(tuitdIdToUpdate);
  // tuits = tuits.map(t => t.id === tuitdIdToUpdate ? updatedTuit : t);
  // res.sendStatus(200);
  res.send(status);
}

const deleteTuit = async (req, res) => {
  const tuitdIdToDelete = req.params.tid;
  const status = await tuitsDao.deleteTuit(tuitdIdToDelete);
  // tuits = tuits.filter(t => t.id !== tuitdIdToDelete);
  // res.sendStatus(200);
  res.send(status);
}

export default (app) => {
  app.post('/api/tuits', createTuit);
  app.get('/api/tuits', findAllTuits);
  app.put('/api/tuits/:tid', updateTuit);
  app.delete('/api/tuits/:tid', deleteTuit);
}