import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import {HttpClientModule} from '@angular/common/http';

import { AngularFireModule } from 'angularfire2';
// for AngularFireDatabase
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireAuth } from 'angularfire2/auth';

// FileUploadModule


import { AppComponent } from './app.component';
import { LoginComponent } from './page/login/login.component';
import { CategoryComponent } from './page/category/category.component';
import { ProductComponent } from './page/product/product.component';
import { CategoryAddComponent } from './page/category/category-add/category-add.component';
import { CategoryEditComponent } from './page/category/category-edit/category-edit.component';
import { ProductAddComponent } from './page/product/product-add/product-add.component';
import { ProductEditComponent } from './page/product/product-edit/product-edit.component';
import { NavbarComponent } from './page/navbar/navbar.component';
import { CategoryServiceService } from './service/category-service.service';
import { ProductServiceService } from './service/product-service.service';



export const routes: Routes = [
  { path:'', component: LoginComponent },
  { path:'product', component: ProductComponent },
  { path:'product-add', component: ProductAddComponent },
  { path:'product-edit', component: ProductEditComponent },
  { path:'category', component: CategoryComponent },
  { path:'category-add', component: CategoryAddComponent },
  { path:'category-edit', component: CategoryEditComponent },
  // { path:'view-personal', component: ApprovePersonalComponent },
];


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CategoryComponent,
    CategoryAddComponent,
    CategoryEditComponent,
    ProductComponent,
    ProductAddComponent,
    ProductEditComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyBM0RzKCpN-wuGueTi5KjSaSFQgR3p1Kug",
      authDomain: "blockchain-a.firebaseapp.com",
      databaseURL: "https://blockchain-a.firebaseio.com",
      projectId: "blockchain-a",
      storageBucket: "blockchain-a.appspot.com",
      messagingSenderId: "209725170616"
  }),
  AngularFireAuthModule, 
  ],
  providers: [CategoryServiceService,ProductServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
