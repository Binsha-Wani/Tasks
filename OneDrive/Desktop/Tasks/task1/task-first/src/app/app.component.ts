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
  user1data:any=[]
  user2data:any=[];
  user3data:any=[];
  onSubmitData(){
    this.formData=this.newForm.value;
    document.write("name is: "+this.formData.name +"</br>");
    if(this.formData.gender==true){
     this.services.onCallingGender().subscribe(data1=>{
      this.user1data.push(data1.name,data1.gender,data1.probability)
       document.write(" </br></br>Gender is:" +this.user1data)
      }
   ) +"</br>";}
  if(this.formData.age==true){
    this.services.onCallingAge().subscribe(data2=>{
      this.user2data.push(data2.age) 
       document.write("</br></br> Age is:" +this.user2data)
      }) +"</br></br>";
    }
    if(this.formData.national==true){
      this.services.onCallingNational().subscribe(data3=>{
        this.user3data.push(data3.name)
        this.user3data.push(data3.country[0].country_id);
        this.user3data.push(data3.country[0].probability);
       document.write("</br></br> National is:" +this.user3data);
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

