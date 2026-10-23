# RELATÓRIO INICIAL DE LEVANTAMENTO DE INFORMAÇÕES DO PROJETO

**Versão:** 0.1
**Status:** Em elaboração  
**Fase:** Descoberta e levantamento preliminar de informações  
**Metodologia de referência:** Métodos ágeis e análise de requisitos

---

# 1. INTRODUÇÃO

Este documento tem como objetivo registrar as informações identificadas durante a fase inicial de estruturação do projeto. O propósito é reunir informações preliminares, identificar possíveis fontes de dados e estabelecer questões que deverão ser investigadas nas próximas etapas.

O projeto encontra-se em fase de descoberta e levantamento de requisitos. Dessa forma, o documento possui caráter evolutivo e será atualizado progressivamente, à medida que novas informações forem coletadas, analisadas e validadas.

## Ressalva sobre a escolha do projeto

Inicialmente, foram consideradas algumas opções de projeto, tendo sido escolhida, neste momento, a proposta relacionada à investigação de fontes de dados curriculares, incluindo o ambiente associado ao subdomínio `www2` da Universidade de Fortaleza (Unifor) e a Plataforma Lattes.

O objetivo atual é desenvolver essa proposta, aprofundando o entendimento do problema, investigando a viabilidade técnica e identificando os requisitos necessários para sua execução.

Embora essa seja a alternativa selecionada para orientar o trabalho, a escolha ainda poderá ser revista caso novas informações, restrições ou resultados da investigação indiquem a necessidade de ajustes ou de uma mudança de direcionamento.

Essa possibilidade de revisão não altera o objetivo de desenvolver o projeto atual, mas permite manter a flexibilidade necessária durante a fase inicial de planejamento e análise de requisitos.

---

# 2. INFORMAÇÕES PRELIMINARES IDENTIFICADAS

## 2.1. Repositório de currículos da Universidade de Fortaleza (Unifor)

Foi identificada a informação de que a Universidade de Fortaleza (Unifor) utiliza um subdomínio associado ao endereço `www2` para disponibilizar ou armazenar currículos vitae.

Esse ambiente poderá representar uma fonte de dados relevante para o projeto, dependendo da natureza das informações disponíveis e da forma como os currículos estão organizados.

**Aspectos que precisam ser investigados:**

- Identificação do endereço eletrônico completo.
- Verificação do formato de publicação dos currículos.
- Identificação dos campos e informações disponíveis.
- Análise da estrutura das páginas ou dos documentos.
- Verificação da possibilidade de acesso automatizado às informações.
- Identificação das condições de acesso, uso e tratamento dos dados.

**Status:** Informação preliminar, ainda pendente de verificação técnica.

## 2.2. Plataforma Lattes

A Plataforma Lattes, mantida pelo Conselho Nacional de Desenvolvimento Científico e Tecnológico (CNPq), constitui uma possível fonte de informações sobre a trajetória acadêmica e profissional de pesquisadores.

Os currículos disponibilizados nessa plataforma poderão ser considerados para a obtenção de informações estruturadas, desde que os mecanismos de acesso disponíveis sejam compatíveis com as necessidades do projeto.

**Aspectos que precisam ser investigados:**

- Mecanismos disponíveis para exportação ou extração de informações curriculares.
- Formatos de dados disponibilizados.
- Possibilidade de processamento automatizado.
- Identificação dos campos relevantes para o projeto.
- Compatibilidade entre as informações do Lattes e as informações publicadas pela Unifor.
- Restrições técnicas, institucionais e legais aplicáveis ao acesso e ao tratamento dos dados.

**Status:** Possibilidade técnica a investigar.

# 3. POSSÍVEIS FONTES DE DADOS

Com base nas informações iniciais, foram identificadas duas fontes potenciais:

| Fonte | Informações preliminares | Situação |
|---|---|---|
| Ambiente de currículos da Unifor | Currículos vitae disponibilizados em um subdomínio associado a `www2` | Endereço e estrutura a confirmar |
| Plataforma Lattes/CNPq | Informações acadêmicas e profissionais de pesquisadores | Mecanismos de extração a investigar |

A existência dessas fontes não implica, necessariamente, que os dados possam ser coletados de forma automatizada ou integrados diretamente. Essa viabilidade deverá ser avaliada durante o levantamento técnico.

# 4. HIPÓTESES INICIAIS

A partir das informações levantadas, são formuladas as seguintes hipóteses para investigação:

