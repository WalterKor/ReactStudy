const app = require('./app');
const port = 8080;

app.get('/', (req, res)=>{
    res.send('hello');
})

app.listen(port, ()=>{
    console.log('Express Server Started On', port)
});