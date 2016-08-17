@extends("layouts.skeleton")

@section("page")
<div class="spring">
    <h1>Documentation Creator</h1>
</div>

<div class="spring">
	<h2>Blocks</h2>
	@include("components.blocks.index")
</div>

<div class="spring">
	<h2>Nudge</h2>
	@include("components.nudge.index")
</div>

<div class="spring">
	<h2>Buttons</h2>
	@include("components.buttons.index")
</div>

@endsection