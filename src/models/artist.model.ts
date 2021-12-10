import {Entity, model, property, belongsTo} from '@loopback/repository';
import {Event} from './event.model';

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

  @belongsTo(() => Event, {name: 'event'})
  idEvent: number;

  constructor(data?: Partial<Artist>) {
    super(data);
  }
}

export interface ArtistRelations {
  // describe navigational properties here
}

export type ArtistWithRelations = Artist & ArtistRelations;
