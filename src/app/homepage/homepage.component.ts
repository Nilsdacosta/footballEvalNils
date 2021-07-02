import { Component, OnInit } from '@angular/core';
import {JoueurService} from "../services/joueur.service";
import {Joueur} from "../classes/joueur";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  joueurs: Joueur[] = [];
  joueur?: Joueur;
  isLoading = false;
  position = ['Gardien', 'Defenseur', 'Milieu', 'Attaquant'];

  constructor(private joueurService: JoueurService, private notifier: ToastrService,) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.joueurService.getAll().subscribe(data => {
      this.joueurs = data;
      this.isLoading = false;
    })
  }
  delete(id: number){
    this.isLoading = true;
      this.joueurService.getOne(id).subscribe(data2=>{
        this.joueurService.delete(id).subscribe(data=>{
          this.isLoading = false;
          this.notifier.success(data2.nom + " a bien été supprimé de la liste: Cheh !");
          this.ngOnInit();

      })
    })
  }

}
