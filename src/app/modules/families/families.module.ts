import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainFamiliesComponent } from './main-families/main-families.component';

const familiesRoutes: Routes = [
  {
    path: '',
    component: MainFamiliesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(familiesRoutes), CommonModule],
  exports: [RouterModule],
  // declarations: [FamiliesComponent],
  providers: [],
  declarations: [MainFamiliesComponent],
})
export class FamiliesModule {}
