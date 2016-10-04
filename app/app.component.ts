import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html'

})
export class AppComponent {

  title = 'Rajesh';
  testColor = 'green';
  changeColor() {
    if (this.testColor=='red')
      this.testColor='green';
    else
      this.testColor = 'red';
  }
}
