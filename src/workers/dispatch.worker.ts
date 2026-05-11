import { Injectable } from '@nestjs/common';

@Injectable()
export class DispatchWorker {

  async processRide(ride: any) {

    console.log('Processing ride', ride.id);
  }
}
