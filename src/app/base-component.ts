import { OnDestroy } from '@angular/core';
import { AutoUnsubscribe } from 'ngx-auto-unsubscribe';

@AutoUnsubscribe()
export class BaseComponent implements OnDestroy {
  ngOnDestroy(): void {
    console.log('Destroyed component')
  }
}