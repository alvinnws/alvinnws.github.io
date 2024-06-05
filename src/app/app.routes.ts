import { Routes } from '@angular/router';
import { BoardComponent } from './minigames/tictactoe/board/board.component';
import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ContactComponent } from './contact/contact.component';
import { MinigamesComponent } from './minigames/minigames.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'contact-me', component: ContactComponent },
    { path: 'minigames', component: MinigamesComponent,
        children: [
            { path: 'tic-tac-toe', component: BoardComponent }
        ]},
    { path: '**', pathMatch:'full', component: PagenotfoundComponent }
];
