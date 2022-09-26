import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateChild,
  RouterState,
  RouterStateSnapshot,
  UrlTree
} from "@angular/router";
import {Observable} from "rxjs";


export class AuthGuard implements CanActivate, CanActivateChild{
  CanActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):Observable<boolean|UrlTree>|Promise<boolean|UrlTree>|boolean|UrlTree{
    return this.permissions.canActivate(this.currentUser, route.params.id);

  }

    {}

  CanActivateChild(){}

}
