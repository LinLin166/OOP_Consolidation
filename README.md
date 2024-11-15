# OOP_Consolidation

## Project Structure

- **`src/`**:
  - `employee/`
    - `employee.ts`
    - `manager.ts`
    - `developer.ts`
  - `animal/`
    - `animal.ts`
    - `cat.ts`
    - `dog.ts`
  - `main.ts` – The main file to test the functionality of the classes.
- **`tsconfig.json`**

## Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js]
- [TypeScript]

## Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/LinLin166/OOP_Consolidation.git
   cd OOP_Consolidation
   ```

2. **Install dependencies**:

- Install TS globally: npm install -g typescript

3. **Install Node.js dependencies**:

- npm install

## Running the project:

-- Compile TS --

1. **Compile TypeScript**:
   ```bash
   tsc
   ```
2. **Run the compiled TS**:
   ```bash
   node src/main.js
   ```

-- Run TS directly: --

1. **Install TS**:
   ```bash
   npm install -g ts-node #Global installation
   npm install --save-dev ts-node #Locally
   ```
2. **Run the project**:
   ```bash
   ts-node src/main.ts
   ```

## Example Output:

Tien Tran, Age: 35
Linh, Age: 23, Salary: $80000
Tien Tran is managing the Manager department.
Linh is coding in Typescript.
Manager's department: Manager
Tien Tran is managing the Manager department with a salary of $90000.
Developer's programming language: Typescript

### Key sections of the README:

- **Prerequisites**: Lists the tools required (Node.js, TypeScript).
- **Installation**: Guides on cloning the repository and installing dependencies.
- **Running the Project**: Explains how to compile TypeScript and run the project either through `tsc` or `ts-node`.
- **Example Output**: Shows what users can expect when they run the project.
