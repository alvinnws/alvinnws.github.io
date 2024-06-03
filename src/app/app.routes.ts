import { Routes } from '@angular/router';
import { BoardComponent } from './tictactoe/board/board.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    { path: 'minigames/tictactoe', component: BoardComponent },
    { path: '', component: HomeComponent }
];
