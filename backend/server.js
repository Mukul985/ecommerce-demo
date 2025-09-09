// Optional: requires Node.js & express
const express = require('express');
const app = express();
app.use(express.json());
const products = require('./products.json');

app.get('/api/products', (req,res)=> res.json(products));
app.post('/api/order', (req,res)=> res.json({status:'success', order:req.body}));

app.listen(3000,()=> console.log('Server running on http://localhost:3000'));
