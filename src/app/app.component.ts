import { Component } from '@angular/core';
import { HackathonService } from './hackathon.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private hackathon:HackathonService){

  }
  ngOnInit(){
this.getProject();
  }

  showDiv: boolean = false;

  toggleChatBot() {
    this.showDiv = !this.showDiv;
    console.log("show div",this.showDiv);
  }
  getProject(){
    this.hackathon.getEntities().subscribe(res =>{
      console.log("res",res);
    })
  }
}
