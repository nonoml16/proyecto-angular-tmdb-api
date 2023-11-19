import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/service/account.service';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-auth-aproved',
  templateUrl: './auth-aproved.component.html',
  styleUrls: ['./auth-aproved.component.css']
})
/*export class AuthAprovedComponent implements OnInit {
  constructor(private authService: AuthService, private accountService: AccountService, private router: Router) { }

  ngOnInit(): void {
    let token = localStorage.getItem('REQUEST_TOKEN');
    this.authService.createSession(token!).subscribe(resp => {
      localStorage.setItem('SESSION_ID', resp.session_id);
      this.router.navigateByUrl('/home');
    });
  }
}*/

export class AuthAprovedComponent implements OnInit {

  constructor(private authService: AuthService, private accountService: AccountService, private router: Router) { }

  ngOnInit(): void {
    this.authService.createSession(localStorage.getItem('request_token')!).subscribe(resp => {
      localStorage.setItem('session_id', resp.session_id);
      this.router.navigateByUrl('/home');
    })
  }
}