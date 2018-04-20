import { Component, OnInit } from '@angular/core';
import { Category } from '../../../model/Category';
import { Router } from '@angular/router';
import { CategoryServiceService } from '../../../service/category-service.service';

@Component({
  selector: 'app-category-add',
  templateUrl: './category-add.component.html',
  styleUrls: ['./category-add.component.css']
})
export class CategoryAddComponent implements OnInit {

  constructor(
    public router: Router,
    private categoryService:CategoryServiceService
  ) { }

  category:Category = {categoryId:null,categoryName:""}

  ngOnInit() {
  }

  add(category:Category){
    this.categoryService.save(category).subscribe(res=>{
      console.log(res);      
      this.router.navigate(['/category']);
    })
  }

  

}
