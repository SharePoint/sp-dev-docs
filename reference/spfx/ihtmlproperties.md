# IHtmlProperties interface





Structure of the data that a webpart developer can return on the onBeforeSerialize() API. 
The outcome contains 3 kay/value dictionaries for properties that need to be search indexed. 
Both keys and values are expected to be strings and will be HTML encoded during serialization. 
 
{ 
searchableProperties: { 'prop1': 'value_of_prop1' }, 
linkProperties: { 'prop2': 'http://www.contoso.com/page1.aspx' }, 
imageLinkPropertes: { 'prop3': 'http://www.contoso.com/imag.png' } 
} 
 
This input would get translated to the following HTML string. 
 
"<div data-sp-prop-name='prop1'>value1</div> 
link data-sp-prop-name='prop2' href='http://www.contoso.com/page1.aspx'> 
img data-sp-prop-name='prop2' href='http://www.contoso.com/image.png'>" 








