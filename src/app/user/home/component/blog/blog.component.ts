import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  posts :any;
  type_posts: any;

    //phân trang
  // POSTS: any;
  page: number = 1;
  count: number = 0;
  tableSize: number = 4;
  tableSizes: any = [5, 10, 15, 20];
  //end

  constructor(private admin : AdminService) { }
  private subscription: Subscription
  // public elementSrc = [];
  ngOnInit() {
    this.get_posts();
  }
  
  
  get_posts(){
    this.subscription = this.admin.get_index_posts().subscribe((data:any)=>{
      console.log(data.posts);
      console.log(data.type_posts);
      this.posts = data.posts;
      this.type_posts = data.type_posts;
  },error =>{
    console.log(error);
  })
}


  //phân trang
  ontableDataChange(event: any) {
    this.page = event;
    this.get_posts();
  }
  ontableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.get_posts();
  }

}
