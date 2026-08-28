# Is It Flooding?

**A community-powered flood intelligence map for the Philippines, with verifiable on-chain reports on Solana.**

## Vision

When heavy rain starts, people need a simple answer: *is it flooding where I am, and which route is safer?* Today that answer is scattered across social posts, group chats, and delayed updates. Is It Flooding? turns time-stamped community observations into a map that helps residents, commuters, responders, and local groups make faster, safer decisions.

The web app starts with a mobile-first map of active reports. Each marker records the flood level, time observed, and a short description. Reports are clearly labeled as community observations, not official emergency instructions. The product will pair those observations with source transparency, moderation, and official-data links as integrations become available.

## Solana integration

Solana is used for lightweight, verifiable participation rather than putting sensitive location data on-chain.

- **Flood report attestations:** the Anchor program stores a minimal report record: reporter, coarse geohash, severity, observed time, and an off-chain evidence hash.
- **Community rewards token:** a non-transferable participation/reputation token is planned for verified contributions and moderation actions. It is not an investment product and carries no promise of value.
- **Compressed NFT (cNFT) badges:** contributors can receive low-cost cNFT badges for verified reports, local response participation, and seasonal challenges. Exact coordinates, photos, and personal data remain off-chain.
- **Privacy by design:** the client rounds location before submission; on-chain data is deliberately coarse and avoids personally identifiable information.

## Initial architecture

- Next.js App Router + TypeScript for the public map and reporting flow
- Tailwind CSS tokens for a high-contrast neutral emergency-map theme
- Leaflet/MapLibre adapter planned behind `src/components/flood-map.tsx`
- Anchor program in `programs/is-it-flooding` for report attestations
- Metaplex Bubblegum/Umi integration planned for cNFT badges
- Helius RPC/DAS planned for asset indexing and program activity

## Local development

```bash
npm install
npm run dev
```

For the program, install the Solana CLI, Rust, and Anchor, then run:

```bash
anchor build
anchor test
```

The initial program ID is a development placeholder. Generate and configure a dedicated keypair before deployment.

## Milestones

| Date | Deliverable |
| --- | --- |
| Aug 31, 2026 | Public map prototype, responsive layout, report data model, and repository documentation |
| Sep 5, 2026 | Devnet Anchor report attestation program with tests and basic client submission flow |
| Sep 10, 2026 | cNFT badge prototype, moderation queue, source transparency UI, and pilot feedback round |
| Sep 15, 2026 | Public devnet beta, deployment documentation, demo walkthrough, and measured pilot KPI report |

## Safety note

Is It Flooding? is an information and community-reporting tool, not a replacement for official emergency services or local-government advisories. In an emergency, follow official guidance and call local emergency services.
