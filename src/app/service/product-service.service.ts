import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Product } from '../model/Product';


let root = "http://localhost:8080/api/product";
let headers = new HttpHeaders();
headers = headers.set('Content-Type','application/json').set('Access-Control-Allow-Origin','*')
.set('authorization', 'Bearer ' + "token");





@Injectable()
export class ProductServiceService {

  constructor(private http:HttpClient) { } 

  
  getAll(){
    return this.http.post(root+'/getAll',{headers});
  }

  get(product:Product){
    return this.http.post(root+'/get',JSON.stringify(product),{headers});
  }

  save(product:Product){
    return this.http.post(root+'/save',JSON.stringify(product),{headers});
  }

  update(product:Product){
    return this.http.post(root+'/update',JSON.stringify(product),{headers});
  }

  remove(product:Product){
    return this.http.post(root+'/delete',JSON.stringify(product),{headers});
  }

}
