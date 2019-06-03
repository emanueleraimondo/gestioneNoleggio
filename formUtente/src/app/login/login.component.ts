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
LogUser(username:string, password:string): void {

   const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'

    });

    const params = new HttpParams()
          .set('username', username)
          .set('password', password);


      const options = {
      headers,
      params,
      withCredentials: false
    };



   this.http.post('https://3001-c58ed4f4-a087-4683-bc1d-2e35d72adad7.ws-eu0.gitpod.io/login',null, options  )
     .subscribe(data => {

       this.data = data;



     });

  ngOnInit() {
  }

}
