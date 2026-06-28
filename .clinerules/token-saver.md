# Token Saver



Always minimize token usage.



Never scan the entire repository.



Only read files directly related to the user's request.



Never read:

- node_modules

- dist

- build

- coverage

- .git

- .next

- public/assets



Never inspect:

- images

- videos

- fonts



Before reading more than 3 files, ask for permission.



When fixing bugs:

- Run build/lint first.

-- Read  files mentioned in the terminal errors.

- Read only files mentioned in the errors.



When improving UI:

- Work on one page/component at a time.

- Preserve existing functionality.

- Do not redesign unrelated pages.



Never perform project-wide refactors unless explicitly requested.
