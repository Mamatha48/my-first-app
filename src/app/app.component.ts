import { Component, OnInit } from '@angular/core';
import { HackathonService } from './hackathon.service';
import { ChatbotService } from './chatbot.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  showDiv: boolean = false;
  enableVoice: boolean = false;
  close: boolean = false;
  userMessage: string = '';
  chatMessages: { sender: string; message: string }[] = [];

  constructor(private hackathon: HackathonService, private chatbotService: ChatbotService){

  }
  
  ngOnInit() {
  this.getProject();
    this.chatbotService.chatMessages$.subscribe(messages => {
      this.chatMessages = messages;
    });
  }

  toggleChatBot() {
    this.showDiv = !this.showDiv;
    console.log("chatBot opened",this.showDiv);
  }
  toggleClose()
  {
    this.showDiv = !this.showDiv;
    console.log("chatBot Closed", this.showDiv);
  }

  toggleVoice() {
    this.enableVoice = !this.enableVoice;
  }

  getProject(){
    this.hackathon.getEntities().subscribe(res =>{
      console.log("res",res);
    })
  }

  sendMessage() {
    if (this.userMessage.trim() !== '') {
      this.chatbotService.sendMessage(this.userMessage);
      this.userMessage = '';
    }
  }

}
