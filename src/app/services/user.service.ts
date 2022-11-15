import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Service } from './service';
import { User, UserLogin } from '../interface/user';

@Injectable({
    providedIn: 'root'
})
export class UserService extends Service {

    constructor(http: HttpClient) {
        super(http);
    }

    add(user: User): Observable<any> {
        return this.postApi('user', user);
    }

    modify(user: User): Observable<any> {
        return this.putApi('user', user);
    }

    get(): Observable<any> {
        return this.getApi('user');
    }

    delete(user: User): Observable<any> {
        return this.deleteApi('user', user);
    }

    login(user: UserLogin ): Observable<any> {
        return this.postApi('user/login', user);
    }
}
