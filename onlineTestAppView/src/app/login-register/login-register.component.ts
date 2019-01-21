import { Component, OnInit } from '@angular/core';
import { Student } from 'src/model/student';
import { LoginRegisterService } from '../service/login-register.service';
import { Router } from '@angular/router';
import { IImage } from 'ng-simple-slideshow/src/app/modules/slideshow/IImage';

@Component({
  selector: 'app-login-register',
  templateUrl: './login-register.component.html',
  styleUrls: ['./login-register.component.css']
})
export class LoginRegisterComponent implements OnInit {
  show:boolean;
  student:Student;
  studentResponse;
  service:LoginRegisterService;

  imageUrls: (string | IImage)[] = [
    { url: 'http://www.raiuniversity.edu/wp-content/uploads/2014/06/MBA-to-Grow-Your-Career-in-Business.png'},
    { url: 'https://elearningfeeds.com/wp-content/uploads/2018/06/image_246595_1528864811.png' },
    {url: 'https://dab1nmslvvntp.cloudfront.net/wp-content/uploads/2017/06/1496493825Angular_Tutorial-_Create_a_CRUD_App_with_Angular_CLI_A.jpg-01.png '},
    { url: 'http://www.kayedublog.com/wp-content/uploads/2017/11/Exam-Questions-Bubble-Sheet-and-Pencil-e1421955317694.jpg '},

  ];
  maxHeight: string='50%';
  minHeight: string = '530px';
  arrowSize: string = '30px';
  showArrows: boolean = true;
  disableSwiping: boolean = false;
  autoPlay: boolean = true;
  autoPlayInterval: number = 3333;
  stopAutoPlayOnSlide: boolean = true;
  debug: boolean = false;
  backgroundSize: string = 'cover';
  backgroundPosition: string = 'center center';
  backgroundRepeat: string = 'no-repeat';
  showDots: boolean = true;
  dotColor: string = '#FFF';
  showCaptions: boolean = true;
  captionColor: string = '#FFF';
  captionBackground: string = 'rgba(0, 0, 0, .35)';
  lazyLoad: boolean = false;
  hideOnNoSlides: boolean = false;
  width: string = '1270px';


  constructor(private loginRegisterService:LoginRegisterService,private router:Router) {
    
    this.service=loginRegisterService;
    this.student=new Student();
    this.studentResponse=new Student();
  }

  
  ngOnInit() {
    this.show=true;
    setTimeout(() => {
    }, 2000);
  }
  onLogin(){
    console.log(this.student);
    console.log("inside login");
    this.service.loginStudent(this.student).subscribe(
      response=>
      {
        this.studentResponse=response;
        if(this.studentResponse.email==null){
          this.studentResponse=null;
          alert("Enter correct id/password");
        }
        console.log(this.studentResponse);
        if(this.studentResponse){
          this.show=false;
          this.router.navigate(['dashboard',this.studentResponse.email]);
        }
      });
  }
  onRegister(){
    console.log(this.student);
    console.log("inside register");
    this.service.registerStudent(this.student).subscribe(
      response=>
      {
        this.studentResponse=response;
        if(this.studentResponse.email==null)
          this.studentResponse=null;

        console.log(this.studentResponse);
        if(this.studentResponse){
          this.show=false;
          this.router.navigate(['dashboard',this.studentResponse.email]);
        }
      });
  }
}