import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () =>
      import('./modules/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'document',
    loadChildren: () =>
      import('./modules/document/document.module').then((m) => m.DocumentModule),
  },
  {
    path: '',
    children: [
      {
        path: 'families',
        loadChildren: () =>
          import('./modules/families/families.module').then(
            (m) => m.FamiliesModule
          ),
      },
      {
        path: 'partners',
        loadChildren: () =>
          import('./modules/partners/partners.module').then(
            (m) => m.PartnersModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: 'enabledBlocking',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
