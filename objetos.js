/*
objeto = 1
objeto{key}
*/

const subject = {
    name: 'Aplicaciones web',
    cuatri: 4,
    profesor: 'Jenyfer',
    'classroom': 'Lab redes I',
    'total hours': 70,
    weekHours: 5
}

console.log(subject);
console.log(subject.name);
console.log(subject.profesor);
console.log(subject['classroom']);
console.log(subject['total hours']);

subject.profesor = 'Jenysita y Roblox';
subject.career = 'TIADSM';
console.log(subject);

const student = {
    name: 'Laura Alicia',
    age: 21,
    califications: [10, 10, 10],
    city: 'Mexico'
}

const group = {
    name  : '4B',
    students: [student, student, student],
    subjects: [subject, subject, subject]
}

console.log(group);
console.log(group.subjects[0].profesor);
console.log(group.students[1].califications);
console.log(group.students[1].califications[0]);

