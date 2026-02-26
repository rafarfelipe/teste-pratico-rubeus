# RELATÓRIO DE QUALIDADE (QA) – TESTE PRÁTICO RUBEUS

**Responsável:** Rafael Felipe  
**Data da Execução:** 25/02/2026  
**Objetivo:** Avaliação de qualidade das páginas de Certificação e Site Institucional

---

# 📈 RESUMO DE SEVERIDADE

| Severidade | Quantidade |
| ---------- | ---------- |
| 🔴 Alta    | 8          |
| 🟠 Média   | 3          |
| 🟢 Baixa   | 2          |


---

# 🌐 PARTE 01: Página de Certificação  
🔗 URL: https://qualidade.apprbs.com.br/certificacao

---

## 🐞 Item 01 – Texto de exemplo (“Lorem ipsum”) exibido em grande parte da página

**Tipo:** Correção  
**Classificação:** Usabilidade / Conteúdo  
**Severidade:** Alta | **Prioridade:** Alta  
**Reprodutibilidade:** 100%  
**Ambiente:** Chrome 145.0.7632.110 | Windows 11 (x86) | Web  

### Pré-condições
- Usuário com acesso ao site.

### Passos para reproduzir
1. Acessar a URL indicada.
2. Percorrer as seções da página e ler títulos e parágrafos.

### Resultado atual
A página exibe textos de exemplo como “Lorem ipsum…”, inclusive em títulos e conteúdos descritivos, sem informação real ao usuário.

### Resultado esperado
A página deve exibir conteúdo final em português, consistente e informativo, alinhado ao propósito da certificação.

### Impacto
Dificulta o entendimento do serviço, reduz a credibilidade/percepção de qualidade e pode afetar a conversão.

### Evidência
https://jam.dev/c/87dba742-04de-4b06-ad77-9944846daa75

---

## 🐞 Item 02 – Botão “Saiba mais” não executa ação ao clique

**Tipo:** Correção  
**Classificação:** Utilidade  
**Severidade:** Alta | **Prioridade:** Alta  
**Reprodutibilidade:** 100%  
**Ambiente:** Chrome 145.0.7632.110 | Windows 11 (x86) | Web  

### Pré-condições
- Usuário acessando a página de certificação.

### Passos para reproduzir
1. Acessar: https://qualidade.apprbs.com.br/certificacao
2. No topo da página (seção hero), clicar no botão “Saiba mais”.

### Resultado atual
O botão não executa qualquer ação (não navega, não realiza rolagem e não exibe feedback).

### Resultado esperado
Ao clicar, o sistema deve redirecionar para a página/rota de detalhes ou executar a ação prevista no fluxo.

### Impacto
Bloqueia o fluxo de informação do usuário, aumentando a taxa de rejeição.

### Evidência
https://jam.dev/c/0b90c434-9a13-4f88-873d-13fca64a556c

---

## 🐞 Item 03 – Imagem com dimensionamento inadequado no layout

**Tipo:** Melhoria  
**Classificação:** Desejabilidade  
**Severidade:** Média | **Prioridade:** Média  
**Reprodutibilidade:** 100%  
**Ambiente:** Chrome 145.0.7632.110 | Windows 11 (x86) | Web  

### Passos para reproduzir
1. Acessar: https://qualidade.apprbs.com.br/certificacao
2. Rolar até a seção com imagem ao lado do texto.

### Resultado atual
Imagem pequena e desalinhada visualmente em relação ao conteúdo.

### Resultado esperado
Imagem com dimensionamento adequado, proporção correta e alinhamento consistente com o layout (incluindo comportamento responsivo).

### Impacto
Prejudica a apresentação visual e pode afetar a experiência do usuário.

### Evidência
https://jam.dev/c/e4f15299-3ea5-4b3f-a366-d219fbe93924

---

## 🐞 Item 04 – Formulário bloqueado por validação de “base legal” sem campo visível

