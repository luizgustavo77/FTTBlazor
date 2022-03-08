<img src="https://raw.githubusercontent.com/luizgustavo77/FTTBlazor/master/src/FTTBlazor.Client/wwwroot/img/logoMenu.png">

# 💻 **FTT Blazor**
> Functional study of Blazor WebAssembly with delivery of a library based on Material Design

---
# 📖 **Manual**
> You can run as a debug using IIS to see the example pages or access the link below:

- [**Wiki**](https://github.com/luizgustavo77/FTTBlazor/wiki)

---

# 🧩 **Install**
> Below is described the necessary steps to install the components
- nupkg
``` cmd
Install-Package FTTBlazor
Install-Package FTTBlazor.Common
```
- css
``` html
   <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
   <link rel="stylesheet" href="https://unpkg.com/material-components-web@latest/dist/material-components-web.min.css" />
   <link rel="stylesheet" href="_content/FTTBlazor/fttBlazor.css" />
````
- js
``` html
   <script src="_content/FTTBlazor/fttBlazor.js"></script>
```
   - startup
``` c#
builder.Services.AddScoped<FTTToastService>();
builder.Services.AddScoped(sp => new HttpClient { BaseAddress = new Uri(builder.HostEnvironment.BaseAddress) });
```
- imports
``` c#
@using FTTBlazor
```
---

## ☕ **FTTBlazor Beta**
> Development roadmap

| Component | List | Committal | Done | Responsible developer |
| --- | --- | --- | --- | --- |
| Dialog | Dialog | Set/2021 | OK | LG |
| Toast | Dialog | Set/2021 | OK | LG |
| Grid Divider | Dialog | Out/2021 | OK | LG |
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

<img src="https://raw.githubusercontent.com/luizgustavo77/FTTBlazor/master/src/FTTBlazor.Client/wwwroot/img/team.gif">

---

## 🙋🏻 **This project developers**

- [Luiz Gustavo](https://github.com/luizgustavo77) - main developer
- [Thiago](https://github.com/thiagofernandes101)
- [Jhonatan](https://github.com/JhonatanMatos)
- [Paulo](https://github.com/paulopatrocinio)

---

## 💼 **Thanks**
- Thesis advisor: [Eduardo Savino Gomes](https://blazor.net)
- [Blazor](https://blazor.net)
- [Material Design](https://material.io/components/)
- [Macorrati](https://www.udemy.com/course/curso-blazor-essencial/)
