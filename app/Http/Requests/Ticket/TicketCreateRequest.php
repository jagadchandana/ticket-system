<?php

namespace App\Http\Requests\Ticket;

use Illuminate\Foundation\Http\FormRequest;

class TicketCreateRequest extends FormRequest
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
            'name' => ['required', 'string', 'min:3', 'max:35'],
            'email' => ['required', 'email', 'max:55', 'min:8'],
            'phone_number' => ['required', 'string', 'min:10', 'max:15'],
            'problem_description' => ['required', 'string', 'min:10', 'max:355'],
        ];
    }
    /**
     * custome error message
     */
    public function messages()
    {
        return [
            'name.required' => 'Name is required',
            'name.string' => 'Name must be string',
            'name.min' => 'Name must be at least 3 characters',
            'name.max' => 'Name must be at most 35 characters',
            'email.required' => 'Email is required',
            'email.email' => 'Email must be valid',
            'email.max' => 'Email must be at most 55 characters',
            'email.min' => 'Email must be at least 8 characters',
            'phone.required' => 'Phone is required',
            'phone.string' => 'Phone must be string',
            'phone.min' => 'Phone must be at least 10 characters',
            'phone.max' => 'Phone must be at most 15 characters',
            'problem_description.required' => 'Problem description is required',
            'problem_description.string' => 'Problem description must be string',
            'problem_description.min' => 'Problem description must be at least 10 characters',
            'problem_description.max' => 'Problem description must be at most 355 characters',
        ];
    }
}
