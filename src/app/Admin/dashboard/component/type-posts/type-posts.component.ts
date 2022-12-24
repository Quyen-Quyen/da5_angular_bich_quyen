import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-type-posts',
  templateUrl: './type-posts.component.html',
  styleUrls: ['./type-posts.component.css']
})
export class TypePostsComponent implements OnInit {

  private subcription : Subscription;
  searchText:any;
  customer :any;
  type_post: any;
      //phân trang
  // POSTS: any;
  page: number = 1;
  count: number = 0;
  tableSize: number = 8;
  tableSizes: any = [5, 10, 15, 20];
  //end
  constructor(private admin : AdminService) { }
  submitted:boolean = false;
  type_post_fromCreate: FormGroup = new FormGroup({
    name: new FormControl('',Validators.required),

});

  ngOnInit(): void {
    this.get_all_type_post();
  }

  get_all_type_post(){
    this.subcription = this.admin.get_all_type_posts()
    .subscribe((data:any)=>{
      console.log(data);
      this.type_post=data;
    },error =>{
      console.log(error);

    }
    )
  }
  get f(){
    return this.type_post_fromCreate.controls;
  }
  onCreate(){
    this.submitted=true;

    this.admin.create_type_posts(this.type_post_fromCreate.value).subscribe(data=>{ 
      this.type_post_fromCreate.reset();
      console.log(data);
       this.get_all_type_post();
    })
  }
  onDelete(id: number){ 
       if(confirm("bạn có chắc chắn xóa không ?")){
        this.admin.delete_type_posts(id).subscribe((data)=>{
          this.get_all_type_post();
        })
       }
  }
  //phân trang
  ontableDataChange(event: any) {
    this.page = event;
    this.get_all_type_post();
  }
  ontableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.get_all_type_post();
  }
}
