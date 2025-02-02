<?php

namespace App\Http\Controllers\Agent;

use App\Http\Controllers\Controller;
use App\Http\Requests\Ticket\TicketReplyRequest;
use App\Notifications\TicketReplyNotification;
use App\Repositories\Eloquent\Tickets\TicketInterface;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DashboardController extends Controller
{
    /**
     * @param  protected
     */
    public function __construct(protected TicketInterface $ticketInterface) {}

    /**
     * this function can view all ticket for agent
     */
    public function index(Request $request)
    {
        $filters = $request->all('searchValue', 'sortColumn', 'sortDirection', 'perPage', 'page');
        $filters['sortColumn'] = $filters['sortBy'] ?? 'id';
        $filters['sortDirection'] = $filters['sortDirection'] ?? 'asc';
        $filters['perPage'] = $filters['perPage'] ?? 5;
        $filters['page'] = $filters['page'] ?? 1;
        return Inertia::render('Agent/Dashboard', [
            'tickets' => $this->ticketInterface->search(
                [
                    '*'
                ],
                $filters
            ),
            'filters' => $filters
        ]);
    }
    /**
     * @param int $id
     */
    public function edit(int $id)
    {
        return Inertia::render('Agent/TicketEdit/Index', [
            'ticket' => $this->ticketInterface->findById($id, ['*'], ['user'])
        ]);
    }
    /**
     * @param Request $request
     * @param int $id
     */
    public function update(TicketReplyRequest $request, int $id)
    {
        $data = $request->all();
        $data['user_id'] = auth()->id();

        $this->ticketInterface->update($id, $data);
        $ticket = $this->ticketInterface->findById($id);
        $ticket->notify(new TicketReplyNotification($ticket));

        return redirect()->route('dashboard')->with('success', 'Ticket replied successfully');
    }
    /**
     * @param int $id
     */
    public function destroy(int $id)
    {
        $this->ticketInterface->deleteById($id);

        return redirect()->route('dashboard')->with('success', 'Ticket deleted successfully');
    }
}
