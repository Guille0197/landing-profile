import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        name: "Guillermo Navarro",
        bio: "Skilled web developer with a knack for transforming designs into dynamic and user-friendly websites.",
        buttonBioText: "Website & Portfolio",
        titleChit: "1 on 1 Chit-chat Session",
        descriptionChit: "Let's find some time to talk about anything!",
        minutes30: "30 Minutes",
        googleMeet: "Google Meet",
        servicesTitleSection: "Services",
        serviceTitle1: "Web Experience Engineering",
        descriptionService1:
          "Turning your vision into high-performance websites using cutting-edge web technologies.",
        serviceTitle2: "Next-Level Mobile Applications",
        descriptionService2:
          "Building engaging and intuitive mobile applications leveraging the flexibility of React Native or Ionic.",
        serviceTitle3: "Tech-Driven Business Consulting",
        descriptionService3:
          "Providing insightful recommendations to propel your business into the digital future.",
        feedbackTitleSection: "Client Feedback",
        feedbackClient:
          "Guillermo was very communicative and gets the job done. He is willing to learn and also give thoughtful suggestions.",
        viewMore: "View more",
        technicalSkills: "Technical Skills",
        getTouch: "Get in Touch",
        dropEmail: "Drop me an Email",
        email: "info@gnavarro.com",
        contactMessage:
          "Expect my rapid and eager reply - your message won't be kept waiting!",
      },
    },
    es: {
      translation: {
        name: "Guillermo Navarro",
        bio: "Desarrollador web con experiencia en convertir diseños en sitios web dinámicos y atractivos para los usuarios.",
        buttonBioText: "Sitio web y Portafolio",
        titleChit: "Sesión de charla 1 a 1",
        descriptionChit: "Encontremos un momento para hablar de cualquier cosa",
        minutes30: "30 Minutos",
        googleMeet: "Google Meet",
        servicesTitleSection: "Servicios",
        serviceTitle1: "Ingeniería de Experiencia Web",
        descriptionService1:
          "Transformando tu visión en sitios web de alto rendimiento utilizando tecnologías web de vanguardia.",
        serviceTitle2: "Aplicaciones Móviles de Última Generación",
        descriptionService2:
          "Construyendo aplicaciones móviles atractivas e intuitivas aprovechando la flexibilidad de React Native o Ionic.",
        serviceTitle3: "Consultoría Empresarial Impulsada por la Tecnología",
        descriptionService3:
          "Proporcionando recomendaciones perspicaces para impulsar tu negocio hacia el futuro digital.",
        feedbackTitleSection: "Opiniones de Clientes",
        feedbackClient:
          "Guillermo fue muy comunicativo y realiza el trabajo. Está dispuesto a aprender y también ofrece sugerencias reflexivas.",
        viewMore: "Ver más",
        technicalSkills: "Habilidades técnicas",
        getTouch: "Ponte en contacto",
        dropEmail: "Envíame un correo electrónico",
        email: "info@gnavarro.com",
        contactMessage:
          "Espera mi respuesta rápida y entusiasta; ¡tu mensaje no será ignorado!",
      },
    },
  },
  fallbackLng: "en",
  debug: true,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
