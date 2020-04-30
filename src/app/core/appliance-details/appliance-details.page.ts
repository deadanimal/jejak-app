import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { Chart } from "chart.js";
import { AppliancesService } from 'src/app/shared/services/appliances/appliances.service';

@Component({
  selector: 'app-appliance-details',
  templateUrl: './appliance-details.page.html',
  styleUrls: ['./appliance-details.page.scss'],
})
export class ApplianceDetailsPage implements OnInit {

  // Appliance
  appliance
  applianceName: string = 'Lamp'
  
  // Segment
  segment: string

  // Chart.js
  @ViewChild('canvasDay', {static: false}) canvasDay: ElementRef
  @ViewChild('canvasWeek', {static: false}) canvasWeek: ElementRef
  @ViewChild('canvasMonth', {static: false}) canvasMonth: ElementRef
  @ViewChild('canvasYear', {static: false}) canvasYear: ElementRef

  private chartDay
  private chartWeek
  private chartMonth
  private chartYear

  // Icon
  iconLamp = 'assets/img/appliance/lamp.svg'

  constructor(
    private applianceService: AppliancesService,
    private router: Router
  ) { 
    this.loadInfo()
  }

  ngOnInit() {
    this.segment = 'D'
  }

  ionViewDidEnter() {
    this.initChartDay()
    console.log(this.chartDay)
  }

  loadInfo() {
    // this.appliance = this.applianceService.appliances
  }

  navigatePage(path: string) {
    let navigationPath = '/' + path
    this.router.navigate([navigationPath])
  }

  segmentChanged(ev: string) {
    console.log(ev)
    if (this.segment == 'D') {
      setTimeout(
        () => {
          this.initChartDay()
        }, 1000
      )
    }
    else if (this.segment == 'W') {
      setTimeout(
        () => {
          this.initChartWeek()
        }, 1000
      )
    }
    else if (this.segment == 'M') {
      setTimeout(
        () => {
          this.initChartMonth()
        }, 1000
      )
    }
    else if (this.segment == 'Y') {
      setTimeout(
        () => {
          this.initChartYear()
        }, 1000
      )
    }
  }

  initChartDay() {
    this.chartDay = new Chart(this.canvasDay.nativeElement, {
      type: "line",
      data: {
        labels: ["10.00am", "11.00am", "12.00pm", "1.00pm", "2.00pm", "3.00pm", "4.00pm"],
        datasets: [
          {
            label: "",
            fill: false,
            lineTension: 0.1,
            backgroundColor: "rgba(75,192,192,0.4)",
            borderColor: "rgba(75,192,192,1)",
            borderCapStyle: "butt",
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: "miter",
            pointBorderColor: "rgba(75,192,192,1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(75,192,192,1)",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [65, 59, 80, 81, 56, 55, 40],
            spanGaps: false
          }
        ]
      }
    });
  }

  initChartWeek() {
    this.chartWeek = new Chart(this.canvasWeek.nativeElement, {
      type: "line",
      data: {
        labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        datasets: [
          {
            label: "",
            fill: false,
            lineTension: 0.1,
            backgroundColor: "rgba(75,192,192,0.4)",
            borderColor: "rgba(75,192,192,1)",
            borderCapStyle: "butt",
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: "miter",
            pointBorderColor: "rgba(75,192,192,1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(75,192,192,1)",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [65, 59, 80, 81, 56, 55, 40],
            spanGaps: false
          }
        ]
      }
    });
  }

  initChartMonth() {
    this.chartMonth = new Chart(this.canvasMonth.nativeElement, {
      type: "line",
      data: {
        labels: ["Week 1", "Week 2", "Week 3", "Week 4", "Week 5"],
        datasets: [
          {
            label: "",
            fill: false,
            lineTension: 0.1,
            backgroundColor: "rgba(75,192,192,0.4)",
            borderColor: "rgba(75,192,192,1)",
            borderCapStyle: "butt",
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: "miter",
            pointBorderColor: "rgba(75,192,192,1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(75,192,192,1)",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [65, 59, 80, 81, 56],
            spanGaps: false
          }
        ]
      }
    });
  }

  initChartYear() {
    this.chartYear = new Chart(this.canvasYear.nativeElement, {
      type: "line",
      data: {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [
          {
            label: "",
            fill: false,
            lineTension: 0.1,
            backgroundColor: "rgba(75,192,192,0.4)",
            borderColor: "rgba(75,192,192,1)",
            borderCapStyle: "butt",
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: "miter",
            pointBorderColor: "rgba(75,192,192,1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(75,192,192,1)",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [65, 59, 80, 81, 56, 55, 40],
            spanGaps: false
          }
        ]
      }
    });
  }

}
