interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Business Owner'],
  customerRoles: ['Customer'],
  tenantRoles: ['Business Owner', 'Garage Manager', 'Mechanic'],
  tenantName: 'Garage',
  applicationName: 'Bike service booking online',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [
    'Manage own information',
    'Read garage information',
    'Create bookings',
    'Read mechanic information',
  ],
  ownerAbilities: [
    'Manage business details',
    'Manage garage details',
    'Manage customer details',
    'Manage mechanic details',
  ],
  getQuoteUrl: 'https://app.roq.ai/proposal/9e458a4a-446a-48fe-b677-0bf823326cd4',
};
