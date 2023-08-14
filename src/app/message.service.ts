import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  messages: string[] = [];

  constructor() {}

  add(messages: string) {
    console.log(messages)
  }

  clear() {
    this.messages = [];
  }
}
