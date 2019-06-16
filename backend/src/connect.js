import mongoose from 'mongoose';


const connect = () => {
  const dbuser = 'mrunal';
  const dbpassword = 'mrunal21';
  const dbname = 'summer-2019';
  const connectString = `mongodb://${dbuser}:${dbpassword}@ds151876.mlab.com:51876/${dbname}`;
  mongoose.connect(connectString);
};

export default connect;
