@extends('layouts.app')

@section('content')
<div class="row justify-content-center">
    <div class="col-md-8">
        <div class="card">
            <div class="card-header">Dashboard <span class="float-right"><a href="/faqs/create" class="btn btn-primary">Create a New FaQ</a></span></div>

            <div class="card-body">
                @if (session('status'))
                    <div class="alert alert-success" role="alert">
                        {{ session('status') }}
                    </div>
                @endif

                @if (count($queswers))
                    <div class="container">
                        <ul>
                            @foreach ($queswers as $queswer)
                                <li>Q: {{ $queswer->question }}</li>
                                <li>A: {{ $queswer->answer }}</li>
                                <li style="list-style: none"><span class="float-right"><a href="/faqs/{{ $queswer->id }}/edit" class="btn btn-info">Edit</a></span></li>
                                <form action="/faqs/{{ $queswer->id }}" class="float-right m1-2" method="POST">
                                    @csrf
                                    @method('DELETE')
                                    <button type="submit" name="button" class="btn btn-danger">Delete</button>
                                </form>
                                
                                <br>
                            @endforeach
                        </ul>
                    </div>
                @else
                    <p>This is a FaQ section.</p>
                @endif
            </div>
        </div>
    </div>
</div>
@endsection
