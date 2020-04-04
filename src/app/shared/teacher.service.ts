import { Injectable } from '@angular/core';
import { Teacher } from './teacher.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  formData : Teacher;

  list : Teacher[];
  readonly rootURL ="http://localhost:7741/api"

  constructor(private http : HttpClient) { }

  postTeacher(formData : Teacher){
   return this.http.post(this.rootURL+'/Teacher',formData);
    
  }

  refreshList(){
    this.http.get(this.rootURL+'/Teacher')
    .toPromise().then(res => this.list = res as Teacher[]);
  }

  putTeacher(formData : Teacher){
    return this.http.put(this.rootURL+'/Teacher/'+formData.ID, formData);
     
   }

   deleteTeacher(id : number){
    return this.http.delete(this.rootURL+'/Teacher/'+id);
   }
}
