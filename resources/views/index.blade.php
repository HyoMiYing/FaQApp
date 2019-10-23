@extends('layouts.app')

@section('content')
<div class="row justify-content-center">
    <div class="col-md-8">
        <div id="faqCard" class="card">
            <div class="card-header">Frequently Asked Questions</div>

                @if (count($queswers))
                    <div class="container">
                        <ul>
                            @foreach ($queswers as $queswer)
                                <li>Q: {{ $queswer->question }}</li>
                                <li>A: {{ $queswer->answer }}</li>
                                
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
