import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {

  public notificationType: string = '';
  public notificationMessage: string = '';

  constructor() { }

  ngOnInit(): void {
    this.success('test');
  }

  success(message: string){
    this.notificationType = 'success';
    this.notificationMessage = message;
  }

  error(message: string){
    this.notificationType = 'danger';
    this.notificationMessage = message;
  }

  warning(message: string){
    this.notificationType = 'warning';
    this.notificationMessage = message;
  }

  info(message: string){
    this.notificationType = 'info';
    this.notificationMessage = message;
  }

}
