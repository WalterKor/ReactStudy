const app = require('./app');
const port = 8080;

app.get('/', (req, res)=>{
    res.send('hello');
})

app.get('/api/hello', (req, res)=>{
    res.send('안녕하세요~')
})


app.listen(port, ()=>{
    console.log('Express Server Started On', port)
});