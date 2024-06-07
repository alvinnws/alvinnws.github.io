import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ FormsModule, MatFormFieldModule, MatInputModule, MatButtonModule ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  contact = '';
  message = '';
  data = '';

  onSubmit() {
    this.data = "entry.1198833298=" + this.contact + "&entry.431945896=" + this.message + "&fvv=1";
    //entry.1198833298=1&entry.431945896=2&fvv=1

    fetch("https://docs.google.com/forms/d/e/1FAIpQLSfy6zJehGoHGocvMLcNjLeUb5uOHs0CPxSdhwKqbwzAHnCKKQ/formResponse", {
      method: "POST",
      mode: 'cors',
      headers: {
          'origin': 'https://docs.google.com',
          'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: this.data
  }).then((status) => console.log(status)    )
  .catch((error) => {
      console.log(error);
  });
  }
}
