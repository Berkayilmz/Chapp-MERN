
const express = require('express');
const path = require('path');
const cookieParser=require('cookie-parser');
const cors = require('cors');
const connectToMongoDB = require('./db/connectToMongoDB');

const authRoutes = require('./routes/authRoutes');
const messageRoutes=require('./routes/messageRoutes');
const userRoutes=require('./routes/userRoutes')


require('dotenv').config({ path: path.resolve(__dirname, './.env') })


const app = express();

app.use(cors());

const PORT = process.env.PORT;

app.use(express.json());
app.use(cookieParser());

app.use('/api/auth', authRoutes);
app.use('/api/messages', messageRoutes);
app.use('/api/users', userRoutes)

// app.get('/', (req, res) => {
//     res.send('hello world');
// });

app.listen(PORT, () => {
    connectToMongoDB();
    console.log(`Server Running on port ${PORT}`);
});
