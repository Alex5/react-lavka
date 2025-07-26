import { DataSource } from 'typeorm';
import { StoreEntity } from '../../modules/store/store.entity';
import { CatalogEntity } from '../../modules/catalog/catalog.entity';
import config from '../../config/app.config';

const dataSource = new DataSource({
  ...config().database,
  entities: [StoreEntity, CatalogEntity],
  synchronize: false,
});

function seed() {
  console.log({ dataSource });
}

seed();
