

import {Component ,OnInit} from '@angular/core';
import {Service} from './app.service'

@Component({
	selector:"api-root",
	template:`<h1>Get data from api</h1>
	<h2>{{api}}</h2>
	`
})

export class apiComponent implements OnInit{
	api={};
	constructor(private _service:Service){}
	ngOnInit(){
		this._service.getEmployees().subscribe(apiData =>
			this.api=apiData

			)
					console.log("Check data",this.api)
	}

}

// export class apiComponent {
// 	api="Hello Yash"

// }