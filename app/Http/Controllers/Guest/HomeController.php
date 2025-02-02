<?php

namespace App\Http\Controllers\Guest;

use App\Http\Controllers\Controller;
use App\Http\Requests\Ticket\TicketCheckRequest;
use App\Http\Requests\Ticket\TicketCreateRequest;
use App\Notifications\TicketOpenNotification;
use App\Repositories\Eloquent\Tickets\TicketInterface;
use Illuminate\Http\Request;
use Inertia\Inertia;

class HomeController extends Controller
{
    /**
     * @param  protected
     */
    public function __construct(protected TicketInterface $ticketInterface){}

    /**
     * this function use for render the home page to add or view ticket for guest
     */
    public function index()
    {
        return Inertia::render('Guest/Home/Index');
    }

    /**
     * @param TicketCreateRequest $request
     * ticket open and send reference number to customer
     */
    public function openTicket(TicketCreateRequest $request)
    {
        $data = $request->all();
        $data['reference_number'] = 'ref'.rand(10000, 99999);
        // check if reference number exists
        if(!$this->ticketInterface->existsByColumn(['reference_number' => $data['reference_number']])){
            $data['reference_number'] = 'ref'.rand(10000, 99999);
        }

        $ticket = $this->ticketInterface->create($data);
        $ticket->notify(new TicketOpenNotification($ticket));

        return redirect()->back()->with('success', 'Ticket opened successfully');

    }
    /**
     * @param TicketCheckRequest $request
     *  customer ref status view function
     */
    public function checkTicket(TicketCheckRequest $request)
    {
        return redirect()->route('ticket.view', ['ref' => $request->reference_number]);
    }

    /**
     * @param TicketCheckRequest $request
     *  customer ref status view function
     */
    public function viewTicket(string $ref)
    {
        return Inertia::render('Guest/View/Index',[
            'ticket' => $this->ticketInterface->findByColumn(['reference_number' => $ref], ['*'], ['user'])
        ]);
    }
}
