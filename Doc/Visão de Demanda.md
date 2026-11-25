# Visão da Demanda (VD) — Gestão da Produção Científica e Internacionalização Docente (GPCID)

**Sistema de Gestão da Produção Científica e Internacionalização Docente — Universidade de Fortaleza (Unifor)**

> **Natureza:** proposta de desenvolvimento de novo sistema, elaborada para apoiar a elicitação e a especificação de requisitos no processo LAPIS. As funcionalidades, prioridades, integrações, regras de negócio e indicadores apresentados constituem propostas preliminares e dependem de validação com os representantes institucionais.

## Identificação e histórico

| Campo | Informação |
|---|---|
| Nome da demanda | Sistema de Gestão da Produção Científica e Internacionalização Docente (GPCID) |
| Instituição | Universidade de Fortaleza (Unifor) |
| Tipo | Novo sistema |
| Área solicitante | Diretoria de Relações Internacionais (DRI) |
| Interlocutor de negócio | Marcelo Ponte — Supervisor de Apoio Docente |
| E-mail de contato | marceloponte@unifor.br |
| Telefone de contato | +55 85 3477-3405 |
| Responsável pela elaboração | Grupo 3 |
| Responsável pela aprovação formal | Direção da DRI |
| Representante responsável pela aprovação | A confirmar |
| Documento de origem | Visão da Demanda (VD) — GPCID |
| Referenciais | IEEE 830-1998; ISO/IEC/IEEE 29148:2011; ISO/IEC 12207 |
| Versão | 1.4 — consolidação de decisões e proposta de controle de acesso |
| Documento relacionado | SRS — versão 0.2 |
| Data de referência | 25/11/2026 |
| Situação | Rascunho para revisão e validação; não aprovado institucionalmente |

**Distinção de responsabilidades:** Marcelo Ponte é o interlocutor de negócio para contato e alinhamento das necessidades. A aprovação formal da demanda compete à Direção da DRI, cujo representante nominal ainda deverá ser confirmado.

### Histórico de alterações

| Data | Versão | Descrição | Autor |
|---|---|---|---|
| 01/11/2026 | 1.0 | Criação inicial com base na proposta 2 do Eixo I — Internacionalização. | Equipe do projeto |
| 08/11/2026 | 1.1 | Ampliação e consolidação preliminar das funcionalidades. | Equipe do projeto |
| 09/11/2026 | 1.2 | Atualização da identificação institucional e dos responsáveis. | Grupo 3 |
| 25/11/2026 | 1.3 | Revisão de escopo para explicitar a produção científica nacional e internacional, distinguir capacidades atuais de evoluções futuras e registrar decisões ainda pendentes de validação. | Grupo 3 — proposta de revisão |
| 25/11/2026 | 1.4 | Consolidação das decisões de M01 a M07, explicitação da proposta preliminar de níveis de acesso e registro de que a matriz de permissões será discutida futuramente com a DRI. | Grupo 3 — proposta de revisão |

## 1. Objetivo

Desenvolver uma solução de apoio à gestão da produção científica e à internacionalização docente da Universidade de Fortaleza (Unifor), capaz de centralizar, organizar, consultar e acompanhar informações acadêmicas e científicas dos professores.

O GPCID deverá contemplar informações curriculares, formação e titulação, publicações e demais produções científicas, colaborações acadêmicas e atividades de internacionalização. O acompanhamento da produção científica deverá abranger produções nacionais e internacionais, com destaque para a dimensão internacional nos indicadores de interesse da DRI.

A solução deverá apoiar os docentes na consulta de informações relacionadas à própria trajetória acadêmica e científica e os gestores institucionais no acompanhamento da produção, das colaborações e das atividades internacionais, por meio de consultas, indicadores e relatórios.

A proposta considera duas formas complementares de alimentação dos dados: obtenção ou atualização automática a partir de fontes externas autorizadas, quando tecnicamente viável, e inclusão ou manutenção manual por usuários autorizados. A viabilidade das integrações e as responsabilidades pela manutenção dos dados ainda precisam ser verificadas.

## 2. Contexto, problema e descrição da demanda

### 2.1. Contexto

O acompanhamento da produção científica e da internacionalização docente envolve informações de diferentes naturezas e origens, tais como:

