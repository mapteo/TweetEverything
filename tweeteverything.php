<?php

/*
Plugin Name: TweetEverything
Plugin URI: http://wordpress.org/extend/plugins/tweeteverything/
Description: TweetEverything lets readers tweet highlighted text from pages & posts.
Version: 1.0
Author: Matteo Zobbi
Author URI: http://twitter.com/mapteo

*/

function tweetable() {
  wp_localize_script('ajax-handler', 'AjaxHandler', array('url' => admin_url('admin-ajax.php')));
  wp_enqueue_style( 'tweet', plugins_url( '/css/tweet.css' , __FILE__ ));
  wp_enqueue_script( 'tweet', plugins_url( '/js/tweet.js' , __FILE__ ), array( 'jquery' )); 
  wp_localize_script('tweet', 'plicon', array( 'plugin_icon' => plugins_url( 'img/twitter-icon.png' , __FILE__ ) ));
}

add_action( 'wp_enqueue_scripts', 'tweetable' );

?>