import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/cart_Service/cart.service';
import { IndexComponent } from '../component/index/index.component';
import { AdminService } from '../../../service/admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  itemIncart:number;
  constructor(
    private cartService:CartService,
    private admin: AdminService,
    private router: Router,
    ) { }
    store_information:any;
  ngOnInit() {
    this.admin.get_store_information().subscribe((data:any)=>{
      this.store_information=data.store_information[0]
    })
    this.get_cart();
    this.get_banner();
  }
  // itemIncart:any;
  get_cart(){
    this.admin.getallcart().subscribe((data:any)=>{
    })
  };
  banner_4:any;
  get_banner(){
    this.admin.get_banner().subscribe(
      (data: any) => {
        this.banner_4 = data.banner_4?.image;
      },
      (error) => {
        console.log(error);
      }
    );
  }
  onlogout() {
    const confirmed = confirm('Bạn có muốn đăng xuất không?');
    if (confirmed) {
      this.admin.logout().subscribe((data) => {
        localStorage.removeItem('profanis_auth');
        this.router.navigate(['/login']).then(() => {
          // this.toastr.success('Bạn đã đăng xuất thành công !!');
          alert('Bạn đã đăng xuất thành công !!')
          // timer(3000).subscribe(() => {  // Tạo một timer chạy trong 3 giây
          //   window.location.reload();
          // });
        });
      });
    } else {
    }
  }
}
