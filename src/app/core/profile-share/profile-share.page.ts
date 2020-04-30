import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-share',
  templateUrl: './profile-share.page.html',
  styleUrls: ['./profile-share.page.scss'],
})
export class ProfileSharePage implements OnInit {

  // Icon
  iconHeader = 'assets/img/settings/share.svg'

  constructor() { }

  ngOnInit() {
  }
  
  share() {
    console.log('Sharing this app')
  }

  rate() {
    console.log('Rating this app')
  }

}
