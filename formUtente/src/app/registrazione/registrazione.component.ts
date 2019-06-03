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

  AddUserP(name:HTMLInputElement,surname:HTMLInputElement,email:HTMLInputElement,username:HTMLInputElement,password:HTMLInputElement,password2:HTMLInputElement,dataN:HTMLInputElement): boolean {
   console.log(username);
   const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'

    });

 const params = new HttpParams()
      .set('username', username.value)
      .set('nome', name.value)
      .set('cognome', surname.value)
      .set('email', email.value)
      .set('password', password.value)
      .set('data', dataN.value);

      const options = {
      headers,
      params,
      withCredentials: false
    };



   this.http.post('https://3001-b38105fd-43cf-441e-8781-de80025b0e5f.ws-eu0.gitpod.io/registrazione',null, options  )
     .subscribe(data => {

       this.data = data;



  });
  return false;
  }



  ngOnInit() {
  }


}
