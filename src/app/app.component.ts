import { Component } from '@angular/core';
import { Post } from './models/post';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'MemeSite';
  post: Post = new Post({});

  constructor(private service: ApiService) {
    this.service.getMeme().subscribe((data) => {
      this.post = new Post(data);
    });
  }

  getNewPost() {
    this.service.getMeme().subscribe((data) => {
      this.post = new Post(data);
    });
  }
}
