import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from 'src/app/service/admin.service';
import { TestapiComponent } from '../testapi.component';

@Component({
  selector: 'app-testapi-edit',
  templateUrl: './testapi-edit.component.html',
  styleUrls: ['./testapi-edit.component.css']
})
export class TestapiEditComponent implements OnInit {
  id: number = 0;
  constructor(private admin: AdminService, private _router: ActivatedRoute , private router :Router ) { }
  testapifromedit: FormGroup = new FormGroup({
    name: new FormControl(),
    sex: new FormControl(),
    age: new FormControl(),
    phone: new FormControl()
  });

  ngOnInit() {
    this.id = this._router.snapshot.params['id'];
    // console.log(this._router.snapshot.params['id'])
    this.admin.getedit(this.id).subscribe(data => {
      console.log(data)
      this.testapifromedit = new FormGroup({
        name: new FormControl(data.name),
        sex: new FormControl(data.sex),
        age: new FormControl(data.age),
        phone: new FormControl(data.phone)
      });
    })
  }
  onEdit() {
    // alert('aa');
    this.admin.update(this.id, this.testapifromedit.value).subscribe(data => {
      // console.log(data);
      // this.testapi.getalltestapi();
      this.router.navigate(['admin/testapi']);
      
    });
  }

}
