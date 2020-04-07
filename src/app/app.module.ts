import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AddressFormComponent } from './address-form/address-form.component';
import { CustomerDetailsComponent } from './components/customer-details/customer-details.component';
import { PhoneNumberDirective } from './forms/directives/phone-number.directive';
import { ReactiveFormsModule } from '@angular/forms';
import { EmailDirective } from './forms/directives/email.directive';
import { IdentificationNumberDirective } from './forms/directives/identification-number.directive';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { RouterModule } from '@angular/router';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
@NgModule({
  declarations: [
    AppComponent,
    CustomerDetailsComponent,
    PhoneNumberDirective,
    EmailDirective,
    IdentificationNumberDirective,
    AddressFormComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    RouterModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
