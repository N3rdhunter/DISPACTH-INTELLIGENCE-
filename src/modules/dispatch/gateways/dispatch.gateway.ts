import {
  WebSocketGateway,
  WebSocketServer
} from '@nestjs/websockets';

import { Server } from 'socket.io';

@WebSocketGateway({
  cors: true
})
export class DispatchGateway {

  @WebSocketServer()
  server: Server;

  emitRideAssigned(data: any) {

    this.server.emit('ride_assigned', data);
  }
}
