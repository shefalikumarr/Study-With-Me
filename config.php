<?php
/*
 * Basic Site Settings and API Configuration
 */

// Database configuration
define('DB_HOST', 'localhost');
define('DB_USERNAME', 'root');
define('DB_PASSWORD', 'root');
define('DB_NAME', 'trial');
define('DB_USER_TBL', 'users');

// Google API configuration
define('GOOGLE_CLIENT_ID', '726413645124-5a00kpt4p0r1fk1k67hb4r6ah3m69j25.apps.googleusercontent.com');
define('GOOGLE_CLIENT_SECRET', 'BXuWKk7vFuafgQmJNWr6-yID');
define('GOOGLE_REDIRECT_URL', 'https://shefalikumarr.github.io/Study-With-Me/signup.html');

// Start session
if(!session_id()){
    session_start();
}

// Include Google API client library
require_once 'google-api-php-client/Google_Client.php';
require_once 'google-api-php-client/contrib/Google_Oauth2Service.php';

// Call Google API
$gClient = new Google_Client();
$gClient->setApplicationName('Login to CodexWorld.com');
$gClient->setClientId(GOOGLE_CLIENT_ID);
$gClient->setClientSecret(GOOGLE_CLIENT_SECRET);
$gClient->setRedirectUri(GOOGLE_REDIRECT_URL);

$google_oauthV2 = new Google_Oauth2Service($gClient);
