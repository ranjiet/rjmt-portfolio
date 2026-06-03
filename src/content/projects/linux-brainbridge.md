---
order: 5
kicker: Infrastructure
title: "Automating Thought Capture: BB-TC"
summary: A self-hosted AI-assisted thought capture system that catches scattered ideas before they disappear, then transcribes, cleans, stores, indexes, and makes them searchable for later use.
permalink: /projects/linux-brainbridge/
featured: true
---

### Problem

The problem was not *simply capturing my thoughts*. The problem was *capturing them before they evaporated* and turning them into something I can *act on*, *search*, and *reuse*.

Some thoughts are fully formed and easy to write down. Most are not. They show up mid-walk, mid-troubleshooting, mid-dog-dad-duty, or while I’m talking through a problem out loud. By the time a traditional note-taking tool is opened, titled, and gently negotiated with, the original thought vanishes into thin air - much akin Warden Norton's question to Fuzzy Britches in Andy Dufresne’s empty cell.

I built BrainBridge Thought Capture (BB-TC) for myself as a 100% local way to move thoughts from brain to Ms. Delta Flyer, my server, with as little friction as possible. The goal was simple: capture my thought, process it, make it queryable, and create an always-on extended brain I could search anytime.

### Why it matters

BB-TC matters because the most useful ideas are not always born at convenient times.

A personal knowledge system only works if capturing information is easier than losing it. If the process requires more than one or two clicks, it fails even before it can become useful.

The goal was to create a reliable path from raw thought to usable memory. Voice notes, typed notes, reminders, tasks, troubleshooting observations, and personal reflections all flow into the same ecosystem. Once captured, they are searchable, reusable, and available for future reflection instead of being scattered across recordings, text files, chat threads, and half-remembered brain sparks.

### How I approached it

I treated BB-TC as a personal operating system for thought capture. The goal was to make capture fast, processing automatic, and retrieval conversational. The system needed to meet me where the thought happened, whether I was at my computer, using my phone, or trying to capture an idea before it vanished into the ceiling tiles.

I designed the pipeline as a sequence of focused modules:

**Capture → Transcribe → Clean → Store → Index → Query**

Each module had a specific responsibility. That made the system easier to troubleshoot because I could isolate issues to a single stage of the pipeline instead of trying to untangle the whole thing at once. It also made the system easier to improve incrementally, since each stage could be updated without breaking the full workflow as long as the inputs and outputs stayed consistent.

Since BB-TC was a hobby and personal project, the success criteria were intentionally human: Did I capture the thought before it disappeared? Could I find it later? Could the system help me recognize patterns in my own thinking? Could it reduce the mental tax of trying to remember everything myself?

### What I built

I built BB-TC as a 100% local thought capture and retrieval pipeline that turns spoken and written ideas into an organized, searchable knowledge base. At a high level, it includes:

- **Low-friction audio capture:** I built a phone-based capture flow that lets me tap once to start recording a thought, tap again to stop, and automatically trigger the downstream processing pipeline.
    
- **Speech-to-text and transcript cleanup:** I used Whisper to convert audio into text, then built cleanup processes that normalize transcripts, improve readability, and prepare the output for storage, ingestion, and downstream use.
    
- **Structured storage and semantic search indexing:** I built a storage and indexing layer that stores captured thoughts in SQLite with generated metadata, then indexes transcript chunks in Chroma using Ollama-generated embeddings, enabling both semantic search and time-filtered retrieval.
    
- **Local AI summarization and tagging:** I integrated a locally hosted Ollama model that generates summaries and tags for ingested transcripts, helping transform raw thought capture into more organized and usable knowledge.
    
- **Natural-language retrieval foundation:** I built a query layer called “Query for Your Thoughts?” that supports date-based lookup, tag-based lookup, and semantic search, creating the foundation for questions like “what thoughts did I capture today?” or “what did I say about that project idea last week?”
    

### What it demonstrates

BB-TC demonstrates my ability to design practical automation around the way I actually think, not the way a generic productivity tool assumes I should think.

It shows how I can combine Linux server administration, shell scripting, Python, Whisper, SQLite, embeddings, Chroma, Ollama, and file-system workflows into a cohesive personal knowledge system. It also demonstrates my preference for building systems incrementally: starting with a rough but working capture flow, then layering in reliability, cleanup, metadata, semantic search, and eventually better interfaces.

Most importantly, it shows systems thinking at a very personal scale. BB-TC connects audio capture, transcription, cleanup, storage, semantic indexing, and retrieval into one pipeline designed to reduce cognitive friction. It is not just a note-taking project. It is an attempt to build a bridge between fleeting thoughts and durable memory.
