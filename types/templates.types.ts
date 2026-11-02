export interface HeaderNavLink {
  id: string;
  label: string;
  url: string;
  hasDropdown?: boolean;
}

export interface HeaderData {
  logo: string;
  logoAlt: string;
  navLinksLeft: HeaderNavLink[];
  navLinksRight: HeaderNavLink[];
  contactButton: { text: string; url: string };
}

export interface HeaderProps {
  data?: HeaderData;
}

export interface TopBarData {
  tagline: string;
  taglineIcon: string;
  phoneValue: string;
  emailValue: string;
  locationValue: string;
  socialLinks?: { id: string; icon: string; url: string }[];
}

export interface TopBarProps {
  data?: TopBarData;
}

export interface HeroButtonData {
  text: string;
  url: string;
  icon: string;
}

export interface HeroSlide {
  id: string;
  number: string;
  titleLine1: string;
  titleLine2: string;
  highlightedTitle: string;
  titleLine3: string;
  description: string;
  image: string;
  imageAlt: string;
  primaryButton: HeroButtonData;
  secondaryButton?: HeroButtonData;
}

export interface HeroData {
  previousSlideLabel: string;
  nextSlideLabel: string;
  counterSeparator: string;
  autoplayDelay: number;
  slides: HeroSlide[];
}

export interface HeroProps {
  data?: HeroData;
}

export interface AboutProgressItem {
  id: string;
  percentage: number;
  label: string;
}

export interface AboutFeatureItem {
  id: string;
  icon: string;
  label: string;
}

export interface AboutButtonData {
  text: string;
  url: string;
}

export interface AboutSupportData {
  icon: string;
  label: string;
  value: string;
  url: string;
}

export interface AboutUsData {
  subtitle: string;
  title1: string;
  highlightedTitle: string;
  title2: string;
  description: string;
  imageMain: string;
  imageMainAlt: string;
  imageSecondary: string;
  imageSecondaryAlt: string;
  experienceValue: string;
  experienceLabel: string;
  progressItems: AboutProgressItem[];
  features: AboutFeatureItem[];
  button: AboutButtonData;
  support: AboutSupportData;
}

export interface AboutUsProps {
  data?: AboutUsData;
  hideButton?: boolean;
}

export interface AboutProgressCircleProps {
  item: AboutProgressItem;
  isVisible: boolean;
}

export interface ServiceItem {
  id: string;
  icon: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  url: string;
}

export interface ServicesData {
  subtitle: string;
  title1: string;
  title2: string;
  description: string;
  linkText: string;
  services: ServiceItem[];
}

export interface ServicesProps {
  data?: ServicesData;
  isSlider?: boolean;
}

export interface ServiceCardProps {
  service: ServiceItem;
  linkText: string;
}

