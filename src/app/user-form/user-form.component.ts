import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NoSpaceValidator } from '../shared/validators/no-space.validator';
import { UniqueEmailValidator } from '../shared/validators/unique-email.validator';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {

  formData:any;
  constructor(){}

  ngOnInit(): void {
    this.formData = new FormGroup({
      userName : new FormControl('', Validators.required),
      email : new FormControl('', [Validators.required, NoSpaceValidator.noSpace],UniqueEmailValidator.uniqueEmail),
      password : new FormControl('', Validators.required),
    })
  }
  
  OnSubmit(){
    console.log(this.formData.value)
    this.formData.reset()
  }
}
