<?php

namespace App\Repositories\Eloquent\Tickets;

use App\Repositories\Base\EloquentRepositoryInterface;


interface TicketInterface extends EloquentRepositoryInterface
{
    /**
     * @param array $columns
     * @param array $filters
     *
     * @return [type]
     */
    public function search(array $columns, array $filters);
}
