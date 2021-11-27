
import { POKEMONS } from './../models/pokemons';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ChartDataSets, ChartType, RadialChartOptions } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss']
})
export class PokemonDetailComponent implements OnInit {
  pokemons = POKEMONS;
  pokemon: any;

  constructor(
    private route: ActivatedRoute
  ) { }

  public radarChartOptions: RadialChartOptions = {
    legend: {
      display: false
    },
    responsive: true,
  };

  public radarChartLabels: Label[] = [
    'HP',
    'こうげき',
    'ぼうぎょ',
    'すばやさ',
    'とくこう',
    'とくぼう',
  ];

  public radarChartData: ChartDataSets[] = [];

  public radarChartType: ChartType = 'radar';

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = +params.get('id')!;
      this.pokemon = this.pokemons[id - 1];
      this.radarChartData.push({
        data: [
          this.pokemon.base.HP,
          this.pokemon.base.Attack,
          this.pokemon.base.Defense,
          this.pokemon.base.Speed,
          this.pokemon.base.SpAttack,
          this.pokemon.base.SpDefense,
        ]
      });
    });
  }
}
