import { ClipboardModule } from '@angular/cdk/clipboard';
import { Component, HostListener } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTabsModule } from '@angular/material/tabs';
import { bootstrapDownload, bootstrapGithub, bootstrapLinkedin } from '@ng-icons/bootstrap-icons';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { matEmailOutline } from '@ng-icons/material-icons/outline';
import { Meta } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatButtonModule, MatTabsModule, MatIconModule, NgIconComponent, ClipboardModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  viewProviders: [provideIcons({bootstrapGithub, bootstrapLinkedin, bootstrapDownload, matEmailOutline})]
})

@Injectable()
export class HomeComponent {
  c1: { red:number, green:number, blue:number }= {
    red: 254,
    green: 151,
    blue: 163
    };
  c2: { red:number, green:number, blue:number }= {
    red: 255,
    green: 186,
    blue: 173
    };
  c3: { red:number, green:number, blue:number }= {
    red: 253,
    green: 238,
    blue: 235
    };
  
  email = "official@alvinnws.com"

  @HostListener('window:scroll', [])
  onScroll() {
    let e = document.querySelector('#menu-bg') as HTMLElement;
    if (window.scrollY < 0) {
      let p = (35)/(document.documentElement.clientHeight*0.19)
      let newc = this.calcRGB(this.c1, this.c2, p);
      e.style.backgroundColor = this.cToRGBA(newc);
    } else if (window.scrollY < document.documentElement.clientHeight * 0.19 - 35) {
      let p = (window.scrollY+40)/(document.documentElement.clientHeight*0.19)
      let newc = this.calcRGB(this.c1, this.c2, p);
      e.style.backgroundColor = this.cToRGBA(newc);
    } else if (document.documentElement.clientHeight * 0.19 - 35<= window.scrollY && window.scrollY < document.documentElement.clientHeight - 40) {
      let p = (window.scrollY - document.documentElement.clientHeight*0.19 + 35)/(document.documentElement.clientHeight*0.81) 
      let newc = this.calcRGB(this.c2, this.c3, p);
      e.style.backgroundColor = this.cToRGBA(newc);
    } else {
      e.style.backgroundColor = this.cToRGBA(this.c3);
    }

    let f = document.querySelector('#scroll') as HTMLElement;
    f.style.opacity = String(1 - (window.scrollY/(document.documentElement.clientHeight*0.7)));
  }

  calcRGB(c1: any, c2: any, p: number) {
    let resultRed = c1.red + p * (c2.red - c1.red);
    let resultGreen = c1.green + p * (c2.green - c1.green);
    let resultBlue = c1.blue + p * (c2.blue - c1.blue);
    let r: { red:number, green:number, blue:number }= {
    red: resultRed,
    green: resultGreen,
    blue: resultBlue
    };
    return r;
  }

  cToRGBA(c: any) {
    let st = '';
    st += 'rgba(';
    st += String(c.red) + ',';
    st += String(c.green) + ',';
    st += String(c.blue) + ',1)';
    return st;
  }

  constructor(private _snackBar: MatSnackBar, private meta: Meta,  @Inject(DOCUMENT) private doc: Document) {}
  ngOnInit() {
    let scr = this.doc.createElement('script');
    scr.type = 'application/ld+json';
    scr.text = JSON.stringify(this.alv);
    this.doc.head.appendChild(scr);
    this.meta.updateTag({ name: 'description', content: 'Alvin Ng Wei Sing is a Computer Science undergraduate at Singapore University of Technology and Design.' })
  }
  copied() {
    this._snackBar.open("Copied official@alvinnws.com", "Close", {
      duration: 3000,
    });
  }

  alv = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Alvin Ng Wei Sing",
    "description": "Alvin is currently a Computer Science undergradute at Singapore University of Technlogy and Design (SUTD)",
    "alternateName": [
      "Alvin Ng",
      "alvinnws"
    ],
    "jobTitle": "Computer Science Undergraduate",
    "affiliation": {
      "@type": "Organization",
      "name": "Singapore University of Technlogy and Design"
    },
    "nationality": {
      "@type": "Country",
      "name": "Singapore"
    },
    "url": "http://www.alvinnws.com",
    "email": "mailto:official@alvinnws.com",
    "image": "https://www.alvinnws.com/assets/HomePic.jpg",
    "sameAs": [
      "https://github.com/alvinnws",
      "https://www.linkedin.com/in/alvinnws/"
    ]
  }
}
