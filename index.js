const express = require("express");
const app = express();
const Joi = require("joi");


courses = [
  { id: 1, name: "Java" },
  { id: 1, name: "C++" },
  { id: 1, name: "Python" },
];

app.get("/api/courses", (req, res) => {
  res.send(courses);
});

app.post('/api/courses', (req, res) => {
  const { error } = validateGenre(req.body); 
  if (error) return res.status(400).send(error.details[0].message);

  const genre = {
    id: genres.length + 1,
    name: req.body.name
  };
  courses.push(genre);
  res.send(genre);
});

app.put("app/courses/:id", (req,res)=>{
    const course = courses.find(c => c.id === parseInt(req.params.id))
    if(!course) return res.status(404).send("course id dont found")

    
  const { error } = validateGenre(req.body);
  if (error) return res.status(404).send(error.details[0].message);

  courses.name = req.body.name;
  res.send(name)
})

function validateGenre(course) {
  const schema = {
    name: Joi.string().min(3).required()
  };

  return Joi.validate(course, schema);
}

const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Listenin to port ${port}`));
