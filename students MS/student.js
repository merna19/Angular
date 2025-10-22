"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NewStd = NewStd;
exports.AddCrs = AddCrs;
exports.AssignGrade = AssignGrade;
exports.CalculateAVG = CalculateAVG;
exports.IsCrsExists = IsCrsExists;
exports.DisplayStudent = DisplayStudent;
function NewStd(FirstName, AvgGrade, Age, courses, enrolStatus) {
    if (AvgGrade === void 0) { AvgGrade = 0; }
    if (courses === void 0) { courses = []; }
    if (enrolStatus === void 0) { enrolStatus = false; }
    var std = { FirstName: FirstName, AvgGrade: AvgGrade, Age: Age, courses: courses, enrolStatus: enrolStatus };
    if ((courses === null || courses === void 0 ? void 0 : courses.length) != 0) {
        std.enrolStatus = true;
        courses.forEach(function (c) {
            c[0].StdCount++;
            c[0].students.push(std);
        });
    }
    return std;
}
function AddCrs(std, crs) {
    crs[0].StdCount++;
    if (std.courses == undefined) {
        std.courses = [];
    }
    if (!IsCrsExists(std, crs[0].crsName)) {
        std.courses.push(crs);
        std.enrolStatus = true;
    }
}
function AssignGrade(std, crs) {
    var _a;
    var courseIndex = (_a = std.courses) === null || _a === void 0 ? void 0 : _a.findIndex(function (c) { return c[0].crsName == crs[0].crsName; });
    if (courseIndex != undefined && courseIndex != -1) {
        std.courses[courseIndex][1] = crs[1];
        CalculateAVG(std);
    }
}
function CalculateAVG(std) {
    var AVG = 0;
    if (std.courses != null) {
        std.courses.forEach(function (c) { return AVG += (c[1]); });
        AVG /= std.courses.length;
    }
    std.AvgGrade = AVG;
}
function IsCrsExists(std, crsName) {
    var _a;
    if ((_a = std.courses) === null || _a === void 0 ? void 0 : _a.find(function (c) { return c[0].crsName == crsName; })) {
        return true;
    }
    else {
        return false;
    }
}
function DisplayStudent(std) {
    var _a;
    CalculateAVG(std);
    console.log("First Name: ".concat(std.FirstName, " | Age: ").concat(std.Age, " | Average Grade:").concat(std.AvgGrade, " | Enroll Status: ").concat(std.enrolStatus));
    console.log("Courses: ");
    var counter = 1;
    (_a = std.courses) === null || _a === void 0 ? void 0 : _a.forEach(function (c) { console.log("".concat(counter, ". ").concat(c[0].crsName)); counter++; });
    console.log("************************************************************************************************\n");
}
