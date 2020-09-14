import { Injectable } from '@angular/core';
import { CanActivate,Router, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import {AuthService} from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService,
    private router: Router){}
    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot):boolean {
          if (this.authService.isUserAuthenticated()) {
              return true;
          }else{
            this.router.navigate(['/login']);
            return false;
          }
        }  
}
