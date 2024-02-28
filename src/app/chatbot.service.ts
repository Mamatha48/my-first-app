import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ChatbotService {
    private chatMessagesSubject = new BehaviorSubject<{ sender: string; message: string }[]>([]);
    chatMessages$ = this.chatMessagesSubject.asObservable();

    private botReplies: string[] = [
        'Hello!', 'Hi!', 'Hey!',
        'Okay',
    ];

    constructor() { }

    sendMessage(userMessage: string) {
        const updatedMessages = [...this.chatMessagesSubject.value, { sender: 'user', message: userMessage }];
        this.chatMessagesSubject.next(updatedMessages);

        const botReply = this.generateBotReply(userMessage);
        setTimeout(() => {
            const updatedMessages = [...this.chatMessagesSubject.value, { sender: 'bot', message: botReply }];
            this.chatMessagesSubject.next(updatedMessages);
        }, 500);
        this.scrollToBottom();
    }

    private scrollToBottom() {
        setTimeout(() => {
            const messageSection = document.getElementById('message-section');
            if (messageSection) {
                messageSection.scrollTop = messageSection.scrollHeight;
            }
        }, 100);
    }

    private generateBotReply(userMessage: string): string {
        const randomIndex = Math.floor(Math.random() * this.botReplies.length);
        return this.botReplies[randomIndex];
    }
}
