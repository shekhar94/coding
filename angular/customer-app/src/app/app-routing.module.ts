import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/*
The import statements stay the same.
The first two paths are the routes to the
CustomersModule and the OrdersModule
respectively. Notice that the lazy loading
syntax uses loadChildren followed by a
function that uses the browser's built-in
import('...') syntax for dynamic imports. The import path is the relative path to the module.

for running in production
ng serve --configuration=production
ng serve (0.js, 1.js are chunks for customers and orders routes)
*/
const routes: Routes = [
  {
    path: 'customers',
    loadChildren: () => import('./customers/customers.module').then(mod => mod.CustomersModule)
  },
  {
    path: 'orders',
    loadChildren: () => import('./orders/orders.module').then(mod => mod.OrdersModule)
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
