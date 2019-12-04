import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'madlibs';
  largePlace: string;
  favPerson: string;
  number: string;
  vehicle: string;
  adjective: string;
  adjective2: string;
  occupation: string;
  verbing: string;
  animal: string;
  bodyPart: string;

  adjective3: string;
  verbing2: string;
  adjective4: string;
  noun: string;

  past2: string;
  past3: string
  place: string;
  verb: string;
  closing: string;
  name: string;

  public show:boolean = false;
  public buttonName:any = 'Let\'s Lib!';

  ngOnInit () {  }

  toggle() {
    this.show = !this.show;

    // CHANGE THE NAME OF THE BUTTON.
    if(this.show)  
      this.buttonName = "Try Again :)";
    else
      this.buttonName = "Let's Lib!";
  }

}
