#! /bin/sh
D=`dirname "$0"`
cd $D
(echo "Opening localhost:4000 ..."; sleep 2; open http://localhost:4000/) &
./vendor/amber/bin/amber serve
