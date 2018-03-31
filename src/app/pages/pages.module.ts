import {NgModule} from '@angular/core';
import {PagesComponent} from './pages.component';
import {PagesRoutingModule} from './pages-routing.module';
import {LogoComponent} from '../common/commonents/logo/logo.component';
import {NavComponent} from '../common/commonents/nav/nav.component';
import {SlServicesComponent} from './sl-services/sl-services.component';
import { SlProductComponent } from './sl-product/sl-product.component';
import { SlCasesComponent } from './sl-cases/sl-cases.component';
import { SlUsComponent } from './sl-us/sl-us.component';

@NgModule({
  declarations: [
    LogoComponent,
    NavComponent,
    PagesComponent,
    SlServicesComponent,
    SlProductComponent,
    SlCasesComponent,
    SlUsComponent
  ],
  imports: [
    PagesRoutingModule
  ],
  providers: []
})
export class PagesModule {
}
