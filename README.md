# Landing page white label

Landing genérica em Next.js para demonstrar rapidamente a marca de um cliente.

```bash
npm install
npm run dev
```

## Trocar de cliente

1. **Preset ativo**: em `src/brand/brand.config.ts`, importe outro preset (`pedra`, `tinta`, `noite`) ou crie um novo em `src/brand/presets/` copiando um existente.
2. **Nome, cores e textos**: edite o preset. `colors` vira variáveis CSS e repinta a página inteira. Use `colorScheme: "dark"` para paletas escuras. Os textos padrão estão em `src/brand/presets/base.ts`; sobrescreva no preset só o que mudar.
3. **Logo**: coloque o arquivo em `public/brand/` e preencha `logo.src`. Com `tint: true`, um logo monocromático (SVG/PNG transparente) assume a cor de acento. Com `src: null`, aparece só o nome em fonte de destaque.
4. **Imagens**: substitua os arquivos em `public/brand/` mantendo os nomes, ou aponte para outros caminhos no preset.
5. **Seções**: ligue ou desligue em `sections`.

O formulário de contato é demonstrativo (não envia). A integração fica em `src/sections/contact-form.tsx`.

As referências visuais usadas no design estão em `design/references/`.
