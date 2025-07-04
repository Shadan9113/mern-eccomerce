const express = require("express");
const dotenv = require("dotenv");
const cors = require('cors')
const connectDB = require('./config/db');
const productRoutes = require('./routes/productRoutes')
const userRoutes = require('./routes/userRoutes')


dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes)


app.get('/', (req, res)=>{
    res.send('API is running...')
})

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`server is running at port: ${PORT}`)
})