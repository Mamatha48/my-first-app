import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HackathonService {
  // private hackathon!:"http://localhost:8084";
  private hackathon!:"http :8080/ai/simple?message=”Please write me a haiku”";

  constructor(public httpClient:HttpClient) { }

  getEntities(){
    return this.httpClient.get(this.hackathon);
  }
  
}
