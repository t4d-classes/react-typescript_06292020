
import { Item } from '../models/Item';

export class RestService<T extends Item> {

  constructor(private baseUrl: string) {}

  async all() {

    const res = await fetch(this.baseUrl);
    const items = await res.json();

    return items as T[];
  }

  async append(item: T) {

    const res = await fetch(this.baseUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(item),
    });

    const addedItem = await res.json();

    return addedItem as T;
  }

  async replace(item: T) {

    const res = await fetch(this.baseUrl + '/' + encodeURIComponent(item.id!), {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(item),
    });

    const replacedItem = await res.json();

    return replacedItem as T;
  }

  async remove(itemId: number) {
    await fetch(this.baseUrl + '/' + encodeURIComponent(itemId), {
      method: 'DELETE',
    });
  }

}