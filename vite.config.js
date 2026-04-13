import { defineConfig } from 'vite'
import purgecss from 'vite-plugin-purgecss'
import handlebars from 'vite-plugin-handlebars'

export default defineConfig({
  // Base necesaria para GitHub Pages
  base: '/PW2OPVDRYWALL2-NUEVO/',

  build: {
    cssMinify: true,
    rollupOptions: {
      input: {
        main:                 'index.html',
        // Cambiamos 'html/' por 'src/pages/' que es donde están tus archivos según la imagen
        acercaDe:             'src/pages/acercaDe.html',
        contactenos:          'src/pages/contacenos.html', 
        formRegistro:         'src/pages/formRegistro.html',
        galeria:              'src/pages/galeria.html',
        nuestrosProgramas:    'src/pages/nuestrosProgramas.html',
        porqueOpv:            'src/pages/porqueOpv.html',
        preguntasFrecuentes:  'src/pages/preguntasFrecuentes.html',
        terminosYcondiciones: 'src/pages/terminosYcondiciones.html',
        testimonios:          'src/pages/testimonios.html',
      }
    }
  },

  plugins: [
    handlebars({
      // Tu carpeta partials está en la raíz según la imagen
      partialDirectory: './partials',
    }),
    purgecss({
      content: [
        './index.html',
        './src/pages/**/*.html', // Ajustado a tu carpeta real
        './src/**/*.js',         // Busca el JS dentro de src
      ],
    }),
  ],
})