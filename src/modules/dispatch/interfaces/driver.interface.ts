export interface DriverCandidate {
  id: string;
  lat: number;
  lng: number;
  eta: number;
  distance: number;
  rating: number;
  idleTime: number;
  available: boolean;
  vehicleType: string;
}
