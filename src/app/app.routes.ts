import { Routes } from '@angular/router';
import { BoardComponent } from './minigames/tictactoe/board/board.component';
import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ContactComponent } from './contact/contact.component';
import { MinigamesComponent } from './minigames/minigames.component';
import { LinksComponent } from './links/links.component';
import { BlogComponent } from './blog/blog.component';
import { TemplateComponent } from './blog/blogtemplate/blogtemplate.component';

export const routes: Routes = [
    { path: '', title: 'Alvin Ng Wei Sing | Home', component: HomeComponent },
    { path: 'links', component: LinksComponent},
    { path: 'contact-me', title: 'Contact Me | Alvin Ng', component: ContactComponent },
    { path: 'minigames', title: 'Minigames | Alvin Ng',
        children: [
            { path: 'tic-tac-toe', title: 'Tic-Tac-Toe | Alvin Ng', component: BoardComponent },
            { path: '', pathMatch: 'full', component: MinigamesComponent }
        ]},
    { path: 'blog',
        children: [
            { path: 'template', title: 'Blog Template | Alvin Ng', component: TemplateComponent },
            { path: '', title: 'Blog | Alvin Ng', component: BlogComponent },
        ]
    },
    { path: '**', pathMatch:'full', component: PagenotfoundComponent },
];
