import 'react-i18next';
import { resources } from 'translations/i18n';

declare module 'react-i18next' {
  type DefaultResources = typeof resources['en'];
  type Resources = DefaultResources;
}