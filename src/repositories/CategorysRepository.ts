import { EntityRepository, Repository } from 'typeorm';

import Category from '../models/Category';

@EntityRepository(Category)
class CategorysRepository extends Repository<Category> {
  public async lalala():Promise<void>{

  }

}

export default CategorysRepository;
