import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { AppRoutingModule } from '../app-routing-module';
=======
import { UsersService } from '../services/users.service';
>>>>>>> origin

@Component({
  selector: 'app-responses',
  templateUrl: './responses.component.html',
  styleUrls: ['./responses.component.css']
})
export class ResponsesComponent implements OnInit {

<<<<<<< HEAD
  constructor() { }

  ngOnInit(): void {
=======
  userFullName  : string;
  currentLevel  : string;

  constructor(private userService: UsersService) { }

  ngOnInit(): void {
      this.userFullName   = this.userService.getUserFullName();
      this.currentLevel   = this.userService.getUserAuthLevel();
>>>>>>> origin
  }

}
