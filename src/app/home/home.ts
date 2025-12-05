import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  userName: string = '';
  greetingMessage: string = '';
  imagePath: string = 'assets/music.jpg'; // Put your image in the src/assets folder

  onGreet() {
    if (this.userName.trim()) {
      this.greetingMessage = `Hey ${this.userName}! Let the music take you away 🎧`;
    } else {
      this.greetingMessage = 'Please enter your name first 🎤';
    }
  }

}
