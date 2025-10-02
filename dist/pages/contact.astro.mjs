import { d as createAstro, c as createComponent, m as maybeRenderHead, b as addAttribute, a as renderTemplate, r as renderComponent } from '../chunks/astro/server_CwCVLbYD.mjs';
import 'kleur/colors';
import { a as $$Button, $ as $$PageLayout } from '../chunks/PageLayout_BzyfVHRT.mjs';
import { $ as $$HeroText } from '../chunks/HeroText_HEOHACWV.mjs';
import { $ as $$Headline } from '../chunks/Headline_dZNoTN7-.mjs';
import { $ as $$WidgetWrapper } from '../chunks/WidgetWrapper_iOEG5d2f.mjs';
import { $ as $$Features2 } from '../chunks/Features2_DHc8effK.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro$1 = createAstro("https://porto-de-abrigo.com");
const $$Form = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Form;
  const { inputs, textarea, disclaimer, button = "Contact us", description = "" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<form> ${inputs && inputs.map(
    ({ type = "text", name, label = "", autocomplete = "on", placeholder = "" }) => name && renderTemplate`<div class="mb-6"> ${label && renderTemplate`<label${addAttribute(name, "for")} class="block text-sm font-medium"> ${label} </label>`} <input${addAttribute(type, "type")}${addAttribute(name, "name")}${addAttribute(name, "id")}${addAttribute(autocomplete, "autocomplete")}${addAttribute(placeholder, "placeholder")} class="py-3 px-4 block w-full text-md rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-slate-900"> </div>`
  )} ${textarea && renderTemplate`<div> <label for="textarea" class="block text-sm font-medium"> ${textarea.label} </label> <textarea id="textarea"${addAttribute(textarea.name ? textarea.name : "message", "name")}${addAttribute(textarea.rows ? textarea.rows : 4, "rows")}${addAttribute(textarea.placeholder, "placeholder")} class="py-3 px-4 block w-full text-md rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-slate-900"></textarea> </div>`} ${disclaimer && renderTemplate`<div class="mt-3 flex items-start"> <div class="flex mt-0.5"> <input id="disclaimer" name="disclaimer" type="checkbox" class="cursor-pointer mt-1 py-3 px-4 block w-full text-md rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-slate-900"> </div> <div class="ml-3"> <label for="disclaimer" class="cursor-pointer select-none text-sm text-gray-600 dark:text-gray-400"> ${disclaimer.label} </label> </div> </div>`} ${button && renderTemplate`<div class="mt-10 grid"> ${renderComponent($$result, "Button", $$Button, { "variant": "primary", "type": "submit" }, { "default": ($$result2) => renderTemplate`${button}` })} </div>`} ${description && renderTemplate`<div class="mt-3 text-center"> <p class="text-sm text-gray-600 dark:text-gray-400">${description}</p> </div>`} </form>`;
}, "/home/ric/Desktop/porto_abrigo/src/components/ui/Form.astro", void 0);

const $$Astro = createAstro("https://porto-de-abrigo.com");
const $$Contact$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Contact$1;
  const {
    title = await Astro2.slots.render("title"),
    subtitle = await Astro2.slots.render("subtitle"),
    tagline = await Astro2.slots.render("tagline"),
    inputs,
    textarea,
    disclaimer,
    button,
    description,
    id,
    isDark = false,
    classes = {},
    bg = await Astro2.slots.render("bg")
  } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "WidgetWrapper", $$WidgetWrapper, { "id": id, "isDark": isDark, "containerClass": `max-w-7xl mx-auto ${classes?.container ?? ""}`, "bg": bg }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Headline", $$Headline, { "title": title, "subtitle": subtitle, "tagline": tagline })} ${inputs && renderTemplate`${maybeRenderHead()}<div class="flex flex-col max-w-xl mx-auto rounded-lg backdrop-blur border border-gray-200 dark:border-gray-700 bg-white dark:bg-slate-900 shadow p-4 sm:p-6 lg:p-8 w-full"> ${renderComponent($$result2, "FormContainer", $$Form, { "inputs": inputs, "textarea": textarea, "disclaimer": disclaimer, "button": button, "description": description })} </div>`}` })}`;
}, "/home/ric/Desktop/porto_abrigo/src/components/widgets/Contact.astro", void 0);

const $$Contact = createComponent(($$result, $$props, $$slots) => {
  const metadata = {
    title: "Contacto - Porto de Abrigo"
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$PageLayout, { "metadata": metadata }, { "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "HeroText", $$HeroText, { "tagline": "Contacto", "title": "Vamos juntos construir o futuro!" })} ${renderComponent($$result2, "ContactUs", $$Contact$1, { "id": "form", "title": "Entre em contacto connosco!", "subtitle": "A sua voz \xE9 importante. Partilhe as suas ideias, quest\xF5es ou manifeste o seu apoio \xE0 nossa candidatura. Estamos aqui para ouvir e trabalhar em conjunto.", "inputs": [
    {
      type: "text",
      name: "name",
      label: "Nome Completo"
    },
    {
      type: "email",
      name: "email",
      label: "Email"
    },
    {
      type: "text",
      name: "agrupamento",
      label: "Agrupamento/N\xFAcleo (opcional)"
    },
    {
      type: "select",
      name: "assunto",
      label: "Assunto",
      options: "Apoio \xE0 candidatura,Quest\xE3o sobre propostas,Sugest\xE3o,Voluntariado,Outro"
    }
  ], "textarea": {
    label: "Mensagem",
    placeholder: "Partilhe as suas ideias, quest\xF5es ou sugest\xF5es..."
  }, "disclaimer": {
    label: "Ao submeter este formul\xE1rio, concorda com o tratamento dos seus dados pessoais nos termos da pol\xEDtica de privacidade."
  }, "description": "A nossa equipa responde habitualmente no prazo de 24 horas." })}  ${renderComponent($$result2, "Features2", $$Features2, { "title": "Como pode apoiar a nossa candidatura", "items": [
    {
      title: "Quest\xF5es sobre Propostas",
      description: `Tem d\xFAvidas sobre as nossas propostas ou quer saber mais detalhes sobre o nosso plano para a regi\xE3o? Entre em contacto connosco.`,
      icon: "tabler:question-mark"
    },
    {
      title: "Apoio e Voluntariado",
      description: "Quer apoiar ativamente a nossa candidatura? H\xE1 v\xE1rias formas de se envolver e contribuir para o sucesso da nossa proposta.",
      icon: "tabler:heart-handshake"
    },
    {
      title: "Sugest\xF5es e Ideias",
      description: "A sua experi\xEAncia \xE9 valiosa. Partilhe connosco as suas ideias e sugest\xF5es para melhorarmos as nossas propostas para a regi\xE3o.",
      icon: "tabler:bulb"
    },
    {
      title: "Email Geral",
      description: "geral@portodeabrigo.com",
      icon: "tabler:mail"
    },
    {
      title: "Redes Sociais",
      description: "Siga-nos nas redes sociais para estar a par das novidades da candidatura",
      icon: "tabler:share"
    },
    {
      title: "Regi\xE3o do Porto",
      description: "Servindo todos os n\xFAcleos da Regi\xE3o do Porto: Cidade do Porto, Este, Litoral, Norte, Centro Norte e Terras de Santa Maria",
      icon: "tabler:map-pin"
    }
  ] })} ` })}`;
}, "/home/ric/Desktop/porto_abrigo/src/pages/contact.astro", void 0);

const $$file = "/home/ric/Desktop/porto_abrigo/src/pages/contact.astro";
const $$url = "/contact";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Contact,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
