import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams  } from '@angular/common/http'; //HTTP Client
import { Observable } from 'rxjs';
@Component({
  selector: 'app-registrazione',
  templateUrl: './registrazione.component.html',
  styleUrls: ['./registrazione.component.css']
})
export class RegistrazioneComponent implements OnInit {

   data: Object;
  loading: boolean;
  o: Observable<Object>;

  constructor(public http: HttpClient) { }

  onAddUser(name:HTMLInputElement,surname:HTMLInputElement,email:HTMLInputElement,username:HTMLInputElement,password:HTMLInputElement,password2:HTMLInputElement){
      if(password.value!=password2.value){
        alert("le password non corrispondono");
      }else{

      }

  }

  AddUserP(username:string, nome:string , cognome:string , email:string, password:string, data:string): void {

   const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'

    });

 const params = new HttpParams()
      .set('username', username)
      .set('nome', nome)
      .set('cognome', cognome)
      .set('email', email)
      .set('password', password)
      .set('data', data);

      const options = {
      headers,
      params,
      withCredentials: false
    };



   this.http.post('https://3000-c58ed4f4-a087-4683-bc1d-2e35d72adad7.ws-eu0.gitpod.io/register',null, options  )
     .subscribe(data => {

       this.data = data;



  });
  }



  ngOnInit() {
  }


}