- currículos acadêmicos, formação, titulação e trajetória profissional;
- artigos, livros, capítulos e trabalhos apresentados em eventos;
- periódicos, editoras, instituições e países relacionados às produções;
- colaborações científicas e acadêmicas nacionais e internacionais;
- missões, visitas técnicas, intercâmbios e outras atividades internacionais;
- indicadores relacionados à produção acadêmica e à internacionalização.

Essas informações podem estar distribuídas entre plataformas externas, registros institucionais e documentos mantidos pelas áreas responsáveis. Ainda é necessário investigar como a Unifor realiza atualmente o registro, a atualização, a consulta e a consolidação desses dados.

### 2.2. Problema ou oportunidade

A dispersão de informações acadêmicas e científicas pode dificultar a consulta à trajetória dos docentes, o acompanhamento da produção científica nacional e internacional, a identificação de colaborações e atividades internacionais e a consolidação de indicadores institucionais.

A demanda busca investigar como uma plataforma centralizada pode apoiar esse acompanhamento, oferecendo informações organizadas, rastreáveis e consultáveis para subsidiar análises e decisões institucionais.

**Problema a investigar:** Como apoiar o acompanhamento da produção científica e das oportunidades de atuação internacional dos docentes?

A expressão “oportunidades de atuação internacional” integra a formulação do problema original. A criação de um catálogo ou módulo para divulgar, cadastrar e gerenciar editais, eventos ou oportunidades científicas não está definida como funcionalidade prioritária desta versão e deverá ser tratada como possibilidade de evolução, caso seja confirmada pelos interessados.

### 2.3. Públicos afetados e impactos esperados

- **Docentes:** consulta a informações curriculares, publicações, colaborações e atividades internacionais.
- **Diretoria de Relações Internacionais (DRI):** acompanhamento da dimensão internacional da produção e das atividades dos docentes, com apoio de indicadores e relatórios.
- **Gestores acadêmicos:** consulta a informações consolidadas para análises e planejamento.
- **Responsáveis pela pesquisa científica:** acompanhamento da produção acadêmica e de sua evolução.
- **Responsáveis pela internacionalização:** acompanhamento de colaborações e atividades internacionais.
- **Equipe de tecnologia da informação:** avaliação de fontes, integrações, segurança, infraestrutura e sustentação.
- **Direção da DRI:** apreciação e aprovação formal da demanda.

Os impactos específicos e os perfis de acesso deverão ser confirmados durante a elicitação.

### 2.4. Evidências disponíveis e limitações

A referência inicial é o documento institucional *Propostas de Projetos de Sistemas — Internacionalização e ENADE, semestre 2026.2*, especificamente a proposta 2 do Eixo I — Gestão da Produção Científica e Internacionalização Docente. Essa proposta contempla a organização e o acompanhamento de informações sobre currículos, publicações, colaborações científicas e missões internacionais.

A documentação atual identifica a DRI como área solicitante e Marcelo Ponte como interlocutor de negócio. Entretanto, ainda não há evidências suficientes para confirmar os processos atualmente utilizados pela Universidade, a disponibilidade de todas as fontes de dados, os mecanismos autorizados de integração ou a necessidade de cada funcionalidade complementar.

### 2.5. Descrição sumária da demanda

Propor o desenvolvimento de uma plataforma que reúna informações curriculares e científicas dos docentes da Unifor e permita acompanhar a produção científica nacional e internacional, as colaborações acadêmicas e as atividades de internacionalização. A solução deverá oferecer consultas, indicadores e relatórios, além de mecanismos de atualização e rastreabilidade das informações.

A obtenção dos dados poderá ocorrer por integração automática com fontes autorizadas e por manutenção manual de registros por usuários com permissão. A combinação dessas formas, suas regras e sua viabilidade técnica deverão ser detalhadas durante a elicitação.

## 3. Proposta de valor e resultados esperados

