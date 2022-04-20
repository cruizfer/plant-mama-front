import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service';
import { UserService } from 'src/app/services/user.service';
import { Post } from '../../interfaces/post.interface';
import { User } from '../../interfaces/user.interface';

@Component({
  selector: 'app-user-feed',
  templateUrl: './user-feed.component.html',
  styleUrls: ['./user-feed.component.css']
})
export class UserFeedComponent implements OnInit {

  arrPosts: Post[];
  userDetail: User[];
  profilePicture: any;
  savedPost: any

  constructor(private postService: PostService, private userService: UserService) {

    this.arrPosts = [];
    this.userDetail = [];
    this.profilePicture = 0;


  }

  async ngOnInit() {
    this.arrPosts = await this.postService.getAll()
    console.log(this.arrPosts)
    this.userDetail = await this.userService.getLoggedUser()
    this.profilePicture = this.userDetail["user_image"];


  }

  async onClick(pPost) {
    try {
      const response = await this.postService.savedPostsByUser({ post_id: pPost })
    } catch (error) {
      console.log(error)
    }

  }
}