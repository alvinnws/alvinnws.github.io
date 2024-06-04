import { Routes } from '@angular/router';
import { BoardComponent } from './tictactoe/board/board.component';
import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
    { path: 'minigames/tic-tac-toe', component: BoardComponent },
    { path: '', component: HomeComponent },
    { path: 'contact-me', component: ContactComponent },
    { path: '**', pathMatch:'full', component: PagenotfoundComponent }
];
