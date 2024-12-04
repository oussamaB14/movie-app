import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';
import { MatchingService } from 'src/app/services/matching.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
})
export class ProfilePage implements OnInit {
  currentUser: User | null = null; // Store the user data
  isLoading: boolean = true; // Show a loading state
  matchingUsers: any[] = [];
  constructor(
    private authService: AuthService,
    private matchingService: MatchingService
  ) {}

  ngOnInit() {
    this.authService.getCurrentUser().subscribe(
      (user) => {
        this.currentUser = user; // Assign user data to currentUser
        this.isLoading = false; // Loading completed
      },
      (error) => {
        console.error('Error fetching user:', error);
        this.isLoading = false;
      }
    );
    this.loadMatchingUsers();
  }
  public alertButtons = [
    {
      text: 'Cancel',
      role: 'cancel',
      handler: () => {
        console.log('Alert canceled');
      },
    },
    {
      text: 'OK',
      role: 'confirm',
      handler: () => {
        this.logout();
        console.log('Alert confirmed');
      },
    },
  ];

  logout() {
    this.authService.logout();
    window.location.href = '/signin';
  }
  async loadMatchingUsers() {
    try {
      this.matchingUsers = await this.matchingService.getMatchingUsers();
    } catch (error) {
      console.error('Error fetching matching users:', error);
    } finally {
      this.isLoading = false;
    }
  }
}