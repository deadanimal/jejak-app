import { Component, OnInit, NgZone, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import * as am4plugins_forceDirected from '@amcharts/amcharts4/plugins/forceDirected';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';
am4core.useTheme(am4themes_animated);

import { Chart } from "chart.js";

import { Activity } from '../../../assets/mock/activities';
import { AppliancesService } from 'src/app/shared/services/appliances/appliances.service';
import { ReadingsService } from 'src/app/shared/services/readings/readings.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  
  // Feed
  activities
  ifFeedEmpty: boolean = true
  appliances
  readings

  // Icon
  iconMicrowave = 'assets/img/appliance/microwave.svg'
  iconToaster = 'assets/img/appliance/toaster.svg'

  // Segment
  segment: string

  // Amcharts
  private chartAppliance: am4plugins_forceDirected.ForceDirectedTree
  selectedDay: boolean = true
  selectedWeek: boolean = false
  selectedMonth: boolean = false

  // Chart.js
  @ViewChild('canvasPower', {static: false}) canvasPower: ElementRef
  private chartPower
  
  constructor(
    private applianceService: AppliancesService,
    private readingService: ReadingsService,
    private router: Router,
    private zone: NgZone
  ) { 
    this.loadInfo()
    this.loadMockData()
  }

  ngOnInit() {
    this.segment = 'appliance'
  }

  loadInfo() {
    console.log('Loading info...')
     /* Uncomment this to use
    this.applianceService.get().subscribe(
      (res) => {
        // Success
        this.appliances = res
      },
      () => {
        // Failed
      },
      () => {
        // After
      }
    )
    this.readingService.get().subscribe(
      (res) => {
        // Success
        this.readings = res
      },
      () => {
        // Failed
      },
      () => {
        // After
      }
    )
    */
  }

  loadMockData() {
    console.log('Loading mock data...')
    setTimeout(
      () => {
        this.activities = Activity
        this.ifFeedEmpty = !this.ifFeedEmpty;
        console.log('Mock data loaded')
      }, 500
    )
  }

  ionViewWillEnter() {
    this.zone.runOutsideAngular(
      () => {
        this.initChartAppliance()
        this.initChartPower()
      }
    )
  }

  ionViewDidLeave() {
    this.zone.runOutsideAngular(
      () => {
        if (this.chartAppliance) {
          this.chartAppliance.dispose()
        }
        if (this.chartPower) {
          this.chartPower.dispose()
        }
      }
    )
  }

  segmentChanged(ev: any) {
    console.log('Segment: ', this.segment)
    console.log('Segment changed: ', ev)
    if (this.segment == 'appliance') {
      setTimeout(
        () => {
          this.initChartAppliance()
        }, 1000
      )
    }
    if (this.segment == 'power') {
      setTimeout(
        () => {
          this.initChartPower()
        }, 1000
      )
    }
  }

  viewDetails() {
    // 
    this.router.navigate(['/appliance-details'])
  }

  initChartAppliance() {
    let chart = am4core.create('divAppliance', am4plugins_forceDirected.ForceDirectedTree);

    let networkSeries = chart.series.push(new am4plugins_forceDirected.ForceDirectedSeries())

    networkSeries.data = [
      {
        name: 'Always on',
        children: [
          {
            name: 'Lamp', value: 1,
          },
          {
            name: 'Floral', value: 1
          }
        ]
      },
      {
        name: 'Solar',
        children: [
          {
            name: 'Solar',
            value: 1
          }
        ]
      },
      {
        name: 'Fridge',
        value: 1
      },
      {
        name: 'Other',
        children: [
          {
            name: 'Fan',
            children: [
              {
                name: 'Fan 1', value: 1
              },
              {
                name: 'Fan 2', value: 1
              },
              {
                name: 'Fan 3', value: 1
              }
            ]
          }
        ]
      }
    ];

    networkSeries.dataFields.linkWith = "linkWith";
    networkSeries.dataFields.name = "name";
    networkSeries.dataFields.id = "name";
    networkSeries.dataFields.value = "value";
    networkSeries.dataFields.children = "children";
    networkSeries.links.template.distance = 1;
    networkSeries.nodes.template.tooltipText = "{name}";
    networkSeries.nodes.template.fillOpacity = 1;
    networkSeries.nodes.template.outerCircle.scale = 1;

    networkSeries.nodes.template.label.text = "{name}"
    networkSeries.fontSize = 8;
    networkSeries.nodes.template.label.hideOversized = true;
    networkSeries.nodes.template.label.truncate = true;
    networkSeries.minRadius = am4core.percent(2);
    networkSeries.manyBodyStrength = -5;
    networkSeries.links.template.strokeOpacity = 0;

    this.chartAppliance = chart

  }

  initChartPower() {
    this.chartPower = new Chart(this.canvasPower.nativeElement, {
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