| Benefício esperado | Evidência possível | Resultado pretendido |
|---|---|---|
| Centralização das informações | Informações curriculares e científicas organizadas em um ambiente comum. | Facilitar a localização e consulta dos dados dos docentes. |
| Acompanhamento da produção científica | Publicações organizadas por docente, tipo, período e demais critérios definidos. | Apoiar análises da produção nacional e internacional. |
| Acompanhamento da internacionalização | Informações sobre colaborações e atividades internacionais. | Facilitar a análise da atuação internacional dos docentes. |
| Apoio à gestão da DRI | Indicadores e relatórios sobre a dimensão internacional. | Subsidiar o planejamento e o acompanhamento institucional. |
| Qualidade e rastreabilidade | Origem e data de atualização dos registros, além do registro de inconsistências. | Aumentar a transparência e a confiabilidade das informações. |

Não foram estabelecidas metas quantitativas, pois não há linha de base confirmada. Os indicadores, critérios de cálculo e resultados esperados deverão ser validados com os interessados.

## 4. Partes interessadas

| Parte interessada | Papel e interesse | Representante/situação |
|---|---|---|
| Universidade de Fortaleza (Unifor) | Instituição beneficiária da solução. | Instituição |
| Diretoria de Relações Internacionais (DRI) | Área solicitante e interessada no acompanhamento da internacionalização docente. | Direção da DRI |
| Interlocutor de negócio | Esclarecer necessidades e apoiar o alinhamento com a área solicitante. | Marcelo Ponte — Supervisor de Apoio Docente |
| Área responsável pela pesquisa científica | Validar informações e critérios relativos à produção científica. | Representante a identificar |
| Docentes | Beneficiários e possíveis usuários para consulta de informações. | Comunidade docente |
| Gestores acadêmicos | Utilizar informações consolidadas em análises e planejamento. | Representantes a identificar |
| Responsáveis pela internacionalização | Validar necessidades relativas a colaborações e atividades internacionais. | Representantes a identificar |
| Grupo 3 | Elaborar a documentação e desenvolver a proposta acadêmica do projeto. | Grupo 3 |
| Tecnologia da Informação | Avaliar viabilidade técnica, segurança, infraestrutura e integrações. | Representante a identificar |
| Responsáveis por proteção de dados | Orientar o tratamento adequado de dados pessoais. | Representante a identificar |
| Direção da DRI | Aprovar formalmente a demanda. | Representante nominal a confirmar |

## 5. Usuários e atores externos

Os perfis e atores abaixo são preliminares. Não representam definição final de permissões.

| ID | Usuário, sistema ou fonte | Papel na interação |
|---|---|---|
| AT-01 | Docente | Consultar informações curriculares e científicas relacionadas à própria trajetória. |
| AT-02 | Gestor de internacionalização | Acompanhar informações e indicadores de internacionalização. |
| AT-03 | Analista de internacionalização | Consultar, organizar e, se autorizado, manter registros de atividades internacionais. |
| AT-04 | Responsável pela pesquisa científica | Acompanhar publicações e indicadores de produção científica. |
| AT-05 | Administrador do sistema | Administrar usuários, permissões e configurações. |
| AT-06 | Gestor acadêmico | Consultar informações consolidadas conforme suas permissões. |
| AT-07 | Plataforma Lattes/CNPq | Possível fonte externa de informações curriculares. |
| AT-08 | Bases de publicações científicas | Possíveis fontes de dados sobre produções científicas. |
| AT-09 | Sistemas acadêmicos institucionais | Possíveis fontes de dados cadastrais e vínculos dos docentes. |

Atores externos são fontes potenciais; sua utilização dependerá de disponibilidade, autorização e viabilidade técnica. A Direção da DRI e o interlocutor de negócio são papéis institucionais e não necessariamente usuários operacionais do sistema.

## 6. Escopo da demanda

### 6.1. Incluído no escopo proposto

- Organização e consulta de informações curriculares dos docentes.
- Consulta à formação acadêmica, titulação e trajetória profissional.
- Organização e consulta de publicações e demais produções científicas nacionais e internacionais.
- Pesquisa e filtragem da produção por docente, tipo, ano e outros critérios a definir.
- Identificação de características de internacionalização da produção científica, conforme critérios institucionais a validar.
- Acompanhamento da evolução da produção científica por período.
- Consulta a informações sobre colaborações científicas e acadêmicas.
- Acompanhamento de missões e outras atividades internacionais, cuja forma de registro deverá ser validada com a DRI.
- Disponibilização de indicadores e relatórios sobre produção científica e internacionalização.
- Atualização de informações por mecanismos automáticos e manuais, conforme permissões e viabilidade.
- Registro da origem e da data de atualização das informações.
- Identificação e tratamento de dados incompletos, duplicados ou divergentes, conforme regras a definir.
- Controle de acesso conforme perfis e responsabilidades institucionais.

