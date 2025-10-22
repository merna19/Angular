"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var course_1 = require("./course");
var Student = require("./student");
(function () {
    var CLang_Crs = new course_1.course("C Language");
    var JavaLang_Crs = new course_1.course("Java Language");
    var CppLang_Crs = new course_1.course("C++ Language");
    var JSLang_Crs = new course_1.course("JavaScript Language");
    var std = [Student.NewStd("Ahmed", 0, 19, [[CLang_Crs, 0], [JSLang_Crs, 50]], true), Student.NewStd("Ola", 0, 20, [[JavaLang_Crs, 50], [JSLang_Crs, 100]])];
    if (Student.IsCrsExists(std[0], CppLang_Crs.crsName)) {
        Student.AssignGrade(std[0], [CppLang_Crs, 25]);
    }
    else {
        Student.AddCrs(std[0], [CppLang_Crs, 25]);
    }
    std.forEach(function (s) { return Student.DisplayStudent(s); });
    JSLang_Crs.Display();
})();
