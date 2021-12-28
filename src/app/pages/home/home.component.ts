import { Component, OnInit } from '@angular/core';
import { largeFadeTrigger } from 'src/app/animations/animationsTriggers';

@Component({
  selector: 'app-home',
  animations: [
    largeFadeTrigger
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