### 6.2. Fora do escopo inicial

- Substituição da Plataforma Lattes ou de outras fontes oficiais.
- Alteração direta de dados em plataformas externas, salvo se houver integração autorizada e requisito específico aprovado.
- Gestão de contratação, avaliação funcional ou progressão na carreira docente.
- Gestão financeira de projetos, bolsas, viagens ou recursos de internacionalização.
- Gestão de processos acadêmicos de estudantes.
- Gestão completa de convênios e contratos internacionais.
- Garantia de integração com fontes externas antes da confirmação de autorização e viabilidade técnica.
- Gerenciamento de inscrições em programas de mobilidade estudantil.

### 6.3. Evoluções futuras ou funcionalidades a validar

- Catálogo de editais, congressos, chamadas e oportunidades científicas.
- Cadastro, divulgação e acompanhamento de oportunidades de atuação internacional.
- Identificação automatizada de potenciais parceiros e oportunidades de colaboração.
- Análise avançada de redes de coautoria e colaboração científica.
- Painéis analíticos avançados e comparações entre unidades acadêmicas.
- Notificações automáticas sobre oportunidades ou necessidade de atualização de currículos.

O tratamento das oportunidades científicas como evolução futura é uma orientação de planejamento discutida pela equipe, ainda sujeita à confirmação do grupo e à compatibilização com o SRS original. Os requisitos existentes no SRS não deverão ser excluídos sem análise de impacto e rastreabilidade.

### 6.4. Entregas do projeto acadêmico

As entregas da disciplina incluem a documentação de visão e requisitos, modelagem UML, especificação SRS, revisão de consistência, wireframes e protótipo navegável. A implementação de integrações reais com plataformas externas não deve ser presumida como parte do protótipo; sua demonstração poderá ocorrer por fluxo ilustrativo ou dados de exemplo, desde que isso seja explicitado.

## 7. Necessidades e funcionalidades preliminares

As necessidades abaixo derivam da proposta institucional e da análise inicial. Prioridades e funcionalidades dependem de validação.

| ID | Necessidade | Origem/situação |
|---|---|---|
| NEC-01 | Consultar informações curriculares e trajetória dos docentes. | Proposta institucional e detalhamento a validar. |
| NEC-02 | Consultar e acompanhar a produção científica nacional e internacional. | Proposta institucional; abrangência nacional e internacional alinhada na revisão. |
| NEC-03 | Identificar características de internacionalização das produções científicas. | Aprofundamento proposto; critérios a validar. |
| NEC-04 | Consultar informações sobre colaborações científicas e acadêmicas. | Proposta institucional. |
| NEC-05 | Acompanhar missões e atividades internacionais dos docentes. | Proposta institucional; forma de registro a validar. |
| NEC-06 | Disponibilizar indicadores, consultas e relatórios. | Proposta institucional e aprofundamento analítico. |
| NEC-07 | Manter qualidade, origem, atualização e rastreabilidade das informações. | Necessidade transversal a detalhar. |
| NEC-08 | Controlar usuários e permissões de acesso. | Necessidade transversal a detalhar. |
| NEC-09 | Consultar oportunidades científicas e de atuação internacional. | Possível evolução futura; não priorizada nesta revisão. |

### 7.1. Capacidades funcionais preliminares

1. Consultar informações curriculares dos docentes.
2. Consultar formação, titulação e trajetória acadêmica.
3. Consultar publicações e demais produções científicas.
4. Filtrar a produção por docente, período, tipo e critérios definidos.
5. Identificar características de internacionalização das produções, conforme regras validadas.
6. Consultar informações sobre colaborações científicas.
7. Registrar ou consultar missões e atividades internacionais, conforme responsabilidades e campos a definir.
8. Consultar indicadores de produção científica nacional e internacional.
9. Gerar relatórios consolidados e exportar informações autorizadas.
10. Obter ou atualizar dados por integração automática, se houver fonte e mecanismo autorizado e tecnicamente viável.
11. Cadastrar, complementar ou corrigir manualmente informações por usuários autorizados.
12. Registrar origem e data de atualização dos dados.
13. Identificar inconsistências e apoiar sua análise e resolução.
14. Administrar usuários e permissões.
15. Consultar informações sobre atualização e falhas das integrações, caso sejam implementadas.

