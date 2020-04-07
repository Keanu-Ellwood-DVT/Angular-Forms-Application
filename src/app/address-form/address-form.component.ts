import { Component, OnInit } from '@angular/core';
import { Province } from 'src/models/province.enum';
import { Address } from 'src/models/address.model';


@Component({
  selector: 'app-address-form',
  templateUrl: './address-form.component.html',
  styleUrls: ['./address-form.component.scss']
})
export class AddressFormComponent implements OnInit {

  address: Address;
  provinces: Province[];

  constructor() {
    this.address = new Address();
    this.provinces = Object.values(Province) as Province[];
  }

  ngOnInit(): void {
  }

  displayAddress() {
    alert(JSON.stringify(this.address));
  }

}
