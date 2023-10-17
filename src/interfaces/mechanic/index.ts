import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface MechanicInterface {
  id?: string;
  user_id: string;
  specialization?: string;
  experience?: number;
  rating?: number;
  availability?: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  _count?: {};
}

export interface MechanicGetQueryInterface extends GetQueryInterface {
  id?: string;
  user_id?: string;
  specialization?: string;
  availability?: string;
}
