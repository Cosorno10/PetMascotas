import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, ReplaySubject } from 'rxjs';
import { Service } from './service';
import { Pet } from '../interface/pet';

@Injectable({
    providedIn: 'root'
})
export class PetService extends Service {

    constructor(http: HttpClient) {
        super(http);
    }
    
    add(pet: Pet): Observable<any> {
        return this.postApi('pet', pet);
    }

    modify(pet: Pet): Observable<any> {
        return this.putApi('pet', pet);
    }

    get(pet: Pet): Observable<any> {
        return this.getApi('pet', pet);
    }

    getTypes(): Observable<any> {
        return this.getApi('pet/types');
    }

    delete(pet: Pet): Observable<any> {
        return this.deleteApi('pet', pet);
    }
}
