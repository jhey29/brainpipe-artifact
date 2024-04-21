#!/bin/bash
# Locally, I have a lighttpd.conf file, but i'm not putting it into git
# because the path to this folder is hardcoded into it, and I think 
# just running this script is easier than actually typing the path into
# lighttpd.conf. Stupidest shell script i've ever written.
touch lighttpd.conf &&
exec > lighttpd.conf &&
readlink -e $0 | sed -e "s/\(^.*\/\).*/server.document-root = \"\1\"/" &&
cat /dev/stdin <<Q

server.port = 3000

mimetype.assign = (
  ".wasm" => "application/wasm",
  ".js"  => "text/javascript",
  ".html" => "text/html", 
  ".txt" => "text/plain",
  ".jpg" => "image/jpeg",
  ".png" => "image/png" 
)
Q