import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams   } from '@angular/common/http';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  data: Object;
  loading: boolean;
  o: Observable<Object>;

  constructor(public http: HttpClient) { }
onLogin(username:HTMLInputElement, password:HTMLInputElement): boolean {
    console.log("pippo");
   const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'

    });

    const params = new HttpParams()
          .set('username', username.value)
          .set('password', password.value);


      const options = {
      headers,
      params,
      withCredentials: false
    };



   this.http.post('https://3001-b38105fd-43cf-441e-8781-de80025b0e5f.ws-eu0.gitpod.io/login',null, options  )
     .subscribe(data => {

       this.data = data;
       alert("login effettuato");
       console.log(data);
 });
 return false;
}

  ngOnInit() {
  }

}