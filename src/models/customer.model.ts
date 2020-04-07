import { Gender } from './gender.enum';
import { Title } from '@angular/platform-browser';

export class Customer {
  name: string;
  idNumber: number;
  nationality: string;
  firstName: string;
  middleName: string;
  lastName: string;
  gender: Gender;
  title: Title;
  birthDate: Date;
  phoneNumber: string;
  email: string;
}
