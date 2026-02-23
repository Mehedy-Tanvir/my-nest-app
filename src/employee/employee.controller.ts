import { Controller, Get } from '@nestjs/common';

@Controller('employee')
export class EmployeeController {
  @Get()
  getAllEmployees() {
    return 'All employees';
  }
}
