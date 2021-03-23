import { Component, OnInit } from '@angular/core';
import { ManagerService } from '../_services/manager.service';

@Component({
  selector: 'app-board-manager',
  templateUrl: './board-manager.component.html',
  styleUrls: ['./board-manager.component.css']
})
export class BoardManagerComponent implements OnInit {
  content = '';
  constructor(private managerService: ManagerService) { }

  ngOnInit() {
    this.managerService.getManagerBoard().subscribe(
      data => {
        this.content = data;
      },
      err => {
        this.content = JSON.parse(err.error).message;
      }
    );
  }

}
