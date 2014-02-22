<?php

/*
Plugin Name: TweetEverything
Plugin URI: http://wordpress.org/extend/plugins/tweeteverything/
Description: TweetEverything lets readers tweet highlighted text from pages & posts.
Version: 1.0
Author: Matteo Zobbi
Author URI: http://twitter.com/mapteo

*/

//Stops WordPress from converting your quote symbols into smartquotes, since they are not compatible with the Twitter Share button. (The urlencoding of single quotes / apostrophes breaks in the tweet.)

remove_filter('the_content', 'wptexturize');

function tweetable() {
    wp_enqueue_style( 'tweet', plugins_url( '/css/tweet.css' , __FILE__ ));
    wp_enqueue_script( 'tweet', plugins_url( '/js/tweet.js' , __FILE__ ), array( 'jquery' )); 
}

function addContent($content) {
	$content = '<a id="tbutton"><img src="' . plugins_url( 'img/twitter-icon.png' , __FILE__ ) . '" width="35px"></a>'.$content;
  return $content;
}

add_action('the_content', 'addContent');

add_action( 'wp_enqueue_scripts', 'tweetable' );

?>