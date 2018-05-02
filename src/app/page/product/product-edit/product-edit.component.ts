import { Component, OnInit } from '@angular/core';
import { storage ,initializeApp } from 'firebase';
import { Router, ActivatedRoute } from '@angular/router';
import { CategoryServiceService } from '../../../service/category-service.service';
import { ProductServiceService } from '../../../service/product-service.service';
import { Category } from '../../../model/Category';
import { Product } from '../../../model/Product';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  constructor(
    public router: Router,
    private route: ActivatedRoute,
    private categoryService:CategoryServiceService,
    private productService:ProductServiceService
  ) {
    this.get_categoryAll();
    this.route.params.subscribe(params=>{
      let key = params.key;
      console.log(key);
      
      this.product.productId = key;
      this.productService.get(this.product).subscribe((data:Product)=>{
        this.product = data;
        this.picture = this.product.productImages;
      })
    })
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

  update(product:Product){
    console.log(product);    
    this.productService.update(product).subscribe(res=>{
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
