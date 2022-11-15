import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Pet } from 'src/app/interface/pet';
import { PetService } from 'src/app/services/pet.service';
import { DialogComponent } from '../../atoms/dialog/dialog.component';

@Component({
	selector: 'app-pet-grid',
	templateUrl: './pet-grid.component.html',
	styleUrls: ['./pet-grid.component.scss']
})
export class PetGridComponent implements OnInit {
	listPet: Pet[];
	listTypesPet: string[];
	selectedType: string = '';

	constructor(private petSrv: PetService, public dialog: MatDialog) {
		if (localStorage.getItem('shopping-cart') == undefined)
			localStorage.setItem('shopping-cart', '[]');

		petSrv.getTypes().subscribe(res => {
			this.listTypesPet = res;
		})

		this.getPets();
	}

	ngOnInit(): void {
	}

	getPets(): void {
		this.petSrv.get({ id: 0, type: this.selectedType, status: 1 }).subscribe((res: Pet[]) => {
			this.listPet = res;
		});
	}

	buy(pet: Pet): void {
		const dialogRef = this.dialog.open(DialogComponent, {
			width: '450px',
			data: { pet },
		});

		/* dialogRef.afterClosed().subscribe(result => {
			this.animal = result;
		}); */
	}
}
