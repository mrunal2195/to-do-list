import bcrypt from 'bcrypt';
import user from '../models/user.model';

const createUser = async (newuser) => {
  const { username, password: data } = newuser;
  const password = await bcrypt.hash(data, 5);
  return user.create({ username, password });
};

const getallusers = () => user.find();

const getUser = id => user.find({ id });

const loginUser = async (newuser) => {
  const { username, password } = newuser;
  const finduser = await user.findOne({ username });
  if (finduser instanceof Object) {
    const isPassword = await bcrypt.compare(password, finduser.password);
    if (isPassword) return finduser;
    throw new Error('not found');
  }
  return null;
};

export default {
  getUser,
  getallusers,
  createUser,
  loginUser,
};
