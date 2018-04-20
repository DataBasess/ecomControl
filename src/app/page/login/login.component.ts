import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username:string='anusondd@hotmail.com'
  password:string='21519097'

  constructor(public router: Router,private angularFireAuth:AngularFireAuth) {}

  ngOnInit() {
  }

  logIn(username,password){
    this.angularFireAuth.auth.signInWithEmailAndPassword(username,password)
                .then(user=>{
                    console.log(user);
                    if (user != null) {
                      this.router.navigate(['/product']);
                    } else {
                      this.router.navigate(['/']);
                    }
                }).catch(e=>{
                  console.error(e);                                   
                })
  }

}
