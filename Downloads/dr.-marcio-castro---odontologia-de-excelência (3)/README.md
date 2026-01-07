
# 🦷 Website Dr. Marcio Castro

Este projeto usa **Vite + React**. Para que ele funcione no GitHub Pages sem dar "tela branca", você precisa gerar a versão de produção (build).

## 🚀 Como subir para o GitHub (CMD)

Abra o CMD na pasta do projeto e digite:

### 1. Inicializar o Git
```cmd
git init
git add .
git commit -m "feat: estrutura profissional para deploy"
```

### 2. Conectar e Enviar
```cmd
git remote add origin https://github.com/CalercMusic/site-dentista.git
git branch -M main
git push -u origin main
```

## 🌐 Como colocar o site no ar (Hospedagem)

### Opção A: Vercel (Recomendada - Automática)
1. Vá em [vercel.com](https://vercel.com) e conecte seu GitHub.
2. Importe o projeto `site-dentista`.
3. Nas configurações, adicione a **Environment Variable**: `API_KEY` (sua chave do Gemini).
4. Clique em **Deploy**. A Vercel vai compilar tudo sozinha e te dar um link funcional.

### Opção B: GitHub Pages (Manual)
Se quiser usar o GitHub Pages, você precisa primeiro rodar o comando de build no seu PC:
1. `npm install`
2. `npm run build`
3. Isso criará uma pasta `dist`. É o conteúdo desta pasta `dist` que deve ser enviado para o GitHub.

---
© 2024 Dr. Marcio Castro.
