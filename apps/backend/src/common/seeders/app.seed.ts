import { DataSource } from 'typeorm';
import data from './data.json';
import { StoreEntity } from '../../modules/store/store.entity';
import { CatalogEntity } from '../../modules/catalog/catalog.entity';
import { CategoryEntity } from '../../modules/category/category.entity';
import { ProductEntity } from '../../modules/product/product.entity'; // путь к твоему JSON

export default async function(dataSource: DataSource) {
  const storeRepo = dataSource.getRepository(StoreEntity);
  const catalogRepo = dataSource.getRepository(CatalogEntity);
  const categoryRepo = dataSource.getRepository(CategoryEntity);
  const productRepo = dataSource.getRepository(ProductEntity);

  // 1. Create store + catalog
  const catalog = catalogRepo.create({ name: 'Основной каталог' });
  const store = storeRepo.create({
    address: 'Москва, Лавка',
    catalog,
  });
  await storeRepo.save(store);

  // 2. Iterate categories
  for (const rawCategory of data.categories) {
    const category = categoryRepo.create({
      name: rawCategory.value.title,
      catalog,
    });

    await categoryRepo.save(category);

    // 3. Iterate items (products)
    for (const rawItem of rawCategory.items) {
      // @ts-ignore
      if (!rawItem.value || !rawItem.value.title || !rawItem.value.pricing?.price) continue;

      const product = productRepo.create({
        name: rawItem.value.title.replace(/<[^>]+>/g, ''),
        // @ts-ignore
        price: parseInt(rawItem.value.pricing.price, 10),
      });

      await productRepo.save(product);
    }
  }

  console.log('Seeding complete!');
}