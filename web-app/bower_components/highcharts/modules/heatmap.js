/*
 Highcharts JS v7.0.0 (2018-12-11)

 (c) 2009-2018 Torstein Honsi

 License: www.highcharts.com/license
*/
(function(m){"object"===typeof module&&module.exports?module.exports=m:"function"===typeof define&&define.amd?define(function(){return m}):m("undefined"!==typeof Highcharts?Highcharts:void 0)})(function(m){(function(b){var r=b.addEvent,f=b.Axis,m=b.Chart,l=b.color,p,q=b.extend,n=b.isNumber,c=b.Legend,g=b.LegendSymbolMixin,w=b.noop,v=b.merge,u=b.pick;b.ColorAxis||(p=b.ColorAxis=function(){this.init.apply(this,arguments)},q(p.prototype,f.prototype),q(p.prototype,{defaultColorAxisOptions:{lineWidth:0,
minPadding:0,maxPadding:0,gridLineWidth:1,tickPixelInterval:72,startOnTick:!0,endOnTick:!0,offset:0,marker:{animation:{duration:50},width:.01,color:"#999999"},labels:{overflow:"justify",rotation:0},minColor:"#e6ebf5",maxColor:"#003399",tickLength:5,showInLegend:!0},keepProps:["legendGroup","legendItemHeight","legendItemWidth","legendItem","legendSymbol"].concat(f.prototype.keepProps),init:function(a,d){var e="vertical"!==a.options.legend.layout,h;this.coll="colorAxis";h=v(this.defaultColorAxisOptions,
{side:e?2:1,reversed:!e},d,{opposite:!e,showEmpty:!1,title:null,visible:a.options.legend.enabled});f.prototype.init.call(this,a,h);d.dataClasses&&this.initDataClasses(d);this.initStops();this.horiz=e;this.zoomEnabled=!1;this.defaultLegendLength=200},initDataClasses:function(a){var d=this.chart,e,h=0,k=d.options.chart.colorCount,b=this.options,c=a.dataClasses.length;this.dataClasses=e=[];this.legendItems=[];a.dataClasses.forEach(function(a,g){a=v(a);e.push(a);if(d.styledMode||!a.color)"category"===
b.dataClassColor?(d.styledMode||(g=d.options.colors,k=g.length,a.color=g[h]),a.colorIndex=h,h++,h===k&&(h=0)):a.color=l(b.minColor).tweenTo(l(b.maxColor),2>c?.5:g/(c-1))})},setTickPositions:function(){if(!this.dataClasses)return f.prototype.setTickPositions.call(this)},initStops:function(){this.stops=this.options.stops||[[0,this.options.minColor],[1,this.options.maxColor]];this.stops.forEach(function(a){a.color=l(a[1])})},setOptions:function(a){f.prototype.setOptions.call(this,a);this.options.crosshair=
this.options.marker},setAxisSize:function(){var a=this.legendSymbol,d=this.chart,e=d.options.legend||{},h,k;a?(this.left=e=a.attr("x"),this.top=h=a.attr("y"),this.width=k=a.attr("width"),this.height=a=a.attr("height"),this.right=d.chartWidth-e-k,this.bottom=d.chartHeight-h-a,this.len=this.horiz?k:a,this.pos=this.horiz?e:h):this.len=(this.horiz?e.symbolWidth:e.symbolHeight)||this.defaultLegendLength},normalizedValue:function(a){this.isLog&&(a=this.val2lin(a));return 1-(this.max-a)/(this.max-this.min||
1)},toColor:function(a,d){var e=this.stops,h,k,b=this.dataClasses,g,c;if(b)for(c=b.length;c--;){if(g=b[c],h=g.from,e=g.to,(void 0===h||a>=h)&&(void 0===e||a<=e)){k=g.color;d&&(d.dataClass=c,d.colorIndex=g.colorIndex);break}}else{a=this.normalizedValue(a);for(c=e.length;c--&&!(a>e[c][0]););h=e[c]||e[c+1];e=e[c+1]||h;a=1-(e[0]-a)/(e[0]-h[0]||1);k=h.color.tweenTo(e.color,a)}return k},getOffset:function(){var a=this.legendGroup,d=this.chart.axisOffset[this.side];a&&(this.axisParent=a,f.prototype.getOffset.call(this),
this.added||(this.added=!0,this.labelLeft=0,this.labelRight=this.width),this.chart.axisOffset[this.side]=d)},setLegendColor:function(){var a,d=this.reversed;a=d?1:0;d=d?0:1;a=this.horiz?[a,0,d,0]:[0,d,0,a];this.legendColor={linearGradient:{x1:a[0],y1:a[1],x2:a[2],y2:a[3]},stops:this.stops}},drawLegendSymbol:function(a,d){var e=a.padding,c=a.options,k=this.horiz,b=u(c.symbolWidth,k?this.defaultLegendLength:12),g=u(c.symbolHeight,k?12:this.defaultLegendLength),l=u(c.labelPadding,k?16:30),c=u(c.itemDistance,
10);this.setLegendColor();d.legendSymbol=this.chart.renderer.rect(0,a.baseline-11,b,g).attr({zIndex:1}).add(d.legendGroup);this.legendItemWidth=b+e+(k?c:l);this.legendItemHeight=g+e+(k?l:0)},setState:function(a){this.series.forEach(function(d){d.setState(a)})},visible:!0,setVisible:w,getSeriesExtremes:function(){var a=this.series,d=a.length;this.dataMin=Infinity;for(this.dataMax=-Infinity;d--;)a[d].getExtremes(),void 0!==a[d].valueMin&&(this.dataMin=Math.min(this.dataMin,a[d].valueMin),this.dataMax=
Math.max(this.dataMax,a[d].valueMax))},drawCrosshair:function(a,d){var e=d&&d.plotX,c=d&&d.plotY,b,g=this.pos,l=this.len;d&&(b=this.toPixels(d[d.series.colorKey]),b<g?b=g-2:b>g+l&&(b=g+l+2),d.plotX=b,d.plotY=this.len-b,f.prototype.drawCrosshair.call(this,a,d),d.plotX=e,d.plotY=c,this.cross&&!this.cross.addedToColorAxis&&this.legendGroup&&(this.cross.addClass("highcharts-coloraxis-marker").add(this.legendGroup),this.cross.addedToColorAxis=!0,this.chart.styledMode||this.cross.attr({fill:this.crosshair.color})))},
getPlotLinePath:function(a,d,e,c,b){return n(b)?this.horiz?["M",b-4,this.top-6,"L",b+4,this.top-6,b,this.top,"Z"]:["M",this.left,b,"L",this.left-6,b+6,this.left-6,b-6,"Z"]:f.prototype.getPlotLinePath.call(this,a,d,e,c)},update:function(a,d){var e=this.chart,b=e.legend;this.series.forEach(function(a){a.isDirtyData=!0});a.dataClasses&&b.allItems&&(b.allItems.forEach(function(a){a.isDataClass&&a.legendGroup&&a.legendGroup.destroy()}),e.isDirtyLegend=!0);e.options[this.coll]=v(this.userOptions,a);f.prototype.update.call(this,
a,d);this.legendItem&&(this.setLegendColor(),b.colorizeItem(this,!0))},remove:function(){this.legendItem&&this.chart.legend.destroyItem(this);f.prototype.remove.call(this)},getDataClassLegendSymbols:function(){var a=this,d=this.chart,e=this.legendItems,c=d.options.legend,l=c.valueDecimals,p=c.valueSuffix||"",f;e.length||this.dataClasses.forEach(function(c,h){var k=!0,n=c.from,m=c.to;f="";void 0===n?f="\x3c ":void 0===m&&(f="\x3e ");void 0!==n&&(f+=b.numberFormat(n,l)+p);void 0!==n&&void 0!==m&&(f+=
" - ");void 0!==m&&(f+=b.numberFormat(m,l)+p);e.push(q({chart:d,name:f,options:{},drawLegendSymbol:g.drawRectangle,visible:!0,setState:w,isDataClass:!0,setVisible:function(){k=this.visible=!k;a.series.forEach(function(a){a.points.forEach(function(a){a.dataClass===h&&a.setVisible(k)})});d.legend.colorizeItem(this,k)}},c))});return e},name:""}),["fill","stroke"].forEach(function(a){b.Fx.prototype[a+"Setter"]=function(){this.elem.attr(a,l(this.start).tweenTo(l(this.end),this.pos),null,!0)}}),r(m,"afterGetAxes",
function(){var a=this.options.colorAxis;this.colorAxis=[];a&&new p(this,a)}),r(c,"afterGetAllItems",function(a){var d=[],c=this.chart.colorAxis[0];c&&c.options&&c.options.showInLegend&&(c.options.dataClasses?d=c.getDataClassLegendSymbols():d.push(c),c.series.forEach(function(c){b.erase(a.allItems,c)}));for(c=d.length;c--;)a.allItems.unshift(d[c])}),r(c,"afterColorizeItem",function(a){a.visible&&a.item.legendColor&&a.item.legendSymbol.attr({fill:a.item.legendColor})}),r(c,"afterUpdate",function(a,
c,b){this.chart.colorAxis[0]&&this.chart.colorAxis[0].update({},b)}))})(m);(function(b){var m=b.defined,f=b.noop,t=b.seriesTypes;b.colorPointMixin={isValid:function(){return null!==this.value&&Infinity!==this.value&&-Infinity!==this.value},setVisible:function(b){var l=this,f=b?"show":"hide";l.visible=!!b;["graphic","dataLabel"].forEach(function(b){if(l[b])l[b][f]()})},setState:function(l){b.Point.prototype.setState.call(this,l);this.graphic&&this.graphic.attr({zIndex:"hover"===l?1:0})}};b.colorSeriesMixin=
{pointArrayMap:["value"],axisTypes:["xAxis","yAxis","colorAxis"],optionalAxis:"colorAxis",trackerGroups:["group","markerGroup","dataLabelsGroup"],getSymbol:f,parallelArrays:["x","y","value"],colorKey:"value",pointAttribs:t.column.prototype.pointAttribs,translateColors:function(){var b=this,f=this.options.nullColor,m=this.colorAxis,n=this.colorKey;this.data.forEach(function(c){var g=c[n];if(g=c.options.color||(c.isNull?f:m&&void 0!==g?m.toColor(g,c):c.color||b.color))c.color=g})},colorAttribs:function(b){var f=
{};m(b.color)&&(f[this.colorProp||"fill"]=b.color);return f}}})(m);(function(b){var m=b.colorPointMixin,f=b.merge,t=b.noop,l=b.pick,p=b.Series,q=b.seriesType,n=b.seriesTypes;q("heatmap","scatter",{animation:!1,borderWidth:0,nullColor:"#f7f7f7",dataLabels:{formatter:function(){return this.point.value},inside:!0,verticalAlign:"middle",crop:!1,overflow:!1,padding:0},marker:null,pointRange:null,tooltip:{pointFormat:"{point.x}, {point.y}: {point.value}\x3cbr/\x3e"},states:{hover:{halo:!1,brightness:.2}}},
f(b.colorSeriesMixin,{pointArrayMap:["y","value"],hasPointSpecificOptions:!0,getExtremesFromAll:!0,directTouch:!0,init:function(){var b;n.scatter.prototype.init.apply(this,arguments);b=this.options;b.pointRange=l(b.pointRange,b.colsize||1);this.yAxis.axisPointRange=b.rowsize||1},translate:function(){var b=this.options,g=this.xAxis,f=this.yAxis,m=b.pointPadding||0,n=function(a,b,c){return Math.min(Math.max(b,a),c)};this.generatePoints();this.points.forEach(function(a){var c=(b.colsize||1)/2,e=(b.rowsize||
1)/2,h=n(Math.round(g.len-g.translate(a.x-c,0,1,0,1)),-g.len,2*g.len),c=n(Math.round(g.len-g.translate(a.x+c,0,1,0,1)),-g.len,2*g.len),k=n(Math.round(f.translate(a.y-e,0,1,0,1)),-f.len,2*f.len),e=n(Math.round(f.translate(a.y+e,0,1,0,1)),-f.len,2*f.len),p=l(a.pointPadding,m);a.plotX=a.clientX=(h+c)/2;a.plotY=(k+e)/2;a.shapeType="rect";a.shapeArgs={x:Math.min(h,c)+p,y:Math.min(k,e)+p,width:Math.abs(c-h)-2*p,height:Math.abs(e-k)-2*p}});this.translateColors()},drawPoints:function(){var b=this.chart.styledMode?
"css":"attr";n.column.prototype.drawPoints.call(this);this.points.forEach(function(c){c.graphic[b](this.colorAttribs(c))},this)},animate:t,getBox:t,drawLegendSymbol:b.LegendSymbolMixin.drawRectangle,alignDataLabel:n.column.prototype.alignDataLabel,getExtremes:function(){p.prototype.getExtremes.call(this,this.valueData);this.valueMin=this.dataMin;this.valueMax=this.dataMax;p.prototype.getExtremes.call(this)}}),b.extend({haloPath:function(b){if(!b)return[];var c=this.shapeArgs;return["M",c.x-b,c.y-
b,"L",c.x-b,c.y+c.height+b,c.x+c.width+b,c.y+c.height+b,c.x+c.width+b,c.y-b,"Z"]}},m))})(m)});
//# sourceMappingURL=heatmap.js.map