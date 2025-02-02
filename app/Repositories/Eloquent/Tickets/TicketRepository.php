<?php

namespace App\Repositories\Eloquent\Tickets;

use App\Models\Ticket;
use App\Repositories\Base\BaseRepository;

class TicketRepository extends BaseRepository implements TicketInterface
{
    /**
     * @var Ticket
     */
    protected $model;

    /**
     * BaseRepository constructor.
     */
    public function __construct(Ticket $model)
    {
        $this->model = $model;
    }

    /**
     * @param array $columns
     * @param array $filters
     *
     * @return [type]
     */
    public function search(array $columns, array $filters)
    {
        return $this->model->search($columns, $filters);
    }
}
