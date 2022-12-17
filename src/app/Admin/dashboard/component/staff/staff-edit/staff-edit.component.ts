import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-staff-edit',
  templateUrl: './staff-edit.component.html',
  styleUrls: ['./staff-edit.component.css']
})
export class StaffEditComponent implements OnInit {
  id: number = 0;
  constructor(private admin : AdminService ,private _router: ActivatedRoute , private router :Router) { }
  staff_fromEdit: FormGroup = new FormGroup({
    name: new FormControl(),
    date_of_birth: new FormControl(),
    sex: new FormControl(),
    number_phone: new FormControl(),
    email: new FormControl(),
    adress: new FormControl(),
    possion: new FormControl(),
    department: new FormControl(),
  })
  ngOnInit() {
    this.id = this._router.snapshot.params['id'];
    this.admin.get_staff(this.id).subscribe(data => {
      console.log(data)
      this.staff_fromEdit = new FormGroup({
        name: new FormControl(data.name),
        date_of_birth: new FormControl(data.date_of_birth),
        sex: new FormControl(data.sex),
        number_phone: new FormControl(data.number_phone),
        email: new FormControl(data.email),
        adress: new FormControl(data.adress),
        possion: new FormControl(data.possion),
        department: new FormControl(data.department),
      });
    })
  }
  onEdit() {
    this.admin.update_staff(this.id, this.staff_fromEdit.value).subscribe(data => {
      this.router.navigate(['admin/staff']);
      
    });
  }
}
