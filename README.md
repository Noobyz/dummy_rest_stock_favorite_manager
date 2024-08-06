# Favorite Stocks Microservice

This microservice provides a simple API for managing users' favorite stocks. It allows clients to add, delete, and view favorite stocks. This README outlines the communication contract, including instructions on how to request and receive data from the service.

## Table of Contents

- [Favorite Stocks Microservice](#favorite-stocks-microservice)
  - [Table of Contents](#table-of-contents)
  - [API Endpoints](#api-endpoints)
    - [1. Add Favorite Stock](#1-add-favorite-stock)
    - [2. Delete Favorite Stock](#2-delete-favorite-stock)
    - [3. View Favorite Stocks](#3-view-favorite-stocks)
  - [Example Usage](#example-usage)
    - [Adding a Favorite Stock](#adding-a-favorite-stock)
      - [Request](#request)
      - [Response](#response)
    - [Deleting a Favorite Stock](#deleting-a-favorite-stock)
      - [Request](#request-1)
      - [Response](#response-1)
    - [Viewing Favorite Stocks](#viewing-favorite-stocks)
      - [Request](#request-2)
      - [Response](#response-2)
  - [Response Format](#response-format)
  - [Setup Instructions](#setup-instructions)
  - [Sequence Diagram](#sequence-diagram)

## API Endpoints

### 1. Add Favorite Stock

- **Endpoint**: `/favorites`
- **Method**: `POST`
- **Description**: Adds a favorite stock for a user.
- **Request Body**:
  - `username`: The username of the user (string).
  - `ticker`: The stock ticker to add (string).

### 2. Delete Favorite Stock

- **Endpoint**: `/favorites`
- **Method**: `DELETE`
- **Description**: Deletes a favorite stock from a user's list.
- **Request Body**:
  - `username`: The username of the user (string).
  - `ticker`: The stock ticker to delete (string).

### 3. View Favorite Stocks

- **Endpoint**: `/favorites`
- **Method**: `GET`
- **Description**: Retrieves a list of a user's favorite stocks along with metadata.
- **Request Params**:
  - `username`: The username of the user (string).

## Example Usage

### Adding a Favorite Stock

#### Request

```bash
curl -X POST http://localhost:3000/favorites \
  -H "Content-Type: application/json" \
  -d '{"username": "drew", "ticker": "AAPL"}'
```

#### Response

- **Status**: `201 Created`
- **Body**: No content.

### Deleting a Favorite Stock

#### Request

```bash
curl -X DELETE http://localhost:3000/favorites \
  -H "Content-Type: application/json" \
  -d '{"username": "drew", "ticker": "AAPL"}'
```

#### Response

- **Status**: `204 No Content`
- **Body**: No content.

### Viewing Favorite Stocks

#### Request

```bash
curl -X GET http://localhost:3000/favorites \
  -H "Content-Type: application/json" \
  -d '{"username": "drew"}'
```

#### Response

- **Status**: `200 OK`
- **Body**:
  ```json
  [
    {
      "ticker": "AAPL",
      "metadata": {
        "name": "Apple Inc.",
        "price": 150,
        "change": -0.5
      }
    },
    {
      "ticker": "TSLA",
      "metadata": {
        "name": "Tesla, Inc.",
        "price": 700,
        "change": 2.3
      }
    }
  ]
  ```

## Response Format

- All responses from the API will include a status code indicating the result of the request. The body of the response will vary based on the endpoint and the nature of the request.

- **Success Status Codes**:

  - `201 Created`: The resource was successfully created (e.g., adding a favorite stock).
  - `204 No Content`: The request was successful, but there is no content to send back (e.g., deleting a favorite stock).
  - `200 OK`: The request was successful, and the response body contains the requested data (e.g., viewing favorite stocks).

- **Error Status Codes**:
  - `400 Bad Request`: The request was invalid (e.g., missing required fields or invalid stock ticker).

## Setup Instructions

1. **Clone the Repository**:

```bash
git clone <repository-url>
cd <repository-directory>
```

2. **Setup Node (on Mac)**:

```bash
brew install nvm
nvm install 18.16.0
nvm use 18.16.0
```

3. **Install Dependencies**:

```bash
npm install
```

4. **Start the Server**:

```bash
npm start
```

5. **Server Running**:
   The server will be running on `http://localhost:3000`.

## Sequence Diagram
