import { Component } from '@angular/core';
import { HistoryDataService } from './history-data-service';
import {MeetingsModel} from './Meetings-Model';

@Component({
  selector: 'app-root',
  templateUrl: './history.component.html',
  styleUrls: ['./app.component.css']
})
export class HistoryComponent {
    Meetings:MeetingsModel[];

constructor(private HistoryDataService:HistoryDataService) {}

ngOnInit(){
  this.HistoryDataService.getMeetings()
    .subscribe(Meetings => this.Meetings = Meetings);
    }
}
