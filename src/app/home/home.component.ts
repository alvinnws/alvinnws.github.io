import { Component, HostListener } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { bootstrapLinkedin, bootstrapGithub, bootstrapDownload } from '@ng-icons/bootstrap-icons';
import { matEmailOutline } from '@ng-icons/material-icons/outline'
import { MatTabsModule } from '@angular/material/tabs';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, MatButtonModule, MatTabsModule, MatIconModule, NgIconComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  viewProviders: [provideIcons({bootstrapGithub, bootstrapLinkedin, bootstrapDownload, matEmailOutline})]
})

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

  @HostListener('window:scroll', [])
  onScroll() {
    let e = document.querySelector('#menu-bg') as HTMLElement;
    if (window.scrollY < 0) {
      let p = (40)/(document.documentElement.clientHeight*0.19)
      let newc = this.calcRGB(this.c1, this.c2, p);
      e.style.backgroundColor = this.cToRGBA(newc);
    } else if (window.scrollY < document.documentElement.clientHeight * 0.19 - 40) {
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
