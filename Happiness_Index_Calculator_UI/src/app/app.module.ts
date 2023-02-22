import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HappinessCalculatorComponentComponent } from './happiness-calculator-component/happiness-calculator-component.component';
import { SurveyInputComponentComponent } from './survey-input-component/survey-input-component.component';

@NgModule({
  declarations: [
    AppComponent,
    HappinessCalculatorComponentComponent,
    SurveyInputComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
