# RELATÓRIO DE QUALIDADE (QA) – TESTE PRÁTICO RUBEUS

**Responsável:** Rafael Felipe  
**Data da Execução:** 25/02/2026  
**Objetivo:** Avaliação de qualidade das páginas de Certificação e Site Institucional

---

# 📊 SUMÁRIO EXECUTIVO

- **Status Geral:** ❌ REPROVADO PARA PRODUÇÃO
- **Total de Itens Levantados:** 13
- **Severidade Alta:** 8
- **Severidade Média:** 3
- **Severidade Baixa:** 2
- **Bloqueadores de Conversão:** Sim (Formulários com erro de "Base Legal")

**Conclusão Técnica:**  
O sistema apresenta falhas críticas que impedem o fluxo principal de conversão (inscrição e geração de lead). Recomenda-se correção imediata antes de publicação em produção.

---

# 🧪 PARTE 01 – Página de Certificação

URL: https://qualidade.apprbs.com.br/certificacao

---

## 🐞 BUG-01 – Texto “Lorem Ipsum” exibido na página

- Tipo: Correção
- Classificação: Usabilidade / Conteúdo
- Severidade: 🔴 Alta
- Prioridade: 🔴 Alta
- Reprodutibilidade: 100%

### Resultado Atual

Exibição de textos fictícios na página.

### Resultado Esperado

Conteúdo real, revisado e coerente.

### Evidência

https://jam.dev/c/87dba742-04de-4b06-ad77-9944846daa75

---

## 🐞 BUG-02 – Botão “Saiba mais” não executa ação

- Severidade: 🔴 Alta
- Prioridade: 🔴 Alta
- Reprodutibilidade: 100%

### Resultado Atual

Botão não executa ação.

### Resultado Esperado

Redirecionamento ou rolagem adequada.

### Evidência

https://jam.dev/c/0b90c434-9a13-4f88-873d-13fca64a556c

---

## 🐞 BUG-03 – Imagem com dimensionamento inadequado

- Tipo: Melhoria
- Severidade: 🟠 Média
- Prioridade: 🟠 Média

### Resultado Atual

Imagem pequena e desalinhada.

### Resultado Esperado

Dimensionamento e alinhamento adequados.

### Evidência

https://jam.dev/c/e4f15299-3ea5-4b3f-a366-d219fbe93924

---

## 🐞 BUG-04 – Validação “Base Legal” bloqueando formulário

- Severidade: 🔴 Alta
- Prioridade: 🔴 Alta
- Reprodutibilidade: 100%

### Resultado Atual

Erro exigindo base legal sem campo visível.

### Resultado Esperado

Campo visível ou remoção da obrigatoriedade.

### Impacto

🚨 BLOQUEIA 100% das inscrições.

### Evidência

https://jam.dev/c/e426496d-ea5e-4d5e-871b-f8af7c402f77

---

## 🐞 BUG-05 – Erros na seção “Outros Cursos”

- Severidade: 🟠 Média
- Prioridade: 🟠 Média

### Resultado Atual

Textos inconsistentes e CTAs sem ação.

### Resultado Esperado

Textos revisados e redirecionamento correto.

### Evidência

https://jam.dev/c/52bcb0d9-d9b1-4176-8e54-4262628ba1a4

---

## 🐞 BUG-06 – Botão inferior redireciona para site externo

- Severidade: 🔴 Alta
- Prioridade: 🔴 Alta

### Resultado Atual

Redirecionamento para Google.

### Resultado Esperado

Redirecionamento correto para fluxo de certificação.

### Evidência

https://jam.dev/c/5a6bafa7-e938-4005-a64c-d2fe00dab343

---

## 🐞 BUG-07 – Ausência de validação de Nome e Telefone

- Severidade: 🔴 Alta
- Prioridade: 🔴 Alta

### Resultado Atual

Sistema permite envio com campos obrigatórios vazios.

### Resultado Esperado

Bloqueio com mensagem de erro.

### Evidência

https://jam.dev/c/de4f2904-64ea-4774-803e-ddc4975d7ac9

---

## 🐞 BUG-08 – Placeholder fixo e ausência de máscara no telefone

- Tipo: Melhoria
- Classificação: Usabilidade / UX
- Severidade: 🟢 Baixa
- Prioridade: 🟢 Baixa
- Reprodutibilidade: 100%

### Resultado Atual

- Placeholder estático
- Sem máscara dinâmica
- Botão permite avanço com telefone inválido

### Resultado Esperado

- Máscara dinâmica (XX) XXXXX-XXXX
- Validação de formato antes do envio

### Impacto

Permite envio de dados inconsistentes.

### Evidência

https://jam.dev/c/de4f2904-64ea-4774-803e-ddc4975d7ac9

---

# 🌐 PARTE 02 – Site Institucional

URL: https://qualidade.apprbs.com.br/site

---

## 🐞 BUG-09 – Links inativos nos banners

- Severidade: 🟢 Baixa
- Prioridade: 🟢 Baixa

### Resultado Atual

Botões sem ação.

### Resultado Esperado

Redirecionamento adequado.

### Evidência

https://jam.dev/c/1d09709f-cdb3-450e-be76-828edfaabb12

---

## 🐞 BUG-10 – Conteúdo “Lorem Ipsum” em seções informativas

- Severidade: 🔴 Alta
- Prioridade: 🔴 Alta

### Resultado Atual

Texto fictício exibido.

### Resultado Esperado

Conteúdo real e informativo.

### Evidência

https://jam.dev/c/6fc68aff-0b4e-4597-af33-98623fc4361b

---

## 🐞 BUG-11 – Redirecionamento incorreto em “Próximos Eventos”

- Severidade: 🟠 Média
- Prioridade: 🔴 Alta

### Resultado Atual

Redirecionamento genérico sem relação com evento.

### Resultado Esperado

Link direto para inscrição do evento específico.

### Evidência

https://jam.dev/c/253171d1-40a3-4894-b7ec-15bc87fefe27

---

## 🐞 BUG-12 – Erro “Base Legal” no formulário final

- Severidade: 🔴 Alta
- Prioridade: 🔴 Alta

### Resultado Atual

Erro sem campo visível de aceite.

### Resultado Esperado

Campo obrigatório visível para consentimento.

### Impacto

🚨 Impede captação de leads.

### Evidência

https://jam.dev/c/a52f8d5e-5fbf-43be-a017-f07b1a3591c1  
https://jam.dev/c/b8c9a7de-100f-422c-b115-3de43c45ba03

---

## 🐞 BUG-13 – Informações inválidas no rodapé

- Severidade: 🟠 Média
- Prioridade: 🟠 Média

### Resultado Atual

Exibição de dados fictícios.

### Resultado Esperado

Dados reais da instituição.

### Evidência

https://jam.dev/c/90668d92-cde1-4ce8-82b1-29f333e87d42

---

# 📈 RESUMO DE SEVERIDADE

| Severidade | Quantidade |
| ---------- | ---------- |
| 🔴 Alta    | 8          |
| 🟠 Média   | 3          |
| 🟢 Baixa   | 2          |

---

# 🏁 CONCLUSÃO FINAL

O sistema apresenta falhas críticas em fluxos de conversão e inconsistências de conteúdo.

Recomenda-se:

- Correção imediata dos bugs de Alta Severidade
- Nova rodada de testes após ajustes
- Validação específica de formulários (LGPD + obrigatoriedade)

---

**Relatório elaborado por Rafael Felipe – QA**
