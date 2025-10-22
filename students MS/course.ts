import { Istudent } from "./student";

interface Icourse{
    crsName: string;
    StdCount: number;
    students?: Istudent[];
    GetHighestAVGStudent():Istudent|null;
    Display():void;
}
export class course implements Icourse
{
    crsName: string;
    StdCount: number;
    students: Istudent[];
    constructor(crsName: string)
    {
        this.crsName= crsName;
        this.StdCount=0;
        this.students=[];
    }
    GetHighestAVGStudent(): Istudent|null{
        let max: number=-Infinity;
        let stdMax: Istudent|null=null;

        if(this.students != undefined)
        {
            stdMax=this.students[0];
            this.students.forEach(s =>   {
            if(max<s.AvgGrade)
            {
                stdMax=s;
                max=s.AvgGrade;
            }
                                        });
        }
    return stdMax;
    }
    Display(): void {
        console.log(`course Name: ${this.crsName}| number of students: ${this.StdCount}`);
        this.students.forEach(s=>{
                let stdCrs:[course,number]|undefined=s.courses.find(c=>c[0].crsName==this.crsName);
                let Grade: number=0;
                if(stdCrs)
                {
                    Grade=stdCrs[1];
                }
                console.log(`Student Name: ${s.FirstName} \t student Grade: ${ Grade} `)})
        console.log(`student With Highest Average Grade: ${this.GetHighestAVGStudent()?.FirstName}\t Average Grade: ${this.GetHighestAVGStudent()?.AvgGrade}`);
    }
}

