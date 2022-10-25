# README

# Como usarlo 

Si vienes de tiktok y no sabes nada de programación, solo [descarga este repositorio](https://github.com/Shair17/wannabemygf/archive/refs/heads/main.zip)

Una vez descargado, descomprime el contenido y dentro de la carpeta `/build/bin` encontrarás un archivo con el nombre de `wannabemygf.exe`, ese archivo ejecutable puedes enviar a quien quieras por donde quieras, usalo con responsabilidad :)

Si tienes conocimientos sobre programación quizás te interese saber que este pequeño programa está escribo con Go y tecnologías web (vitejs y react). Hay un proyecto llamado [Wails](https://wails.io/) (opensource por suerte) que te permite construir aplicaciones para escritorio que compila a binario para todas las plataformas (Windows, Mac, Linux). En este repositorio podrás ver todo el código fuente.

# Wails Boilerplate

## About

This is the official Wails React-TS template.

You can configure the project by editing `wails.json`. More information about the project settings can be found
here: https://wails.io/docs/reference/project-config

## Live Development

To run in live development mode, run `wails dev` in the project directory. This will run a Vite development
server that will provide very fast hot reload of your frontend changes. If you want to develop in a browser
and have access to your Go methods, there is also a dev server that runs on http://localhost:34115. Connect
to this in your browser, and you can call your Go code from devtools.

## Building

To build a redistributable, production mode package, use `wails build`.
