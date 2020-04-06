import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  courses: string[];
  trainings = [

    {
      cid: "1",
      coursename: 'UI',
      instructorname: 'Steve',
      location: 'Edison',
      description: 'Front-end web development is the practice of producing HTML, CSS and JavaScript for a website or Web Application so that a user can see and interact with them directly. The challenge associated with front-end development is that the tools and techniques used to create the front end of a website change constantly and so the developer needs to constantly be aware of how the field is developing.The objective of designing a site is to ensure that when the users open up the site they see the information in a format that is easy to read and relevant. This is further complicated by the fact that users now use a large variety of devices with varying screen sizes and resolutions thus forcing the designer to take into consideration these aspects when designing the site. They need to ensure that their site comes up correctly in different browsers (cross-browser), different operating systems (cross-platform) and different devices (cross-device) which requires careful planning on the side of the developer.',
    },
    {
      cid: "2",
      coursename: 'UX',
      instructorname: 'Bob',
      location: 'Newark',
      description: 'User Experience (UX) refers to a person emotions and attitudes about using a particular product, system or service. It includes the practical, experiential, affective, meaningful and valuable aspects of human–computer interaction and product ownership. Additionally, it includes a person’s perceptions of system aspects such as utility, ease of use and efficiency. User experience may be considered subjective in nature to the degree that it is about individual perception and thought with respect to the system. User experience is dynamic as it is constantly modified over time due to changing usage circumstances and changes to individual systems as well as the wider usage context in which they can be found.The field of user experience represents an expansion and extension of the field of usability, to include the holistic perspective of how a person feels about using a system. The focus is on pleasure and value as well as on performance. The exact definition, framework, and elements of user experience are still evolving.User Experience of an interactive product or a web site is usually measured by a number of methods, including questionnaires, focus groups, and other methods. A freely available questionnaire (available in several languages) is the User Experience Questionnaire (UEQ).'
    },
    {
      cid: "3",
      coursename: 'BA',
      instructorname: 'David',
      location: 'New Brunswick',
      description: 'A business analyst (BA) is someone who analyzes an organization or business domain (real or hypothetical) and documents its business or processes or systems, assessing the business model or its integration with technology.The role of a systems analyst can also be defined as a bridge between the business problems and the technology solutions. Here business problems can be anything about business systems, for example the model, process, or method. The technology solutions can be the use of technology architecture, tools, or software application. System analysts are required to analyze, transform and ultimately resolve the business problems with the help of technology.The Business Analyst, sometimes, is someone who is a part of the business operation and works with Information Technology to improve the quality of the services being delivered, sometimes assisting in Integration and Testing of new solutions.The BA may also support the development of training material, participates in the implementation, and provides post-implementation support. This may involve the development of project plans and often requires project management skills.'
    },
    {
      cid: "4",
      coursename: 'Python',
      instructorname: 'Rob',
      location: 'Trenton',
      description: 'Python is a widely used high-level programming language for general-purpose programming, created by Guido van Rossum and first released in 1991. An interpreted language, Python has a design philosophy that emphasizes code readability (notably using whitespace indentation to delimit code blocks rather than curly brackets or keywords), and a syntax that allows programmers to express concepts in fewer lines of code than might be used in languages such as C++ or Java.The language provides constructs intended to enable writing clear programs on both a small and large scale.Python features a dynamic type system and automatic memory management and supports multiple programming paradigms, including object-oriented, imperative, functional programming, and procedural styles. It has a large and comprehensive standard library.Python interpreters are available for many operating systems, allowing Python code to run on a wide variety of systems. CPython, the reference implementation of Python, is open source software and has a community-based development model, as do nearly all of its variant implementations. CPython is managed by the non-profit Python Software Foundation.'
    }
  ];

  constructor(public router: Router) { }

  ngOnInit() {
    this.courses = ['User Interface Developer (UI)', 'User Experience Designer (UX)', 'Python', 'Business Analyst (BA)'];
    localStorage.setItem("upcomingtrainings", JSON.stringify(this.trainings));



  }


  courseDetails(event) {
    alert("id received -----------" + event.target.id);

    var upcomingTrainings: any[] = JSON.parse(localStorage.getItem("upcomingtrainings"));
    console.log("upcomingtrainings" + upcomingTrainings);


    for (var i = 0; i < upcomingTrainings.length; i++) {

      console.log("inside loop printed " + upcomingTrainings[i]);
      console.log("upcomingTrainings" + JSON.stringify(upcomingTrainings[i]));
      console.log("ids" + upcomingTrainings[i].cid + "event.id" + event.target.id);

      if (upcomingTrainings[i].cid == event.target.id) {
        console.log("id matched" + event.target.id);

        localStorage.setItem("selectedCourse", JSON.stringify(upcomingTrainings[i]));


      }
      else {
        console.log("no id matched");
      }

      this.router.navigate(['./ui']);
    }
  }
}
