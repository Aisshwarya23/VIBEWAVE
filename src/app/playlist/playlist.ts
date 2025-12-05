import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-playlist',
  imports: [FormsModule, RouterLink,RouterLinkActive,CommonModule],
  templateUrl: './playlist.html',
  styleUrl: './playlist.css'
})
export class Playlist {
  
 playlists = [
    { title: 'Playlist', description: 'Relax and unwind', image: 'playlst.jpg' },
    { title: 'Now Playing', description: 'Energy boost for your gym', image: 'now.jpg' }
  ];


}
