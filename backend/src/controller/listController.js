import listModel from '../models/list.model';

const createItem = item => listModel.create(item);

const modifyItem = (itemId, item) => listModel.findOneAndUpdate({ _id: itemId }, item);

const deleteItem = itemId => listModel.findOneAndDelete({ _id: itemId });

const getItems = () => listModel.find();

const getItem = id => listModel.findById(id);

export default {
  createItem,
  modifyItem,
  deleteItem,
  getItems,
  getItem,
};
