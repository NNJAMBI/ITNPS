import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';
import { TokenStorageService } from '../services/token-storage.service';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {

  constructor(private tokenStorageService: TokenStorageService) { }

  ngOnInit(): void {
  }

}
