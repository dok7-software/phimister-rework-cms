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

export interface HomeCtaAgendarLlamada extends Struct.ComponentSchema {
  collectionName: 'components_home_cta_agendar_llamadas';
  info: {
    description: 'Secci\u00F3n Schedule Call CTA';
    displayName: 'CTA Agendar Llamada';
  };
  attributes: {
    ctaAgendarLlamada: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    descripcionAgendarLlamada: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    tituloAgendarLlamada: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
  };
}

export interface HomeCtaFinal extends Struct.ComponentSchema {
  collectionName: 'components_home_cta_finals';
  info: {
    description: 'Secci\u00F3n Final CTA - Plazas limitadas';
    displayName: 'CTA Final';
  };
  attributes: {
    ctaPrincipalFinal: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    ctaSecundarioFinal: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    descripcionCtaFinal: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    insigniaCtaFinal: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    tituloCtaFinal: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
  };
}

export interface HomeEstadisticaInternacional extends Struct.ComponentSchema {
  collectionName: 'components_home_estadisticas_internacionales';
  info: {
    description: 'Una estad\u00EDstica (valor + etiqueta) de la secci\u00F3n Experiencia Internacional';
    displayName: 'Estad\u00EDstica Internacional';
  };
  attributes: {
    etiqueta: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    valor: Schema.Attribute.String & Schema.Attribute.Required;
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

export interface HomeSeccionExperienciaInternacional
  extends Struct.ComponentSchema {
  collectionName: 'components_home_seccion_experiencia_internacionals';
  info: {
    description: 'Experiencia Internacional - Alcance global';
    displayName: 'Secci\u00F3n Experiencia Internacional';
  };
  attributes: {
    descripcionInternacional: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    descripcionRedInternacional1: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    descripcionRedInternacional2: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    estadisticasInternacionales: Schema.Attribute.Component<
      'home.estadistica-internacional',
      true
    > &
      Schema.Attribute.Required;
    etiquetaSeccionInternacional: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    tituloInternacional: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    tituloRedInternacional: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
  };
}

export interface HomeSeccionFilosofia extends Struct.ComponentSchema {
  collectionName: 'components_home_seccion_filosofias';
  info: {
    description: 'Nuestra Filosof\u00EDa - Valores';
    displayName: 'Secci\u00F3n Filosof\u00EDa';
  };
  attributes: {
    etiquetaSeccionFilosofia: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    tituloFilosofia: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    valoresFilosofia: Schema.Attribute.Component<'home.valor-filosofia', true> &
      Schema.Attribute.Required;
  };
}

export interface HomeValorFilosofia extends Struct.ComponentSchema {
  collectionName: 'components_home_valores_filosofia';
  info: {
    description: 'Un valor de la secci\u00F3n Nuestra Filosof\u00EDa';
    displayName: 'Valor Filosof\u00EDa';
  };
  attributes: {
    descripcion: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    titulo: Schema.Attribute.Text &
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

export interface SobreNosotrosCoordenadas extends Struct.ComponentSchema {
  collectionName: 'components_sobre_nosotros_coordenadas';
  info: {
    displayName: 'Coordenadas';
  };
  attributes: {
    latitud: Schema.Attribute.Decimal;
    longitud: Schema.Attribute.Decimal;
  };
}

export interface SobreNosotrosCta extends Struct.ComponentSchema {
  collectionName: 'components_sobre_nosotros_ctas';
  info: {
    displayName: 'CTA';
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

export interface SobreNosotrosEquipo extends Struct.ComponentSchema {
  collectionName: 'components_sobre_nosotros_equipos';
  info: {
    displayName: 'Equipo';
  };
  attributes: {
    subtitulo: Schema.Attribute.Text &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    titulo: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
  };
}

export interface SobreNosotrosExperienciaInternacional
  extends Struct.ComponentSchema {
  collectionName: 'components_sobre_nosotros_experiencia_internacionals';
  info: {
    displayName: 'Experiencia Internacional';
  };
  attributes: {
    contenido: Schema.Attribute.RichText &
      Schema.Attribute.Required &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    hitos: Schema.Attribute.Component<'sobre-nosotros.hito', true>;
    imagen: Schema.Attribute.Media<'images'>;
    titulo: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    ubicaciones: Schema.Attribute.Component<'sobre-nosotros.ubicacion', true>;
  };
}

export interface SobreNosotrosHeroSobreNosotros extends Struct.ComponentSchema {
  collectionName: 'components_sobre_nosotros_hero_sobre_nosotros';
  info: {
    displayName: 'Hero Sobre Nosotros';
  };
  attributes: {
    cta: Schema.Attribute.Component<'sobre-nosotros.cta', false>;
    imagen: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    subtitulo: Schema.Attribute.Text &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    titulo: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
  };
}

export interface SobreNosotrosHighlight extends Struct.ComponentSchema {
  collectionName: 'components_sobre_nosotros_highlights';
  info: {
    displayName: 'Highlight';
  };
  attributes: {
    icono: Schema.Attribute.String;
    texto: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
  };
}

export interface SobreNosotrosHito extends Struct.ComponentSchema {
  collectionName: 'components_sobre_nosotros_hitos';
  info: {
    displayName: 'Hito';
  };
  attributes: {
    descripcion: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    icono: Schema.Attribute.String;
    orden: Schema.Attribute.Integer & Schema.Attribute.Required;
    titulo: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    valor: Schema.Attribute.String;
  };
}

export interface SobreNosotrosPartners extends Struct.ComponentSchema {
  collectionName: 'components_sobre_nosotros_partners';
  info: {
    displayName: 'Partners';
  };
  attributes: {
    subtitulo: Schema.Attribute.Text &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    titulo: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
  };
}

export interface SobreNosotrosSobrePhimister extends Struct.ComponentSchema {
  collectionName: 'components_sobre_nosotros_sobre_phimisters';
  info: {
    displayName: 'Sobre Phimister';
  };
  attributes: {
    contenido: Schema.Attribute.RichText &
      Schema.Attribute.Required &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    highlights: Schema.Attribute.Component<'sobre-nosotros.highlight', true>;
    imagenes: Schema.Attribute.Media<'images', true>;
    titulo: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
  };
}

export interface SobreNosotrosUbicacion extends Struct.ComponentSchema {
  collectionName: 'components_sobre_nosotros_ubicaciones';
  info: {
    displayName: 'Ubicaci\u00F3n';
  };
  attributes: {
    bandera: Schema.Attribute.String;
    ciudad: Schema.Attribute.String;
    coordenadas: Schema.Attribute.Component<
      'sobre-nosotros.coordenadas',
      false
    >;
    descripcion: Schema.Attribute.Text &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    pais: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'home.carrusel-hero': HomeCarruselHero;
      'home.cta-agendar-llamada': HomeCtaAgendarLlamada;
      'home.cta-final': HomeCtaFinal;
      'home.estadistica-internacional': HomeEstadisticaInternacional;
      'home.hero-home': HomeHeroHome;
      'home.seccion-experiencia-internacional': HomeSeccionExperienciaInternacional;
      'home.seccion-filosofia': HomeSeccionFilosofia;
      'home.valor-filosofia': HomeValorFilosofia;
      'home.video-carrusel': HomeVideoCarrusel;
      'programa.cta-programa': ProgramaCtaPrograma;
      'programa.objetivo-aprendizaje': ProgramaObjetivoAprendizaje;
      'programa.pregunta-frecuente': ProgramaPreguntaFrecuente;
      'programa.video-masterclass': ProgramaVideoMasterclass;
      'sobre-nosotros.coordenadas': SobreNosotrosCoordenadas;
      'sobre-nosotros.cta': SobreNosotrosCta;
      'sobre-nosotros.equipo': SobreNosotrosEquipo;
      'sobre-nosotros.experiencia-internacional': SobreNosotrosExperienciaInternacional;
      'sobre-nosotros.hero-sobre-nosotros': SobreNosotrosHeroSobreNosotros;
      'sobre-nosotros.highlight': SobreNosotrosHighlight;
      'sobre-nosotros.hito': SobreNosotrosHito;
      'sobre-nosotros.partners': SobreNosotrosPartners;
      'sobre-nosotros.sobre-phimister': SobreNosotrosSobrePhimister;
      'sobre-nosotros.ubicacion': SobreNosotrosUbicacion;
    }
  }
}
