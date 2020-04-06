import { Province } from './province.enum';

export class Address {
  addressLine1: string;
  addressLine2: string;
  city: string;
  province: Province;
  zipCode: string;
}
