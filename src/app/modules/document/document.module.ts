import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DocumentComponent } from "./main-document/main-document.component";
import { CoreModule } from "src/app/@core/core.module";
import { TermsComponent } from "src/app/@core/components/terms/terms.component";

const partnersRoutes: Routes = [
  {
    path: "",
    component: DocumentComponent,
  },
  { path: "terms&condition", component: TermsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(partnersRoutes), CommonModule, CoreModule],
  exports: [RouterModule],
  // declarations: [PartnersComponent],
  providers: [],
  declarations: [DocumentComponent],
})
export class DocumentModule {}
