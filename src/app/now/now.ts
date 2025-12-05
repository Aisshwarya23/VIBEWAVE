import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-playlist',
  standalone: true,
  imports: [FormsModule, RouterLink, RouterLinkActive],
  templateUrl: './now.html',
  styleUrls: ['./now.css']
})
export class now {
  currentSong = 'PERFECT';
  currentArtist = 'One Direction';
  albumCover = 'albumcover.jpg';
  isSongSelected = true;

  likedSongs: string[] = [];
  playlist: string[] = ['Harry Styles', 'Taylor Swift'];
  volume = 50;
  searchQuery = '';

  // Audio element
  audio = new Audio('perfect.mp3');

  playSong() {
    this.audio.volume = this.volume / 100;
    this.audio.play();
    alert(`Playing: ${this.currentSong}`);
  }

  pauseSong() {
    this.audio.pause();
  }

  likeSong(song: string) {
    if (!this.likedSongs.includes(song)) {
      this.likedSongs.push(song);
    }
  }

  removeFromPlaylist(song: string) {
    this.playlist = this.playlist.filter(s => s !== song);
    alert(`${song} removed from playlist`);
  }
}
