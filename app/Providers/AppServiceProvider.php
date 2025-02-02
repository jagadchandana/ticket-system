<?php

namespace App\Providers;

use App\Repositories\Eloquent\Tickets\TicketInterface;
use App\Repositories\Eloquent\Tickets\TicketRepository;
use App\Repositories\Eloquent\Users\UserInterface;
use App\Repositories\Eloquent\Users\UserRepository;
use Illuminate\Support\Facades\Vite;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        $this->app->bind(UserInterface::class, UserRepository::class);
        $this->app->bind(TicketInterface::class, TicketRepository::class);
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        Vite::prefetch(concurrency: 3);
    }
}
