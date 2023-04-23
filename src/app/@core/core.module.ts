import { NgModule } from "@angular/core";
import { LayoutModule } from "./layouts/layouts.module";
import { SplashScreenComponent } from "./components/splash-screen/splash-screen.component";
import { TermsComponent } from "./components/terms/terms.component";
import { FormsModule } from "@angular/forms";

@NgModule({
  imports: [LayoutModule, FormsModule],
  exports: [LayoutModule, SplashScreenComponent, TermsComponent],
  providers: [],
  declarations: [SplashScreenComponent, TermsComponent],
})
export class CoreModule {}
