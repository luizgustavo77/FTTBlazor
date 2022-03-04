<img src="https://www.evertop.pl/wp-content/uploads/2021/01/grafiki_blog_blazor-06-1024x323.jpg">

# 💻 **FTT Blazor**
> Estudo funcional do Blazor comparando com o Angular e entrega de uma biblioteca com base em Material Design

---

# 🧩 **Instalando**
> Abaixo o passo a passo para instalar o componente
1. Adicionando dependencias
- css
``` html
<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
<link rel="stylesheet" href="https://github.com/luizgustavo77/FTTBlazor/blob/master/src/FTTBlazor/wwwroot/css/fttBlazor.css" /> 
<link rel="stylesheet" href="https://unpkg.com/material-components-web@latest/dist/material-components-web.min.css" />
````
- js
``` html
<script src="https://github.com/luizgustavo77/FTTBlazor/blob/master/src/FTTBlazor/wwwroot/js/fttBlazor.js"></script>
```
   - startup
``` c#
builder.Services.AddScoped<FTTToastService>();
builder.Services.AddScoped(sp => new HttpClient { BaseAddress = new Uri(builder.HostEnvironment.BaseAddress) });
```
- imports
``` c#
@using FTTBlazor
@using FTTBlazor.Common.Core
@using FTTBlazor.Components.Crud
@using FTTBlazor.Components.Dialog
@using FTTBlazor.Components.Divider
@using FTTBlazor.Components.Forms
@using FTTBlazor.Components.Forms.Button
@using FTTBlazor.Components.Forms.Input
@using FTTBlazor.Components.Forms.Link
@using FTTBlazor.Components.Forms.Select
@using FTTBlazor.Components.Toast
```
- nupkg
``` cmd
Install-Package FTTBlazor -Version 1.0.0
```
---

## ☕ **FTTBlazor Beta**
> Roadmap do desenvolvimento

| Componente | Relação | Entrega | Concluido | Responsavel |
| --- | --- | --- | --- | --- |
| Dialog | Dialog | Set/2021 | OK | LG |
| Toast | Dialog | Set/2021 | OK | LG |
| Grid Divider | Dialog/2021 | Out | OK | LG |
| Input | Forms | Set/2021 | OK | LG |
| Select Type T  | Forms | Set/2021 | OK | LG |
| Select Enum  | Forms | Set/2021 | OK | LG |
| Select Array  | Forms | Set/2021 | OK | LG |
| Number | Forms | Out/2021 | OK | LG |
| Color | Forms | Out/2021 | OK | LG |
| TextArea | Forms | Out/2021 | OK | LG |
| Calendar | Forms | Out/2021 | OK | LG |
| Time | Forms | Out/2021 | OK | LG |
| CheckBox | Forms | Out/2021 | OK | LG |
| Telefone | Forms | Out/2021 | OK | LG |
| EMail | Forms | Out/2021 | OK | LG |
| Link | Forms | Out/2021 | OK | LG |
| Money | Forms | Out/2021 | OK | LG |
| Crud | Crud | Nov/2021 | OK | LG |
 
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