A lista acima é uma visão de capacidades e não substitui os requisitos funcionais numerados no SRS. A correspondência entre essas capacidades e os 17 requisitos existentes deverá ser feita em uma matriz de rastreabilidade antes de qualquer alteração no SRS.

## 8. Visão geral da solução

O GPCID é concebido como uma plataforma de consulta e acompanhamento, com informações provenientes de fontes externas e de registros mantidos no próprio sistema.

### 8.1. Alimentação das informações

**Automática:** o sistema poderá consultar ou importar informações de fontes externas autorizadas, como a Plataforma Lattes/CNPq, bases de publicações e sistemas institucionais. A integração depende da disponibilidade de interfaces, autorização de acesso e avaliação técnica. Não se afirma, nesta etapa, que essas integrações estejam disponíveis ou garantidas.

**Manual:** usuários autorizados poderão cadastrar, complementar ou corrigir informações no GPCID, de acordo com regras de acesso e responsabilidade que ainda deverão ser definidas. A manutenção manual deverá coexistir com a automática quando necessário, sem criar conflitos de origem ou atualização.

### 8.2. Qualidade, divergências e histórico

A solução poderá identificar informações incompletas, duplicadas ou divergentes entre fontes e registros internos. A identificação, o registro da ocorrência, as notificações e a decisão sobre qual informação prevalecer são capacidades a detalhar no SRS.

A proposta de histórico de alterações prevê registrar, quando aplicável, o docente relacionado, data e horário, informação alterada, valor anterior e atual, origem da alteração e responsável. A regra de acesso ao histórico deverá ser mantida coerente com a definição de perfis: na discussão atual, foi proposto que somente gestores consultem esse histórico; essa regra ainda deverá ser confrontada com o SRS e validada.

### 8.3. Consultas, indicadores e relatórios

O sistema deverá apoiar consultas à produção científica nacional e internacional e às atividades de internacionalização. Os indicadores deverão ter critérios explícitos, fontes identificadas e período de referência. A DRI deverá ter acesso a informações relevantes para o acompanhamento da internacionalização, mas a composição final de um painel específico, seus indicadores e filtros depende de validação institucional.

### 8.4. Fontes e integrações potenciais

- Plataforma Lattes/CNPq — possível fonte de informações curriculares.
- Bases de publicações científicas — possíveis fontes de dados bibliográficos.
- Sistemas acadêmicos da Unifor — possíveis fontes de dados cadastrais e vínculos.

As fontes específicas, condições de acesso, periodicidade de atualização e mecanismos de integração permanecem em aberto.

### 8.5. Organização lógica preliminar

| Área funcional | Responsabilidade |
|---|---|
| Docentes e currículos | Organizar e consultar informações curriculares e trajetória acadêmica. |
| Produção científica | Consultar e acompanhar publicações e demais produções nacionais e internacionais. |
| Colaboração e internacionalização | Consultar colaborações e acompanhar missões e atividades internacionais. |
| Indicadores e relatórios | Apresentar informações consolidadas para acompanhamento e análise. |
| Qualidade e integrações | Tratar origem, atualização, inconsistências e integrações, se viáveis. |
| Identidade e controle de acesso | Administrar autenticação, usuários e permissões. |

O módulo de oportunidades científicas, presente no SRS original, deverá ser analisado separadamente como possível evolução ou funcionalidade a manter, sem exclusão automática. Esta organização é lógica e não determina arquitetura técnica.

## 9. Condições, premissas e restrições

