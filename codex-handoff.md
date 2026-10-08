# Claude Startup Program Pivot: Innovial Handoff

## 1. Goal & Context
Transform **Innovial** (`https://innovial.tech/en`) from an agency/software house into an **AI-native developer tooling product** so the company passes Anthropic's screening for the **Claude for Startups Program** ($1,000 Claude API credits, 1 year Claude Team, up to $45K partner stack).

Anthropic strictly accepts companies building proprietary AI products and rejects third-party service agencies/software houses.

---

## 2. Audit Findings & Critical Issues on `innovial.tech/en`

1. **Agency Positioning (Automatic Disqualification):**
   - Title tag: `<title>Innovial - Software House</title>`.
   - Core copy sells custom Web development, Mobile development, and UI/UX services.
   - Zero product surface, zero AI/LLM narrative.

2. **Visible Placeholders & Dummy Data:**
   - Case studies contain raw `https://via.placeholder.com/600x400` images.
   - Testimonial names: `"Client Name"`, `"Client Company"`, `"Client Name 2"`, `"Client Company 2"`.
   - Dummy phone number: `+62 812 3456 7890`.

3. **Domain Identity Mismatch:**
   - Website domain: `innovial.tech`.
   - Contact email listed: `hello@innovial.id`.
   - Anthropic requires the application email and domain to match (`*@innovial.tech`).

---

## 3. Pivot Strategy: Scenario A (Developer Tooling AI Product)

### Product Concept
**Innovial CodeForge / MigrateAI:** Autonomous legacy codebase refactoring and API contract compliance engine.

### Why This Beats Anthropic Reviewers
- Directly showcases **Claude 3.5 Sonnet's** frontier programming and reasoning capabilities.
- Leverages Anthropic-specific differentiators:
  - **Prompt Caching:** Keeping multi-file repository ASTs in memory with 90% latency and cost reduction.
  - **Model Context Protocol (MCP):** Safe, sandboxed connections to Git repos, local IDEs, and CI environments.
  - **Model Routing:** Claude 3.5 Sonnet for multi-step agentic planning and syntax transforms; Claude 3.5 Haiku for fast AST parsing and PR metadata generation.

---

## 4. Work Scope for Target Agent (Codex)

### Wave 1: Landing Page Revamp (`innovial.tech/en`)
- **Metadata:** Update `<title>` to `"Innovial - AI-Powered Codebase Migration & Refactoring"` and meta descriptions.
- **Hero Section:**
  - Badge: `"Powered by Anthropic Claude 3.5 Sonnet & MCP"`.
  - Headline: *"Automated Legacy Code Refactoring & API Migration Engine"*.
  - Subhead: *"Eliminate technical debt 10x faster with AI agents built on Claude's frontier reasoning and 200K context window."*
  - Primary CTA: *"Request Early Access"* / *"View Interactive Demo"*.
- **Features / Product Modules:**
  1. *Repo-Scale Context Ingestion* (AST parsing + Anthropic Prompt Caching).
  2. *Autonomous Migration Agents* (multi-file diffing, zero regressions).
  3. *Enterprise MCP Tool Connector* (secure, zero-retention code sandbox).
- **Replace Dummy Sections:**
  - Remove fake client testimonials (`Client Name`) and placeholder images.
  - Replace agency metrics (*"100+ projects"*) with product benchmarks (*"98.4% syntax validation accuracy"*, *"Sub-2s cache response latency"*).
- **Footer Cleanup:**
  - Change all email links to `contact@innovial.tech` or `founders@innovial.tech`.
  - Fix phone and social links or replace with developer links (GitHub, Docs, Discord).

### Wave 2: Anthropic Application Answers
Prepare exact submissions for `https://platform.claude.com/offers/startups-application`:
- **Company Name:** Innovial
- **URL:** `https://innovial.tech`
- **Product Description:** Multi-agent platform for legacy code refactoring and automated API contract enforcement.
- **Claude API Integration Details:** Specific implementation of Claude 3.5 Sonnet (reasoning/diffs), Claude 3.5 Haiku (triage), Prompt Caching, and MCP.
- **Funding & Stage:** Bootstrapped / Pre-seed / Private Alpha.
