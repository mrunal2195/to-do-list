import express from 'express';
import listController from '../controller/listController';

const listRouter = express.Router();

listRouter.get('/', (req, res) => {
  listController.getItems().then(items => res.send(items));
});

listRouter.get('/:id', (req, res) => {
  listController.getItem(req.params.id).then(item => res.send(item));
});


listRouter.post('/', (req, res) => {
  listController.createItem(req.body).then(item => res.send(item));
});

listRouter.put('/:id', (req, res) => {
  const itemId = req.params.id;
  listController.modifyItem(itemId, req.body).then(item => res.send(item));
});


listRouter.delete('/:id', (req, res) => {
  listController.deleteItem(req.params.id).then(item => res.send(item));
});


export default listRouter;
