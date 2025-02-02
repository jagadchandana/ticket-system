<?php

use App\Http\Controllers\Agent\DashboardController;
use App\Http\Controllers\Guest\HomeController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;


Route::prefix('/')->controller(HomeController::class)->name('ticket.')->group(function () {
    Route::get('/', 'index')->name('index');
    Route::post('/open', 'openTicket')->name('open');
    Route::post('/check', 'checkTicket')->name('check');
    Route::get('/{ref}/view', 'viewTicket')->name('view');
});


Route::prefix('/')->controller(DashboardController::class)->middleware(['auth', 'verified'])->group(function () {
    Route::get('/dashboard', 'index')->name('dashboard');
    Route::get('/{id}/edit', 'edit')->name('ticket.edit');
    Route::post('/{id}/update', 'update')->name('ticket.update');
    Route::delete('/{id}/delete', 'destroy')->name('ticket.delete');
});


Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
