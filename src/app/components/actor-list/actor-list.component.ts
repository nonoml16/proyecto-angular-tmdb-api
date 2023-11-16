import { Component, OnInit } from '@angular/core';
import { Actor, ActorListResponse } from 'src/app/models/actor-list.interface';
import { ActorService } from 'src/app/service/actor.service';

@Component({
  selector: 'app-actor-list',
  templateUrl: './actor-list.component.html',
  styleUrls: ['./actor-list.component.css']
})
export class ActorListComponent implements OnInit {

  constructor(private actorService: ActorService) { }
  actorList: Actor[] = [];
  actorCount!: number;
  currentPage = 1;

  ngOnInit(): void {
    this.loadNewPage();
  }

  loadNewPage(): void {
    this.actorService.getList(this.currentPage).subscribe(resp => {
      this.actorList = resp.results
      this.actorCount = resp.total_results;
    });

  }

}
