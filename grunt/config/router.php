<?php

$url = strtok($_SERVER["REQUEST_URI"], "?");
$root = $_SERVER["DOCUMENT_ROOT"];

if (preg_match("/\.js$/", $url))
{
    header("Content-Type: application/javascript");
}

if (preg_match("/^\/bower_components/", $url)) {
    echo file_get_contents("." . $url);
}
else if (preg_match("/^\/scripts\/.*\.js/", $url))
{
    if (strpos($url, "vendor") === false && strpos($url, ".min") !== false)
    {
        $url = str_replace(".min", "", $url);
    }

    echo file_get_contents($root.$url);
}
else
{
    return false;
}