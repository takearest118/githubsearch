import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService {
    private username: string;
    private client_id: string = '50d1e2bee7409940b018';
    private client_secret: string = '173d50523b242fe15080d5312f0ea18475b23f80';

    constructor(private _http: Http) {
        console.log('Github Service Init...');
    }

    getUser() {
        return this._http.get('https://api.github.com/users/'+this.username+'?client_id='+this.client_id+'&client_secret='+this.client_secret)
            .map(res => res.json());
    }

    getRepos() {
        return this._http.get('https://api.github.com/users/'+this.username+'/repos'+'?client_id='+this.client_id+'&client_secret='+this.client_secret)
            .map(res => res.json());
    }

    updateUsername(username: string) {
        this.username = username;
    }

}