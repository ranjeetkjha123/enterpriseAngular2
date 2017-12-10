import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html'
 
})
export class StatusComponent {
	
	 private BACKSTATUS = require("./assets/ferret_background.png");

    constructor() {};
	 value: number = 15;

    randomize() {
        this.value = Math.floor((Math.random() * 100) + 1);
    }


 
}
