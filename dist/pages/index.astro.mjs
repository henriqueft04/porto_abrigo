import { d as createAstro, c as createComponent, m as maybeRenderHead, r as renderComponent, u as unescapeHTML, F as Fragment, a as renderTemplate, b as addAttribute, e as renderScript } from '../chunks/astro/server_CwCVLbYD.mjs';
import 'kleur/colors';
import { c as $$Icon, $ as $$PageLayout } from '../chunks/PageLayout_BzyfVHRT.mjs';
import { $ as $$Hero } from '../chunks/Hero_CJxMa8oS.mjs';
import { $ as $$Features } from '../chunks/Features_ys2Dt1ge.mjs';
import { $ as $$Features2 } from '../chunks/Features2_DHc8effK.mjs';
import { $ as $$Steps } from '../chunks/Steps_CTaQVUod.mjs';
import { $ as $$Content } from '../chunks/Content_CsTB8Z_O.mjs';
import { $ as $$Stats } from '../chunks/Stats_DDpon4cc.mjs';
import { $ as $$CallToAction } from '../chunks/CallToAction_Di0UbYy9.mjs';
import { $ as $$Image } from '../chunks/Image_BASXFqNk.mjs';
import 'clsx';
/* empty css                                 */
import { f as findImage } from '../chunks/Layout_iZ5kWe92.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro$2 = createAstro("https://porto-de-abrigo.com");
const $$Note = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Note;
  const {
    icon = "tabler:info-square",
    title = await Astro2.slots.render("title"),
    description = await Astro2.slots.render("description")
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="bg-blue-50 dark:bg-slate-800 not-prose"> <div class="max-w-6xl mx-auto px-4 sm:px-6 py-4 text-md text-center font-medium"> ${renderComponent($$result, "Icon", $$Icon, { "name": icon, "class": "w-5 h-5 inline-block align-text-bottom font-bold" })} <span class="font-bold">${unescapeHTML(title)}</span> ${renderComponent($$result, "Fragment", Fragment, {}, { "default": async ($$result2) => renderTemplate`${unescapeHTML(description)}` })} </div> </section>`;
}, "/home/ric/Desktop/porto_abrigo/src/components/widgets/Note.astro", void 0);

const $$Astro$1 = createAstro("https://porto-de-abrigo.com");
const $$PDFViewer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$PDFViewer;
  const {
    pdfUrl,
    pageNumber = 1,
    width = 400,
    height = 600,
    class: className = ""
  } = Astro2.props;
  const canvasId = `pdf-canvas-${Math.random().toString(36).substr(2, 9)}`;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`pdf-viewer-container ${className}`, "class")} data-astro-cid-aizuzfk2> <canvas${addAttribute(canvasId, "id")}${addAttribute(pdfUrl, "data-pdf-url")}${addAttribute(pageNumber, "data-page-number")}${addAttribute(width, "data-width")}${addAttribute(height, "data-height")}${addAttribute(`max-width: ${width}px; max-height: ${height}px;`, "style")} class="pdf-canvas" data-astro-cid-aizuzfk2></canvas> <div class="pdf-loading"${addAttribute(`loading-${canvasId}`, "id")} data-astro-cid-aizuzfk2> <div class="loading-spinner" data-astro-cid-aizuzfk2></div> <p data-astro-cid-aizuzfk2>Carregando PDF...</p> </div> <div class="pdf-error hidden"${addAttribute(`error-${canvasId}`, "id")} data-astro-cid-aizuzfk2> <p data-astro-cid-aizuzfk2>Erro ao carregar PDF</p> </div> </div>  ${renderScript($$result, "/home/ric/Desktop/porto_abrigo/src/components/ui/PDFViewer.astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/ric/Desktop/porto_abrigo/src/components/ui/PDFViewer.astro", void 0);

const $$Astro = createAstro("https://porto-de-abrigo.com");
const $$Card = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Card;
  const {
    name,
    role,
    location,
    description,
    image,
    isPdf = false,
    pdfPage = 1,
    profileImageName,
    curriculumPdfUrl = "/candidatura \xE0 JRP projeto.pdf",
    curriculumPage,
    stats = [],
    buttonText = "Ver Perfil"
  } = Astro2.props;
  const resolvedImage = isPdf ? null : await findImage(image);
  const profileImagePath = profileImageName ? `~/assets/images/profiles/${profileImageName}` : "";
  const resolvedProfileImage = profileImageName ? await findImage(profileImagePath) : null;
  const profileModalSrc = resolvedProfileImage && typeof resolvedProfileImage === "object" && "src" in resolvedProfileImage ? resolvedProfileImage.src : "";
  return renderTemplate`${maybeRenderHead()}<div class="relative max-w-2xl mx-auto md:max-w-4xl min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-xl overflow-visible min-h-[360px]" data-astro-cid-dd5txfcy> <div class="flex flex-col md:flex-row min-h-full" data-astro-cid-dd5txfcy> <!-- Image Section --> <div class="relative md:w-1/3 flex justify-center md:justify-start items-center px-4 md:px-0" data-astro-cid-dd5txfcy> <div class="relative -mt-8 md:mt-0 md:-ml-4" data-astro-cid-dd5txfcy> ${isPdf ? renderTemplate`<div class="relative clickable-image"${addAttribute(image, "data-image-src")}${addAttribute(name, "data-name")}${addAttribute(role, "data-role")}${addAttribute(description, "data-description")}${addAttribute(JSON.stringify(stats), "data-stats")} data-is-pdf="true" data-astro-cid-dd5txfcy> ${renderComponent($$result, "PDFViewer", $$PDFViewer, { "pdfUrl": image, "pageNumber": pdfPage, "width": 192, "height": 320, "class": "shadow-2xl rounded-3xl w-32 h-80 md:w-40 md:h-80 lg:w-48 lg:h-80 border-4 border-white cursor-pointer transition-transform duration-300 hover:scale-105", "data-astro-cid-dd5txfcy": true })} <div class="image-overlay-click" data-astro-cid-dd5txfcy> <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="expand-icon" data-astro-cid-dd5txfcy> <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3" data-astro-cid-dd5txfcy></path> </svg> </div> </div>` : resolvedImage ? renderTemplate`<div class="relative clickable-image"${addAttribute(image, "data-image-src")}${addAttribute(name, "data-name")}${addAttribute(role, "data-role")}${addAttribute(description, "data-description")}${addAttribute(JSON.stringify(stats), "data-stats")} data-astro-cid-dd5txfcy> ${renderComponent($$result, "Image", $$Image, { "src": resolvedImage, "alt": name, "class": "shadow-2xl rounded-3xl w-32 h-80 md:w-40 md:h-80 lg:w-48 lg:h-80 object-cover border-4 border-white cursor-pointer transition-transform duration-300 hover:scale-105", "style": "object-position: 75% center;", "width": 192, "height": 320, "loading": "lazy", "data-astro-cid-dd5txfcy": true })} <div class="image-overlay-click" data-astro-cid-dd5txfcy> <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="expand-icon" data-astro-cid-dd5txfcy> <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2 2h3" data-astro-cid-dd5txfcy></path> </svg> </div> </div>` : renderTemplate`<div class="shadow-2xl rounded-3xl w-32 h-80 md:w-40 md:h-80 lg:w-48 lg:h-80 bg-gray-300 flex items-center justify-center text-gray-600 text-xs border-4 border-white" data-astro-cid-dd5txfcy>
No Content
</div>`} </div> </div> <!-- Content Section --> <div class="md:w-2/3 p-6 md:pl-4 flex flex-col justify-center" data-astro-cid-dd5txfcy> <!-- Name and Role --> <div class="text-center md:text-left mb-4" data-astro-cid-dd5txfcy> <h3 class="text-xl md:text-2xl text-porto-purple font-bold leading-normal mb-1" data-astro-cid-dd5txfcy>${name}</h3> <div class="text-xs mt-0 mb-2 text-porto-yellow font-bold uppercase" data-astro-cid-dd5txfcy> ${location && renderTemplate`<i class="fas fa-map-marker-alt mr-2 text-porto-coral opacity-75" data-astro-cid-dd5txfcy></i>`} ${role} </div> </div> <!-- Stats --> ${stats.length > 0 && renderTemplate`<div class="mb-4" data-astro-cid-dd5txfcy> <div class="flex justify-center md:justify-start gap-4 flex-wrap" data-astro-cid-dd5txfcy> ${stats.map((stat) => renderTemplate`<div class="text-center" data-astro-cid-dd5txfcy> <span class="text-lg font-bold block tracking-wide text-porto-purple" data-astro-cid-dd5txfcy>${stat.value}</span> <span class="text-xs text-slate-400" data-astro-cid-dd5txfcy>${stat.label}</span> </div>`)} </div> </div>`} <!-- Description --> <div class="mb-4" data-astro-cid-dd5txfcy> <p class="font-light leading-relaxed text-slate-600 text-sm md:text-base" data-astro-cid-dd5txfcy>${description}</p> </div> <!-- Buttons --> <div class="text-center md:text-left flex gap-4 justify-center md:justify-start" data-astro-cid-dd5txfcy> ${buttonText && renderTemplate`<button class="clickable-profile-btn font-normal text-porto-purple hover:text-porto-coral transition-colors duration-200 text-sm border border-porto-purple hover:border-porto-coral px-4 py-2 rounded-lg cursor-pointer"${addAttribute(profileModalSrc || image, "data-profile-src")} data-astro-cid-dd5txfcy> ${buttonText} </button>`} <button class="clickable-expand-btn font-normal text-white bg-porto-purple hover:bg-porto-coral transition-colors duration-200 text-sm px-4 py-2 rounded-lg cursor-pointer flex items-center gap-2"${addAttribute(curriculumPdfUrl, "data-curriculo-src")}${addAttribute((curriculumPage ?? pdfPage).toString(), "data-curriculo-page")} data-astro-cid-dd5txfcy>
Ver Currículo
</button> </div> </div> </div> </div>  ${renderScript($$result, "/home/ric/Desktop/porto_abrigo/src/components/ui/Card.astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/ric/Desktop/porto_abrigo/src/components/ui/Card.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$ImageModal = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(["", '<div id="image-modal" class="modal-overlay hidden" data-astro-cid-jay235oh> <div class="modal-container" data-astro-cid-jay235oh> <button id="close-modal" class="close-button" aria-label="Close modal" data-astro-cid-jay235oh> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-jay235oh> <line x1="18" y1="6" x2="6" y2="18" data-astro-cid-jay235oh></line> <line x1="6" y1="6" x2="18" y2="18" data-astro-cid-jay235oh></line> </svg> </button> <div class="modal-content" data-astro-cid-jay235oh> <div id="modal-image-container" class="modal-image-container" data-astro-cid-jay235oh> <img id="modal-image" src="" alt="" class="modal-image hidden" data-astro-cid-jay235oh> <div id="modal-pdf-container" class="modal-pdf-container hidden" data-astro-cid-jay235oh></div> </div> <div class="modal-info" data-astro-cid-jay235oh> <h3 id="modal-title" class="modal-title" data-astro-cid-jay235oh></h3> <p id="modal-role" class="modal-role" data-astro-cid-jay235oh></p> <div id="modal-stats" class="modal-stats" data-astro-cid-jay235oh></div> <p id="modal-description" class="modal-description" data-astro-cid-jay235oh></p> </div> </div> </div> </div> ', "  <!-- Add global type declaration for TypeScript --> <script>\n  if (typeof window !== 'undefined') {\n    window.openCandidateModal = window.openCandidateModal || function() {};\n  }\n<\/script>"])), maybeRenderHead(), renderScript($$result, "/home/ric/Desktop/porto_abrigo/src/components/ui/ImageModal.astro?astro&type=script&index=0&lang.ts"));
}, "/home/ric/Desktop/porto_abrigo/src/components/ui/ImageModal.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const metadata = {
    title: "Porto de Abrigo \u2014 Candidatura \xE0 Junta Regional do Porto 2025-2028",
    ignoreTitleTemplate: true
  };
  const candidatosPrincipais = [
    {
      name: "Ant\xF3nio Jos\xE9 Ferreira Soares da Cofla",
      role: "Candidato a Chefe Regional",
      nucleus: "Cidade do Porto",
      description: "Experi\xEAncia desde 1982, atualmente Adjunto do Chefe de N\xFAcleo Cidade do Porto. Distin\xE7\xF5es: Cruz S. Jorge 1\xAA Classe \u2013 Ouro, Louvor Nacional.",
      image: "~/assets/images/equipa/antonio.jpeg",
      stats: [
        { label: "Anos Escutismo", value: "42+" },
        { label: "Distin\xE7\xF5es", value: "2" },
        { label: "N\xFAcleo", value: "Cidade Porto" }
      ],
      curriculumPage: 1,
      profileImageName: "Toze.png"
    },
    {
      name: "Vera Sofia Ferreira Moreira",
      role: "Candidata a Chefe Regional Adjunto",
      nucleus: "Este",
      description: "Engenheira de Software, Chefe de N\xFAcleo Este, Formadora e Diretora de Forma\xE7\xE3o do CNE. Distin\xE7\xF5es: Cruz de S. Jorge de 1\xAA Classe.",
      image: "~/assets/images/equipa/vera.jpeg",
      stats: [
        { label: "Anos Escutismo", value: "20+" },
        { label: "Distin\xE7\xF5es", value: "1" },
        { label: "N\xFAcleo", value: "Este" }
      ],
      curriculumPage: 2,
      profileImageName: "Vera.png"
    }
  ];
  const secretariosRegionais = [
    {
      name: "Maria de F\xE1tima Almeida de Freitas Cam\xF5es",
      role: "Secret\xE1ria Regional para Gest\xE3o Administrativa e RH",
      nucleus: "Centro Norte",
      description: "Gestora de cr\xE9dito, atualmente Chefe de N\xFAcleo Centro Norte.",
      image: "~/assets/images/equipa/maria.jpeg",
      stats: [
        { label: "Anos Escutismo", value: "18+" },
        { label: "Cargos", value: "8+" },
        { label: "N\xFAcleo", value: "Centro Norte" }
      ],
      curriculumPage: 5,
      profileImageName: "Fatima 1.jpeg"
    },
    {
      name: "Pedro S\xE9rgio de Matos Faria Silva Moreira",
      role: "Candidato a Secret\xE1rio Regional para os Adultos",
      nucleus: "Litoral",
      description: "Chefe de N\xFAcleo Litoral, Formador do CNE e Diretor do MISC. Distin\xE7\xF5es: Cruz de S\xE3o Jorge 2\xBA classe.",
      image: "~/assets/images/equipa/pedro.jpeg",
      stats: [
        { label: "Anos Escutismo", value: "25+" },
        { label: "Distin\xE7\xF5es", value: "1" },
        { label: "N\xFAcleo", value: "Litoral" }
      ],
      curriculumPage: 3,
      profileImageName: "Pedro.png"
    },
    {
      name: "Carla Sofia Vitoriano de Oliveira Dias",
      role: "Candidata a Secret\xE1ria Regional para o Desenvolvimento",
      nucleus: "Terras de Santa Maria",
      description: "T\xE9cnica Superior Jurista, Chefe Adjunta do N\xFAcleo Terras de Santa Maria.",
      image: "~/assets/images/equipa/carla.jpeg",
      stats: [
        { label: "Anos Escutismo", value: "15+" },
        { label: "Cargos", value: "5+" },
        { label: "N\xFAcleo", value: "T. Sta Maria" }
      ],
      curriculumPage: 4,
      profileImageName: "Carla.png"
    },
    {
      name: "Ant\xF3nio Alberto dos Santos Alves",
      role: "Secret\xE1rio Regional para Gest\xE3o Financeira",
      nucleus: "Porto",
      description: "Vasta experi\xEAncia como Chefe de N\xFAcleo e Secret\xE1rio Regional Pedag\xF3gico. Distin\xE7\xF5es: Cruz de S. Jorge 1\xAA Classe.",
      image: "~/assets/images/equipa/antiono_alberto.jpeg",
      stats: [
        { label: "Anos Escutismo", value: "30+" },
        { label: "Distin\xE7\xF5es", value: "1" },
        { label: "Experi\xEAncia", value: "Sec. Regional" }
      ],
      curriculumPage: 6,
      profileImageName: "Alves.png"
    },
    {
      name: "Rui Daniel Silva Cafaro",
      role: "Secret\xE1rio Regional para o Patrim\xF3nio",
      nucleus: "Norte",
      description: "Secret\xE1rio Administrativo de N\xFAcleo Norte e Chefe de Agrupamento Adjunto.",
      image: "~/assets/images/equipa/rui.jpeg",
      stats: [
        { label: "Anos Escutismo", value: "20+" },
        { label: "Cargos", value: "6+" },
        { label: "N\xFAcleo", value: "Norte" }
      ],
      curriculumPage: 7,
      profileImageName: "Rui.jpeg"
    },
    {
      name: "Cristiano Manuel Silva Pereira",
      role: "Secret\xE1rio Regional Pedag\xF3gico",
      nucleus: "Porto",
      description: "Diretor executivo, atualmente Chefe de Agrupamento e Interlocutor Internacional da Junta Regional do Porto.",
      image: "~/assets/images/equipa/cristiano.jpeg",
      stats: [
        { label: "Anos Escutismo", value: "22+" },
        { label: "Forma\xE7\xF5es", value: "50+" },
        { label: "Internacional", value: "JRP" }
      ],
      curriculumPage: 8,
      profileImageName: "Cristiano.jpeg"
    }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$PageLayout, { "metadata": metadata }, { "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "Hero", $$Hero, { "actions": [
    {
      variant: "primary",
      text: "Conhecer Propostas",
      href: "#propostas",
      icon: "tabler:arrow-right"
    },
    { text: "Conhecer Equipa", href: "#equipa" }
  ], "image": { src: "~/assets/images/elementos/logo_explain.png", alt: "Porto de Abrigo - Candidatura JRP 2025-2028" } }, { "subtitle": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "subtitle" }, { "default": ($$result4) => renderTemplate` ${maybeRenderHead()}<span class="text-lg font-medium text-gray-700 dark:text-gray-300">
Candidatura à Junta Regional do Porto<br> <span class="font-bold text-porto-purple dark:text-porto-purple">TRIÉNIO 2025-2028</span> </span> <br><br> <span class="text-base">
Somos a <strong>Equipa Porto de Abrigo</strong> que une a experiência de uma vida ao serviço 
        dos agrupamentos e dos Núcleos, sem esquecer a força e a criatividade da juventude.
</span> ` })}`, "title": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "title" }, { "default": ($$result4) => renderTemplate` <span class="text-porto-purple dark:text-porto-purple">Caminhar com TODOS.</span><br> <span class="text-porto-yellow dark:text-porto-yellow">Servir cada Um</span> ` })}` })}  ${renderComponent($$result2, "Note", $$Note, { "title": "A nossa miss\xE3o:", "description": "Queremos ser um porto de abrigo para o escutismo da regi\xE3o" })}  ${renderComponent($$result2, "Features", $$Features, { "id": "propostas", "tagline": "As nossas propostas", "title": "O que propomos para a regi\xE3o", "subtitle": "Tr\xEAs pilares fundamentais que orientam toda a nossa vis\xE3o para o desenvolvimento do escutismo na Regi\xE3o do Porto durante o tri\xE9nio 2025-2028.", "items": [
    {
      title: "CAPACITAR",
      description: "Capacitar cada um para que o escutismo seja cada vez mais enriquecedor e significativo para os jovens.",
      icon: "tabler:school"
    },
    {
      title: "ENVOLVER",
      description: "Envolver para que cada dirigente se sinta parte de um todo, num prop\xF3sito comum de desenvolvimento da regi\xE3o.",
      icon: "tabler:users"
    },
    {
      title: "VALORIZAR",
      description: "Valorizar a miss\xE3o do escutismo no desenvolvimento integral dos jovens e reconhecer o contributo de cada um.",
      icon: "tabler:award"
    },
    {
      title: "Transpar\xEAncia na Gest\xE3o",
      description: "Construir confian\xE7a atrav\xE9s de transpar\xEAncia, \xE9tica e responsabilidade na gest\xE3o de recursos com presta\xE7\xE3o de contas clara.",
      icon: "tabler:eye"
    },
    {
      title: "Inclus\xE3o e Diversidade",
      description: "Promover uma regi\xE3o que envolva, ou\xE7a e respeite a diversidade dos n\xFAcleos e dos seus agrupamentos.",
      icon: "tabler:heart-handshake"
    },
    {
      title: "Impacto Real",
      description: "Priorizar a\xE7\xF5es que tenham impacto real na vida dos nossos escuteiros e dirigentes, e das suas comunidades.",
      icon: "tabler:target"
    }
  ] })}  ${renderComponent($$result2, "Content", $$Content, { "isReversed": true, "id": "equipa", "tagline": "A Nossa estrutura", "title": "Uma equipa experiente e comprometida", "items": [
    {
      title: "Lideran\xE7a Regional",
      description: "Chefe Regional e Chefe Regional Adjunto com d\xE9cadas de experi\xEAncia no movimento escutista."
    },
    {
      title: "Secretarias Especializadas",
      description: "Equipas dedicadas para Adultos, Desenvolvimento, Gest\xE3o, Finan\xE7as, Patrim\xF3nio e Pedagogia."
    },
    {
      title: "Experi\xEAncia Comprovada",
      description: "Dirigentes com percurso s\xF3lido em diferentes n\xEDveis organizacionais, desde agrupamentos at\xE9 estruturas nacionais."
    }
  ], "image": {
    src: "~/assets/images/equipa/team.jpeg",
    alt: "Equipa Porto de Abrigo",
    width: 1920,
    height: 1080
  } }, { "bg": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "bg" }, { "default": ($$result4) => renderTemplate` <div class="absolute inset-0 bg-porto-coral/10 dark:bg-transparent"></div> ` })}`, "content": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "content" }, { "default": ($$result4) => renderTemplate` <h3 class="text-2xl font-bold tracking-tight dark:text-white sm:text-3xl mb-2">Experiência ao serviço da região</h3>
