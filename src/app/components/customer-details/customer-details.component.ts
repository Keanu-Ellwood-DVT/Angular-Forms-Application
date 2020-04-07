import { Component, OnInit } from '@angular/core';
import { Title } from 'src/models/title.enum';
import { Gender } from 'src/models/gender.enum';
import { Customer } from 'src/models/customer.model';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { combineLatest } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { PhoneNumberValidationFactory } from 'src/app/forms/validators/phone-number-validation-factory';
import { EmailValidationFactory } from 'src/app/forms/validators/email-validation-factory';
import { IdNumberValidationFactory } from 'src/app/forms/validators/id-number-validation-factory';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.scss']
})
export class CustomerDetailsComponent implements OnInit {
  form: FormGroup;
  titles: Title[];
  genders: Gender[];
  customer: Customer;

  constructor() {
    this.form = new FormGroup({
      title: new FormControl('', { updateOn: 'change' }),
      firstName: new FormControl('', { validators: [ Validators.required ]}),
      middleName: new FormControl(''),
      idNumber: new FormControl('', { validators: [ IdNumberValidationFactory.SouthAfricanIDNumber, Validators.required ]}),
      nationality: new FormControl(''),
      lastName: new FormControl('', { validators: [ Validators.required ]}),
      gender: new FormControl('', { updateOn: 'blur' }),
      phoneNumber: new FormControl('', { validators: [ PhoneNumberValidationFactory.SouthAfricanPhoneNumber, Validators.required ] }),
      email: new FormControl('', { validators: [ EmailValidationFactory.email, Validators.required ] })
    });

    this.titles = Object.values(Title) as Title[];
    this.genders = Object.values(Gender) as Gender[];
    this.customer = {} as Customer;
  }

  get idNumber(): AbstractControl { return this.form.get('idNumber'); }
  get nationality(): AbstractControl { return this.form.get('nationality'); }
  get firstName(): AbstractControl { return this.form.get('firstName'); }
  get middleName(): AbstractControl { return this.form.get('middleName'); }
  get lastName(): AbstractControl { return this.form.get('lastName'); }
  get gender(): AbstractControl { return this.form.get('gender'); }
  get title(): AbstractControl { return this.form.get('title'); }
  get phoneNumber(): AbstractControl { return this.form.get('phoneNumber'); }
  get email(): AbstractControl { return this.form.get('email'); }

  ngOnInit(): void {
    this.idNumber.valueChanges
      .subscribe(x => this.customer.idNumber = x);

    this.nationality.valueChanges
      .subscribe(x => this.customer.nationality = x);

    this.firstName.valueChanges
      .subscribe(x => this.customer.firstName = x);

    this.middleName.valueChanges
      .subscribe(x => this.customer.middleName = x);

    this.lastName.valueChanges
      .subscribe(x => this.customer.lastName = x);

    combineLatest(
      this.firstName.valueChanges.pipe(startWith(this.customer.firstName)),
      this.middleName.valueChanges.pipe(startWith(this.customer.middleName)),
      this.lastName.valueChanges.pipe(startWith(this.customer.lastName)),
    )
      .pipe(map(x => ({ firstName: x[0] || '', middleName: x[1] || '', lastName: x[2] || '' })))
      .subscribe(names => {
        this.customer.name = `${names.firstName} ${names.middleName} ${names.lastName}`;
    });

    this.gender.valueChanges
      .subscribe(x => this.customer.gender = x);

    this.title.valueChanges
      .subscribe(x => this.customer.title = x);

    this.phoneNumber.valueChanges
      .subscribe(x => this.customer.phoneNumber = x);

    this.email.valueChanges
      .subscribe(x => this.customer.email = x);
  }

  displayCustomerDetails(){
    alert(JSON.stringify(this.customer));
  }

}
