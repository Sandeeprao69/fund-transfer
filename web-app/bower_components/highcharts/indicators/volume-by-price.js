/*
  Highcharts JS v7.0.0 (2018-12-11)

 Indicator series type for Highstock

 (c) 2010-2018 Pawe Dalek

 License: www.highcharts.com/license
*/
(function(p){"object"===typeof module&&module.exports?module.exports=p:"function"===typeof define&&define.amd?define(function(){return p}):p("undefined"!==typeof Highcharts?Highcharts:void 0)})(function(p){(function(n){var u=Math.abs,p=n.noop,v=n.addEvent,x=n.correctFloat,A=n.seriesType,w=n.seriesTypes.column.prototype;A("vbp","sma",{params:{ranges:12,volumeSeriesID:"volume"},zoneLines:{enabled:!0,styles:{color:"#0A9AC9",dashStyle:"LongDash",lineWidth:1}},volumeDivision:{enabled:!0,styles:{positiveColor:"rgba(144, 237, 125, 0.8)",
negativeColor:"rgba(244, 91, 91, 0.8)"}},animationLimit:1E3,enableMouseTracking:!1,pointPadding:0,zIndex:-1,crisp:!0,dataGrouping:{enabled:!1},dataLabels:{enabled:!0,allowOverlap:!0,verticalAlign:"top",format:"P: {point.volumePos:.2f} | N: {point.volumeNeg:.2f}",padding:0,style:{fontSize:"7px"}}},{nameBase:"Volume by Price",bindTo:{series:!1,eventName:"afterSetExtremes"},calculateOn:"render",markerAttribs:p,drawGraph:p,getColumnMetrics:w.getColumnMetrics,crispCol:w.crispCol,init:function(b){var a,
c;n.seriesTypes.sma.prototype.init.apply(this,arguments);a=this.options.params;c=this.linkedParent;a=b.get(a.volumeSeriesID);this.addCustomEvents(c,a);return this},addCustomEvents:function(b,a){function c(){e.chart.redraw();e.setData([]);e.zoneStarts=[];e.zoneLinesSVG&&(e.zoneLinesSVG.destroy(),delete e.zoneLinesSVG)}var e=this;e.dataEventsToUnbind.push(v(b,"remove",function(){c()}));a&&e.dataEventsToUnbind.push(v(a,"remove",function(){c()}));return e},animate:function(b){var a=this,c={};n.svg&&!b&&
(c.translateX=a.yAxis.pos,a.group.animate(c,n.extend(n.animObject(a.options.animation),{step:function(b,c){a.group.attr({scaleX:Math.max(.001,c.pos)})}})),a.animate=null)},drawPoints:function(){this.options.volumeDivision.enabled&&(this.posNegVolume(!0,!0),w.drawPoints.apply(this,arguments),this.posNegVolume(!1,!1));w.drawPoints.apply(this,arguments)},posNegVolume:function(b,a){var c=a?["positive","negative"]:["negative","positive"],e=this.options.volumeDivision,l=this.points.length,h=[],d=[],f=0,
m,g,t,k;b?(this.posWidths=h,this.negWidths=d):(h=this.posWidths,d=this.negWidths);for(;f<l;f++)k=this.points[f],k[c[0]+"Graphic"]=k.graphic,k.graphic=k[c[1]+"Graphic"],b&&(m=k.shapeArgs.width,g=this.priceZones[f],(t=g.wholeVolumeData)?(h.push(m/t*g.positiveVolumeData),d.push(m/t*g.negativeVolumeData)):(h.push(0),d.push(0))),k.color=a?e.styles.positiveColor:e.styles.negativeColor,k.shapeArgs.width=a?this.posWidths[f]:this.negWidths[f],k.shapeArgs.x=a?k.shapeArgs.x:this.posWidths[f]},translate:function(){var b=
this,a=b.options,c=b.chart,e=b.yAxis,l=e.min,h=b.options.zoneLines,d=b.priceZones,f=0,m,g,t,k,p,r,q,y,v,z;w.translate.apply(b);m=b.points;m.length&&(q=.5>a.pointPadding?a.pointPadding:.1,a=b.volumeDataArray,g=n.arrayMax(a),t=c.plotWidth/2,y=c.plotTop,k=u(e.toPixels(l)-e.toPixels(l+b.rangeStep)),p=u(e.toPixels(l)-e.toPixels(l+b.rangeStep)),q&&(l=u(k*(1-2*q)),f=u((k-l)/2),k=u(l)),m.forEach(function(a,c){v=a.barX=a.plotX=0;z=a.plotY=e.toPixels(d[c].start)-y-(e.reversed?k-p:k)-f;r=x(t*d[c].wholeVolumeData/
g);a.pointWidth=r;a.shapeArgs=b.crispCol.apply(b,[v,z,r,k]);a.volumeNeg=d[c].negativeVolumeData;a.volumePos=d[c].positiveVolumeData;a.volumeAll=d[c].wholeVolumeData}),h.enabled&&b.drawZones(c,e,b.zoneStarts,h.styles))},getValues:function(b,a){var c=b.processedXData,e=b.processedYData,l=this.chart,h=a.ranges,d=[],f=[],m=[],g;if(!b.chart)return n.error("Base series not found! In case it has been removed, add a new one.",!0,l);if(!(g=l.get(a.volumeSeriesID)))return n.error("Series "+a.volumeSeriesID+
" not found! Check `volumeSeriesID`.",!0,l);if((a=n.isArray(e[0]))&&4!==e[0].length)return n.error("Type of "+b.name+" series is different than line, OHLC or candlestick.",!0,l);(this.priceZones=this.specifyZones(a,c,e,h,g)).forEach(function(a,b){d.push([a.x,a.end]);f.push(d[b][0]);m.push(d[b][1])});return{values:d,xData:f,yData:m}},specifyZones:function(b,a,c,e,l){var h;if(b){h=c.length;for(var d=c[0][3],f=d,m=1,g;m<h;m++)g=c[m][3],g<d&&(d=g),g>f&&(f=g);h={min:d,max:f}}else h=!1;h=(d=h)?d.min:n.arrayMin(c);
g=d?d.max:n.arrayMax(c);var d=this.zoneStarts=[],f=[],t=0,m=1,k;if(!h||!g)return this.points.length&&(this.setData([]),this.zoneStarts=[],this.zoneLinesSVG.destroy()),[];k=this.rangeStep=x(g-h)/e;for(d.push(h);t<e-1;t++)d.push(x(d[t]+k));d.push(g);for(e=d.length;m<e;m++)f.push({index:m-1,x:a[0],start:d[m-1],end:d[m]});return this.volumePerZone(b,f,l,a,c)},volumePerZone:function(b,a,c,e,l){var h=this,d=c.processedXData,f=c.processedYData,m=a.length-1,g=l.length;c=f.length;var n,k,p,r,q;u(g-c)&&(e[0]!==
d[0]&&f.unshift(0),e[g-1]!==d[c-1]&&f.push(0));h.volumeDataArray=[];a.forEach(function(a){a.wholeVolumeData=0;a.positiveVolumeData=0;for(q=a.negativeVolumeData=0;q<g;q++)p=k=!1,r=b?l[q][3]:l[q],n=q?b?l[q-1][3]:l[q-1]:r,r<=a.start&&0===a.index&&(k=!0),r>=a.end&&a.index===m&&(p=!0),(r>a.start||k)&&(r<a.end||p)&&(a.wholeVolumeData+=f[q],n>r?a.negativeVolumeData+=f[q]:a.positiveVolumeData+=f[q]);h.volumeDataArray.push(a.wholeVolumeData)});return a},drawZones:function(b,a,c,e){var l=b.renderer,h=this.zoneLinesSVG,
d=[],f=b.plotWidth,m=b.plotTop,g;c.forEach(function(c){g=a.toPixels(c)-m;d=d.concat(b.renderer.crispLine(["M",0,g,"L",f,g],e.lineWidth))});h?h.animate({d:d}):h=this.zoneLinesSVG=l.path(d).attr({"stroke-width":e.lineWidth,stroke:e.color,dashstyle:e.dashStyle,zIndex:this.group.zIndex+.1}).add(this.group)}},{destroy:function(){this.negativeGraphic&&(this.negativeGraphic=this.negativeGraphic.destroy());return n.Point.prototype.destroy.apply(this,arguments)}})})(p)});
//# sourceMappingURL=volume-by-price.js.map