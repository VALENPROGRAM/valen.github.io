import { NgModule } from '@angular/core';
import { LayoutModule } from './layouts/layouts.module';
import { SplashScreenComponent } from './components/splash-screen/splash-screen.component';

@NgModule({
  imports: [LayoutModule],
  exports: [LayoutModule, SplashScreenComponent],
  providers: [],
  declarations: [SplashScreenComponent],
})
export class CoreModule {}
