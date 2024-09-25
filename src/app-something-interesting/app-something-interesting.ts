import { Component } from '@angular/core';
@Component({
  selector: 'app-something-interesting',
  standalone: true,
  template: `   <div class="mustache-container">
  <div class="mustache">
      <div class="left-mustache"></div>
      <div class="right-mustache"></div>
  </div>
</div>`,
  styles: `
  .mustache-container {
      width: 200px;
      height: 100px;
      position: relative;
      background-color: #f4f4f4;
      margin: 100px auto;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
  }

  /* Styling the mustache */
  .mustache {
      position: absolute;
      width: 160px;
      height: 30px;
      background-color: #000;
      border-radius: 50%;
      display: flex;
      justify-content: space-between;
  }

  /* Styling the left part of the mustache */
  .left-mustache, .right-mustache {
      width: 75px;
      height: 100%;
      background-color: #000;
      border-radius: 50% 50% 0 0;
  }

  .left-mustache {
      transform: rotate(30deg);
  }

  .right-mustache {
      transform: rotate(-30deg);
  }

  /* Shaving half the mustache on hover */
  .mustache-container:hover .left-mustache {
      opacity: 0;
  }`,
})
export class SomethingInterestingComponent {
  constructor() {
    this.doSomethingInteresting();
  }
  private doSomethingInteresting() {
    alert('too much mustache ~_~');
  }
}
