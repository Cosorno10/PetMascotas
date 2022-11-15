import { Component, OnInit } from '@angular/core';
import { SaleService } from 'src/app/services/sale.service';

@Component({
	selector: 'app-sales',
	templateUrl: './sales.component.html',
	styleUrls: ['./sales.component.scss']
})
export class SalesComponent implements OnInit {

	salesList: any[] = [];
	columns = [
		{ columnDef: 'nameUser', text: 'Usuario' },
		{ columnDef: 'username', text: 'Username' },
		{ columnDef: 'phoneUser', text: 'Tel. Usuario' },
		{ columnDef: 'dniBuyer', text: 'DNI Comprador' },
		{ columnDef: 'nameBuyer', text: 'Comprador' },
		{ columnDef: 'phoneBuyer', text: 'Tel. Comp.' },
		{ columnDef: 'emailBuyer', text: 'Email Comp.' },
		{ columnDef: 'locationBuyer', text: 'Lacalización Comp.' },
		{ columnDef: 'namePet', text: 'Mascota' },
		{ columnDef: 'price', text: 'Precio' },
		{ columnDef: 'type', text: 'Tipo' },
		{ columnDef: 'created', text: 'Fecha Venta' },
	];
	displayedColumns = ['created', 'nameUser', 'phoneUser', 'dniBuyer', 'nameBuyer', 'phoneBuyer', 'emailBuyer', 'locationBuyer', 'namePet', 'price', 'type'];

	constructor(private saleSrv: SaleService) {
		this.saleSrv.get().subscribe(res => {
			this.salesList = res
		});
	}

	ngOnInit(): void {
	}

}
