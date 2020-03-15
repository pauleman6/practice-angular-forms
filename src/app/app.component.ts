import { Component } from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  email = new FormControl('');

  updateEmail(){
    this.email.setValue('pauleman6@gmail.com')
  }


}
