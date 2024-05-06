import { RiPhoneFill,RiPhoneLine} from "react-icons/ri";

export const footerData = [
  {
    id: 1,
    title: "Hacé click y comunicate!",
    links: [
      {
        id: 1,
        name: "Volver al contenido",
        link: "#",
      },
      {
        id: 2,
        name: "Comunicate por whatsapp",
        link: "https://wa.me/542215985797",
      },
      {
        id: 3,
        name: "Comunicate por whatsapp 2  ",
        link: "https://wa.me/542215529308",
      },
      {
        id: 4,
        name: "Envia un mail: \n    starseareseguridadprivada@gmail.com",
        link: "mailto:starseareseguridadprivada@gmail.com" ,
      }
    ],
  }
];

export const footerSocialNetworks = [
  {
    id: 1,
    icon: <RiPhoneFill/>,
    link: "tel:+542215985797"
  },
  {
    id: 1,
    icon: <RiPhoneLine/>,
    link: "tel:+542215529308"
  }

];
