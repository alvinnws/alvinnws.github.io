import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive, Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { bootstrapLinkedin, bootstrapGithub, bootstrapDownload } from '@ng-icons/bootstrap-icons';
import { matEmailOutline } from '@ng-icons/material-icons/outline'
import { ClipboardModule } from '@angular/cdk/clipboard';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Location } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, MatButtonModule, MatIconModule, NgIconComponent, ClipboardModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
  viewProviders: [provideIcons({bootstrapGithub, bootstrapLinkedin, bootstrapDownload, matEmailOutline})]
})
export class NavbarComponent {
  constructor(public location: Location, private _snackBar: MatSnackBar) {}
  
  email = "official@alvinnws.com"

  copied() {
    this._snackBar.open("Copied official@alvinnws.com", "Close", {
      duration: 3000,
    });
  }
}
