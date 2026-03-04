import React, { createContext, useContext, useEffect, useState, useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';

export type Language = 'pt' | 'en' | 'es';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

type TranslationValue = string | Record<string, string>;
type Translations = Record<Language, Record<string, TranslationValue>>;

export const translations: Translations = {
  pt: {
    // Header
    'nav.solucoes': 'Soluções',
    'nav.areas': 'Áreas de expertise',
    'nav.grupo': 'Grupo DRS',
    'nav.insights': 'Insights',
    'nav.contato': 'Contato',
    'nav.portal': 'Portal 360 DRS',

    // Home - Hero
    'home.hero.title': 'Conectamos ciência e pessoas',
    'home.hero.description': 'Entregamos resultados e criamos soluções personalizadas para indústria farmacêutica, CROs e centros de pesquisa clínica com tecnologia proprietária.',
    'home.hero.cta': 'Saiba mais',
    'home.hero.video.title': 'Vídeo Institucional DRS',
    'home.hero.video.description': 'Vídeo institucional da DRS',
    'home.hero.video.ariaLabel': 'Assistir ao vídeo',

    // Home - Stats
    'home.stats.title.line1': 'Resultados que importam.',
    'home.stats.title.line2': 'Soluções que transformam.',
    'home.stats.card1.number': '+500',
    'home.stats.card1.line1': 'protocolos',
    'home.stats.card1.line2': 'sob gestão',
    'home.stats.card1.desc1': 'Atuação em diferentes fases',
    'home.stats.card1.desc2': 'clínicas e terapias.',
    'home.stats.card2.number': '+100',
    'home.stats.card2.line1': 'clientes',
    'home.stats.card2.line2': 'ativos',
    'home.stats.card2.desc1': "Biofarmacêuticas, CRO's,",
    'home.stats.card2.desc2': 'Centros de Pesquisa,',
    'home.stats.card2.desc3': 'Operadoras e Logística.',
    'home.stats.card3.number': '+200.000',
    'home.stats.card3.line1': 'pacientes',
    'home.stats.card3.line2': 'atendidos',
    'home.stats.card3.line3': 'por ano',
    'home.stats.card3.desc1': 'Fazemos a diferença, seja',
    'home.stats.card3.desc2': 'conectando a pesquisa clínica',
    'home.stats.card3.desc3': 'ou viabilizando os tratamentos.',

    // Home - DRS 360 Carousel
    'home.drs360.slide1.title': 'DRS360: Visibilidade 24/7 em tempo real',
    'home.drs360.slide1.description': 'Plataforma proprietária com rastreabilidade e dashboards por estudo.',
    'home.drs360.slide2.title': 'Controle total da sua operação',
    'home.drs360.slide2.description': 'Gerencie todos os processos de forma integrada e eficiente.',

    // Home - Solutions SVG
    'home.solutions.svg.title1': 'Soluções inteligentes para',
    'home.solutions.svg.title2': 'cada etapa na cadeia de saúde',
    'home.solutions.svg.desc1': 'Combinamos inovação, tecnologia e cuidado para',
    'home.solutions.svg.desc2': 'impulsionar projetos essenciais da saúde.',
    'home.solutions.svg.desc3': 'Atuamos em três áreas complementares, conectadas pela',
    'home.solutions.svg.desc4': 'nossa plataforma proprietária DRS 360 e guiadas por um',
    'home.solutions.svg.desc5': 'propósito comum: tornar os estudos clínicos possíveis e',
    'home.solutions.svg.desc6': 'assegurar que cada tratamento chegue a quem precisa.',
    'home.solutions.svg.cta': 'Saiba mais',
    'home.solutions.svg.mobile.title1': 'Soluções',
    'home.solutions.svg.mobile.title2': 'inteligentes para',
    'home.solutions.svg.mobile.title3': 'cada elo da',
    'home.solutions.svg.mobile.title4': 'cadeia da saúde',
    'home.solutions.svg.mobile.desc1': 'Oferecemos muito mais do que',
    'home.solutions.svg.mobile.desc2': 'logística: atuamos como um parceiro',
    'home.solutions.svg.mobile.desc3': 'estratégico na jornada da saúde.',
    'home.solutions.svg.mobile.desc4': ' Atuamos em três áreas',
    'home.solutions.svg.mobile.desc5': 'complementares, conectadas por',
    'home.solutions.svg.mobile.desc6': 'tecnologia própria, DRS360, e por um',
    'home.solutions.svg.mobile.desc7': 'compromisso comum: entregar',
    'home.solutions.svg.mobile.desc8': 'inteligência, confiança e cuidado.',
    'home.solutions.svg.mobile.cta': 'SAIBA MAIS',
    'home.solutions.cts': 'Clinical Trial Services - CTS',
    'home.solutions.pcs': 'Patient Centric Services - PCS',
    'home.solutions.tis': 'Thermo Integrated Services - TIS',

    // Home - DRS 360 Section
    'home.drs360section.tag': 'DRS 360',
    'home.drs360section.title': 'Planejamento, controle, rastreabilidade e decisões em tempo real - tudo em um só lugar',

    // Home - World Map
    'home.worldmap.tag': 'NOSSA REDE MUNDIAL',

    // CTA Section
    'cta.title': 'Transforme sua operação em saúde com o apoio da DRS.',
    'cta.button': 'Saiba mais',
    'cta.contact.text': 'Entre em contato e descubra como nossa tecnologia pode acelerar resultados.',

    // Cookie Consent
    'cookie.message': 'Utilizamos cookies (e técnicas semelhantes) para melhorar a sua experiência no nosso site. Também nos ajudam a entender como o nosso site está sendo usado. Pode ler o nosso',
    'cookie.link': 'Aviso de Cookies',
    'cookie.button': 'ACEITO',
    'cookie.suffix': '. Ao clicar "ACEITO" consente na nossa utilização de cookies.',

    // Footer
    'footer.cta.title.line1': 'Conectamos sua necessidade',
    'footer.cta.title.line2': 'com a solução ideal.',
    'footer.cta.button': 'Fale com nossa equipe de vendas',
    'footer.contact': 'Contato',
    'footer.contact.email': 'E-mail:',
    'footer.contact.commercial': 'Comercial:',
    'footer.contact.sac': 'SAC / Programa de suporte:',
    'footer.contact.careers': 'Trabalhe Conosco:',
    'footer.contact.careers.link': 'Clique aqui',
    'footer.addresses': 'Endereços',
    'footer.community': 'Comunidade',
    'footer.social': 'Siga a DRS Group nas redes sociais',
    'footer.rights': '© 2026 DRS Group - Todos os direitos reservados',
    'footer.privacy': 'Política de Privacidade',
    'footer.terms': 'Termos de Uso',
    'footer.cookies': 'Política de Cookies',

    // Soluções Page
    'solucoes.hero.title': 'O ecossistema que integra tecnologia, inteligência e cuidado em saúde.',
    'solucoes.text1': 'Nossas soluções oferecem infraestrutura validada, rastreabilidade em tempo real e um cuidado verdadeiramente humanizado para apoiar projetos críticos, estudos clínicos e entregas domiciliares para pacientes.',
    'solucoes.text2': 'Nosso trabalho se organiza em três áreas complementares, integradas por um propósito comum — oferecer inteligência, confiança e cuidado para que cada entrega faça diferença na vida de quem mais importa: o paciente.',
    'solucoes.cts.svg.title': 'Clinical Trial Services - CTS',
    'solucoes.cts.svg.subtitle1': 'O sucesso dos estudos clínicos são viabilizados',
    'solucoes.cts.svg.subtitle2': 'por nossas soluções integradas.',
    'solucoes.cts.svg.desc1': 'Conectamos a pesquisa clínica com soluções validadas,',
    'solucoes.cts.svg.desc2': 'alta performance e conformidade internacional.',
    'solucoes.cts.svg.desc3': 'Gerenciamos cada etapa com precisão, garantindo uma',
    'solucoes.cts.svg.desc4': 'logística segura, regulada e rastreável.',
    'solucoes.cts.svg.cta': 'Conheça nossas soluções para estudos clínicos',
    'solucoes.cts.diff.title': 'Nossos diferenciais - CTS',
    'solucoes.cts.diff.item1': '• Gestão digital integrada com Sponsors,',
    'solucoes.cts.diff.item1b': 'CROs e centros de pesquisa via DRS360',
    'solucoes.cts.diff.item2': '• Pesquisa Clínica está em nosso DNA',
    'solucoes.cts.diff.item3': '• Equipe altamente especializada e',
    'solucoes.cts.diff.item3b': 'infraestrutura tecnológica descentralizada',
    'solucoes.pcs.svg.title': 'Patient Centric Services - PCS',
    'solucoes.pcs.svg.subtitle1': 'Excelência clínica com foco no paciente em',
    'solucoes.pcs.svg.subtitle2': 'toda a jornada de cuidado.',
    'solucoes.pcs.svg.cta': 'Veja como apoiamos o cuidado centrado no paciente',
    'solucoes.pcs.diff.title': 'Nossos diferenciais - PCS',
    'solucoes.tis.svg.title': 'Thermo Integrated Services - TIS',
    'solucoes.tis.svg.cta': 'Conheça nossas soluções em cadeia fria',
    'solucoes.tis.diff.title': 'Nossos diferenciais - TIS',

    // Grupo DRS
    'grupo.hero.tag': 'DRS 360',
    'grupo.hero.title': 'Somos referência em pesquisa clínica, tecnologia e inovação aplicadas à saúde',
    'grupo.text1': 'O Grupo DRS é um ecossistema integrado que impulsiona a evolução da saúde por meio de pesquisa clínica, armazenagem especializada, tecnologia avançada, programas de suporte ao paciente, soluções regulatórias e embalagens térmicas de alta performance.',
    'grupo.text2': 'Transformamos a jornada de medicamentos, dados e pessoas com precisão, governança e responsabilidade.',
    'grupo.text3': 'Com presença no Brasil, Argentina e Europa, operamos com uma infraestrutura que amplia nossa capacidade de inovação e assegura padrões internacionais de qualidade. Movemos produtos e entregamos confiança, rastreabilidade e adesão ao tratamento — gerando impacto real na vida dos pacientes.',
    'grupo.text4': 'Excelência validada, visão de futuro e compromisso absoluto com o cuidado.\nEssa é a nossa essência.',
    'grupo.impact.tag': 'Impacto e Capacidade',
    'grupo.impact.card1.number': '+30',
    'grupo.impact.card1.unit': 'mil',
    'grupo.impact.card1.title': 'pacientes',
    'grupo.impact.card1.desc1': 'atendidos com suporte clínico e',
    'grupo.impact.card1.desc2': 'logístico',
    'grupo.impact.card2.number': '+400',
    'grupo.impact.card2.title': 'estudos clínicos',
    'grupo.impact.card2.desc': 'apoiados em todas as fases',
    'grupo.impact.card3.number': '+50',
    'grupo.impact.card3.unit': 'mil',
    'grupo.impact.card3.title': 'kits clínicos',
    'grupo.impact.card3.desc': 'montados e rastreados',
    'grupo.nossotime': 'Nosso time',
    'grupo.certificacoes': 'Certificações',

    // DRS 360 Page
    'drs360.hero.tag': 'DRS 360',
    'drs360.hero.title': 'Conectando tecnologia, logística e cuidado em tempo real',
    'drs360.text1': 'O DRS 360 é a <strong>plataforma digital</strong> desenvolvida pelo Grupo DRS para oferecer gestão completa e rastreabilidade em tempo real de cada operação.',
    'drs360.text2': 'Por meio do DRS 360, biofarmacêuticas, CROs, centros de pesquisa, operadoras de saúde e parceiros logísticos monitoram e gerenciam seus próprios projetos, com total segurança, autonomia e visibilidade — sempre dentro de um ambiente exclusivo e protegido.',
    'drs360.text3': 'Integrando dados, tecnologia e operação, o DRS 360 proporciona controle real, precisão contínua e cuidado em cada entrega.',
    'drs360.funcionalidades': 'NOSSAS FUNCIONALIDADES',
    'drs360.beneficios': 'VANTAGENS ESTRATÉGICAS',
    'drs360.seguranca.tag': 'SEGURANÇA E COMPLIANCE',
    'drs360.acesse': 'Acesse o DRS 360',

    // Contact Page
    'contato.hero.title': 'Se você deseja trabalhar conosco ou enviar uma proposta como fornecedor, acesse os canais abaixo:',
    'contato.supplier': 'Sou fornecedor',
    'contato.careers': 'Quero trabalhar com vocês',
    'contato.form.title': 'Quer saber mais sobre nossos serviços ou entender como podemos apoiar seu projeto?',
    'contato.form.subtitle': 'Preencha o formulário ao lado e nosso time comercial entrará em contato com você o mais breve possível.',
    'contato.form.name': 'Nome',
    'contato.form.email': 'E-mail',
    'contato.form.company': 'Empresa',
    'contato.form.phone': 'Telefone',
    'contato.form.message': 'Mensagem',
    'contato.form.privacy': 'Li e concordo com a',
    'contato.form.privacy.link': 'política de privacidade',
    'contato.form.submit': 'Enviar',
    'contato.success.title': 'Mensagem enviada com sucesso!',
    'contato.success.message': 'Em breve entraremos em contato.',

    // CTS Page
    'cts.hero.tag': 'CTS',
    'cts.hero.title': 'Clinical Trial Services',
    'cts.hero.description': 'Soluções completas para pesquisa clínica, do início ao fim.',
    'cts.text1': 'Viabilizamos centros de pesquisa, CROs e biofarmacêuticas com uma estrutura validada, rastreável e conectada por tecnologia proprietária.',
    'cts.text2': 'Nossa atuação abrange todas as etapas dos estudos clínicos, desde a importação de insumos até a distribuição de kits randomizados, em conformidade com as agências regulatórias globais.',
    'cts.text3': 'Cada etapa é pensada para garantir segurança, rastreabilidade e conformidade com padrões internacionais e agências reguladoras, GDP, ICH-GCP, FDA, EMA e ANVISA.',
    'cts.solutions.tag': 'NOSSAS SOLUÇÕES',
    'cts.cta.title': 'Conecte seu projeto clínico a uma rede de soluções inteligentes, seguras e rastreáveis.',
    'cts.cta.button': 'Fale com nosso time de soluções',
    'cts.saibamais': 'SAIBA MAIS',

    // PCS Page
    'pcs.hero.tag': 'PCS',
    'pcs.hero.title': 'Patient Centric Services',
    'pcs.hero.description': 'Precisão operacional que acelera o desenvolvimento das terapias que transformam vidas.',
    'pcs.text1': 'Patient Centric Services (PCS) leva a expertise da DRS além da pesquisa clínica, ampliando o cuidado para a fase pós-estudo com foco total no paciente.',
    'pcs.text2': 'Conectamos serviços clínicos, gestão digital e suporte humano para garantir adesão, rastreabilidade e segurança em cada etapa do tratamento.',
    'pcs.solutions.tag': 'NOSSAS SOLUÇÕES',
    'pcs.cta.title': 'Quer soluções que coloquem o paciente no centro da operação?',
    'pcs.cta.button': 'Fale com nosso time',
    'pcs.saibamais': 'SAIBA MAIS',

    // TIS Page
    'tis.hero.tag': 'TIS',
    'tis.hero.title': 'Thermo Integrated Services',
    'tis.hero.description': 'Seus produtos avançaram — e nós evoluímos junto. Oferecemos tecnologia, precisão e inteligência logística à altura das terapias mais inovadoras.',
    'tis.text1': 'Elevamos o padrão da cadeia fria ao oferecer soluções completas e integradas, combinando embalagens reutilizáveis de alta performance, tecnologia avançada de monitoramento e gestão logística especializada.',
    'tis.text2': 'Com soluções ready-to-use e rastreabilidade em tempo real, asseguramos segurança, agilidade e máxima confiabilidade em cada etapa — do primeiro movimento até a entrega final.',
    'tis.solutions.tag': 'NOSSAS SOLUÇÕES',
    'tis.cta.title': 'Precisa de soluções inteligentes para cadeia fria?',
    'tis.cta.button': 'Fale com nosso time',
    'tis.saibamais': 'SAIBA MAIS',

    // DRS 360 section (reusable)
    'drs360.section.tag': 'DRS 360',
    'drs360.section.title': 'Gestão digital que conecta dados, operação e cuidado em tempo real.',
    'drs360.section.desc': 'Gestão digital completa para pesquisa clínica com rastreabilidade total.',
    'drs360.section.cta': 'CONHEÇA O DRS 360',

    // Insights Page
    'insights.hero.title': 'As últimas notícias, entrevistas, tecnologias e recursos do setor.',
    'insights.search': 'Buscar',
    'insights.categories': 'Categorias',
    'insights.similar': 'Insights similares',
    'insights.more': 'Mais',
    'insights.share': 'Compartilhar',

    // Privacy Policy
    'privacy.title': 'Política de Privacidade',

    // WorldMap
    'worldmap.close': 'Fechar',

    // Solucoes - PCS diff items
    'solucoes.pcs.diff.item1': '• Gestão por profissionais de saúde,',
    'solucoes.pcs.diff.item1b': 'com precisão e qualidade clínica.',
    'solucoes.pcs.diff.item2': '• Maior adesão e menos perdas ao',
    'solucoes.pcs.diff.item2b': 'longo do tratamento.',
    'solucoes.pcs.diff.item3': '• Atendimento humanizado integrado à',
    'solucoes.pcs.diff.item3b': 'logística especializada.',
    'solucoes.pcs.diff.item4': '• Acompanhamento individualizado com',
    'solucoes.pcs.diff.item4b': 'DRS 360.',
    'solucoes.pcs.svg.desc1': 'Serviços especializados que viabilizam o acesso e o',
    'solucoes.pcs.svg.desc2': 'suporte a terapias inovadoras e de alta complexidade.',
    'solucoes.pcs.svg.desc3': 'Gestão integral de programas de suporte, atendimento',
    'solucoes.pcs.svg.desc4': 'e comercialização - unindo cuidado humanizado,',
    'solucoes.pcs.svg.desc5': 'profissionais de saúde, tecnologia e logística.',
    'solucoes.tis.svg.subtitle': 'Cadeia fria inteligente e sustentável.',
    'solucoes.tis.svg.desc1': 'Asseguramos o transporte de produtos sensíveis com',
    'solucoes.tis.svg.desc2': 'soluções de cadeia fria customizadas, monitoramento',
    'solucoes.tis.svg.desc3': 'contínuo em tempo real e embalagens sustentáveis —',
    'solucoes.tis.svg.desc4': 'unindo segurança, precisão e responsabilidade ambiental.',
    'solucoes.tis.diff.item1': '• Embalagens de alta performance,',
    'solucoes.tis.diff.item1b': 'reutilizáveis, validadas globalmente',
    'solucoes.tis.diff.item1c': 'e em tamanhos variados.',
    'solucoes.tis.diff.item2': '• Telemetria em tempo real -',
    'solucoes.tis.diff.item2b': 'Geolocalização, temperatura, umidade,',
    'solucoes.tis.diff.item2c': 'sensor de queda e luminosidade',
    'solucoes.tis.diff.item3': '• Redução e compensação do impacto',
    'solucoes.tis.diff.item3b': 'ambiental',
    'solucoes.tis.diff.item4': '• Ready-to-use - Embalagens prontas',
    'solucoes.tis.diff.item4b': 'para uso sobre demanda e integradas',
    'solucoes.tis.diff.item4c': 'com serviços logísticos.',
    'solucoes.table.alt': 'Tabela de Soluções',
    'solucoes.table.part1': 'Tabela de Soluções - Parte 1',
    'solucoes.table.part2': 'Tabela de Soluções - Parte 2',
    'solucoes.cts.svg.mobile.desc1': 'Logística regulada e rastreável para',
    'solucoes.cts.svg.mobile.desc2': 'estudos clínicos em qualquer fase.',
    'solucoes.cts.svg.mobile.desc3': 'Conectamos todos os pontos da',
    'solucoes.cts.svg.mobile.desc4': 'pesquisa com soluções validadas,',
    'solucoes.cts.svg.mobile.desc5': 'performance comprovada e',
    'solucoes.cts.svg.mobile.desc6': 'compliance internacional — da',
    'solucoes.cts.svg.mobile.desc7': 'importação ao centro de estudo.',

    // Orange CTA (shared across pages)
    'cta.orange.title': 'Transforme sua operação em saúde com o apoio da DRS.',
    'cta.orange.contact': 'Entre em contato e descubra como nossa tecnologia pode acelerar resultados.',

    // DRS360 bottom section (shared across area pages)
    'drs360.bottom.title': 'Gestão Digital para acelerar a pesquisa clínica com precisão.',
    'drs360.bottom.desc': 'Descubra como integrar eficiência, visibilidade e compliance em seus estudos com a plataforma DRS 360.',
    'drs360.bottom.cta': 'Conheça a DRS360',

    // Grupo DRS extra keys
    'grupo.missao.title': 'Missão',
    'grupo.missao.text': 'Transformar inovação e tecnologia em soluções estratégicas que garantam a entrega eficiente de produtos essenciais para a saúde, promovendo o bem-estar dos pacientes e apoiando com excelência no desenvolvimento de terapias inovadoras. Comprometemo-nos com práticas sustentáveis, governança responsável e impacto social positivo, contribuindo para um ecossistema de saúde mais ético, inclusivo e ambientalmente consciente.',
    'grupo.visao.title': 'Visão',
    'grupo.visao.text': 'Ser referência global no desenvolvimento de tecnologias inovadoras e gestão inteligente de informações em saúde, tornando-se o parceiro estratégico das indústrias biofarmacêuticas, CROs, operadores logísticos e comunidade científica.',
    'grupo.valores.title': 'Os nossos valores:',
    'grupo.tagline': 'Combinamos ciência, rastreabilidade e atendimento humano para transformar a jornada da saúde: do laboratório ao paciente.',
    'grupo.diferencial.title': 'Nosso diferencial é como trabalhamos',
    'grupo.diferencial.desc': 'Integramos alta performance logística com inteligência de dados e cuidado clínico.',
    'grupo.nossotime.title': 'Nosso time',
    'grupo.nossotime.subtitle': 'Pessoas que cuidam de pessoas, com excelência e empatia.',
    'grupo.nossotime.cta': 'Faça parte do nosso time!',
    'grupo.ondeatuamos': 'Onde atuamos',
    'grupo.ondeatuamos.desc': 'Oferecemos soluções completas que conectam pesquisa clínica, tecnologia e cuidado para a saúde. Atuamos como parceiros estratégicos em toda a jornada, garantindo segurança, eficiência e atendimento humanizado em cada etapa do processo.',
    'grupo.nossaatuacao': 'Nossa atuação se divide em três áreas principais:',
    'grupo.drs360.platform': 'Tudo isso é potencializado pela nossa plataforma proprietária, a DRS 360, que monitora em tempo real, gera alertas inteligentes e oferece controle total da operação. Com ela, sponsors, centros de pesquisa e operadoras acompanham cada etapa com transparência e agilidade.',
    'grupo.drs360.cta': 'Conheça todos os nossos serviços',
    'grupo.cert.title': 'Certificações e Conformidades',
    'grupo.cert.subtitle': 'Excelência reconhecida, com qualidade validada em cada etapa.',
    'grupo.cert.desc': 'A DRS opera em conformidade com os mais altos padrões regulatórios nacionais e internacionais, garantindo segurança, rastreabilidade e confiança em toda a cadeia da saúde',

    // Misc
    'saibamais': 'SAIBA MAIS',
    'fechar': 'FECHAR',
  },
  en: {
    // Header
    'nav.solucoes': 'Solutions',
    'nav.areas': 'Areas of expertise',
    'nav.grupo': 'DRS Group',
    'nav.insights': 'Insights',
    'nav.contato': 'Contact',
    'nav.portal': 'Portal 360 DRS',

    // Home - Hero
    'home.hero.title': 'We connect science and people',
    'home.hero.description': 'We deliver results and create customized solutions for the pharmaceutical industry, CROs and clinical research centers with proprietary technology.',
    'home.hero.cta': 'Learn more',
    'home.hero.video.title': 'DRS Institutional Video',
    'home.hero.video.description': 'DRS institutional video',
    'home.hero.video.ariaLabel': 'Watch the video',

    // Home - Stats
    'home.stats.title.line1': 'Results that matter.',
    'home.stats.title.line2': 'Solutions that transform.',
    'home.stats.card1.number': '+500',
    'home.stats.card1.line1': 'protocols',
    'home.stats.card1.line2': 'under management',
    'home.stats.card1.desc1': 'Operating in different clinical',
    'home.stats.card1.desc2': 'phases and therapies.',
    'home.stats.card2.number': '+100',
    'home.stats.card2.line1': 'active',
    'home.stats.card2.line2': 'clients',
    'home.stats.card2.desc1': "Biopharmaceuticals, CRO's,",
    'home.stats.card2.desc2': 'Research Centers,',
    'home.stats.card2.desc3': 'Operators and Logistics.',
    'home.stats.card3.number': '+200,000',
    'home.stats.card3.line1': 'patients',
    'home.stats.card3.line2': 'served',
    'home.stats.card3.line3': 'per year',
    'home.stats.card3.desc1': 'We make a difference,',
    'home.stats.card3.desc2': 'connecting clinical research',
    'home.stats.card3.desc3': 'or enabling treatments.',

    // Home - DRS 360 Carousel
    'home.drs360.slide1.title': 'DRS360: 24/7 Real-Time Visibility',
    'home.drs360.slide1.description': 'Proprietary platform with traceability and dashboards per study.',
    'home.drs360.slide2.title': 'Total control of your operation',
    'home.drs360.slide2.description': 'Manage all processes in an integrated and efficient way.',

    // Home - Solutions SVG
    'home.solutions.svg.title1': 'Smart solutions for',
    'home.solutions.svg.title2': 'every stage in the health chain',
    'home.solutions.svg.desc1': 'We combine innovation, technology and care to',
    'home.solutions.svg.desc2': 'drive essential health projects.',
    'home.solutions.svg.desc3': 'We operate in three complementary areas, connected by',
    'home.solutions.svg.desc4': 'our proprietary DRS 360 platform and guided by a',
    'home.solutions.svg.desc5': 'common purpose: making clinical studies possible and',
    'home.solutions.svg.desc6': 'ensuring each treatment reaches those who need it.',
    'home.solutions.svg.cta': 'Learn more',
    'home.solutions.svg.mobile.title1': 'Smart',
    'home.solutions.svg.mobile.title2': 'solutions for',
    'home.solutions.svg.mobile.title3': 'every link in',
    'home.solutions.svg.mobile.title4': 'the health chain',
    'home.solutions.svg.mobile.desc1': 'We offer much more than',
    'home.solutions.svg.mobile.desc2': 'logistics: we act as a strategic',
    'home.solutions.svg.mobile.desc3': 'partner in the health journey.',
    'home.solutions.svg.mobile.desc4': ' We operate in three',
    'home.solutions.svg.mobile.desc5': 'complementary areas, connected by',
    'home.solutions.svg.mobile.desc6': 'proprietary technology, DRS360, and by a',
    'home.solutions.svg.mobile.desc7': 'common commitment: delivering',
    'home.solutions.svg.mobile.desc8': 'intelligence, trust and care.',
    'home.solutions.svg.mobile.cta': 'LEARN MORE',
    'home.solutions.cts': 'Clinical Trial Services - CTS',
    'home.solutions.pcs': 'Patient Centric Services - PCS',
    'home.solutions.tis': 'Thermo Integrated Services - TIS',

    // Home - DRS 360 Section
    'home.drs360section.tag': 'DRS 360',
    'home.drs360section.title': 'Planning, control, traceability and real-time decisions - all in one place',

    // Home - World Map
    'home.worldmap.tag': 'OUR GLOBAL NETWORK',

    // CTA Section
    'cta.title': 'Transform your healthcare operation with DRS support.',
    'cta.button': 'Learn more',
    'cta.contact.text': 'Get in touch and discover how our technology can accelerate results.',

    // Cookie Consent
    'cookie.message': 'We use cookies (and similar techniques) to improve your experience on our website. They also help us understand how our website is being used. You can read our',
    'cookie.link': 'Cookie Notice',
    'cookie.button': 'I ACCEPT',
    'cookie.suffix': '. By clicking "I ACCEPT" you consent to our use of cookies.',

    // Footer
    'footer.cta.title.line1': 'We connect your need',
    'footer.cta.title.line2': 'with the ideal solution.',
    'footer.cta.button': 'Talk to our sales team',
    'footer.contact': 'Contact',
    'footer.contact.email': 'Email:',
    'footer.contact.commercial': 'Commercial:',
    'footer.contact.sac': 'SAC / Support Program:',
    'footer.contact.careers': 'Work With Us:',
    'footer.contact.careers.link': 'Click here',
    'footer.addresses': 'Addresses',
    'footer.community': 'Community',
    'footer.social': 'Follow DRS Group on social media',
    'footer.rights': '© 2026 DRS Group - All rights reserved',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Use',
    'footer.cookies': 'Cookie Policy',

    // Soluções Page
    'solucoes.hero.title': 'The ecosystem that integrates technology, intelligence and healthcare.',
    'solucoes.text1': 'Our solutions offer validated infrastructure, real-time traceability and truly humanized care to support critical projects, clinical studies and home deliveries for patients.',
    'solucoes.text2': 'Our work is organized into three complementary areas, integrated by a common purpose — offering intelligence, trust and care so that each delivery makes a difference in the life of those who matter most: the patient.',
    'solucoes.cts.svg.title': 'Clinical Trial Services - CTS',
    'solucoes.cts.svg.subtitle1': 'Clinical study success is enabled',
    'solucoes.cts.svg.subtitle2': 'by our integrated solutions.',
    'solucoes.cts.svg.desc1': 'We connect clinical research with validated solutions,',
    'solucoes.cts.svg.desc2': 'high performance and international compliance.',
    'solucoes.cts.svg.desc3': 'We manage every stage with precision, ensuring',
    'solucoes.cts.svg.desc4': 'safe, regulated and traceable logistics.',
    'solucoes.cts.svg.cta': 'Discover our solutions for clinical studies',
    'solucoes.cts.diff.title': 'Our differentiators - CTS',
    'solucoes.cts.diff.item1': '• Integrated digital management with Sponsors,',
    'solucoes.cts.diff.item1b': 'CROs and research centers via DRS360',
    'solucoes.cts.diff.item2': '• Clinical Research is in our DNA',
    'solucoes.cts.diff.item3': '• Highly specialized team and',
    'solucoes.cts.diff.item3b': 'decentralized technological infrastructure',
    'solucoes.pcs.svg.title': 'Patient Centric Services - PCS',
    'solucoes.pcs.svg.subtitle1': 'Clinical excellence focused on the patient',
    'solucoes.pcs.svg.subtitle2': 'throughout the care journey.',
    'solucoes.pcs.svg.cta': 'See how we support patient-centered care',
    'solucoes.pcs.diff.title': 'Our differentiators - PCS',
    'solucoes.tis.svg.title': 'Thermo Integrated Services - TIS',
    'solucoes.tis.svg.cta': 'Discover our cold chain solutions',
    'solucoes.tis.diff.title': 'Our differentiators - TIS',

    // Grupo DRS
    'grupo.hero.tag': 'DRS 360',
    'grupo.hero.title': 'We are a reference in clinical research, technology and innovation applied to healthcare',
    'grupo.text1': 'DRS Group is an integrated ecosystem that drives the evolution of healthcare through clinical research, specialized storage, advanced technology, patient support programs, regulatory solutions and high-performance thermal packaging.',
    'grupo.text2': 'We transform the journey of medicines, data and people with precision, governance and responsibility.',
    'grupo.text3': 'With a presence in Brazil, Argentina and Europe, we operate with infrastructure that expands our innovation capacity and ensures international quality standards. We move products and deliver trust, traceability and treatment adherence — generating real impact in patients\' lives.',
    'grupo.text4': 'Validated excellence, future vision and absolute commitment to care.\nThis is our essence.',
    'grupo.impact.tag': 'Impact and Capacity',
    'grupo.impact.card1.number': '+30',
    'grupo.impact.card1.unit': 'thousand',
    'grupo.impact.card1.title': 'patients',
    'grupo.impact.card1.desc1': 'served with clinical and',
    'grupo.impact.card1.desc2': 'logistic support',
    'grupo.impact.card2.number': '+400',
    'grupo.impact.card2.title': 'clinical studies',
    'grupo.impact.card2.desc': 'supported in all phases',
    'grupo.impact.card3.number': '+50',
    'grupo.impact.card3.unit': 'thousand',
    'grupo.impact.card3.title': 'clinical kits',
    'grupo.impact.card3.desc': 'assembled and tracked',
    'grupo.nossotime': 'Our Team',
    'grupo.certificacoes': 'Certifications',

    // DRS 360 Page
    'drs360.hero.tag': 'DRS 360',
    'drs360.hero.title': 'Connecting technology, logistics and care in real time',
    'drs360.text1': 'DRS 360 is the <strong>digital platform</strong> developed by DRS Group to offer complete management and real-time traceability of each operation.',
    'drs360.text2': 'Through DRS 360, biopharmaceuticals, CROs, research centers, health operators and logistics partners monitor and manage their own projects, with total security, autonomy and visibility — always within an exclusive and protected environment.',
    'drs360.text3': 'Integrating data, technology and operation, DRS 360 provides real control, continuous precision and care in every delivery.',
    'drs360.funcionalidades': 'OUR FEATURES',
    'drs360.beneficios': 'STRATEGIC ADVANTAGES',
    'drs360.seguranca.tag': 'SECURITY AND COMPLIANCE',
    'drs360.acesse': 'Access DRS 360',

    // Contact Page
    'contato.hero.title': 'If you wish to work with us or send a proposal as a supplier, access the channels below:',
    'contato.supplier': 'I am a supplier',
    'contato.careers': 'I want to work with you',
    'contato.form.title': 'Want to learn more about our services or understand how we can support your project?',
    'contato.form.subtitle': 'Fill out the form and our sales team will contact you as soon as possible.',
    'contato.form.name': 'Name',
    'contato.form.email': 'Email',
    'contato.form.company': 'Company',
    'contato.form.phone': 'Phone',
    'contato.form.message': 'Message',
    'contato.form.privacy': 'I have read and agree with the',
    'contato.form.privacy.link': 'privacy policy',
    'contato.form.submit': 'Send',
    'contato.success.title': 'Message sent successfully!',
    'contato.success.message': 'We will contact you soon.',

    // CTS Page
    'cts.hero.tag': 'CTS',
    'cts.hero.title': 'Clinical Trial Services',
    'cts.hero.description': 'Complete solutions for clinical research, from start to finish.',
    'cts.text1': 'We enable research centers, CROs and biopharmaceuticals with a validated, traceable structure connected by proprietary technology.',
    'cts.text2': 'Our operations cover all stages of clinical studies, from importing supplies to distributing randomized kits, in compliance with global regulatory agencies.',
    'cts.text3': 'Every stage is designed to ensure safety, traceability and compliance with international standards and regulatory agencies, GDP, ICH-GCP, FDA, EMA and ANVISA.',
    'cts.solutions.tag': 'OUR SOLUTIONS',
    'cts.cta.title': 'Connect your clinical project to a network of smart, safe and traceable solutions.',
    'cts.cta.button': 'Talk to our solutions team',
    'cts.saibamais': 'LEARN MORE',

    // PCS Page
    'pcs.hero.tag': 'PCS',
    'pcs.hero.title': 'Patient Centric Services',
    'pcs.hero.description': 'Operational precision that accelerates the development of life-transforming therapies.',
    'pcs.text1': 'Patient Centric Services (PCS) takes DRS expertise beyond clinical research, extending care to the post-study phase with total focus on the patient.',
    'pcs.text2': 'We connect clinical services, digital management and human support to ensure adherence, traceability and safety at every stage of treatment.',
    'pcs.solutions.tag': 'OUR SOLUTIONS',
    'pcs.cta.title': 'Want solutions that put the patient at the center of the operation?',
    'pcs.cta.button': 'Talk to our team',
    'pcs.saibamais': 'LEARN MORE',

    // TIS Page
    'tis.hero.tag': 'TIS',
    'tis.hero.title': 'Thermo Integrated Services',
    'tis.hero.description': 'Your products have advanced — and we evolved with them. We offer technology, precision and logistic intelligence to match the most innovative therapies.',
    'tis.text1': 'We raise the cold chain standard by offering complete and integrated solutions, combining high-performance reusable packaging, advanced monitoring technology and specialized logistics management.',
    'tis.text2': 'With ready-to-use solutions and real-time traceability, we ensure safety, agility and maximum reliability at every stage — from the first movement to the final delivery.',
    'tis.solutions.tag': 'OUR SOLUTIONS',
    'tis.cta.title': 'Need smart solutions for cold chain?',
    'tis.cta.button': 'Talk to our team',
    'tis.saibamais': 'LEARN MORE',

    // DRS 360 section (reusable)
    'drs360.section.tag': 'DRS 360',
    'drs360.section.title': 'Digital management connecting data, operation and care in real time.',
    'drs360.section.desc': 'Complete digital management for clinical research with total traceability.',
    'drs360.section.cta': 'DISCOVER DRS 360',

    // Insights Page
    'insights.hero.title': 'The latest news, interviews, technologies and industry resources.',
    'insights.search': 'Search',
    'insights.categories': 'Categories',
    'insights.similar': 'Similar Insights',
    'insights.more': 'More',
    'insights.share': 'Share',

    // Privacy Policy
    'privacy.title': 'Privacy Policy',

    // WorldMap
    'worldmap.close': 'Close',

    // Solucoes - PCS diff items
    'solucoes.pcs.diff.item1': '• Management by healthcare professionals,',
    'solucoes.pcs.diff.item1b': 'with precision and clinical quality.',
    'solucoes.pcs.diff.item2': '• Greater adherence and fewer losses',
    'solucoes.pcs.diff.item2b': 'throughout treatment.',
    'solucoes.pcs.diff.item3': '• Humanized care integrated with',
    'solucoes.pcs.diff.item3b': 'specialized logistics.',
    'solucoes.pcs.diff.item4': '• Individualized follow-up with',
    'solucoes.pcs.diff.item4b': 'DRS 360.',
    'solucoes.pcs.svg.desc1': 'Specialized services that enable access and',
    'solucoes.pcs.svg.desc2': 'support for innovative and high-complexity therapies.',
    'solucoes.pcs.svg.desc3': 'Comprehensive management of support programs, care',
    'solucoes.pcs.svg.desc4': 'and commercialization - combining humanized care,',
    'solucoes.pcs.svg.desc5': 'healthcare professionals, technology and logistics.',
    'solucoes.tis.svg.subtitle': 'Smart and sustainable cold chain.',
    'solucoes.tis.svg.desc1': 'We ensure the transport of sensitive products with',
    'solucoes.tis.svg.desc2': 'customized cold chain solutions, continuous',
    'solucoes.tis.svg.desc3': 'real-time monitoring and sustainable packaging —',
    'solucoes.tis.svg.desc4': 'combining safety, precision and environmental responsibility.',
    'solucoes.tis.diff.item1': '• High-performance packaging,',
    'solucoes.tis.diff.item1b': 'reusable, globally validated',
    'solucoes.tis.diff.item1c': 'and in various sizes.',
    'solucoes.tis.diff.item2': '• Real-time telemetry -',
    'solucoes.tis.diff.item2b': 'Geolocation, temperature, humidity,',
    'solucoes.tis.diff.item2c': 'drop and light sensors',
    'solucoes.tis.diff.item3': '• Reduction and compensation of',
    'solucoes.tis.diff.item3b': 'environmental impact',
    'solucoes.tis.diff.item4': '• Ready-to-use - Packaging ready',
    'solucoes.tis.diff.item4b': 'for on-demand use and integrated',
    'solucoes.tis.diff.item4c': 'with logistics services.',
    'solucoes.table.alt': 'Solutions Table',
    'solucoes.table.part1': 'Solutions Table - Part 1',
    'solucoes.table.part2': 'Solutions Table - Part 2',
    'solucoes.cts.svg.mobile.desc1': 'Regulated and traceable logistics for',
    'solucoes.cts.svg.mobile.desc2': 'clinical studies in any phase.',
    'solucoes.cts.svg.mobile.desc3': 'We connect all points of',
    'solucoes.cts.svg.mobile.desc4': 'research with validated solutions,',
    'solucoes.cts.svg.mobile.desc5': 'proven performance and',
    'solucoes.cts.svg.mobile.desc6': 'international compliance — from',
    'solucoes.cts.svg.mobile.desc7': 'import to the study center.',

    // Orange CTA
    'cta.orange.title': 'Transform your healthcare operation with DRS support.',
    'cta.orange.contact': 'Get in touch and discover how our technology can accelerate results.',

    // DRS360 bottom section
    'drs360.bottom.title': 'Digital Management to accelerate clinical research with precision.',
    'drs360.bottom.desc': 'Discover how to integrate efficiency, visibility and compliance into your studies with the DRS 360 platform.',
    'drs360.bottom.cta': 'Discover DRS360',

    // Grupo DRS extra keys
    'grupo.missao.title': 'Mission',
    'grupo.missao.text': 'Transform innovation and technology into strategic solutions that ensure the efficient delivery of essential healthcare products, promoting patient well-being and supporting excellence in the development of innovative therapies. We are committed to sustainable practices, responsible governance and positive social impact, contributing to a more ethical, inclusive and environmentally conscious healthcare ecosystem.',
    'grupo.visao.title': 'Vision',
    'grupo.visao.text': 'To be a global reference in the development of innovative technologies and intelligent health information management, becoming the strategic partner of biopharmaceutical industries, CROs, logistics operators and the scientific community.',
    'grupo.valores.title': 'Our values:',
    'grupo.tagline': 'We combine science, traceability and human care to transform the healthcare journey: from the laboratory to the patient.',
    'grupo.diferencial.title': 'Our differentiator is how we work',
    'grupo.diferencial.desc': 'We integrate high-performance logistics with data intelligence and clinical care.',
    'grupo.nossotime.title': 'Our team',
    'grupo.nossotime.subtitle': 'People who care for people, with excellence and empathy.',
    'grupo.nossotime.cta': 'Join our team!',
    'grupo.ondeatuamos': 'Where we operate',
    'grupo.ondeatuamos.desc': 'We offer complete solutions that connect clinical research, technology and healthcare. We act as strategic partners throughout the journey, ensuring safety, efficiency and humanized care at every stage of the process.',
    'grupo.nossaatuacao': 'Our operations are divided into three main areas:',
    'grupo.drs360.platform': 'All of this is powered by our proprietary platform, DRS 360, which monitors in real time, generates intelligent alerts and offers total control of the operation. With it, sponsors, research centers and operators follow every step with transparency and agility.',
    'grupo.drs360.cta': 'Discover all our services',
    'grupo.cert.title': 'Certifications and Compliance',
    'grupo.cert.subtitle': 'Recognized excellence, with validated quality at every stage.',
    'grupo.cert.desc': 'DRS operates in compliance with the highest national and international regulatory standards, ensuring safety, traceability and trust throughout the healthcare chain',

    // Misc
    'saibamais': 'LEARN MORE',
    'fechar': 'CLOSE',
  },
  es: {
    // Header
    'nav.solucoes': 'Soluciones',
    'nav.areas': 'Áreas de expertise',
    'nav.grupo': 'Grupo DRS',
    'nav.insights': 'Insights',
    'nav.contato': 'Contacto',
    'nav.portal': 'Portal 360 DRS',

    // Home - Hero
    'home.hero.title': 'Conectamos ciencia y personas',
    'home.hero.description': 'Entregamos resultados y creamos soluciones personalizadas para la industria farmacéutica, CROs y centros de investigación clínica con tecnología propietaria.',
    'home.hero.cta': 'Sepa más',
    'home.hero.video.title': 'Video Institucional DRS',
    'home.hero.video.description': 'Video institucional de DRS',
    'home.hero.video.ariaLabel': 'Ver el video',

    // Home - Stats
    'home.stats.title.line1': 'Resultados que importan.',
    'home.stats.title.line2': 'Soluciones que transforman.',
    'home.stats.card1.number': '+500',
    'home.stats.card1.line1': 'protocolos',
    'home.stats.card1.line2': 'bajo gestión',
    'home.stats.card1.desc1': 'Actuación en diferentes fases',
    'home.stats.card1.desc2': 'clínicas y terapias.',
    'home.stats.card2.number': '+100',
    'home.stats.card2.line1': 'clientes',
    'home.stats.card2.line2': 'activos',
    'home.stats.card2.desc1': "Biofarmacéuticas, CRO's,",
    'home.stats.card2.desc2': 'Centros de Investigación,',
    'home.stats.card2.desc3': 'Operadoras y Logística.',
    'home.stats.card3.number': '+200.000',
    'home.stats.card3.line1': 'pacientes',
    'home.stats.card3.line2': 'atendidos',
    'home.stats.card3.line3': 'por año',
    'home.stats.card3.desc1': 'Hacemos la diferencia,',
    'home.stats.card3.desc2': 'conectando la investigación clínica',
    'home.stats.card3.desc3': 'o haciendo posibles los tratamientos.',

    // Home - DRS 360 Carousel
    'home.drs360.slide1.title': 'DRS360: Visibilidad 24/7 en tiempo real',
    'home.drs360.slide1.description': 'Plataforma propietaria con trazabilidad y dashboards por estudio.',
    'home.drs360.slide2.title': 'Control total de su operación',
    'home.drs360.slide2.description': 'Gestione todos los procesos de forma integrada y eficiente.',

    // Home - Solutions SVG
    'home.solutions.svg.title1': 'Soluciones inteligentes para',
    'home.solutions.svg.title2': 'cada etapa en la cadena de salud',
    'home.solutions.svg.desc1': 'Combinamos innovación, tecnología y cuidado para',
    'home.solutions.svg.desc2': 'impulsar proyectos esenciales de salud.',
    'home.solutions.svg.desc3': 'Actuamos en tres áreas complementarias, conectadas por',
    'home.solutions.svg.desc4': 'nuestra plataforma propietaria DRS 360 y guiadas por un',
    'home.solutions.svg.desc5': 'propósito común: hacer posibles los estudios clínicos y',
    'home.solutions.svg.desc6': 'asegurar que cada tratamiento llegue a quien lo necesita.',
    'home.solutions.svg.cta': 'Sepa más',
    'home.solutions.svg.mobile.title1': 'Soluciones',
    'home.solutions.svg.mobile.title2': 'inteligentes para',
    'home.solutions.svg.mobile.title3': 'cada eslabón de',
    'home.solutions.svg.mobile.title4': 'la cadena de salud',
    'home.solutions.svg.mobile.desc1': 'Ofrecemos mucho más que',
    'home.solutions.svg.mobile.desc2': 'logística: actuamos como un socio',
    'home.solutions.svg.mobile.desc3': 'estratégico en el camino de la salud.',
    'home.solutions.svg.mobile.desc4': ' Actuamos en tres áreas',
    'home.solutions.svg.mobile.desc5': 'complementarias, conectadas por',
    'home.solutions.svg.mobile.desc6': 'tecnología propia, DRS360, y por un',
    'home.solutions.svg.mobile.desc7': 'compromiso común: entregar',
    'home.solutions.svg.mobile.desc8': 'inteligencia, confianza y cuidado.',
    'home.solutions.svg.mobile.cta': 'SEPA MÁS',
    'home.solutions.cts': 'Clinical Trial Services - CTS',
    'home.solutions.pcs': 'Patient Centric Services - PCS',
    'home.solutions.tis': 'Thermo Integrated Services - TIS',

    // Home - DRS 360 Section
    'home.drs360section.tag': 'DRS 360',
    'home.drs360section.title': 'Planificación, control, trazabilidad y decisiones en tiempo real - todo en un solo lugar',

    // Home - World Map
    'home.worldmap.tag': 'NUESTRA RED MUNDIAL',

    // CTA Section
    'cta.title': 'Transforme su operación en salud con el apoyo de DRS.',
    'cta.button': 'Sepa más',
    'cta.contact.text': 'Contáctenos y descubra cómo nuestra tecnología puede acelerar resultados.',

    // Cookie Consent
    'cookie.message': 'Utilizamos cookies (y técnicas similares) para mejorar su experiencia en nuestro sitio web. También nos ayudan a comprender cómo se está utilizando nuestro sitio. Puede leer nuestro',
    'cookie.link': 'Aviso de Cookies',
    'cookie.button': 'ACEPTO',
    'cookie.suffix': '. Al hacer clic en "ACEPTO" consiente el uso de cookies.',

    // Footer
    'footer.cta.title.line1': 'Conectamos su necesidad',
    'footer.cta.title.line2': 'con la solución ideal.',
    'footer.cta.button': 'Hable con nuestro equipo de ventas',
    'footer.contact': 'Contacto',
    'footer.contact.email': 'Correo electrónico:',
    'footer.contact.commercial': 'Comercial:',
    'footer.contact.sac': 'SAC / Programa de soporte:',
    'footer.contact.careers': 'Trabaje con nosotros:',
    'footer.contact.careers.link': 'Haga clic aquí',
    'footer.addresses': 'Direcciones',
    'footer.community': 'Comunidad',
    'footer.social': 'Siga a DRS Group en las redes sociales',
    'footer.rights': '© 2026 DRS Group - Todos los derechos reservados',
    'footer.privacy': 'Política de Privacidad',
    'footer.terms': 'Términos de Uso',
    'footer.cookies': 'Política de Cookies',

    // Soluções Page
    'solucoes.hero.title': 'El ecosistema que integra tecnología, inteligencia y cuidado en salud.',
    'solucoes.text1': 'Nuestras soluciones ofrecen infraestructura validada, trazabilidad en tiempo real y un cuidado verdaderamente humanizado para apoyar proyectos críticos, estudios clínicos y entregas domiciliarias para pacientes.',
    'solucoes.text2': 'Nuestro trabajo se organiza en tres áreas complementarias, integradas por un propósito común — ofrecer inteligencia, confianza y cuidado para que cada entrega haga la diferencia en la vida de quien más importa: el paciente.',
    'solucoes.cts.svg.title': 'Clinical Trial Services - CTS',
    'solucoes.cts.svg.subtitle1': 'El éxito de los estudios clínicos es posible',
    'solucoes.cts.svg.subtitle2': 'gracias a nuestras soluciones integradas.',
    'solucoes.cts.svg.desc1': 'Conectamos la investigación clínica con soluciones validadas,',
    'solucoes.cts.svg.desc2': 'alto rendimiento y cumplimiento internacional.',
    'solucoes.cts.svg.desc3': 'Gestionamos cada etapa con precisión, garantizando una',
    'solucoes.cts.svg.desc4': 'logística segura, regulada y trazable.',
    'solucoes.cts.svg.cta': 'Conozca nuestras soluciones para estudios clínicos',
    'solucoes.cts.diff.title': 'Nuestros diferenciales - CTS',
    'solucoes.cts.diff.item1': '• Gestión digital integrada con Sponsors,',
    'solucoes.cts.diff.item1b': 'CROs y centros de investigación vía DRS360',
    'solucoes.cts.diff.item2': '• La Investigación Clínica está en nuestro ADN',
    'solucoes.cts.diff.item3': '• Equipo altamente especializado e',
    'solucoes.cts.diff.item3b': 'infraestructura tecnológica descentralizada',
    'solucoes.pcs.svg.title': 'Patient Centric Services - PCS',
    'solucoes.pcs.svg.subtitle1': 'Excelencia clínica enfocada en el paciente',
    'solucoes.pcs.svg.subtitle2': 'en todo el camino del cuidado.',
    'solucoes.pcs.svg.cta': 'Vea cómo apoyamos el cuidado centrado en el paciente',
    'solucoes.pcs.diff.title': 'Nuestros diferenciales - PCS',
    'solucoes.tis.svg.title': 'Thermo Integrated Services - TIS',
    'solucoes.tis.svg.cta': 'Conozca nuestras soluciones en cadena de frío',
    'solucoes.tis.diff.title': 'Nuestros diferenciales - TIS',

    // Grupo DRS
    'grupo.hero.tag': 'DRS 360',
    'grupo.hero.title': 'Somos referencia en investigación clínica, tecnología e innovación aplicadas a la salud',
    'grupo.text1': 'El Grupo DRS es un ecosistema integrado que impulsa la evolución de la salud a través de investigación clínica, almacenaje especializado, tecnología avanzada, programas de soporte al paciente, soluciones regulatorias y embalajes térmicos de alto rendimiento.',
    'grupo.text2': 'Transformamos el recorrido de medicamentos, datos y personas con precisión, gobernanza y responsabilidad.',
    'grupo.text3': 'Con presencia en Brasil, Argentina y Europa, operamos con una infraestructura que amplía nuestra capacidad de innovación y asegura estándares internacionales de calidad. Movemos productos y entregamos confianza, trazabilidad y adherencia al tratamiento — generando impacto real en la vida de los pacientes.',
    'grupo.text4': 'Excelencia validada, visión de futuro y compromiso absoluto con el cuidado.\nEsa es nuestra esencia.',
    'grupo.impact.tag': 'Impacto y Capacidad',
    'grupo.impact.card1.number': '+30',
    'grupo.impact.card1.unit': 'mil',
    'grupo.impact.card1.title': 'pacientes',
    'grupo.impact.card1.desc1': 'atendidos con soporte clínico y',
    'grupo.impact.card1.desc2': 'logístico',
    'grupo.impact.card2.number': '+400',
    'grupo.impact.card2.title': 'estudios clínicos',
    'grupo.impact.card2.desc': 'apoyados en todas las fases',
    'grupo.impact.card3.number': '+50',
    'grupo.impact.card3.unit': 'mil',
    'grupo.impact.card3.title': 'kits clínicos',
    'grupo.impact.card3.desc': 'montados y rastreados',
    'grupo.nossotime': 'Nuestro equipo',
    'grupo.certificacoes': 'Certificaciones',

    // DRS 360 Page
    'drs360.hero.tag': 'DRS 360',
    'drs360.hero.title': 'Conectando tecnología, logística y cuidado en tiempo real',
    'drs360.text1': 'DRS 360 es la <strong>plataforma digital</strong> desarrollada por el Grupo DRS para ofrecer gestión completa y trazabilidad en tiempo real de cada operación.',
    'drs360.text2': 'A través del DRS 360, biofarmacéuticas, CROs, centros de investigación, operadoras de salud y socios logísticos monitorean y gestionan sus propios proyectos, con total seguridad, autonomía y visibilidad — siempre dentro de un ambiente exclusivo y protegido.',
    'drs360.text3': 'Integrando datos, tecnología y operación, el DRS 360 proporciona control real, precisión continua y cuidado en cada entrega.',
    'drs360.funcionalidades': 'NUESTRAS FUNCIONALIDADES',
    'drs360.beneficios': 'VENTAJAS ESTRATÉGICAS',
    'drs360.seguranca.tag': 'SEGURIDAD Y COMPLIANCE',
    'drs360.acesse': 'Acceda al DRS 360',

    // Contact Page
    'contato.hero.title': 'Si desea trabajar con nosotros o enviar una propuesta como proveedor, acceda a los canales a continuación:',
    'contato.supplier': 'Soy proveedor',
    'contato.careers': 'Quiero trabajar con ustedes',
    'contato.form.title': '¿Quiere saber más sobre nuestros servicios o entender cómo podemos apoyar su proyecto?',
    'contato.form.subtitle': 'Complete el formulario y nuestro equipo comercial se comunicará con usted lo antes posible.',
    'contato.form.name': 'Nombre',
    'contato.form.email': 'Correo electrónico',
    'contato.form.company': 'Empresa',
    'contato.form.phone': 'Teléfono',
    'contato.form.message': 'Mensaje',
    'contato.form.privacy': 'He leído y acepto la',
    'contato.form.privacy.link': 'política de privacidad',
    'contato.form.submit': 'Enviar',
    'contato.success.title': '¡Mensaje enviado con éxito!',
    'contato.success.message': 'Pronto nos comunicaremos con usted.',

    // CTS Page
    'cts.hero.tag': 'CTS',
    'cts.hero.title': 'Clinical Trial Services',
    'cts.hero.description': 'Soluciones completas para investigación clínica, de principio a fin.',
    'cts.text1': 'Habilitamos centros de investigación, CROs y biofarmacéuticas con una estructura validada, trazable y conectada por tecnología propietaria.',
    'cts.text2': 'Nuestra actuación abarca todas las etapas de los estudios clínicos, desde la importación de insumos hasta la distribución de kits aleatorizados, en cumplimiento con las agencias regulatorias globales.',
    'cts.text3': 'Cada etapa está pensada para garantizar seguridad, trazabilidad y cumplimiento con estándares internacionales y agencias reguladoras, GDP, ICH-GCP, FDA, EMA y ANVISA.',
    'cts.solutions.tag': 'NUESTRAS SOLUCIONES',
    'cts.cta.title': 'Conecte su proyecto clínico a una red de soluciones inteligentes, seguras y trazables.',
    'cts.cta.button': 'Hable con nuestro equipo de soluciones',
    'cts.saibamais': 'SEPA MÁS',

    // PCS Page
    'pcs.hero.tag': 'PCS',
    'pcs.hero.title': 'Patient Centric Services',
    'pcs.hero.description': 'Precisión operacional que acelera el desarrollo de terapias que transforman vidas.',
    'pcs.text1': 'Patient Centric Services (PCS) lleva la experiencia de DRS más allá de la investigación clínica, ampliando el cuidado a la fase pos-estudio con enfoque total en el paciente.',
    'pcs.text2': 'Conectamos servicios clínicos, gestión digital y soporte humano para garantizar adherencia, trazabilidad y seguridad en cada etapa del tratamiento.',
    'pcs.solutions.tag': 'NUESTRAS SOLUCIONES',
    'pcs.cta.title': '¿Quiere soluciones que pongan al paciente en el centro de la operación?',
    'pcs.cta.button': 'Hable con nuestro equipo',
    'pcs.saibamais': 'SEPA MÁS',

    // TIS Page
    'tis.hero.tag': 'TIS',
    'tis.hero.title': 'Thermo Integrated Services',
    'tis.hero.description': 'Sus productos avanzaron — y nosotros evolucionamos junto. Ofrecemos tecnología, precisión e inteligencia logística a la altura de las terapias más innovadoras.',
    'tis.text1': 'Elevamos el estándar de la cadena de frío al ofrecer soluciones completas e integradas, combinando embalajes reutilizables de alto rendimiento, tecnología avanzada de monitoreo y gestión logística especializada.',
    'tis.text2': 'Con soluciones ready-to-use y trazabilidad en tiempo real, aseguramos seguridad, agilidad y máxima confiabilidad en cada etapa — del primer movimiento hasta la entrega final.',
    'tis.solutions.tag': 'NUESTRAS SOLUCIONES',
    'tis.cta.title': '¿Necesita soluciones inteligentes para cadena de frío?',
    'tis.cta.button': 'Hable con nuestro equipo',
    'tis.saibamais': 'SEPA MÁS',

    // DRS 360 section (reusable)
    'drs360.section.tag': 'DRS 360',
    'drs360.section.title': 'Gestión digital que conecta datos, operación y cuidado en tiempo real.',
    'drs360.section.desc': 'Gestión digital completa para investigación clínica con trazabilidad total.',
    'drs360.section.cta': 'CONOZCA EL DRS 360',

    // Insights Page
    'insights.hero.title': 'Las últimas noticias, entrevistas, tecnologías y recursos del sector.',
    'insights.search': 'Buscar',
    'insights.categories': 'Categorías',
    'insights.similar': 'Insights similares',
    'insights.more': 'Más',
    'insights.share': 'Compartir',

    // Privacy Policy
    'privacy.title': 'Política de Privacidad',

    // WorldMap
    'worldmap.close': 'Cerrar',

    // Solucoes - PCS diff items
    'solucoes.pcs.diff.item1': '• Gestión por profesionales de salud,',
    'solucoes.pcs.diff.item1b': 'con precisión y calidad clínica.',
    'solucoes.pcs.diff.item2': '• Mayor adherencia y menos pérdidas',
    'solucoes.pcs.diff.item2b': 'a lo largo del tratamiento.',
    'solucoes.pcs.diff.item3': '• Atención humanizada integrada a la',
    'solucoes.pcs.diff.item3b': 'logística especializada.',
    'solucoes.pcs.diff.item4': '• Seguimiento individualizado con',
    'solucoes.pcs.diff.item4b': 'DRS 360.',
    'solucoes.pcs.svg.desc1': 'Servicios especializados que viabilizan el acceso y el',
    'solucoes.pcs.svg.desc2': 'soporte a terapias innovadoras y de alta complejidad.',
    'solucoes.pcs.svg.desc3': 'Gestión integral de programas de soporte, atención',
    'solucoes.pcs.svg.desc4': 'y comercialización - uniendo cuidado humanizado,',
    'solucoes.pcs.svg.desc5': 'profesionales de salud, tecnología y logística.',
    'solucoes.tis.svg.subtitle': 'Cadena de frío inteligente y sostenible.',
    'solucoes.tis.svg.desc1': 'Aseguramos el transporte de productos sensibles con',
    'solucoes.tis.svg.desc2': 'soluciones de cadena de frío personalizadas, monitoreo',
    'solucoes.tis.svg.desc3': 'continuo en tiempo real y embalajes sostenibles —',
    'solucoes.tis.svg.desc4': 'uniendo seguridad, precisión y responsabilidad ambiental.',
    'solucoes.tis.diff.item1': '• Embalajes de alto rendimiento,',
    'solucoes.tis.diff.item1b': 'reutilizables, validados globalmente',
    'solucoes.tis.diff.item1c': 'y en tamaños variados.',
    'solucoes.tis.diff.item2': '• Telemetría en tiempo real -',
    'solucoes.tis.diff.item2b': 'Geolocalización, temperatura, humedad,',
    'solucoes.tis.diff.item2c': 'sensor de caída y luminosidad',
    'solucoes.tis.diff.item3': '• Reducción y compensación del impacto',
    'solucoes.tis.diff.item3b': 'ambiental',
    'solucoes.tis.diff.item4': '• Ready-to-use - Embalajes listos',
    'solucoes.tis.diff.item4b': 'para uso bajo demanda e integrados',
    'solucoes.tis.diff.item4c': 'con servicios logísticos.',
    'solucoes.table.alt': 'Tabla de Soluciones',
    'solucoes.table.part1': 'Tabla de Soluciones - Parte 1',
    'solucoes.table.part2': 'Tabla de Soluciones - Parte 2',

    // Orange CTA
    'cta.orange.title': 'Transforme su operación en salud con el apoyo de DRS.',
    'cta.orange.contact': 'Contáctenos y descubra cómo nuestra tecnología puede acelerar resultados.',

    // DRS360 bottom section
    'drs360.bottom.title': 'Gestión Digital para acelerar la investigación clínica con precisión.',
    'drs360.bottom.desc': 'Descubra cómo integrar eficiencia, visibilidad y compliance en sus estudios con la plataforma DRS 360.',
    'drs360.bottom.cta': 'Conozca DRS360',

    // Grupo DRS extra keys
    'grupo.missao.title': 'Misión',
    'grupo.missao.text': 'Transformar innovación y tecnología en soluciones estratégicas que garanticen la entrega eficiente de productos esenciales para la salud, promoviendo el bienestar de los pacientes y apoyando con excelencia en el desarrollo de terapias innovadoras.',
    'grupo.visao.title': 'Visión',
    'grupo.visao.text': 'Ser referencia global en el desarrollo de tecnologías innovadoras y gestión inteligente de información en salud, convirtiéndose en el socio estratégico de las industrias biofarmacéuticas, CROs, operadores logísticos y la comunidad científica.',
    'grupo.valores.title': 'Nuestros valores:',
    'grupo.tagline': 'Combinamos ciencia, trazabilidad y atención humana para transformar el camino de la salud: del laboratorio al paciente.',
    'grupo.diferencial.title': 'Nuestro diferencial es cómo trabajamos',
    'grupo.diferencial.desc': 'Integramos logística de alto rendimiento con inteligencia de datos y cuidado clínico.',
    'grupo.nossotime.title': 'Nuestro equipo',
    'grupo.nossotime.subtitle': 'Personas que cuidan de personas, con excelencia y empatía.',
    'grupo.nossotime.cta': '¡Sea parte de nuestro equipo!',
    'grupo.ondeatuamos': 'Dónde actuamos',
    'grupo.ondeatuamos.desc': 'Ofrecemos soluciones completas que conectan investigación clínica, tecnología y cuidado para la salud.',
    'grupo.nossaatuacao': 'Nuestra actuación se divide en tres áreas principales:',
    'grupo.drs360.platform': 'Todo esto es potenciado por nuestra plataforma propietaria, DRS 360, que monitorea en tiempo real, genera alertas inteligentes y ofrece control total de la operación.',
    'grupo.drs360.cta': 'Conozca todos nuestros servicios',
    'grupo.cert.title': 'Certificaciones y Conformidades',
    'grupo.cert.subtitle': 'Excelencia reconocida, con calidad validada en cada etapa.',
    'grupo.cert.desc': 'DRS opera en conformidad con los más altos estándares regulatorios nacionales e internacionales, garantizando seguridad, trazabilidad y confianza en toda la cadena de salud',

    // Misc
    'saibamais': 'SEPA MÁS',
    'fechar': 'CERRAR',
  },
};

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const [language, setLanguageState] = useState<Language>('pt');

  useEffect(() => {
    const langParam = searchParams.get('lang');
    if (langParam && ['pt', 'en', 'es'].includes(langParam)) {
      setLanguageState(langParam as Language);
    }
  }, [searchParams]);

  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang);
    const newParams = new URLSearchParams(searchParams);
    if (lang === 'pt') {
      newParams.delete('lang');
    } else {
      newParams.set('lang', lang);
    }
    setSearchParams(newParams, { replace: true });
  }, [searchParams, setSearchParams]);

  const t = useCallback((key: string): string => {
    const value = translations[language][key];
    if (typeof value === 'string') {
      return value;
    }
    return translations['pt'][key] as string || key;
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}

export default LanguageContext;
