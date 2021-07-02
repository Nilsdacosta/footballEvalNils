import { Component, OnInit } from '@angular/core';
import {Joueur} from "../classes/joueur";
import {JoueurService} from "../services/joueur.service";
import {Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-add-joueur',
  templateUrl: './add-joueur.component.html',
  styleUrls: ['./add-joueur.component.css']
})
export class AddJoueurComponent implements OnInit {
  joueurFormulaire = new Joueur();
  isLoading = false;
  position = ['Gardien', 'Defenseur', 'Milieu', 'Attaquant']
  constructor(private router: Router, private notifier: ToastrService, private joueurService: JoueurService) { }

  ngOnInit(): void {
  }

  joueurSubmit(){
    this.isLoading= true;
    this.joueurService.add(this.joueurFormulaire).subscribe(
      data =>{
        this.isLoading = false;
        this.router.navigate(['/']);
        this.notifier.success(this.joueurFormulaire.nom + " a bien été ajouté à la liste de DD le stratège");
      }
    )
  }

}
