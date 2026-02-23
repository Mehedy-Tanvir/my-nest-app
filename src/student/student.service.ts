import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class StudentService {
  private students = [
    { id: 1, name: 'John Doe', age: 20 },
    { id: 2, name: 'Jane Smith', age: 22 },
    { id: 3, name: 'Bob Johnson', age: 19 },
  ];

  getAllStudents() {
    return this.students;
  }
  getStudentById(id: number) {
    const student = this.students.find((student) => student.id === id);
    if (!student)
      throw new NotFoundException(`Student with id ${id} not found`);
    return student;
  }
  //   POST
  createStudent(student: { name: string; age: number }) {
    const newStudent = {
      id: this.students.length + 1,
      ...student,
    };
    this.students.push(newStudent);
    return newStudent;
  }

  //   PUT
  updateStudent(id: number, student: { name?: string; age?: number }) {
    const studentIndex = this.students.findIndex((s) => s.id === id);
    if (studentIndex === -1) {
      throw new NotFoundException(`Student with id ${id} not found`);
    }
    this.students[studentIndex] = {
      ...this.students[studentIndex],
      ...student,
    };
    return this.students[studentIndex];
  }

  //   PATCH
  patchStudent(id: number, student: { name?: string; age?: number }) {
    const studentIndex = this.students.findIndex((s) => s.id === id);
    if (studentIndex === -1) {
      throw new NotFoundException(`Student with id ${id} not found`);
    }
    this.students[studentIndex] = {
      ...this.students[studentIndex],
      ...student,
    };
    return this.students[studentIndex];
  }

  //   DELETE
  deleteStudent(id: number) {
    const studentIndex = this.students.findIndex((s) => s.id === id);
    if (studentIndex === -1) {
      throw new NotFoundException(`Student with id ${id} not found`);
    }
    const deletedStudent = this.students[studentIndex];
    this.students.splice(studentIndex, 1);
    return deletedStudent;
  }
}
