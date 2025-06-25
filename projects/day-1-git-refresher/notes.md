# Day 1 – Git Refresher Notes

Today I practiced:

- Initializing a Git repository
- Creating and working in a feature branch
- Writing clear commit messages
- Pushing to GitHub
- Creating and merging pull requests

This workflow matches how real software teams collaborate and helps maintain a clean Git history.


## Github Workflow
1. `git checkout main`
2. `git pull origin main`
3. `git checkout -b feature-branch-name`
4. Do the work that you need
5. `git add .`
6. `git commit -m "commit message"`
7. `git push -u origin feature-branch`
8. Go to https://github.com/username/repo
9. Add title and description
10. Merge into main. 
    1.  Merge pull request -> Confirm merge
11. Cleanup code
```bash
git checkout main
git pull origin main
git branch -d feature/day-1-add-notes
git push origin --delete feature/day-1-add-notes
```

## Daily Git Pattern (Repeat this every day)
1. `git checkout main`
2. `git pull origin main`
3. `git checkout -b feature/branch`
4. do work `git add .` -> `git commit -m "message"`
5. `git push -u origin feature/...`
6. Open PR -> merge
7. Cleanup: `git checkout main` -> `git pull` -> `git branch -d` -> delete remote 

### Summary
This workflow is one where the merging is done via github

- get most up to date main
- create a feature branch
- push the feature branch
- via github create pr
- merge feature branch
- pull merged main
- delete local feature branch
- delete repo feature branch