| Tipo | Condição | Situação |
|---|---|---|
| Premissa | O sistema deverá apoiar o acompanhamento da produção científica e da internacionalização docente. | Base da proposta. |
| Premissa | A produção científica considerada deverá abranger produções nacionais e internacionais. | Direção de escopo discutida; validar com os interessados. |
| Premissa | Os dados deverão possuir origem identificável e data de atualização. | Proposta a especificar. |
| Premissa | A alimentação poderá ser automática e manual. | Direção de solução discutida; detalhamento pendente. |
| Restrição | Acesso a fontes externas depende de autorização e disponibilidade técnica. | Aplicável. |
| Restrição | O sistema não substitui plataformas oficiais de currículos e publicações. | Diretriz proposta. |
| Restrição | O tratamento de dados pessoais deverá observar a legislação aplicável, incluindo a LGPD. | Aplicável. |
| Dependência | A integração com fontes curriculares e bibliográficas depende de avaliação técnica. | A investigar. |
| Dependência | Indicadores dependem de critérios e regras de cálculo validados. | A definir. |
| Dependência | Perfis e permissões dependem da definição das responsabilidades institucionais. | A definir. |
| Dependência | Aprovação formal depende da apreciação da Direção da DRI. | Pendente. |

## 10. Riscos e questões em aberto

| ID | Questão ou risco | Próxima ação |
|---|---|---|
| PQ-01 | Quem será o representante nominal da Direção da DRI responsável pela aprovação? | Confirmar com a DRI. |
| PQ-02 | Quais mecanismos autorizados existem para obter dados do Lattes? | Investigar com TI e responsáveis pelas fontes. |
| PQ-03 | Quais bases de publicações serão utilizadas? | Consultar responsáveis pela pesquisa científica. |
| PQ-04 | Qual será a periodicidade de atualização? | Validar com as áreas responsáveis. |
| PQ-05 | Como serão tratados dados incompletos, duplicados ou inconsistentes? | Definir regras de qualidade e deduplicação. |
| PQ-06 | Quais critérios caracterizam uma produção como internacional? | Elaborar e validar regras de negócio. |
| PQ-07 | Quais indicadores são relevantes para a DRI e para a pesquisa científica? | Levantar e validar com os gestores. |
| PQ-08 | Quais perfis poderão consultar, cadastrar, alterar e administrar informações? | Definir matriz de permissões. |
| PQ-09 | Qual será o limite entre dados importados e dados mantidos manualmente? | Definir fonte de verdade e regras de conciliação. |
| PQ-10 | Quais informações deverão ser registradas sobre missões internacionais e quem será responsável pelo registro? | Investigar o processo atual com a DRI. |
| PQ-11 | A necessidade de catálogo de oportunidades científicas será mantida no escopo ou tratada como evolução? | Compatibilizar decisão da equipe com o SRS e validar com os interessados. |
| PQ-12 | O painel da DRI será específico ou uma visão configurada dos indicadores gerais? | Validar necessidades e permissões. |
| PQ-13 | Como serão considerados docentes inativos e produções anteriores ao vínculo com a Unifor? | Definir critérios temporais e institucionais. |
| PQ-14 | Quais representantes das áreas de pesquisa e internacionalização participarão da validação? | Identificar junto à DRI. |

## 11. Documentos relacionados e referências

| Documento | Responsabilidade | Situação |
|---|---|---|
| Propostas de Projetos — Internacionalização e ENADE | Contexto e descrição inicial da oportunidade de projeto. | Referência institucional disponível. |
| Visão da Demanda (VD) — GPCID | Contexto, objetivos, escopo, partes interessadas e necessidades. | Versão 1.3 — proposta de revisão. |
| SRS — GPCID | Especificação dos requisitos funcionais, não funcionais, interfaces e restrições. | Versão 0.2 — requer comparação e atualização controlada. |
| Regras de negócio | Critérios de classificação, acompanhamento e gestão das informações. | A elaborar/consolidar. |
| Casos de uso | Fluxos, atores, precondições, exceções e critérios de aceitação. | A revisar após consolidação dos requisitos. |
| Catálogo de indicadores | Definições, medidas, fontes, regras de cálculo e periodicidade. | A validar. |
| Arquitetura e integrações | Definições técnicas e contratos de comunicação com fontes externas. | Dependente de análise de viabilidade. |
| Glossário | Definições dos termos acadêmicos, científicos e de internacionalização. | A elaborar. |

### 11.1. Referenciais metodológicos

- **IEEE 830-1998:** referência histórica para estruturação de especificações de requisitos de software.
- **ISO/IEC/IEEE 29148:2011:** referência para processos e documentação de requisitos de sistemas e software.
- **ISO/IEC 12207:** referência para processos de ciclo de vida de sistemas e software.

