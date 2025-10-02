import { c as createComponent, r as renderComponent, a as renderTemplate, F as Fragment, m as maybeRenderHead } from '../chunks/astro/server_CwCVLbYD.mjs';
import 'kleur/colors';
import { $ as $$Features3 } from '../chunks/Features3_CO0X7Ogl.mjs';
import { $ as $$Hero } from '../chunks/Hero_CJxMa8oS.mjs';
import { $ as $$Stats } from '../chunks/Stats_DDpon4cc.mjs';
import { $ as $$Steps2 } from '../chunks/Steps2_BsdFZ-76.mjs';
import { $ as $$PageLayout } from '../chunks/PageLayout_BzyfVHRT.mjs';
export { renderers } from '../renderers.mjs';

const $$About = createComponent(($$result, $$props, $$slots) => {
  const metadata = {
    title: "Equipa - Porto de Abrigo"
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$PageLayout, { "metadata": metadata }, { "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "Hero", $$Hero, { "tagline": "Nossa Equipa", "image": {
    src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    alt: "Equipa Porto de Abrigo"
  } }, { "bg": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "bg" }, { "default": ($$result4) => renderTemplate` ${maybeRenderHead()}<div class="absolute inset-0 bg-porto-coral/10 dark:bg-transparent"></div> ` })}`, "subtitle": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "subtitle" }, { "default": ($$result4) => renderTemplate`
Uma equipa experiente e comprometida que une a sabedoria adquirida ao longo de décadas de serviço ao escutismo 
      com a energia e criatividade da juventude. Cada candidato traz consigo um percurso sólido e uma visão clara 
      para o futuro da Região do Porto.
