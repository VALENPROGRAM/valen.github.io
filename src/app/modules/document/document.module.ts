import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DocumentComponent } from './main-document/main-document.component';

const partnersRoutes: Routes = [
  {
    path: '',
    component: DocumentComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(partnersRoutes), CommonModule],
  exports: [RouterModule],
  // declarations: [PartnersComponent],
  providers: [],
  declarations: [DocumentComponent],
})
export class DocumentModule {}
