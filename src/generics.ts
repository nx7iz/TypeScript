// // Generic classes
// class KeyValuePair<K, V> {
//   constructor(public key: K, public value: V) {}
// }

// let pair = new KeyValuePair("1", "a");
// pair.key;

// // Generic function
// class ArrayUtils {
//   static wrapInArray<T>(value: T) {
//     return [value];
//   }
// }

// let numbers = ArrayUtils.wrapInArray(1);

// // Generic interface
// // https://mywebsite.com/users
// // https://mywebsite.com/products

// // interface Result<T> {
// //   data: T | null;
// //   error: string | null;
// // }

// // function fetch<T>(url: string): Result<T> {
// //   return { data: null, error: null };
// // }

// // interface User {
// //   username: string;
// // }

// // interface Product {
// //   title: string;
// // }

// // let result = fetch<Product>("url");
// // result.data?.title

// // Generic constraints

// // class Person {
// //   constructor(public name: string) {}
// // }

// // class Customer extends Person {}

// // function echo<T extends Person>(value: T): T {
// //   return value;
// // }

// // echo(new Customer("a"));
// // echo(new Person("a"));

// // Extending Generic classes
// interface Product {
//   name: string;
//   price: number;
// }

// class Store<T> {
//   protected _objects: T[] = [];

//   add(obj: T): void {
//     this._objects.push(obj);
//   }
// }

// // 1. Pass on the generic type parameter
// // class CompressibleStore<T> extends Store<T> {
// //   compress() {}
// // }

// // let store = new CompressibleStore<Product>();
// // store.compress();

// class CompressibleStore<T> extends Store<T> {
//   compress() {}
// }

// // 2/ Restrict the generic type parameter
// class SearchableStore<T extends { name: string }> extends Store<T> {
//   find(name: string): T | undefined {
//     return this._objects.find((obj) => obj.name === name);
//   }
// }

// 3. Fix or terminate the generic type parameter
// class ProductStore extends Store<Product> {
//   filterByCategory(category: string): Product[] {
//     return [];
//   }
// }

// The KeoOf Operator
// interface Product {
//   name: string;
//   price: number;
// }

// class Store<T> {
//   protected _objects: T[] = [];

//   add(obj: T): void {
//     this._objects.push(obj);
//   }
//   // T is Product
//   // keyof T => 'name' | 'price'
//   find(property: keyof T, value: unknown): T | undefined {
//     return this._objects.find((obj) => obj[property] === value);
//   }
// }

// let store = new Store<Product>();
// store.add({ name: "a", price: 1 });
// store.find("name", "a");
// store.find("price", 1);
// store.find();

// Type Mapping
interface Product {
  name: string;
  price: number;
}

type ReadOnly<T> = {
  // readonly [Property in keyof Product]: Product[Property];
  readonly [K in keyof T]: T[K];
};

type Optional<T> = {
  [K in keyof T]?: T[K];
};

let product: ReadOnly<Product> = {
  name: "a",
  price: 1,
};

console.log(product.name);