import { Component, OnInit } from '@angular/core';
import { AdminService } from '../services/admin.service';
import { User } from '../models/user';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  users: User[] = [];
  movieIdToAdd: string = '';
  selectedUserId: string = '';
  constructor(
    private adminService: AdminService,
    private movieService: MovieService
  ) {}

  ngOnInit() {
    this.loadUsers();
  }
  loadUsers() {
    this.adminService.getUsers().subscribe({
      next: (users) => {
        this.users = users;
      },
      error: (error) => {
        console.error('Error fetching users:', error);
      }
    });
  }
  async addMovieToFavorites() {
    if (this.selectedUserId && this.movieIdToAdd) {
      try {
        await this.adminService.addMovieToUserFavorites(
          this.selectedUserId,
          this.movieIdToAdd
        );
        console.log('Movie added successfully!');
      } catch (error) {
        console.error('Error adding movie to user favorites:', error);
      }
    } else {
      console.warn('User or Movie ID is missing.');
    }
  }
}
