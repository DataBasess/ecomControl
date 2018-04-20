import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public router: Router,private angularFireAuth:AngularFireAuth) { }
  menus=[
    {title:"category",icon:"fa fa-bars",link:"category"},
    {title:"product",icon:"archive",link:"product"}
  ]
  ngOnInit() {
  }

  gotoPage(menu){
    console.log(menu.link);    
    this.router.navigate(['/'+menu.link]);
  }

  logOut(){
    this.angularFireAuth.auth.signOut();
    this.router.navigate(['/']);
  }

}
