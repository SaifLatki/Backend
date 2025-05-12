const Joi= require('joi');
//Joi is a JavaScript library used for data validation and schema description.
const express= require('express');
const app= express();
app.use(express.json());
//Middleware
//Middleware is a function that has access to the request object (req), the response object (res), and the next middleware function in the application’s request-response cycle.
const courses=[
    {id:1,name:'Database'},
    {id:2,name:'computer networking'},
    {id:3,name:'Web Development'}
];
//get method 
app.get('/',(req,res)=>{
    res.send('Hello World!')
});
app.get('/api/users',(req,res)=>{
    res.send([
        {id:1,name:'John'},
        {id:2,name:'Jane'},
        {id:3,name:'Doe'}
    ]);
});
app.get('/api/courses',(req,res)=>{
    res.send(courses);
});

//POST method
//POST method is used to send data to the server.
app.post('/api/courses',(req,res)=>{

    //joi used for validation
    //Joi is a JavaScript library used for data validation and schema description.
    const schema= Joi.object({
        name: Joi.string().min(3).required()
    });
    const result= schema.validate(req.body);

    if (result.error) {
        //Validation failed
        res.status(400).send(result.error);
        return;
    }

    const course={
        id: courses.length + 1,
        name: req.body.name
    };
    courses.push(course);
    res.send(course);
});





app.get('/api/courses/:id',(req,res)=>{
    const course= courses.find(c=>c.id===parseInt(req.params.id));
    if(!course) return res.status(404).send('The course with the given ID was not found.');
    res.send(course);
});
//route parameters
// app.get('/api/users/:id',(req,res)=>{
//     res.send(req.params.id);
// });
// app.get('/api/posts/:year/:month',(req,res)=>{
//     res.send(req.params);
// });
//query parameters
app.get('/api/posts/:year/:month',(req,res)=>{
    res.send(req.query);
});
//PORT
const port= process.env.PORT || 3000;
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});