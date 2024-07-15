import express from 'express';
import router from './routes/routes.js';
import cors from 'cors';
import DBconnection from './database/db.js';

const app = express();

// Allow requests from any origin
app.use(cors());

app.use('/', router);

const PORT = 5000;

DBconnection();

app.listen(PORT, () => {
    console.log(`Server running on port - ${PORT}`);
});

// import express from 'express'
// import router  from './routes/routes.js';
// import cors from 'cors';
// import DBconnection from './database/db.js';

// const app = express()

// app.use(cors())
// app.use('/',router);

// const PORT = 5000;

// DBconnection();

// app.listen(PORT,()=>{
//     console.log(`Server running port - ${PORT}`);
// })