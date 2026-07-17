---
layout: layouts/project-detail.njk
order: 5
kicker: Infrastructure
title: BrainBridge Thought Capture & Retrieval (BB-TCR)
summary: A self-hosted, AI-assisted knowledge system that captures spoken and written ideas, transcribes and organizes them, then uses retrieval-augmented generation to surface relevant context through natural-language questions.
permalink: /projects/linux-brainbridge/
featured: true
bodyClass: project-detail-page
---

### Problem

Useful ideas often appear at inconvenient moments and disappear before they can be captured in a structured form. Traditional note-taking tools can introduce enough friction that a thought is lost before it is recorded, organized, or connected to related work.

Capturing the information is only the first challenge. At first, the limited volume of captured material made retrieval relatively straightforward. As the knowledge base expanded, however, the need for a practical way to locate relevant thoughts, connect related ideas, and retrieve context without relying on exact keywords, dates, or file locations became increasingly important.

The challenge was to create a reliable path from unfinished thought to durable knowledge, then make that knowledge available through natural-language retrieval.

### Personal Value

A personal knowledge system is only useful when capturing information is easier than losing it and retrieving information is easier than manually searching through it.

Voice notes, typed observations, reminders, tasks, troubleshooting notes, and personal reflections can easily become scattered across recordings, documents, and chat threads. Even when that material is preserved, it can remain functionally invisible if it cannot be located later.

BB-TCR creates a consistent intake and retrieval process that turns fragmented thoughts into an organized personal knowledge base. Captured information can be searched, summarized, connected to earlier ideas, and brought into new conversations through retrieval-augmented generation.

### Approach

BB-TCR was designed as a modular thought-capture and knowledge-retrieval pipeline focused on fast input, automatic processing, and conversational access, with an impetus on being cloud independent.

The workflow follows seven stages:

**Capture → Transcribe → Clean → Store → Index → Retrieve → Generate**

Each stage has a defined responsibility:

- **Capture** accepts spoken or written input.
- **Transcribe** converts recorded audio into text.
- **Clean** prepares transcripts for storage and retrieval.
- **Store** preserves complete thoughts, metadata, summaries, and tags.
- **Index** creates searchable chunks and vector embeddings.
- **Retrieve** identifies the most relevant stored context for a question.
- **Generate** uses a local language model to produce an answer grounded in the retrieved material.

This modular structure allows transcription, cleanup, storage, indexing, retrieval, and generation components to be maintained or improved independently. It also makes failures easier to isolate and reduces the likelihood that changes to one stage will disrupt the complete workflow.

The project was evaluated using practical criteria: how quickly a thought could be captured, whether it could be found later, whether related ideas could be connected, and whether the system could answer questions using the user’s own accumulated knowledge.

### Solution

BrainBridge is a fully local thought-capture, retrieval, and conversational knowledge system that converts spoken and written ideas into structured, searchable context.

At a high level, it includes:

- **Low-friction capture:** A phone-based workflow supports rapid voice capture and automatically begins downstream processing when a recording is completed.

- **Speech-to-text processing:** Whisper converts audio into text, followed by cleanup routines that normalize transcripts and prepare them for storage, indexing, and retrieval.

- **Structured knowledge storage:** Complete captures, metadata, summaries, tags, timestamps, and source references are stored in SQLite for organized access and long-term maintenance.

- **Semantic indexing:** Transcript segments are divided into searchable chunks and indexed using locally generated vector embeddings, enabling concept-based retrieval in addition to exact keyword matching.

- **Retrieval-augmented generation:** When a question is submitted, the system retrieves relevant transcript segments and supplies them as context to a locally hosted language model. The resulting response is grounded in previously captured material rather than relying only on the model’s general knowledge.

- **Hybrid retrieval routing:** Queries can be handled using semantic retrieval, structured filters, time-based searches, tag matching, or combined retrieval strategies depending on the question being asked.

- **Time-aware retrieval:** Questions can be constrained to specific dates or time periods, supporting prompts such as “What did I capture today?” or “What was I thinking about this project last week?”

- **Tag and metadata retrieval:** Generated tags and structured metadata provide an additional retrieval path for locating related captures across different topics and periods.

- **Local AI enrichment:** A locally hosted language model creates summaries, tags, and other metadata that make raw captures easier to browse, retrieve, and reuse.

- **Conversational query layer:** A natural-language interface allows users to ask questions across accumulated thoughts without needing to know where the original recording or transcript was stored.

- **Source-aware responses:** Retrieved context can be associated with its original capture, timestamp, and source record, making it easier to review the material behind a generated response.

- **Modular processing pipeline:** Independent capture, transcription, cleanup, ingestion, indexing, retrieval, and generation components support incremental improvement and easier troubleshooting.

- **Private-by-design operation:** Audio, transcripts, metadata, embeddings, retrieval context, and model processing remain within the self-hosted environment.

### Technologies

- Linux
- Python
- Shell scripting
- Whisper
- SQLite
- Chroma
- Ollama
- Local language models
- Vector embeddings
- Retrieval-augmented generation
- Semantic search
- Hybrid retrieval
- File-system automation
- REST services
- Mobile capture workflows

### What it demonstrates

BrainBridge demonstrates the ability to design automation around real human behavior rather than requiring users to adapt to a rigid productivity system.

It combines local infrastructure, speech processing, structured storage, vector indexing, semantic retrieval, and language-model generation into a cohesive personal knowledge platform. The retrieval-augmented generation layer allows the system to move beyond storing notes and begin answering questions using relevant context from the user’s own captured thoughts.

The project also reflects an incremental engineering approach: beginning with a functional capture workflow, then expanding through transcription cleanup, metadata generation, semantic indexing, hybrid retrieval, source-aware context assembly, and conversational response generation.

Most importantly, BrainBridge connects fleeting input with durable, retrievable knowledge while preserving privacy and minimizing both capture and recall friction.