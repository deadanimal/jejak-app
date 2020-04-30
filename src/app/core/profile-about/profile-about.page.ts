import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-about',
  templateUrl: './profile-about.page.html',
  styleUrls: ['./profile-about.page.scss'],
})
export class ProfileAboutPage implements OnInit {

  // Icon
  iconHeader = 'assets/img/settings/about.svg'

  constructor() { 
    this.loadInfo()
  }

  ngOnInit() {
  }

  loadInfo() {
    console.log('Loading info')
  }

}
