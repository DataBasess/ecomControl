import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Category } from '../model/Category';

let root = "http://localhost:8080/api/category";
let headers = new HttpHeaders();
headers = headers.set('Content-Type','application/json').set('Access-Control-Allow-Origin','*')
.set('authorization', 'Bearer ' + "token");

@Injectable()
export class CategoryServiceService {

  constructor(private http:HttpClient) { } 

  
  getAll(){
    return this.http.post(root+'/getAll',{headers});
  }

  get(category:Category){
    return this.http.post(root+'/get',JSON.stringify(category),{headers});
  }

  save(category:Category){
    return this.http.post(root+'/save',JSON.stringify(category),{headers});
  }

  update(category:Category){
    return this.http.post(root+'/update',JSON.stringify(category),{headers});
  }

  remove(category:Category){
    return this.http.post(root+'/delete',JSON.stringify(category),{headers});
  }

}
