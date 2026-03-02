import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { HttpExceptionFilter } from 'src/filters/http-exception/http-exception.filter';
import { UseFilters } from '@nestjs/common';

@Controller('exception')
@UseFilters(HttpExceptionFilter)
export class ExceptionController {
  @Get('hello/:id')
  getHello(@Param('id', ParseIntPipe) id: number) {
    return { Message: `Your id is ${id}` };
  }
}
