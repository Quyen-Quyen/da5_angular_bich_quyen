import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth.service';
import { AdminService } from '../service/admin.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  private subscription: Subscription;
  public form = new FormGroup({
    email: new FormControl(null, Validators.required),
    name: new FormControl(null, Validators.required),
    password:new FormControl(null, Validators.required),
  });

  constructor(private admin: AdminService  , private router: Router) {

  };

  ngOnInit() {
  }

  register(){
    this.admin.register(this.form.value).subscribe((data:any)=>{
      alert('chúc mừng bạn đã tạo tài khoản thành công ')
      this.router.navigate(['/login']);
  })
}
  // onCreate(){
  //   this.submitted=true;
  //   this.subscription = this.admin.create_customer(this.customer_fromCreate.value).subscribe((data)=>{
  //     this.customer_fromCreate.reset();
  //     alert("Thêm thành công");
  //     console.log(data);
  //     this.getall_customer();
  //   })
  // }

  // loginProces()
  // {
  //   if(this.form.invalid){
  //     return;
  //   }

  //   this.apiService.login(this.form.value)
  //   .subscribe(data=>{
  //      console.log(data);
  //     this.router.navigate(['/']);
  //   });
  // }

}
