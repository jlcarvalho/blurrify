#Blurrify v0.2 - CSS Motion Blur
### <a href="http://futuring.com.br/blurrify" target="_blank">Demo</a>

Blurrify is a jQuery Plugin based on Ross McMillan (@RossMcMillanNet) <a href="http://rmcmillan.net/labs/motionblur" target="_blank">Motion Blur script</a>.

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
        color: #fe0086          // Color  ("text", 
                                //         "background-color" or 
                                //         hexadecimal color)
	});
});
```
________________________________________
2013 - Jean Lucas de Carvalho (@JLCarv)