1. Os currículos disponibilizados pela Unifor podem conter informações relevantes para a finalidade do projeto.
2. A Plataforma Lattes pode oferecer informações complementares ou alternativas às disponíveis no ambiente institucional.
3. Pode existir uma oportunidade de padronizar, organizar ou consolidar informações provenientes das duas fontes.
4. A automação da coleta poderá reduzir o esforço necessário para consultar ou organizar os dados, caso essa necessidade seja confirmada.

Essas hipóteses não constituem requisitos aprovados nem decisões de arquitetura. Sua validade dependerá da investigação posterior.

# 5. QUESTÕES EM ABERTO

Para avançar na compreensão do projeto, será necessário responder às seguintes questões:

- Qual problema o projeto pretende resolver?
- Quem serão os usuários ou beneficiários da solução?
- Quais informações curriculares deverão ser obtidas?
- O objetivo é consultar, extrair, comparar, consolidar ou analisar currículos?
- As duas fontes serão utilizadas simultaneamente?
- Com que frequência as informações precisarão ser atualizadas?
- Qual será o destino dos dados extraídos?
- Existem requisitos institucionais, restrições de acesso ou regras específicas para o tratamento dos dados?

As respostas a essas questões orientarão a definição do escopo, dos requisitos funcionais e não funcionais e dos critérios de aceitação.

# 6. ABORDAGEM METODOLÓGICA

Recomenda-se conduzir o levantamento de forma incremental, utilizando práticas de análise de requisitos e métodos ágeis.

## 6.1. Descoberta

Compreender o problema, os usuários e os objetivos do projeto.

## 6.2. Investigação das fontes

Verificar a estrutura, a disponibilidade e as condições de acesso aos dados.

## 6.3. Análise de requisitos

Identificar necessidades, restrições e resultados esperados.

## 6.4. Priorização

Organizar as funcionalidades e investigações em um backlog.

## 6.5. Validação

Confirmar as hipóteses com as partes interessadas.

## 6.6. Planejamento incremental

Definir uma primeira entrega de escopo reduzido, caso a viabilidade seja confirmada.

# 7. PRÓXIMAS ATIVIDADES RECOMENDADAS

## 7.1. Prioridade alta

- **Atividade:** Confirmar o endereço do ambiente de currículos da Unifor.  
  **Resultado esperado:** Fonte institucional identificada.

- **Atividade:** Esclarecer o objetivo principal do projeto.  
  **Resultado esperado:** Problema e finalidade preliminarmente definidos.

- **Atividade:** Investigar os mecanismos de acesso aos dados do Lattes.  
  **Resultado esperado:** Alternativas técnicas documentadas.

## 7.2. Prioridade média

- **Atividade:** Identificar os campos curriculares de interesse.  
  **Resultado esperado:** Relação preliminar de dados necessários.

- **Atividade:** Avaliar a compatibilidade entre as fontes.  
  **Resultado esperado:** Possíveis correspondências identificadas.

- **Atividade:** Levantar restrições de acesso e tratamento de dados.  
  **Resultado esperado:** Riscos e limitações registrados.

# 8. CONSIDERAÇÕES FINAIS

O levantamento inicial identificou duas possíveis fontes de informações curriculares: o ambiente associado ao subdomínio `www2` da Unifor e a Plataforma Lattes, mantida pelo CNPq.

Essas informações constituem um ponto de partida para a investigação, mas ainda não são suficientes para definir a solução, seus requisitos ou sua arquitetura.

O próximo passo consiste em compreender o problema que motivou o projeto, confirmar as características das fontes de dados e identificar as necessidades dos usuários. A partir desses resultados, será possível evoluir este relatório para uma especificação preliminar de requisitos e um backlog priorizado.

# 9. HISTÓRICO DE VERSÕES

| Versão | Descrição | Status |
|---|---|---|
| 0.1 | Criação do documento com informações preliminares e questões de investigação. | Em elaboração |

---

# 10. DIRETRIZES PARA A EVOLUÇÃO DO DOCUMENTO

Este relatório deverá ser atualizado conforme novas informações forem coletadas.

Recomenda-se distinguir três categorias de registros:

- **Informações confirmadas:** fatos verificados por meio de fontes confiáveis ou validação com as partes interessadas.
- **Hipóteses em investigação:** possibilidades que ainda precisam ser verificadas.
- **Decisões tomadas:** definições acordadas durante o desenvolvimento do projeto, acompanhadas de suas justificativas quando necessário.

Essa separação ajudará a evitar que suposições sejam tratadas como requisitos definitivos e permitirá acompanhar a evolução do projeto de maneira organizada e incremental.