import { Component, HostListener } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { octMarkGithub } from '@ng-icons/octicons';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, MatButtonModule, MatMenuModule, MatCardModule, MatIconModule, NgIconComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  viewProviders: [provideIcons({octMarkGithub})]
})

export class HomeComponent {
  //rgba(210,177,255,1) 0%, rgba(252,199,255,1) 19%, rgba(255,186,173,1) 100%
  c1: { red:number, green:number, blue:number }= {
    red: 210,
    green: 177,
    blue: 255
    };
  c2: { red:number, green:number, blue:number }= {
    red: 252,
    green: 199,
    blue: 255
    };
  c3: { red:number, green:number, blue:number }= {
    red: 255,
    green: 186,
    blue: 173
    };

  @HostListener('window:scroll', [])
  onScroll() {
    let e = document.querySelector('#menu') as HTMLElement;
    console.log(document.documentElement.clientHeight, window.scrollY);
    if (window.scrollY < document.documentElement.clientHeight * 0.19 - 40) {
      let p = (window.scrollY+40)/(document.documentElement.clientHeight*0.19)
      let newc = this.calcRGB(this.c1, this.c2, p);
      e.style.backgroundColor = this.cToRGBA(newc);
    } else if (document.documentElement.clientHeight * 0.19 - 40<= window.scrollY && window.scrollY < document.documentElement.clientHeight - 40) {
      let p = (window.scrollY - document.documentElement.clientHeight*0.19 + 40)/(document.documentElement.clientHeight*0.81) 
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

}
