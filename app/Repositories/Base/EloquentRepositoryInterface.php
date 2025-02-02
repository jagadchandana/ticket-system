<?php

namespace App\Repositories\Base;

use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Pagination\LengthAwarePaginator;

interface EloquentRepositoryInterface
{
    /**
     * Method paginate
     *
     * @param  int  $number  [number of records per page]
     */
    public function paginate(int $number);

    /**
     * Find model by id.
     */
    public function findById(
        int $modelId,
        array $columns = ['*'],
        array $relations = [],
        array $appends = []
    ): ?Model;

    /**
     * Find model by id.
     *
     * @param  array  $modelId
     * @param  array  $appends
     */
    public function findByColumn(
        array $paramsAnddData,
        array $columns = ['*'],
        array $relations = []
    ): ?Model;

    /**
     * Find model by existsByColumn.
     *
     * @param  array  $modelId
     */
    public function existsByColumn(
        array $paramsAnddData,
        array $columns = ['*']
    ): ?bool;



    /**
     * Create a model.
     */
    public function create(array $payload): ?Model;


    /**
     * Update existing model.
     */
    public function update(int $modelId, array $payload): bool;


    /**
     * Delete model by id.
     */
    public function deleteById(int $modelId): bool;

}
