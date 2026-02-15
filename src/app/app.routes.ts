import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component'; /*
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ContactComponent } from './contact/contact.component';
import { LinksComponent } from './links/links.component';
import { BlogComponent } from './blog/blog.component';
import { TemplateComponent } from './blog/blogtemplate/blogtemplate.component';
import { WorkComponent } from './work/work.component';
import { ProjectsComponent } from './projects/projects.component';
import { EducationComponent } from './education/education.component';
import { CertificatesComponent } from './certificates/certificates.component';
import { EduTemplateComponent } from './education/edu-template/edu-template.component';
import { SUTDComponent } from './education/sutd/sutd.component';
import { ASRJCComponent } from './education/asrjc/asrjc.component';
import { SUTDCoursesComponent } from './education/sutd/sutdcourses/sutdcourses.component'; */

export const routes: Routes = [
    { path: '', title: 'Alvin Ng Wei Sing | Home', component: HomeComponent } /*,
    { path: 'links', component: LinksComponent},
    { path: 'contact-me', title: 'Contact Me | Alvin Ng', component: ContactComponent },
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
            { path: 'template', title: 'Education Template', component: EduTemplateComponent },
            { path: 'ASRJC', title: 'ASRJC', component: ASRJCComponent },
            { path: 'SUTD', 
                children: [
                    { path: 'Courses', title: 'SUTD Coursework | Alvin Ng', component: SUTDCoursesComponent},
                    { path: '', title: 'SUTD | Alvin Ng', component: SUTDComponent}
                ]
            },
            { path: '', title: 'Education | Alvin Ng', component: EducationComponent }
        ]
    },
    { path: 'certificates',
        children: [
            { path: '', title: 'Certificates | Alvin Ng', component: CertificatesComponent}
        ]
    },
    { path: '**', pathMatch:'full', component: PagenotfoundComponent }, */
];
