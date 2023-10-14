## Portfolio feito com Next.js, TypeScript e TailwindCSS

Site: https://jeziel-portfolio.vercel.app/

![Next JS](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)

![Imagem da Página Inicial do site](./public/pagina-inicial.png)

![Imagem do Projetos recentes](./public/projetos-recentes.png)

![Imagem da Página de contatos](./public/pagina-contatos.png)

## Tests:

> npm install --save-dev jest jest-environment-jsdom @testing-library/react @testing-library/jest-dom -D

> npm install @types/jest -D

> [Optional] npm install @types/testing-library__jest-dom -D

Configurar package.json:

```json
{
  "scripts": {
      ...
      "test": "jest",
      "watch": "jest --watch",
      "updateSnapshot": "jest --updateSnapshot",
      "coverage": "jest --coverage"
}
```
