# ScholarAI - Senior Scientific Research Assistant

ScholarAI is a high-accuracy Research QnA system designed for PhD-level scientific inquiry. It provides deep technical analysis, automated paper compression, and verified citation extraction.

## 🚀 Core Capabilities

- **Intelligent PDF Processing**: Automated text extraction and structural analysis of complex scientific papers.
- **Deep Research QnA**: Context-aware answering engine restricted to the provided literature to prevent hallucination.
- **Automated Summarization**: Extracts Abstract, Methodology, and Key Findings without losing technical nuance.
- **Citation Verification**: Accurate tracking of authors, DOI, and journal references.
- **Cross-Paper Analysis**: Identifies research gaps and methodological contradictions.

## 🛠️ Technology Stack

- **Frontend**: React (Vite) + Framer Motion + Lucide Icons
- **PDF Engine**: PDF.js for client-side technical extraction
- **Logic**: PhD-Assistant Persona Prompting & Local RAG Pipeline
- **Styling**: Vanilla CSS with Academic Aesthetics (Dark Mode, Glassmorphism)

## 📖 How it Works

1. **Ingest**: Upload a PDF or TXT research paper.
2. **Compress**: The system analyzes key sections (Abstract, Methodology, Results).
3. **Inquire**: Ask deep technical questions like *"What are the edge cases of the entropy loss function mentioned in section 3.2?"*
4. **Cite**: Get answers with numbered sources and direct paper quotes.

## 🎯 Answering Rules

- **Factuality**: Strictly uses provided literature.
- **Precision**: Professional, technical, and concise.
- **Integrity**: Never hallucinates citations. If not found, it says: *"Not found in the provided literature."*

---
*Built for the next generation of scientific exploration.*
