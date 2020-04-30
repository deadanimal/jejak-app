import { Component, OnInit, ViewChild } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})
export class IntroPage implements OnInit {

  @ViewChild('introSlides', {static: false}) introSlides: any

  endReached: boolean = false
  imgLoaded: boolean = false

  // Slider

  sliderConfig = {
    centeredSlides: true,
    initialSlide: 0,
    speed: 800
  }

  slides = [
    { 
      "image": "/assets/img/intro/events.svg", 
      "text": "Maintenance predictions in your hand" 
    },
    { 
      "image": "/assets/img/intro/calendar.svg", 
      "text": "Manage your work schedule" 
    }
  ];

  constructor(
    private router: Router,
    public menuCtrl: MenuController
  ) {
  }

  ngOnInit() {
    this.menuCtrl.enable(false) // Disable lateral menu
    this.imgLoaded = false
  }

  next() {
    this.introSlides.slideNext()
  }

  slideDidChange() {
    this.introSlides.isEnd().then(res => {
      this.endReached = res;
    })
  }

  navigatePage(path: string) {
    let navigationPath = '/' + path
    this.router.navigate([navigationPath])
  }

}