export interface WhyChooseUsFeature {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export interface WhyChooseUsData {
  subtitle: string;
  title1: string;
  title2: string;
  description: string;
  imageMain: string;
  imageAlt: string;
  button: {
    text: string;
    url: string;
  };
  showButton?: boolean;
  features: WhyChooseUsFeature[];
}

export interface WhyChooseUsProps {
  data?: WhyChooseUsData;
}

export interface ProcessStep {
  id: string;
  icon: string;
  number: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
}

export interface ProcessData {
  subtitle: string;
  title1: string;
  title2: string;
  description: string;
  steps: ProcessStep[];
}

export interface ProcessProps {
  data?: ProcessData;
}

export interface TestimonialItem {
  id: string;
  name: string;
  location: string;
  quote: string;
  rating: number;
  avatar: string;
}

export interface TestimonialsData {
  subtitle: string;
  title1: string;
  title2: string;
  description: string;
  previousLabel: string;
  nextLabel: string;
  slideLabel: string;
  testimonials: TestimonialItem[];
}

export interface TestimonialsProps {
  data?: TestimonialsData;
}

export interface TeamMemberSocialLink {
  id: string;
  icon: string;
  label: string;
  url: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  description: string;
  image: string;
  imageAlt: string;
  socialLinks: TeamMemberSocialLink[];
}

export interface TeamData {
  subtitle: string;
  title1: string;
  highlightedTitle: string;
  description: string;
  members: TeamMember[];
}

export interface TeamProps {
  data?: TeamData;
}

export interface ContactHighlight {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export interface ContactServiceOption {
  id: string;
  label: string;
  value: string;
}

export interface ContactInfoLine {
  id: string;
  text: string;
}

export interface ContactInfoItem {
  id: string;
  icon: string;
  title: string;
  lines: ContactInfoLine[];
}

export interface ContactData {
  intro: {
    eyebrow: string;
    title: string;
    titleHighlight: string;
    description: string;
    highlights: ContactHighlight[];
  };
  form: {
    eyebrow: string;
    helperText: string;
    fullNamePlaceholder: string;
    phonePlaceholder: string;
    emailPlaceholder: string;
    servicePlaceholder: string;
    messagePlaceholder: string;
    buttonText: string;
    privacyText: string;
    successMessage: string;
    servicesList: ContactServiceOption[];
  };
  contactPanel: {
    eyebrow: string;
    title1: string;
    titleHighlight: string;
    description: string;
    items: ContactInfoItem[];
  };
  location: {
    eyebrow: string;
    title: string;
    description: string;
    buttonText: string;
    buttonUrl: string;
    mapUrl: string;
    mapTitle: string;
  };
}

export interface ContactProps {
  data?: ContactData;
}

export interface FooterSocialLink {
  id: string;
  icon: string;
  label: string;
  url: string;
}

export interface FooterQuickLink {
  id: string;
  label: string;
  url: string;
}

export interface FooterContactInfo {
  email: string;
  phone: string;
  address: string;
}

export interface FooterData {
  logo: string;
  logoAlt: string;
  logoUrl: string;
  brandTitle: string;
  copyrightText: string;
  description: string;
  quickLinksTitle: string;
  contactTitle: string;
  socialLinks: FooterSocialLink[];
  quickLinks: FooterQuickLink[];
  contactInfo: FooterContactInfo;
}

export interface FooterProps {
  data?: FooterData;
}

export interface NotFoundData {
  code: string;
  title: string;
  description: string;
  buttonText: string;
  buttonUrl: string;
}

export interface ComponentConfig {
  key: string;
  component: string;
}

export interface TemplateComponentsData {
  shared: {
    Topbar: string;
    Header: string;
    Footer: string;
  };
  pages: {
    home: {
      components: ComponentConfig[];
    };
  };
}

export interface PageComponentRegistry {
  components: string[];
}

export interface StockBrokerTemplateData {
  common: {
    notFound?: NotFoundData;
    Footer?: FooterData;
  };
  categories: {
    StockBroker: {
      templateComponents?: TemplateComponentsData;
      sections: {
        TopBar?: { variants?: { StockBrokerTopBar2?: TopBarData } };
        Header?: { variants?: { StockBrokerHeader2?: HeaderData } };
        Hero?: { variants?: { StockBrokerHero2?: HeroData } };
        AboutUs?: { variants?: { StockBrokerAboutUs2?: AboutUsData } };
        Services?: { variants?: { StockBrokerServices2?: ServicesData } };
        whyChooseUs?: { variants?: { StockBrokerWhyChooseUs2?: WhyChooseUsData } };
        Process?: { variants?: { StockBrokerProcess2?: ProcessData } };
        Testimonials?: { variants?: { StockBrokerTestimonials2?: TestimonialsData } };
        Team?: { variants?: { StockBrokerTeam2?: TeamData } };
        contact?: { variants?: { StockBrokerContact2?: ContactData } };
      };
    };
  };
  pages?: Record<string, PageComponentRegistry>;
}

