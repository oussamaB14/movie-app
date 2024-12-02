import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
})
export class ProfilePage implements OnInit {
  currentUser: User | null = null; // Store the user data
  isLoading: boolean = true; // Show a loading state

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.authService.getCurrentUser().subscribe(
      (user) => {
        this.currentUser = user; // Assign user data to `currentUser`
        this.isLoading = false; // Loading completed
      },
      (error) => {
        console.error('Error fetching user:', error);
        this.isLoading = false;
      }
    );
  }
}
