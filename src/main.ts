import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { SomethingInterestingComponent } from './app-something-interesting/app-something-interesting';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SomethingInterestingComponent],
  template: `<app-something-interesting/>`,
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);
