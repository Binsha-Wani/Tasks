import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class FormsServiceService {
constructor(private http:HttpClient){}
urlForGender='https://api.genderize.io?name=peter';
urlForAge='https://api.agify.io?name=michael';
urlForNational='https://api.nationalize.io?name=michael';
 onCallingGender():Observable<any>{
   return this.http.get(this.urlForGender)
 }
 onCallingAge():Observable<any>{
  return this.http.get(this.urlForAge)
}
onCallingNational():Observable<any>{
  return this.http.get(this.urlForNational)
}
}

