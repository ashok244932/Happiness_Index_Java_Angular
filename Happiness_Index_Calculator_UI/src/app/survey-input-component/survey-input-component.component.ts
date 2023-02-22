import { Component, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AnyARecord } from 'dns';
import { Surveyform } from '../surveyform';
import { HappinessService } from '../happiness.service';

@Component({
  selector: 'app-survey-input-component',
  templateUrl: './survey-input-component.component.html',
  styleUrls: ['./survey-input-component.component.css']
})
export class SurveyInputComponentComponent implements OnInit {
  selectedDate!: string;
  surveyForm !:FormGroup;
  form1:Surveyform=new Surveyform();

  happinessIndex:number=0; 
  myMap!: Map<Date, number>;

  constructor(private formBuilder:FormBuilder,private router : Router,private happinessService : HappinessService) { }

  ngOnInit(): void {
    this.surveyForm = this.formBuilder.group({
      name: ['', Validators.required],
      age: ['', Validators.required],
      gender: ['', Validators.required],
      date: ['', Validators.required],
      workout: ['', Validators.required],      
      hobby: ['', Validators.required],
      fitness: ['', Validators.required],
      familytime: ['', Validators.required],
      jobtime: ['', Validators.required]
    });
  }


  addSurvey() {
    if (this.surveyForm.valid) {
      console.log(this.surveyForm.value);
      
      this.form1.name=this.surveyForm.get('name')?.value;
      this.form1.age=this.surveyForm.get('age')?.value;
      this.form1.gender=this.surveyForm.get('gender')?.value;
      this.form1.selectedDate=this.surveyForm.get('date')?.value;
      this.form1.workout=this.surveyForm.get('workout')?.value;
      this.form1.hobby=this.surveyForm.get('hobby')?.value;
      this.form1.fitness=this.surveyForm.get('fitness')?.value;
      this.form1.familytime=this.surveyForm.get('familytime')?.value;      
      this.form1.jobtime=this.surveyForm.get('jobtime')?.value;

      this.happinessIndex=this.form1.familytime+this.form1.jobtime;

      this.saveDetails();

    }
  }

  saveDetails()
  {
    this.happinessService.createHappinessDetail(this.form1).subscribe(data=>
      {
        console.log(data);
      },
      error => console.log(error));

      this.submitSurvey();
  }

  submitSurvey()
  {
    this.router.navigate(['/happinesscalc']);
  }

}
