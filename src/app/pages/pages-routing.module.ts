import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {PagesComponent} from './pages.component';
import {SlServicesComponent} from './sl-services/sl-services.component';
import {SlUsComponent} from './sl-us/sl-us.component';
import {SlProductComponent} from './sl-product/sl-product.component';
import {SlCasesComponent} from './sl-cases/sl-cases.component';

const routes: Routes = [
  {
    path: 'pages', component: PagesComponent,
    children: [
      {path: '', redirectTo: 'services', pathMatch: 'full'},
      {path: 'services', component: SlServicesComponent},
      {path: 'product', component: SlProductComponent},
      {path: 'cases', component: SlCasesComponent},
      {path: 'us', component: SlUsComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule {
}
