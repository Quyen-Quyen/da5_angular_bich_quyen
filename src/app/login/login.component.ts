import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup ,Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public form = new FormGroup({
    email: new FormControl(null, Validators.required),
    password:new FormControl(null, Validators.required),
  });

  constructor(private apiService: AuthService , private router: Router) {

  };

  ngOnInit() {
  }


  loginProces()
  {
    if(this.form.invalid){
      return;
    }

    this.apiService.login(this.form.value)
    .subscribe(data=>{
       console.log(data);
      this.router.navigate(['']);
    });
  }

}
