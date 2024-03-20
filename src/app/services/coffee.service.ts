import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CoffeeModel } from '../models/coffee.model';

@Injectable({
    providedIn: 'root'
})
export class CoffeeService {

    constructor(private _http: HttpClient) { }

    getCoffeData(): Observable<CoffeeModel[]> {
        return this._http.get<CoffeeModel[]>('assets/data.json');
    }
}