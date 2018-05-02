import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../../model/Product';
import { ProductServiceService } from '../../service/product-service.service';
import { Category } from '../../model/Category';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products:Product[];
  product:Product={
    categoryId:null,
    productId:0,
    productDetail:" ",
    productImages:" ",
    productPrice:0,
    productName:"",
    productSort:0,
    productStatus:false
  };
  constructor(
    public router: Router,
    private productService:ProductServiceService
  ) {
    this.getAll();
   }

  ngOnInit() {
  }

  getAll(){
    this.productService.getAll().subscribe((data:Product[])=>{
      console.log("list",data);   
      this.products = data.sort((a, b) => a.productId - b.productId);   
    })
  }

  gotoAdd(){
    this.router.navigate(['/product-add']);
  }

  gotoEdit(product:Product){
    this.router.navigate(['/product-edit',{'key':product.productId}]);
  }

  set(product:Product){
    this.product = product;
  }

  remove(product:Product){
    this.productService.remove(product).subscribe(res=>{
      console.log(res);  
      this.getAll();    
    })
  }

}
