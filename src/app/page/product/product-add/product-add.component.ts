import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryServiceService } from '../../../service/category-service.service';
import { Category } from '../../../model/Category';
import { Product } from '../../../model/Product';
import { ProductServiceService } from '../../../service/product-service.service';
import { storage ,initializeApp } from 'firebase';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {

  constructor(
    public router: Router,
    private categoryService:CategoryServiceService,
    private productService:ProductServiceService
  ) {
    this.get_categoryAll();
   }

  categorys:Category[];
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
  picture:string="";



  ngOnInit() {
  }

  get_categoryAll(){
    this.categoryService.getAll().subscribe((data:Category[])=>{
      console.log("list",data);   
      this.categorys = data.sort((a, b) => a.categoryId - b.categoryId);   
    })
  }

  add(product:Product){
    console.log(product);    
    this.productService.save(product).subscribe(res=>{
      console.log(res);      
      this.router.navigate(['/product']);
    })
  }

  onFileChange(event) {
    let reader = new FileReader();
    if(event.target.files && event.target.files.length > 0) {
      let file = event.target.files[0];
      console.log(file);      
      reader.readAsDataURL(file);
      reader.onload = () => {
        // this.form.get('avatar').setValue({
        //   filename: file.name,
        //   filetype: file.type,
        //   value: reader.result.split(',')[1]
        // })
        this.upload(reader.result,file.name);        
      };
        
    }
  }

  upload(result,name){
    const picture = storage().ref().child('images/ecom/'+name);
    picture.putString(result,'data_url').then(data=>{
      console.log(data);
      this.loadpictureProfile(name);      
    }).catch(e=>{
      console.log(e);      
    });

  }

  async loadpictureProfile(name){
    let file =  storage().ref().child('images/ecom/'+name);
    await file.getDownloadURL().then(url=>{
      this.picture = url;
      this.product.productImages = this.picture;      
    });
  }


}
