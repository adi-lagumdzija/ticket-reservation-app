import express from 'express';
import bodyParser from 'body-parser';
import usersRoutes from './routes/users.js';

//nodemon imported into project - automatically restarting the node application when file changes in the directory are detected.
const app = express();
const PORT = process.env.PORT || 5050; //backend port
// app.listen(PORT, () => { console.log(`App listening on port ${PORT}!`); });
const HOST = 'localhost';
app.use(bodyParser.json()); //using json through our app
app.use('/users', usersRoutes);
app.get('/', (req, res) => {
    res.send("Hello from homepage");
});

app.listen(PORT, () => console.log(`Server running on port: http://${HOST}:${PORT}`));