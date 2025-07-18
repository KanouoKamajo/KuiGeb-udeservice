# Astro Starter Kit: Basics

```sh
npm create astro@latest -- --template basics
```

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/withastro/astro/tree/latest/examples/basics)
[![Open with CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/sandbox/github/withastro/astro/tree/latest/examples/basics)
[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/withastro/astro?devcontainer_path=.devcontainer/basics/devcontainer.json)

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

![just-the-basics](https://github.com/withastro/astro/assets/2244813/a0a5533c-a856-4198-8470-2d67b1d7c554)

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.svg
├── src/
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
└── package.json
```

To learn more about the folder structure of an Astro project, refer to [our guide on project structure](https://docs.astro.build/en/basics/project-structure/).

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).


17.07.2025 14:55 Uhr

Von Nadine:

Was ich geändert habe(hoffe das das hier klappt mit den Infos):
- Layout aktuallisiert: alle metadaten die html usw. liegen jetzt dort, im Impressum und in Datenschutz habe ich es rausgenommen
- musste das css aus beiden auskommentieren, hat den footer beeinflusst, steht aber noch drin, dann habe ich nocht einen Container darum gebaut, damit die Schrift nicht am Rand link "hängt";
  müssen sehen was wir von dem css style brauchen
- alle Seiten haben jetzt die navbar und den footer
- Navbar hab ich die links angepasst, die haben auf den Seiten Impressum und Datenschutz nicht funktioniert wegen: "#"
- in der Index habe ich die Modalinhalte gelöscht, standen noch drin in der Version die ich habe
- Die Titel der Seiten habe ich so geschrieben <Layout title="Impressum – KUI Gebäudegestaltung">
- hab den Titel in Gebäudegestaltung umgenannt, steht so auf der Visitenkarte, ist mir erst später aufgefallen, müssen durchschauen, wo der noch steht, weiss nicht ob ich alle gefunden habe

 Fragen:
- Im Moment öffnen sich neue Tabs zum Impressum und zum Datenschutz, sollte man das lassen und die Seiten im aktuellen Tab öffnen lassen?
- Soll noch ein Bereich über den Leistung eingebaut werden, der Geschichte der Firma beinhaltet, Oder sollte der Hero-Bereich, das ist der Bereich wo der Name fett steht mit einem Bild versehen werden, habe mir andere Seiten angesehen, die solche Lösungen hatten


18.07.2025 
Änderungen: 
- Css etwas angepasst
- Impressum und Datenschutz dem allgemeinen Style angepasst
- im Leistungsbereich zuerst eine weitere Card eingbaut, jetz im Moemtn ist ein Akkordeon drin, die Cards wirken so riesig und wenn dann auch noc mehr Infos sein sollen und jedesmal ein Popupaufgeht ist es vielleicht zu viel?
  mit Akkordeon eventuell besser?
