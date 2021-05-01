import {StudentType} from "../02/02";
import {addSkill, madeStudentActive} from "./03";

let student: StudentType;

beforeEach(() => {student = {
    id: 1,
    "name": "Inna",
    age: 35,
    isActive: true,
    address: {
        streetTitle: "Nova, 6",
        cityTitle: {
            city: "Kriwiy Ryg",
            country: "Ukraine"
        }
    },
    technologies: [
        {id: 1,
            title: "JS"},
        {id: 2,
            title: "React"},
        {id: 3,
            title: "HTML"}
    ]
}})


test("new tech skill added to student", () => {
    expect(student.technologies.length).toBe(3);
    addSkill(student, "CSS")
    expect(student.technologies.length).toBe(4);
    expect(student.technologies[3].title).toBe("CSS");
    expect(student.technologies[3].id).toBeDefined();

})

test("student should be made active", () => {
    expect(student.isActive).toBe(false);
    madeStudentActive(student)
    expect(student.isActive).toBe(true);


})