**Tipo:** Correção  
**Classificação:** Utilidade  
**Severidade:** Alta | **Prioridade:** Alta  
**Reprodutibilidade:** 100%  
**Ambiente:** Chrome 145.0.7632.110 | Windows 11 (x86) | Web  

### Pré-condições
- Usuário na página de certificação com o formulário visível.

### Passos para reproduzir
1. Acessar: https://qualidade.apprbs.com.br/certificacao
2. No formulário (1/2), preencher Nome, Telefone e E-mail
3. Clicar em “AVANÇAR”.

### Resultado atual
Exibe erro “É necessário informar a base legal”, mas não há campo (checkbox/select) para preencher.

### Resultado esperado
Se “base legal” for obrigatória, deve existir campo visível e selecionável (ex.: checkbox ou select) com orientação clara antes da validação. Caso não seja obrigatória, o avanço não deve ser bloqueado.

### Impacto
Impede o avanço do usuário e pode bloquear inscrições.

### Evidência
https://jam.dev/c/e426496d-ea5e-4d5e-871b-f8af7c402f77

---

## 🐞 Item 05 – Seção “Outros Cursos” com erro textual e CTAs sem ação

**Tipo:** Correção  
**Classificação:** Usabilidade  
**Severidade:** Média | **Prioridade:** Média  
**Reprodutibilidade:** 100%  
**Ambiente:** Chrome 145.0.7632.110 | Windows 11 (x86) | Web  

### Pré-condições
- Usuário na página de certificação.

### Passos para reproduzir
1. Acessar: https://qualidade.apprbs.com.br/certificacao
2. Rolar até a seção “Outros Cursos”
3. Verificar os textos dos CTAs
4. Clicar nos cards e botões

### Resultado atual
Textos incorretos/inconsistentes e clique não executa navegação ou abertura de detalhes.

### Resultado esperado
Textos revisados e padronizados; cards e CTAs devem redirecionar para as páginas correspondentes.

### Impacto
Prejudica a navegação e pode confundir o usuário.

### Evidência
https://jam.dev/c/52bcb0d9-d9b1-4176-8e54-4262628ba1a4

---

## 🐞 Item 06 – Botão “Quero me certificar” (barra azul inferior) redireciona para site externo

**Tipo:** Correção  
**Classificação:** Utilidade  
**Severidade:** Alta | **Prioridade:** Alta  
**Reprodutibilidade:** 100%  
**Ambiente:** Chrome 145.0.7632.110 | Windows 11 (x86) | Web  

### Pré-condições
- Usuário acessando a página de certificação.

### Passos para reproduzir
1. Acessar: https://qualidade.apprbs.com.br/certificacao
2. Rolar até o final da página
3. Clicar no botão “Quero me certificar”

### Resultado atual
Redirecionamento para site externo https://www.google.com/ .

### Resultado esperado
Deve redirecionar para o mesmo destino correto do botão equivalente localizado na barra superior (fluxo de certificação), sem redirecionamento externo indevido.

### Impacto
Interrompe o fluxo de navegação e pode gerar desconfiança ou abandono, afetando conversão.

### Evidência
https://jam.dev/c/5a6bafa7-e938-4005-a64c-d2fe00dab343

---

## 🐞 Item 07 – Ausência de validação para campos obrigatórios ("Nome" e "Telefone")

**Tipo:** Correção  
**Classificação:** Funcionalidade / Segurança de Dados  
**Severidade:** Alta | **Prioridade:** Alta  
**Ambiente:** Chrome 145.0.7632.110 | Windows 11 (x86) | Web  

### Pré-condições
- Usuário acessa a página de inscrição em ambiente web compatível.
- Formulário de inscrição disponível com campos "Nome", "Telefone" e "E-mail".
- Botão "AVANÇAR" visível e habilitado.

