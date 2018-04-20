import { Component } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'app';
  uid:string;

  constructor(private angularFireAuth: AngularFireAuth,public router: Router){
    this.angularFireAuth.authState.subscribe(user => {
      if (user != null) {
        this.uid = user.uid;
        this.router.navigate(['/product']);
      } else {
        this.uid = null;
        this.router.navigate(['/']);
      }
    })
  }
  
}
