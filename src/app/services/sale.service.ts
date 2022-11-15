import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, ReplaySubject } from 'rxjs';
import { Service } from './service';
import { Invoice } from '../interface/invoice';
import { Sale } from '../interface/sale';

@Injectable({
    providedIn: 'root'
})
export class SaleService extends Service {

    constructor(http: HttpClient) {
        super(http);
    }

    add(sale: Sale): Observable<any> {
        return this.postApi('sale', sale);
    }

    get(): Observable<any> {
        return this.getApi('sale');
    }
}
