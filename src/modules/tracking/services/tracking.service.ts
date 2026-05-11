import { Injectable } from '@nestjs/common';

@Injectable()
export class TrackingService {

  async updateDriverLocation(payload: any) {

    return {
      success: true,
      driverId: payload.driverId,
      lat: payload.lat,
      lng: payload.lng
    };
  }
}
