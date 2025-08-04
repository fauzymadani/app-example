# App Example
this is an example for a web application using react as a frontend and laravel as a backend. the logic for the frontend is handled by an api with laravel.

## Project Setup
Requirements: 
- [Bun](https://bun.sh/)

```bash
curl -fsSL https://bun.sh/install | bash
```

- [php 8.3 or above](https://php.net)
- a web server (either xampp or lampp for linux)
- [composer](https://getcomposer.org/doc/00-intro.md)

frontend setup:
```bash
git clone https://github.com/fauzymadani/app-example.git
cd app-example
cd frontend
bun install
bun run build
bun run dev # run the development server
```
after running the development server, go back to the root directory.

bakcend setup:
```bash
cd backend
composer update # in case if there's an outdated dependencies
composer install
cp .env.example .env
php artisan key:generate
php artisan install:api
php artisan migrate
php artisan serve
```
