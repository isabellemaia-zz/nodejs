//const { response } = require('express');
//const express = require ('express');

const app = express();

//localhost://3333

app.get("/Courses", (request, response)=>{
    return response.json( [
        "Curso1",
        "Curso2",
        "Curso3"
    ]);

});

app.post("/Courses", (request, response)=>{
    return response.json( [
        "Curso1",
        "Curso2",
        "Curso3",
        "Curso4"
    ]);

});

app.put("/Courses:id", (request, response)=>{
    return response.json( [
        "Curso6",
        "Curso2",
        "Curso3",
        "Curso4"
    ]);

});

app.path("/Courses:id", (request, response)=>{
    return response.json( [
        "Curso6",
        "Curso7",
        "Curso3",
        "Curso4"
    ]);

});

app.delete("/Courses:id", (request, response)=>{
    return response.json( [
        "Curso6",
        "Curso7",
        "Curso4"
    ]);

});

app.listen(3333);