# VectorShift Pipeline Builder

A visual AI pipeline builder built as part of the VectorShift frontend technical assessment. Allows users to drag, drop, and connect nodes to construct pipelines, with real-time analysis via a FastAPI backend.

## Project Structure

```
vectorshift-pipeline-builder/
├── frontend/     # React app — pipeline canvas UI
└── backend/      # FastAPI — pipeline analysis API
```

## Features

- **Node Abstraction** — reusable BaseNode component; new nodes require only a configuration, not repeated code
- **9 Node Types** — Input, Output, LLM, Text, API, Filter, Note, Transform, Timer
- **Dynamic Text Node** — auto-resizes as you type; detects `{{variable}}` syntax and creates handles dynamically
- **Pipeline Analysis** — submit pipeline to backend for node/edge count and DAG validation
- **Clean Dark UI** — professional dark theme inspired by VectorShift's design

---

## Getting Started

### Frontend

```bash
cd frontend
npm install
npm start
```

Runs at `http://localhost:3000`

### Backend

```bash
cd backend
pip install fastapi uvicorn pydantic
uvicorn main:app --reload
```

Runs at `http://localhost:8000`

---

## How to Use

1. Drag nodes from the toolbar onto the canvas
2. Connect nodes by dragging from one handle to another
3. In the Text node, type `{{variableName}}` to create dynamic input handles
4. Click **Run Pipeline** to analyze the pipeline
5. An alert shows the number of nodes, edges, and whether the pipeline is a DAG

---

## Part Breakdown

### Part 1 — Node Abstraction
All nodes share a common `BaseNode` component (`frontend/src/nodes/BaseNode.js`). Each node passes its own configuration — title, fields, and handles — as props. Adding a new node takes under 15 lines.

### Part 2 — Styling
Dark theme with a navy/slate color palette. Styled using inline CSS-in-JS following the existing codebase patterns. No additional UI libraries added to keep dependencies minimal.

### Part 3 — Text Node Logic
- Auto-resizes height on input using `scrollHeight`
- Detects `{{variableName}}` patterns using regex on every keystroke
- Dynamically renders a React Flow Handle for each unique variable found

### Part 4 — Backend Integration
- Frontend POSTs nodes and edges to `/pipelines/parse`
- Backend counts nodes and edges
- DAG detection uses DFS with three node states (unvisited, visiting, done) — if a node in the visiting state is reached again, a cycle exists
- Response displayed as an alert with nodes, edges, and is_dag

---

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React, React Flow, Zustand |
| Backend | Python, FastAPI, Pydantic |
| Styling | Inline CSS-in-JS |

---

## Author

**Om Tiwari**  
[omtiwari.tech](https://omtiwari.tech)