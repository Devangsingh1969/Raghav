const Student = require('../models/student');

async function addStudent(req,res){
    try{
       console.log(req.body);
    let student = new Student(req.body);
    await student.save();
       res.end("DATA IS ADDED SUCCESSFULLY...")
    }catch(err){
        console.log(err)
    }
}
module.exports = {
    addStudent
}