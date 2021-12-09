import {Entity, model, property} from '@loopback/repository';

@model()
export class Artist extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
  })
  nom: string;

  @property({
    type: 'string',
    required: true,
  })
  description: string;

  @property({
    type: 'date',
    required: true,
  })
  heureDebut: string;

  @property({
    type: 'date',
    required: true,
  })
  heureFin: string;

  @property({
    type: 'number',
    required: true,
  })
  idEvent: number;


  constructor(data?: Partial<Artist>) {
    super(data);
  }
}

export interface ArtistRelations {
  // describe navigational properties here
}

export type ArtistWithRelations = Artist & ArtistRelations;
