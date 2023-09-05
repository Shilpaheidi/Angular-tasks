import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  getBlogPosts() {
    return [
      { id: 1, title: 'Blog Post 1', content: 'Content for Blog Post 1...' },
      { id: 2, title: 'Blog Post 2', content: 'Content for Blog Post 2...' },
      { id: 3, title: 'Blog Post 3', content: 'Content for Blog Post 3...' },
    ];
  }

  getBlogPost(id: number) {
    return this.getBlogPosts().find((post) => post.id === id);
  }
  constructor() {}
}
