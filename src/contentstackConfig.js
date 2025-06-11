import * as contentstack from 'contentstack';

const Stack = contentstack.Stack({
  api_key: 'blt87a38a6427588401',
  delivery_token: 'csd2121e1f2e28c42dc0e4a56f',
  environment: 'development',
  region: contentstack.Region.AZURE_EU,
  host: 'azure-eu-cdn.contentstack.com'
});

export default Stack;
