import { Component, OnInit } from '@angular/core';
import { ManagerService } from '../_services/manager.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  content!: string;

  constructor(private managerService: ManagerService) { }

  ngOnInit() {
    this.managerService.getPublicContent().subscribe(
      data => {
        this.content = data;
      },
      err => {
        this.content = JSON.parse(err.error).message;
      }
    );
  }

}
