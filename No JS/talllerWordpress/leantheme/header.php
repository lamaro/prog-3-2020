<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
	<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>

<header>
<nav id="menu_top">
			<?php wp_nav_menu( array( 'theme_location' => 'primary', 'container'=>false ) ); ?>
		</nav>
</header>

<div id="wrapper">