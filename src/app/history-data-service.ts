import {Injectable} from '@angular/core';
import { HistoryComponent } from './history.component';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {MeetingsModel} from './Meetings-Model';


@Injectable()
export class HistoryDataService {
constructor(private http: Http) {}

  getMeetings(){
    return this.http.get('app/Meetings.json')
        .map(Response => <MeetingsModel[]>Response.json().data);

  }
}
