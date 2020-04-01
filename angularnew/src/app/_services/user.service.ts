﻿import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { User } from '../_models';

@Injectable({ providedIn: 'root' })
export class UserService {
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<User[]>(`${environment.apiUrl}/api/users`);
    }
	
	register(user: User) {
        return this.http.post(`${environment.apiUrl}/api/register`, user);
    }
	
	delete(id: number) {
        return this.http.delete(`${environment.apiUrl}/api/delete/${id}`);
    }
}