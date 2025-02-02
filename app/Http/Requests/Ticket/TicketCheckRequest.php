<?php

namespace App\Http\Requests\Ticket;

use Illuminate\Foundation\Http\FormRequest;

class TicketCheckRequest extends FormRequest
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
            'reference_number' => ['required', 'string', 'max:20', 'exists:tickets,reference_number'],
        ];
    }

    /**
     * custome error message
     */
    public function messages()
    {
        return [
            'reference_number.required' => 'Reference number is required',
            'reference_number.string' => 'Reference number must be string',
            'reference_number.max' => 'Reference number must be at most 20 characters',
            'reference_number.exists' => 'Reference number not found',
        ];
    }
}
