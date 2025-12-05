import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true, // Add this if using standalone components
  imports: [FormsModule, RouterLink, RouterModule],
  templateUrl: './login.html',
  styleUrls: ['./login.css'] // ✅ Fixed from "styleUrl" to "styleUrls"
})
export class Login {

  credentials = {
    email: '',
    password: ''
  };
  isLoading = false;

  constructor(private router: Router) {} // ✅ Inject Router here

  onSubmit() {
    // Simple navigation after form submission
    this.router.navigate(['/home']);
  }

  createRipple(event: MouseEvent) {
    const button = event.currentTarget as HTMLElement;
    const circle = document.createElement("span");
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;

    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${event.clientX - button.getBoundingClientRect().left - radius}px`;
    circle.style.top = `${event.clientY - button.getBoundingClientRect().top - radius}px`;
    circle.classList.add("ripple-effect");

    const ripple = button.getElementsByClassName("ripple-effect")[0];
    if (ripple) {
      ripple.remove();
    }

    button.appendChild(circle);
  }

}
