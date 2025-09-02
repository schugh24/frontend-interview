<!-- Project Comments Go Here -->
frontend-interview
Working code branch: master

A small React app that lists a user’s applications from http://localhost:3001/api/applications with server-driven pagination via the HTTP Link header. Each Load more click appends exactly 5 new applications. UI aligns with the provided Figma (company, name, email, loan amount, application/expiry dates).

What’s Implemented-

Applications list with append-only pagination (5 per click).

Card layout matching Figma: Company / Name / Email / Loan Amount / Application Date / Expiry Date.

Loading / error / empty states.

Accessible controls: aria-live for dynamic counts, aria-busy on button/list, proper disabled states.

Small, focused tests (Vitest) for pagination & header parsing.
