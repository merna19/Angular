import { course } from "./course"
import * as Student from "./student"
(function(){
    let CLang_Crs: course= new course("C Language");
    let JavaLang_Crs: course= new course("Java Language");
    let CppLang_Crs: course= new course("C++ Language");
    let JSLang_Crs: course= new course("JavaScript Language");

    let std:Student.Istudent[]=[Student.NewStd("Ahmed",0,19,[[CLang_Crs,0],[JSLang_Crs,50]],true),Student.NewStd("Ola",0,20,[[JavaLang_Crs,50],[JSLang_Crs,100]])];
    

    if(Student.IsCrsExists(std[0],CppLang_Crs.crsName))
    {
        Student.AssignGrade(std[0],[CppLang_Crs,25]);
    }    
    else
    {
        Student.AddCrs(std[0],[CppLang_Crs,25]);
    }

    std.forEach(s=>Student.DisplayStudent(s));

    JSLang_Crs.Display();

    

})()
