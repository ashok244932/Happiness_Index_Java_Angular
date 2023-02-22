import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HappinessCalculatorComponentComponent } from './happiness-calculator-component/happiness-calculator-component.component';
import { SurveyInputComponentComponent } from './survey-input-component/survey-input-component.component';

const routes: Routes = [{path:"happinesscalc",component:HappinessCalculatorComponentComponent},
{path:"inputsurvey",component:SurveyInputComponentComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
