import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { BoardComponent } from "./minigames/tictactoe/board/board.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { Location } from '@angular/common';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, RouterLink, RouterLinkActive, BoardComponent, NavbarComponent]
})
export class AppComponent {
  title = 'portfolio'; 
  constructor(public location: Location) {
  }
}
