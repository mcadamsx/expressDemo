const expresss = require('express');
const app = expresss();

app.get('/',(req, res)=>{
    res.send("Hello World")
})
app.get('/api', (req,res)=>{
    req.send("My time has come")
})
app.get('/api/courses/:id', (req, res)=>{
    res.send(req.params.id)
})


const port = process.env.PORT || 3000
app.listen(port, ()=>{console.log(`Listening on port ${port}...`);})