# Contributing Guide

This document provides detailed instructions for contributing to our project, including our Git Flow workflow, code standards, and pull request process.

## Table of Contents

- [Git Flow Workflow](#git-flow-workflow)
  - [Using git-flow CLI](#using-git-flow-cli)
  - [Using Standard Git Commands](#using-standard-git-commands)
- [Development Process](#development-process)
- [Code Standards](#code-standards)
- [Pull Request Process](#pull-request-process)
- [Code Review Guidelines](#code-review-guidelines)
- [Testing Requirements](#testing-requirements)
- [Documentation](#documentation)

## Git Flow Workflow

We follow the Git Flow branching model for managing our codebase. This provides a structured approach to development that enables parallel work and organized releases.

### Branch Structure

- `main` - Production code (stable)
- `develop` - Integration branch for features (pre-release)
- `feature/*` - New features
- `release/*` - Preparing for a release
- `hotfix/*` - Urgent fixes for production
- `bugfix/*` - Non-urgent bug fixes

### Using git-flow CLI

#### Installation

```bash
# macOS
brew install git-flow

# Linux
apt-get install git-flow

# Windows (using Git for Windows)
# Git Flow is included in Git for Windows

or

# Windows (via Chocolatey)
choco install gitflow-winhelpers
```

#### Initialization

Initialize git-flow in your local repository:

```bash
git flow init
```
```bash
git-flow init
```

Use the following settings when prompted:
- Production branch: `main`
- Development branch: `develop`
- Feature prefix: `feature/`
- Release prefix: `release/`
- Hotfix prefix: `hotfix/`
- Support prefix: `support/`
- Version tag prefix: `v`

#### Feature Development

```bash
# Start a new feature
git flow feature start authentication

# Work on the feature (commit changes)
git add .
git commit -m "feat: Implement feature login component"

# Publish feature to remote (optional)
git flow feature publish authentication

# Finish feature (merge to develop)
git flow feature finish authentication
```

#### Bugfix Development

```bash
# Start a bugfix
git flow bugfix start server-error

# Work on the bugfix (commit changes)
git add .
git commit -m "fix: Fix issue with posting data to server"

# Publish bugfix to remote (optional)
git flow bugfix publish server-error

# Finish bugfix (merge to develop)
git flow bugfix finish server-error
```

#### Preparing a Release

```bash
# Start a release
git flow release start 1.0.0

# Make final adjustments (version numbers, etc.)
git add .
git commit -m "chore: Bump version to 1.0.0"

# Publish release to remote (optional)
git flow release publish 1.0.0

# Finish release (merge to main and develop, tag)
git flow release finish 1.0.0
git push origin develop
git push origin main
git push --tags
```

#### Hotfix for Production

```bash
# Start a hotfix
git flow hotfix start 1.0.1

# Fix the critical issue
git add .
git commit -m "hotfix: Fix critical issue with the x-api-key"

# Finish hotfix (merge to main and develop, tag)
git flow hotfix finish 1.0.1
git push origin develop
git push origin main
git push --tags
```

### Using Standard Git Commands

If you prefer not to use the git-flow CLI, here are the equivalent standard Git commands:

#### Feature Development

```bash
# Start a new feature
git checkout develop
git pull
git checkout -b feature/authentication

# Work on the feature (commit changes)
git add .
git commit -m "feat: Implement login page"

# Push to remote
git push -u origin feature/authentication

# Create a PR to develop (through GitHub/GitLab/etc.)
# After PR is approved and merged:

git checkout develop
git pull
```

#### Bugfix Development

```bash
# Start a bugfix
git checkout develop
git pull
git checkout -b bugfix/server-error

# Work on the bugfix (commit changes)
git add .
git commit -m "fix: Fix issue with server error"

# Push to remote
git push -u origin bugfix/server-error

# Create a PR to develop (through GitHub/GitLab/etc.)
# After PR is approved and merged:

git checkout develop
git pull
```

#### Preparing a Release

```bash
# Start a release
git checkout develop
git pull
git checkout -b release/1.0.0

# Make final adjustments (version numbers, etc.)
git add .
git commit -m "chore: Bump version to 1.0.0"

# Push to remote
git push -u origin release/1.0.0

# Create a PR to main (through GitHub/GitLab/etc.)
# After PR is approved and merged:

git checkout main
git pull
git tag -a v1.0.0 -m "Version 1.0.0"
git push origin v1.0.0

git checkout develop
git pull
git merge main
git push origin develop
```

#### Hotfix for Production

```bash
# Start a hotfix
git checkout main
git pull
git checkout -b hotfix/1.0.1

# Fix the critical issue
git add .
git commit -m "hotfix: Fix critical issue with api-key"

# Push to remote
git push -u origin hotfix/1.0.1

# Create a PR to main (through GitHub/GitLab/etc.)
# After PR is approved and merged:

git checkout main
git pull
git tag -a v1.0.1 -m "Version 1.0.1"
git push origin v1.0.1

git checkout develop
git pull
git merge main
git push origin develop
```

## Development Process

1. **Pick an Issue**: Start by selecting an issue from the project board or creating a new one.
2. **Create a Branch**: Create a new branch using the appropriate git-flow command or naming convention.
3. **Develop**: Make your changes, following our code standards.
4. **Test**: Ensure your changes pass all tests.
5. **Document**: Update documentation as necessary.
6. **Create Pull Request**: Submit a PR to the appropriate target branch.
7. **Code Review**: Address feedback from reviewers.
8. **Merge**: Once approved, your PR will be merged.

## Code Standards

### JavaScript/React

- Use functional components with hooks
- Follow ESLint rules defined in `eslint.config.js`
- Use proper prop types
- Implement error boundaries where appropriate
- Prefer destructuring for props and state
- Use async/await for asynchronous operations
- Format code using Prettier

### CSS/Tailwind

- Follow the utility-first approach with Tailwind CSS
- Create custom components for repeated patterns
- Use CSS variables for theme values
- Ensure responsive design works on all target devices

### Commit Message Format

We follow the [Conventional Commits](https://www.conventionalcommits.org/) standard:

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

Types:
- `feat`: A new feature
- `fix`: A bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, etc.)
- `refactor`: Code changes that neither fix bugs nor add features
- `perf`: Performance improvements
- `test`: Adding or fixing tests
- `chore`: Changes to the build process or auxiliary tools

Examples:
```
feat(auth): Add password reset functionality
fix(dashboard): Fix chart rendering issue
docs: Update API documentation
```

## Pull Request Process

1. **Create a PR**: Push your branch and create a PR on GitHub/GitLab.
2. **Fill in the Template**: Complete the PR template with all required information.
3. **Request Reviews**: Assign appropriate reviewers to your PR.
4. **Address Feedback**: Make requested changes and push additional commits.
5. **Approval**: Once approved, your PR will be merged by a maintainer.

### PR Checklist

- [ ] Code follows project standards
- [ ] Tests have been added/updated
- [ ] Documentation has been updated
- [ ] Commit messages follow our standards
- [ ] Branch is up to date with the target branch
- [ ] Changes have been tested locally

## Code Review Guidelines

### For Authors

- Keep PRs small and focused on a single issue
- Provide context in the PR description
- Respond to feedback promptly
- Be open to suggestions

### For Reviewers

- Be constructive and respectful
- Focus on the code, not the author
- Consider the purpose and context of the PR
- Provide specific, actionable feedback
- Approve only when all concerns have been addressed

## Testing Requirements

- All new features must include tests
- All bug fixes must include regression tests
- Run the test suite locally before pushing
- Maintain or improve code coverage

## Documentation

- Update the README.md when adding new features
- Add detailed documentation to the `docs` directory
- Update API documentation when changing endpoints
- Document complex logic with clear comments

---

Thank you for contributing to our project! If you have any questions, please reach out to the project maintainers.