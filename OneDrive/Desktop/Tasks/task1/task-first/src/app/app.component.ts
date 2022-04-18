import { Component, OnInit,Pipe,PipeTransform} from '@angular/core';
import { FormControl, FormGroup,Validators } from '@angular/forms';
import { FormsServiceService } from './forms-service.service';
import { KeyValue } from '@angular/common';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit{
  title = 'task-first';
  buttonState:boolean=true;
  newForm=new FormGroup({
    name:new FormControl('',Validators.required),
    gender:new FormControl('',Validators.required),
    age:new FormControl('',Validators.required),
    national:new FormControl('',Validators.required)
    })
  
  constructor(private services:FormsServiceService){}
  ngOnInit(){
    //(
  //   this.services.onCallingGender().subscribe(resu=>{
  //     console.log(resu.gender)
  //   })
  // )
  }

  formData:any={}
  user:any;
  user1data:any=[]
  user2data:any=[];
  user3data:any=[];
  onSubmitData(){
    this.formData=this.newForm.value;
    this.user=this.formData.name
    if(this.formData.gender==true){
     this.services.onCallingGender(this.formData.name).subscribe(data1=>{
      this.user1data.push(data1.name,data1.gender,data1.probability)
      }
   ) +"</br>";}
  if(this.formData.age==true){
    this.services.onCallingAge(this.formData.name).subscribe(data2=>{
      this.user2data.push(data2.age) ;
      console.log(this.formData)
      }) +"</br></br>";
    }
    if(this.formData.national==true){
      this.services.onCallingNational(this.formData.name).subscribe(data3=>{
        if(data3.country.length===0 ){
          this.user3data.push("Country name not available for this name.")
        }
        else{
          this.user3data.push(data3.country[0].country_id);
          this.user3data.push(data3.country[0].probability);}
          ;
      }) +"</br></br>";
    }

}

  onCheck(event:any){
    if(event.target.checked<2){
      this.buttonState=false
      }
    else if(event.target.checked==0 ){
     this.buttonState=true
    }
    else{
      this.buttonState=true;
    }
  }
 
}

