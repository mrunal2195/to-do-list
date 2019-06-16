import express from 'express';
import cors from 'cors';
import path from 'path';
import connect from './connect';
import listRoute from './routes/listRoute';
import userRoute from './routes/userRoute';

const PORT = process.env.PORT || 8080;

const app = express();

connect();

app.use(cors({
  origin: '*',
}));
app.use(express.json());
app.use('/api/user', userRoute);
app.use('/api/list', listRoute);

app.use(express.static(path.resolve(__dirname, 'www')));
app.use('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'www', 'index.html'));
});

app.listen(PORT);

/*
localhost:8080 -> index.html
localhost:8080/main.fs32rwef.js -> main.fs32rwef.js
localhost:8080/user/profile -> index.html
*/

console.log(`Listening on port: ${PORT}`);
