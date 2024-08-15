import { Component } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-links',
  standalone: true,
  imports: [],
  templateUrl: './links.component.html',
  styleUrl: './links.component.scss'
})
export class LinksComponent {
  constructor(private meta: Meta) {}
  ngOnInit() {
    this.meta.updateTag({ name: 'description', content: 'Small site for key links of Alvin Ng or his online presence.' })
  }
}
