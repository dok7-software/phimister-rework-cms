import type { Schema, Struct } from '@strapi/strapi';

export interface HomeCarruselHero extends Struct.ComponentSchema {
  collectionName: 'components_home_carrusel_heroes';
  info: {
    displayName: 'CarruselHero';
  };
  attributes: {
    videosCarrusel: Schema.Attribute.Component<'home.video-carrusel', true> &
      Schema.Attribute.Required;
  };
}

export interface HomeHeroHome extends Struct.ComponentSchema {
  collectionName: 'components_home_hero_homes';
  info: {
    displayName: 'HeroHome';
  };
  attributes: {
    ctaPrincipalHero: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    ctaSecundarioHero: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    descripcionHero: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    imagenFondoHero: Schema.Attribute.Media<'images'>;
    insigniaHero: Schema.Attribute.String & Schema.Attribute.Required;
    subtituloHero: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    tituloDestacadoHero: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    tituloHero: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
  };
}

export interface HomeVideoCarrusel extends Struct.ComponentSchema {
  collectionName: 'components_home_video_carrusels';
  info: {
    displayName: 'VideoCarrusel';
  };
  attributes: {
    descripcion: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    empresa: Schema.Attribute.String;
    nombre: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    orden: Schema.Attribute.Integer & Schema.Attribute.Required;
    video: Schema.Attribute.Media<'videos'> & Schema.Attribute.Required;
  };
}

export interface ProgramaCtaPrograma extends Struct.ComponentSchema {
  collectionName: 'components_programa_cta_programas';
  info: {
    displayName: 'CtaPrograma';
  };
  attributes: {
    texto: Schema.Attribute.Text &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    tipo: Schema.Attribute.Enumeration<['primary', 'secondary']>;
    url: Schema.Attribute.String;
  };
}

export interface ProgramaObjetivoAprendizaje extends Struct.ComponentSchema {
  collectionName: 'components_programa_objetivo_aprendizajes';
  info: {
    displayName: 'ObjetivoAprendizaje';
  };
  attributes: {
    badge: Schema.Attribute.String;
    descripcion: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    icono: Schema.Attribute.String;
    orden: Schema.Attribute.Integer;
    titulo: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
  };
}

export interface ProgramaPreguntaFrecuente extends Struct.ComponentSchema {
  collectionName: 'components_programa_pregunta_frecuentes';
  info: {
    displayName: 'PreguntaFrecuente';
  };
  attributes: {
    orden: Schema.Attribute.Integer;
    pregunta: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    respuesta: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
  };
}

export interface ProgramaVideoMasterclass extends Struct.ComponentSchema {
  collectionName: 'components_programa_video_masterclasses';
  info: {
    displayName: 'VideoMasterclass';
  };
  attributes: {
    embedId: Schema.Attribute.String;
    plataforma: Schema.Attribute.Enumeration<['youtube', 'vimeo', 'uploaded']>;
    url: Schema.Attribute.String;
    video: Schema.Attribute.Media<'videos'>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'home.carrusel-hero': HomeCarruselHero;
      'home.hero-home': HomeHeroHome;
      'home.video-carrusel': HomeVideoCarrusel;
      'programa.cta-programa': ProgramaCtaPrograma;
      'programa.objetivo-aprendizaje': ProgramaObjetivoAprendizaje;
      'programa.pregunta-frecuente': ProgramaPreguntaFrecuente;
      'programa.video-masterclass': ProgramaVideoMasterclass;
    }
  }
}
