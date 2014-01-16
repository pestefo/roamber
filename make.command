#! /bin/sh -x
D=`dirname "$0"`
B=$D/bin
R=$D/projects/roamber

cd $R/st

DemoReqts=Canvas,ARoassal,Graph-ET-Core,ARoassal-Event,ARoassal-Layout,ARoassal-Interaction

# THIS SHOULD BE TURNED INTO A MAKEFILE ...

$B/amberc -v -n roamber -D $R/js ARoassal-Event.st
$B/amberc -v -n roamber -D $R/js ARoassal.st
$B/amberc -v -n roamber -D $R/js Graph-ET-Axis.st
$B/amberc -v -n roamber -D $R/js Graph-ET-Core.st
$B/amberc -v -n roamber -D $R/js Graph-ET-Examples.st
$B/amberc -v -n roamber -D $R/js Graph-ET-Util.st
$B/amberc -v -n roamber -D $R/js RoassalD3.st

$B/amberc -v -l SUnit -n roamber -D $R/js ARoassal-Layout-Test.st
$B/amberc -v -l SUnit -n roamber -D $R/js ARoassal-Test.st
$B/amberc -v -l SUnit -n roamber -D $R/js Graph-ET-Core-Tests.st
$B/amberc -v -l SUnit -n roamber -D $R/js Graph-ET-Util-Tests.st

$B/amberc -v -l ARoassal -L $R/js -n roamber -D $R/js ARoassal-AttachPoint.st
$B/amberc -v -l ARoassal -L $R/js -n roamber -D $R/js ARoassal-Interaction.st
$B/amberc -v -l ARoassal -L $R/js -n roamber -D $R/js ARoassal-Layout.st
$B/amberc -v -l ARoassal -L $R/js -n roamber -D $R/js ARoassal-Raphaeljs.st
$B/amberc -v -l ARoassal -L $R/js -n roamber -D $R/js Roassal-Normalizers.st
$B/amberc -v -l ARoassal -L $R/js -n roamber -D $R/js RoassalExtras-Geo.st

$B/amberc -v -l SUnit,ARoassal-Test -L $R/js -n roamber -D $R/js ARoassal-AttachPoint-Test.st
$B/amberc -v -l SUnit,ARoassal-Test -L $R/js -n roamber -D $R/js ARoassal-Interaction-Test.st
$B/amberc -v -l SUnit,ARoassal-Test -L $R/js -n roamber -D $R/js RoassalExtras-Geo-Tests.st
$B/amberc -v -l SUnit,ARoassal,ARoassal-Test -L $R/js -n roamber -D $R/js Roassal-Builder-Punchcard.st

$B/amberc -v -l ARoassal,ARoassal-Event -L $R/js -n roamber -D $R/js Roassal-Amber-Extensions.st

$B/amberc -v -l Graph-ET-Core,SUnit -L $R/js -n roamber -D $R/js Roassal-Plot.st
$B/amberc -v -l ${DemoReqts} -L $R/js -n roamber -D $R/js ARoassal-Demo.st

exit
