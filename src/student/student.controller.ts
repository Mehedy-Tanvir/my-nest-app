import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
} from '@nestjs/common';
import { StudentService } from './student.service';

@Controller('student')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  @Get()
  getAllStudents() {
    return this.studentService.getAllStudents();
  }

  @Get(':id')
  getStudentById(id: string) {
    return this.studentService.getStudentById(Number(id));
  }

  @Post()
  createStudent(@Body() student: { name: string; age: number }) {
    return this.studentService.createStudent(student);
  }

  @Put(':id')
  updateStudent(
    @Param('id') id: string,
    @Body() student: { name?: string; age?: number },
  ) {
    return this.studentService.updateStudent(Number(id), student);
  }

  @Patch(':id')
  patchStudent(
    @Param('id') id: string,
    @Body() student: Partial<{ name?: string; age?: number }>,
  ) {
    return this.studentService.patchStudent(Number(id), student);
  }

  @Delete(':id')
  deleteStudent(@Param('id') id: string) {
    return this.studentService.deleteStudent(Number(id));
  }
}
