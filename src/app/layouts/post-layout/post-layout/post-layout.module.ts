import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostLayoutComponent } from './post-layout.component';
import { PostLayoutRoutingModule } from './post-layout.routing.module';
import { BlogPostComponent } from 'src/app/components/blog-post/blog-post.component';
import { PostAddsComponent } from 'src/app/components/post-adds/post-adds.component';

@NgModule({
  declarations: [BlogPostComponent, PostLayoutComponent, PostAddsComponent],
  imports: [CommonModule, PostLayoutRoutingModule],
  exports: [PostLayoutRoutingModule],
})
export class PostLayoutModule {}
