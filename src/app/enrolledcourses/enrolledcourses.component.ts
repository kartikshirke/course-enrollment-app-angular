
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-enrolledcourses',
  templateUrl: './enrolledcourses.component.html',
  styleUrls: ['./enrolledcourses.component.css']
})
export class EnrolledcoursesComponent implements OnInit {
  technologies:string[];
  
  //public ecomServicesui:any[];
  public ecomServicesui:Array<any>=[] ;
  public ecomServicesui2:Array<any>=[] ;

  public ecomServices2:any[];
  public ecomServices3:any[];

  public ecomServicesux:any[];
  public ecomServicesux2:any[];
  public ecomServicesux3:any[];

  public ecomServicesp1:any[];
  public ecomServicesp2:any[];
  public ecomServicesp3:any[];

  public ecomServicesb1:any[];
  public ecomServicesb2:any[];
  public ecomServicesb3:any[];

  public selectedSchedule:string;
  public selectedSchedule2:string;
  constructor() { }


  ngOnInit() {
   // if (localStorage["this.resultArray"]) {
     if(localStorage['selectedtraining']){ 
//retrives the data from local storage for first array ui
    this.ecomServicesui=JSON.parse(localStorage.getItem('selectedtraining'));
    console.log("my complete array "+this.ecomServicesui);
    this.selectedSchedule =localStorage.getItem('selectedId');
    console.log("my selected id"+this.selectedSchedule);
    for (let entry of this.ecomServicesui) {
      console.log("this is entry check"+entry); 
      console.log("this is entry.id"+entry.id);// 1, "string", false
  }
  }
 
   /*
    //retrives the data from local storage for second array ui
    this.ecomServices2 =JSON.parse(localStorage.getItem('this.resultArray2'));
    console.log(this.ecomServices2);

    //retrives the data from local storage for third array ui
    this.ecomServices3 =JSON.parse(localStorage.getItem('this.resultArray3'));
     console.log(this.ecomServices3);
    
    //retrives the data from local storage for first array ux
    this.ecomServicesux =JSON.parse(localStorage.getItem('this.resultArrayux'));
    console.log(this.ecomServicesux);

    //retrives the data from local storage for second array ux
    this.ecomServicesux2 =JSON.parse(localStorage.getItem('this.resultArrayux2'));
     console.log(this.ecomServicesux2);

    //retrives the data from local storage for third array ux
    this.ecomServicesux3 =JSON.parse(localStorage.getItem('this.resultArrayux3'));
     console.log(this.ecomServicesux3);

     //retrives the data from local storage for first array python
     this.ecomServicesp1 =JSON.parse(localStorage.getItem('this.resultArrayp1'));
     console.log(this.ecomServicesp1);
 
     //retrives the data from local storage for second array python
     this.ecomServicesp2 =JSON.parse(localStorage.getItem('this.resultArrayp2'));
     console.log(this.ecomServicesp2);
 
     //retrives the data from local storage for third array python
     this.ecomServicesp3 =JSON.parse(localStorage.getItem('this.resultArrayp3'));
      console.log(this.ecomServicesp3);

      //retrives the data from local storage for first array ba
    this.ecomServicesb1 =JSON.parse(localStorage.getItem('this.resultArrayb1'));
     console.log(this.ecomServicesb1);

    //retrives the data from local storage for second array ba
    this.ecomServicesb2 =JSON.parse(localStorage.getItem('this.resultArrayb2'));
     console.log(this.ecomServicesb2);

    //retrives the data from local storage for third array ba
    this.ecomServicesb3 =JSON.parse(localStorage.getItem('this.resultArrayb3'));
    console.log(this.ecomServicesb3);
    */
    
  }
  
}

interface technologies{
  coursename:string,
  instructorname:string,
  startdate:string,
  time:string,
  location:string
  
}
