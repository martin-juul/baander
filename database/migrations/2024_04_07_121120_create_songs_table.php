<?php

use Illuminate\Database\Migrations\Migration;
use Tpetry\PostgresqlEnhanced\Schema\Blueprint;
use Tpetry\PostgresqlEnhanced\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('songs', function (Blueprint $table) {
            $table->id();
            $table->foreignId('album_id')->index()->constrained()->cascadeOnDelete();
            $table->foreignId('artist_id')->index();

            $table->caseInsensitiveText('title');
            $table->text('path');

            $table->integer('length')->nullable();
            $table->text('lyrics')->nullable();
            $table->integer('track')->nullable();
            $table->integer('disc')->nullable();
            $table->integer('modified_time')->nullable();
            $table->text('genre')->nullable();
            $table->integer('year')->nullable();
            $table->text('comment')->nullable();

            $table->timestampsTz();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('songs');
    }
};
