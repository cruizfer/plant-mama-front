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
  savedPost: any;
  deletePost: any;


  constructor(private postService: PostService) {
  }

  async ngOnInit() {
    this.arrSavedPost = await this.postService.getBookmarks();
    console.log(this.arrSavedPost)

  }

  async onClick($event) {
    this.deletePost = await this.postService.deletePostById($event)
    console.log(this.deletePost)

    this.arrSavedPost = await this.postService.getBookmarks();
    console.log(this.arrSavedPost)
  }
}
