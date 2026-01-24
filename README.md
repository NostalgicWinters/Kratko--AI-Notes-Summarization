# AI Text Summarizer — BART Transformer

An end-to-end AI text summarization web application built using the BART (Bidirectional and Auto-Regressive Transformer) model.
The project demonstrates how to take an NLP model from local inference to a production-style full-stack application with a backend API and frontend UI.

## Features

1) Abstractive text summarization using BART

2) Handles long-form text input

3) Backend API for model inference

4) Frontend UI for easy interaction

### Clean end-to-end flow:
User Input → API → Model → Summary → UI Output

## Tech Stack
### 🔹 Machine Learning

BART (facebook/bart-large-cnn)

Hugging Face Transformers

PyTorch

### 🔹 Backend

Python

REST API (FastAPI )

Model inference handling

### 🔹 Frontend

React Js

API integration

Responsive UI

## How It Works

1) User enters text in the frontend

2) Frontend sends the text to the backend API

### Backend:

Tokenizes input

Runs BART model inference

Generates an abstractive summary

Summary is returned and displayed in the UI
