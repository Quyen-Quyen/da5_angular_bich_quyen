import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { AdminService } from 'src/app/service/admin.service';
import * as XLSX from 'xlsx';
@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  fileName = 'Danh_sach_don_hang.xlsx';

  private subcription: Subscription;
  searchText: any;
  customer: any;
  order: any;
  product:any;
  //phân trang
  // POSTS: any;
  page: number = 1;
  count: number = 0;
  tableSize: number = 8;
  tableSizes: any = [5, 10, 15, 20];
  //end


  constructor(private admin: AdminService) { }
  submitted: boolean = false;
  order_fromCreate: FormGroup = new FormGroup({
    // id: new FormControl(),
    product_id: new FormControl('', Validators.required),
    customer_id: new FormControl('', Validators.required),
    warehouse_id: new FormControl('', Validators.required),
    // status: new FormControl()

  });

  ngOnInit(): void {
    this.getall_order();
  }

  getall_order() {
    this.subcription = this.admin.get_all_order()
      .subscribe((data: any) => {
        console.log('order',data);
        // console.log('product',data.product);
        // console.log('customer',data.customer);
        this.order = data.order;
        this.product = data.product;
        this.customer = data.customer;

      }, error => {
        console.log(error);

      }
      )
  }
  get f() {
    return this.order_fromCreate.controls;
  }
  onCreate() {
    this.submitted = true;
    this.admin.create_order(this.order_fromCreate.value).subscribe(data => {
      this.order_fromCreate.reset();
      console.log(data);
      this.getall_order();
    })
  }
  onDelete(id: number) {
    if (confirm("bạn có chắc chắn xóa không ?")) {
      this.admin.delete_order(id).subscribe((data) => {
        this.getall_order();
      })
    }
  }
  //phân trang
  ontableDataChange(event: any) {
    this.page = event;
    this.getall_order();
  }
  ontableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.getall_order();
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
