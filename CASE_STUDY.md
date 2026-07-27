I Business Platform
Overview

AI Business Platform is a modern multi-tenant SaaS platform that combines internal business operations and AI into a single system. Instead of integrating AI as an afterthought, the platform was designed around it from day one—bringing together ticket management, HR, inventory, document search, workflow automation, and an AI assistant under one architecture.

The project explores how enterprise software can remain scalable while supporting multiple organizations, strict security boundaries, and AI-powered workflows.

Role

Full-Stack Software Engineer

System Architecture
Backend Development
Frontend Development
AI Integration
Database Design
DevOps

Timeline

October 2025 – Present

The Challenge

Most internal business software is fragmented.

Companies typically purchase separate systems for HR, inventory, support tickets, automation, and AI assistants. These products often duplicate user management, permissions, and data while making integrations increasingly difficult.

The goal was to design a platform where every module shared the same architectural foundation instead of being connected through plugins and third-party middleware.

This required solving problems such as:

Multi-tenancy
Role-based authorization
AI tool calling
Retrieval-Augmented Generation (RAG)
Workflow automation
Audit logging
Shared APIs
Extensibility
Architecture
Backend

Laravel 12

PHP 8.2

PostgreSQL

The backend follows Clean Architecture, separating business logic from framework code.

HTTP Layer
        ↓
Application Layer
        ↓
Domain Layer
        ↑
Infrastructure Layer

Key principles:

Controllers contain no business logic
Services depend on repository interfaces
Domain models remain framework independent
Infrastructure implements abstractions
Business logic is unit testable without a database

This architecture made it possible to replace infrastructure implementations without affecting application logic.

Frontend

React 18

TypeScript

Vite

TanStack Query

Zustand

The frontend strictly separates:

server state
UI state
authentication
local preferences

No duplicated server state exists inside client stores, reducing synchronization bugs and unnecessary re-renders.

Multi-Tenancy

Every request executes inside a tenant context.

Repositories automatically scope queries using tenant identifiers, ensuring organizations never access each other's data.

An architectural audit later identified duplicated tenant filtering across several repositories, highlighting an opportunity to centralize the implementation through shared abstractions.

Technical Deep Dive
Building a Provider-Agnostic AI Layer

One of the primary goals was to ensure the AI assistant could switch providers without changing application code.

Rather than tightly coupling the system to OpenAI, every provider communicates through a shared interface.

The same implementation has been validated against:

OpenAI
OpenRouter
Ollama
Gemini

Changing providers only requires updating configuration values.

Debugging Gemini Tool Calling

One of the most interesting engineering challenges involved Gemini's OpenAI-compatible endpoint.

Although basic conversations worked correctly, every multi-turn tool-calling conversation failed after the first function execution.

The returned error was:

Function call is missing a thought_signature in functionCall parts

Instead of relying on community discussions, I investigated the protocol directly.

The process included:

inspecting raw API responses with cURL
comparing streamed and non-streamed payloads
identifying undocumented response fields
reproducing the issue outside the application
replaying requests manually
verifying the fix before modifying production code

The investigation revealed an undocumented field:

tool_calls[].extra_content.google.thought_signature

The platform now persists this metadata alongside conversation history, allowing Gemini conversations involving tool calls to continue successfully across multiple requests.

This experience reinforced an engineering workflow I now apply consistently:

Reproduce → Isolate → Verify → Generalize

Additional Engineering Work

The project also uncovered a race condition involving Radix Dialog animations.

Rather than patching every modal individually, the issue was traced to a shared dialog component and fixed once for the entire application, preventing similar bugs across all create/edit workflows.

Technologies

Frontend

React
TypeScript
Vite
TanStack Query
Zustand
Tailwind CSS

Backend

Laravel 12
PHP
PostgreSQL
Sanctum

Architecture

Clean Architecture
Repository Pattern
Dependency Injection
RBAC
Multi-Tenancy
REST APIs

AI

OpenAI
Gemini
OpenRouter
Ollama
Tool Calling
RAG
SSE Streaming
What I Learned

This project significantly improved my understanding of:

enterprise application architecture
scalable backend design
AI infrastructure
provider abstraction
debugging undocumented APIs
multi-tenant SaaS development
software architecture trade-offs
Predictive Inventory System
Overview

The Predictive Inventory System is a full-stack inventory and sales platform developed for Steven Hydrotech Exponent Water Treatment and Supply Services.

The system manages the complete operational workflow—from purchasing inventory to sales, forecasting future demand, and automatically recommending replenishment quantities.

Rather than focusing only on CRUD operations, the project emphasizes data integrity, auditability, and resilience in environments with unreliable internet connectivity.

Role

Full-Stack Software Engineer

System Design
Backend Development
Frontend Development
Database Architecture
UX Improvements
The Problem

Traditional inventory systems frequently suffer from:

inaccurate stock balances
duplicated transactions
poor audit trails
unreliable offline behavior
misleading demand forecasts

The project was designed around preventing these failures instead of treating them as exceptions.

Core Features
Inventory Management
Product Catalog
Supplier Management
Purchase Orders
Receiving
Point of Sale
Stock Monitoring
Demand Forecasting
EOQ Reorder Recommendations
Reporting
Audit Trail
Offline Synchronization
Role-Based Access Control
Architecture

Backend

Laravel 12

MySQL

Frontend

React 19

TypeScript

Vite

The frontend and backend are maintained as separate applications, allowing independent deployment and testing.

Key Engineering Decisions
Inventory Ledger

Inventory quantities are never edited directly.

Every stock change generates an immutable movement record.

Current inventory is calculated from historical transactions rather than stored as a mutable value.

This provides:

complete audit history
easier debugging
improved accounting accuracy
Offline-First Design

Field staff may lose internet connectivity while recording transactions.

The application stores pending operations locally using IndexedDB and synchronizes them once connectivity returns.

Conflict detection occurs on the server rather than silently overwriting records.

Idempotent Operations

Critical endpoints such as:

POS checkout
Receiving
Synchronization

use idempotency keys to ensure repeated requests never duplicate inventory movements.

Forecasting

Demand forecasting uses Simple Moving Average (SMA).

Instead of producing misleading predictions when insufficient history exists, the system explicitly reports that additional historical data is required.

This avoids false confidence while maintaining transparency.

Authorization

Permissions are enforced through policy classes rather than scattered role checks.

This centralizes authorization logic and makes permissions easier to test and maintain.

Technology Stack

Frontend

React 19
TypeScript
Vite
TanStack Query
Zustand
Tailwind CSS
React Hook Form
Zod
Dexie
IndexedDB

Backend

Laravel 12
PHP
MySQL
Sanctum
Laravel Excel
DomPDF
What I Learned

Through this project I gained practical experience with:

inventory domain modeling
offline-first architecture
synchronization strategies
forecasting algorithms
idempotent API design
audit logging
enterprise RBAC
scalable full-stack application architecture
Why this version is stronger

If you're targeting Software Engineer roles (which I think is the right positioning based on your portfolio and career goals), I'd make one more improvement.

Treat these as engineering stories, not project summaries.

Each case study should consistently follow this structure:

Overview (30–50 words)
Problem
Goals
Architecture
Major Technical Challenges
Engineering Decisions
Results
Lessons Learned
Tech Stack