### Passos para reproduzir
1. Acessar a página de inscrição.
2. Deixar os campos "Nome" e "Telefone" vazios.
3. Preencher um e-mail válido.
4. Clicar em "AVANÇAR".

### Resultado atual
O sistema tenta avançar para a próxima etapa sem validar os campos obrigatórios "Nome" e "Telefone", não exibindo mensagens de erro específicas.

### Resultado esperado
O sistema deve impedir o avanço e exibir mensagens de erro abaixo dos campos obrigatórios não preenchidos ("Nome" e "Telefone").

### Impacto
Permite o envio de cadastros incompletos para o banco de dados, gerando leads inválidos.

### Evidência
https://jam.dev/c/de4f2904-64ea-4774-803e-ddc4975d7ac9

---

## 🐞 Item 08 – Placeholder de telefone fixo e ausência de máscara dinâmica

**Tipo:** Melhoria  
**Classificação:** Usabilidade / UX  
**Severidade:** Baixa | **Prioridade:** Baixa  
**Ambiente:** Chrome 145.0.7632.110 | Windows 11 (x86) | Web  

### Pré-condições
- Usuário acessa a página de inscrição em ambiente web compatível.
- Formulário de inscrição disponível com campo "Telefone" e botão "AVANÇAR".

### Passos para reproduzir
1. Observar o campo "Telefone" ao acessar a página.
2. Clicar no campo "Telefone" e tentar digitar um número.
3. Verificar se o botão "AVANÇAR" permanece habilitado mesmo com o campo incompleto ou mal formatado.

### Resultado atual
- O campo exibe um placeholder estático, que não desaparece ao digitar.
- Não há máscara dinâmica para o telefone.
- O botão "AVANÇAR" permite o clique mesmo com o campo incompleto.

### Resultado esperado
- Aplicação de máscara dinâmica (XX) XXXXX-XXXX.
- O botão "AVANÇAR" deve ser desabilitado ou exibir feedback visual caso o campo esteja incorreto ou incompleto.

### Impacto
Gera confusão visual para o usuário e permite o envio de dados em formatos inconsistentes.

### Evidência
https://jam.dev/c/de4f2904-64ea-4774-803e-ddc4975d7ac9

---

# 🌐 PARTE 02: Site Institucional  
🔗 URL: https://qualidade.apprbs.com.br/site

---

## 🐞 Item 09 – Falha de navegação (links inativos) nos banners principais

**Tipo:** Correção  
**Classificação:** Funcionalidade  
**Severidade:** Baixa | **Prioridade:** Baixa  
**Ambiente:** Chrome 145.0.7632.110 | Windows 11 (x86) | Web  

### Pré-condições
- Usuário acessando a página inicial do site institucional.

### Passos para reproduzir
1. Acessar: https://qualidade.apprbs.com.br/site
2. Clicar em "INSCREVA-SE" nos banners principais ou em "SAIBA MAIS" nos slides.

### Resultado atual
Botões "INSCREVA-SE" e "SAIBA MAIS" não possuem link ou ação.

### Resultado esperado
Os botões devem redirecionar o usuário para a página de inscrição ou para informações detalhadas.

### Impacto
Dificulta o acesso do usuário ao fluxo de inscrição e reduz a efetividade dos banners.

### Evidência
https://jam.dev/c/1d09709f-cdb3-450e-be76-828edfaabb12

---

## 🐞 Item 10 – Conteúdo em latim ("Lorem Ipsum") em seções informativas

**Tipo:** Correção  
**Classificação:** Conteúdo / UX  
**Severidade:** Alta | **Prioridade:** Alta  
**Ambiente:** Chrome 145.0.7632.110 | Windows 11 (x86) | Web  

### Pré-condições
- Usuário navegando pelas seções informativas da página inicial.

### Passos para reproduzir
1. Rolar a página inicial e ler as descrições das seções "CONHEÇA NOSSOS DIFERENCIAIS", "PRÓXIMOS EVENTOS" e "O QUE NOSSOS ALUNOS DIZEM".

