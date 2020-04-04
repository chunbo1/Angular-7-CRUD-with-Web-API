import { Component, OnInit } from '@angular/core';
import { Teacher } from 'src/app/shared/teacher.model';
import { ToastrService } from 'ngx-toastr';
import { TeacherService } from 'src/app/shared/teacher.service';

@Component({
  selector: 'app-teacher-list',
  templateUrl: './teacher-list.component.html',
  styleUrls: ['./teacher-list.component.css']
})
export class TeacherListComponent implements OnInit {

  constructor(private service: TeacherService,
    private toastr: ToastrService) { }

  ngOnInit() {
    this.service.refreshList();
  }

  populateForm(emp: Teacher) {
    this.service.formData = Object.assign({}, emp);
    //this.service.formData = emp;
  }

  onDelete(id: number) {
    if (confirm('Are you sure to delete this record?')) {
      this.service.deleteTeacher(id).subscribe(res => {
        this.service.refreshList();
        this.toastr.warning('Deleted successfully', 'EMP. Register');
      });
    }
  }

}
