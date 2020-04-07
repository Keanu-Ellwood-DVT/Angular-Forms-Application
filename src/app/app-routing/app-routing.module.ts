import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { CustomerDetailsComponent } from '../components/customer-details/customer-details.component';
import { AddressFormComponent } from '../address-form/address-form.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'customer'
  },
  {
    path: 'customer',
    component: CustomerDetailsComponent
  },
  {
    path: 'address',
    component: AddressFormComponent
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'customer'
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes, { enableTracing: true, onSameUrlNavigation: 'reload'})
  ]
})
export class AppRoutingModule { }
