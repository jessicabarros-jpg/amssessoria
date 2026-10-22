import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowDown,
  ArrowRight,
  BriefcaseBusiness,
  Check,
  ChevronDown,
  FileCheck2,
  Leaf,
  LockKeyhole,
  Mail,
  MapPin,
  MessageCircle,
  Scale,
  ShieldCheck,
} from "lucide-react";
import { type FormEvent, useEffect } from "react";

import heroImage from "@/assets/am-mining-hero.jpg";
import officialLogo from "@/assets/am-logo-oficial.png";
import bioeticaLogo from "@/assets/clients/72-bioetica-ambiental.png";
import csServicosLogo from "@/assets/clients/69-cs-servicos-manutencao.png";
import cvtConstrutoraLogo from "@/assets/clients/70-cvt-construtora.png";
import esLogo from "@/assets/clients/68-e-s.png";
import farMotoresLogo from "@/assets/clients/66-far-motores.png";
import identificLogo from "@/assets/clients/64-identific.png";
import instaleLogo from "@/assets/clients/67-instale-tecnologia.png";
import letsLogo from "@/assets/clients/58-lets.png";
import linktapLogo from "@/assets/clients/65-linktap.png";
import trimolLogo from "@/assets/clients/57-trimol.webp";
import marciaPhoto from "@/assets/marcia-abdanur.jpeg";
import sergioPhoto from "@/assets/sergio-terra.jpeg";
import { Button } from "@/components/ui/button";

const WHATSAPP_URL = "https://wa.me/553499169043";
const SITE_URL = "https://amssma.com.br";
const SHARE_IMAGE = `${SITE_URL}${heroImage}`;

