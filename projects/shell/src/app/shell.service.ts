import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class ShellService {
    constructor(private _httpClient: HttpClient) {}

    getActivity() {
        return this._httpClient.get<{ activity: string }>('/api/activity');
    }
}
