<img src="https://www.evertop.pl/wp-content/uploads/2021/01/grafiki_blog_blazor-06-1024x323.jpg">

# 💻 **FTT Blazor**
> Estudo funcional do Blazor comparando com o Angular e entrega de uma biblioteca com base em Material Design

---

# 🧩 **Instalando**
> Abaixo o passo a passo para instalar o componente
1. Adicionando dependencias
   - css
      - <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
      - <link href="https://github.com/luizgustavo77/FTTBlazor/blob/master/src/FTTBlazor/wwwroot/css/fttBlazor.css" rel="stylesheet" />
      - <link href="https://unpkg.com/material-components-web@latest/dist/material-components-web.min.css" rel="stylesheet">
   - js
      - <script src="https://github.com/luizgustavo77/FTTBlazor/blob/master/src/FTTBlazor/wwwroot/js/fttBlazor.js"></script>
   - startup
      - builder.Services.AddScoped<FTTToastService>();
      - builder.Services.AddScoped(sp => new HttpClient { BaseAddress = new Uri(builder.HostEnvironment.BaseAddress) });
   - imports
      - @using FTTBlazor
      - @using FTTBlazor.Core
      - @using FTTBlazor.Dialog
      - @using FTTBlazor.Components.Forms
      - @using FTTBlazor.Components.Forms.Button
      - @using FTTBlazor.Components.Forms.Input
      - @using FTTBlazor.Components.Forms.Link
      - @using FTTBlazor.Components.Forms.Select
      - @using FTTBlazor.Components.Toast
   - nupkg
2. Adicionando biblioteca
---

## ☕ **FTTBlazor Beta**
> Roadmap do desenvolvimento

| Componente | Relação | Entrega | Concluido | Responsavel |
| --- | --- | --- | --- | --- |
| Dialog | Dialog | Set | OK | LG |
| Toast | Dialog | Set | OK | LG |
| Grid Divider | Dialog | Out | --- | LG |
| Input | Forms | Set | OK | LG |
| Select Type T  | Forms | Set | OK | LG |
| Select Enum  | Forms | Set | OK | LG |
| Select Array  | Forms | Set | OK | LG |
| Number | Forms | Out | OK | LG |
| Color | Forms | Out | OK | LG |
| TextArea | Forms | Out | OK | LG |
| Calendar | Forms | Out | OK | LG |
| Time | Forms | Out | OK | LG |
| CheckBox | Forms | Out | OK | LG |
| Telefone | Forms | Out | OK | LG |
| EMail | Forms | Out | OK | LG |
| Link | Forms | Out | OK | LG |
| Money | Forms | Out | OK | LG |
| Crud | Crud | Nov | --- | LG |
| Finalizar | Todos | Dez | --- | LG e Thiago |
 
---
  
## 🙇🏻 **Perguntas**
> Use o "Issues" para abrir perguntas, pode auxiliar alguem no futuro

---

## 📜 **Licenciado**

Este projeto é licenciado pelos termos do [MIT license](https://github.com/luizgustavo77/FTTBlazor/blob/master/LICENSE.md).

---

## 🚀 **Propósito**
> Alem da entrega do TCC está é a nossa pequena contribuição sabendo que por diversas vezes encontrei exemplos e explicações na internet de maneira gratuita

<img src="https://cdn.dribbble.com/users/2401141/screenshots/5487982/developers-gif-showcase.gif">

---

## 🙋🏻 **Membros**

- [Luiz Gustavo](https://github.com/luizgustavo77) - criador
- [Thiago](https://github.com/thiagofernandes101)
- [Jhonatan](https://github.com/JhonatanMatos)
- [Paulo](https://github.com/paulopatrocinio)

---

## 💼 **Agradecimentos**
- [Blazor](https://blazor.net)
- [Material Design](https://material.io/components/)
- [Macorrati](https://www.udemy.com/course/curso-blazor-essencial/)
