import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
// import { testapi } from 'src/app/models/admin';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-testapi',
  templateUrl: './testapi.component.html',
  styleUrls: ['./testapi.component.css']
})
export class TestapiComponent implements OnInit {
  private subscription: Subscription;
  testapis: any=[];
  // testapis: testapi[]=[];
  constructor(private admin : AdminService) { }
  testapifromCreate: FormGroup = new FormGroup({
    name: new FormControl(),
    sex: new FormControl(),
    age: new FormControl(),
    phone: new FormControl()
});
  ngOnInit(): void {
    this.getalltestapi();
  }
  getalltestapi(){
    this.subscription = this.admin.getalltestapi()
    .subscribe((data:any)=>{
      console.log(data);
      this.testapis=data.data;
    },error =>{
      console.log(error);

    }
    )
  }

  onCreate(){
    this.admin.create(this.testapifromCreate.value).subscribe(data=>{
       console.log(data);
       this.testapifromCreate.reset();
       this.getalltestapi();
    })

  }

  onDelete(id:number){
    if(confirm("Bạn có chắc chắn không đấy?")){
      this.admin.delete(id).subscribe(data=>{
        this.getalltestapi();
      })
    }
  }


}
