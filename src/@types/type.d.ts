export interface Product {
  items: Item[];
  page: number;
  perPage: number;
  totalItems: number;
  totalPages: number;
}

export interface Item {
  brand: string;
  collectionId: string;
  collectionName: string;
  created: Date;
  descripiton: string;
  id: string;
  photo: string;
  price: number;
  type: string;
  updated: Date;
  [key: string]: string;
}

export interface Record {
  avatar: string;
  collectionId: string;
  collectionName: string;
  created: string;
  email: string;
  emailVisibility: boolean;
  id: string;
  name: string;
  updated: string;
  verified: boolean;
}

export interface Auth {
  isAuth: boolean;
  token: string;
  user: Record;
}
