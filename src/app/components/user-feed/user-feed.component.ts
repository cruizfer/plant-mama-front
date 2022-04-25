import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostService } from 'src/app/services/post.service';
import { UserService } from 'src/app/services/user.service';
import { Post } from '../../interfaces/post.interface';
import { User } from '../../interfaces/user.interface';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-user-feed',
  templateUrl: './user-feed.component.html',
  styleUrls: ['./user-feed.component.css']
})
export class UserFeedComponent implements OnInit {

  arrPosts: Post[];
  userDetail: User[];
  profilePicture: any;
  savedPost: boolean;



  constructor(private postService: PostService, private userService: UserService, private router: Router) {
    this.arrPosts = [];
    this.userDetail = [];
    this.profilePicture = 0;

  }

  async ngOnInit() {

    //DISPLAYING POSTS BY USER EXPERTISE
    this.arrPosts = await this.postService.getByExpertise();


    //DISPLAYING USER DETAILS
    this.userDetail = await this.userService.getLoggedUser()
    this.profilePicture = this.userDetail["user_image"];


  }

  async onClick(pPost) {

    try {
      const response = await this.postService.savedPostsByUser({ post_id: pPost })
      Swal.fire('Go to bookmarks to read more.')

    } catch (error) {
      console.log(error)
    };



  }
}