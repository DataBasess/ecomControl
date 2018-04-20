import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryServiceService } from '../../service/category-service.service';
import { Category } from '../../model/Category';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  categorys:Category[];
  category:Category={categoryId:0,categoryName:""};
  constructor(
    public router: Router,
    private categoryService:CategoryServiceService
  ) {
    this.getAll();
   }

  ngOnInit() {
  }

  getAll(){
    this.categoryService.getAll().subscribe((data:Category[])=>{
      console.log("list",data);   
      this.categorys = data;   
    })
  }

  gotoAdd(){
    this.router.navigate(['/category-add']);
  }

  gotoEdit(categorys:Category){
    this.router.navigate(['/category-edit',{'key':categorys.categoryId}]);
  }

  set(categorys:Category){
    this.category = categorys;
  }

  remove(category:Category){
    this.categoryService.remove(category).subscribe(res=>{
      console.log(res);  
      this.getAll();    
    })
  }

}
