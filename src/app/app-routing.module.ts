import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/finanzas', pathMatch: 'full' },

  {
    path: 'finanzas',
    loadChildren: () => import('./components/finanzas/finanzas.module').then(m => m.FinanzasModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
