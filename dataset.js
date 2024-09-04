const students = [
    { name: 'John Doe', age: 16, grade: 'A' },
    { name: 'Jane Smith', age: 17, grade: 'B' },
    { name: 'Sam Johnson', age: 15, grade: 'A' },
    { name: 'Emily Brown', age: 16, grade: 'C' },
    { name: 'Michael White', age: 17, grade: 'B' }
  ];
  
  function filterByGrade(studentsArray, grade) {
    return studentsArray.filter(student => student.grade === grade);
  }
  
  function averageAge(studentsArray) {
    const totalAge = studentsArray.reduce((sum, student) => sum + student.age, 0);
    return totalAge / studentsArray.length;
  }
  
  // Testing the functions
  console.log(filterByGrade(students, 'A')); 
  // [{ name: 'John Doe', age: 16, grade: 'A' }, { name: 'Sam Johnson', age: 15, grade: 'A' }]
  
  console.log(averageAge(students)); 
  // 16.2
  