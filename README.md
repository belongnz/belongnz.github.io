# BelongNZ — Static Website

**Earn There. Belong Here.**

A minimal, fast, fully static website for BelongNZ — no build tools, no frameworks, no dependencies. Pure HTML/CSS/JS, ready for free hosting on GitHub Pages.

## Structure

```
belongnz/
├── index.html                  # Homepage: hero, why-now, package grid, journey, trust, FAQ
├── assets/
│   ├── style.css               # All styling (single file)
│   └── site.js                 # Mobile nav + scroll reveal (respects reduced motion)
├── packages/
│   ├── masterclass.html        # $25  — NZ Migration Masterclass (Stage 1)
│   ├── pathway-report.html     # $49  — Pathway Readiness Report (Stage 1)
│   ├── assessment.html         # $249 — Licensed Adviser Assessment (Stage 2, flagship)
│   ├── qualification.html      # $499 — Qualification Recognition (Stage 3)
│   ├── cv-package.html         # $199 — NZ-Ready CV & Interview (Stage 3)
│   └── settlement.html         # $750+ — Settlement Concierge (Stage 4)
└── README.md
```

## Deploy on GitHub Pages (free)

1. Create a new GitHub repository (e.g. `belongnz-site`).
2. Upload all files/folders exactly as structured above (or `git push` them).
3. Repo → **Settings → Pages** → Source: **Deploy from a branch** → Branch: `main`, folder `/ (root)` → Save.
4. Your site goes live at `https://<username>.github.io/belongnz-site/` within ~2 minutes.

### Connect your custom domain
1. In **Settings → Pages → Custom domain**, enter your domain (e.g. `belongnz.com`) and save — GitHub creates a `CNAME` file.
2. At your domain registrar, add:
   - `A` records for the apex domain pointing to GitHub Pages IPs: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - A `CNAME` record for `www` pointing to `<username>.github.io`
3. Back in GitHub Pages settings, tick **Enforce HTTPS** once the certificate is issued (can take up to 24h).

## Before you launch — replace these placeholders

- [ ] **Email**: replace every `hello@belongnz.example` with your real address (search all files).
- [ ] **Booking links**: the buy buttons currently open a pre-filled email. Replace with your Calendly/Stripe Payment Link/Tally form URLs when ready (search for `mailto:`).
- [ ] **WhatsApp**: footer link is a placeholder — swap in your `https://wa.me/<number>` link.
- [ ] **LIA details**: once your Licensed Immigration Adviser partnership is signed, add their name and IAA licence number to the assessment page and compliance card. Do **not** launch paid assessments before this is in place.
- [ ] **Prices**: all prices are strategic suggestions — confirm against your LIA agreement and cost base.
- [ ] **Analytics**: add your analytics snippet (e.g. Plausible or GA4) before running ads.

## Compliance notes (important)

- Every page carries the disclaimer that BelongNZ does not provide immigration advice and that all advice comes from a Licensed Immigration Adviser (Immigration Advisers Licensing Act 2007).
- No page uses guarantee language, fake urgency or fear marketing — keep it that way when editing copy.
- The "$49 credited towards assessment" and "attendee discount" offers are copy promises: honour them operationally or remove them.

## Design tokens (for consistency in future pages)

- **Colours**: Pounamu `#0F3D2E` · Fern `#1E5C45` · Mist `#F4F6F2` · Ink `#12201A` · Tussock gold `#C9A24B`
- **Type**: Newsreader (headings) + Figtree (body/UI), loaded from Google Fonts
- **Signature motif**: the dotted "route line" (Gulf → Aotearoa), echoed in package stage labels
