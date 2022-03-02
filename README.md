<img src="https://www.evertop.pl/wp-content/uploads/2021/01/grafiki_blog_blazor-06-1024x323.jpg">

# 💻 **FTT Blazor**
> Functional study of Blazor WebAssembly with delivery of a library based on Material Design

---

# 🧩 **Install**
> Below is described the necessary steps to install the components
1. Adding dependencies
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

```
2. Adding libraries
---

## ☕ **FTTBlazor Beta**
> Development roadmap

| Component | List | Committal | Done | Responsible developer |
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
  
## 🙇🏻 **Questions / Suggestions**
> Use git issues to report any problems and bugs. Also feel free to give us suggestions on how to improve our library

---

## 📜 **License**

This project is licensed under the terms of [MIT license](https://github.com/luizgustavo77/FTTBlazor/blob/master/LICENSE.md).

---

## 🚀 **Purpose**
> In addition to the undergraduate thesis, this is our small contribution knowing that I have found examples and explanations on the internet for free on several occasions.

<img src="https://cdn.dribbble.com/users/2401141/screenshots/5487982/developers-gif-showcase.gif">

---

## 🙋🏻 **This project developers**

- [Luiz Gustavo](https://github.com/luizgustavo77) - main developer
- [Thiago](https://github.com/thiagofernandes101)
- [Jhonatan](https://github.com/JhonatanMatos)
- [Paulo](https://github.com/paulopatrocinio)

---

## 💼 **Thanks**
- [Blazor](https://blazor.net)
- [Material Design](https://material.io/components/)
- [Macorrati](https://www.udemy.com/course/curso-blazor-essencial/)
