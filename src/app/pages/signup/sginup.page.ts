import { Component, OnInit } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sginup',
  templateUrl: './sginup.page.html',
  styleUrls: ['./sginup.page.scss'],
})
export class SginupPage {
  name = '';
  email = '';
  password = '';
  age: number | null = null;
  photoURL: string | null = null;
  constructor(private authService: AuthService) {}
  async register() {
    if (
      !this.name ||
      !this.email ||
      !this.password ||
      !this.age ||
      !this.photoURL
    ) {
      alert('Please fill in all fields.');
      return;
    }

    try {
      await this.authService.register(
        this.name,
        this.email,
        this.password,
        this.age,
        this.photoURL
      );
      alert('Signup successful!');
      window.location.href = '/';
    } catch (error) {
      console.error('Error during signup:', error);
      alert('Signup failed. Please try again.');
    }
  }
  async capturePhoto() {
    try {
      const photo = await Camera.getPhoto({
        quality: 90,
        resultType: CameraResultType.DataUrl,
        source: CameraSource.Camera,
      });
      if (photo.dataUrl !== undefined) {
        this.photoURL = photo.dataUrl;
      }
    } catch (error) {
      console.error('Error capturing photo:', error);
    }
  }
  handleFileInput(arg0: any) {
    throw new Error('Method not implemented.');
  }
  onSubmit() {
    throw new Error('Method not implemented.');
  }


}
