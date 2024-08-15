import { Component } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-template',
  standalone: true,
  imports: [],
  templateUrl: './blogtemplate.component.html',
  styleUrl: './blogtemplate.component.scss'
})
export class TemplateComponent {
  constructor(private meta: Meta) {}
  ngOnInit() {
    this.meta.updateTag({ name: 'description', content: 'Blog post template by Alvin Ng, intended for personal use' })
  }

}
