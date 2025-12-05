import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-plst',
  standalone: true,
  imports: [FormsModule, CommonModule,RouterModule],
  templateUrl: './plst.html',
  styleUrls: ['./plst.css']
})
export class Plst {
  playlists = [
    { title: 'Chill Vibes', description: 'Relax and unwind', image: 'chill.jpg' },
    { title: 'Workout Hits', description: 'Energy boost for your gym', image: 'work.jpg' },
    { title: 'Romantic Tunes', description: 'Feel the love in the air', image: 'r.jpg' },
    { title: 'Top Hits 2025', description: 'Chartbusters of the year', image: 't.jpg' },
    { title: 'YOUR FAVS', description: 'Your time now!', image: 'y.jpg' },
    { title: 'Recommended', description: 'Made Just For You', image: 'rec.jpg' },
    { title: 'Modivation', description: 'Its YOU BUDDY', image: 'workh.jpg' }
  ];

  currentSong: string | null = null;
  currentArtist: string | null = null;
  likedSongs: string[] = [];
  volume: number = 50;
  searchQuery: string = '';

  get isSongSelected(): boolean {
    return !!this.currentSong;
  }

  likeSong(song: string | null) {
    if (song && !this.likedSongs.includes(song)) {
      this.likedSongs.push(song);
    }
  }

  playSong() {
    if (this.isSongSelected) {
      console.log(`Playing: ${this.currentSong} by ${this.currentArtist}`);
    }
  }

  removeFromPlaylist(song: string | null) {
    if (song) {
      this.likedSongs = this.likedSongs.filter(s => s !== song);
      if (this.currentSong === song) {
        this.currentSong = null;
        this.currentArtist = null;
      }
    }
  }
}
