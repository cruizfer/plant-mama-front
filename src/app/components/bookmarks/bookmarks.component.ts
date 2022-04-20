import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service';
import { Post } from '../../interfaces/post.interface';

@Component({
  selector: 'app-bookmarks',
  templateUrl: './bookmarks.component.html',
  styleUrls: ['./bookmarks.component.css']
})
export class BookmarksComponent implements OnInit {

  arrSavedPost: any;
  savedPost: any

  constructor(private postService: PostService) {
    this.arrSavedPost = []
  }

  async ngOnInit() {
    this.arrSavedPost = await this.postService.getBookmarks()

    console.log(this.arrSavedPost)//Array of post


    for (let post of this.arrSavedPost) {
      console.log(post.post_id)// IDpost
      /* this.savedPost = await this.postService.getPostById(post.post_id)
      console.log(this.savedPost) */

    }

  }

}
