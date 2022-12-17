import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-type-posts',
  templateUrl: './type-posts.component.html',
  styleUrls: ['./type-posts.component.css']
})
export class TypePostsComponent implements OnInit {

  private subcription : Subscription;
  type_post: any;
  constructor(private admin : AdminService) { }
  type_post_fromCreate: FormGroup = new FormGroup({
    name: new FormControl(),

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
  onCreate(){
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

}
