import { Controller, Post, Body } from '@nestjs/common';
import { DispatchService } from '../services/dispatch.service';

@Controller('dispatch')
export class DispatchController {

  constructor(
    private readonly dispatchService: DispatchService
  ) {}

  @Post('/assign')
  assignDriver(@Body() body: any) {

    return this.dispatchService.selectBestDriver(
      body.drivers
    );
  }
}
