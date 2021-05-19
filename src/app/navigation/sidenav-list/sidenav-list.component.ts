import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { TokenStorageService } from 'src/app/_include/token-storage.service';

@Component({
  selector: 'app-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.css']
})
export class SidenavListComponent implements OnInit {
  @Output() closeSidenav = new EventEmitter<void>();
  isLoggedIn = false;
  username?: any;
  
  constructor(private tokenStorageService: TokenStorageService) { }

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();

      this.username = user;
    }
  }

  onClose() {
    this.closeSidenav.emit();
  }

  logout(): void {
    this.tokenStorageService.signOut();
    window.location.reload();
  }

}
