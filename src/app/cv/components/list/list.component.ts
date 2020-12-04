import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Personne } from '../../model/personne';
import { CvService } from '../../services/cv.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  public personnes: Personne[] = [];
  /*   @Output() forwardSelectedPersonne = new EventEmitter(); */
  constructor(private cvService: CvService) {}
  ngOnInit(): void {
    this.cvService.getPersonnes().subscribe(res=>{
      if (res) this.personnes = res;
      else {
        this.personnes = this.cvService.getFakePersonne();
        console.log('we are using fake data');
      }
    });
  }
  /*   forwardPersonne(selectedPersonne: Personne) {
    this.forwardSelectedPersonne.emit(selectedPersonne);
  } */
}
