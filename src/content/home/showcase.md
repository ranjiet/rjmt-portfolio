---
eyebrow: Systems Built
headline: Selected systems built from real operational messes.
sectionIntro: "My build work is shaped by years spent inside large organizations where messy data, hidden dependencies, manual workarounds, and fragile reporting logic were part of daily operations. Those lessons now inform how I design CRM systems: with structure, visibility, governance, and a healthy respect for what can break."
systemGroups:
  - groupTitle: Geographic Intelligence
    groupSummary: Systems that turn CRM location data into territory logic, spatial search, and map-based decision support.
    systems:
      - title: Radial Link
        summary: A custom Zoho CRM data layer that connects ZIP codes, counties, coordinates, and ownership rules to support county-level territory assignment.
      - title: Proximity Search
        summary: A radius-based lookup tool that uses Radial Link coordinates to help users find nearby Leads, Accounts, and Deals directly inside CRM.
      - title: CRM Mapping Tool
        summary: A Python-powered mapping tool that visualizes CRM Accounts, Deals, and territory data using Radial Link records as the geographic foundation.
  - groupTitle: Data Integrity & Governance
    groupSummary: Systems that help teams reduce data drift, understand dependencies, and make CRM changes without flying blind.
    systems:
      - title: Data Integrity Framework
        summary: A cross-module synchronization framework that keeps Leads, Contacts, Accounts, and Deals aligned through persistent IDs, integrity triggers, and audit-friendly logic.
      - title: Zoho Governance Map
        summary: A local metadata and dependency toolkit that helps answer “what breaks if we change this?” across fields, workflows, functions, and modules.
  - groupTitle: Revenue Operations Flow
    groupSummary: Systems that support cleaner quoting, stronger approval controls, and better visibility into how revenue actually moves.
    systems:
      - title: Deal Velocity Tracker
        summary: A stage-history framework that tracks how long deals spend in each stage, exposing bottlenecks and pipeline movement patterns.
      - title: Quoting Automation
        summary: A Zoho-based quoting workflow that reduces manual quote assembly and supports cleaner handoffs between CRM data, products, pricing, and sales documents.
      - title: Discount Approval Process
        summary: A structured approval process for complex discount scenarios, designed to support pricing governance without slowing the sales team unnecessarily.
ctaLabel: View More Systems
ctaUrl: "#projects"
permalink: false
---
These systems are connected by the same design philosophy: automate the process, not just the tool. The goal is not to create more buttons. The goal is to make the business logic clearer, the data more trustworthy, and the work easier to manage when real-world edge cases appear.