Uma equipa que une a sabedoria da experiência com a energia e criatividade da juventude
` })}` })}  <section class="py-12 md:py-20 bg-porto-coral/10"> <div class="max-w-7xl mx-auto px-4 sm:px-6"> <div class="text-center mb-12"> <p class="text-base text-porto-yellow font-bold tracking-wide uppercase mb-2">Liderança</p> <h2 class="text-3xl md:text-4xl font-bold text-porto-purple mb-4">Candidatos Principais</h2> <p class="text-lg text-gray-600 max-w-3xl mx-auto">
Candidatos com vasta experiência escutista para liderar a região
</p> </div> <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 px-4"> ${candidatosPrincipais.map((candidato) => renderTemplate`${renderComponent($$result2, "Card", $$Card, { "name": candidato.name, "role": candidato.role, "location": `${candidato.nucleus}, Porto`, "description": candidato.description, "image": candidato.image, "profileImageName": candidato.profileImageName, "curriculumPdfUrl": "/candidatura \xE0 JRP projeto.pdf", "curriculumPage": candidato.curriculumPage, "stats": candidato.stats, "buttonText": "Ver Perfil" })}`)} </div> </div> </section>  <section class="py-12 md:py-20 bg-porto-coral/10"> <div class="max-w-7xl mx-auto px-4 sm:px-6"> <div class="text-center mb-12"> <p class="text-base text-porto-yellow font-bold tracking-wide uppercase mb-2">Restante equipa</p> <h2 class="text-3xl md:text-4xl font-bold text-porto-purple mb-4">Secretários Regionais</h2> <p class="text-lg text-gray-600 max-w-3xl mx-auto">
Uma equipa completa e diversificada de secretários especializados
</p> </div> <div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-12 px-4"> ${secretariosRegionais.map((secretario) => renderTemplate`${renderComponent($$result2, "Card", $$Card, { "name": secretario.name, "role": secretario.role, "location": `${secretario.nucleus}, Porto`, "description": secretario.description, "image": secretario.image, "profileImageName": secretario.profileImageName, "curriculumPdfUrl": "/candidatura \xE0 JRP projeto.pdf", "curriculumPage": secretario.curriculumPage, "stats": secretario.stats, "buttonText": "Ver Perfil" })}`)} </div> </div> </section>  ${renderComponent($$result2, "Steps", $$Steps, { "id": "propostas-detalhadas", "title": "Propostas espec\xEDficas para cada \xE1rea da Junta Regional", "tagline": "Plano de a\xE7\xE3o", "items": [
    {
      title: '<span class="font-medium">Chefia Regional</span>',
      description: "Promover trabalho sist\xE9mico entre os diversos n\xEDveis do CNE. Articular o trabalho entre as secretarias regionais. Definir e implementar uma Pol\xEDtica Regional de Expans\xE3o. Estreitar rela\xE7\xF5es com entidades externas.",
      icon: "tabler:crown"
    },
    {
      title: '<span class="font-medium">Secretaria dos Adultos</span>',
      description: "Envolver, valorizar e capacitar o quadro de formadores regionais. Investir nas \xE1reas de aprofundamento pedag\xF3gico. Promover forma\xE7\xE3o cont\xEDnua diferenciada. Melhorar condi\xE7\xF5es de forma\xE7\xE3o.",
      icon: "tabler:school"
    },
    {
      title: '<span class="font-medium">Desenvolvimento</span>',
      description: "Promover ambiente inclusivo. Preparar para situa\xE7\xF5es de emerg\xEAncia. Promover pr\xE1ticas sustent\xE1veis. Melhorar comunica\xE7\xE3o interna e externa entre todos os n\xEDveis.",
      icon: "tabler:growth"
    },
    {
      title: '<span class="font-medium">Gest\xE3o & Finan\xE7as</span>',
      description: "Tornar processos administrativos claros e eficientes. Criar canais de comunica\xE7\xE3o abertos. Dinamizar a utiliza\xE7\xE3o do SIIE. Gest\xE3o financeira clara e expl\xEDcita com controlo constante.",
      icon: "tabler:calculator"
    },
    {
      title: '<span class="font-medium">Patrim\xF3nio & Pedagogia</span>',
      description: "Capacitar e dinamizar infraestruturas regionais. Requalificar a Casa da Regi\xE3o. Criar ferramentas pedag\xF3gicas simples e acess\xEDveis. Valorizar projetos locais criativos.",
      icon: "tabler:building"
    }
  ], "image": {
    src: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=987&q=80",
    alt: "Propostas regionais"
  } })}  ${renderComponent($$result2, "Features2", $$Features2, { "title": "Os nossos compromissos", "subtitle": "Valores e princ\xEDpios que orientam a nossa candidatura para o tri\xE9nio 2025-2028", "tagline": "Compromissos", "items": [
    {
      title: "Inclus\xE3o",
      description: "Promover uma regi\xE3o que envolva, ou\xE7a e respeite a diversidade dos n\xFAcleos e agrupamentos.",
      icon: "flat-color-icons:approval"
    },
    {
      title: "Transpar\xEAncia",
      description: "Gest\xE3o clara e transparente de recursos, com presta\xE7\xE3o de contas regular e acess\xEDvel a todos.",
      icon: "flat-color-icons:gallery"
    },
    {
      title: "Forma\xE7\xE3o",
      description: "Investir na capacita\xE7\xE3o cont\xEDnua dos dirigentes, oferecendo forma\xE7\xE3o de qualidade e adaptada \xE0s necessidades.",
      icon: "flat-color-icons:template"
    },
    {
      title: "Inova\xE7\xE3o",
      description: "Promover novas pr\xE1ticas e ferramentas que facilitem o trabalho dos agrupamentos e melhorem a experi\xEAncia escutista.",
      icon: "flat-color-icons:document"
    },
    {
      title: "Sustentabilidade",
      description: "Promover pr\xE1ticas ambientalmente respons\xE1veis e educar para a consciencializa\xE7\xE3o ambiental.",
      icon: "flat-color-icons:advertising"
    },
    {
      title: "Apoio Local",
      description: "Dar suporte efetivo aos n\xFAcleos e agrupamentos nas suas necessidades espec\xEDficas.",
      icon: "flat-color-icons:business-contact"
    },
    {
      title: "Comunica\xE7\xE3o",
      description: "Melhorar os fluxos de informa\xE7\xE3o entre todos os n\xEDveis da estrutura regional.",
      icon: "flat-color-icons:voice-presentation"
    },
    {
      title: "Patrim\xF3nio",
      description: "Valorizar e otimizar o uso das infraestruturas regionais para benef\xEDcio de toda a comunidade escutista.",
      icon: "flat-color-icons:database"
    },
    {
      title: "Juventude",
      description: "Dar voz ativa aos jovens dirigentes e valorizar o seu contributo para o desenvolvimento regional.",
      icon: "flat-color-icons:currency-exchange"
    }
  ] }, { "bg": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "bg" }, { "default": ($$result4) => renderTemplate` <div class="absolute inset-0 bg-porto-coral/10 dark:bg-transparent"></div> ` })}` })}  ${renderComponent($$result2, "Stats", $$Stats, { "stats": [
    { title: "Anos de Experi\xEAncia", amount: "40+" },
    { title: "N\xFAcleos na Regi\xE3o", amount: "6" },
    { title: "Agrupamentos", amount: "80+" },
    { title: "Escuteiros", amount: "8.000+" }
  ] })}  ${renderComponent($$result2, "CallToAction", $$CallToAction, { "actions": [
    {
      variant: "primary",
      text: "Contactar Equipa",
      href: "/contact",
      icon: "tabler:mail"
    },
    {
      text: "Ver Propostas Completas",
      href: "#propostas-detalhadas",
      icon: "tabler:file-text"
    }
  ] }, { "subtitle": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "subtitle" }, { "default": ($$result4) => renderTemplate`
Juntos, vamos construir uma região mais forte, inclusiva e preparada para os desafios do futuro. <br class="hidden md:inline">
A mudança começa com a vossa confiança.
` })}`, "title": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "title" }, { "default": ($$result4) => renderTemplate`
Connosco <br class="block sm:hidden"><span class="sm:whitespace-nowrap text-porto-purple">PODEM CONTAR!</span> ` })}` })}  ${renderComponent($$result2, "ImageModal", $$ImageModal, {})} ` })}`;
}, "/home/ric/Desktop/porto_abrigo/src/pages/index.astro", void 0);

const $$file = "/home/ric/Desktop/porto_abrigo/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
