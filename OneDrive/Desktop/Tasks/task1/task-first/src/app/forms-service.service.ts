import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class FormsServiceService {
constructor(private http:HttpClient){}
urlForGender='https://api.genderize.io?name=';
urlForAge='https://api.agify.io?name=';
urlForNational='https://api.nationalize.io?name=';
 onCallingGender(name:any):Observable<any>{
   return this.http.get(this.urlForGender+name)
 }
 onCallingAge(name:any):Observable<any>{
  return this.http.get(this.urlForAge+name)
}
onCallingNational(name:any):Observable<any>{
  return this.http.get(this.urlForNational+name)
}
}

