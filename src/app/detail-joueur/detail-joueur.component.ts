import { Component, OnInit } from '@angular/core';
import {Joueur} from "../classes/joueur";
import {ActivatedRoute} from "@angular/router";
import {JoueurService} from "../services/joueur.service";

@Component({
  selector: 'app-detail-joueur',
  templateUrl: './detail-joueur.component.html',
  styleUrls: ['./detail-joueur.component.css']
})
export class DetailJoueurComponent implements OnInit {
  id: number;
  joueur?: Joueur;
  isLoading = false;
  constructor(private activatedRoute: ActivatedRoute, private joueurService: JoueurService) {
    this.id = parseInt(<string> this.activatedRoute.snapshot.paramMap.get('id'));
  }

  ngOnInit(): void {
    this.isLoading = true;
    this.joueurService.getOne(this.id).subscribe(data=>{
      this.isLoading = false;
      this.joueur = data;
    })
  }

}
