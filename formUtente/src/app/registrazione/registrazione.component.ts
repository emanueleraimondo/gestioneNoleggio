import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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
      if(password.value==password2.value){
        alert("accesso effettuato");
      }else{
        alert("le password non corrispondono");
      }

  }

  makeCompactRequest(): void {
    this.loading = true;
    this.http
      .get('https://jsonplaceholder.typicode.com/posts/1')
      .subscribe(data => {
        this.data = data;
        this.loading = false;
      });
  }



  ngOnInit() {
  }

}
