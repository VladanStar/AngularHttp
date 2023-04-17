import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/services/user.service';
import { Geo } from 'src/app/model/geo';
import { HttpEventType } from '@angular/common/http';
import { Event } from '@angular/router';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  fileStatus: any;

  constructor(private userSevice: UserService) {}


  private user: User = {
    id: 10,
    name: 'Junior Graham',
    username: 'Junior',
    email: 'Sincere@april.biz',
    address: {
      street: 'Kulas Light',
      suite: 'Apt. 556',
      city: 'Gwenborough',
      zipcode: '92998-3874',
      geo: {
        lat: '233',
        lng: '233',
      },
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
    this.onPatchUser(this.user);
    this.onGetUsers();
    //     this.onGetUser();
    // this.onCreateUser(this.user);
    // this.onUpdateUser(this.user)
  }

  onGetUsers() {
    this.userSevice.getUsers().subscribe(
      (response) => console.table(response),
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
  onCreateUser(user: User) {
    this.userSevice.createUser(this.user).subscribe(
      (response) => console.log(response),
      (error) => console.log(error),
      () => console.log('Done creating users')
    );
  }
  onUpdateUser(user: User) {
    this.userSevice.updateUser(this.user).subscribe(
      (response) => console.log(response),
      (error) => console.log(error),
      () => console.log('Done update users')
    );
  }
  onPatchUser(user: User) {
    this.userSevice.patchUser(this.user).subscribe(
      (response) => console.log(response),
      (error) => console.log(error),
      () => console.log('Done patch users')
    );
  }
  deleteUser(id: number) {
    this.userSevice.deleteUser(id).subscribe(
      (response) => console.log(response),
      (error) => console.log(error),
      () => console.log('Done Delete users')
    );
  }
  onUploadFile(files: any): void {
    console.log(files);


    const formData = new FormData();
    for (const file of files) {
      formData.append('files', file, file.name);
    }
    this.userSevice.uploadfiles(formData).subscribe(
      (event) => {
        switch (event.type) {
          case HttpEventType.UploadProgress || HttpEventType.DownloadProgress:
            console.log(event);
            break;
          case HttpEventType.Response:
            console.log(event);
            break;
        }
      },
      (error: any) => console.log(error),
      () => console.log('Done delete user')
    );
  }
}
