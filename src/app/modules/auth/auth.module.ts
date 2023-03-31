import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RedirectComponent } from './redirect/redirect.component';

const authRoutes: Routes = [
  { path: '', component: RedirectComponent },
  {
    path: 'families',
    component: LoginComponent,
    data: { title: 'FOR FAMILIES', type: 'families' },
  },
  {
    path: 'partners',
    component: LoginComponent,
    data: { title: 'FOR PARTNERS', type: 'partners' },
  },
];

@NgModule({
  imports: [RouterModule.forChild(authRoutes), FormsModule],
  exports: [RouterModule],
  // declarations: [AuthComponent],
  providers: [],
  declarations: [LoginComponent, RedirectComponent],
})
export class AuthModule {}
