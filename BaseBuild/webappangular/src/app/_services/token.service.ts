import { Injectable } from '@angular/core';
import { User } from '../_models/user.model';

@Injectable({providedIn :'root'})
export class TokenService{
    loggedInUser: User;
    setLoggedInUser(user: User)
    {
       this.loggedInUser = user;
    }
    getLoggedInUser()
    {
        return this.loggedInUser.userName; 
    }
}