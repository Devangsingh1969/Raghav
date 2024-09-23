const Student = require('../models/student');

async function addStudent(req,res){
    try{
       console.log(req.body);
    let student = new Student(req.body);
    await student.save();
    res.render('studentinsert.ejs')
    //    res.end("DATA IS ADDED SUCCESSFULLY...")
    }catch(err){
        console.log(err)
    }
}
async function getStudents(req,res){
    try{
        let students = await  Student.find({});
        res.render('studentlist.ejs',{
            students: students
        })
    }catch{
        console.log(err);
    }
}
async function getStudentsForEdit(req,res) {
    try{
        let id = req.params.id;
        console.log(id)
        let student = await Student.findOne({ _id: id})
        console.log(student);
        res.render('studentforupdate',{
            student: student

        })
    }catch(err){
        console.log(err)
    }
    
}
module.exports = {
    getStudentsForEdit,
    getStudents,
    addStudent
}