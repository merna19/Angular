"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.course = void 0;
var course = /** @class */ (function () {
    function course(crsName) {
        this.crsName = crsName;
        this.StdCount = 0;
        this.students = [];
    }
    course.prototype.GetHighestAVGStudent = function () {
        var max = -Infinity;
        var stdMax = null;
        if (this.students != undefined) {
            stdMax = this.students[0];
            this.students.forEach(function (s) {
                if (max < s.AvgGrade) {
                    stdMax = s;
                    max = s.AvgGrade;
                }
            });
        }
        return stdMax;
    };
    course.prototype.Display = function () {
        var _this = this;
        var _a, _b;
        console.log("course Name: ".concat(this.crsName, "| number of students: ").concat(this.StdCount));
        this.students.forEach(function (s) {
            var stdCrs = s.courses.find(function (c) { return c[0].crsName == _this.crsName; });
            var Grade = 0;
            if (stdCrs) {
                Grade = stdCrs[1];
            }
            console.log("Student Name: ".concat(s.FirstName, " \t student Grade: ").concat(Grade, " "));
        });
        console.log("student With Highest Average Grade: ".concat((_a = this.GetHighestAVGStudent()) === null || _a === void 0 ? void 0 : _a.FirstName, "\t Average Grade: ").concat((_b = this.GetHighestAVGStudent()) === null || _b === void 0 ? void 0 : _b.AvgGrade));
    };
    return course;
}());
exports.course = course;
