import { Injectable } from '@nestjs/common';

@Injectable()
export class CategoryService {
  getAllCategories() {
    return [
      { id: 1, name: 'Electronics' },
      { id: 2, name: 'Books' },
      { id: 3, name: 'Clothing' },
    ];
  }
}
