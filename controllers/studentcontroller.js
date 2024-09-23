const Student = require('../models/student');

async function addStudent(req,res){
    try{
       console.log(req.body);
    let student = new Student(req.body);
    await student.save();
    res.render('studentinsert')
    //    res.end("DATA IS ADDED SUCCESSFULLY...")
    }catch(err){
        console.log(err)
    }
}
async function getStudents(req,res){
    try{
        let students = await  Student.find({});
        res.render('studentlist',{
            students: students
        })
    }catch{
        console.log(err);
    }
}
module.exports = {
    getStudents,
    addStudent
}