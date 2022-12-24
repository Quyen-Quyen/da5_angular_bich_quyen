import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.css']
})
export class StaffComponent implements OnInit {
  searchText:any;
  customer :any;
  private subcription : Subscription;
  staff: any;
      //phân trang
  // POSTS: any;
  page: number = 1;
  count: number = 0;
  tableSize: number = 8;
  tableSizes: any = [5, 10, 15, 20];
  //end
  constructor(private admin : AdminService) { }
  submitted:boolean = false;
  staff_fromCreate: FormGroup = new FormGroup({
    name: new FormControl('',Validators.required),
    date_of_birth: new FormControl('',Validators.required),
    sex: new FormControl('',Validators.required),
    number_phone: new FormControl('',[Validators.min(100000000),Validators.max(10000000000)]),
    // 16, Validators.max(15)
    email: new FormControl('',Validators.email),
    adress: new FormControl('',Validators.required),
    possion: new FormControl('',Validators.required),
    department: new FormControl('',Validators.required),
});

  ngOnInit(): void {
    this.get_all_staff();
  }

  get_all_staff(){
    this.subcription = this.admin.get_all_staff()
    .subscribe((data:any)=>{
      console.log(data);
      this.staff=data;
    },error =>{
      console.log(error);

    }
    )
  }
  get f(){
    return this.staff_fromCreate.controls;
  }
  onCreate(){
    this.submitted=true;
    this.admin.create_staff(this.staff_fromCreate.value).subscribe(data=>{ 
      this.staff_fromCreate.reset();
      console.log(data);
      this.get_all_staff();
      alert('Thêm thành công nhân viên')
    })
  }
  onDelete(id: number){ 
       if(confirm("bạn có chắc chắn xóa không ?")){
        this.admin.delete_staff(id).subscribe((data)=>{
          this.get_all_staff();
        })
       }
  }
      //phân trang
      ontableDataChange(event: any) {
        this.page = event;
        this.get_all_staff();
      }
      ontableSizeChange(event: any): void {
        this.tableSize = event.target.value;
        this.page = 1;
        this.get_all_staff();
      }

}