A aplicação desses referenciais deverá ser compatibilizada com o processo LAPIS e com as orientações acadêmicas da disciplina.

## 12. Validação da Visão

### 12.1. Situação da validação

Esta versão organiza a proposta de solução e incorpora decisões de direcionamento discutidas durante a revisão, mas **não representa aprovação institucional**. As prioridades, integrações, indicadores, regras de negócio e responsabilidades ainda dependem de validação com os representantes da Unifor.

### 12.2. Pendências para validação

- Confirmar o representante da Direção da DRI responsável pela aprovação formal.
- Validar o problema, o objetivo e o escopo com a DRI.
- Consultar representantes das áreas de pesquisa científica e internacionalização.
- Investigar os processos atualmente utilizados pela Universidade.
- Confirmar fontes de dados, autorização de acesso e viabilidade das integrações.
- Definir periodicidade e responsabilidade pela atualização dos dados.
- Validar os critérios de classificação da produção nacional e internacional.
- Definir os indicadores e suas regras de cálculo.
- Definir perfis, permissões e responsabilidades de cadastro e manutenção.
- Esclarecer a necessidade e o processo de registro das missões internacionais.
- Compatibilizar o tratamento futuro das oportunidades científicas com os requisitos já presentes no SRS.
- Revisar a rastreabilidade entre necessidades, requisitos, casos de uso e diagramas.

### 12.3. Registro da aprovação

| Versão | Responsável | Data | Situação | Observação |
|---|---|---|---|---|
| 1.0 | Equipe do projeto | 01/11/2026 | Rascunho | Elaboração inicial. |
| 1.1 | Equipe do projeto | 08/11/2026 | Rascunho consolidado | Ampliação do escopo conceitual. |
| 1.2 | Grupo 3 | 09/11/2026 | Rascunho para revisão | Atualização institucional. |
| 1.3 | Grupo 3 | 25/11/2026 | Proposta de revisão | Ajuste de foco e explicitação de pontos pendentes. |
| A aprovar | Direção da DRI | A preencher | Pendente | Registrar decisão formal, responsável, data e ressalvas. |

**Nota:** a elaboração desta versão não representa aprovação institucional da demanda, nem confirmação de que todas as funcionalidades, regras ou integrações serão implementadas.


---

# ADENDO DE CONSOLIDAÇÃO — VERSÃO 1.4

> Este adendo complementa a VD 1.3. Em caso de divergência sobre escopo, prioridades e controle de acesso, prevalecem as disposições deste adendo. Não substitui nem altera os arquivos originais do projeto.

## A. Decisões de escopo consolidadas

| Módulo | Requisito(s) | Decisão registrada pelo grupo | Tratamento na demanda |
|---|---|---|---|
| M01 — Docentes e Currículos | RF-01 e RF-02 | Unificar, preservando rastreabilidade | Uma capacidade consolidada de consulta curricular, formação e titulação. |
| M02 — Produção Científica | RF-03 e RF-04 | Complementares | Consulta de produções recentes incluída; classificação internacional depende de critérios institucionais. |
| M02 — Produção Científica | RF-05 | Evolução futura | Não compõe o escopo inicial; manter rastreabilidade. |
| M03 — Colaboração e Internacionalização | RF-06 e RF-07 | Complementares | Consultas de colaboração e registro/consulta de missões; campos e responsáveis ainda pendentes. |
| M04 — Oportunidades Científicas | RF-08 e RF-09 | Evolução futura | Fora do escopo inicial; preservar os requisitos no histórico. |
| M05 — Indicadores e Relatórios | RF-10 e RF-11 | Complementares | Consulta de indicadores e geração de relatórios; painel específico da DRI. |
| M05 — Indicadores e Relatórios | RF-12 | Ajustar | Configuração de indicadores dentro dos elementos permitidos e regras aprovadas. |
| M05 — Indicadores e Relatórios | RF-13 | Complementar | Versionamento de indicadores e preservação das versões anteriores. |
| M05 — Indicadores e Relatórios | IND-08 | Reavaliar | Não tratar como indicador homologado. |
| M06 — Qualidade e Integrações | RF-14, RF-15 e RF-16 | Complementar | Identificar e registrar divergências; permitir análise autorizada; integrações condicionais. |
| M06 — Qualidade e Integrações | Histórico de alterações | Incorporar | Integrar conceitualmente ao histórico, preservando a identidade do RNF-06. |
| M07 — Identidade e Controle de Acesso | RF-17 | Reformular | Administração de usuários, perfis e permissões com matriz preliminar sujeita à validação. |

