import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
constructor( private userSevice:UserService){}
ngOnInit(): void {
  this.onGetUsers();
  this.onGetUser()

  }

onGetUsers(){
this.userSevice.getUsers().subscribe(
(response)=>console.log(response),
(error)=>console.log(error),
()=>console.log("Done geting users")
)
}
onGetUser(){
  this.userSevice.getUser().subscribe(
  (response)=>console.log(response),
  (error)=>console.log(error),
  ()=>console.log("Done geting users")
  )
  }

}
