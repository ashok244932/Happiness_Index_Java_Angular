import { FormControl, FormGroup } from '@angular/forms';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import Chart from 'chart.js/auto';
import { HappinessService } from '../happiness.service';

@Component({
  selector: 'app-happiness-calculator-component',
  templateUrl: './happiness-calculator-component.component.html',
  styleUrls: ['./happiness-calculator-component.component.css']
})
export class HappinessCalculatorComponentComponent implements OnInit {
  name!: string;
  dataMap: Map<Date, number> = new Map<Date, number>();
 @ViewChild('myChart', { static: true }) myChart!: ElementRef;

data: any = {};

  constructor(private happinessService : HappinessService) { }

  ngOnInit(): void {   
    
  }


  onFormSubmit() {
    this.happinessService.getHappinessDetail(this.name).subscribe((data) => {
      this.data=data;
      /*this.data = Object.keys(data).map(key => {
        return { date: key, value: data[key] };
      });*/

      this.createChart();
  });
  /*  this.happinessService.getHappinessDetail(this.name).subscribe(data => {
      Object.entries(data).reduce((acc, [key, value]) => {
        acc.set(new Date(key), Number(value));
        return acc;
      }, this.dataMap);
    });

    this.createChart();
   return this.dataMapArray;*/
  }

  get dataMapArray(): [Date, number][] {
    return Array.from(this.dataMap);
  }

  createChart() { 

    const datesArray = Object.keys(this.data);
    const valuesArray = Object.values(this.data);
    const chartData = {
      labels: datesArray, // An array of dates
      datasets: [
        {
          label: 'Number',
          data: valuesArray, // An array of numbers
          fill: false,
          borderColor: 'rgb(75, 192, 192)',
          tension: 0.1
        }
      ]
    };
  
    const chart = new Chart(this.myChart.nativeElement, {
      type: 'line',
      data: chartData,
      options: {
        responsive: true,
        scales: {
          x: {
            display: true,
            title: {
              display: true,
              text: 'Date'
            }
          },
          y: {
            display: true,
            title: {
              display: true,
              text: 'Number'
            }
          }
        }
      }
    });
  }
  
  
    

}
