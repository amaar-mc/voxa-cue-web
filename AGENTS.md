<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes. APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Voxa Cue marketing site

## Product boundary

Keep every claim aligned with the phone-first product. The built-in iPhone
microphone is the only live audio source. Live processing and cue selection run
on-device. CoreBluetooth sends haptic commands to the wearable. Never add a
Raspberry Pi, external microphone, cloud-dependent live cue, or raw-audio upload
to site copy. Post-session AI is optional and consent-gated.

## Build rules

- Use strict TypeScript and functional React components.
- Keep the page primarily server-rendered. Add client boundaries only for real
  interaction.
- Preserve the warm ivory, graphite, teal, and copper semantic palette.
- Do not use em dashes, all-caps display copy, generic purple AI visuals, or
  excessive text.
- Keep reduced-motion support and keyboard focus behavior intact.
- Treat `docs/image-prompts.json` as the source record for generated imagery.
- Run `pnpm verify` before committing.

## Commits

Use `type(scope): description`. The commit author is Amaar only. Never add a
co-author trailer.
