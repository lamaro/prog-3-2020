<?php /* Template Name: Home */?>
<?php get_header(); ?>
<?php if (have_posts()) { ?>
    <?php while (have_posts()) { ?>
        <?php the_post(); ?>
      


    <?php }?>
<?php }?>
<?php get_footer(); ?>