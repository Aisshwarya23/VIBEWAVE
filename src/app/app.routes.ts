import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Library } from './library/library';
import { Playlist } from './playlist/playlist';
import { Login } from './login/login';
import { Plst } from './plst/plst';
import { now } from './now/now';

export const routes: Routes = [
    {path:'home', component: Home},
    {path:'', redirectTo:"/login", pathMatch:'full'},
    {path:'library', component:Library},
    {path:'playlist',component:Playlist},
    {path:'plst',component:Plst},
    {path:'now',component:now},
    {path:'login', component:Login}
    
];
