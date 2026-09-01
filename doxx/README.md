# DOXX - Landing Page de Alta Conversão

Protótipo de Landing Page para o sistema de inteligência jurídica **DOXX**, desenvolvido para captação de leads e geração de inscrições para lista de espera, direcionada a advogados.

## 🚀 Como visualizar o protótipo

Basta abrir o arquivo `index.html` em qualquer navegador moderno (Chrome, Firefox, Edge, Safari).

Ou, se preferir, inicie um servidor local:

```bash
# Com Python
python -m http.server 8000

# Com Node.js (npx)
npx serve
```

Depois acesse `http://localhost:8000` no navegador.

## 📁 Estrutura do projeto

```
doxx/
├── index.html          # Página principal (Landing Page)
├── css/
│   ├── style.css       # Estilos principais
│   └── responsive.css  # Estilos responsivos
├── js/
│   └── main.js         # Interações e funcionalidades
└── img/                # Pasta para imagens locais
```

## 🎨 Seções da Landing Page

1. **Navbar** - Navegação fixa com efeito de scroll
2. **Hero** - Proposta de valor impactante com CTA principal
3. **Trust Bar** - Logos de escritórios parceiros (prova social)
4. **Solução** - 4 pilares do produto (IA, Pesquisa, Análise, Segurança)
5. **Benefícios** - Vantagens para advogados
6. **Como Funciona** - 3 passos simples
7. **Depoimentos** - Prova social com avaliações
8. **Lista de Espera** - Formulário de captação de leads (CTA principal)
9. **FAQ** - Perguntas frequentes (accordion)
10. **Footer** - Links e contato

## 🎯 Otimização para Conversão

- **CTA principal** em destaque no hero e repetido no formulário
- **Formulário enxuto** (apenas 4 campos) para reduzir fricção
- **Prova social** (depoimentos, estatísticas, logos)
- **Urgência** ("Vagas limitadas", "Acesso antecipado")
- **Benefícios claros** focados no público-alvo (advogados)
- **Design responsivo** para mobile e desktop

## 🛠️ Tecnologias

- HTML5
- CSS3 (variáveis, grid, flexbox, animações)
- JavaScript (vanilla, sem dependências)
- Font Awesome (ícones)
- Google Fonts (Inter)
- Imagens do Unsplash (gratuitas)

## 📝 Personalização

Para adaptar ao seu projeto real:

1. **Cores** - Edite as variáveis CSS no início de `css/style.css`
2. **Logo** - Substitua o ícone e texto no `index.html`
3. **Formulário** - Conecte o envio ao seu backend/CRM no `js/main.js`
4. **Imagens** - Baixe imagens e coloque na pasta `img/`, atualizando os caminhos

---

Desenvolvido por **Alexandre Armelline** - Desenvolvedor Web
