import { Routes } from '@angular/router';
import { BoardComponent } from './tictactoe/board/board.component';
import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

export const routes: Routes = [
    { path: 'minigames/tictactoe', component: BoardComponent },
    { path: '', component: HomeComponent },
    { path: '**', pathMatch:'full', component: PagenotfoundComponent }
];
