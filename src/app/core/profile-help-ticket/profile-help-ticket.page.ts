import { Component, OnInit } from '@angular/core';
import { Messages } from '../../../assets/mock/messages';

import { TicketsService } from 'src/app/shared/services/tickets/tickets.service';

@Component({
  selector: 'app-profile-help-ticket',
  templateUrl: './profile-help-ticket.page.html',
  styleUrls: ['./profile-help-ticket.page.scss'],
})
export class ProfileHelpTicketPage implements OnInit {

  // Icon
  iconAvatar = 'assets/img/default/avatar.png'

  // Messages
  messages = Messages

  // Data
  ticket
  input

  constructor(
    private ticketService: TicketsService
  ) { }

  ngOnInit() {
  }

  loadInfo() {
    
  }

  sendMessage() {

  }

}
