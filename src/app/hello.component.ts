import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { BaseComponent } from './base-component';
import { AppService } from './app.service';
import { Subscription } from 'rxjs/Subscription';
import { AutoUnsubscribe } from './auto-un-sub';

@AutoUnsubscribe()
@Component({
  selector: 'hello',
  template: `<h1>Hello {{name}}!</h1>`,
  styles: [`h1 { font-family: Lato; }`],
})
export class HelloComponent implements OnInit {
  @Input() name: string;
  sub: Subscription;

  constructor(private readonly appService: AppService) {}

  ngOnInit(): void {
    this.sub = this.appService.observable.subscribe((value: number) => {
      console.log('Got inside observable and number is: ', value);
    });
  }

  // If ngOnDestroy is not delcared at all it will work. If it's declared we need to define super.ngOnDestroy()
}
