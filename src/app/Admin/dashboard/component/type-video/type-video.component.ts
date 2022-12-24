import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-type-video',
  templateUrl: './type-video.component.html',
  styleUrls: ['./type-video.component.css']
})
export class TypeVideoComponent implements OnInit {
  searchText:any;
  customer :any;
  private subcription : Subscription;
  type_video: any;
    //phân trang
  // POSTS: any;
  page: number = 1;
  count: number = 0;
  tableSize: number = 5;
  tableSizes: any = [5, 10, 15, 20];
  //end
  constructor(private admin : AdminService) { }
  submitted:boolean = false;
  type_video_fromCreate: FormGroup = new FormGroup({
    name: new FormControl('',Validators.required),
});

  ngOnInit(): void {
    this.get_all_type_video();
  }

  get_all_type_video(){
    this.subcription = this.admin.get_all_type_video()
    .subscribe((data:any)=>{
      console.log(data);
      this.type_video=data;
    },error =>{
      console.log(error);

    }
    )
  }
  get f(){
    return this.type_video_fromCreate.controls;
  }
  onCreate(){
    this.submitted=true;
    this.admin.create_type_video(this.type_video_fromCreate.value).subscribe(data=>{ 
      this.type_video_fromCreate.reset();
      console.log(data);
       this.get_all_type_video();
    })
  }
  onDelete(id: number){ 
       if(confirm("bạn có chắc chắn xóa không ?")){
        this.admin.delete_type_video(id).subscribe((data)=>{
          this.get_all_type_video();
        })
       }
  }
    //phân trang
    ontableDataChange(event: any) {
      this.page = event;
      this.get_all_type_video();
    }
    ontableSizeChange(event: any): void {
      this.tableSize = event.target.value;
      this.page = 1;
      this.get_all_type_video();
    }

}
