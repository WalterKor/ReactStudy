const app = require('./app');
const port = 8080;

app.get('/', (req, res)=>{
    res.send('hello node');
});

app.listen(port, ()=>{
    console.log('Express Started on', port);
});