## B. Atores e públicos envolvidos

Os seis atores identificados no SRS original permanecem como perfis preliminares de interação:

| ID | Ator | Papel preliminar |
|---|---|---|
| AT-01 | Docente | Consultar informações próprias e, se aprovado, manter determinados dados próprios. |
| AT-02 | Gestor de internacionalização | Acompanhar informações, indicadores e atividades de internacionalização. |
| AT-03 | Analista de internacionalização | Consultar, organizar e analisar informações de internacionalização, conforme autorização. |
| AT-04 | Responsável pela pesquisa científica | Acompanhar produção e informações científicas. |
| AT-05 | Administrador do sistema | Executar atividades técnicas e administrativas de usuários e configurações. |
| AT-06 | Gestor acadêmico | Consultar informações consolidadas conforme autorização. |

A denominação dos atores não determina, por si só, o nível de acesso. Uma pessoa poderá acumular responsabilidades, caso isso seja permitido e validado institucionalmente.

## C. Proposta preliminar de níveis de acesso

Propõe-se estudar um modelo de controle de acesso baseado em perfis (RBAC). Os níveis abaixo são uma estrutura inicial para discussão, não uma decisão institucional:

| Nível proposto | Nome de trabalho | Capacidades indicativas |
|---|---|---|
| N1 | Consulta própria | Consultar informações próprias autorizadas. |
| N2 | Consulta ampliada | Consultar conjuntos de informações institucionais autorizados. |
| N3 | Operacional | Registrar, atualizar e analisar informações dentro de área autorizada. |
| N4 | Gestão | Consultar painéis e relatórios gerenciais e exercer operações de gestão autorizadas. |
| N5 | Administração técnica | Administrar contas, configurações técnicas e implementação de permissões aprovadas. |

**Governança ainda não definida:** a equipe apresentará a proposta à DRI e discutirá conjuntamente os critérios de concessão, alteração e revogação dos níveis. Não se afirma que a DRI já tenha aprovado uma matriz ou que detenha formalmente, neste momento, uma competência operacional específica no sistema.

Também permanece em aberto se o docente poderá autorizar compartilhamento de informações próprias ou apenas consultar/atualizar seus dados, e qual será a autonomia do administrador para conceder acessos. A administração técnica não deve ser confundida automaticamente com autorização funcional para consultar ou alterar dados da DRI.

## D. Diretrizes preliminares para controle de acesso

1. As permissões deverão ser associadas a perfis e operações, e não inferidas apenas pelo nome do cargo.
2. O sistema deverá permitir distinguir consulta, inclusão, alteração, validação, exportação e administração.
3. A concessão e a revogação de permissões deverão ser rastreáveis.
4. O princípio do menor privilégio deverá orientar a proposta, sujeito à validação institucional.
5. A matriz definitiva será definida após apresentação e discussão com a DRI e consulta às áreas técnicas pertinentes.
6. A autenticação e a integração com mecanismos institucionais dependem de avaliação da TI.

## E. Pendências institucionais atualizadas

- Validar com a DRI os níveis de acesso e a autoridade responsável por solicitar, aprovar e efetivar concessões.
- Definir se docentes poderão editar dados próprios e/ou autorizar compartilhamento.
- Definir os limites da administração técnica e sua separação das permissões funcionais.
- Definir campos obrigatórios e responsáveis pelo cadastro de missões.
- Validar critérios de internacionalização das produções.
- Homologar indicadores, fórmulas e a composição do painel específico da DRI; reavaliar IND-08.
- Definir critérios de identificação e análise de divergências.
- Confirmar integrações externas autorizadas e tecnicamente viáveis.

## F. Situação da VD

A versão 1.4 é uma proposta consolidada pelo grupo para revisão. Não representa aprovação institucional da DRI, da TI ou de outras áreas. As pendências acima deverão ser apresentadas e validadas antes da linha de base institucional.
