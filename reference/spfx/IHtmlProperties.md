# IHtmlProperties interface





Structure of the data that a webpart developer can return on the onBeforeSerialize() API. 
The outcome contains 3 kay/value dictionaries for properties that need to be search indexed. 
Both keys and values are expected to be strings and will be HTML encoded during serialization. 
 
{ 
searchableProperties: { 'prop1': 'value_of_prop1' }, 
linkProperties: { 'prop2': 'http: 
imageLinkPropertes: { 'prop3': 'http: 
} 
 
This input would get translated to the following HTML string. 
 
"<div data-sp-prop-name='prop1'>value1</div> 
link data-sp-prop-name='prop2' href='http: 
img data-sp-prop-name='prop2' href='http: 








