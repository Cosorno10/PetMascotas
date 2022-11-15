import { Component, OnInit } from '@angular/core';
import { Pet } from 'src/app/interface/pet';
import { PetService } from 'src/app/services/pet.service';

@Component({
  selector: 'app-pet',
  templateUrl: './pet.component.html',
  styleUrls: ['./pet.component.css']
})
export class PetComponent implements OnInit {
  listTypesPet: string[];
  petList: Pet[] = [];
  pet: Pet = new Pet();
  columns = [
    { columnDef: 'name', text: 'Nombre' },
    { columnDef: 'price', text: 'precio' },
    { columnDef: 'type', text: 'Tipo' },
    { columnDef: 'status', text: 'Estado' },
  ];
  displayedColumns = ['name', 'price', 'type', 'status'];

  constructor(private petSrv: PetService) {
    petSrv.getTypes().subscribe(res => {
      this.listTypesPet = res;
    });
    this.getPetList();
  }

  ngOnInit(): void {
  }

  getPetList() {
    this.petSrv.get({id: 0, type: ''}).subscribe(res => {
      this.petList = res;
    })
  }

  submit() {
    this.petSrv.add(this.pet).subscribe(res => {
      this.pet = new Pet();
      this.getPetList();
    })
  }

  editPet(pet: Pet) {
    this.pet = pet;
  }

  cleanForm() {
    this.pet = new Pet();
  }
}
