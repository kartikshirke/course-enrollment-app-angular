import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";


@Component({
  selector: 'app-scheduleui',
  templateUrl: './scheduleui.component.html',

  styleUrls: ['./scheduleui.component.css']
})
export class ScheduleuiComponent implements OnInit {
  message: string;
  selectedtraining: any[] = new Array();
  schedule: any;

  name: string;

  constructor(private router: Router) { }

  coursescheduleArray: Array<any> = [{
    "cid": "1",
    "sid": "1",
    "cname": "UI",
    "instructorname": "Steve",
    "startdate": "10/15/2017",
    "time": "sun (9.00am-5.00pm EST)",
    "location": "Edison",

  },
  {
    "cid": "1",
    "sid": "2",
    "cname": "UI",
    "instructorname": "Steve",
    "startdate": "10/16/2017",
    "time": "sat (9.00am-5.00pm EST)",
    "location": "Trenton",

  },
  {
    "cid": "1",
    "sid": "3",
    "cname": "UI",
    "instructorname": "Steve",
    "startdate": "10/17/2017",
    "time": "mon (9.00am-5.00pm EST)",
    "location": "New Brunswick",
  },

  {
    "cid": "2",
    "sid": "1",
    "cname": "UX",
    "instructorname": "Bob",
    "startdate": "10/10/2017",
    "time": "sun (9.00am-5.00pm EST)",
    "location": "Newark",
  },
  {
    "cid": "2",
    "sid": "3",
    "cname": "UX",
    "instructorname": "Bob",
    "startdate": "10/11/2017",
    "time": "Mon (9.00am-5.00pm EST)",
    "location": "Trenton",
  },
  {
    "cid": "2",
    "sid": "3",
    "cname": "UX",
    "instructorname": "Bob",
    "startdate": "10/12/2017",
    "time": "tue (9.00am-5.00pm EST)",
    "location": "New Brunswick",

  },
  {
    "cid": "3",
    "sid": "1",
    "cname": "BA",
    "instructorname": "David",
    "startdate": "10/20/2017",
    "time": "Thur (9.00am-5.00pm EST)",
    "location": "Brooklyn",
  },
  {
    "cid": "3",
    "sid": "2",
    "cname": "BA",
    "instructorname": "David",
    "startdate": "10/21/2017",
    "time": "Fri (9.00am-5.00pm EST)",
    "location": "Manhattan",
  },
  {
    "cid": "3",
    "sid": "3",
    "cname": "BA",
    "instructorname": "David",
    "startdate": "10/22/2017",
    "time": "Sat (9.00am-5.00pm EST)",
    "location": "WTC",
  },

  {
    "cid": "4",
    "sid": "1",
    "cname": "Python",
    "instructorname": "Rob",
    "startdate": "10/18/2017",
    "time": "Fri (9.00am-5.00pm EST)",
    "location": "Brooklyn",
  },
  {
    "cid": "4",
    "sid": "2",
    "cname": "Python",
    "instructorname": "Rob",
    "startdate": "10/19/2017",
    "time": "Sat (9.00am-5.00pm EST)",
    "location": "Manhattan",
  },
  {
    "cid": "4",
    "sid": "3",
    "cname": "Python",
    "instructorname": "Rob",
    "startdate": "10/19/2017",
    "time": "Sun (9.00am-5.00pm EST)",
    "location": "WTC",
  }
  ];

  resultArray: Array<any> = [];//empty array which we are going to push our selected items, always define types 


  ngOnInit() {
    this.name = 'kartik';
    //for first object
    this.coursescheduleArray.forEach(i => {
      this.resultArray.push(
        {
          "id": i.id,
          "cname": i.cname,
          "instructorname": i.instructorname,
          "startdate": i.startdate,
          "time": i.time,
          "location": i.location,
        });
    });

    console.log(this.resultArray);
    localStorage.setItem("schedulearray", JSON.stringify(this.coursescheduleArray));


  }

  confirmenroll(event) {
    alert("id received -----------" + event.target.id);

    var schedulearray: any[] = JSON.parse(localStorage.getItem("schedulearray"));
    console.log("schedulearray" + schedulearray);


    for (var i = 0; i < schedulearray.length; i++) {

      console.log("inside loop printed " + schedulearray[i]);
      console.log("schedule" + JSON.stringify(schedulearray[i]));
      console.log("ids" + schedulearray[i].sid + "event.id" + event.target.id);

      if (schedulearray[i].sid == event.target.id) {
        console.log("id matched" + event.target.id);


        if (localStorage.getItem("selectedtraining") === null) {
          console.log("first push----------------------------------------");
          this.selectedtraining.push(schedulearray[i]);


        }
        else {
          var result = JSON.parse(localStorage.getItem("selectedtraining"));
          console.log("locally stored array-------------" + JSON.stringify(result));


          this.selectedtraining = result;

          this.selectedtraining.push(schedulearray[i]);



          console.log("selectedtraining------------------" + JSON.stringify(this.selectedtraining));

        }

      }
      else {
        console.log("no id match");
      }


    }

    console.log("selectedtraining before storing------------------" + JSON.stringify(this.selectedtraining));
    localStorage.setItem("selectedtraining", JSON.stringify(this.selectedtraining));
    console.log("data stored************");
    this.router.navigate(['./dashboard']);
  }

}