` })}`, "title": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "title" }, { "default": ($$result4) => renderTemplate`
Conheça a <span class="text-porto-purple dark:text-porto-purple">Equipa Porto de Abrigo</span> <br> <span class="text-porto-yellow dark:text-porto-yellow">Candidatura JRP 2025-2028</span> ` })}` })}  ${renderComponent($$result2, "Stats", $$Stats, { "title": "A nossa experi\xEAncia em n\xFAmeros", "stats": [
    { title: "Anos de Experi\xEAncia Acumulada", amount: "200+" },
    { title: "Candidatos", amount: "8" },
    { title: "Distin\xE7\xF5es Escutistas", amount: "15+" },
    { title: "Cargos Exercidos", amount: "50+" }
  ] }, { "bg": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "bg" }, { "default": ($$result4) => renderTemplate` <div class="absolute inset-0 bg-porto-coral/10 dark:bg-transparent"></div> ` })}` })}  ${renderComponent($$result2, "Features3", $$Features3, { "title": "Lideran\xE7a Regional", "subtitle": "Os candidatos que ir\xE3o liderar a Regi\xE3o do Porto no tri\xE9nio 2025-2028, com d\xE9cadas de experi\xEAncia e uma vis\xE3o clara para o futuro.", "columns": 2, "isBeforeContent": true, "items": [
    {
      title: "Ant\xF3nio Jos\xE9 Ferreira Soares da Cofla",
      description: "Candidato a Chefe Regional. Entrada no movimento em 1982, atualmente Adjunto do Chefe de N\xFAcleo Cidade do Porto. Distin\xE7\xF5es: Cruz S. Jorge 1\xAA Classe \u2013 Ouro, Louvor Nacional.",
      icon: "tabler:crown"
    },
    {
      title: "Vera Sofia Ferreira Moreira",
      description: "Candidata a Chefe Regional Adjunto. Engenheira de Software, Chefe de N\xFAcleo Este, Formadora e Diretora de Forma\xE7\xE3o do CNE. Distin\xE7\xF5es: Cruz de S. Jorge de 1\xAA Classe.",
      icon: "tabler:user-star"
    }
  ] }, { "bg": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "bg" }, { "default": ($$result4) => renderTemplate` <div class="absolute inset-0 bg-porto-coral/10 dark:bg-transparent"></div> ` })}` })}  ${renderComponent($$result2, "Features3", $$Features3, { "title": "Secret\xE1rios Regionais", "subtitle": "Uma equipa especializada de secret\xE1rios regionais com experi\xEAncia comprovada em diferentes \xE1reas de gest\xE3o e desenvolvimento.", "columns": 3, "isAfterContent": true, "items": [
    {
      title: "Pedro S\xE9rgio Moreira",
      description: "Secret\xE1rio Regional para os Adultos. Chefe de N\xFAcleo Litoral, Formador do CNE e Diretor do MISC. Distin\xE7\xF5es: Cruz de S\xE3o Jorge 2\xBA classe.",
      icon: "tabler:school"
    },
    {
      title: "Carla Sofia Dias",
      description: "Secret\xE1ria Regional para o Desenvolvimento. T\xE9cnica Superior Jurista, Chefe Adjunta do N\xFAcleo Terras de Santa Maria.",
      icon: "tabler:growth"
    },
    {
      title: "Maria de F\xE1tima Cam\xF5es",
      description: "Secret\xE1ria Regional para a Gest\xE3o Administrativa e Recursos Humanos. Gestora de cr\xE9dito, atualmente Chefe de N\xFAcleo Centro Norte.",
      icon: "tabler:users"
    },
    {
      title: "Ant\xF3nio Alberto Alves",
      description: "Secret\xE1rio Regional para Gest\xE3o Financeira. Distin\xE7\xF5es: Cruz de S. Jorge 1\xAA Classe. Vasta experi\xEAncia como Secret\xE1rio Regional Pedag\xF3gico.",
      icon: "tabler:calculator"
    },
    {
      title: "Rui Daniel Cafaro",
      description: "Secret\xE1rio Regional para o Patrim\xF3nio. Secret\xE1rio Administrativo de N\xFAcleo Norte e Chefe de Agrupamento Adjunto.",
      icon: "tabler:building"
    },
    {
      title: "Cristiano Manuel Pereira",
      description: "Secret\xE1rio Regional Pedag\xF3gico. Diretor executivo, atualmente Chefe de Agrupamento e Interlocutor Internacional da JRP.",
      icon: "tabler:book"
    }
  ], "image": {
    src: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80",
    alt: "Secret\xE1rios Regionais"
  } }, { "bg": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "bg" }, { "default": ($$result4) => renderTemplate` <div class="absolute inset-0 bg-porto-coral/10 dark:bg-transparent"></div> ` })}` })}  ${renderComponent($$result2, "Steps2", $$Steps2, { "title": "Os nossos valores", "subtitle": "Os princ\xEDpios fundamentais que orientam a nossa candidatura e que garantem uma gest\xE3o \xE9tica, transparente e focada no desenvolvimento de todos.", "items": [
    {
      title: "Caminhar com TODOS",
      description: "Promover uma regi\xE3o que envolva, ou\xE7a e respeite a diversidade dos n\xFAcleos e dos seus agrupamentos, assegurando que cada voz seja ouvida."
    },
    {
      title: "Servir cada Um",
      description: "Priorizar a\xE7\xF5es que tenham impacto real na vida dos nossos escuteiros e dirigentes, com foco em inclus\xE3o e oportunidades de crescimento."
    },
    {
      title: "Construir Confian\xE7a",
      description: "Transpar\xEAncia, \xE9tica e responsabilidade na gest\xE3o de recursos e presta\xE7\xE3o de contas clara para toda a comunidade escutista."
    }
  ] }, { "bg": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "bg" }, { "default": ($$result4) => renderTemplate` <div class="absolute inset-0 bg-porto-coral/10 dark:bg-transparent"></div> ` })}` })} ` })}`;
}, "/home/ric/Desktop/porto_abrigo/src/pages/about.astro", void 0);

const $$file = "/home/ric/Desktop/porto_abrigo/src/pages/about.astro";
const $$url = "/about";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$About,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
