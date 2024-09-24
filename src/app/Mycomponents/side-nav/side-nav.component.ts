import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { Route, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-side-nav',
  standalone: true,
  imports: [MatIcon, CommonModule],
  templateUrl: './side-nav.component.html',
  styleUrl: './side-nav.component.css'
})
export class SideNavComponent {
  check= true;

  toggleslideout(){
    this.check =! this.check;
  }
  constructor(private router: Router){}

  onDash(){
    this.router.navigate(['/dashboard']);
    this.check=!this.check;
  }
  onProfile(){
    this.router.navigate(['/profile']);
    this.check=!this.check;
  }
  onHistory(){
    this.router.navigate(['/history']);
    this.check=!this.check;
  }
  onLogout(){
    this.router.navigate(['/login']);
    this.check=!this.check;

}
}
