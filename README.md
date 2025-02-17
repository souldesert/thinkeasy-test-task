# Think Easy test task

I've used Next.js with the following libraries:

- Redux (+ Redux Toolkit) for managing state
- Redux Saga as a side effects manager (for making API calls)
- Material UI as an UI library
- Orval as an API client generator
- Toastify for notifications
- React Virtuoso for list virtualization
- Typescript
- ESLint
- Prettier

## Functionality

- Ability to view all posts (list is virtualized for better performance)
- Create a post (after login or signup)
- Notifications on success / errors (API error handling)
- View posts of a specific user
- Search posts (done on frontend, since given endpoints do not support that kind of filtration)
- Authorization (login and signup) and token update

Unfortunately, I haven't had time to implement tests for an app – however, I would start with e2e tests covering main scenarios (displaying/creating posts, authorization)

## Getting Started

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

App is deployed on Vercel: https://thinkeasy-test-task.vercel.app/
