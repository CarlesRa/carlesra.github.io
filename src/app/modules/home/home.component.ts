import { Component, OnInit } from '@angular/core';
import { largeFadeTrigger } from 'src/app/animations/animationsTriggers';
import {StoreDataService} from "./services/store-data.service";

@Component({
  selector: 'app-home',
  animations: [
    largeFadeTrigger
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  loading = true;
  chipList: string[] = [];

  constructor(
    private storeDataService: StoreDataService,
  ) {
    this.chipList = this.storeDataService.getHomeChips();
  }

  ngOnInit(): void {
    this.loading = false;
  }

}
