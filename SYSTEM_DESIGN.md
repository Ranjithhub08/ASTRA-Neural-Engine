# ScholarAI System Architecture

```mermaid
graph TD
    User((Researcher)) -->|Upload PDF| Frontend[React UI]
    Frontend -->|Buffer| PDFS[PDF.js Service]
    PDFS -->|Raw Text| RP[RAG Pipeline]
    RP -->|Chunks| Embed[Context Window]
    
    User -->|Question| Chat[Chat Interface]
    Chat -->|Query| Search[Semantic Search]
    Search -->|Relevant Chunks| LLM[PhD-Level AI Assistant]
    Embed --> Search
    
    LLM -->|Fact-Checked Answer| User
    LLM -->|Citations| User
    
    subgraph "Local Engine"
        PDFS
        RP
        Embed
        Search
    end
```

## Data Flow
1. **PDF Parsing**: Client-side extraction ensures data privacy.
2. **Contextualization**: Text is segmented by headers (Abstract, Intro, etc.).
3. **Retrieval**: Questions trigger a search through the active context.
4. **PhD Synthesis**: The AI synthesizes the answer using the "Research Assistant" persona.
