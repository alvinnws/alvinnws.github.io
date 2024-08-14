import { Component } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.scss'
})
export class BlogComponent {
  constructor(private meta: Meta) {}
  ngOnInit() {
    this.meta.updateTag({ name: 'description', content: 'Directory of all blog posts by Alvin Ng' })
  }

}
