import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CustomerDetailsComponent } from './components/customer-details/customer-details.component';
import { PhoneNumberDirective } from './forms/directives/phone-number.directive';

@NgModule({
  declarations: [
    AppComponent,
    CustomerDetailsComponent,
    PhoneNumberDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
