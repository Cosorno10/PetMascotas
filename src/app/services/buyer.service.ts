import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, ReplaySubject } from 'rxjs';
import { Service } from './service';
import { Invoice } from '../interface/invoice';
import { Buyer } from '../interface/buyer';

@Injectable({
    providedIn: 'root'
})
export class BuyerService extends Service {

    constructor(http: HttpClient) {
        super(http);
    }

    add(buyer: Buyer): Observable<any> {
        return this.postApi('buyer', buyer);
    }
    
    getByDni(dni: string): Observable<any> {
        return this.getApi('buyer/dni', { dni });
    }
}
