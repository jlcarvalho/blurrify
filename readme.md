#Blurrify v0.1 - CSS Motion Blur

Blurrify is a jQuery Plugin based on Ross McMillan (@RossMcMillanNet) <a href="http://rmcmillan.net/labs/motionblur">Motion Blur script</a>.

##Quick setup

All we need to do is activate the Blurrify plugin.

```javascript
$(document).ready(function(){
	$('.motion').blurrify();
});
```

##Advanced Options

```javascript
$(document).ready(function(){
	$('.motion').blurrify({
		blur: 10,				// Amount of blur
		length: 15				// Size of blur
	});
});
```
________________________________________
@2013 - Jean Lucas de Carvalho (@JLCarv)