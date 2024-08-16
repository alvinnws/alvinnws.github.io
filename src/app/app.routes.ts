import { Routes } from '@angular/router';
import { BoardComponent } from './minigames/tictactoe/board/board.component';
import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ContactComponent } from './contact/contact.component';
import { MinigamesComponent } from './minigames/minigames.component';
import { LinksComponent } from './links/links.component';
import { BlogComponent } from './blog/blog.component';
import { TemplateComponent } from './blog/blogtemplate/blogtemplate.component';
import { WorkComponent } from './work/work.component';
import { ProjectsComponent } from './projects/projects.component';
import { EducationComponent } from './education/education.component';
import { CertificatesComponent } from './certificates/certificates.component';

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
    { path: 'work-experience',
        children: [
            { path: '', title: 'Career | Alvin Ng', component: WorkComponent }
        ]
    },
    { path: 'projects',
        children: [
            { path: '', title: 'Projects | Alvin Ng', component: ProjectsComponent }
        ]
    },
    { path: 'education',
        children: [
            { path: '', title: 'Education | Alvin Ng', component: EducationComponent }
        ]
    },
    { path: 'certificates',
        children: [
            { path: '', title: 'Certificates | Alvin Ng', component: CertificatesComponent}
        ]
    },
    { path: '**', pathMatch:'full', component: PagenotfoundComponent },
];
