import { TFunction } from "i18next";

const listItems=(t:TFunction)=>
 [
  {
    text: t('home'),
    linkTo: "home",
    icon: "home",
  },
  {
    text: t('about_me'),
    linkTo: "/about-me",
    icon: 'info'
  },
  {
    text: t('events'),
    linkTo: "/events",
    icon:'event_note'
  },
  {
    text: t('projects'),
    linkTo: "/projects",
    icon:'monetization_on'
  },
]

export default listItems;