### Resultado atual
Seções informativas exibindo "Lorem Ipsum".

### Resultado esperado
Textos reais em português descrevendo os diferenciais e eventos e ser informativo para o usuário.

### Impacto
Redução drástica da credibilidade da instituição e falha na comunicação.

### Evidência
https://jam.dev/c/6fc68aff-0b4e-4597-af33-98623fc4361b

---

## 🐞 Item 11 – Redirecionamento indevido na seção "Próximos Eventos"

**Tipo:** Correção  
**Classificação:** Funcionalidade / Navegação  
**Severidade:** Média | **Prioridade:** Alta  
**Ambiente:** Chrome 145.0.7632.110 | Windows 11 (x86) | Web  

### Pré-condições
- Usuário localizado na seção de "PRÓXIMOS EVENTOS" do site.

### Passos para reproduzir
1. Localizar a seção "PRÓXIMOS EVENTOS".
2. Clicar em "INSCREVE-SE AGORA!".

### Resultado atual
O redirecionamento leva sempre para a mesma página genérica sem relação com o conteúdo.

### Resultado esperado
Link direto para a página de inscrição do evento clicado.

### Impacto
Dificulta a participação do usuário nos eventos e gera confusão na navegação.

### Evidência
https://jam.dev/c/253171d1-40a3-4894-b7ec-15bc87fefe27

---

## 🐞 Item 12 – Erro de validação "Base Legal" e dados fictícios no formulário

**Tipo:** Correção  
**Classificação:** Funcionalidade / LGPD  
**Severidade:** Alta | **Prioridade:** Alta  
**Ambiente:** Chrome 145.0.7632.110 | Windows 11 (x86) | Web  

### Pré-condições
- Usuário na seção "NÃO FIQUE DE FORA!" com o formulário de newsletter visível.

### Passos para reproduzir
1. Preencher Nome, Email e Telefone no formulário final.
2. Clicar em "CONCLUIR".

### Resultado atual
Aparece a mensagem "É necessário informar a base legal" sem campo visível e o telefone apresenta números aleatórios.

### Resultado esperado
O formulário deve permitir o envio com campos limpos e possuir o campo de aceite legal visível.

### Impacto
Impede a captação de leads via newsletter.

### Evidência
https://jam.dev/c/a52f8d5e-5fbf-43be-a017-f07b1a3591c1  
https://jam.dev/c/b8c9a7de-100f-422c-b115-3de43c45ba03

---

## 🐞 Item 13 – Informações de rodapé inválidas (Endereço e Contatos)

**Tipo:** Correção  
**Classificação:** Conteúdo / UI  
**Severidade:** Média | **Prioridade:** Média  
**Ambiente:** Chrome 145.0.7632.110 | Windows 11 (x86) | Web  

### Pré-condições
- Usuário navegando no final da página (rodapé) do site.

### Passos para reproduzir
1. Rolar até o final da página e verificar a seção de Rodapé.

### Resultado atual
Exibição de informações genéricas e fictícias de contato.

### Resultado esperado
Dados reais da instituição (CEP, Endereço, E-mail e Telefone).

### Impacto
Impossibilita o contato externo do usuário com a faculdade.

### Evidência
https://jam.dev/c/90668d92-cde1-4ce8-82b1-29f333e87d42

---

# 🏁 CONCLUSÃO FINAL

O sistema apresenta falhas críticas em fluxos de conversão e inconsistências de conteúdo.

Recomenda-se:

- Correção imediata dos bugs de Alta Severidade
- Nova rodada de testes após ajustes
- Validação específica de formulários (LGPD + obrigatoriedade)
- loqueadores de Conversão:** Sim (Formulários com erro de "Base Legal")

 
 **Status Geral:** ❌ REPROVADO PARA PRODUÇÃO
  
---

**Relatório elaborado por Rafael Felipe – QA**


