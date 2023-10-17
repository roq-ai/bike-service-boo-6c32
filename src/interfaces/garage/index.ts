import { GarageManagerInterface } from 'interfaces/garage-manager';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface GarageInterface {
  id?: string;
  description?: string;
  location?: string;
  opening_hours?: string;
  closing_hours?: string;
  name: string;
  created_at?: any;
  updated_at?: any;
  user_id: string;
  tenant_id: string;
  garage_manager?: GarageManagerInterface[];
  user?: UserInterface;
  _count?: {
    garage_manager?: number;
  };
}

export interface GarageGetQueryInterface extends GetQueryInterface {
  id?: string;
  description?: string;
  location?: string;
  opening_hours?: string;
  closing_hours?: string;
  name?: string;
  user_id?: string;
  tenant_id?: string;
}
