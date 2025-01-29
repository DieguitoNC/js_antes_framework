//shallow copy
const htmlCourse = {
    course: "HTML",
    students: [{name: "Diego", email: "diego@email.com"}]
}

/*
const jsCourse = {
    ...htmlCourse,
    course: "Javascript"
}*/

// Modifica o htmlCourse tambem, students e uma referencia, nao uma copia
//jsCourse.students.push({name: "joao", email: "joao@email.com"})

// Deep Copy (copia profunda)


/*
const jsCourse = {
    ...htmlCourse,
    course: "Javascript",
    students: [...htmlCourse.students, {name: "maria", email: "maria@email.com"}],
}


jsCourse.students.push({name: "joao", email: "joao@email.com"})
*/

const jsCourse = {
    ...htmlCourse,
    course:"javascript"
}

jsCourse.students = [
    ...htmlCourse.students,
    {name:"jao", email:"jao@email.com"}
]

console.log(htmlCourse, jsCourse)