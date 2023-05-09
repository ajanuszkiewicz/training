<?php

/**
* Plugin Name: First Block
* Plugin URI: https://localhost/
* Description: My first Block
* Author: Adam
*/ 

function blocks_course_firstblock_init() {
    register_block_type_from_metadata( __DIR__ );
}

add_action( "init", "blocks_course_firstblock_init");