import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.scss'],
})
export class BlogPostComponent {
  // @Input()
  // post!: { title: string; content: string; };

  post!: BlogPost | undefined;
  constructor(
    private route: ActivatedRoute,
    private blogservice: BlogService
  ) {}

  ngOnInit(){
    const postIdString = this.route.snapshot.paramMap.get('id');
    if (postIdString) {
      const postId = +postIdString; // Convert the ID to a number
      this.post = this.blogservice.getBlogPost(postId);
    }
  }
  }

interface BlogPost {
  id: number;
  title: string;
  content: string;
}
