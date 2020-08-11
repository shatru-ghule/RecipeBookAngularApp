import {Component, OnInit, OnDestroy } from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';
import { AuthService } from '../auth/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl:'./header.component.html'
})

export class HeaderComponent implements OnInit ,OnDestroy {
  userSubcription:Subscription;
  isAuthenticated=false;

  constructor(private storagrService:DataStorageService,private authService:AuthService){

  }
  ngOnInit(){
   this.userSubcription= this.authService.user.subscribe( user=>{
      this.isAuthenticated=!!user;
      console.log(!user);
      console.log(!!user);
    })
  }

  onLogout(){
  this.authService.logout();
  }

  onSaveData(){
   this.storagrService.storeRecip();

  }
  onFetchData(){
    this.storagrService.FetchRecipe()
    .subscribe();
  }
  ngOnDestroy(){
    this.userSubcription.unsubscribe();
  }

}
