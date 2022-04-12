import posts from "./tuits/tuits.js";
let tuits = posts;

const createTuit = (req, res) => {
  const newTuit = req.body;
  newTuit.id = (new Date()).getTime()+'';
  newTuit.topic = "Web Development";
  // newTuit.postedBy.username = "Anna";
  newTuit.liked = false;
  newTuit.disliked = false;
  newTuit.verified = false;
  newTuit.handle = "annab";
  newTuit.time = "now";
  newTuit.title = "";
  // newTuit.tuit = "";
  // newTuit.attachments.video = "";
  // newTuit.attachments.image = "";
  newTuit.logoimage = "./muskpfp.png";
  newTuit.avatarimage = "./muskpfp.png";
  // newTuit.stats.comments = 0;
  // newTuit.stats.retuits = 0;
  // newTuit.stats.likes = 0;
  // newTuit.stats.dislikes = 0;
  tuits.push(newTuit);
  res.json(newTuit);
}

const findAllTuits = (req, res) =>
    res.json(tuits);

const updateTuit = (req, res) => {
  const tuitdIdToUpdate = req.params.tid;
  const updatedTuit = req.body;
  tuits = tuits.map(t => t.id === tuitdIdToUpdate ? updatedTuit : t);
  res.sendStatus(200);
}

const deleteTuit = (req, res) => {
  const tuitdIdToDelete = req.params.tid;
  tuits = tuits.filter(t => t.id !== tuitdIdToDelete);
  res.sendStatus(200);
}

export default (app) => {
  app.post('/api/tuits', createTuit);
  app.get('/api/tuits', findAllTuits);
  app.put('/api/tuits/:tid', updateTuit);
  app.delete('/api/tuits/:tid', deleteTuit);
}