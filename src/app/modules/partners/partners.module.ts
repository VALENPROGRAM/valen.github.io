import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPartnersComponent } from './main-partners/main-partners.component';

const partnersRoutes: Routes = [
  {
    path: '',
    component: MainPartnersComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(partnersRoutes), CommonModule],
  exports: [RouterModule],
  // declarations: [PartnersComponent],
  providers: [],
  declarations: [MainPartnersComponent],
})
export class PartnersModule {}
