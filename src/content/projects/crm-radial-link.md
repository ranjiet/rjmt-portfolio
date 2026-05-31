# Zoho CRM Radial Link Automation Case Study


### Problem

The problem is not simply assigning an Account or Deal to the right person. The problem is making sure the CRM understands the geography behind the customer.

In a sales process built around territories, regions, sub-regions, and grower coverage, ownership cannot rely on tribal knowledge, memory, or someone manually assigning ZIP codes with the confidence of a stormtrooper aiming at a moving target. When territory data is inconsistent, every downstream process starts to wobble: assignment, reporting, visibility, forecasting, follow-up, and leadership confidence.


### Why it matters

Territory alignment directly affects sales ownership, pipeline visibility, customer coverage, and operational trust. If an Account, Lead, Contact, or Deal is missing the right regional context, users may not know who owns the relationship, leadership may not have clean reporting by territory, and automation may make decisions using incomplete data.

A business needs geography-driven CRM logic that can support real-world sales coverage while preserving clean, reliable data across modules.


### How I approach it

I treat territory assignment as a governed data relationship rather than a one-time field update. I design the Radial Link process so geography, ZIP code, region, sub-region, and GSM/ASM ownership can be maintained in a central reference structure and inherited by related CRM records.

Instead of forcing users to manually decide which regional values belong on each record, I use automation to look up the correct Radial Link match and copy the appropriate values into the working CRM record. I also account for incomplete data by flagging records that need cleanup when the system does not have enough information to make a confident match.


### What I built

I built a Radial Link automation framework inside Zoho CRM that connects customer geography to sales ownership and reporting. At a high level, it includes:

- **Custom Radial Link module:** A custom-built Zoho CRM module that houses geographic territory information, populated and maintained from reliable third-party data sources.
- **Territory and ownership lookup logic:** Uses ZIP code and Radial Link reference data to identify the correct region, sub-region, and ASM/GSM ownership values, reducing manual assignment decisions.
- **CRM record enrichment:** Copies matched territory and ownership data onto related CRM records, including Accounts and Deals, so customer and pipeline records stay aligned and reporting-ready.
- **Data cleanup visibility:** Flags records where geography or ZIP information is missing, making data quality issues easier to find before they affect reporting or automation.
    

### What it demonstrates

This work demonstrates my ability to translate territory management, data governance, and sales ownership rules into practical CRM automation. It shows how I use Zoho CRM to create cleaner data relationships, reduce manual decision-making, and improve confidence in reporting and operational workflows.

It also demonstrates strong systems thinking by connecting customer geography, ownership assignment, sales process consistency, and leadership visibility into one cohesive automation strategy.