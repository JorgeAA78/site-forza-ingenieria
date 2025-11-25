# Guía para Subir y Desplegar tu Proyecto Web

Esta guía te ayudará a subir tu proyecto a GitHub y desplegarlo en internet para que cualquiera pueda verlo.

## 1. Preparación del Repositorio Local (Git)

Ya hemos creado el archivo `.gitignore` para evitar subir archivos innecesarios. Ahora, sigue estos pasos en tu terminal (o deja que yo ejecute los comandos por ti):

1.  **Inicializar Git**:
    ```bash
    git init
    ```
2.  **Agregar archivos**:
    ```bash
    git add .
    ```
3.  **Guardar cambios (Commit)**:
    ```bash
    git commit -m "Primer commit: Sitio web Forza Ingeniería completo"
    ```

## 2. Subir a GitHub

1.  Ve a [github.com](https://github.com) e inicia sesión.
2.  Haz clic en el botón **+** (arriba a la derecha) y selecciona **New repository**.
3.  **Repository name**: Escribe un nombre, por ejemplo: `forza-ingenieria-web`.
4.  Elige **Public** (Público).
5.  **No** marques "Initialize this repository with a README" (ya tenemos el proyecto local).
6.  Haz clic en **Create repository**.
7.  Copia los comandos que aparecen en la sección **"…or push an existing repository from the command line"**. Se verán parecidos a esto:
    ```bash
    git remote add origin https://github.com/TU_USUARIO/forza-ingenieria-web.git
    git branch -M main
    git push -u origin main
    ```
8.  Pega y ejecuta esos comandos en tu terminal.

## 3. Publicar en Internet (Opciones Gratuitas)

Una vez que tu código esté en GitHub, la forma más fácil de publicarlo es usar **Netlify** o **Vercel**.

### Opción A: Netlify (Recomendado para estáticos)
1.  Ve a [netlify.com](https://www.netlify.com) y regístrate con tu cuenta de GitHub.
2.  Haz clic en **"Add new site"** > **"Import an existing project"**.
3.  Selecciona **GitHub**.
4.  Busca y selecciona tu repositorio `forza-ingenieria-web`.
5.  Haz clic en **Deploy Site**.
6.  ¡Listo! En unos segundos tendrás una URL pública (ej. `forza-ingenieria.netlify.app`).

### Opción B: GitHub Pages
1.  En tu repositorio de GitHub, ve a **Settings** > **Pages**.
2.  En **Source**, selecciona `Deploy from a branch`.
3.  En **Branch**, selecciona `main` y la carpeta `/root`.
4.  Haz clic en **Save**.
5.  Tu sitio estará disponible en `https://TU_USUARIO.github.io/forza-ingenieria-web/`.

---

> **Nota**: Si necesitas hacer cambios futuros, solo edita tus archivos y ejecuta:
> ```bash
> git add .
> git commit -m "Descripción del cambio"
> git push
> ```
> ¡Tu sitio web se actualizará automáticamente!
