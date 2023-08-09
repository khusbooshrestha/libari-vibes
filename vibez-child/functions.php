<?php

function vibes_child_scripts() {
    if ( ! is_admin() ) {
        //child theme
        wp_enqueue_style( 'vibes-child-style', get_stylesheet_directory_uri() . '/assets/css/main.css', array(), '1.1.1' );
        wp_enqueue_script( 'vibes-child-script', get_stylesheet_directory_uri() . '/assets/js/main.js', array(), '1.1.1', true );
    }
}

add_action( 'wp_enqueue_scripts', 'vibes_child_scripts', 150 );