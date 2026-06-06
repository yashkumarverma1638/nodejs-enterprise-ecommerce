# Auth Service

Responsibilities:

- Registration
- Login
- JWT Authentication
- Refresh Tokens

express Web framework Create APIs, routes, middleware
cors Cross-Origin Resource Sharing Allow React frontend to call backend APIs
helmet Security headers Protect against common web vulnerabilities
dotenv Environment variables Load secrets from .env file
pino Fast logger Log application events
pino-http HTTP request logger Log API requests and responses
zod Data validation Validate request body/query params
bcrypt Password hashing Store passwords securely
jsonwebtoken JWT authentication Generate and verify login tokens

1. typescript

Compiler that converts TypeScript → JavaScript.

const name: string = "Yash";

Compile:

npx tsc

Benefits:

Type safety
Better IntelliSense
Fewer runtime bugs 2. ts-node-dev

Runs TypeScript directly and auto-restarts when files change.

Without:

tsc
node dist/server.js

With:

npx ts-node-dev src/server.ts

Benefits:

Hot reload
Faster development

Similar to:

nodemon

but for TypeScript.

Type Definitions

JavaScript libraries don't always include TypeScript types.

3. @types/node

Provides types for Node.js APIs.

Without:

process.env.PORT

TypeScript may complain.

With:

npm install -D @types/node

TypeScript understands:

process
Buffer
fs
path
http 4. @types/express

Types for Express.

import { Request, Response } from "express";

app.get("/", (req: Request, res: Response) => {}); 5. @types/bcrypt

Types for bcrypt.

await bcrypt.hash(password, 10);

TypeScript understands method signatures.

6. @types/jsonwebtoken

Types for JWT.

jwt.sign(...)
jwt.verify(...)

Provides autocomplete and type checking.

Testing Packages 7. jest

Testing framework.

Example:

test("adds numbers", () => {
expect(2 + 2).toBe(4);
});

Run:

npm test

Used in:

Unit Testing
Service Testing
Utility Testing 8. ts-jest

Allows Jest to understand TypeScript.

Without it:

Unexpected token ':'

With:

npx ts-jest config:init

Jest can run:

user.service.test.ts

directly.

9. supertest

API testing library.

Tests Express routes without Postman.

Example:

await request(app)
.get("/users")
.expect(200);

Real-world:

CI Pipeline
↓
Run API Tests
↓
Deploy 10. @types/jest

Types for:

describe()
it()
test()
expect()
beforeEach() 11. @types/supertest

Type definitions for Supertest.

request(app)

gets autocomplete.

Code Quality 12. ESLint

Finds code issues automatically.

Example:

const a = 5

ESLint:

Missing semicolon

Rules:

{
"semi": ["error", "always"]
}

Benefits:

Consistent code
Cleaner PRs
Team standards 13. Prettier

Automatically formats code.

Bad:

const x={name:"Yash"}

Prettier:

const x = { name: "Yash" };

Run:

npx prettier --write .

Benefits:

No style debates
Consistent formatting
Runtime:
express
cors
helmet
dotenv
pino
pino-http
zod
bcrypt
jsonwebtoken

Development:
typescript
ts-node-dev
@types/\*
jest
ts-jest
supertest
eslint
prettier
