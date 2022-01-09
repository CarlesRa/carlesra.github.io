import { Component, OnInit } from '@angular/core';
import {DataManagerService} from "../../services/data-manager.service";

@Component({
  selector: 'app-chip-list',
  templateUrl: './chip-list.component.html',
  styleUrls: ['./chip-list.component.scss']
})
export class ChipListComponent implements OnInit {

  chipList: string[] = [];

  constructor(
    private dataManager: DataManagerService,
  ) {
    this.chipList = this.dataManager.getHomeChips();
  }

  ngOnInit(): void {
  }

}
