import { Body, Controller, Post } from '@nestjs/common';
import { UppercasesPipe } from 'src/common/pipes/uppercases/uppercases.pipe';

@Controller('myname')
export class MynameController {
  @Post('custom')
  transformName(@Body('name', new UppercasesPipe()) name: string) {
    return { message: `Received name: ${name}` };
  }
}
