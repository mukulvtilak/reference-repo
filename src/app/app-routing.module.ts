import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '', redirectTo: 'lazymodule', pathMatch:'full',
  },
  {
    path: 'lazymodule', loadChildren:'./lazymodule/lazymodule.module#LazymoduleModule'
  },
  {
    path: 'lazymodule2', loadChildren:'./lazymodule2/lazymodule2.module#Lazymodule2Module'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
