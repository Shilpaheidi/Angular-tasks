import { Component } from '@angular/core';
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss'],
})
export class BlogListComponent {
  // blogPosts = [
  //   { title: 'First Post', content: 'This is the first blog post' },
  //   { title: 'Second Post', content: 'This is the Second blog post' },
  //   { title: 'Third Post', content: 'This is the Third blog post' },
  // ];

  blogPosts!: BlogPost[];

  constructor(private blogservice:BlogService){this.blogPosts =  this.blogservice.getBlogPosts();}

  ngOnInit() {
    this.blogPosts = this.blogservice.getBlogPosts();
  }
}
interface BlogPost {
  id: number;
  title: string;
  content: string;
}





