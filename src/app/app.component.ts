import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showSecrets: boolean = false;
  clickTimes = [];

  onDisplayDetails() {
    console.log("Button was clicked");
    this.showSecrets = true;
    this.clickTimes.push("Clicked at: " + Date.now());
    console.log("New size is: " + this.clickTimes.length);
    console.log(this.clickTimes);
    
  }
}
