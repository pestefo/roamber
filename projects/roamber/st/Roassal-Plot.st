Smalltalk current createPackage: 'Roassal-Plot'!
Object subclass: #ROPlot
	instanceVariableNames: 'url'
	package: 'Roassal-Plot'!

!ROPlot class methodsFor: 'public'!

example
	ROPlot new 
		url: 'https://www.dropbox.com/s/iyf5mscxq8d99e8/numbers.txt';
		plot.
!

example2
	ROPlot new 
		url: 'https://www.dropbox.com/s/iyf5mscxq8d99e8/numbers.csv';
		token: ',';
		plot.
!

example3
	"Like example2 but the comma separator is not given"
	ROPlot new 
		url: 'https://www.dropbox.com/s/iyf5mscxq8d99e8/numbers.csv';
		plot.
!

url: aString
	^ self new url: aString
! !

