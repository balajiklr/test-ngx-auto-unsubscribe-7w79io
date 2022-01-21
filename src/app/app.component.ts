import { Component } from '@angular/core';
import { AppService } from './app.service'

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Angular';
  toggled: boolean = true;
  subscriptionNumber: number = 0;
  constructor(private readonly appService: AppService) { }

  toggle(): void {
    this.toggled = !this.toggled;
  }
  count(): void {
    this.subscriptionNumber++;
    this.appService.subject.next(this.subscriptionNumber);
  }
}
