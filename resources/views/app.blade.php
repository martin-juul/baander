<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" data-app-env="{{ config('app.env') }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>{{ config('app.name') }}</title>

    @viteReactRefresh

    @vite("resources/app/index.tsx")

    <meta name="csrf-token" content="{{ csrf_token() }}">
</head>

<body>
<div id="baanderapproot"></div>
</body>

</html>
