/*
app-routing.module.ts

Notice that the lazy loading syntax uses loadChildren followed by a
function that uses the browser's built-in import('...') syntax for
dynamic imports. The import path is the relative path to the module.


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
*/