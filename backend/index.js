import express from 'express';
import mongoose from 'mongoose';
import bodyparser from 'body-parser';
import routes from './routes/appRoutes';
import cors from 'cors';

const app = express();
const PORT = 82;


// mongo connection


mongoose.Promise = global.Promise;
mongoose.connect('mongodb://127.0.0.1/appDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// bodyparser setup

app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());

// CORS setup
app.use(cors());

routes(app);

app.get("/", (req, res) =>
    res.send(`Application is running ${PORT}`)
);

app.listen(PORT, () =>
    console.log(`Application is running on port ${PORT}`)
);