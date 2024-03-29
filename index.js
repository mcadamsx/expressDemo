const expresss = require('express');
const app = expresss();

app.use(expresss.json())

const courses = [
    {id: 1, name : 'course 1'},
    {id: 2, name : 'course 2'},
    {id: 3, name : 'course 4'}
]


app.get('/',(req, res)=>{
    res.send("Hello World")
})
app.get('/api/courses', (req,res)=>{
    res.status(200).send(courses)
})
app.get('/api/courses/:id', (req, res)=>{
   const course =  courses.find(c => c.id === parseInt (req.params.id))
   if(!course) res.status(404).send("The course with the given ID was not found")
   res.status(200).send(course)
})
app.post('/api/courses', (req,res) => {
    if(!req.body.name || req.body.name.length < 3){
        res.status(400).send("Name is required ");
        return;
    }
    const course = {
        id: courses.length + 1,
        name: req.body.name
    }
    courses.push(course);
    res.send(course)
}) 


const port = process.env.PORT || 3000
app.listen(port, ()=>{console.log(`Listening on port ${port}...`);})