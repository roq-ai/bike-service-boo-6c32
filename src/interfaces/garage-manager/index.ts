import { UserInterface } from 'interfaces/user';
import { GarageInterface } from 'interfaces/garage';
import { GetQueryInterface } from 'interfaces';

export interface GarageManagerInterface {
  id?: string;
  user_id: string;
  managed_garage_id: string;
  manager_since?: any;
  manager_until?: any;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  garage?: GarageInterface;
  _count?: {};
}

export interface GarageManagerGetQueryInterface extends GetQueryInterface {
  id?: string;
  user_id?: string;
  managed_garage_id?: string;
}
