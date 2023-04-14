import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  constructor(private userSevice: UserService) {}

  private user: User = {
    id: 0,
    name: 'Junior Graham',
    username: 'Junior',
    email: 'Sincere@april.biz',
    address: {
      street: 'Kulas Light',
      suite: 'Apt. 556',
      city: 'Gwenborough',
      zipcode: '92998-3874',

    },
    phone: '1-770-736-8031 x56442',
    website: 'hildegard.org',
    company: {
      name: 'Romaguera-Crona',
      catchPhrase: 'Multi-layered client-server neural-net',
      bs: 'harness real-time e-markets',
    },
  };

  ngOnInit(): void {
    this.onGetUsers();
    this.onGetUser();
  }

  onGetUsers() {
    this.userSevice.getUsers().subscribe(
      (response) => console.log(response),
      (error) => console.log(error),
      () => console.log('Done geting users')
    );
  }
  onGetUser() {
    this.userSevice.getUser().subscribe(
      (response) => console.log(response),
      (error) => console.log(error),
      () => console.log('Done geting users')
    );
  }
}
