import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CreateUser } from '../usecases/create-user';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent implements OnInit {
  formUser = new FormGroup({
    nameControl: new FormControl(''),
    emailControl: new FormControl('')
  })
  

  constructor() {
  }

  ngOnInit(): void {

  }

  handleSubmit() {
    /* try {
      const user = CreateUser({
        name: this.nameControl.value,
        email: this.emailControl.value
      });
      console.log(user);
    } catch(error) {
      console.log(error);
    } */
    console.log('handle submit');
    
  }
}
