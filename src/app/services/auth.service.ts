import { Injectable, EventEmitter } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthService {
    
    isLoggedIn: boolean;
    logInEvent = new EventEmitter<boolean>();

    logIn(){
        this.logInEvent.emit(true);
    }
}