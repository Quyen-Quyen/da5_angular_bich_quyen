import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from 'src/app/service/admin.service';
import * as XLSX from 'xlsx';
@Component({
  selector: 'app-order-edit',
  templateUrl: './order-edit.component.html',
  styleUrls: ['./order-edit.component.css']
})
export class OrderEditComponent implements OnInit {
  fileName = 'Chi_tiet_don_hang.xlsx';
  id: number = 0;
  order:any;
  customer:any;
  order_product:any=[];
  constructor(private admin : AdminService ,private _router: ActivatedRoute , private router :Router) { }
  // order_fromEdit: FormGroup = new FormGroup({
  //   product_id: new FormControl(),
  //   customer_id: new FormControl(),
  //   warehouse_id: new FormControl(),
  // })
  ngOnInit() {
    this.get_detail();
  }
  // onEdit() {
  //   this.admin.update_order(this.id, this.order_fromEdit.value).subscribe(data => {
  //     this.router.navigate(['admin/order']);
      
  //   });
  // }
  get_detail(){
    this.id = this._router.snapshot.params['id'];
    this.admin.get_order(this.id).subscribe(data => {
      console.log(data)

      this.order=data.order;
      this.customer=data.customer;
      this.order_product=data.order_product;
      console.log('order',this.order)
      console.log('customer',this.customer)
      console.log('order_product',this.order_product)
    })
  }



  // export excel
  exportexcel(): void {
    /* chuyển vào đây id bảng */
    let element = document.getElementById('excel-table');
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(element);

    /* tạo sổ làm việc và thêm trang tính */
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

    /* save to file */
    XLSX.writeFile(wb, this.fileName);


  }

}
