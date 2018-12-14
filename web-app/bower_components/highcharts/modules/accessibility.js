/*
 Highcharts JS v7.0.0 (2018-12-11)
 Accessibility module

 (c) 2010-2018 Highsoft AS
 Author: Oystein Moseng

 License: www.highcharts.com/license
*/
(function(n){"object"===typeof module&&module.exports?module.exports=n:"function"===typeof define&&define.amd?define(function(){return n}):n("undefined"!==typeof Highcharts?Highcharts:void 0)})(function(n){(function(a){function n(a,e){var g=a.indexOf("#each("),k=a.indexOf("#plural("),h=a.indexOf("["),m=a.indexOf("]");if(-1<g){var h=a.slice(g).indexOf(")")+g,c=a.substring(0,g),k=a.substring(h+1),h=a.substring(g+6,h).split(","),g=Number(h[1]);a="";if(e=e[h[0]])for(g=isNaN(g)?e.length:g,g=0>g?e.length+
g:Math.min(g,e.length),h=0;h<g;++h)a+=c+e[h]+k;return a.length?a:""}if(-1<k){c=a.slice(k).indexOf(")")+k;a=a.substring(k+8,c).split(",");switch(Number(e[a[0]])){case 0:a=r(a[4],a[1]);break;case 1:a=r(a[2],a[1]);break;case 2:a=r(a[3],a[1]);break;default:a=a[1]}a?(e=a,e=e.trim&&e.trim()||e.replace(/^\s+|\s+$/g,"")):e="";return e}return-1<h?(k=a.substring(0,h),a=Number(a.substring(h+1,m)),e=e[k],!isNaN(a)&&e&&(0>a?(c=e[e.length+a],void 0===c&&(c=e[0])):(c=e[a],void 0===c&&(c=e[e.length-1]))),void 0!==
c?c:""):"{"+a+"}"}var r=a.pick;a.i18nFormat=function(p,e,g){var k=function(c,a){c=c.slice(a||0);var l=c.indexOf("{"),d=c.indexOf("}");if(-1<l&&d>l)return{statement:c.substring(l+1,d),begin:a+l+1,end:a+d}},h=[],m,c;c=0;do m=k(p,c),c=p.substring(c,m&&m.begin-1),c.length&&h.push({value:c,type:"constant"}),m&&h.push({value:m.statement,type:"statement"}),c=m&&m.end+1;while(m);h.forEach(function(c){"statement"===c.type&&(c.value=n(c.value,e))});return a.format(h.reduce(function(c,a){return c+a.value},""),
e,g)};a.Chart.prototype.langFormat=function(p,e,g){p=p.split(".");for(var k=this.options.lang,h=0;h<p.length;++h)k=k&&k[p[h]];return"string"===typeof k&&a.i18nFormat(k,e,g)};a.setOptions({lang:{accessibility:{screenReaderRegionLabel:"Chart screen reader information.",navigationHint:"Use regions/landmarks to skip ahead to chart {#plural(numSeries, and navigate between data series,)}",defaultChartTitle:"Chart",longDescriptionHeading:"Long description.",noDescription:"No description available.",structureHeading:"Structure.",
viewAsDataTable:"View as data table.",chartHeading:"Chart graphic.",chartContainerLabel:"Interactive chart. {title}. Use up and down arrows to navigate with most screen readers.",rangeSelectorMinInput:"Select start date.",rangeSelectorMaxInput:"Select end date.",tableSummary:"Table representation of chart.",mapZoomIn:"Zoom chart",mapZoomOut:"Zoom out chart",rangeSelectorButton:"Select range {buttonText}",legendItem:"Toggle visibility of series {itemName}",svgContainerTitle:"{chartTitle}",seriesTypeDescriptions:{boxplot:"Box plot charts are typically used to display groups of statistical data. Each data point in the chart can have up to 5 values: minimum, lower quartile, median, upper quartile, and maximum.",
arearange:"Arearange charts are line charts displaying a range between a lower and higher value for each point.",areasplinerange:"These charts are line charts displaying a range between a lower and higher value for each point.",bubble:"Bubble charts are scatter charts where each data point also has a size value.",columnrange:"Columnrange charts are column charts displaying a range between a lower and higher value for each point.",errorbar:"Errorbar series are used to display the variability of the data.",
funnel:"Funnel charts are used to display reduction of data in stages.",pyramid:"Pyramid charts consist of a single pyramid with item heights corresponding to each point value.",waterfall:"A waterfall chart is a column chart where each column contributes towards a total end value."},chartTypes:{emptyChart:"Empty chart",mapTypeDescription:"Map of {mapTitle} with {numSeries} data series.",unknownMap:"Map of unspecified region with {numSeries} data series.",combinationChart:"Combination chart with {numSeries} data series.",
defaultSingle:"Chart with {numPoints} data {#plural(numPoints, points, point)}.",defaultMultiple:"Chart with {numSeries} data series.",splineSingle:"Line chart with {numPoints} data {#plural(numPoints, points, point)}.",splineMultiple:"Line chart with {numSeries} lines.",lineSingle:"Line chart with {numPoints} data {#plural(numPoints, points, point)}.",lineMultiple:"Line chart with {numSeries} lines.",columnSingle:"Bar chart with {numPoints} {#plural(numPoints, bars, bar)}.",columnMultiple:"Bar chart with {numSeries} data series.",
barSingle:"Bar chart with {numPoints} {#plural(numPoints, bars, bar)}.",barMultiple:"Bar chart with {numSeries} data series.",pieSingle:"Pie chart with {numPoints} {#plural(numPoints, slices, slice)}.",pieMultiple:"Pie chart with {numSeries} pies.",scatterSingle:"Scatter chart with {numPoints} {#plural(numPoints, points, point)}.",scatterMultiple:"Scatter chart with {numSeries} data series.",boxplotSingle:"Boxplot with {numPoints} {#plural(numPoints, boxes, box)}.",boxplotMultiple:"Boxplot with {numSeries} data series.",
bubbleSingle:"Bubble chart with {numPoints} {#plural(numPoints, bubbles, bubble)}.",bubbleMultiple:"Bubble chart with {numSeries} data series."},axis:{xAxisDescriptionSingular:"The chart has 1 X axis displaying {names[0]}.",xAxisDescriptionPlural:"The chart has {numAxes} X axes displaying {#names.forEach(-1) }and {names[-1]}",yAxisDescriptionSingular:"The chart has 1 Y axis displaying {names[0]}.",yAxisDescriptionPlural:"The chart has {numAxes} Y axes displaying {#names.forEach(-1) }and {names[-1]}"},
exporting:{chartMenuLabel:"Chart export",menuButtonLabel:"View export menu",exportRegionLabel:"Chart export menu"},series:{summary:{default:"{name}, series {ix} of {numSeries} with {numPoints} data {#plural(numPoints, points, point)}.",defaultCombination:"{name}, series {ix} of {numSeries} with {numPoints} data {#plural(numPoints, points, point)}.",line:"{name}, line {ix} of {numSeries} with {numPoints} data {#plural(numPoints, points, point)}.",lineCombination:"{name}, series {ix} of {numSeries}. Line with {numPoints} data {#plural(numPoints, points, point)}.",
spline:"{name}, line {ix} of {numSeries} with {numPoints} data {#plural(numPoints, points, point)}.",splineCombination:"{name}, series {ix} of {numSeries}. Line with {numPoints} data {#plural(numPoints, points, point)}.",column:"{name}, bar series {ix} of {numSeries} with {numPoints} {#plural(numPoints, bars, bar)}.",columnCombination:"{name}, series {ix} of {numSeries}. Bar series with {numPoints} {#plural(numPoints, bars, bar)}.",bar:"{name}, bar series {ix} of {numSeries} with {numPoints} {#plural(numPoints, bars, bar)}.",
barCombination:"{name}, series {ix} of {numSeries}. Bar series with {numPoints} {#plural(numPoints, bars, bar)}.",pie:"{name}, pie {ix} of {numSeries} with {numPoints} {#plural(numPoints, slices, slice)}.",pieCombination:"{name}, series {ix} of {numSeries}. Pie with {numPoints} {#plural(numPoints, slices, slice)}.",scatter:"{name}, scatter plot {ix} of {numSeries} with {numPoints} {#plural(numPoints, points, point)}.",scatterCombination:"{name}, series {ix} of {numSeries}, scatter plot with {numPoints} {#plural(numPoints, points, point)}.",
boxplot:"{name}, boxplot {ix} of {numSeries} with {numPoints} {#plural(numPoints, boxes, box)}.",boxplotCombination:"{name}, series {ix} of {numSeries}. Boxplot with {numPoints} {#plural(numPoints, boxes, box)}.",bubble:"{name}, bubble series {ix} of {numSeries} with {numPoints} {#plural(numPoints, bubbles, bubble)}.",bubbleCombination:"{name}, series {ix} of {numSeries}. Bubble series with {numPoints} {#plural(numPoints, bubbles, bubble)}.",map:"{name}, map {ix} of {numSeries} with {numPoints} {#plural(numPoints, areas, area)}.",
mapCombination:"{name}, series {ix} of {numSeries}. Map with {numPoints} {#plural(numPoints, areas, area)}.",mapline:"{name}, line {ix} of {numSeries} with {numPoints} data {#plural(numPoints, points, point)}.",maplineCombination:"{name}, series {ix} of {numSeries}. Line with {numPoints} data {#plural(numPoints, points, point)}.",mapbubble:"{name}, bubble series {ix} of {numSeries} with {numPoints} {#plural(numPoints, bubbles, bubble)}.",mapbubbleCombination:"{name}, series {ix} of {numSeries}. Bubble series with {numPoints} {#plural(numPoints, bubbles, bubble)}."},
description:"{description}",xAxisDescription:"X axis, {name}",yAxisDescription:"Y axis, {name}"}}}})})(n);(function(a){function n(c){return c.replace(/&/g,"\x26amp;").replace(/</g,"\x26lt;").replace(/>/g,"\x26gt;").replace(/"/g,"\x26quot;").replace(/'/g,"\x26#x27;").replace(/\//g,"\x26#x2F;")}function r(c){return"string"===typeof c?c.replace(/<\/?[^>]+(>|$)/g,""):c}function p(c){for(var a=c.childNodes.length;a--;)c.appendChild(c.childNodes[a])}var e=a.win.document,g=a.erase,k=a.addEvent,h=a.merge,
m={position:"absolute",left:"-9999px",top:"auto",width:"1px",height:"1px",overflow:"hidden"};a.Series.prototype.commonKeys="name id category x value y".split(" ");a.Series.prototype.specialKeys="z open high q3 median q1 low close".split(" ");a.seriesTypes.pie&&(a.seriesTypes.pie.prototype.specialKeys=[]);a.setOptions({accessibility:{enabled:!0,pointDescriptionThreshold:!1,screenReaderSectionFormatter:function(c){var a=c.options,f=c.types||[],u={chart:c,numSeries:c.series&&c.series.length},f=(1===
f.length&&"pie"===f[0]||"map"===f[0])&&{}||c.getAxesDescription();return"\x3cdiv\x3e"+c.langFormat("accessibility.navigationHint",u)+"\x3c/div\x3e\x3ch3\x3e"+(a.title.text?n(a.title.text):c.langFormat("accessibility.defaultChartTitle",u))+(a.subtitle&&a.subtitle.text?". "+n(a.subtitle.text):"")+"\x3c/h3\x3e\x3ch4\x3e"+c.langFormat("accessibility.longDescriptionHeading",u)+"\x3c/h4\x3e\x3cdiv\x3e"+(a.chart.description||c.langFormat("accessibility.noDescription",u))+"\x3c/div\x3e\x3ch4\x3e"+c.langFormat("accessibility.structureHeading",
u)+"\x3c/h4\x3e\x3cdiv\x3e"+(a.chart.typeDescription||c.getTypeDescription())+"\x3c/div\x3e"+(f.xAxis?"\x3cdiv\x3e"+f.xAxis+"\x3c/div\x3e":"")+(f.yAxis?"\x3cdiv\x3e"+f.yAxis+"\x3c/div\x3e":"")}}});a.addEvent(a.Series,"afterRender",function(){this.chart.options.accessibility.enabled&&this.setA11yDescription()});a.Series.prototype.setA11yDescription=function(){var c=this.chart.options.accessibility,a=this.points&&this.points.length&&this.points[0].graphic&&this.points[0].graphic.element,f=a&&a.parentNode||
this.graph&&this.graph.element||this.group&&this.group.element;f&&(f.lastChild===a&&p(f),this.points&&(this.points.length<c.pointDescriptionThreshold||!1===c.pointDescriptionThreshold)&&this.points.forEach(function(a){a.graphic&&(a.graphic.element.setAttribute("role","img"),a.graphic.element.setAttribute("tabindex","-1"),a.graphic.element.setAttribute("aria-label",r(a.series.options.pointDescriptionFormatter&&a.series.options.pointDescriptionFormatter(a)||c.pointDescriptionFormatter&&c.pointDescriptionFormatter(a)||
a.buildPointInfoString())))}),1<this.chart.series.length||c.describeSingleSeries)&&(f.setAttribute("role",this.options.exposeElementToA11y?"img":"region"),f.setAttribute("tabindex","-1"),f.setAttribute("aria-label",r(c.seriesDescriptionFormatter&&c.seriesDescriptionFormatter(this)||this.buildSeriesInfoString())))};a.Series.prototype.buildSeriesInfoString=function(){var c=this.chart,a=this.description||this.options.description,a=a&&c.langFormat("accessibility.series.description",{description:a,series:this}),
f=c.langFormat("accessibility.series.xAxisDescription",{name:this.xAxis&&this.xAxis.getDescription(),series:this}),e=c.langFormat("accessibility.series.yAxisDescription",{name:this.yAxis&&this.yAxis.getDescription(),series:this}),d={name:this.name||"",ix:this.index+1,numSeries:c.series.length,numPoints:this.points.length,series:this},b=1===c.types.length?"":"Combination";return(c.langFormat("accessibility.series.summary."+this.type+b,d)||c.langFormat("accessibility.series.summary.default"+b,d))+(a?
" "+a:"")+(1<c.yAxis.length&&this.yAxis?" "+e:"")+(1<c.xAxis.length&&this.xAxis?" "+f:"")};a.Point.prototype.buildPointInfoString=function(){var c=this,l=c.series,f=l.chart.options.accessibility,e="",d=l.xAxis&&l.xAxis.isDatetimeAxis,f=d&&l.chart.time.dateFormat(f.pointDateFormatter&&f.pointDateFormatter(c)||f.pointDateFormat||a.Tooltip.prototype.getXDateFormat.call({getDateFormat:a.Tooltip.prototype.getDateFormat,chart:l.chart},c,l.chart.options.tooltip,l.xAxis),c.x);a.find(l.specialKeys,function(b){return void 0!==
c[b]})?(d&&(e=f),l.commonKeys.concat(l.specialKeys).forEach(function(b){void 0===c[b]||d&&"x"===b||(e+=(e?". ":"")+b+", "+c[b])})):e=(this.name||f||this.category||this.id||"x, "+this.x)+", "+(void 0!==this.value?this.value:this.y);return this.index+1+". "+e+"."+(this.description?" "+this.description:"")};a.Axis.prototype.getDescription=function(){return this.userOptions&&this.userOptions.description||this.axisTitle&&this.axisTitle.textStr||this.options.id||this.categories&&"categories"||this.isDatetimeAxis&&
"Time"||"values"};k(a.Series,"afterInit",function(){var c=this.chart;c.options.accessibility.enabled&&(c.types=c.types||[],0>c.types.indexOf(this.type)&&c.types.push(this.type))});k(a.Series,"remove",function(){var c=this.chart,a=this,f=!1;c.series.forEach(function(l){l!==a&&0>c.types.indexOf(a.type)&&(f=!0)});f||g(c.types,a.type)});a.Chart.prototype.getTypeDescription=function(){var c=this.types&&this.types[0],a=this.series&&this.series[0]||{},f=a.mapTitle,e=this.langFormat("accessibility.seriesTypeDescriptions."+
c,{chart:this}),a={numSeries:this.series.length,numPoints:a.points&&a.points.length,chart:this,mapTitle:f},d=this.series&&1===this.series.length?"Single":"Multiple";if(c){if("map"===c)return f?this.langFormat("accessibility.chartTypes.mapTypeDescription",a):this.langFormat("accessibility.chartTypes.unknownMap",a);if(1<this.types.length)return this.langFormat("accessibility.chartTypes.combinationChart",a)}else return this.langFormat("accessibility.chartTypes.emptyChart",a);return(this.langFormat("accessibility.chartTypes."+
c+d,a)||this.langFormat("accessibility.chartTypes.default"+d,a))+(e?" "+e:"")};a.Chart.prototype.getAxesDescription=function(){var a=this.xAxis.length,e=this.yAxis.length,f={};a&&(f.xAxis=this.langFormat("accessibility.axis.xAxisDescription"+(1<a?"Plural":"Singular"),{chart:this,names:this.xAxis.map(function(a){return a.getDescription()}),numAxes:a}));e&&(f.yAxis=this.langFormat("accessibility.axis.yAxisDescription"+(1<e?"Plural":"Singular"),{chart:this,names:this.yAxis.map(function(a){return a.getDescription()}),
numAxes:e}));return f};a.Chart.prototype.addAccessibleContextMenuAttribs=function(){var a=this.exportDivElements;a&&(a.forEach(function(a){"DIV"!==a.tagName||a.children&&a.children.length||(a.setAttribute("role","menuitem"),a.setAttribute("tabindex",-1))}),a[0].parentNode.setAttribute("role","menu"),a[0].parentNode.setAttribute("aria-label",this.langFormat("accessibility.exporting.chartMenuLabel",{chart:this})))};a.Chart.prototype.addScreenReaderRegion=function(a,l){var c=this,g=c.screenReaderRegion=
e.createElement("div"),d=e.createElement("h4"),b=e.createElement("a"),q=e.createElement("h4");g.setAttribute("id",a);g.setAttribute("role","region");g.setAttribute("aria-label",c.langFormat("accessibility.screenReaderRegionLabel",{chart:this}));g.innerHTML=c.options.accessibility.screenReaderSectionFormatter(c);c.getCSV&&(b.innerHTML=c.langFormat("accessibility.viewAsDataTable",{chart:c}),b.href="#"+l,b.setAttribute("tabindex","-1"),b.onclick=c.options.accessibility.onTableAnchorClick||function(){c.viewData();
e.getElementById(l).focus()},d.appendChild(b),g.appendChild(d));q.innerHTML=c.langFormat("accessibility.chartHeading",{chart:c});c.renderTo.insertBefore(q,c.renderTo.firstChild);c.renderTo.insertBefore(g,c.renderTo.firstChild);h(!0,q.style,m);h(!0,g.style,m)};a.Chart.prototype.callbacks.push(function(c){var g=c.options;if(g.accessibility.enabled){var f=c.container.getElementsByTagName("desc")[0],h=c.container.getElementsByTagName("text"),d="highcharts-title-"+c.index,b="highcharts-data-table-"+c.index,
q="highcharts-information-region-"+c.index,t=g.title.text||c.langFormat("accessibility.defaultChartTitle",{chart:c}),v=r(c.langFormat("accessibility.svgContainerTitle",{chartTitle:t}));v.length&&(g=e.createElementNS("http://www.w3.org/2000/svg","title"),g.textContent=v,g.id=d,f.parentNode.insertBefore(g,f));c.renderTo.setAttribute("role","region");c.renderTo.setAttribute("aria-label",c.langFormat("accessibility.chartContainerLabel",{title:r(t),chart:c}));if(c.exportSVGElements&&c.exportSVGElements[0]&&
c.exportSVGElements[0].element){var f=c.exportSVGElements[0].element,w=f.onclick;f.onclick=function(){w.apply(this,Array.prototype.slice.call(arguments));c.addAccessibleContextMenuAttribs();c.highlightExportItem(0)};f.setAttribute("role","button");f.setAttribute("aria-label",c.langFormat("accessibility.exporting.menuButtonLabel",{chart:c}));c.exportingGroup.element.setAttribute("role","region");c.exportingGroup.element.setAttribute("aria-label",c.langFormat("accessibility.exporting.exportRegionLabel",
{chart:c}))}c.rangeSelector&&["minInput","maxInput"].forEach(function(b,d){c.rangeSelector[b]&&(c.rangeSelector[b].setAttribute("tabindex","-1"),c.rangeSelector[b].setAttribute("role","textbox"),c.rangeSelector[b].setAttribute("aria-label",c.langFormat("accessibility.rangeSelector"+(d?"MaxInput":"MinInput"),{chart:c})))});[].forEach.call(h,function(b){b.setAttribute("aria-hidden","true")});c.addScreenReaderRegion(q,b);a.wrap(c,"getTable",function(d){return d.apply(this,Array.prototype.slice.call(arguments,
1)).replace("\x3ctable\x3e",'\x3ctable id\x3d"'+b+'" summary\x3d"'+c.langFormat("accessibility.tableSummary",{chart:c})+'"\x3e')})}})})(n);(function(a){function n(d){return"string"===typeof d?d.replace(/<\/?[^>]+(>|$)/g,""):d}function r(d){var b=d.index,a=d.series.points,c=a.length;if(a[b]!==d)for(;c--;){if(a[c]===d)return c}else return b}function p(d,b){this.chart=d;this.id=b.id;this.keyCodeMap=b.keyCodeMap;this.validate=b.validate;this.init=b.init;this.terminate=b.terminate}function e(d){var b;
d&&d.onclick&&m.createEvent&&(b=m.createEvent("Events"),b.initEvent("click",!0,!1),d.onclick(b))}function g(d){var b=d.chart.options.accessibility;return d.options.skipKeyboardNavigation||!1===d.options.enableMouseTracking||!d.visible||b.pointDescriptionThreshold&&b.pointDescriptionThreshold<=d.points.length}function k(d){var b=d.series.chart.options.accessibility;return d.isNull&&b.keyboardNavigation.skipNullPoints||!1===d.visible||g(d.series)}var h=a.win,m=h.document,c=a.addEvent,l=a.fireEvent,
f=a.merge,u=a.pick;a.extend(a.SVGElement.prototype,{addFocusBorder:function(d,b){this.focusBorder&&this.removeFocusBorder();var a=this.getBBox();d=u(d,3);this.focusBorder=this.renderer.rect(a.x-d,a.y-d,a.width+2*d,a.height+2*d,b&&b.borderRadius).addClass("highcharts-focus-border").attr({zIndex:99}).add(this.parentGroup);this.renderer.styledMode||this.focusBorder.attr({stroke:b&&b.stroke,"stroke-width":b&&b.strokeWidth})},removeFocusBorder:function(){this.focusBorder&&(this.focusBorder.destroy(),delete this.focusBorder)}});
a.Series.prototype.keyboardMoveVertical=!0;["column","pie"].forEach(function(d){a.seriesTypes[d]&&(a.seriesTypes[d].prototype.keyboardMoveVertical=!1)});a.setOptions({accessibility:{keyboardNavigation:{enabled:!0,focusBorder:{enabled:!0,hideBrowserFocusOutline:!0,style:{color:"#335cad",lineWidth:2,borderRadius:3},margin:2},skipNullPoints:!0}}});p.prototype={run:function(d){var b=this,a=d.which||d.keyCode,c=!1,e=!1;this.keyCodeMap.forEach(function(q){-1<q[0].indexOf(a)&&(c=!0,e=!1===q[1].call(b,a,
d)?!1:!0)});c||9!==a||(e=this.move(d.shiftKey?-1:1));return e},move:function(d){var b=this.chart;this.terminate&&this.terminate(d);b.keyboardNavigationModuleIndex+=d;var a=b.keyboardNavigationModules[b.keyboardNavigationModuleIndex];b.focusElement&&b.focusElement.removeFocusBorder();if(a){if(a.validate&&!a.validate())return this.move(d);if(a.init)return a.init(d),!0}b.keyboardNavigationModuleIndex=0;0<d?(this.chart.exiting=!0,this.chart.tabExitAnchor.focus()):this.chart.renderTo.focus();return!1}};
a.Axis.prototype.panStep=function(d,b){var a=b||3;b=this.getExtremes();var c=(b.max-b.min)/a*d,a=b.max+c,c=b.min+c,e=a-c;0>d&&c<b.dataMin?(c=b.dataMin,a=c+e):0<d&&a>b.dataMax&&(a=b.dataMax,c=a-e);this.setExtremes(c,a)};a.Chart.prototype.setFocusToElement=function(a,b){var d=this.options.accessibility.keyboardNavigation.focusBorder;b=b||a;b.element&&b.element.focus&&(b.element.focus(),d.hideBrowserFocusOutline&&b.css({outline:"none"}));d.enabled&&(this.focusElement&&this.focusElement.removeFocusBorder(),
a.addFocusBorder(d.margin,{stroke:d.style.color,strokeWidth:d.style.lineWidth,borderRadius:d.style.borderRadius}),this.focusElement=a)};a.Point.prototype.highlight=function(){var a=this.series.chart;if(this.isNull)a.tooltip&&a.tooltip.hide(0);else this.onMouseOver();this.graphic&&a.setFocusToElement(this.graphic);a.highlightedPoint=this;return this};a.Chart.prototype.highlightAdjacentPoint=function(a){var b=this.series,d=this.highlightedPoint,c=d&&r(d)||0,e=d&&d.series.points,f=this.series&&this.series[this.series.length-
1],f=f&&f.points&&f.points[f.points.length-1];if(!b[0]||!b[0].points)return!1;if(d){if(b=b[d.series.index+(a?1:-1)],c=e[c+(a?1:-1)],!c&&b&&(c=b.points[a?0:b.points.length-1]),!c)return!1}else c=a?b[0].points[0]:f;return k(c)?(b=c.series,g(b)?this.highlightedPoint=a?b.points[b.points.length-1]:b.points[0]:this.highlightedPoint=c,this.highlightAdjacentPoint(a)):c.highlight()};a.Series.prototype.highlightFirstValidPoint=function(){var a=this.chart.highlightedPoint,b=(a&&a.series)===this?r(a):0;if(a=
this.points){for(var c=b,t=a.length;c<t;++c)if(!k(a[c]))return a[c].highlight();for(;0<=b;--b)if(!k(a[b]))return a[b].highlight()}return!1};a.Chart.prototype.highlightAdjacentSeries=function(a){var b,c,d=this.highlightedPoint,e=(b=this.series&&this.series[this.series.length-1])&&b.points&&b.points[b.points.length-1];if(!this.highlightedPoint)return b=a?this.series&&this.series[0]:b,(c=a?b&&b.points&&b.points[0]:e)?c.highlight():!1;b=this.series[d.series.index+(a?-1:1)];if(!b)return!1;var e=Infinity,
f,h=b.points.length;if(void 0===d.plotX||void 0===d.plotY)c=void 0;else{for(;h--;)f=b.points[h],void 0!==f.plotX&&void 0!==f.plotY&&(f=(d.plotX-f.plotX)*(d.plotX-f.plotX)*4+(d.plotY-f.plotY)*(d.plotY-f.plotY)*1,f<e&&(e=f,c=h));c=void 0!==c&&b.points[c]}if(!c)return!1;if(g(b))return c.highlight(),a=this.highlightAdjacentSeries(a),a?a:(d.highlight(),!1);c.highlight();return c.series.highlightFirstValidPoint()};a.Chart.prototype.highlightAdjacentPointVertical=function(a){var b=this.highlightedPoint,
c=Infinity,d;if(void 0===b.plotX||void 0===b.plotY)return!1;this.series.forEach(function(q){g(q)||q.points.forEach(function(e){if(void 0!==e.plotY&&void 0!==e.plotX&&e!==b){var f=e.plotY-b.plotY,t=Math.abs(e.plotX-b.plotX),t=Math.abs(f)*Math.abs(f)+t*t*4;q.yAxis.reversed&&(f*=-1);!(0>f&&a||0<f&&!a||5>t||k(e))&&t<c&&(c=t,d=e)}})});return d?d.highlight():!1};a.Chart.prototype.showExportMenu=function(){this.exportSVGElements&&this.exportSVGElements[0]&&(this.exportSVGElements[0].element.onclick(),this.highlightExportItem(0))};
a.Chart.prototype.hideExportMenu=function(){var a=this.exportDivElements;a&&this.exportContextMenu&&(a.forEach(function(b){if("highcharts-menu-item"===b.className&&b.onmouseout)b.onmouseout()}),this.highlightedExportItem=0,this.exportContextMenu.hideMenu(),this.container.focus())};a.Chart.prototype.highlightExportItem=function(a){var b=this.exportDivElements&&this.exportDivElements[a],c=this.exportDivElements&&this.exportDivElements[this.highlightedExportItem],d;if(b&&"DIV"===b.tagName&&(!b.children||
!b.children.length)){d=!!(this.renderTo.getElementsByTagName("g")[0]||{}).focus;b.focus&&d&&b.focus();if(c&&c.onmouseout)c.onmouseout();if(b.onmouseover)b.onmouseover();this.highlightedExportItem=a;return!0}};a.Chart.prototype.highlightLastExportItem=function(){var a;if(this.exportDivElements)for(a=this.exportDivElements.length;a--&&!this.highlightExportItem(a););};a.Chart.prototype.highlightRangeSelectorButton=function(a){var b=this.rangeSelector.buttons;b[this.highlightedRangeSelectorItemIx]&&b[this.highlightedRangeSelectorItemIx].setState(this.oldRangeSelectorItemState||
0);this.highlightedRangeSelectorItemIx=a;return b[a]?(this.setFocusToElement(b[a].box,b[a]),this.oldRangeSelectorItemState=b[a].state,b[a].setState(2),!0):!1};a.Chart.prototype.highlightLegendItem=function(a){var b=this.legend.allItems,c=this.highlightedLegendItemIx;return b[a]?(b[c]&&l(b[c].legendGroup.element,"mouseout"),void 0!==b[a].pageIx&&b[a].pageIx+1!==this.legend.currentPage&&this.legend.scroll(1+b[a].pageIx-this.legend.currentPage),this.highlightedLegendItemIx=a,this.setFocusToElement(b[a].legendItem,
b[a].legendGroup),l(b[a].legendGroup.element,"mouseover"),!0):!1};a.Chart.prototype.addKeyboardNavigationModules=function(){function a(a,c,d){return new p(b,f({keyCodeMap:c},{id:a},d))}var b=this;b.keyboardNavigationModules=[a("entry",[]),a("points",[[[37,39],function(a){a=39===a;return b.highlightAdjacentPoint(a)?!0:this.init(a?1:-1)}],[[38,40],function(a){a=38!==a;var c=b.options.accessibility.keyboardNavigation;if(c.mode&&"serialize"===c.mode)return b.highlightAdjacentPoint(a)?!0:this.init(a?1:
-1);b[b.highlightedPoint&&b.highlightedPoint.series.keyboardMoveVertical?"highlightAdjacentPointVertical":"highlightAdjacentSeries"](a);return!0}],[[13,32],function(){b.highlightedPoint&&b.highlightedPoint.firePointEvent("click")}]],{init:function(a){var c=b.series.length,d=0<a?0:c;if(0<a)for(delete b.highlightedPoint;d<c;){if(a=b.series[d].highlightFirstValidPoint())return a;++d}else for(;d--;)if(b.highlightedPoint=b.series[d].points[b.series[d].points.length-1],a=b.series[d].highlightFirstValidPoint())return a},
terminate:function(){b.tooltip&&b.tooltip.hide(0);delete b.highlightedPoint}}),a("exporting",[[[37,38],function(){for(var a=b.highlightedExportItem||0,c=!0;a--;)if(b.highlightExportItem(a)){c=!1;break}if(c)return b.highlightLastExportItem(),!0}],[[39,40],function(){for(var a=!0,c=(b.highlightedExportItem||0)+1;c<b.exportDivElements.length;++c)if(b.highlightExportItem(c)){a=!1;break}if(a)return b.highlightExportItem(0),!0}],[[13,32],function(){e(b.exportDivElements[b.highlightedExportItem])}]],{validate:function(){return b.exportChart&&
!(b.options.exporting&&!1===b.options.exporting.enabled)},init:function(a){b.highlightedPoint=null;b.showExportMenu();0>a&&b.highlightLastExportItem()},terminate:function(){b.hideExportMenu()}}),a("mapZoom",[[[38,40,37,39],function(a){b[38===a||40===a?"yAxis":"xAxis"][0].panStep(39>a?-1:1)}],[[9],function(a,c){b.mapNavButtons[b.focusedMapNavButtonIx].setState(0);if(c.shiftKey&&!b.focusedMapNavButtonIx||!c.shiftKey&&b.focusedMapNavButtonIx)return b.mapZoom(),this.move(c.shiftKey?-1:1);b.focusedMapNavButtonIx+=
c.shiftKey?-1:1;a=b.mapNavButtons[b.focusedMapNavButtonIx];b.setFocusToElement(a.box,a);a.setState(2)}],[[13,32],function(){e(b.mapNavButtons[b.focusedMapNavButtonIx].element)}]],{validate:function(){return b.mapZoom&&b.mapNavButtons&&2===b.mapNavButtons.length},init:function(a){var c=b.mapNavButtons[0],d=b.mapNavButtons[1],c=0<a?c:d;b.mapNavButtons.forEach(function(a,c){a.element.setAttribute("tabindex",-1);a.element.setAttribute("role","button");a.element.setAttribute("aria-label",b.langFormat("accessibility.mapZoom"+
(c?"Out":"In"),{chart:b}))});b.setFocusToElement(c.box,c);c.setState(2);b.focusedMapNavButtonIx=0<a?0:1}}),a("rangeSelector",[[[37,39,38,40],function(a){a=37===a||38===a?-1:1;if(!b.highlightRangeSelectorButton(b.highlightedRangeSelectorItemIx+a))return this.move(a)}],[[13,32],function(){3!==b.oldRangeSelectorItemState&&e(b.rangeSelector.buttons[b.highlightedRangeSelectorItemIx].element)}]],{validate:function(){return b.rangeSelector&&b.rangeSelector.buttons&&b.rangeSelector.buttons.length},init:function(a){b.rangeSelector.buttons.forEach(function(a){a.element.setAttribute("tabindex",
"-1");a.element.setAttribute("role","button");a.element.setAttribute("aria-label",b.langFormat("accessibility.rangeSelectorButton",{chart:b,buttonText:a.text&&a.text.textStr}))});b.highlightRangeSelectorButton(0<a?0:b.rangeSelector.buttons.length-1)}}),a("rangeSelectorInput",[[[9,38,40],function(a,c){a=9===a&&c.shiftKey||38===a?-1:1;c=b.highlightedInputRangeIx+=a;if(1<c||0>c)return this.move(a);b.rangeSelector[c?"maxInput":"minInput"].focus()}]],{validate:function(){return b.rangeSelector&&b.rangeSelector.inputGroup&&
"hidden"!==b.rangeSelector.inputGroup.element.getAttribute("visibility")&&!1!==b.options.rangeSelector.inputEnabled&&b.rangeSelector.minInput&&b.rangeSelector.maxInput},init:function(a){b.highlightedInputRangeIx=0<a?0:1;b.rangeSelector[b.highlightedInputRangeIx?"maxInput":"minInput"].focus()}}),a("legend",[[[37,39,38,40],function(a){a=37===a||38===a?-1:1;!b.highlightLegendItem(b.highlightedLegendItemIx+a)&&1<b.legend.allItems.length&&this.init(a)}],[[13,32],function(){var a=b.legend.allItems[b.highlightedLegendItemIx].legendItem.element;
e(b.legend.options.useHTML?a:a.parentNode)}]],{validate:function(){return b.legend&&b.legend.allItems&&b.legend.display&&!(b.colorAxis&&b.colorAxis.length)&&!1!==(b.options.legend&&b.options.legend.keyboardNavigation&&b.options.legend.keyboardNavigation.enabled)},init:function(a){b.legend.allItems.forEach(function(a){a.legendGroup.element.setAttribute("tabindex","-1");a.legendGroup.element.setAttribute("role","button");a.legendGroup.element.setAttribute("aria-label",b.langFormat("accessibility.legendItem",
{chart:b,itemName:n(a.name)}))});b.highlightLegendItem(0<a?0:b.legend.allItems.length-1)}})]};a.Chart.prototype.addExitAnchor=function(){var a=this;a.tabExitAnchor=m.createElement("div");a.tabExitAnchor.setAttribute("tabindex","0");f(!0,a.tabExitAnchor.style,{position:"absolute",left:"-9999px",top:"auto",width:"1px",height:"1px",overflow:"hidden"});a.renderTo.appendChild(a.tabExitAnchor);return c(a.tabExitAnchor,"focus",function(b){b=b||h.event;a.exiting?a.exiting=!1:(a.renderTo.focus(),b.preventDefault(),
a.keyboardNavigationModuleIndex=a.keyboardNavigationModules.length-1,b=a.keyboardNavigationModules[a.keyboardNavigationModuleIndex],b.validate&&!b.validate()?b.move(-1):b.init(-1))})};a.Chart.prototype.resetKeyboardNavigation=function(){var a=this.keyboardNavigationModules&&this.keyboardNavigationModules[this.keyboardNavigationModuleIndex||0];a&&a.terminate&&a.terminate();this.focusElement&&this.focusElement.removeFocusBorder();this.keyboardNavigationModuleIndex=0;this.keyboardReset=!0};a.addEvent(a.Series,
"destroy",function(){var a=this.chart;a.highlightedPoint&&a.highlightedPoint.series===this&&(delete a.highlightedPoint,a.focusElement&&a.focusElement.removeFocusBorder())});a.Chart.prototype.callbacks.push(function(a){var b=a.options.accessibility;b.enabled&&b.keyboardNavigation.enabled&&(a.addKeyboardNavigationModules(),a.keyboardNavigationModuleIndex=0,a.container.hasAttribute&&!a.container.hasAttribute("tabIndex")&&a.container.setAttribute("tabindex","0"),a.tabExitAnchor||(a.unbindExitAnchorFocus=
a.addExitAnchor()),a.unbindKeydownHandler=c(a.renderTo,"keydown",function(b){b=b||h.event;var c=a.keyboardNavigationModules[a.keyboardNavigationModuleIndex];a.keyboardReset=!1;c&&c.run(b)&&b.preventDefault()}),a.unbindBlurHandler=c(m,"mouseup",function(){a.keyboardReset||a.pointer&&a.pointer.chartPosition||a.resetKeyboardNavigation()}),c(a,"destroy",function(){a.resetKeyboardNavigation();a.unbindExitAnchorFocus&&a.tabExitAnchor&&a.unbindExitAnchorFocus();a.unbindKeydownHandler&&a.renderTo&&a.unbindKeydownHandler();
a.unbindBlurHandler&&a.unbindBlurHandler()}))})})(n)});
//# sourceMappingURL=accessibility.js.map