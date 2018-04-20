import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CategoryServiceService } from '../../../service/category-service.service';
import { Category } from '../../../model/Category';

@Component({
  selector: 'app-category-edit',
  templateUrl: './category-edit.component.html',
  styleUrls: ['./category-edit.component.css']
})
export class CategoryEditComponent implements OnInit {

  category:Category={categoryId:null,categoryName:""};
  
  constructor(
    public router: Router,
    private route: ActivatedRoute,
    private categoryService:CategoryServiceService
  ) {
    this.route.params.subscribe(params=>{
      let key = params.key;
      console.log(key);
      
      this.category.categoryId = key;
      this.categoryService.get(this.category).subscribe((data:Category)=>{
        this.category = data;
      })
    })
      
      
   }

  ngOnInit() {
  }

  update(category:Category){
    this.categoryService.update(category).subscribe(res=>{
      console.log(res);
      this.router.navigate(['/category']);
    })
  }

}
