import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MysqlDataSource} from '../datasources';
import {Artist, ArtistRelations} from '../models';

export class ArtistRepository extends DefaultCrudRepository<
  Artist,
  typeof Artist.prototype.id,
  ArtistRelations
> {
  constructor(
    @inject('datasources.Mysql') dataSource: MysqlDataSource,
  ) {
    super(Artist, dataSource);
  }
}
