import { Component } from '@angular/core';


@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html'

})
export class AppComponent {

  title = 'First Angular 2 App';
  testColor = 'green';
  name='bob';
  customers=[
    {id:1, name:'aleena'},{
      id:2, name:'sophie'
    },{
      id:3, name:'rajesh'
    }
  ];
  changeColor() {
    if (this.testColor=='red')
      this.testColor='green';
    else
      this.testColor = 'red';
  }
}
