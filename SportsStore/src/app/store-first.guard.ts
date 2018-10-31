import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot,
 RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { StoreComponent } from './store/store.component';

@Injectable({
	providedIn: 'root'
})
export class StoreFirstGuard implements CanActivate {
	private isFirstNavigation = true;

	constructor(private router:Router){}

	canActivate(
		next: ActivatedRouteSnapshot,
		state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
		//return true;
		console.log('isFirstNav: '+this.isFirstNavigation);
		if (this.isFirstNavigation) {
			this.isFirstNavigation = false;
			if (next.component != StoreComponent) {
				this.router.navigateByUrl("/");
				return false;
			}
		}
		return true;
	}
}
