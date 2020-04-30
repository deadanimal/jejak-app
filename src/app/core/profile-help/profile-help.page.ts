import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { TicketsService } from 'src/app/shared/services/tickets/tickets.service';

@Component({
  selector: 'app-profile-help',
  templateUrl: './profile-help.page.html',
  styleUrls: ['./profile-help.page.scss'],
})
export class ProfileHelpPage implements OnInit {

  // Icon
  iconHeader = 'assets/img/settings/conversation.svg'
  iconSpeech = 'assets/img/settings/speech-bubble.svg'

  // Data
  tickets

  constructor(
    private ticketService: TicketsService,
    private router: Router
  ) { 
    this.loadInfo()
  }

  ngOnInit() {
  }

  loadInfo() {
    // this.tickets = this.ticketService.tickets
    console.log('Loading info')
  }

  navigatePage(url: string) {
    let navigationUrl: string = '/' + url
    this.router.navigate([navigationUrl])
    console.log(navigationUrl)
  }

}
