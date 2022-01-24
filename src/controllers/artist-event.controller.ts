import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  Artist,
  Event,
} from '../models';
import {ArtistRepository} from '../repositories';

export class ArtistEventController {
  constructor(
    @repository(ArtistRepository)
    public artistRepository: ArtistRepository,
  ) { }

  @get('/artists/{id}/event', {
    responses: {
      '200': {
        description: 'Event belonging to Artist',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Event)},
          },
        },
      },
    },
  })
  async getEvent(
    @param.path.number('id') id: typeof Artist.prototype.id,
  ): Promise<Event> {
    return this.artistRepository.event(id);
  }
}
