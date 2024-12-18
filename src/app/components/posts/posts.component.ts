import { Component, inject, NgModule } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgModel } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Post } from '../../types/post.type';

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent {
  http = inject(HttpClient);
  posts: Post[] = [];

  // questa soluzione funziona quando non c'è l'interceptor - gli passo io il token in headers:

  // ngOnInit(): void {
  //   this.http.get<Post[]>('http://localhost:3000/posts',
  //     {
  //       headers: {
  //         Authorization: `Bearer ${localStorage.getItem('token')}`
  //       }
  //     }
  //   ).subscribe(res => {
  //     this.posts = res;
  //   });
  // }


  //  questa soluzione funziona con interceptor - è l'interceptor che gli passa il token: 
  ngOnInit(): void {
    this.http.get<Post[]>('http://localhost:3000/posts',

    ).subscribe(res => {
      this.posts = res;
    });
  }


}
