
const express = require('express');
const authRoutes = require('./routes/authRoutes');
const connectToMongoDB = require('./db/connectToMongoDB');
const path = require('path');
const messageRoutes=require('./routes/messageRoutes');
const cookieParser=require('cookie-parser')
require('dotenv').config({ path: path.resolve(__dirname, './.env') })

const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(cookieParser());

app.use('/api/auth', authRoutes);
app.use('/api/messages', messageRoutes);

// app.get('/', (req, res) => {
//     res.send('hello world');
// });

app.listen(PORT, () => {
    connectToMongoDB();
    console.log(`Server Running on port ${PORT}`);
});
