import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  loginForm: FormGroup

  constructor() {
    const emailRegex: string = '^([a-zA-Z0-9_\\-\\.]+)@([a-zA-Z0-9_\\-]+)(\\.[a-zA-Z]{2,5}){1,2}$'
    const controls: object = {
      email: new FormControl('', [Validators.required, Validators.pattern(emailRegex)]),
      password: new FormControl('', [Validators.required, Validators.minLength(8)]),
      saveCredentials: new FormControl(true)
    }
    this.loginForm = new FormGroup<any>(controls)
  }

  login = () => {

  }

}
