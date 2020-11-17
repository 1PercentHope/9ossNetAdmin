import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DataService {
seats = [
{id: "00022",
Number: 22,
type: "enceinte sup",
availability: true 
},
{id: "00023",
Number: 23,
type: "enceinte sup",
availability: true 
},
{id: "00024",
Number: 213,
type: "enceinte sup",
availability: false 
}
];
events= [
  {id: 1, homeTeam: 'CA', awayTeam: 'CSS', place: 'Sousse',category: 'CUP' , date: '20/01/2020', description: 'final round' },
  {id: 1, homeTeam: 'UST', awayTeam: 'ESS', place: 'Tunis',category: 'League 1' , date: '20/10/2020', description: 'Round 10' },
  {id: 1, homeTeam: 'CSS', awayTeam: 'EST', place: 'Sfax',category: 'League 1' , date: '2/03/2020', description: 'Round 12' }
]

  constructor() { }

}

