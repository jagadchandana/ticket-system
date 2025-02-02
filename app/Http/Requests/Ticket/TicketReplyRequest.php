<?php

namespace App\Http\Requests\Ticket;

use Illuminate\Foundation\Http\FormRequest;

class TicketReplyRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'reply' => ['required', 'string', 'max:350', 'min:10']
        ];
    }
    /**
     * @return array
     */
    public function messages(): array
    {
        return [
            'reply.required' => 'Solution is required',
            'reply.string' => 'Solution must be a string',
            'reply.max' => 'Solution must not be more than 350 characters',
            'reply.min' => 'Solution must not be less than 10 characters'
        ];
    }
}
