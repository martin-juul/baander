<?php

namespace App\Packages;

class StrExt
{
    public static function between($str, $starting_word, $ending_word): ?string
    {
        try {
            $subtring_start = strpos($str, $starting_word);
            if ($subtring_start === false || $subtring_start <= 0) {
                return null;
            }

            // Adding the starting index of the starting word to
            // its length would give its ending index
            $subtring_start += strlen($starting_word);
            // Length of our required sub string
            $size = strpos($str, $ending_word, $subtring_start) - $subtring_start;

            if ($size === false || $size <= 0) {
                return null;
            }

            // Return the substring from the index substring_start of length size
            return substr($str, $subtring_start, $size);
        } catch (\Exception $e) {
            return null;
        }
    }
}
