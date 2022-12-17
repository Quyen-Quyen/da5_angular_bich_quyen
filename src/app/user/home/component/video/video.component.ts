import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Subscription } from 'rxjs';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {
  video :any;
  type_video: any;

    //phân trang
  // POSTS: any;
  page: number = 1;
  count: number = 0;
  tableSize: number = 2;
  tableSizes: any = [5, 10, 15, 20];
  //end

  constructor(private admin : AdminService) { }
  private subscription: Subscription
  public elementSrc = [];
  ngOnInit() {
    this.get_video();
  }
  
  get_video(){
    this.subscription = this.admin.get_index_video().subscribe((data:any)=>{
      console.log(data.video);
      console.log(data.type_video);
      this.video = data.video;
      this.type_video = data.type_video;
  },error =>{
    console.log(error);
  })
}


  //phân trang
  ontableDataChange(event: any) {
    this.page = event;
    this.get_video();
  }
  ontableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.get_video();
  }

}
