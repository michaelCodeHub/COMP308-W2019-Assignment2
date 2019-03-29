import { FlashMessagesService } from 'angular2-flash-messages';
import { AuthService } from './../../services/auth.service';
import { Message } from './../../models/message';
import { MessageService } from './../../services/message.service';
import { Component, OnInit } from '@angular/core';
import { BasePageComponent } from 'src/app/partials/base-page/base-page.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent extends BasePageComponent implements OnInit {
  message: Message;

  constructor(
    route: ActivatedRoute,
    private messageService: MessageService,
    private flashMessage: FlashMessagesService,
    private authService: AuthService,
    private router: Router
    ) {
    super(route);
  }

  ngOnInit() {
    this.message = new Message();
  }

  isLoggedIn(): boolean {
    return this.authService.loggedIn();
  }

  onMessageSubmit(): void{
    this.messageService.addMessage(this.message).subscribe(data => {
      if (data.success) {
        this.flashMessage.show(data.msg, {cssClass: 'alert-success', timeOut: 3000});
        this.router.navigate(['/contact']);
      } else {
        this.flashMessage.show(data.msg, {cssClass: 'alert-danger', timeOut: 3000});
        this.router.navigate(['/contact']);
      }
     });
  }

}
