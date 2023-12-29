import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { HeroSectionComponent } from './component/hero-section/hero-section.component';
import { IntroductionSectionComponent } from './component/introduction-section/introduction-section.component';
import { FeatureSectionComponent } from './component/feature-section/feature-section.component';
import { WorkSectionComponent } from './component/work-section/work-section.component';
import { FormComponent } from './component/form/form.component';
import { FooterComponent } from './component/footer/footer.component';
import { BuildSectionComponent } from './component/build-section/build-section.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeroSectionComponent,
    IntroductionSectionComponent,
    FeatureSectionComponent,
    WorkSectionComponent,
    FormComponent,
    FooterComponent,
    BuildSectionComponent,
    
  ],
  imports: [
    BrowserModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