const CLIENT_LOGOS = [
  { name: "E/S", src: esLogo },
  { name: "Identific", src: identificLogo },
  { name: "Linktap", src: linktapLogo },
  { name: "FAR Motores", src: farMotoresLogo },
  { name: "Instale Tecnologia", src: instaleLogo },
  { name: "Bioética Ambiental", src: bioeticaLogo },
  { name: "CVT Construtora", src: cvtConstrutoraLogo },
  { name: "CS Serviços e Manutenção", src: csServicosLogo },
  { name: "Trimol", src: trimolLogo },
  { name: "Let's", src: letsLogo },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Due Diligence Ambiental e SST com Sigilo | AM Assessoria" },
      {
        name: "description",
        content:
          "Due Diligence, auditoria EHS/SSMA e assessoria ambiental jurídica com sigilo. Parecer técnico e jurídico. Atendemos MG, BA, TO, MT, MS, GO e DF.",
      },
      { property: "og:title", content: "Due Diligence Ambiental e SST com Sigilo | AM Assessoria" },
      {
        property: "og:description",
        content: "Parecer técnico e jurídico para decisões ambientais seguras, com sigilo e experiência em mineração.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE_URL}/` },
      { property: "og:locale", content: "pt_BR" },
      { property: "og:site_name", content: "AM Assessoria e Consultoria" },
      { property: "og:image", content: SHARE_IMAGE },
      { property: "og:image:alt", content: "Operação de mineração integrada a áreas verdes preservadas" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: SHARE_IMAGE },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/` }],
  }),
  component: Index,
});

function BrandMark() {
  return (
    <a href="#inicio" className="brand" aria-label="AM Assessoria e Consultoria — início">
      <img className="brand-logo" src={officialLogo} alt="AM Assessoria e Consultoria" />
    </a>
  );
}

function SectionIntro({ eyebrow, title, copy }: { eyebrow: string; title: string; copy?: string }) {
  return (
    <div className="section-intro reveal">
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {copy && <p>{copy}</p>}
    </div>
  );
}

function Index() {
  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>(".reveal");
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("is-visible")),
      { threshold: 0.12 },
    );
    elements.forEach((element) => observer.observe(element));

    const root = document.documentElement;
    let frame = 0;
    const updateParallax = () => {
      frame = 0;
      root.style.setProperty("--page-scroll", `${window.scrollY}px`);
    };
    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(updateParallax);
    };
    updateParallax();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  function submitContact(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const message = [
      "Olá, equipe AM! Gostaria de receber escopo e valor.",
      `Nome: ${data.get("nome") ?? ""}`,
      `Empresa: ${data.get("empresa") ?? ""}`,
      `E-mail: ${data.get("email") ?? ""}`,
      `Telefone: ${data.get("telefone") ?? ""}`,
      `Necessidade: ${data.get("necessidade") ?? ""}`,
    ].join("\n");
    window.open(`${WHATSAPP_URL}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
  }

  return (
    <main id="inicio">
      <header className="site-header">
        <div className="shell header-inner">
          <BrandMark />
          <nav aria-label="Navegação principal">
            <a href="#especialidades">Especialidades</a>
            <a href="#quem-assina">Quem assina</a>
            <a href="#contato">Contato</a>
          </nav>
          <Button asChild variant="outline" className="header-cta">
            <a href={WHATSAPP_URL} target="_blank" rel="noreferrer">
              <MessageCircle /> Falar com a AM
            </a>
          </Button>
        </div>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <img src={heroImage} width={1920} height={1280} alt="Operação de mineração integrada a áreas verdes preservadas" />
        <div className="hero-shade" aria-hidden="true" />
        <div className="shell hero-content">
          <div className="hero-copy reveal is-visible">
            <span className="eyebrow eyebrow-on-dark">Due Diligence · Auditoria · Assessoria Ambiental Jurídica</span>
            <h1 id="hero-title">Conformidade ambiental e de segurança, <em>antes que vire problema.</em></h1>
            <p>
              Parecer técnico e jurídico para decisões sobre operações, aquisições ou unidades — com
              <strong> sigilo, fundamento legal e contato direto</strong> com quem assina o trabalho.
            </p>
            <div className="hero-actions">
              <Button asChild size="lg">
                <a href="#contato">Receber escopo e valor <ArrowRight /></a>
              </Button>
              <Button asChild size="lg" variant="heroGhost">
                <a href={WHATSAPP_URL} target="_blank" rel="noreferrer"><MessageCircle /> WhatsApp</a>
              </Button>
            </div>
            <div className="hero-proof">
              <span><strong>23+</strong> anos em mineração</span>
              <span><strong>Brasil</strong> atuação nacional</span>
              <span><strong>Araxá</strong> sede em MG</span>
            </div>
          </div>
        </div>
        <a className="scroll-cue" href="#problema" aria-label="Ir para a próxima seção"><ArrowDown /></a>
      </section>

      <section className="problem section-pad" id="problema">
        <div className="shell">
          <SectionIntro
            eyebrow="Quem assina embaixo é quem responde"
            title="O problema não é descobrir um passivo. É descobrir tarde demais."
            copy="Quando uma operação está sob análise, não basta saber que existem documentos. É preciso saber o que pode estar errado, qual é o risco e o que fazer a respeito."
          />
          <div className="problem-grid">
            {[
              ["01", "Você não sabe o que a auditoria vai encontrar", "Normas, licenças, condicionantes e obrigações podem esconder não conformidades. A AM antecipa essa análise."],
              ["02", "O prazo não pode ser resolvido com pressa", "O escopo é definido antes da execução e o prazo considera a capacidade real da equipe — sem lacunas ou atalhos."],
              ["03", "O assunto não pode virar exposição", "Em uma aquisição, fusão ou revisão corporativa, o sigilo faz parte do processo de trabalho, não apenas do discurso."],
            ].map(([number, title, text]) => (
              <article className="problem-item reveal" key={number}>
                <span>{number}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="authority section-pad" id="quem-assina">
        <div className="shell authority-grid">
          <div className="authority-heading reveal">
            <span className="eyebrow eyebrow-on-dark">Quem assina o parecer</span>
            <h2>Você fala com quem responde tecnicamente pelo trabalho.</h2>
            <p>Sérgio Terra e Márcia Abdanur participam diretamente dos trabalhos e assinam o que a AM entrega.</p>
            <blockquote>“Tranquilidade não é sorte. É saber o que existe antes de precisar responder por isso.”</blockquote>
          </div>
          <div className="people">
            <article className="person reveal">
              <div className="person-photo person-photo-sergio"><img src={sergioPhoto} alt="Sérgio A. Bittes Terra" /></div>
              <div className="person-content">
                <span>Sócio · Direito (Uniaraxá)</span>
                <h3>Sérgio A. Bittes Terra</h3>
                <p>Pós-graduado em Engenharia de Segurança do Trabalho, com <strong>17 anos em cargos de gestão na Mosaic/Vale Fertilizantes</strong>, da área de Suprimentos à Administração e Serviços.</p>
                <ul><li><Check /> Presidente da CIPAMIN Mosaic Tapira, 2018/2019</li><li><Check /> Sócio da AM desde 2019</li></ul>
              </div>
            </article>
            <article className="person reveal">
              <div className="person-photo"><img src={marciaPhoto} alt="Márcia Ap. Silva Abdanur" /></div>
              <div className="person-content">
                <span>Consultora Sênior de SSMA/EHS · OAB/MG 92.937</span>
                <h3>Márcia Ap. Silva Abdanur</h3>
                <p>Advogada com <strong>33 anos de experiência, sendo 23 em mineração</strong>. Foi Gerente de EHSQ na Vale Fertilizantes, coordenando equipes de meio ambiente, segurança e saúde.</p>
                <ul><li><Check /> Mestrado em Prevenção de Riscos Laborais, 2025</li><li><Check /> Experiência em Due Diligence de SST e meio ambiente</li></ul>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="method section-pad">
        <div className="shell">
          <SectionIntro eyebrow="Antes que vire problema" title="Técnica e jurídico olhando para o mesmo problema." />
          <div className="method-grid">
            {[
              [ShieldCheck, "Um parecer que se sustenta", "Cada unidade é analisada conforme sua realidade, com fundamento técnico e legal. Não entregamos um documento padrão como diagnóstico específico."],
              [LockKeyhole, "Sigilo como processo", "Em trabalhos sensíveis, a identificação é genérica e não divulgamos a unidade, o cliente ou a cidade visitada."],
              [Scale, "Técnico + jurídico", "Conhecimento técnico e jurídico reduz o vai e vem quando uma questão exige os dois lados."],
              [BriefcaseBusiness, "Agilidade sem atalho", "O primeiro contato é respondido no mesmo dia. O ciclo médio até o fechamento é de até 7 dias, conforme o escopo."],
            ].map(([Icon, title, text]) => {
              const MethodIcon = Icon as typeof ShieldCheck;
              return <article className="method-item reveal" key={String(title)}><MethodIcon /><h3>{String(title)}</h3><p>{String(text)}</p></article>;
            })}
          </div>
        </div>
      </section>

      <section className="process section-pad">
        <div className="shell process-layout">
          <div className="process-sticky">
            <span className="eyebrow">Simples de começar</span>
            <h2>Do primeiro contato à execução, sem complicação.</h2>
            <Button asChild><a href="#contato">Começar agora <ArrowRight /></a></Button>
          </div>
          <div className="steps">
            {[
              ["01", "Conte o que precisa", "Preencha o formulário ou fale pelo WhatsApp. Vamos entender o quê, onde, quantas unidades e qual prazo."],
              ["02", "Alinhe o escopo", "Nos trabalhos mais complexos, uma reunião de aproximadamente uma hora define exatamente o que precisa ser analisado."],
              ["03", "Receba a proposta", "Você recebe escopo, prazo e valor por escrito. Aprovou? A execução começa conforme o combinado, sob sigilo."],
            ].map(([number, title, text]) => <article className="step reveal" key={number}><span>{number}</span><div><h3>{title}</h3><p>{text}</p></div></article>)}
          </div>
        </div>
      </section>

      <section className="services section-pad" id="especialidades">
        <div className="shell">
          <SectionIntro eyebrow="Onde a AM é mais forte" title="Três frentes para reduzir risco antes que ele vire problema." />
          <div className="services-grid">
            {[
              [Leaf, "Due Diligence Ambiental e de SST", "Análise técnica e jurídica para identificar passivos e pontos de atenção antes de fusão, aquisição ou revisão corporativa."],
              [FileCheck2, "Auditoria e Diagnóstico EHS/SSMA", "Uma visão estruturada do que uma fiscalização ou auditoria poderia encontrar na operação — antes que ela aconteça."],
              [Scale, "Assessoria Ambiental Jurídica", "Atuação em licenças, condicionantes, outorgas e processos administrativos e judiciais, unindo técnica e jurídico."],
            ].map(([Icon, title, text], index) => {
              const ServiceIcon = Icon as typeof Leaf;
              return <article className="service reveal" key={String(title)}><span>0{index + 1}</span><ServiceIcon /><h3>{String(title)}</h3><p>{String(text)}</p></article>;
            })}
          </div>
          <p className="also reveal"><strong>E também:</strong> PGR · PCMSO · Treinamentos NR · ISO 9001 · ISO 14001 · ISO 45001</p>
        </div>
      </section>

      <section className="proof section-pad">
        <div className="shell">
          <SectionIntro eyebrow="Empresas que confiam na AM" title="Experiência construída ao lado de quem leva conformidade a sério." copy="Conheça algumas das empresas que já contaram com a atuação técnica e jurídica da AM." />
        </div>
        <div className="logo-marquee reveal" aria-label="Empresas atendidas pela AM">
          <div className="logo-track">
            {[...CLIENT_LOGOS, ...CLIENT_LOGOS].map((client, index) => (
              <div className="client-logo" key={`${client.name}-${index}`} aria-hidden={index >= CLIENT_LOGOS.length}>
                <img src={client.src} alt={index < CLIENT_LOGOS.length ? client.name : ""} />
              </div>
            ))}
          </div>
        </div>
        <div className="shell">
          <div className="numbers reveal">
            <div><strong>3 em cada 4</strong><span>clientes de 2026 já tinham trabalhado com a AM</span></div>
            <div><strong>281</strong><span>trabalhos fechados em 2026</span></div>
            <div><strong>9</strong><span>Due Diligences conduzidas no último ano, sob sigilo</span></div>
          </div>
        </div>
      </section>

      <section className="faq section-pad">
        <div className="shell faq-grid">
          <div><span className="eyebrow">O que quem decide costuma perguntar</span><h2>Respostas diretas para decisões importantes.</h2></div>
          <div className="faq-list">
            {[
              ["Vocês conseguem entregar até uma data específica?", "Sim, desde que o prazo seja compatível com o escopo. Em Due Diligence, a equipe dedica uma semana cheia à unidade, conforme o trabalho contratado."],
              ["Preciso levar a proposta para aprovação interna. Como funciona?", "A proposta apresenta escopo, atividades, prazo e valor por escrito. Nos casos complexos, validamos a tabela de atividades e podemos preparar um resumo executivo."],
              ["Encontrei um fornecedor mais barato. E agora?", "A comparação precisa ser feita pelo escopo e pelo que será efetivamente entregue. O valor considera a complexidade técnica, jurídica e o risco envolvido."],
              ["Como vocês trabalham o sigilo?", "A identificação é genérica e a AM não divulga publicamente qual unidade, cliente ou cidade foi visitada. O sigilo orienta todo o processo."],
              ["Vocês atendem minha região?", "Sim. A sede fica em Araxá/MG, com atendimento em MG, BA, TO, MT, MS, GO e DF e deslocamento quando o trabalho exige presença."],
              ["O que a AM não faz?", "Não fornecemos mão de obra fixa terceirizada, nem realizamos consultas ou exames médicos. Nesses casos, indicamos profissionais especializados."],
            ].map(([question, answer]) => <details key={question} className="reveal"><summary>{question}<ChevronDown /></summary><p>{answer}</p></details>)}
          </div>
        </div>
      </section>

      <section className="location section-pad" id="localizacao">
        <div className="shell location-grid">
          <div className="location-copy reveal">
            <span className="eyebrow">Araxá, Minas Gerais</span>
            <h2>Conhecimento local. Atuação onde a sua operação precisa.</h2>
            <p>A sede da AM está em Araxá, um dos polos de mineração mais relevantes do país, com atendimento a operações em diferentes estados.</p>
            <Button asChild variant="outline"><a href="https://maps.app.goo.gl/kvMUFwzgUyWwnZsR9" target="_blank" rel="noreferrer"><MapPin /> Ver no Google Maps</a></Button>
          </div>
          <div className="map-frame reveal">
            <iframe title="Localização da AM Assessoria e Consultoria em Araxá" src="https://www.google.com/maps?q=-19.6026272,-46.938939&z=15&output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
          </div>
        </div>
      </section>

      <section className="contact section-pad" id="contato">
        <div className="shell contact-grid">
          <div className="contact-copy reveal">
            <span className="eyebrow eyebrow-on-dark">Sem pressão. Sem compromisso.</span>
            <h2>Antes que vire problema, saiba onde estão os riscos.</h2>
            <p>Conte o que você precisa analisar. A AM responde no mesmo dia, entende o escopo e apresenta o caminho possível. <strong>Você decide no seu tempo.</strong></p>
            <div className="direct-contact"><a href={WHATSAPP_URL}><MessageCircle /> (34) 99916-9043</a><a href="mailto:comercial@amssma.com.br"><Mail /> comercial@amssma.com.br</a></div>
          </div>
          <form className="contact-form reveal" onSubmit={submitContact}>
            <div className="field-row"><label>Seu nome<input name="nome" required autoComplete="name" /></label><label>Empresa<input name="empresa" required autoComplete="organization" /></label></div>
            <div className="field-row"><label>E-mail corporativo<input name="email" type="email" required autoComplete="email" /></label><label>Telefone ou WhatsApp<input name="telefone" required autoComplete="tel" /></label></div>
            <label>O que você precisa?<select name="necessidade" required defaultValue=""><option value="" disabled>Selecione uma opção</option><option>Due Diligence ambiental e de SST</option><option>Auditoria / diagnóstico EHS-SSMA</option><option>Assessoria ambiental jurídica</option><option>Licenças, condicionantes e outorgas</option><option>Outro</option></select></label>
            <Button type="submit" size="lg" className="submit-button">Receber escopo e valor <ArrowRight /></Button>
            <small>Seus dados são utilizados apenas para retornar este contato e tratados com sigilo.</small>
          </form>
        </div>
      </section>

      <footer>
        <div className="shell footer-inner"><BrandMark /><p>Due Diligence Ambiental e de SST · Auditoria EHS/SSMA · Assessoria Ambiental Jurídica</p><span>© 2026 AM Assessoria e Consultoria</span></div>
      </footer>

      <a className="whatsapp-float" href={WHATSAPP_URL} target="_blank" rel="noreferrer" aria-label="Falar com a AM pelo WhatsApp"><MessageCircle /></a>
    </main>
  );
}