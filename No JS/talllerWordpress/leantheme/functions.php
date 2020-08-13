<?php

//Registra los dos menues
function register_my_menus() {
    register_nav_menus( array(
        'primary' => __( 'Primary Menu' ),
        'footer' => __( 'Menú Footer' )
	) );
  }
  add_action( 'init', 'register_my_menus' );
  
//Includes CSS y JS
function theme_includes(){
	global $ver_num;
	$ver_num = mt_rand();
	wp_enqueue_style( 'style-css', get_template_directory_uri() . '/style.css', array(), $ver_num, 'all' );
	//wp_enqueue_script( 'script-main', get_template_directory_uri() . '/js/main.js', array (), '', true);
}
add_action('wp_enqueue_scripts', 'theme_includes');

?>