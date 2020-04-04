import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/shared/employee.service';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { TeacherService } from 'src/app/shared/teacher.service';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit {

  constructor(private service: TeacherService,
    private toastr: ToastrService) { }

    ngOnInit() {
      this.resetForm();
    }
  
    resetForm(form?: NgForm) {
      if (form != null)
        form.resetForm();
      this.service.formData = {
        ID: null,
        FirstName: '',
        LastName: '',
        Address: '',
        Email: '',
        HomePhone : '',
        CellPhone : '',
        UpdateDateTime : new Date(),
        Enabled: null
      }
    }


    onSubmit(form: NgForm) {
      if (form.value.ID == null)
        this.insertRecord(form);
      else
        this.updateRecord(form);
    }
  
    insertRecord(form: NgForm) {
      this.service.postTeacher(form.value).subscribe(res => {
        this.toastr.success('Inserted successfully', 'Teacher. Register');
        this.resetForm(form);
        this.service.refreshList();
      });
    }
  
    updateRecord(form: NgForm) {
      console.log(form.value);
      this.service.putTeacher(form.value).subscribe(res => {
        this.toastr.info('Updated successfully', 'Teacher. Register');
        this.resetForm(form);
        this.service.refreshList();
      });
  
    }



}
