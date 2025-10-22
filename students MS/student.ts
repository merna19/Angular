import {course} from "./course"
//array of tuples
type TCourse= [course,number];

export interface Istudent
{
    FirstName: string;
    AvgGrade: number;
    courses: TCourse[];
    Age: number;
    enrolStatus?: boolean;
}
export function NewStd(FirstName:string, AvgGrade:number=0, Age:number, courses: TCourse[]=[] ,enrolStatus=false): Istudent
{
    let std: Istudent={FirstName: FirstName, AvgGrade:AvgGrade, Age:Age, courses: courses, enrolStatus:enrolStatus};
    if(courses?.length!=0)
    {   
        std.enrolStatus=true;
        courses.forEach(
            c=>{c[0].StdCount++; 
            c[0].students.push(std); 
            })
    }
    return std;
}
export function AddCrs(std:Istudent, crs: TCourse):void
{   
    crs[0].StdCount++;
    if(std.courses==undefined)
        {std.courses=[];}
    if(!IsCrsExists(std,crs[0].crsName))
    {
        std.courses.push(crs);
        std.enrolStatus=true;
    }
    
}
export function AssignGrade(std:Istudent, crs: TCourse):void
{
    let courseIndex: number=std.courses?.findIndex(c=>c[0].crsName==crs[0].crsName);
    if(courseIndex!=undefined && courseIndex!=-1)
    {
        std.courses[courseIndex][1]=crs[1];
        CalculateAVG(std);
    }
}

export function CalculateAVG(std : Istudent):void
{   
    let AVG:number=0;
    if(std.courses!=null)
    {
        std.courses.forEach(c=>AVG+=(c[1]))
        AVG/=std.courses.length;
    }
    std.AvgGrade=AVG;
}
export function IsCrsExists(std:Istudent, crsName:string):boolean
{
    if(std.courses?.find(c=>c[0].crsName==crsName))
    {
        return true;
    }
    else
    {
        return false;
    }
}
export function DisplayStudent(std : Istudent) : void
{
    CalculateAVG(std);
    console.log(`First Name: ${std.FirstName} | Age: ${std.Age} | Average Grade:${std.AvgGrade} | Enroll Status: ${std.enrolStatus}`);
    console.log("Courses: ");
    let counter=1;
    std.courses?.forEach(c=>{console.log(`${counter}. ${c[0].crsName}`); counter++;});
    console.log("************************************************************************************************\n");
}
