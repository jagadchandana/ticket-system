<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;

class Ticket extends Model
{
    use  Notifiable;

    protected $fillable = [
        'name',
        'reference_number',
        'status',
        'phone_number',
        'problem_description',
        'email',
        'reply',
        'user_id',
    ];

    /**
     * get agent with ticket
     */
    public function user()
    {
        return $this->belongsTo(User::class);
    }

    /**
     * @param array $columns
     * @param array $filters
     *
     * @return [type]
     */
    public function search(array $columns, array $filters)
    {
        $query = $this->select($columns);

        //filters
        if (isset($filters['searchValue'])) {
            $query = $query->where(function ($query) use ($filters) {
                $query->where('name', 'like', '%' . $filters['searchValue'] . '%')
                    ->orWhere('reference_number', 'like', '%' . $filters['searchValue'] . '%');
            });
        }
        if (isset($filters['sortColumn'], $filters['sortDirection'])) {
            return $query->orderBy($filters['sortColumn'], $filters['sortDirection'])
                ->paginate($filters['perPage'], $filters['page']);
        }

        return $query->get();
    }
}
