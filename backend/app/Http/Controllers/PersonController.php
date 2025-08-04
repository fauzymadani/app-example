<?php

namespace App\Http\Controllers;

use App\Models\Person;
use Illuminate\Http\Request;

class PersonController extends Controller
{
        public function index()
    {
        return response()->json(Person::all());
    }

    public function store(Request $request)
    {
        $request->validate(['name' => 'required|string|max:255']);

        $person = Person::create(['name' => $request->name]);

        return response()->json($person, 201);
    }
}
