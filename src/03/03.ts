import {student, StudentType} from "../02/02";

export const addSkill = (st: StudentType, skill: string) => {
st.technologies.push({
    id: new Date().getTime(),
    title: skill
})
}

export const madeStudentActive = (student: StudentType) => {
    student.isActive = true
}