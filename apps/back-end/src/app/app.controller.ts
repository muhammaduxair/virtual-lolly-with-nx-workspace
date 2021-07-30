import { Body, Controller, Get, Param, Post } from '@nestjs/common';

import { AppService } from './app.service';
import { LollyDTO } from './dto/lollly.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getData() {
    return this.appService.getData();
  }

  @Post('/create')
  createLolly(@Body() lolly: LollyDTO) {
    return this.appService.createLolly(lolly);
  }

  @Get('/lolly/:id')
  getLollyByID(@Param('id') id: string) {
    return this.appService.getLollyById(id);
  }
}
