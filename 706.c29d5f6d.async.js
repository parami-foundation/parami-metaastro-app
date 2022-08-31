"use strict";(self.webpackChunkmeta_astro=self.webpackChunkmeta_astro||[]).push([[706],{79508:function(t0,n3,J){J.d(n3,{Z:function(){return z4}});var m1=J(1413),G=J(67294),M2={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 00-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z"}}]},name:"check",theme:"outlined"},E2=M2,X1=J(27029),_1=function(r4,V){return G.createElement(X1.Z,(0,m1.Z)((0,m1.Z)({},r4),{},{ref:V,icon:E2}))};_1.displayName="CheckOutlined";var z4=G.forwardRef(_1)},2037:function(t0,n3,J){J.d(n3,{Z:function(){return z4}});var m1=J(1413),G=J(67294),M2={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M396 512a112 112 0 10224 0 112 112 0 10-224 0zm546.2-25.8C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 000 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM508 688c-97.2 0-176-78.8-176-176s78.8-176 176-176 176 78.8 176 176-78.8 176-176 176z"}}]},name:"eye",theme:"filled"},E2=M2,X1=J(27029),_1=function(r4,V){return G.createElement(X1.Z,(0,m1.Z)((0,m1.Z)({},r4),{},{ref:V,icon:E2}))};_1.displayName="EyeFilled";var z4=G.forwardRef(_1)},75552:function(t0,n3,J){J.d(n3,{Z:function(){return z4}});var m1=J(1413),G=J(67294),M2={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M483.2 790.3L861.4 412c1.7-1.7 2.5-4 2.3-6.3l-25.5-301.4c-.7-7.8-6.8-13.9-14.6-14.6L522.2 64.3c-2.3-.2-4.7.6-6.3 2.3L137.7 444.8a8.03 8.03 0 000 11.3l334.2 334.2c3.1 3.2 8.2 3.2 11.3 0zm122.7-533.4c18.7-18.7 49.1-18.7 67.9 0 18.7 18.7 18.7 49.1 0 67.9-18.7 18.7-49.1 18.7-67.9 0-18.7-18.7-18.7-49.1 0-67.9zm283.8 282.9l-39.6-39.5a8.03 8.03 0 00-11.3 0l-362 361.3-237.6-237a8.03 8.03 0 00-11.3 0l-39.6 39.5a8.03 8.03 0 000 11.3l243.2 242.8 39.6 39.5c3.1 3.1 8.2 3.1 11.3 0l407.3-406.6c3.1-3.1 3.1-8.2 0-11.3z"}}]},name:"tags",theme:"filled"},E2=M2,X1=J(27029),_1=function(r4,V){return G.createElement(X1.Z,(0,m1.Z)((0,m1.Z)({},r4),{},{ref:V,icon:E2}))};_1.displayName="TagsFilled";var z4=G.forwardRef(_1)},77616:function(t0,n3,J){J.d(n3,{dF:function(){return C4},fi:function(){return P4}});var m1=J(93286),G=J(80711),M2=J(48794),E2=J(2593);const X1=new G.Yd(M2.i),_1={},z4=E2.O$.from(0),i1=E2.O$.from(-1);function r4(N1,$,K,b1){const e2={fault:$,operation:K};return b1!==void 0&&(e2.value=b1),X1.throwError(N1,G.Yd.errors.NUMERIC_FAULT,e2)}let V="0";for(;V.length<256;)V+=V;function E1(N1){if(typeof N1!="number")try{N1=E2.O$.from(N1).toNumber()}catch{}return typeof N1=="number"&&N1>=0&&N1<=256&&!(N1%1)?"1"+V.substring(0,N1):X1.throwArgumentError("invalid decimal size","decimals",N1)}function t2(N1,$){$==null&&($=0);const K=E1($);N1=E2.O$.from(N1);const b1=N1.lt(z4);b1&&(N1=N1.mul(i1));let e2=N1.mod(K).toString();for(;e2.length<K.length-1;)e2="0"+e2;e2=e2.match(/^([0-9]*[1-9]|0)(0*)/)[1];const G2=N1.div(K).toString();return K.length===1?N1=G2:N1=G2+"."+e2,b1&&(N1="-"+N1),N1}function o2(N1,$){$==null&&($=0);const K=E1($);(typeof N1!="string"||!N1.match(/^-?[0-9.]+$/))&&X1.throwArgumentError("invalid decimal value","value",N1);const b1=N1.substring(0,1)==="-";b1&&(N1=N1.substring(1)),N1==="."&&X1.throwArgumentError("missing value","value",N1);const e2=N1.split(".");e2.length>2&&X1.throwArgumentError("too many decimal points","value",N1);let G2=e2[0],R2=e2[1];for(G2||(G2="0"),R2||(R2="0");R2[R2.length-1]==="0";)R2=R2.substring(0,R2.length-1);for(R2.length>K.length-1&&r4("fractional component exceeds decimals","underflow","parseFixed"),R2===""&&(R2="0");R2.length<K.length-1;)R2+="0";const B4=E2.O$.from(G2),B3=E2.O$.from(R2);let Y3=B4.mul(K).add(B3);return b1&&(Y3=Y3.mul(i1)),Y3}class $1{constructor($,K,b1,e2){$!==_1&&X1.throwError("cannot use FixedFormat constructor; use FixedFormat.from",G.Yd.errors.UNSUPPORTED_OPERATION,{operation:"new FixedFormat"}),this.signed=K,this.width=b1,this.decimals=e2,this.name=(K?"":"u")+"fixed"+String(b1)+"x"+String(e2),this._multiplier=E1(e2),Object.freeze(this)}static from($){if($ instanceof $1)return $;typeof $=="number"&&($=`fixed128x${$}`);let K=!0,b1=128,e2=18;if(typeof $=="string"){if($!=="fixed")if($==="ufixed")K=!1;else{const G2=$.match(/^(u?)fixed([0-9]+)x([0-9]+)$/);G2||X1.throwArgumentError("invalid fixed format","format",$),K=G2[1]!=="u",b1=parseInt(G2[2]),e2=parseInt(G2[3])}}else if($){const G2=(R2,B4,B3)=>$[R2]==null?B3:(typeof $[R2]!==B4&&X1.throwArgumentError("invalid fixed format ("+R2+" not "+B4+")","format."+R2,$[R2]),$[R2]);K=G2("signed","boolean",K),b1=G2("width","number",b1),e2=G2("decimals","number",e2)}return b1%8&&X1.throwArgumentError("invalid fixed format width (not byte aligned)","format.width",b1),e2>80&&X1.throwArgumentError("invalid fixed format (decimals too large)","format.decimals",e2),new $1(_1,K,b1,e2)}}class k2{constructor($,K,b1,e2){$!==_1&&X1.throwError("cannot use FixedNumber constructor; use FixedNumber.from",G.Yd.errors.UNSUPPORTED_OPERATION,{operation:"new FixedFormat"}),this.format=e2,this._hex=K,this._value=b1,this._isFixedNumber=!0,Object.freeze(this)}_checkFormat($){this.format.name!==$.format.name&&X1.throwArgumentError("incompatible format; use fixedNumber.toFormat","other",$)}addUnsafe($){this._checkFormat($);const K=o2(this._value,this.format.decimals),b1=o2($._value,$.format.decimals);return k2.fromValue(K.add(b1),this.format.decimals,this.format)}subUnsafe($){this._checkFormat($);const K=o2(this._value,this.format.decimals),b1=o2($._value,$.format.decimals);return k2.fromValue(K.sub(b1),this.format.decimals,this.format)}mulUnsafe($){this._checkFormat($);const K=o2(this._value,this.format.decimals),b1=o2($._value,$.format.decimals);return k2.fromValue(K.mul(b1).div(this.format._multiplier),this.format.decimals,this.format)}divUnsafe($){this._checkFormat($);const K=o2(this._value,this.format.decimals),b1=o2($._value,$.format.decimals);return k2.fromValue(K.mul(this.format._multiplier).div(b1),this.format.decimals,this.format)}floor(){const $=this.toString().split(".");$.length===1&&$.push("0");let K=k2.from($[0],this.format);const b1=!$[1].match(/^(0*)$/);return this.isNegative()&&b1&&(K=K.subUnsafe(L3.toFormat(K.format))),K}ceiling(){const $=this.toString().split(".");$.length===1&&$.push("0");let K=k2.from($[0],this.format);const b1=!$[1].match(/^(0*)$/);return!this.isNegative()&&b1&&(K=K.addUnsafe(L3.toFormat(K.format))),K}round($){$==null&&($=0);const K=this.toString().split(".");if(K.length===1&&K.push("0"),($<0||$>80||$%1)&&X1.throwArgumentError("invalid decimal count","decimals",$),K[1].length<=$)return this;const b1=k2.from("1"+V.substring(0,$),this.format),e2=s4.toFormat(this.format);return this.mulUnsafe(b1).addUnsafe(e2).floor().divUnsafe(b1)}isZero(){return this._value==="0.0"||this._value==="0"}isNegative(){return this._value[0]==="-"}toString(){return this._value}toHexString($){if($==null)return this._hex;$%8&&X1.throwArgumentError("invalid byte width","width",$);const K=E2.O$.from(this._hex).fromTwos(this.format.width).toTwos($).toHexString();return(0,m1.$m)(K,$/8)}toUnsafeFloat(){return parseFloat(this.toString())}toFormat($){return k2.fromString(this._value,$)}static fromValue($,K,b1){return b1==null&&K!=null&&!(0,E2.Zm)(K)&&(b1=K,K=null),K==null&&(K=0),b1==null&&(b1="fixed"),k2.fromString(t2($,K),$1.from(b1))}static fromString($,K){K==null&&(K="fixed");const b1=$1.from(K),e2=o2($,b1.decimals);!b1.signed&&e2.lt(z4)&&r4("unsigned value cannot be negative","overflow","value",$);let G2=null;b1.signed?G2=e2.toTwos(b1.width).toHexString():(G2=e2.toHexString(),G2=(0,m1.$m)(G2,b1.width/8));const R2=t2(e2,b1.decimals);return new k2(_1,G2,R2,b1)}static fromBytes($,K){K==null&&(K="fixed");const b1=$1.from(K);if((0,m1.lE)($).length>b1.width/8)throw new Error("overflow");let e2=E2.O$.from($);b1.signed&&(e2=e2.fromTwos(b1.width));const G2=e2.toTwos((b1.signed?0:1)+b1.width).toHexString(),R2=t2(e2,b1.decimals);return new k2(_1,G2,R2,b1)}static from($,K){if(typeof $=="string")return k2.fromString($,K);if((0,m1._t)($))return k2.fromBytes($,K);try{return k2.fromValue($,0,K)}catch(b1){if(b1.code!==G.Yd.errors.INVALID_ARGUMENT)throw b1}return X1.throwArgumentError("invalid FixedNumber value","value",$)}static isFixedNumber($){return!!($&&$._isFixedNumber)}}const L3=k2.from(1),s4=k2.from("0.5"),c4="units/5.6.1",Q4=new G.Yd(c4),a3=["wei","kwei","mwei","gwei","szabo","finney","ether"];function p3(N1){const $=String(N1).split(".");($.length>2||!$[0].match(/^-?[0-9]*$/)||$[1]&&!$[1].match(/^[0-9]*$/)||N1==="."||N1==="-.")&&Q4.throwArgumentError("invalid value","value",N1);let K=$[0],b1="";for(K.substring(0,1)==="-"&&(b1="-",K=K.substring(1));K.substring(0,1)==="0";)K=K.substring(1);K===""&&(K="0");let e2="";for($.length===2&&(e2="."+($[1]||"0"));e2.length>2&&e2[e2.length-1]==="0";)e2=e2.substring(0,e2.length-1);const G2=[];for(;K.length;)if(K.length<=3){G2.unshift(K);break}else{const R2=K.length-3;G2.unshift(K.substring(R2)),K=K.substring(0,R2)}return b1+G2.join(",")+e2}function y3(N1,$){if(typeof $=="string"){const K=a3.indexOf($);K!==-1&&($=3*K)}return t2(N1,$??18)}function R4(N1,$){if(typeof N1!="string"&&Q4.throwArgumentError("value must be a string","value",N1),typeof $=="string"){const K=a3.indexOf($);K!==-1&&($=3*K)}return o2(N1,$??18)}function C4(N1){return y3(N1,18)}function P4(N1){return R4(N1,18)}},9708:function(t0,n3,J){J.d(n3,{F:function(){return z4},Z:function(){return _1}});var m1=J(4942),G=J(94184),M2=J.n(G),E2=J(93355),X1=(0,E2.b)("warning","error","");function _1(i1,r4,V){var E1;return M2()((E1={},(0,m1.Z)(E1,"".concat(i1,"-status-success"),r4==="success"),(0,m1.Z)(E1,"".concat(i1,"-status-warning"),r4==="warning"),(0,m1.Z)(E1,"".concat(i1,"-status-error"),r4==="error"),(0,m1.Z)(E1,"".concat(i1,"-status-validating"),r4==="validating"),(0,m1.Z)(E1,"".concat(i1,"-has-feedback"),V),E1))}var z4=function(r4,V){return V||r4}},43138:function(t0,n3,J){J.d(n3,{Z:function(){return T3}});var m1=J(87462),G=J(4942),M2=J(71002),E2=J(29439),X1=J(1413),_1=J(67294),z4={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"}}]},name:"down",theme:"outlined"},i1=z4,r4=J(27029),V=function(f1,l1){return _1.createElement(r4.Z,(0,X1.Z)((0,X1.Z)({},f1),{},{ref:l1,icon:i1}))};V.displayName="DownOutlined";var E1=_1.forwardRef(V),t2={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M890.5 755.3L537.9 269.2c-12.8-17.6-39-17.6-51.7 0L133.5 755.3A8 8 0 00140 768h75c5.1 0 9.9-2.5 12.9-6.6L512 369.8l284.1 391.6c3 4.1 7.8 6.6 12.9 6.6h75c6.5 0 10.3-7.4 6.5-12.7z"}}]},name:"up",theme:"outlined"},o2=t2,$1=function(f1,l1){return _1.createElement(r4.Z,(0,X1.Z)((0,X1.Z)({},f1),{},{ref:l1,icon:o2}))};$1.displayName="UpOutlined";var k2=_1.forwardRef($1),L3=J(94184),s4=J.n(L3),c4=J(44925),Q4=J(15105),a3=J(8410),p3=J(42550),y3=J(15671),R4=J(43144);function C4(){return typeof BigInt=="function"}function P4(q){var f1=q.trim(),l1=f1.startsWith("-");l1&&(f1=f1.slice(1)),f1=f1.replace(/(\.\d*[^0])0*$/,"$1").replace(/\.0*$/,"").replace(/^0+/,""),f1.startsWith(".")&&(f1="0".concat(f1));var n2=f1||"0",r2=n2.split("."),s2=r2[0]||"0",P2=r2[1]||"0";s2==="0"&&P2==="0"&&(l1=!1);var h2=l1?"-":"";return{negative:l1,negativeStr:h2,trimStr:n2,integerStr:s2,decimalStr:P2,fullStr:"".concat(h2).concat(n2)}}function N1(q){var f1=String(q);return!Number.isNaN(Number(f1))&&f1.includes("e")}function $(q){var f1=String(q);if(N1(q)){var l1=Number(f1.slice(f1.indexOf("e-")+2)),n2=f1.match(/\.(\d+)/);return n2?.[1]&&(l1+=n2[1].length),l1}return f1.includes(".")&&b1(f1)?f1.length-f1.indexOf(".")-1:0}function K(q){var f1=String(q);if(N1(q)){if(q>Number.MAX_SAFE_INTEGER)return String(C4()?BigInt(q).toString():Number.MAX_SAFE_INTEGER);if(q<Number.MIN_SAFE_INTEGER)return String(C4()?BigInt(q).toString():Number.MIN_SAFE_INTEGER);f1=q.toFixed($(f1))}return P4(f1).fullStr}function b1(q){return typeof q=="number"?!Number.isNaN(q):q?/^\s*-?\d+(\.\d+)?\s*$/.test(q)||/^\s*-?\d+\.\s*$/.test(q)||/^\s*-?\.\d+\s*$/.test(q):!1}function e2(q){var f1=typeof q=="number"?K(q):P4(q).fullStr,l1=f1.includes(".");return l1?P4(f1.replace(/(\d)\.(\d)/g,"$1$2.")).fullStr:q+"0"}var G2=function(){function q(f1){if((0,y3.Z)(this,q),this.origin="",this.number=void 0,this.empty=void 0,!f1&&f1!==0||!String(f1).trim()){this.empty=!0;return}this.origin=String(f1),this.number=Number(f1)}return(0,R4.Z)(q,[{key:"negate",value:function(){return new q(-this.toNumber())}},{key:"add",value:function(l1){if(this.isInvalidate())return new q(l1);var n2=Number(l1);if(Number.isNaN(n2))return this;var r2=this.number+n2;if(r2>Number.MAX_SAFE_INTEGER)return new q(Number.MAX_SAFE_INTEGER);if(r2<Number.MIN_SAFE_INTEGER)return new q(Number.MIN_SAFE_INTEGER);var s2=Math.max($(this.number),$(n2));return new q(r2.toFixed(s2))}},{key:"isEmpty",value:function(){return this.empty}},{key:"isNaN",value:function(){return Number.isNaN(this.number)}},{key:"isInvalidate",value:function(){return this.isEmpty()||this.isNaN()}},{key:"equals",value:function(l1){return this.toNumber()===l1?.toNumber()}},{key:"lessEquals",value:function(l1){return this.add(l1.negate().toString()).toNumber()<=0}},{key:"toNumber",value:function(){return this.number}},{key:"toString",value:function(){var l1=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0;return l1?this.isInvalidate()?"":K(this.number):this.origin}}]),q}(),R2=function(){function q(f1){if((0,y3.Z)(this,q),this.origin="",this.negative=void 0,this.integer=void 0,this.decimal=void 0,this.decimalLen=void 0,this.empty=void 0,this.nan=void 0,!f1&&f1!==0||!String(f1).trim()){this.empty=!0;return}if(this.origin=String(f1),f1==="-"){this.nan=!0;return}var l1=f1;if(N1(l1)&&(l1=Number(l1)),l1=typeof l1=="string"?l1:K(l1),b1(l1)){var n2=P4(l1);this.negative=n2.negative;var r2=n2.trimStr.split(".");this.integer=BigInt(r2[0]);var s2=r2[1]||"0";this.decimal=BigInt(s2),this.decimalLen=s2.length}else this.nan=!0}return(0,R4.Z)(q,[{key:"getMark",value:function(){return this.negative?"-":""}},{key:"getIntegerStr",value:function(){return this.integer.toString()}},{key:"getDecimalStr",value:function(){return this.decimal.toString().padStart(this.decimalLen,"0")}},{key:"alignDecimal",value:function(l1){var n2="".concat(this.getMark()).concat(this.getIntegerStr()).concat(this.getDecimalStr().padEnd(l1,"0"));return BigInt(n2)}},{key:"negate",value:function(){var l1=new q(this.toString());return l1.negative=!l1.negative,l1}},{key:"add",value:function(l1){if(this.isInvalidate())return new q(l1);var n2=new q(l1);if(n2.isInvalidate())return this;var r2=Math.max(this.getDecimalStr().length,n2.getDecimalStr().length),s2=this.alignDecimal(r2),P2=n2.alignDecimal(r2),h2=(s2+P2).toString(),K2=P4(h2),A4=K2.negativeStr,Q2=K2.trimStr,x4="".concat(A4).concat(Q2.padStart(r2+1,"0"));return new q("".concat(x4.slice(0,-r2),".").concat(x4.slice(-r2)))}},{key:"isEmpty",value:function(){return this.empty}},{key:"isNaN",value:function(){return this.nan}},{key:"isInvalidate",value:function(){return this.isEmpty()||this.isNaN()}},{key:"equals",value:function(l1){return this.toString()===l1?.toString()}},{key:"lessEquals",value:function(l1){return this.add(l1.negate().toString()).toNumber()<=0}},{key:"toNumber",value:function(){return this.isNaN()?NaN:Number(this.toString())}},{key:"toString",value:function(){var l1=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0;return l1?this.isInvalidate()?"":P4("".concat(this.getMark()).concat(this.getIntegerStr(),".").concat(this.getDecimalStr())).fullStr:this.origin}}]),q}();function B4(q){return C4()?new R2(q):new G2(q)}function B3(q,f1,l1){var n2=arguments.length>3&&arguments[3]!==void 0?arguments[3]:!1;if(q==="")return"";var r2=P4(q),s2=r2.negativeStr,P2=r2.integerStr,h2=r2.decimalStr,K2="".concat(f1).concat(h2),A4="".concat(s2).concat(P2);if(l1>=0){var Q2=Number(h2[l1]);if(Q2>=5&&!n2){var x4=B4(q).add("".concat(s2,"0.").concat("0".repeat(l1)).concat(10-Q2));return B3(x4.toString(),f1,l1,n2)}return l1===0?A4:"".concat(A4).concat(f1).concat(h2.padEnd(l1,"0").slice(0,l1))}return K2===".0"?A4:"".concat(A4).concat(K2)}var Y3=J(31131),j3=200,H6=600;function u6(q){var f1=q.prefixCls,l1=q.upNode,n2=q.downNode,r2=q.upDisabled,s2=q.downDisabled,P2=q.onStep,h2=_1.useRef(),K2=_1.useRef();K2.current=P2;var A4=function(e4,U2){e4.preventDefault(),K2.current(U2);function D4(){K2.current(U2),h2.current=setTimeout(D4,j3)}h2.current=setTimeout(D4,H6)},Q2=function(){clearTimeout(h2.current)};if(_1.useEffect(function(){return Q2},[]),(0,Y3.Z)())return null;var x4="".concat(f1,"-handler"),u2=s4()(x4,"".concat(x4,"-up"),(0,G.Z)({},"".concat(x4,"-up-disabled"),r2)),l3=s4()(x4,"".concat(x4,"-down"),(0,G.Z)({},"".concat(x4,"-down-disabled"),s2)),U={unselectable:"on",role:"button",onMouseUp:Q2,onMouseLeave:Q2};return _1.createElement("div",{className:"".concat(x4,"-wrap")},_1.createElement("span",(0,m1.Z)({},U,{onMouseDown:function(e4){A4(e4,!0)},"aria-label":"Increase Value","aria-disabled":r2,className:u2}),l1||_1.createElement("span",{unselectable:"on",className:"".concat(f1,"-handler-up-inner")})),_1.createElement("span",(0,m1.Z)({},U,{onMouseDown:function(e4){A4(e4,!1)},"aria-label":"Decrease Value","aria-disabled":s2,className:l3}),n2||_1.createElement("span",{unselectable:"on",className:"".concat(f1,"-handler-down-inner")})))}var e0=J(80334);function n0(q,f1){var l1=(0,_1.useRef)(null);function n2(){try{var s2=q.selectionStart,P2=q.selectionEnd,h2=q.value,K2=h2.substring(0,s2),A4=h2.substring(P2);l1.current={start:s2,end:P2,value:h2,beforeTxt:K2,afterTxt:A4}}catch{}}function r2(){if(q&&l1.current&&f1)try{var s2=q.value,P2=l1.current,h2=P2.beforeTxt,K2=P2.afterTxt,A4=P2.start,Q2=s2.length;if(s2.endsWith(K2))Q2=s2.length-l1.current.afterTxt.length;else if(s2.startsWith(h2))Q2=h2.length;else{var x4=h2[A4-1],u2=s2.indexOf(x4,A4-1);u2!==-1&&(Q2=u2+1)}q.setSelectionRange(Q2,Q2)}catch(l3){(0,e0.ZP)(!1,"Something warning of cursor restore. Please fire issue about this: ".concat(l3.message))}}return[n2,r2]}var d6=J(75164),U6=function(){var q=(0,_1.useRef)(0),f1=function(){d6.Z.cancel(q.current)};return(0,_1.useEffect)(function(){return f1},[]),function(l1){f1(),q.current=(0,d6.Z)(function(){l1()})}},I6=["prefixCls","className","style","min","max","step","defaultValue","value","disabled","readOnly","upHandler","downHandler","keyboard","controls","stringMode","parser","formatter","precision","decimalSeparator","onChange","onInput","onPressEnter","onStep"],f6=function(f1,l1){return f1||l1.isEmpty()?l1.toString():l1.toNumber()},A6=function(f1){var l1=B4(f1);return l1.isInvalidate()?null:l1},V6=_1.forwardRef(function(q,f1){var l1,n2=q.prefixCls,r2=n2===void 0?"rc-input-number":n2,s2=q.className,P2=q.style,h2=q.min,K2=q.max,A4=q.step,Q2=A4===void 0?1:A4,x4=q.defaultValue,u2=q.value,l3=q.disabled,U=q.readOnly,k1=q.upHandler,e4=q.downHandler,U2=q.keyboard,D4=q.controls,D3=D4===void 0?!0:D4,N3=q.stringMode,O3=q.parser,M4=q.formatter,X2=q.precision,E3=q.decimalSeparator,$2=q.onChange,r6=q.onInput,V4=q.onPressEnter,T6=q.onStep,Z=(0,c4.Z)(q,I6),N="".concat(r2,"-input"),p1=_1.useRef(null),A1=_1.useState(!1),V1=(0,E2.Z)(A1,2),Z1=V1[0],A2=V1[1],K1=_1.useRef(!1),z2=_1.useRef(!1),L2=_1.useRef(!1),g2=_1.useState(function(){return B4(u2??x4)}),Q1=(0,E2.Z)(g2,2),a2=Q1[0],D2=Q1[1];function o4(F){u2===void 0&&D2(F)}var N2=_1.useCallback(function(F,R){if(!R)return X2>=0?X2:Math.max($(F),$(Q2))},[X2,Q2]),C2=_1.useCallback(function(F){var R=String(F);if(O3)return O3(R);var B=R;return E3&&(B=B.replace(E3,".")),B.replace(/[^\w.-]+/g,"")},[O3,E3]),V2=_1.useRef(""),n4=_1.useCallback(function(F,R){if(M4)return M4(F,{userTyping:R,input:String(V2.current)});var B=typeof F=="number"?K(F):F;if(!R){var A=N2(B,R);if(b1(B)&&(E3||A>=0)){var x1=E3||".";B=B3(B,x1,A)}}return B},[M4,N2,E3]),w4=_1.useState(function(){var F=x4??u2;return a2.isInvalidate()&&["string","number"].includes((0,M2.Z)(F))?Number.isNaN(F)?"":F:n4(a2.toString(),!1)}),Z2=(0,E2.Z)(w4,2),l4=Z2[0],h4=Z2[1];V2.current=l4;function Z4(F,R){h4(n4(F.isInvalidate()?F.toString(!1):F.toString(!R),R))}var W4=_1.useMemo(function(){return A6(K2)},[K2,X2]),j4=_1.useMemo(function(){return A6(h2)},[h2,X2]),i3=_1.useMemo(function(){return!W4||!a2||a2.isInvalidate()?!1:W4.lessEquals(a2)},[W4,a2]),J4=_1.useMemo(function(){return!j4||!a2||a2.isInvalidate()?!1:a2.lessEquals(j4)},[j4,a2]),J3=n0(p1.current,Z1),b4=(0,E2.Z)(J3,2),h3=b4[0],s6=b4[1],o6=function(R){return W4&&!R.lessEquals(W4)?W4:j4&&!j4.lessEquals(R)?j4:null},g6=function(R){return!o6(R)},K3=function(R,B){var A=R,x1=g6(A)||A.isEmpty();if(!A.isEmpty()&&!B&&(A=o6(A)||A,x1=!0),!U&&!l3&&x1){var T1=A.toString(),L1=N2(T1,B);return L1>=0&&(A=B4(B3(T1,".",L1)),g6(A)||(A=B4(B3(T1,".",L1,!0)))),A.equals(a2)||(o4(A),$2?.(A.isEmpty()?null:f6(N3,A)),u2===void 0&&Z4(A,B)),A}return a2},E6=U6(),W6=function F(R){if(h3(),h4(R),!z2.current){var B=C2(R),A=B4(B);A.isNaN()||K3(A,!0)}r6?.(R),E6(function(){var x1=R;O3||(x1=R.replace(/。/g,".")),x1!==R&&F(x1)})},v0=function(){z2.current=!0},c0=function(){z2.current=!1,W6(p1.current.value)},r0=function(R){W6(R.target.value)},p6=function(R){var B;if(!(R&&i3||!R&&J4)){K1.current=!1;var A=B4(L2.current?e2(Q2):Q2);R||(A=A.negate());var x1=(a2||B4(0)).add(A.toString()),T1=K3(x1,!1);T6?.(f6(N3,T1),{offset:L2.current?e2(Q2):Q2,type:R?"up":"down"}),(B=p1.current)===null||B===void 0||B.focus()}},q6=function(R){var B=B4(C2(l4)),A=B;B.isNaN()?A=a2:A=K3(B,R),u2!==void 0?Z4(a2,!1):A.isNaN()||Z4(A,!1)},m6=function(R){var B=R.which,A=R.shiftKey;K1.current=!0,A?L2.current=!0:L2.current=!1,B===Q4.Z.ENTER&&(z2.current||(K1.current=!1),q6(!1),V4?.(R)),U2!==!1&&!z2.current&&[Q4.Z.UP,Q4.Z.DOWN].includes(B)&&(p6(Q4.Z.UP===B),R.preventDefault())},z6=function(){K1.current=!1,L2.current=!1},T=function(){q6(!1),A2(!1),K1.current=!1};return(0,a3.o)(function(){a2.isInvalidate()||Z4(a2,!1)},[X2]),(0,a3.o)(function(){var F=B4(u2);D2(F);var R=B4(C2(l4));(!F.equals(R)||!K1.current||M4)&&Z4(F,K1.current)},[u2]),(0,a3.o)(function(){M4&&s6()},[l4]),_1.createElement("div",{className:s4()(r2,s2,(l1={},(0,G.Z)(l1,"".concat(r2,"-focused"),Z1),(0,G.Z)(l1,"".concat(r2,"-disabled"),l3),(0,G.Z)(l1,"".concat(r2,"-readonly"),U),(0,G.Z)(l1,"".concat(r2,"-not-a-number"),a2.isNaN()),(0,G.Z)(l1,"".concat(r2,"-out-of-range"),!a2.isInvalidate()&&!g6(a2)),l1)),style:P2,onFocus:function(){A2(!0)},onBlur:T,onKeyDown:m6,onKeyUp:z6,onCompositionStart:v0,onCompositionEnd:c0},D3&&_1.createElement(u6,{prefixCls:r2,upNode:k1,downNode:e4,upDisabled:i3,downDisabled:J4,onStep:p6}),_1.createElement("div",{className:"".concat(N,"-wrap")},_1.createElement("input",(0,m1.Z)({autoComplete:"off",role:"spinbutton","aria-valuemin":h2,"aria-valuemax":K2,"aria-valuenow":a2.isInvalidate()?null:a2.toString(),step:Q2},Z,{ref:(0,p3.sQ)(p1,f1),className:N,value:l4,onChange:r0,disabled:l3,readOnly:U}))))});V6.displayName="InputNumber";var P3=V6,a0=P3,Z6=J(53124),m3=J(98866),z3=J(97647),F6=J(65223),B6=J(96159),v6=J(9708),i0=function(q,f1){var l1={};for(var n2 in q)Object.prototype.hasOwnProperty.call(q,n2)&&f1.indexOf(n2)<0&&(l1[n2]=q[n2]);if(q!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r2=0,n2=Object.getOwnPropertySymbols(q);r2<n2.length;r2++)f1.indexOf(n2[r2])<0&&Object.prototype.propertyIsEnumerable.call(q,n2[r2])&&(l1[n2[r2]]=q[n2[r2]]);return l1},H3=_1.forwardRef(function(q,f1){var l1,n2=_1.useContext(Z6.E_),r2=n2.getPrefixCls,s2=n2.direction,P2=_1.useContext(z3.Z),h2=_1.useState(!1),K2=(0,E2.Z)(h2,2),A4=K2[0],Q2=K2[1],x4=_1.useRef(null);_1.useImperativeHandle(f1,function(){return x4.current});var u2=q.className,l3=q.size,U=q.disabled,k1=q.prefixCls,e4=q.addonBefore,U2=q.addonAfter,D4=q.prefix,D3=q.bordered,N3=D3===void 0?!0:D3,O3=q.readOnly,M4=q.status,X2=q.controls,E3=i0(q,["className","size","disabled","prefixCls","addonBefore","addonAfter","prefix","bordered","readOnly","status","controls"]),$2=r2("input-number",k1),r6=_1.createElement(k2,{className:"".concat($2,"-handler-up-inner")}),V4=_1.createElement(E1,{className:"".concat($2,"-handler-down-inner")}),T6=typeof X2=="boolean"?X2:void 0;(0,M2.Z)(X2)==="object"&&(r6=typeof X2.upIcon>"u"?r6:_1.createElement("span",{className:"".concat($2,"-handler-up-inner")},X2.upIcon),V4=typeof X2.downIcon>"u"?V4:_1.createElement("span",{className:"".concat($2,"-handler-down-inner")},X2.downIcon));var Z=(0,_1.useContext)(F6.aM),N=Z.hasFeedback,p1=Z.status,A1=Z.isFormItemInput,V1=Z.feedbackIcon,Z1=(0,v6.F)(p1,M4),A2=l3||P2,K1=_1.useContext(m3.Z),z2=U||K1,L2=s4()((l1={},(0,G.Z)(l1,"".concat($2,"-lg"),A2==="large"),(0,G.Z)(l1,"".concat($2,"-sm"),A2==="small"),(0,G.Z)(l1,"".concat($2,"-rtl"),s2==="rtl"),(0,G.Z)(l1,"".concat($2,"-borderless"),!N3),(0,G.Z)(l1,"".concat($2,"-in-form-item"),A1),l1),(0,v6.Z)($2,Z1),u2),g2=_1.createElement(a0,(0,m1.Z)({ref:x4,disabled:z2,className:L2,upHandler:r6,downHandler:V4,prefixCls:$2,readOnly:O3,controls:T6},E3));if(D4!=null||N){var Q1,a2=s4()("".concat($2,"-affix-wrapper"),(0,v6.Z)("".concat($2,"-affix-wrapper"),Z1,N),(Q1={},(0,G.Z)(Q1,"".concat($2,"-affix-wrapper-focused"),A4),(0,G.Z)(Q1,"".concat($2,"-affix-wrapper-disabled"),q.disabled),(0,G.Z)(Q1,"".concat($2,"-affix-wrapper-sm"),P2==="small"),(0,G.Z)(Q1,"".concat($2,"-affix-wrapper-lg"),P2==="large"),(0,G.Z)(Q1,"".concat($2,"-affix-wrapper-rtl"),s2==="rtl"),(0,G.Z)(Q1,"".concat($2,"-affix-wrapper-readonly"),O3),(0,G.Z)(Q1,"".concat($2,"-affix-wrapper-borderless"),!N3),(0,G.Z)(Q1,"".concat(u2),!(e4||U2)&&u2),Q1));g2=_1.createElement("div",{className:a2,style:q.style,onMouseUp:function(){return x4.current.focus()}},D4&&_1.createElement("span",{className:"".concat($2,"-prefix")},D4),(0,B6.Tm)(g2,{style:null,value:q.value,onFocus:function(l4){var h4;Q2(!0),(h4=q.onFocus)===null||h4===void 0||h4.call(q,l4)},onBlur:function(l4){var h4;Q2(!1),(h4=q.onBlur)===null||h4===void 0||h4.call(q,l4)}}),N&&_1.createElement("span",{className:"".concat($2,"-suffix")},V1))}if(e4!=null||U2!=null){var D2,o4="".concat($2,"-group"),N2="".concat(o4,"-addon"),C2=e4?_1.createElement("div",{className:N2},e4):null,V2=U2?_1.createElement("div",{className:N2},U2):null,n4=s4()("".concat($2,"-wrapper"),o4,(0,G.Z)({},"".concat(o4,"-rtl"),s2==="rtl")),w4=s4()("".concat($2,"-group-wrapper"),(D2={},(0,G.Z)(D2,"".concat($2,"-group-wrapper-sm"),P2==="small"),(0,G.Z)(D2,"".concat($2,"-group-wrapper-lg"),P2==="large"),(0,G.Z)(D2,"".concat($2,"-group-wrapper-rtl"),s2==="rtl"),D2),(0,v6.Z)("".concat($2,"-group-wrapper"),Z1,N),u2);g2=_1.createElement("div",{className:w4,style:q.style},_1.createElement("div",{className:n4},C2&&_1.createElement(F6.Ux,{status:!0,override:!0},C2),(0,B6.Tm)(g2,{style:null,disabled:z2}),V2&&_1.createElement(F6.Ux,{status:!0,override:!0},V2)))}return g2}),T3=H3},52129:function(t0,n3,J){J.d(n3,{Z:function(){return T6}});var m1=J(93433),G=J(87462),M2=J(15873),E2=J(73218),X1=J(57119),_1=J(68628),z4=J(38135),i1=J(67294),r4=J.t(i1,2),V=J(88182),E1=J(4942),t2=J(94184),o2=J.n(t2),$1=J(29439),k2=J(30470),L3=J(71577),s4=J(73839);function c4(Z){return!!(Z&&!!Z.then)}var Q4=function(N){var p1=i1.useRef(!1),A1=i1.useRef(),V1=(0,k2.Z)(!1),Z1=(0,$1.Z)(V1,2),A2=Z1[0],K1=Z1[1],z2=N.close,L2=function(){z2?.apply(void 0,arguments)};i1.useEffect(function(){var C2;if(N.autoFocus){var V2=A1.current;C2=setTimeout(function(){return V2.focus()})}return function(){C2&&clearTimeout(C2)}},[]);var g2=function(V2){!c4(V2)||(K1(!0),V2.then(function(){K1(!1,!0),L2.apply(void 0,arguments),p1.current=!1},function(n4){console.error(n4),K1(!1,!0),p1.current=!1}))},Q1=function(V2){var n4=N.actionFn;if(!p1.current){if(p1.current=!0,!n4){L2();return}var w4;if(N.emitEvent){if(w4=n4(V2),N.quitOnNullishReturnValue&&!c4(w4)){p1.current=!1,L2(V2);return}}else if(n4.length)w4=n4(z2),p1.current=!1;else if(w4=n4(),!w4){L2();return}g2(w4)}},a2=N.type,D2=N.children,o4=N.prefixCls,N2=N.buttonProps;return i1.createElement(L3.Z,(0,G.Z)({},(0,s4.n)(a2),{onClick:Q1,loading:A2,prefixCls:o4},N2,{ref:A1}),D2)},a3=Q4,p3=J(33603),y3=J(54549),R4=J(85133),C4=J(1413),P4=J(15105);function N1(){var Z=(0,C4.Z)({},r4);return Z.useId}var $=0;function K(){}function b1(Z){var N=i1.useState("ssr-id"),p1=(0,$1.Z)(N,2),A1=p1[0],V1=p1[1],Z1=N1(),A2=Z1?.();return i1.useEffect(function(){if(!Z1){var K1=$;$+=1,V1("rc_unique_".concat(K1))}},[]),Z||A2||A1}var e2=J(94999),G2=`accept acceptCharset accessKey action allowFullScreen allowTransparency
    alt async autoComplete autoFocus autoPlay capture cellPadding cellSpacing challenge
    charSet checked classID className colSpan cols content contentEditable contextMenu
    controls coords crossOrigin data dateTime default defer dir disabled download draggable
    encType form formAction formEncType formMethod formNoValidate formTarget frameBorder
    headers height hidden high href hrefLang htmlFor httpEquiv icon id inputMode integrity
    is keyParams keyType kind label lang list loop low manifest marginHeight marginWidth max maxLength media
    mediaGroup method min minLength multiple muted name noValidate nonce open
    optimum pattern placeholder poster preload radioGroup readOnly rel required
    reversed role rowSpan rows sandbox scope scoped scrolling seamless selected
    shape size sizes span spellCheck src srcDoc srcLang srcSet start step style
    summary tabIndex target title type useMap value width wmode wrap`,R2=`onCopy onCut onPaste onCompositionEnd onCompositionStart onCompositionUpdate onKeyDown
    onKeyPress onKeyUp onFocus onBlur onChange onInput onSubmit onClick onContextMenu onDoubleClick
    onDrag onDragEnd onDragEnter onDragExit onDragLeave onDragOver onDragStart onDrop onMouseDown
    onMouseEnter onMouseLeave onMouseMove onMouseOut onMouseOver onMouseUp onSelect onTouchCancel
    onTouchEnd onTouchMove onTouchStart onScroll onWheel onAbort onCanPlay onCanPlayThrough
    onDurationChange onEmptied onEncrypted onEnded onError onLoadedData onLoadedMetadata
    onLoadStart onPause onPlay onPlaying onProgress onRateChange onSeeked onSeeking onStalled onSuspend onTimeUpdate onVolumeChange onWaiting onLoad onError`,B4="".concat(G2," ").concat(R2).split(/[\s\n]+/),B3="aria-",Y3="data-";function j3(Z,N){return Z.indexOf(N)===0}function H6(Z){var N=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,p1;N===!1?p1={aria:!0,data:!0,attr:!0}:N===!0?p1={aria:!0}:p1=(0,C4.Z)({},N);var A1={};return Object.keys(Z).forEach(function(V1){(p1.aria&&(V1==="role"||j3(V1,B3))||p1.data&&j3(V1,Y3)||p1.attr&&B4.includes(V1))&&(A1[V1]=Z[V1])}),A1}var u6=J(63441);function e0(Z){var N=Z.prefixCls,p1=Z.style,A1=Z.visible,V1=Z.maskProps,Z1=Z.motionName;return i1.createElement(u6.Z,{key:"mask",visible:A1,motionName:Z1,leavedClassName:"".concat(N,"-mask-hidden")},function(A2){var K1=A2.className,z2=A2.style;return i1.createElement("div",(0,G.Z)({style:(0,C4.Z)((0,C4.Z)({},z2),p1),className:o2()("".concat(N,"-mask"),K1)},V1))})}function n0(Z,N,p1){var A1=N;return!A1&&p1&&(A1="".concat(Z,"-").concat(p1)),A1}function d6(Z,N){var p1=Z["page".concat(N?"Y":"X","Offset")],A1="scroll".concat(N?"Top":"Left");if(typeof p1!="number"){var V1=Z.document;p1=V1.documentElement[A1],typeof p1!="number"&&(p1=V1.body[A1])}return p1}function U6(Z){var N=Z.getBoundingClientRect(),p1={left:N.left,top:N.top},A1=Z.ownerDocument,V1=A1.defaultView||A1.parentWindow;return p1.left+=d6(V1),p1.top+=d6(V1,!0),p1}var I6=i1.memo(function(Z){var N=Z.children;return N},function(Z,N){var p1=N.shouldUpdate;return!p1}),f6={width:0,height:0,overflow:"hidden",outline:"none"},A6=i1.forwardRef(function(Z,N){var p1=Z.prefixCls,A1=Z.className,V1=Z.style,Z1=Z.title,A2=Z.ariaId,K1=Z.footer,z2=Z.closable,L2=Z.closeIcon,g2=Z.onClose,Q1=Z.children,a2=Z.bodyStyle,D2=Z.bodyProps,o4=Z.modalRender,N2=Z.onMouseDown,C2=Z.onMouseUp,V2=Z.holderRef,n4=Z.visible,w4=Z.forceRender,Z2=Z.width,l4=Z.height,h4=(0,i1.useRef)(),Z4=(0,i1.useRef)();i1.useImperativeHandle(N,function(){return{focus:function(){var h3;(h3=h4.current)===null||h3===void 0||h3.focus()},changeActive:function(h3){var s6=document,o6=s6.activeElement;h3&&o6===Z4.current?h4.current.focus():!h3&&o6===h4.current&&Z4.current.focus()}}});var W4={};Z2!==void 0&&(W4.width=Z2),l4!==void 0&&(W4.height=l4);var j4;K1&&(j4=i1.createElement("div",{className:"".concat(p1,"-footer")},K1));var i3;Z1&&(i3=i1.createElement("div",{className:"".concat(p1,"-header")},i1.createElement("div",{className:"".concat(p1,"-title"),id:A2},Z1)));var J4;z2&&(J4=i1.createElement("button",{type:"button",onClick:g2,"aria-label":"Close",className:"".concat(p1,"-close")},L2||i1.createElement("span",{className:"".concat(p1,"-close-x")})));var J3=i1.createElement("div",{className:"".concat(p1,"-content")},J4,i3,i1.createElement("div",(0,G.Z)({className:"".concat(p1,"-body"),style:a2},D2),Q1),j4);return i1.createElement("div",{key:"dialog-element",role:"dialog","aria-labelledby":Z1?A2:null,"aria-modal":"true",ref:V2,style:(0,C4.Z)((0,C4.Z)({},V1),W4),className:o2()(p1,A1),onMouseDown:N2,onMouseUp:C2},i1.createElement("div",{tabIndex:0,ref:h4,style:f6,"aria-hidden":"true"}),i1.createElement(I6,{shouldUpdate:n4||w4},o4?o4(J3):J3),i1.createElement("div",{tabIndex:0,ref:Z4,style:f6,"aria-hidden":"true"}))}),V6=A6,P3=i1.forwardRef(function(Z,N){var p1=Z.prefixCls,A1=Z.title,V1=Z.style,Z1=Z.className,A2=Z.visible,K1=Z.forceRender,z2=Z.destroyOnClose,L2=Z.motionName,g2=Z.ariaId,Q1=Z.onVisibleChanged,a2=Z.mousePosition,D2=(0,i1.useRef)(),o4=i1.useState(),N2=(0,$1.Z)(o4,2),C2=N2[0],V2=N2[1],n4={};C2&&(n4.transformOrigin=C2);function w4(){var Z2=U6(D2.current);V2(a2?"".concat(a2.x-Z2.left,"px ").concat(a2.y-Z2.top,"px"):"")}return i1.createElement(u6.Z,{visible:A2,onVisibleChanged:Q1,onAppearPrepare:w4,onEnterPrepare:w4,forceRender:K1,motionName:L2,removeOnLeave:z2,ref:D2},function(Z2,l4){var h4=Z2.className,Z4=Z2.style;return i1.createElement(V6,(0,G.Z)({},Z,{ref:N,title:A1,ariaId:g2,prefixCls:p1,holderRef:l4,style:(0,C4.Z)((0,C4.Z)((0,C4.Z)({},Z4),V1),n4),className:o2()(Z1,h4)}))})});P3.displayName="Content";var a0=P3;function Z6(Z){var N=Z.prefixCls,p1=N===void 0?"rc-dialog":N,A1=Z.zIndex,V1=Z.visible,Z1=V1===void 0?!1:V1,A2=Z.keyboard,K1=A2===void 0?!0:A2,z2=Z.focusTriggerAfterClose,L2=z2===void 0?!0:z2,g2=Z.scrollLocker,Q1=Z.wrapStyle,a2=Z.wrapClassName,D2=Z.wrapProps,o4=Z.onClose,N2=Z.afterClose,C2=Z.transitionName,V2=Z.animation,n4=Z.closable,w4=n4===void 0?!0:n4,Z2=Z.mask,l4=Z2===void 0?!0:Z2,h4=Z.maskTransitionName,Z4=Z.maskAnimation,W4=Z.maskClosable,j4=W4===void 0?!0:W4,i3=Z.maskStyle,J4=Z.maskProps,J3=Z.rootClassName,b4=(0,i1.useRef)(),h3=(0,i1.useRef)(),s6=(0,i1.useRef)(),o6=i1.useState(Z1),g6=(0,$1.Z)(o6,2),K3=g6[0],E6=g6[1],W6=b1();function v0(F){if(F){if(!(0,e2.Z)(h3.current,document.activeElement)){var R;b4.current=document.activeElement,(R=s6.current)===null||R===void 0||R.focus()}}else{if(E6(!1),l4&&b4.current&&L2){try{b4.current.focus({preventScroll:!0})}catch{}b4.current=null}K3&&N2?.()}}function c0(F){o4?.(F)}var r0=(0,i1.useRef)(!1),p6=(0,i1.useRef)(),q6=function(){clearTimeout(p6.current),r0.current=!0},m6=function(){p6.current=setTimeout(function(){r0.current=!1})},z6=null;j4&&(z6=function(R){r0.current?r0.current=!1:h3.current===R.target&&c0(R)});function T(F){if(K1&&F.keyCode===P4.Z.ESC){F.stopPropagation(),c0(F);return}Z1&&F.keyCode===P4.Z.TAB&&s6.current.changeActive(!F.shiftKey)}return(0,i1.useEffect)(function(){return Z1&&E6(!0),function(){}},[Z1]),(0,i1.useEffect)(function(){return function(){clearTimeout(p6.current)}},[]),(0,i1.useEffect)(function(){return K3?(g2?.lock(),g2?.unLock):function(){}},[K3,g2]),i1.createElement("div",(0,G.Z)({className:o2()("".concat(p1,"-root"),J3)},H6(Z,{data:!0})),i1.createElement(e0,{prefixCls:p1,visible:l4&&Z1,motionName:n0(p1,h4,Z4),style:(0,C4.Z)({zIndex:A1},i3),maskProps:J4}),i1.createElement("div",(0,G.Z)({tabIndex:-1,onKeyDown:T,className:o2()("".concat(p1,"-wrap"),a2),ref:h3,onClick:z6,style:(0,C4.Z)((0,C4.Z)({zIndex:A1},Q1),{},{display:K3?null:"none"})},D2),i1.createElement(a0,(0,G.Z)({},Z,{onMouseDown:q6,onMouseUp:m6,ref:s6,closable:w4,ariaId:W6,prefixCls:p1,visible:Z1,onClose:c0,onVisibleChanged:v0,motionName:n0(p1,C2,V2)}))))}var m3=function(N){var p1=N.visible,A1=N.getContainer,V1=N.forceRender,Z1=N.destroyOnClose,A2=Z1===void 0?!1:Z1,K1=N.afterClose,z2=i1.useState(p1),L2=(0,$1.Z)(z2,2),g2=L2[0],Q1=L2[1];return i1.useEffect(function(){p1&&Q1(!0)},[p1]),A1===!1?i1.createElement(Z6,(0,G.Z)({},N,{getOpenCount:function(){return 2}})):!V1&&A2&&!g2?null:i1.createElement(R4.Z,{visible:p1,forceRender:V1,getContainer:A1},function(a2){return i1.createElement(Z6,(0,G.Z)({},N,{destroyOnClose:A2,afterClose:function(){K1?.(),Q1(!1)}},a2))})};m3.displayName="Dialog";var z3=m3,F6=z3,B6=J(53124),v6=J(65223),i0=J(42051),H3=J(31808),T3=J(83008),q=function(Z,N){var p1={};for(var A1 in Z)Object.prototype.hasOwnProperty.call(Z,A1)&&N.indexOf(A1)<0&&(p1[A1]=Z[A1]);if(Z!=null&&typeof Object.getOwnPropertySymbols=="function")for(var V1=0,A1=Object.getOwnPropertySymbols(Z);V1<A1.length;V1++)N.indexOf(A1[V1])<0&&Object.prototype.propertyIsEnumerable.call(Z,A1[V1])&&(p1[A1[V1]]=Z[A1[V1]]);return p1},f1,l1=function(N){f1={x:N.pageX,y:N.pageY},setTimeout(function(){f1=null},100)};(0,H3.jD)()&&document.documentElement.addEventListener("click",l1,!0);var n2=function(N){var p1,A1=i1.useContext(B6.E_),V1=A1.getPopupContainer,Z1=A1.getPrefixCls,A2=A1.direction,K1=function(i3){var J4=N.onCancel;J4?.(i3)},z2=function(i3){var J4=N.onOk;J4?.(i3)},L2=function(i3){var J4=N.okText,J3=N.okType,b4=N.cancelText,h3=N.confirmLoading;return i1.createElement(i1.Fragment,null,i1.createElement(L3.Z,(0,G.Z)({onClick:K1},N.cancelButtonProps),b4||i3.cancelText),i1.createElement(L3.Z,(0,G.Z)({},(0,s4.n)(J3),{loading:h3,onClick:z2},N.okButtonProps),J4||i3.okText))},g2=N.prefixCls,Q1=N.footer,a2=N.visible,D2=N.wrapClassName,o4=N.centered,N2=N.getContainer,C2=N.closeIcon,V2=N.focusTriggerAfterClose,n4=V2===void 0?!0:V2,w4=q(N,["prefixCls","footer","visible","wrapClassName","centered","getContainer","closeIcon","focusTriggerAfterClose"]),Z2=Z1("modal",g2),l4=Z1(),h4=i1.createElement(i0.Z,{componentName:"Modal",defaultLocale:(0,T3.A)()},L2),Z4=i1.createElement("span",{className:"".concat(Z2,"-close-x")},C2||i1.createElement(y3.Z,{className:"".concat(Z2,"-close-icon")})),W4=o2()(D2,(p1={},(0,E1.Z)(p1,"".concat(Z2,"-centered"),!!o4),(0,E1.Z)(p1,"".concat(Z2,"-wrap-rtl"),A2==="rtl"),p1));return i1.createElement(v6.Ux,{status:!0,override:!0},i1.createElement(F6,(0,G.Z)({},w4,{getContainer:N2===void 0?V1:N2,prefixCls:Z2,wrapClassName:W4,footer:Q1===void 0?h4:Q1,visible:a2,mousePosition:f1,onClose:K1,closeIcon:Z4,focusTriggerAfterClose:n4,transitionName:(0,p3.mL)(l4,"zoom",N.transitionName),maskTransitionName:(0,p3.mL)(l4,"fade",N.maskTransitionName)})))};n2.defaultProps={width:520,confirmLoading:!1,visible:!1,okType:"primary"};var r2=n2,s2=function(N){var p1=N.icon,A1=N.onCancel,V1=N.onOk,Z1=N.close,A2=N.zIndex,K1=N.afterClose,z2=N.visible,L2=N.keyboard,g2=N.centered,Q1=N.getContainer,a2=N.maskStyle,D2=N.okText,o4=N.okButtonProps,N2=N.cancelText,C2=N.cancelButtonProps,V2=N.direction,n4=N.prefixCls,w4=N.wrapClassName,Z2=N.rootPrefixCls,l4=N.iconPrefixCls,h4=N.bodyStyle,Z4=N.closable,W4=Z4===void 0?!1:Z4,j4=N.closeIcon,i3=N.modalRender,J4=N.focusTriggerAfterClose,J3=N.okType||"primary",b4="".concat(n4,"-confirm"),h3="okCancel"in N?N.okCancel:!0,s6=N.width||416,o6=N.style||{},g6=N.mask===void 0?!0:N.mask,K3=N.maskClosable===void 0?!1:N.maskClosable,E6=N.autoFocusButton===null?!1:N.autoFocusButton||"ok",W6=o2()(b4,"".concat(b4,"-").concat(N.type),(0,E1.Z)({},"".concat(b4,"-rtl"),V2==="rtl"),N.className),v0=h3&&i1.createElement(a3,{actionFn:A1,close:Z1,autoFocus:E6==="cancel",buttonProps:C2,prefixCls:"".concat(Z2,"-btn")},N2);return i1.createElement(V.ZP,{prefixCls:Z2,iconPrefixCls:l4,direction:V2},i1.createElement(r2,{prefixCls:n4,className:W6,wrapClassName:o2()((0,E1.Z)({},"".concat(b4,"-centered"),!!N.centered),w4),onCancel:function(){return Z1({triggerCancel:!0})},visible:z2,title:"",footer:"",transitionName:(0,p3.mL)(Z2,"zoom",N.transitionName),maskTransitionName:(0,p3.mL)(Z2,"fade",N.maskTransitionName),mask:g6,maskClosable:K3,maskStyle:a2,style:o6,bodyStyle:h4,width:s6,zIndex:A2,afterClose:K1,keyboard:L2,centered:g2,getContainer:Q1,closable:W4,closeIcon:j4,modalRender:i3,focusTriggerAfterClose:J4},i1.createElement("div",{className:"".concat(b4,"-body-wrapper")},i1.createElement("div",{className:"".concat(b4,"-body")},p1,N.title===void 0?null:i1.createElement("span",{className:"".concat(b4,"-title")},N.title),i1.createElement("div",{className:"".concat(b4,"-content")},N.content)),i1.createElement("div",{className:"".concat(b4,"-btns")},v0,i1.createElement(a3,{type:J3,actionFn:V1,close:Z1,autoFocus:E6==="ok",buttonProps:o4,prefixCls:"".concat(Z2,"-btn")},D2)))))},P2=s2,h2=[],K2=h2,A4=function(Z,N){var p1={};for(var A1 in Z)Object.prototype.hasOwnProperty.call(Z,A1)&&N.indexOf(A1)<0&&(p1[A1]=Z[A1]);if(Z!=null&&typeof Object.getOwnPropertySymbols=="function")for(var V1=0,A1=Object.getOwnPropertySymbols(Z);V1<A1.length;V1++)N.indexOf(A1[V1])<0&&Object.prototype.propertyIsEnumerable.call(Z,A1[V1])&&(p1[A1[V1]]=Z[A1[V1]]);return p1},Q2="";function x4(){return Q2}function u2(Z){var N=document.createDocumentFragment(),p1=(0,G.Z)((0,G.Z)({},Z),{close:Z1,visible:!0});function A1(){for(var K1=arguments.length,z2=new Array(K1),L2=0;L2<K1;L2++)z2[L2]=arguments[L2];var g2=z2.some(function(D2){return D2&&D2.triggerCancel});Z.onCancel&&g2&&Z.onCancel.apply(Z,[function(){}].concat((0,m1.Z)(z2.slice(1))));for(var Q1=0;Q1<K2.length;Q1++){var a2=K2[Q1];if(a2===Z1){K2.splice(Q1,1);break}}(0,z4.v)(N)}function V1(K1){var z2=K1.okText,L2=K1.cancelText,g2=K1.prefixCls,Q1=A4(K1,["okText","cancelText","prefixCls"]);setTimeout(function(){var a2=(0,T3.A)(),D2=(0,V.w6)(),o4=D2.getPrefixCls,N2=D2.getIconPrefixCls,C2=o4(void 0,x4()),V2=g2||"".concat(C2,"-modal"),n4=N2();(0,z4.s)(i1.createElement(P2,(0,G.Z)({},Q1,{prefixCls:V2,rootPrefixCls:C2,iconPrefixCls:n4,okText:z2||(Q1.okCancel?a2.okText:a2.justOkText),cancelText:L2||a2.cancelText})),N)})}function Z1(){for(var K1=this,z2=arguments.length,L2=new Array(z2),g2=0;g2<z2;g2++)L2[g2]=arguments[g2];p1=(0,G.Z)((0,G.Z)({},p1),{visible:!1,afterClose:function(){typeof Z.afterClose=="function"&&Z.afterClose(),A1.apply(K1,L2)}}),V1(p1)}function A2(K1){typeof K1=="function"?p1=K1(p1):p1=(0,G.Z)((0,G.Z)({},p1),K1),V1(p1)}return V1(p1),K2.push(Z1),{destroy:Z1,update:A2}}function l3(Z){return(0,G.Z)((0,G.Z)({icon:i1.createElement(X1.Z,null),okCancel:!1},Z),{type:"warning"})}function U(Z){return(0,G.Z)((0,G.Z)({icon:i1.createElement(_1.Z,null),okCancel:!1},Z),{type:"info"})}function k1(Z){return(0,G.Z)((0,G.Z)({icon:i1.createElement(M2.Z,null),okCancel:!1},Z),{type:"success"})}function e4(Z){return(0,G.Z)((0,G.Z)({icon:i1.createElement(E2.Z,null),okCancel:!1},Z),{type:"error"})}function U2(Z){return(0,G.Z)((0,G.Z)({icon:i1.createElement(X1.Z,null),okCancel:!0},Z),{type:"confirm"})}function D4(Z){var N=Z.rootPrefixCls;Q2=N}function D3(){var Z=i1.useState([]),N=(0,$1.Z)(Z,2),p1=N[0],A1=N[1],V1=i1.useCallback(function(Z1){return A1(function(A2){return[].concat((0,m1.Z)(A2),[Z1])}),function(){A1(function(A2){return A2.filter(function(K1){return K1!==Z1})})}},[]);return[p1,V1]}var N3=J(66805),O3=function(N,p1){var A1=N.afterClose,V1=N.config,Z1=i1.useState(!0),A2=(0,$1.Z)(Z1,2),K1=A2[0],z2=A2[1],L2=i1.useState(V1),g2=(0,$1.Z)(L2,2),Q1=g2[0],a2=g2[1],D2=i1.useContext(B6.E_),o4=D2.direction,N2=D2.getPrefixCls,C2=N2("modal"),V2=N2(),n4=function(){z2(!1);for(var Z2=arguments.length,l4=new Array(Z2),h4=0;h4<Z2;h4++)l4[h4]=arguments[h4];var Z4=l4.some(function(W4){return W4&&W4.triggerCancel});Q1.onCancel&&Z4&&Q1.onCancel.apply(Q1,[function(){}].concat((0,m1.Z)(l4.slice(1))))};return i1.useImperativeHandle(p1,function(){return{destroy:n4,update:function(Z2){a2(function(l4){return(0,G.Z)((0,G.Z)({},l4),Z2)})}}}),i1.createElement(i0.Z,{componentName:"Modal",defaultLocale:N3.Z.Modal},function(w4){return i1.createElement(P2,(0,G.Z)({prefixCls:C2,rootPrefixCls:V2},Q1,{close:n4,visible:K1,afterClose:A1,okText:Q1.okText||(Q1.okCancel?w4.okText:w4.justOkText),direction:o4,cancelText:Q1.cancelText||w4.cancelText}))})},M4=i1.forwardRef(O3),X2=0,E3=i1.memo(i1.forwardRef(function(Z,N){var p1=D3(),A1=(0,$1.Z)(p1,2),V1=A1[0],Z1=A1[1];return i1.useImperativeHandle(N,function(){return{patchElement:Z1}},[]),i1.createElement(i1.Fragment,null,V1)}));function $2(){var Z=i1.useRef(null),N=i1.useState([]),p1=(0,$1.Z)(N,2),A1=p1[0],V1=p1[1];i1.useEffect(function(){if(A1.length){var K1=(0,m1.Z)(A1);K1.forEach(function(z2){z2()}),V1([])}},[A1]);var Z1=i1.useCallback(function(K1){return function(L2){var g2;X2+=1;var Q1=i1.createRef(),a2,D2=i1.createElement(M4,{key:"modal-".concat(X2),config:K1(L2),ref:Q1,afterClose:function(){a2()}});return a2=(g2=Z.current)===null||g2===void 0?void 0:g2.patchElement(D2),{destroy:function(){function N2(){var C2;(C2=Q1.current)===null||C2===void 0||C2.destroy()}Q1.current?N2():V1(function(C2){return[].concat((0,m1.Z)(C2),[N2])})},update:function(N2){function C2(){var V2;(V2=Q1.current)===null||V2===void 0||V2.update(N2)}Q1.current?C2():V1(function(V2){return[].concat((0,m1.Z)(V2),[C2])})}}}},[]),A2=i1.useMemo(function(){return{info:Z1(U),success:Z1(k1),error:Z1(e4),warning:Z1(l3),confirm:Z1(U2)}},[]);return[A2,i1.createElement(E3,{ref:Z})]}function r6(Z){return u2(l3(Z))}var V4=r2;V4.useModal=$2,V4.info=function(N){return u2(U(N))},V4.success=function(N){return u2(k1(N))},V4.error=function(N){return u2(e4(N))},V4.warning=r6,V4.warn=r6,V4.confirm=function(N){return u2(U2(N))},V4.destroyAll=function(){for(;K2.length;){var N=K2.pop();N&&N()}},V4.config=D4;var T6=V4},8623:function(t0,n3,J){J.d(n3,{Z:function(){return z6}});var m1=J(87462),G=J(67294),M2=J(4942),E2=J(71002),X1=J(29439),_1=J(79508),z4=J(1413),i1={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M832 64H296c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h496v688c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V96c0-17.7-14.3-32-32-32zM704 192H192c-17.7 0-32 14.3-32 32v530.7c0 8.5 3.4 16.6 9.4 22.6l173.3 173.3c2.2 2.2 4.7 4 7.4 5.5v1.9h4.2c3.5 1.3 7.2 2 11 2H704c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32zM350 856.2L263.9 770H350v86.2zM664 888H414V746c0-22.1-17.9-40-40-40H232V264h432v624z"}}]},name:"copy",theme:"outlined"},r4=i1,V=J(27029),E1=function(F,R){return G.createElement(V.Z,(0,z4.Z)((0,z4.Z)({},F),{},{ref:R,icon:r4}))};E1.displayName="CopyOutlined";var t2=G.forwardRef(E1),o2={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 000-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 009.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z"}}]},name:"edit",theme:"outlined"},$1=o2,k2=function(F,R){return G.createElement(V.Z,(0,z4.Z)((0,z4.Z)({},F),{},{ref:R,icon:$1}))};k2.displayName="EditOutlined";var L3=G.forwardRef(k2),s4=J(94184),c4=J.n(s4),Q4=J(20640),a3=J.n(Q4),p3=J(48717),y3=J(50344),R4=J(8410),C4=J(21770),P4=J(98423),N1=J(42550),$=J(53124),K=J(42051),b1=J(15105),e2=function(T,F){var R={};for(var B in T)Object.prototype.hasOwnProperty.call(T,B)&&F.indexOf(B)<0&&(R[B]=T[B]);if(T!=null&&typeof Object.getOwnPropertySymbols=="function")for(var A=0,B=Object.getOwnPropertySymbols(T);A<B.length;A++)F.indexOf(B[A])<0&&Object.prototype.propertyIsEnumerable.call(T,B[A])&&(R[B[A]]=T[B[A]]);return R},G2={border:0,background:"transparent",padding:0,lineHeight:"inherit",display:"inline-block"},R2=G.forwardRef(function(T,F){var R=function(w2){var x2=w2.keyCode;x2===b1.Z.ENTER&&w2.preventDefault()},B=function(w2){var x2=w2.keyCode,u4=T.onClick;x2===b1.Z.ENTER&&u4&&u4()},A=T.style,x1=T.noStyle,T1=T.disabled,L1=e2(T,["style","noStyle","disabled"]),C1={};return x1||(C1=(0,m1.Z)({},G2)),T1&&(C1.pointerEvents="none"),C1=(0,m1.Z)((0,m1.Z)({},C1),A),G.createElement("div",(0,m1.Z)({role:"button",tabIndex:0,ref:F},L1,{onKeyDown:R,onKeyUp:B,style:C1}))}),B4=R2,B3=J(98924),Y3=function(F){if((0,B3.Z)()&&window.document.documentElement){var R=Array.isArray(F)?F:[F],B=window.document.documentElement;return R.some(function(A){return A in B.style})}return!1},j3=function(F,R){if(!Y3(F))return!1;var B=document.createElement("div"),A=B.style[F];return B.style[F]=R,B.style[F]!==A};function H6(T,F){return!Array.isArray(T)&&F!==void 0?j3(T,F):Y3(T)}var u6=J(45777),e0={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M864 170h-60c-4.4 0-8 3.6-8 8v518H310v-73c0-6.7-7.8-10.5-13-6.3l-141.9 112a8 8 0 000 12.6l141.9 112c5.3 4.2 13 .4 13-6.3v-75h498c35.3 0 64-28.7 64-64V178c0-4.4-3.6-8-8-8z"}}]},name:"enter",theme:"outlined"},n0=e0,d6=function(F,R){return G.createElement(V.Z,(0,z4.Z)((0,z4.Z)({},F),{},{ref:R,icon:n0}))};d6.displayName="EnterOutlined";var U6=G.forwardRef(d6),I6=J(93433),f6=J(15671),A6=J(43144),V6=J(79340),P3=J(98557),a0=`
  min-height:0 !important;
  max-height:none !important;
  height:0 !important;
  visibility:hidden !important;
  overflow:hidden !important;
  position:absolute !important;
  z-index:-1000 !important;
  top:0 !important;
  right:0 !important
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,g9=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class N0 extends _t{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=v9,this.fragmentShader=g9,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&(t.attributes!==void 0&&console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."),this.setValues(t))}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Lt(t.uniforms),this.uniformsGroups=d9(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const r=this.uniforms[i].value;r&&r.isTexture?e.uniforms[i]={type:"t",value:r.toJSON(t).uuid}:r&&r.isColor?e.uniforms[i]={type:"c",value:r.getHex()}:r&&r.isVector2?e.uniforms[i]={type:"v2",value:r.toArray()}:r&&r.isVector3?e.uniforms[i]={type:"v3",value:r.toArray()}:r&&r.isVector4?e.uniforms[i]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?e.uniforms[i]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?e.uniforms[i]={type:"m4",value:r.toArray()}:e.uniforms[i]={value:r}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader;const a={};for(const i in this.extensions)this.extensions[i]===!0&&(a[i]=!0);return Object.keys(a).length>0&&(e.extensions=a),e}}class ce extends A3{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new O2,this.projectionMatrix=new O2,this.projectionMatrixInverse=new O2}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(-e[8],-e[9],-e[10]).normalize()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class R3 extends ce{constructor(t=50,e=1,a=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=a,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=g0*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Y6*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return g0*2*Math.atan(Math.tan(Y6*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,a,i,c,r){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=a,this.view.offsetY=i,this.view.width=c,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Y6*.5*this.fov)/this.zoom,a=2*e,i=this.aspect*a,c=-.5*i;const r=this.view;if(this.view!==null&&this.view.enabled){const l=r.fullWidth,h=r.fullHeight;c+=r.offsetX*i/l,e-=r.offsetY*a/h,i*=r.width/l,a*=r.height/h}const s=this.filmOffset;s!==0&&(c+=t*s/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+i,e,e-a,t,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Ht=90,It=1;class p9 extends A3{constructor(t,e,a){if(super(),this.type="CubeCamera",a.isWebGLCubeRenderTarget!==!0){console.error("THREE.CubeCamera: The constructor now expects an instance of WebGLCubeRenderTarget as third parameter.");return}this.renderTarget=a;const i=new R3(Ht,It,t,e);i.layers=this.layers,i.up.set(0,-1,0),i.lookAt(new S(1,0,0)),this.add(i);const c=new R3(Ht,It,t,e);c.layers=this.layers,c.up.set(0,-1,0),c.lookAt(new S(-1,0,0)),this.add(c);const r=new R3(Ht,It,t,e);r.layers=this.layers,r.up.set(0,0,1),r.lookAt(new S(0,1,0)),this.add(r);const s=new R3(Ht,It,t,e);s.layers=this.layers,s.up.set(0,0,-1),s.lookAt(new S(0,-1,0)),this.add(s);const l=new R3(Ht,It,t,e);l.layers=this.layers,l.up.set(0,-1,0),l.lookAt(new S(0,0,1)),this.add(l);const h=new R3(Ht,It,t,e);h.layers=this.layers,h.up.set(0,-1,0),h.lookAt(new S(0,0,-1)),this.add(h)}update(t,e){this.parent===null&&this.updateMatrixWorld();const a=this.renderTarget,[i,c,r,s,l,h]=this.children,u=t.getRenderTarget(),d=t.toneMapping,f=t.xr.enabled;t.toneMapping=m3,t.xr.enabled=!1;const v=a.texture.generateMipmaps;a.texture.generateMipmaps=!1,t.setRenderTarget(a,0),t.render(e,i),t.setRenderTarget(a,1),t.render(e,c),t.setRenderTarget(a,2),t.render(e,r),t.setRenderTarget(a,3),t.render(e,s),t.setRenderTarget(a,4),t.render(e,l),a.texture.generateMipmaps=v,t.setRenderTarget(a,5),t.render(e,h),t.setRenderTarget(u),t.toneMapping=d,t.xr.enabled=f,a.texture.needsPMREMUpdate=!0}}class W8 extends I2{constructor(t,e,a,i,c,r,s,l,h,u){t=t!==void 0?t:[],e=e!==void 0?e:T3,super(t,e,a,i,c,r,s,l,h,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class m9 extends F2{constructor(t,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const a={width:t,height:t,depth:1},i=[a,a,a,a,a,a];this.texture=new W8(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:u2}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.encoding=e.encoding,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const a={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Q0(5,5,5),c=new N0({name:"CubemapFromEquirect",uniforms:Lt(a.uniforms),vertexShader:a.vertexShader,fragmentShader:a.fragmentShader,side:o2,blending:s4});c.uniforms.tEquirect.value=e;const r=new S6(i,c),s=e.minFilter;return e.minFilter===k1&&(e.minFilter=u2),new p9(1,10,this).update(t,r),e.minFilter=s,r.geometry.dispose(),r.material.dispose(),this}clear(t,e,a,i){const c=t.getRenderTarget();for(let r=0;r<6;r++)t.setRenderTarget(this,r),t.clear(e,a,i);t.setRenderTarget(c)}}const re=new S,z9=new S,x9=new q3;class tt{constructor(t=new S(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,a,i){return this.normal.set(t,e,a),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,a){const i=re.subVectors(a,e).cross(z9.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(this.normal).multiplyScalar(-this.distanceToPoint(t)).add(t)}intersectLine(t,e){const a=t.delta(re),i=this.normal.dot(a);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const c=-(t.start.dot(this.normal)+this.constant)/i;return c<0||c>1?null:e.copy(a).multiplyScalar(c).add(t.start)}intersectsLine(t){const e=this.distanceToPoint(t.start),a=this.distanceToPoint(t.end);return e<0&&a>0||a<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const a=e||x9.getNormalMatrix(t),i=this.coplanarPoint(re).applyMatrix4(t),c=this.normal.applyMatrix3(a).normalize();return this.constant=-i.dot(c),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const At=new xt,q8=new S;class se{constructor(t=new tt,e=new tt,a=new tt,i=new tt,c=new tt,r=new tt){this.planes=[t,e,a,i,c,r]}set(t,e,a,i,c,r){const s=this.planes;return s[0].copy(t),s[1].copy(e),s[2].copy(a),s[3].copy(i),s[4].copy(c),s[5].copy(r),this}copy(t){const e=this.planes;for(let a=0;a<6;a++)e[a].copy(t.planes[a]);return this}setFromProjectionMatrix(t){const e=this.planes,a=t.elements,i=a[0],c=a[1],r=a[2],s=a[3],l=a[4],h=a[5],u=a[6],d=a[7],f=a[8],v=a[9],m=a[10],g=a[11],p=a[12],x=a[13],z=a[14],y=a[15];return e[0].setComponents(s-i,d-l,g-f,y-p).normalize(),e[1].setComponents(s+i,d+l,g+f,y+p).normalize(),e[2].setComponents(s+c,d+h,g+v,y+x).normalize(),e[3].setComponents(s-c,d-h,g-v,y-x).normalize(),e[4].setComponents(s-r,d-u,g-m,y-z).normalize(),e[5].setComponents(s+r,d+u,g+m,y+z).normalize(),this}intersectsObject(t){const e=t.geometry;return e.boundingSphere===null&&e.computeBoundingSphere(),At.copy(e.boundingSphere).applyMatrix4(t.matrixWorld),this.intersectsSphere(At)}intersectsSprite(t){return At.center.set(0,0,0),At.radius=.7071067811865476,At.applyMatrix4(t.matrixWorld),this.intersectsSphere(At)}intersectsSphere(t){const e=this.planes,a=t.center,i=-t.radius;for(let c=0;c<6;c++)if(e[c].distanceToPoint(a)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let a=0;a<6;a++){const i=e[a];if(q8.x=i.normal.x>0?t.max.x:t.min.x,q8.y=i.normal.y>0?t.max.y:t.min.y,q8.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(q8)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let a=0;a<6;a++)if(e[a].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function o7(){let o=null,t=!1,e=null,a=null;function i(c,r){e(c,r),a=o.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(a=o.requestAnimationFrame(i),t=!0)},stop:function(){o.cancelAnimationFrame(a),t=!1},setAnimationLoop:function(c){e=c},setContext:function(c){o=c}}}function M9(o,t){const e=t.isWebGL2,a=new WeakMap;function i(h,u){const d=h.array,f=h.usage,v=o.createBuffer();o.bindBuffer(u,v),o.bufferData(u,d,f),h.onUploadCallback();let m;if(d instanceof Float32Array)m=5126;else if(d instanceof Uint16Array)if(h.isFloat16BufferAttribute)if(e)m=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else m=5123;else if(d instanceof Int16Array)m=5122;else if(d instanceof Uint32Array)m=5125;else if(d instanceof Int32Array)m=5124;else if(d instanceof Int8Array)m=5120;else if(d instanceof Uint8Array)m=5121;else if(d instanceof Uint8ClampedArray)m=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:v,type:m,bytesPerElement:d.BYTES_PER_ELEMENT,version:h.version}}function c(h,u,d){const f=u.array,v=u.updateRange;o.bindBuffer(d,h),v.count===-1?o.bufferSubData(d,0,f):(e?o.bufferSubData(d,v.offset*f.BYTES_PER_ELEMENT,f,v.offset,v.count):o.bufferSubData(d,v.offset*f.BYTES_PER_ELEMENT,f.subarray(v.offset,v.offset+v.count)),v.count=-1)}function r(h){return h.isInterleavedBufferAttribute&&(h=h.data),a.get(h)}function s(h){h.isInterleavedBufferAttribute&&(h=h.data);const u=a.get(h);u&&(o.deleteBuffer(u.buffer),a.delete(h))}function l(h,u){if(h.isGLBufferAttribute){const f=a.get(h);(!f||f.version<h.version)&&a.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}h.isInterleavedBufferAttribute&&(h=h.data);const d=a.get(h);d===void 0?a.set(h,i(h,u)):d.version<h.version&&(c(d.buffer,h,u),d.version=h.version)}return{get:r,remove:s,update:l}}class a8 extends Y2{constructor(t=1,e=1,a=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:a,heightSegments:i};const c=t/2,r=e/2,s=Math.floor(a),l=Math.floor(i),h=s+1,u=l+1,d=t/s,f=e/l,v=[],m=[],g=[],p=[];for(let x=0;x<u;x++){const z=x*f-r;for(let y=0;y<h;y++){const M=y*d-c;m.push(M,-z,0),g.push(0,0,1),p.push(y/s),p.push(1-x/l)}}for(let x=0;x<l;x++)for(let z=0;z<s;z++){const y=z+h*x,M=z+h*(x+1),C=z+1+h*(x+1),b=z+1+h*x;v.push(y,M,b),v.push(M,C,b)}this.setIndex(v),this.setAttribute("position",new j1(m,3)),this.setAttribute("normal",new j1(g,3)),this.setAttribute("uv",new j1(p,2))}static fromJSON(t){return new a8(t.width,t.height,t.widthSegments,t.heightSegments)}}var w9=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,y9=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,C9=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,_9=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,S9=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,b9=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,L9="vec3 transformed = vec3( position );",H9=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,I9=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
#ifdef USE_IRIDESCENCE
	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif`,A9=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,V9=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,F9=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,B9=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,T9=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,E9=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,G9=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,R9=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,P9=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,D9=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,N9=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,O9=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define r0 1.0
	#define v0 0.339
	#define m0 - 2.0
	#define r1 0.8
	#define v1 0.276
	#define m1 - 1.0
	#define r4 0.4
	#define v4 0.046
	#define m4 2.0
	#define r5 0.305
	#define v5 0.016
	#define m5 3.0
	#define r6 0.21
	#define v6 0.0038
	#define m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= r1 ) {
			mip = ( r0 - roughness ) * ( m1 - m0 ) / ( r0 - r1 ) + m0;
		} else if ( roughness >= r4 ) {
			mip = ( r1 - roughness ) * ( m4 - m1 ) / ( r1 - r4 ) + m1;
		} else if ( roughness >= r5 ) {
			mip = ( r4 - roughness ) * ( m5 - m4 ) / ( r4 - r5 ) + m4;
		} else if ( roughness >= r6 ) {
			mip = ( r5 - roughness ) * ( m6 - m5 ) / ( r5 - r6 ) + m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,k9=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,U9=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Z9=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,W9=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,q9=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,X9="gl_FragColor = linearToOutputTexel( gl_FragColor );",$9=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Y9=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 envColor = textureCubeUV( envMap, reflectVec, 0.0 );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,j9=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,J9=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,K9=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) ||defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Q9=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,ta=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ea=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,na=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,aa=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ia=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		return ( coord.x < 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );
	#endif
}`,ca=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,ra=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,sa=`vec3 diffuse = vec3( 1.0 );
GeometricContext geometry;
geometry.position = mvPosition.xyz;
geometry.normal = normalize( transformedNormal );
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( -mvPosition.xyz );
GeometricContext backGeometry;
backGeometry.position = geometry.position;
backGeometry.normal = -geometry.normal;
backGeometry.viewDir = geometry.viewDir;
vLightFront = vec3( 0.0 );
vIndirectFront = vec3( 0.0 );
#ifdef DOUBLE_SIDED
	vLightBack = vec3( 0.0 );
	vIndirectBack = vec3( 0.0 );
#endif
IncidentLight directLight;
float dotNL;
vec3 directLightColor_Diffuse;
vIndirectFront += getAmbientLightIrradiance( ambientLightColor );
vIndirectFront += getLightProbeIrradiance( lightProbe, geometry.normal );
#ifdef DOUBLE_SIDED
	vIndirectBack += getAmbientLightIrradiance( ambientLightColor );
	vIndirectBack += getLightProbeIrradiance( lightProbe, backGeometry.normal );
#endif
#if NUM_POINT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		getPointLightInfo( pointLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_SPOT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		getSpotLightInfo( spotLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_DIR_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		getDirectionalLightInfo( directionalLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_HEMI_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
		vIndirectFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		#ifdef DOUBLE_SIDED
			vIndirectBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry.normal );
		#endif
	}
	#pragma unroll_loop_end
#endif`,oa=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,la=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,ha=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ua=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon
#define Material_LightProbeLOD( material )	(0)`,da=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,fa=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong
#define Material_LightProbeLOD( material )	(0)`,va=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( ior - 1.0 ) / ( ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,ga=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,pa=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,ma=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,za=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,xa=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ma=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,wa=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,ya=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Ca=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,_a=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Sa=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,ba=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,La=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ha=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ia=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Aa=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Va=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Fa=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Ba=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );
	vec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,Ta=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Ea=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ga=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ra=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Pa=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,Da=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,Na=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,Oa=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,ka=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ua=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Za=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,Wa=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,qa=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Xa=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,$a=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ya=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ja=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ja=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
		bool inFrustum = all( inFrustumVec );
		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );
		bool frustumTest = all( frustumTestVec );
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Ka=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Qa=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias, 0 );
		vSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
#endif`,ti=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,ei=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ni=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,ai=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ii=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,ci=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ri=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,si=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,oi=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,li=`#ifdef USE_TRANSMISSION
	float transmissionAlpha = 1.0;
	float transmissionFactor = transmission;
	float thicknessFactor = thickness;
	#ifdef USE_TRANSMISSIONMAP
		transmissionFactor *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		thicknessFactor *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, roughnessFactor, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, ior, thicknessFactor,
		attenuationColor, attenuationDistance );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, transmissionFactor );
	transmissionAlpha = mix( transmissionAlpha, transmission.a, transmissionFactor );
#endif`,hi=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( attenuationDistance == 0.0 ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,ui=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,di=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,fi=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,vi=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,gi=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,pi=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,mi=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION )
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const t4={alphamap_fragment:w9,alphamap_pars_fragment:y9,alphatest_fragment:C9,alphatest_pars_fragment:_9,aomap_fragment:S9,aomap_pars_fragment:b9,begin_vertex:L9,beginnormal_vertex:H9,bsdfs:I9,iridescence_fragment:A9,bumpmap_pars_fragment:V9,clipping_planes_fragment:F9,clipping_planes_pars_fragment:B9,clipping_planes_pars_vertex:T9,clipping_planes_vertex:E9,color_fragment:G9,color_pars_fragment:R9,color_pars_vertex:P9,color_vertex:D9,common:N9,cube_uv_reflection_fragment:O9,defaultnormal_vertex:k9,displacementmap_pars_vertex:U9,displacementmap_vertex:Z9,emissivemap_fragment:W9,emissivemap_pars_fragment:q9,encodings_fragment:X9,encodings_pars_fragment:$9,envmap_fragment:Y9,envmap_common_pars_fragment:j9,envmap_pars_fragment:J9,envmap_pars_vertex:K9,envmap_physical_pars_fragment:la,envmap_vertex:Q9,fog_vertex:ta,fog_pars_vertex:ea,fog_fragment:na,fog_pars_fragment:aa,gradientmap_pars_fragment:ia,lightmap_fragment:ca,lightmap_pars_fragment:ra,lights_lambert_vertex:sa,lights_pars_begin:oa,lights_toon_fragment:ha,lights_toon_pars_fragment:ua,lights_phong_fragment:da,lights_phong_pars_fragment:fa,lights_physical_fragment:va,lights_physical_pars_fragment:ga,lights_fragment_begin:pa,lights_fragment_maps:ma,lights_fragment_end:za,logdepthbuf_fragment:xa,logdepthbuf_pars_fragment:Ma,logdepthbuf_pars_vertex:wa,logdepthbuf_vertex:ya,map_fragment:Ca,map_pars_fragment:_a,map_particle_fragment:Sa,map_particle_pars_fragment:ba,metalnessmap_fragment:La,metalnessmap_pars_fragment:Ha,morphcolor_vertex:Ia,morphnormal_vertex:Aa,morphtarget_pars_vertex:Va,morphtarget_vertex:Fa,normal_fragment_begin:Ba,normal_fragment_maps:Ta,normal_pars_fragment:Ea,normal_pars_vertex:Ga,normal_vertex:Ra,normalmap_pars_fragment:Pa,clearcoat_normal_fragment_begin:Da,clearcoat_normal_fragment_maps:Na,clearcoat_pars_fragment:Oa,iridescence_pars_fragment:ka,output_fragment:Ua,packing:Za,premultiplied_alpha_fragment:Wa,project_vertex:qa,dithering_fragment:Xa,dithering_pars_fragment:$a,roughnessmap_fragment:Ya,roughnessmap_pars_fragment:ja,shadowmap_pars_fragment:Ja,shadowmap_pars_vertex:Ka,shadowmap_vertex:Qa,shadowmask_pars_fragment:ti,skinbase_vertex:ei,skinning_pars_vertex:ni,skinning_vertex:ai,skinnormal_vertex:ii,specularmap_fragment:ci,specularmap_pars_fragment:ri,tonemapping_fragment:si,tonemapping_pars_fragment:oi,transmission_fragment:li,transmission_pars_fragment:hi,uv_pars_fragment:ui,uv_pars_vertex:di,uv_vertex:fi,uv2_pars_fragment:vi,uv2_pars_vertex:gi,uv2_vertex:pi,worldpos_vertex:mi,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	gl_FragColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		gl_FragColor = vec4( mix( pow( gl_FragColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), gl_FragColor.rgb * 0.0773993808, vec3( lessThanEqual( gl_FragColor.rgb, vec3( 0.04045 ) ) ) ), gl_FragColor.w );
	#endif
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`#include <envmap_common_pars_fragment>
uniform float opacity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	vec3 vReflect = vWorldDirection;
	#include <envmap_fragment>
	gl_FragColor = envColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,depth_vert:`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,depth_frag:`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,distanceRGBA_vert:`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,distanceRGBA_frag:`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,linedashed_vert:`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,linedashed_frag:`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,meshbasic_vert:`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,meshbasic_frag:`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshlambert_vert:`#define LAMBERT
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <bsdfs>
#include <lights_pars_begin>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <lights_lambert_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshlambert_frag:`uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <fog_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <emissivemap_fragment>
	#ifdef DOUBLE_SIDED
		reflectedLight.indirectDiffuse += ( gl_FrontFacing ) ? vIndirectFront : vIndirectBack;
	#else
		reflectedLight.indirectDiffuse += vIndirectFront;
	#endif
	#include <lightmap_fragment>
	reflectedLight.indirectDiffuse *= BRDF_Lambert( diffuseColor.rgb );
	#ifdef DOUBLE_SIDED
		reflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;
	#else
		reflectedLight.directDiffuse = vLightFront;
	#endif
	reflectedLight.directDiffuse *= BRDF_Lambert( diffuseColor.rgb ) * getShadowMask();
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshmatcap_vert:`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,meshmatcap_frag:`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshnormal_vert:`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshphong_frag:`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshphysical_vert:`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,meshphysical_frag:`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshtoon_vert:`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,points_vert:`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,points_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,shadow_vert:`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,sprite_vert:`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sprite_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`},B1={common:{diffuse:{value:new D1(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new q3},uv2Transform:{value:new q3},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new c1(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new D1(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotShadowMap:{value:[]},spotShadowMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new D1(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new q3}},sprite:{diffuse:{value:new D1(16777215)},opacity:{value:1},center:{value:new c1(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new q3}}},h0={basic:{uniforms:$3([B1.common,B1.specularmap,B1.envmap,B1.aomap,B1.lightmap,B1.fog]),vertexShader:t4.meshbasic_vert,fragmentShader:t4.meshbasic_frag},lambert:{uniforms:$3([B1.common,B1.specularmap,B1.envmap,B1.aomap,B1.lightmap,B1.emissivemap,B1.fog,B1.lights,{emissive:{value:new D1(0)}}]),vertexShader:t4.meshlambert_vert,fragmentShader:t4.meshlambert_frag},phong:{uniforms:$3([B1.common,B1.specularmap,B1.envmap,B1.aomap,B1.lightmap,B1.emissivemap,B1.bumpmap,B1.normalmap,B1.displacementmap,B1.fog,B1.lights,{emissive:{value:new D1(0)},specular:{value:new D1(1118481)},shininess:{value:30}}]),vertexShader:t4.meshphong_vert,fragmentShader:t4.meshphong_frag},standard:{uniforms:$3([B1.common,B1.envmap,B1.aomap,B1.lightmap,B1.emissivemap,B1.bumpmap,B1.normalmap,B1.displacementmap,B1.roughnessmap,B1.metalnessmap,B1.fog,B1.lights,{emissive:{value:new D1(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:t4.meshphysical_vert,fragmentShader:t4.meshphysical_frag},toon:{uniforms:$3([B1.common,B1.aomap,B1.lightmap,B1.emissivemap,B1.bumpmap,B1.normalmap,B1.displacementmap,B1.gradientmap,B1.fog,B1.lights,{emissive:{value:new D1(0)}}]),vertexShader:t4.meshtoon_vert,fragmentShader:t4.meshtoon_frag},matcap:{uniforms:$3([B1.common,B1.bumpmap,B1.normalmap,B1.displacementmap,B1.fog,{matcap:{value:null}}]),vertexShader:t4.meshmatcap_vert,fragmentShader:t4.meshmatcap_frag},points:{uniforms:$3([B1.points,B1.fog]),vertexShader:t4.points_vert,fragmentShader:t4.points_frag},dashed:{uniforms:$3([B1.common,B1.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:t4.linedashed_vert,fragmentShader:t4.linedashed_frag},depth:{uniforms:$3([B1.common,B1.displacementmap]),vertexShader:t4.depth_vert,fragmentShader:t4.depth_frag},normal:{uniforms:$3([B1.common,B1.bumpmap,B1.normalmap,B1.displacementmap,{opacity:{value:1}}]),vertexShader:t4.meshnormal_vert,fragmentShader:t4.meshnormal_frag},sprite:{uniforms:$3([B1.sprite,B1.fog]),vertexShader:t4.sprite_vert,fragmentShader:t4.sprite_frag},background:{uniforms:{uvTransform:{value:new q3},t2D:{value:null}},vertexShader:t4.background_vert,fragmentShader:t4.background_frag},cube:{uniforms:$3([B1.envmap,{opacity:{value:1}}]),vertexShader:t4.cube_vert,fragmentShader:t4.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:t4.equirect_vert,fragmentShader:t4.equirect_frag},distanceRGBA:{uniforms:$3([B1.common,B1.displacementmap,{referencePosition:{value:new S},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:t4.distanceRGBA_vert,fragmentShader:t4.distanceRGBA_frag},shadow:{uniforms:$3([B1.lights,B1.fog,{color:{value:new D1(0)},opacity:{value:1}}]),vertexShader:t4.shadow_vert,fragmentShader:t4.shadow_frag}};h0.physical={uniforms:$3([h0.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new c1(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new D1(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new c1},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new D1(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new D1(1,1,1)},specularColorMap:{value:null}}]),vertexShader:t4.meshphysical_vert,fragmentShader:t4.meshphysical_frag};function zi(o,t,e,a,i,c){const r=new D1(0);let s=i===!0?0:1,l,h,u=null,d=0,f=null;function v(g,p){let x=!1,z=p.isScene===!0?p.background:null;z&&z.isTexture&&(z=t.get(z));const y=o.xr,M=y.getSession&&y.getSession();M&&M.environmentBlendMode==="additive"&&(z=null),z===null?m(r,s):z&&z.isColor&&(m(z,1),x=!0),(o.autoClear||x)&&o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil),z&&(z.isCubeTexture||z.mapping===n2)?(h===void 0&&(h=new S6(new Q0(1,1,1),new N0({name:"BackgroundCubeMaterial",uniforms:Lt(h0.cube.uniforms),vertexShader:h0.cube.vertexShader,fragmentShader:h0.cube.fragmentShader,side:o2,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(C,b,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(h)),h.material.uniforms.envMap.value=z,h.material.uniforms.flipEnvMap.value=z.isCubeTexture&&z.isRenderTargetTexture===!1?-1:1,(u!==z||d!==z.version||f!==o.toneMapping)&&(h.material.needsUpdate=!0,u=z,d=z.version,f=o.toneMapping),h.layers.enableAll(),g.unshift(h,h.geometry,h.material,0,0,null)):z&&z.isTexture&&(l===void 0&&(l=new S6(new a8(2,2),new N0({name:"BackgroundMaterial",uniforms:Lt(h0.background.uniforms),vertexShader:h0.background.vertexShader,fragmentShader:h0.background.fragmentShader,side:t2,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(l)),l.material.uniforms.t2D.value=z,z.matrixAutoUpdate===!0&&z.updateMatrix(),l.material.uniforms.uvTransform.value.copy(z.matrix),(u!==z||d!==z.version||f!==o.toneMapping)&&(l.material.needsUpdate=!0,u=z,d=z.version,f=o.toneMapping),l.layers.enableAll(),g.unshift(l,l.geometry,l.material,0,0,null))}function m(g,p){e.buffers.color.setClear(g.r,g.g,g.b,p,c)}return{getClearColor:function(){return r},setClearColor:function(g,p=1){r.set(g),s=p,m(r,s)},getClearAlpha:function(){return s},setClearAlpha:function(g){s=g,m(r,s)},render:v}}function xi(o,t,e,a){const i=o.getParameter(34921),c=a.isWebGL2?null:t.get("OES_vertex_array_object"),r=a.isWebGL2||c!==null,s={},l=p(null);let h=l,u=!1;function d(k,r1,Y,g1,v1){let j=!1;if(r){const n1=g(g1,Y,r1);h!==n1&&(h=n1,v(h.object)),j=x(k,g1,Y,v1),j&&z(k,g1,Y,v1)}else{const n1=r1.wireframe===!0;(h.geometry!==g1.id||h.program!==Y.id||h.wireframe!==n1)&&(h.geometry=g1.id,h.program=Y.id,h.wireframe=n1,j=!0)}v1!==null&&e.update(v1,34963),(j||u)&&(u=!1,w(k,r1,Y,g1),v1!==null&&o.bindBuffer(34963,e.get(v1).buffer))}function f(){return a.isWebGL2?o.createVertexArray():c.createVertexArrayOES()}function v(k){return a.isWebGL2?o.bindVertexArray(k):c.bindVertexArrayOES(k)}function m(k){return a.isWebGL2?o.deleteVertexArray(k):c.deleteVertexArrayOES(k)}function g(k,r1,Y){const g1=Y.wireframe===!0;let v1=s[k.id];v1===void 0&&(v1={},s[k.id]=v1);let j=v1[r1.id];j===void 0&&(j={},v1[r1.id]=j);let n1=j[g1];return n1===void 0&&(n1=p(f()),j[g1]=n1),n1}function p(k){const r1=[],Y=[],g1=[];for(let v1=0;v1<i;v1++)r1[v1]=0,Y[v1]=0,g1[v1]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:r1,enabledAttributes:Y,attributeDivisors:g1,object:k,attributes:{},index:null}}function x(k,r1,Y,g1){const v1=h.attributes,j=r1.attributes;let n1=0;const y1=Y.getAttributes();for(const z1 in y1)if(y1[z1].location>=0){const J1=v1[z1];let _2=j[z1];if(_2===void 0&&(z1==="instanceMatrix"&&k.instanceMatrix&&(_2=k.instanceMatrix),z1==="instanceColor"&&k.instanceColor&&(_2=k.instanceColor)),J1===void 0||J1.attribute!==_2||_2&&J1.data!==_2.data)return!0;n1++}return h.attributesNum!==n1||h.index!==g1}function z(k,r1,Y,g1){const v1={},j=r1.attributes;let n1=0;const y1=Y.getAttributes();for(const z1 in y1)if(y1[z1].location>=0){let J1=j[z1];J1===void 0&&(z1==="instanceMatrix"&&k.instanceMatrix&&(J1=k.instanceMatrix),z1==="instanceColor"&&k.instanceColor&&(J1=k.instanceColor));const _2={};_2.attribute=J1,J1&&J1.data&&(_2.data=J1.data),v1[z1]=_2,n1++}h.attributes=v1,h.attributesNum=n1,h.index=g1}function y(){const k=h.newAttributes;for(let r1=0,Y=k.length;r1<Y;r1++)k[r1]=0}function M(k){C(k,0)}function C(k,r1){const Y=h.newAttributes,g1=h.enabledAttributes,v1=h.attributeDivisors;Y[k]=1,g1[k]===0&&(o.enableVertexAttribArray(k),g1[k]=1),v1[k]!==r1&&((a.isWebGL2?o:t.get("ANGLE_instanced_arrays"))[a.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](k,r1),v1[k]=r1)}function b(){const k=h.newAttributes,r1=h.enabledAttributes;for(let Y=0,g1=r1.length;Y<g1;Y++)r1[Y]!==k[Y]&&(o.disableVertexAttribArray(Y),r1[Y]=0)}function E(k,r1,Y,g1,v1,j){a.isWebGL2===!0&&(Y===5124||Y===5125)?o.vertexAttribIPointer(k,r1,Y,v1,j):o.vertexAttribPointer(k,r1,Y,g1,v1,j)}function w(k,r1,Y,g1){if(a.isWebGL2===!1&&(k.isInstancedMesh||g1.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;y();const v1=g1.attributes,j=Y.getAttributes(),n1=r1.defaultAttributeValues;for(const y1 in j){const z1=j[y1];if(z1.location>=0){let F1=v1[y1];if(F1===void 0&&(y1==="instanceMatrix"&&k.instanceMatrix&&(F1=k.instanceMatrix),y1==="instanceColor"&&k.instanceColor&&(F1=k.instanceColor)),F1!==void 0){const J1=F1.normalized,_2=F1.itemSize,o1=e.get(F1);if(o1===void 0)continue;const j2=o1.buffer,v2=o1.type,S2=o1.bytesPerElement;if(F1.isInterleavedBufferAttribute){const R1=F1.data,i4=R1.stride,h1=F1.offset;if(R1.isInstancedInterleavedBuffer){for(let s1=0;s1<z1.locationSize;s1++)C(z1.location+s1,R1.meshPerAttribute);k.isInstancedMesh!==!0&&g1._maxInstanceCount===void 0&&(g1._maxInstanceCount=R1.meshPerAttribute*R1.count)}else for(let s1=0;s1<z1.locationSize;s1++)M(z1.location+s1);o.bindBuffer(34962,j2);for(let s1=0;s1<z1.locationSize;s1++)E(z1.location+s1,_2/z1.locationSize,v2,J1,i4*S2,(h1+_2/z1.locationSize*s1)*S2)}else{if(F1.isInstancedBufferAttribute){for(let R1=0;R1<z1.locationSize;R1++)C(z1.location+R1,F1.meshPerAttribute);k.isInstancedMesh!==!0&&g1._maxInstanceCount===void 0&&(g1._maxInstanceCount=F1.meshPerAttribute*F1.count)}else for(let R1=0;R1<z1.locationSize;R1++)M(z1.location+R1);o.bindBuffer(34962,j2);for(let R1=0;R1<z1.locationSize;R1++)E(z1.location+R1,_2/z1.locationSize,v2,J1,_2*S2,_2/z1.locationSize*R1*S2)}}else if(n1!==void 0){const J1=n1[y1];if(J1!==void 0)switch(J1.length){case 2:o.vertexAttrib2fv(z1.location,J1);break;case 3:o.vertexAttrib3fv(z1.location,J1);break;case 4:o.vertexAttrib4fv(z1.location,J1);break;default:o.vertexAttrib1fv(z1.location,J1)}}}}b()}function H(){d1();for(const k in s){const r1=s[k];for(const Y in r1){const g1=r1[Y];for(const v1 in g1)m(g1[v1].object),delete g1[v1];delete r1[Y]}delete s[k]}}function P(k){if(s[k.id]===void 0)return;const r1=s[k.id];for(const Y in r1){const g1=r1[Y];for(const v1 in g1)m(g1[v1].object),delete g1[v1];delete r1[Y]}delete s[k.id]}function O(k){for(const r1 in s){const Y=s[r1];if(Y[k.id]===void 0)continue;const g1=Y[k.id];for(const v1 in g1)m(g1[v1].object),delete g1[v1];delete Y[k.id]}}function d1(){w1(),u=!0,h!==l&&(h=l,v(h.object))}function w1(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:d1,resetDefaultState:w1,dispose:H,releaseStatesOfGeometry:P,releaseStatesOfProgram:O,initAttributes:y,enableAttribute:M,disableUnusedAttributes:b}}function Mi(o,t,e,a){const i=a.isWebGL2;let c;function r(h){c=h}function s(h,u){o.drawArrays(c,h,u),e.update(u,c,1)}function l(h,u,d){if(d===0)return;let f,v;if(i)f=o,v="drawArraysInstanced";else if(f=t.get("ANGLE_instanced_arrays"),v="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[v](c,h,u,d),e.update(u,c,d)}this.setMode=r,this.render=s,this.renderInstances=l}function wi(o,t,e){let a;function i(){if(a!==void 0)return a;if(t.has("EXT_texture_filter_anisotropic")===!0){const E=t.get("EXT_texture_filter_anisotropic");a=o.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function c(E){if(E==="highp"){if(o.getShaderPrecisionFormat(35633,36338).precision>0&&o.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";E="mediump"}return E==="mediump"&&o.getShaderPrecisionFormat(35633,36337).precision>0&&o.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const r=typeof WebGL2RenderingContext<"u"&&o instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&o instanceof WebGL2ComputeRenderingContext;let s=e.precision!==void 0?e.precision:"highp";const l=c(s);l!==s&&(console.warn("THREE.WebGLRenderer:",s,"not supported, using",l,"instead."),s=l);const h=r||t.has("WEBGL_draw_buffers"),u=e.logarithmicDepthBuffer===!0,d=o.getParameter(34930),f=o.getParameter(35660),v=o.getParameter(3379),m=o.getParameter(34076),g=o.getParameter(34921),p=o.getParameter(36347),x=o.getParameter(36348),z=o.getParameter(36349),y=f>0,M=r||t.has("OES_texture_float"),C=y&&M,b=r?o.getParameter(36183):0;return{isWebGL2:r,drawBuffers:h,getMaxAnisotropy:i,getMaxPrecision:c,precision:s,logarithmicDepthBuffer:u,maxTextures:d,maxVertexTextures:f,maxTextureSize:v,maxCubemapSize:m,maxAttributes:g,maxVertexUniforms:p,maxVaryings:x,maxFragmentUniforms:z,vertexTextures:y,floatFragmentTextures:M,floatVertexTextures:C,maxSamples:b}}function yi(o){const t=this;let e=null,a=0,i=!1,c=!1;const r=new tt,s=new q3,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f,v){const m=d.length!==0||f||a!==0||i;return i=f,e=u(d,v,0),a=d.length,m},this.beginShadows=function(){c=!0,u(null)},this.endShadows=function(){c=!1,h()},this.setState=function(d,f,v){const m=d.clippingPlanes,g=d.clipIntersection,p=d.clipShadows,x=o.get(d);if(!i||m===null||m.length===0||c&&!p)c?u(null):h();else{const z=c?0:a,y=z*4;let M=x.clippingState||null;l.value=M,M=u(m,f,y,v);for(let C=0;C!==y;++C)M[C]=e[C];x.clippingState=M,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=z}};function h(){l.value!==e&&(l.value=e,l.needsUpdate=a>0),t.numPlanes=a,t.numIntersection=0}function u(d,f,v,m){const g=d!==null?d.length:0;let p=null;if(g!==0){if(p=l.value,m!==!0||p===null){const x=v+g*4,z=f.matrixWorldInverse;s.getNormalMatrix(z),(p===null||p.length<x)&&(p=new Float32Array(x));for(let y=0,M=v;y!==g;++y,M+=4)r.copy(d[y]).applyMatrix4(z,s),r.normal.toArray(p,M),p[M+3]=r.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=g,t.numIntersection=0,p}}function Ci(o){let t=new WeakMap;function e(r,s){return s===f1?r.mapping=T3:s===l1&&(r.mapping=q),r}function a(r){if(r&&r.isTexture&&r.isRenderTargetTexture===!1){const s=r.mapping;if(s===f1||s===l1)if(t.has(r)){const l=t.get(r).texture;return e(l,r.mapping)}else{const l=r.image;if(l&&l.height>0){const h=new m9(l.height/2);return h.fromEquirectangularTexture(o,r),t.set(r,h),r.addEventListener("dispose",i),e(h.texture,r.mapping)}else return null}}return r}function i(r){const s=r.target;s.removeEventListener("dispose",i);const l=t.get(s);l!==void 0&&(t.delete(s),l.dispose())}function c(){t=new WeakMap}return{get:a,dispose:c}}class oe extends ce{constructor(t=-1,e=1,a=1,i=-1,c=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=a,this.bottom=i,this.near=c,this.far=r,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,a,i,c,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=a,this.view.offsetY=i,this.view.width=c,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),a=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let c=a-t,r=a+t,s=i+e,l=i-e;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=h*this.view.offsetX,r=c+h*this.view.width,s-=u*this.view.offsetY,l=s-u*this.view.height}this.projectionMatrix.makeOrthographic(c,r,s,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Vt=4,l7=[.125,.215,.35,.446,.526,.582],et=20,le=new oe,h7=new D1;let he=null;const nt=(1+Math.sqrt(5))/2,Ft=1/nt,u7=[new S(1,1,1),new S(-1,1,1),new S(1,1,-1),new S(-1,1,-1),new S(0,nt,Ft),new S(0,nt,-Ft),new S(Ft,0,nt),new S(-Ft,0,nt),new S(nt,Ft,0),new S(-nt,Ft,0)];class d7{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,a=.1,i=100){he=this._renderer.getRenderTarget(),this._setSize(256);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,a,i,c),e>0&&this._blur(c,0,0,e),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=g7(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=v7(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(he),t.scissorTest=!1,X8(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===T3||t.mapping===q?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),he=this._renderer.getRenderTarget();const a=e||this._allocateTargets();return this._textureToCubeUV(t,a),this._applyPMREM(a),this._cleanup(a),a}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,a={magFilter:u2,minFilter:u2,generateMipmaps:!1,type:E3,format:N,encoding:L1,depthBuffer:!1},i=f7(t,e,a);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=f7(t,e,a);const{_lodMax:c}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=_i(c)),this._blurMaterial=Si(c,t,e)}return i}_compileMaterial(t){const e=new S6(this._lodPlanes[0],t);this._renderer.compile(e,le)}_sceneToCubeUV(t,e,a,i){const s=new R3(90,1,e,a),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(h7),u.toneMapping=m3,u.autoClear=!1;const v=new K0({name:"PMREM.Background",side:o2,depthWrite:!1,depthTest:!1}),m=new S6(new Q0,v);let g=!1;const p=t.background;p?p.isColor&&(v.color.copy(p),t.background=null,g=!0):(v.color.copy(h7),g=!0);for(let x=0;x<6;x++){const z=x%3;z===0?(s.up.set(0,l[x],0),s.lookAt(h[x],0,0)):z===1?(s.up.set(0,0,l[x]),s.lookAt(0,h[x],0)):(s.up.set(0,l[x],0),s.lookAt(0,0,h[x]));const y=this._cubeSize;X8(i,z*y,x>2?y:0,y,y),u.setRenderTarget(i),g&&u.render(m,s),u.render(t,s)}m.geometry.dispose(),m.material.dispose(),u.toneMapping=f,u.autoClear=d,t.background=p}_textureToCubeUV(t,e){const a=this._renderer,i=t.mapping===T3||t.mapping===q;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=g7()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=v7());const c=i?this._cubemapMaterial:this._equirectMaterial,r=new S6(this._lodPlanes[0],c),s=c.uniforms;s.envMap.value=t;const l=this._cubeSize;X8(e,0,0,3*l,2*l),a.setRenderTarget(e),a.render(r,le)}_applyPMREM(t){const e=this._renderer,a=e.autoClear;e.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const c=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),r=u7[(i-1)%u7.length];this._blur(t,i-1,i,c,r)}e.autoClear=a}_blur(t,e,a,i,c){const r=this._pingPongRenderTarget;this._halfBlur(t,r,e,a,i,"latitudinal",c),this._halfBlur(r,t,a,a,i,"longitudinal",c)}_halfBlur(t,e,a,i,c,r,s){const l=this._renderer,h=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new S6(this._lodPlanes[i],h),f=h.uniforms,v=this._sizeLods[a]-1,m=isFinite(c)?Math.PI/(2*v):2*Math.PI/(2*et-1),g=c/m,p=isFinite(c)?1+Math.floor(u*g):et;p>et&&console.warn(`sigmaRadians, ${c}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${et}`);const x=[];let z=0;for(let E=0;E<et;++E){const w=E/g,H=Math.exp(-w*w/2);x.push(H),E===0?z+=H:E<p&&(z+=2*H)}for(let E=0;E<x.length;E++)x[E]=x[E]/z;f.envMap.value=t.texture,f.samples.value=p,f.weights.value=x,f.latitudinal.value=r==="latitudinal",s&&(f.poleAxis.value=s);const{_lodMax:y}=this;f.dTheta.value=m,f.mipInt.value=y-a;const M=this._sizeLods[i],C=3*M*(i>y-Vt?i-y+Vt:0),b=4*(this._cubeSize-M);X8(e,C,b,3*M,2*M),l.setRenderTarget(e),l.render(d,le)}}function _i(o){const t=[],e=[],a=[];let i=o;const c=o-Vt+1+l7.length;for(let r=0;r<c;r++){const s=Math.pow(2,i);e.push(s);let l=1/s;r>o-Vt?l=l7[r-o+Vt-1]:r===0&&(l=0),a.push(l);const h=1/(s-2),u=-h,d=1+h,f=[u,u,d,u,d,d,u,u,d,d,u,d],v=6,m=6,g=3,p=2,x=1,z=new Float32Array(g*m*v),y=new Float32Array(p*m*v),M=new Float32Array(x*m*v);for(let b=0;b<v;b++){const E=b%3*2/3-1,w=b>2?0:-1,H=[E,w,0,E+2/3,w,0,E+2/3,w+1,0,E,w,0,E+2/3,w+1,0,E,w+1,0];z.set(H,g*m*b),y.set(f,p*m*b);const P=[b,b,b,b,b,b];M.set(P,x*m*b)}const C=new Y2;C.setAttribute("position",new b3(z,g)),C.setAttribute("uv",new b3(y,p)),C.setAttribute("faceIndex",new b3(M,x)),t.push(C),i>Vt&&i--}return{lodPlanes:t,sizeLods:e,sigmas:a}}function f7(o,t,e){const a=new F2(o,t,e);return a.texture.mapping=n2,a.texture.name="PMREM.cubeUv",a.scissorTest=!0,a}function X8(o,t,e,a,i){o.viewport.set(t,e,a,i),o.scissor.set(t,e,a,i)}function Si(o,t,e){const a=new Float32Array(et),i=new S(0,1,0);return new N0({name:"SphericalGaussianBlur",defines:{n:et,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:a},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:ue(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:s4,depthTest:!1,depthWrite:!1})}function v7(){return new N0({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ue(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:s4,depthTest:!1,depthWrite:!1})}function g7(){return new N0({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ue(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:s4,depthTest:!1,depthWrite:!1})}function ue(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function bi(o){let t=new WeakMap,e=null;function a(s){if(s&&s.isTexture){const l=s.mapping,h=l===f1||l===l1,u=l===T3||l===q;if(h||u)if(s.isRenderTargetTexture&&s.needsPMREMUpdate===!0){s.needsPMREMUpdate=!1;let d=t.get(s);return e===null&&(e=new d7(o)),d=h?e.fromEquirectangular(s,d):e.fromCubemap(s,d),t.set(s,d),d.texture}else{if(t.has(s))return t.get(s).texture;{const d=s.image;if(h&&d&&d.height>0||u&&d&&i(d)){e===null&&(e=new d7(o));const f=h?e.fromEquirectangular(s):e.fromCubemap(s);return t.set(s,f),s.addEventListener("dispose",c),f.texture}else return null}}}return s}function i(s){let l=0;const h=6;for(let u=0;u<h;u++)s[u]!==void 0&&l++;return l===h}function c(s){const l=s.target;l.removeEventListener("dispose",c);const h=t.get(l);h!==void 0&&(t.delete(l),h.dispose())}function r(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:a,dispose:r}}function Li(o){const t={};function e(a){if(t[a]!==void 0)return t[a];let i;switch(a){case"WEBGL_depth_texture":i=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=o.getExtension(a)}return t[a]=i,i}return{has:function(a){return e(a)!==null},init:function(a){a.isWebGL2?e("EXT_color_buffer_float"):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(a){const i=e(a);return i===null&&console.warn("THREE.WebGLRenderer: "+a+" extension not supported."),i}}}function Hi(o,t,e,a){const i={},c=new WeakMap;function r(d){const f=d.target;f.index!==null&&t.remove(f.index);for(const m in f.attributes)t.remove(f.attributes[m]);f.removeEventListener("dispose",r),delete i[f.id];const v=c.get(f);v&&(t.remove(v),c.delete(f)),a.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function s(d,f){return i[f.id]===!0||(f.addEventListener("dispose",r),i[f.id]=!0,e.memory.geometries++),f}function l(d){const f=d.attributes;for(const m in f)t.update(f[m],34962);const v=d.morphAttributes;for(const m in v){const g=v[m];for(let p=0,x=g.length;p<x;p++)t.update(g[p],34962)}}function h(d){const f=[],v=d.index,m=d.attributes.position;let g=0;if(v!==null){const z=v.array;g=v.version;for(let y=0,M=z.length;y<M;y+=3){const C=z[y+0],b=z[y+1],E=z[y+2];f.push(C,b,b,E,E,C)}}else{const z=m.array;g=m.version;for(let y=0,M=z.length/3-1;y<M;y+=3){const C=y+0,b=y+1,E=y+2;f.push(C,b,b,E,E,C)}}const p=new(p0(f)?r7:c7)(f,1);p.version=g;const x=c.get(d);x&&t.remove(x),c.set(d,p)}function u(d){const f=c.get(d);if(f){const v=d.index;v!==null&&f.version<v.version&&h(d)}else h(d);return c.get(d)}return{get:s,update:l,getWireframeAttribute:u}}function Ii(o,t,e,a){const i=a.isWebGL2;let c;function r(f){c=f}let s,l;function h(f){s=f.type,l=f.bytesPerElement}function u(f,v){o.drawElements(c,v,s,f*l),e.update(v,c,1)}function d(f,v,m){if(m===0)return;let g,p;if(i)g=o,p="drawElementsInstanced";else if(g=t.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",g===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}g[p](c,v,s,f*l,m),e.update(v,c,m)}this.setMode=r,this.setIndex=h,this.render=u,this.renderInstances=d}function Ai(o){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function a(c,r,s){switch(e.calls++,r){case 4:e.triangles+=s*(c/3);break;case 1:e.lines+=s*(c/2);break;case 3:e.lines+=s*(c-1);break;case 2:e.lines+=s*c;break;case 0:e.points+=s*c;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",r);break}}function i(){e.frame++,e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:a}}function Vi(o,t){return o[0]-t[0]}function p7(o,t){return Math.abs(t[1])-Math.abs(o[1])}function de(o,t){let e=1;const a=t.isInterleavedBufferAttribute?t.data.array:t.array;a instanceof Int8Array?e=127:a instanceof Uint8Array?e=255:a instanceof Uint16Array?e=65535:a instanceof Int16Array?e=32767:a instanceof Int32Array?e=2147483647:console.error("THREE.WebGLMorphtargets: Unsupported morph attribute data type: ",a),o.divideScalar(e)}function Fi(o,t,e){const a={},i=new Float32Array(8),c=new WeakMap,r=new S1,s=[];for(let h=0;h<8;h++)s[h]=[h,0];function l(h,u,d,f){const v=h.morphTargetInfluences;if(t.isWebGL2===!0){const m=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,g=m!==void 0?m.length:0;let p=c.get(u);if(p===void 0||p.count!==g){let r1=function(){w1.dispose(),c.delete(u),u.removeEventListener("dispose",r1)};p!==void 0&&p.texture.dispose();const y=u.morphAttributes.position!==void 0,M=u.morphAttributes.normal!==void 0,C=u.morphAttributes.color!==void 0,b=u.morphAttributes.position||[],E=u.morphAttributes.normal||[],w=u.morphAttributes.color||[];let H=0;y===!0&&(H=1),M===!0&&(H=2),C===!0&&(H=3);let P=u.attributes.position.count*H,O=1;P>t.maxTextureSize&&(O=Math.ceil(P/t.maxTextureSize),P=t.maxTextureSize);const d1=new Float32Array(P*O*4*g),w1=new G3(d1,P,O,g);w1.type=X2,w1.needsUpdate=!0;const k=H*4;for(let Y=0;Y<g;Y++){const g1=b[Y],v1=E[Y],j=w[Y],n1=P*O*4*Y;for(let y1=0;y1<g1.count;y1++){const z1=y1*k;y===!0&&(r.fromBufferAttribute(g1,y1),g1.normalized===!0&&de(r,g1),d1[n1+z1+0]=r.x,d1[n1+z1+1]=r.y,d1[n1+z1+2]=r.z,d1[n1+z1+3]=0),M===!0&&(r.fromBufferAttribute(v1,y1),v1.normalized===!0&&de(r,v1),d1[n1+z1+4]=r.x,d1[n1+z1+5]=r.y,d1[n1+z1+6]=r.z,d1[n1+z1+7]=0),C===!0&&(r.fromBufferAttribute(j,y1),j.normalized===!0&&de(r,j),d1[n1+z1+8]=r.x,d1[n1+z1+9]=r.y,d1[n1+z1+10]=r.z,d1[n1+z1+11]=j.itemSize===4?r.w:1)}}p={count:g,texture:w1,size:new c1(P,O)},c.set(u,p),u.addEventListener("dispose",r1)}let x=0;for(let y=0;y<v.length;y++)x+=v[y];const z=u.morphTargetsRelative?1:1-x;f.getUniforms().setValue(o,"morphTargetBaseInfluence",z),f.getUniforms().setValue(o,"morphTargetInfluences",v),f.getUniforms().setValue(o,"morphTargetsTexture",p.texture,e),f.getUniforms().setValue(o,"morphTargetsTextureSize",p.size)}else{const m=v===void 0?0:v.length;let g=a[u.id];if(g===void 0||g.length!==m){g=[];for(let M=0;M<m;M++)g[M]=[M,0];a[u.id]=g}for(let M=0;M<m;M++){const C=g[M];C[0]=M,C[1]=v[M]}g.sort(p7);for(let M=0;M<8;M++)M<m&&g[M][1]?(s[M][0]=g[M][0],s[M][1]=g[M][1]):(s[M][0]=Number.MAX_SAFE_INTEGER,s[M][1]=0);s.sort(Vi);const p=u.morphAttributes.position,x=u.morphAttributes.normal;let z=0;for(let M=0;M<8;M++){const C=s[M],b=C[0],E=C[1];b!==Number.MAX_SAFE_INTEGER&&E?(p&&u.getAttribute("morphTarget"+M)!==p[b]&&u.setAttribute("morphTarget"+M,p[b]),x&&u.getAttribute("morphNormal"+M)!==x[b]&&u.setAttribute("morphNormal"+M,x[b]),i[M]=E,z+=E):(p&&u.hasAttribute("morphTarget"+M)===!0&&u.deleteAttribute("morphTarget"+M),x&&u.hasAttribute("morphNormal"+M)===!0&&u.deleteAttribute("morphNormal"+M),i[M]=0)}const y=u.morphTargetsRelative?1:1-z;f.getUniforms().setValue(o,"morphTargetBaseInfluence",y),f.getUniforms().setValue(o,"morphTargetInfluences",i)}}return{update:l}}function Bi(o,t,e,a){let i=new WeakMap;function c(l){const h=a.render.frame,u=l.geometry,d=t.get(l,u);return i.get(d)!==h&&(t.update(d),i.set(d,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",s)===!1&&l.addEventListener("dispose",s),e.update(l.instanceMatrix,34962),l.instanceColor!==null&&e.update(l.instanceColor,34962)),d}function r(){i=new WeakMap}function s(l){const h=l.target;h.removeEventListener("dispose",s),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:c,dispose:r}}const m7=new I2,z7=new G3,x7=new F0,M7=new W8,w7=[],y7=[],C7=new Float32Array(16),_7=new Float32Array(9),S7=new Float32Array(4);function Bt(o,t,e){const a=o[0];if(a<=0||a>0)return o;const i=t*e;let c=w7[i];if(c===void 0&&(c=new Float32Array(i),w7[i]=c),t!==0){a.toArray(c,0);for(let r=1,s=0;r!==t;++r)s+=e,o[r].toArray(c,s)}return c}function n6(o,t){if(o.length!==t.length)return!1;for(let e=0,a=o.length;e<a;e++)if(o[e]!==t[e])return!1;return!0}function a6(o,t){for(let e=0,a=t.length;e<a;e++)o[e]=t[e]}function $8(o,t){let e=y7[t];e===void 0&&(e=new Int32Array(t),y7[t]=e);for(let a=0;a!==t;++a)e[a]=o.allocateTextureUnit();return e}function Ti(o,t){const e=this.cache;e[0]!==t&&(o.uniform1f(this.addr,t),e[0]=t)}function Ei(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(o.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(n6(e,t))return;o.uniform2fv(this.addr,t),a6(e,t)}}function Gi(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(o.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(o.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(n6(e,t))return;o.uniform3fv(this.addr,t),a6(e,t)}}function Ri(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(o.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(n6(e,t))return;o.uniform4fv(this.addr,t),a6(e,t)}}function Pi(o,t){const e=this.cache,a=t.elements;if(a===void 0){if(n6(e,t))return;o.uniformMatrix2fv(this.addr,!1,t),a6(e,t)}else{if(n6(e,a))return;S7.set(a),o.uniformMatrix2fv(this.addr,!1,S7),a6(e,a)}}function Di(o,t){const e=this.cache,a=t.elements;if(a===void 0){if(n6(e,t))return;o.uniformMatrix3fv(this.addr,!1,t),a6(e,t)}else{if(n6(e,a))return;_7.set(a),o.uniformMatrix3fv(this.addr,!1,_7),a6(e,a)}}function Ni(o,t){const e=this.cache,a=t.elements;if(a===void 0){if(n6(e,t))return;o.uniformMatrix4fv(this.addr,!1,t),a6(e,t)}else{if(n6(e,a))return;C7.set(a),o.uniformMatrix4fv(this.addr,!1,C7),a6(e,a)}}function Oi(o,t){const e=this.cache;e[0]!==t&&(o.uniform1i(this.addr,t),e[0]=t)}function ki(o,t){const e=this.cache;n6(e,t)||(o.uniform2iv(this.addr,t),a6(e,t))}function Ui(o,t){const e=this.cache;n6(e,t)||(o.uniform3iv(this.addr,t),a6(e,t))}function Zi(o,t){const e=this.cache;n6(e,t)||(o.uniform4iv(this.addr,t),a6(e,t))}function Wi(o,t){const e=this.cache;e[0]!==t&&(o.uniform1ui(this.addr,t),e[0]=t)}function qi(o,t){const e=this.cache;n6(e,t)||(o.uniform2uiv(this.addr,t),a6(e,t))}function Xi(o,t){const e=this.cache;n6(e,t)||(o.uniform3uiv(this.addr,t),a6(e,t))}function $i(o,t){const e=this.cache;n6(e,t)||(o.uniform4uiv(this.addr,t),a6(e,t))}function Yi(o,t,e){const a=this.cache,i=e.allocateTextureUnit();a[0]!==i&&(o.uniform1i(this.addr,i),a[0]=i),e.setTexture2D(t||m7,i)}function ji(o,t,e){const a=this.cache,i=e.allocateTextureUnit();a[0]!==i&&(o.uniform1i(this.addr,i),a[0]=i),e.setTexture3D(t||x7,i)}function Ji(o,t,e){const a=this.cache,i=e.allocateTextureUnit();a[0]!==i&&(o.uniform1i(this.addr,i),a[0]=i),e.setTextureCube(t||M7,i)}function Ki(o,t,e){const a=this.cache,i=e.allocateTextureUnit();a[0]!==i&&(o.uniform1i(this.addr,i),a[0]=i),e.setTexture2DArray(t||z7,i)}function Qi(o){switch(o){case 5126:return Ti;case 35664:return Ei;case 35665:return Gi;case 35666:return Ri;case 35674:return Pi;case 35675:return Di;case 35676:return Ni;case 5124:case 35670:return Oi;case 35667:case 35671:return ki;case 35668:case 35672:return Ui;case 35669:case 35673:return Zi;case 5125:return Wi;case 36294:return qi;case 36295:return Xi;case 36296:return $i;case 35678:case 36198:case 36298:case 36306:case 35682:return Yi;case 35679:case 36299:case 36307:return ji;case 35680:case 36300:case 36308:case 36293:return Ji;case 36289:case 36303:case 36311:case 36292:return Ki}}function tc(o,t){o.uniform1fv(this.addr,t)}function ec(o,t){const e=Bt(t,this.size,2);o.uniform2fv(this.addr,e)}function nc(o,t){const e=Bt(t,this.size,3);o.uniform3fv(this.addr,e)}function ac(o,t){const e=Bt(t,this.size,4);o.uniform4fv(this.addr,e)}function ic(o,t){const e=Bt(t,this.size,4);o.uniformMatrix2fv(this.addr,!1,e)}function cc(o,t){const e=Bt(t,this.size,9);o.uniformMatrix3fv(this.addr,!1,e)}function rc(o,t){const e=Bt(t,this.size,16);o.uniformMatrix4fv(this.addr,!1,e)}function sc(o,t){o.uniform1iv(this.addr,t)}function oc(o,t){o.uniform2iv(this.addr,t)}function lc(o,t){o.uniform3iv(this.addr,t)}function hc(o,t){o.uniform4iv(this.addr,t)}function uc(o,t){o.uniform1uiv(this.addr,t)}function dc(o,t){o.uniform2uiv(this.addr,t)}function fc(o,t){o.uniform3uiv(this.addr,t)}function vc(o,t){o.uniform4uiv(this.addr,t)}function gc(o,t,e){const a=t.length,i=$8(e,a);o.uniform1iv(this.addr,i);for(let c=0;c!==a;++c)e.setTexture2D(t[c]||m7,i[c])}function pc(o,t,e){const a=t.length,i=$8(e,a);o.uniform1iv(this.addr,i);for(let c=0;c!==a;++c)e.setTexture3D(t[c]||x7,i[c])}function mc(o,t,e){const a=t.length,i=$8(e,a);o.uniform1iv(this.addr,i);for(let c=0;c!==a;++c)e.setTextureCube(t[c]||M7,i[c])}function zc(o,t,e){const a=t.length,i=$8(e,a);o.uniform1iv(this.addr,i);for(let c=0;c!==a;++c)e.setTexture2DArray(t[c]||z7,i[c])}function xc(o){switch(o){case 5126:return tc;case 35664:return ec;case 35665:return nc;case 35666:return ac;case 35674:return ic;case 35675:return cc;case 35676:return rc;case 5124:case 35670:return sc;case 35667:case 35671:return oc;case 35668:case 35672:return lc;case 35669:case 35673:return hc;case 5125:return uc;case 36294:return dc;case 36295:return fc;case 36296:return vc;case 35678:case 36198:case 36298:case 36306:case 35682:return gc;case 35679:case 36299:case 36307:return pc;case 35680:case 36300:case 36308:case 36293:return mc;case 36289:case 36303:case 36311:case 36292:return zc}}class Mc{constructor(t,e,a){this.id=t,this.addr=a,this.cache=[],this.setValue=Qi(e.type)}}class wc{constructor(t,e,a){this.id=t,this.addr=a,this.cache=[],this.size=e.size,this.setValue=xc(e.type)}}class yc{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,a){const i=this.seq;for(let c=0,r=i.length;c!==r;++c){const s=i[c];s.setValue(t,e[s.id],a)}}}const fe=/(\w+)(\])?(\[|\.)?/g;function b7(o,t){o.seq.push(t),o.map[t.id]=t}function Cc(o,t,e){const a=o.name,i=a.length;for(fe.lastIndex=0;;){const c=fe.exec(a),r=fe.lastIndex;let s=c[1];const l=c[2]==="]",h=c[3];if(l&&(s=s|0),h===void 0||h==="["&&r+2===i){b7(e,h===void 0?new Mc(s,o,t):new wc(s,o,t));break}else{let d=e.map[s];d===void 0&&(d=new yc(s),b7(e,d)),e=d}}}class Y8{constructor(t,e){this.seq=[],this.map={};const a=t.getProgramParameter(e,35718);for(let i=0;i<a;++i){const c=t.getActiveUniform(e,i),r=t.getUniformLocation(e,c.name);Cc(c,r,this)}}setValue(t,e,a,i){const c=this.map[e];c!==void 0&&c.setValue(t,a,i)}setOptional(t,e,a){const i=e[a];i!==void 0&&this.setValue(t,a,i)}static upload(t,e,a,i){for(let c=0,r=e.length;c!==r;++c){const s=e[c],l=a[s.id];l.needsUpdate!==!1&&s.setValue(t,l.value,i)}}static seqWithValue(t,e){const a=[];for(let i=0,c=t.length;i!==c;++i){const r=t[i];r.id in e&&a.push(r)}return a}}function L7(o,t,e){const a=o.createShader(t);return o.shaderSource(a,e),o.compileShader(a),a}let _c=0;function Sc(o,t){const e=o.split(`
`),a=[],i=Math.max(t-6,0),c=Math.min(t+6,e.length);for(let r=i;r<c;r++){const s=r+1;a.push(`${s===t?">":" "} ${s}: ${e[r]}`)}return a.join(`
`)}function bc(o){switch(o){case L1:return["Linear","( value )"];case C1:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",o),["Linear","( value )"]}}function H7(o,t,e){const a=o.getShaderParameter(t,35713),i=o.getShaderInfoLog(t).trim();if(a&&i==="")return"";const c=/ERROR: 0:(\d+)/.exec(i);if(c){const r=parseInt(c[1]);return e.toUpperCase()+`

`+i+`

`+Sc(o.getShaderSource(t),r)}else return i}function Lc(o,t){const e=bc(t);return"vec4 "+o+"( vec4 value ) { return LinearTo"+e[0]+e[1]+"; }"}function Hc(o,t){let e;switch(t){case z3:e="Linear";break;case F6:e="Reinhard";break;case B6:e="OptimizedCineon";break;case v6:e="ACESFilmic";break;case i0:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+o+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function Ic(o){return[o.extensionDerivatives||!!o.envMapCubeUVHeight||o.bumpMap||o.tangentSpaceNormalMap||o.clearcoatNormalMap||o.flatShading||o.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(o.extensionFragDepth||o.logarithmicDepthBuffer)&&o.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",o.extensionDrawBuffers&&o.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(o.extensionShaderTextureLOD||o.envMap||o.transmission)&&o.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(i8).join(`
`)}function Ac(o){const t=[];for(const e in o){const a=o[e];a!==!1&&t.push("#define "+e+" "+a)}return t.join(`
`)}function Vc(o,t){const e={},a=o.getProgramParameter(t,35721);for(let i=0;i<a;i++){const c=o.getActiveAttrib(t,i),r=c.name;let s=1;c.type===35674&&(s=2),c.type===35675&&(s=3),c.type===35676&&(s=4),e[r]={type:c.type,location:o.getAttribLocation(t,r),locationSize:s}}return e}function i8(o){return o!==""}function I7(o,t){return o.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function A7(o,t){return o.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Fc=/^[ \t]*#include +<([\w\d./]+)>/gm;function ve(o){return o.replace(Fc,Bc)}function Bc(o,t){const e=t4[t];if(e===void 0)throw new Error("Can not resolve #include <"+t+">");return ve(e)}const Tc=/#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g,Ec=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function V7(o){return o.replace(Ec,F7).replace(Tc,Gc)}function Gc(o,t,e,a){return console.warn("WebGLProgram: #pragma unroll_loop shader syntax is deprecated. Please use #pragma unroll_loop_start syntax instead."),F7(o,t,e,a)}function F7(o,t,e,a){let i="";for(let c=parseInt(t);c<parseInt(e);c++)i+=a.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return i}function B7(o){let t="precision "+o.precision+` float;
precision `+o.precision+" int;";return o.precision==="highp"?t+=`
#define HIGH_PRECISION`:o.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Rc(o){let t="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===r4?t="SHADOWMAP_TYPE_PCF":o.shadowMapType===V?t="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===E1&&(t="SHADOWMAP_TYPE_VSM"),t}function Pc(o){let t="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case T3:case q:t="ENVMAP_TYPE_CUBE";break;case n2:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Dc(o){let t="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case q:t="ENVMAP_MODE_REFRACTION";break}return t}function Nc(o){let t="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case P3:t="ENVMAP_BLENDING_MULTIPLY";break;case a0:t="ENVMAP_BLENDING_MIX";break;case Z6:t="ENVMAP_BLENDING_ADD";break}return t}function Oc(o){const t=o.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,a=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:a,maxMip:e}}function kc(o,t,e,a){const i=o.getContext(),c=e.defines;let r=e.vertexShader,s=e.fragmentShader;const l=Rc(e),h=Pc(e),u=Dc(e),d=Nc(e),f=Oc(e),v=e.isWebGL2?"":Ic(e),m=Ac(c),g=i.createProgram();let p,x,z=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=[m].filter(i8).join(`
`),p.length>0&&(p+=`
`),x=[v,m].filter(i8).join(`
`),x.length>0&&(x+=`
`)):(p=[B7(e),"#define SHADER_NAME "+e.shaderName,m,e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.supportsVertexTextures?"#define VERTEX_TEXTURES":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMap&&e.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",e.normalMap&&e.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.displacementMap&&e.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",e.specularColorMap?"#define USE_SPECULARCOLORMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEENCOLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",e.vertexTangents?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUvs?"#define USE_UV":"",e.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(i8).join(`
`),x=[v,B7(e),"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",e.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMap&&e.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",e.normalMap&&e.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",e.specularColorMap?"#define USE_SPECULARCOLORMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEENCOLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.vertexTangents?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUvs?"#define USE_UV":"",e.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==m3?"#define TONE_MAPPING":"",e.toneMapping!==m3?t4.tonemapping_pars_fragment:"",e.toneMapping!==m3?Hc("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",t4.encodings_pars_fragment,Lc("linearToOutputTexel",e.outputEncoding),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(i8).join(`
`)),r=ve(r),r=I7(r,e),r=A7(r,e),s=ve(s),s=I7(s,e),s=A7(s,e),r=V7(r),s=V7(s),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(z=`#version 300 es
`,p=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,x=["#define varying in",e.glslVersion===R6?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===R6?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const y=z+p+r,M=z+x+s,C=L7(i,35633,y),b=L7(i,35632,M);if(i.attachShader(g,C),i.attachShader(g,b),e.index0AttributeName!==void 0?i.bindAttribLocation(g,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(g,0,"position"),i.linkProgram(g),o.debug.checkShaderErrors){const H=i.getProgramInfoLog(g).trim(),P=i.getShaderInfoLog(C).trim(),O=i.getShaderInfoLog(b).trim();let d1=!0,w1=!0;if(i.getProgramParameter(g,35714)===!1){d1=!1;const k=H7(i,C,"vertex"),r1=H7(i,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(g,35715)+`

Program Info Log: `+H+`
`+k+`
`+r1)}else H!==""?console.warn("THREE.WebGLProgram: Program Info Log:",H):(P===""||O==="")&&(w1=!1);w1&&(this.diagnostics={runnable:d1,programLog:H,vertexShader:{log:P,prefix:p},fragmentShader:{log:O,prefix:x}})}i.deleteShader(C),i.deleteShader(b);let E;this.getUniforms=function(){return E===void 0&&(E=new Y8(i,g)),E};let w;return this.getAttributes=function(){return w===void 0&&(w=Vc(i,g)),w},this.destroy=function(){a.releaseStatesOfProgram(this),i.deleteProgram(g),this.program=void 0},this.name=e.shaderName,this.id=_c++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=C,this.fragmentShader=b,this}let Uc=0;class Zc{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,a=t.fragmentShader,i=this._getShaderStage(e),c=this._getShaderStage(a),r=this._getShaderCacheForMaterial(t);return r.has(i)===!1&&(r.add(i),i.usedTimes++),r.has(c)===!1&&(r.add(c),c.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const a of e)a.usedTimes--,a.usedTimes===0&&this.shaderCache.delete(a.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;return e.has(t)===!1&&e.set(t,new Set),e.get(t)}_getShaderStage(t){const e=this.shaderCache;if(e.has(t)===!1){const a=new Wc(t);e.set(t,a)}return e.get(t)}}class Wc{constructor(t){this.id=Uc++,this.code=t,this.usedTimes=0}}function qc(o,t,e,a,i,c,r){const s=new $5,l=new Zc,h=[],u=i.isWebGL2,d=i.logarithmicDepthBuffer,f=i.vertexTextures;let v=i.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(w,H,P,O,d1){const w1=O.fog,k=d1.geometry,r1=w.isMeshStandardMaterial?O.environment:null,Y=(w.isMeshStandardMaterial?e:t).get(w.envMap||r1),g1=!!Y&&Y.mapping===n2?Y.image.height:null,v1=m[w.type];w.precision!==null&&(v=i.getMaxPrecision(w.precision),v!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",v,"instead."));const j=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,n1=j!==void 0?j.length:0;let y1=0;k.morphAttributes.position!==void 0&&(y1=1),k.morphAttributes.normal!==void 0&&(y1=2),k.morphAttributes.color!==void 0&&(y1=3);let z1,F1,J1,_2;if(v1){const i4=h0[v1];z1=i4.vertexShader,F1=i4.fragmentShader}else z1=w.vertexShader,F1=w.fragmentShader,l.update(w),J1=l.getVertexShaderID(w),_2=l.getFragmentShaderID(w);const o1=o.getRenderTarget(),j2=w.alphaTest>0,v2=w.clearcoat>0,S2=w.iridescence>0;return{isWebGL2:u,shaderID:v1,shaderName:w.type,vertexShader:z1,fragmentShader:F1,defines:w.defines,customVertexShaderID:J1,customFragmentShaderID:_2,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:v,instancing:d1.isInstancedMesh===!0,instancingColor:d1.isInstancedMesh===!0&&d1.instanceColor!==null,supportsVertexTextures:f,outputEncoding:o1===null?o.outputEncoding:o1.isXRRenderTarget===!0?o1.texture.encoding:L1,map:!!w.map,matcap:!!w.matcap,envMap:!!Y,envMapMode:Y&&Y.mapping,envMapCubeUVHeight:g1,lightMap:!!w.lightMap,aoMap:!!w.aoMap,emissiveMap:!!w.emissiveMap,bumpMap:!!w.bumpMap,normalMap:!!w.normalMap,objectSpaceNormalMap:w.normalMapType===u4,tangentSpaceNormalMap:w.normalMapType===x2,decodeVideoTexture:!!w.map&&w.map.isVideoTexture===!0&&w.map.encoding===C1,clearcoat:v2,clearcoatMap:v2&&!!w.clearcoatMap,clearcoatRoughnessMap:v2&&!!w.clearcoatRoughnessMap,clearcoatNormalMap:v2&&!!w.clearcoatNormalMap,iridescence:S2,iridescenceMap:S2&&!!w.iridescenceMap,iridescenceThicknessMap:S2&&!!w.iridescenceThicknessMap,displacementMap:!!w.displacementMap,roughnessMap:!!w.roughnessMap,metalnessMap:!!w.metalnessMap,specularMap:!!w.specularMap,specularIntensityMap:!!w.specularIntensityMap,specularColorMap:!!w.specularColorMap,opaque:w.transparent===!1&&w.blending===c4,alphaMap:!!w.alphaMap,alphaTest:j2,gradientMap:!!w.gradientMap,sheen:w.sheen>0,sheenColorMap:!!w.sheenColorMap,sheenRoughnessMap:!!w.sheenRoughnessMap,transmission:w.transmission>0,transmissionMap:!!w.transmissionMap,thicknessMap:!!w.thicknessMap,combine:w.combine,vertexTangents:!!w.normalMap&&!!k.attributes.tangent,vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,vertexUvs:!!w.map||!!w.bumpMap||!!w.normalMap||!!w.specularMap||!!w.alphaMap||!!w.emissiveMap||!!w.roughnessMap||!!w.metalnessMap||!!w.clearcoatMap||!!w.clearcoatRoughnessMap||!!w.clearcoatNormalMap||!!w.iridescenceMap||!!w.iridescenceThicknessMap||!!w.displacementMap||!!w.transmissionMap||!!w.thicknessMap||!!w.specularIntensityMap||!!w.specularColorMap||!!w.sheenColorMap||!!w.sheenRoughnessMap,uvsVertexOnly:!(!!w.map||!!w.bumpMap||!!w.normalMap||!!w.specularMap||!!w.alphaMap||!!w.emissiveMap||!!w.roughnessMap||!!w.metalnessMap||!!w.clearcoatNormalMap||!!w.iridescenceMap||!!w.iridescenceThicknessMap||w.transmission>0||!!w.transmissionMap||!!w.thicknessMap||!!w.specularIntensityMap||!!w.specularColorMap||w.sheen>0||!!w.sheenColorMap||!!w.sheenRoughnessMap)&&!!w.displacementMap,fog:!!w1,useFog:w.fog===!0,fogExp2:w1&&w1.isFogExp2,flatShading:!!w.flatShading,sizeAttenuation:w.sizeAttenuation,logarithmicDepthBuffer:d,skinning:d1.isSkinnedMesh===!0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:n1,morphTextureStride:y1,numDirLights:H.directional.length,numPointLights:H.point.length,numSpotLights:H.spot.length,numRectAreaLights:H.rectArea.length,numHemiLights:H.hemi.length,numDirLightShadows:H.directionalShadowMap.length,numPointLightShadows:H.pointShadowMap.length,numSpotLightShadows:H.spotShadowMap.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:w.dithering,shadowMapEnabled:o.shadowMap.enabled&&P.length>0,shadowMapType:o.shadowMap.type,toneMapping:w.toneMapped?o.toneMapping:m3,physicallyCorrectLights:o.physicallyCorrectLights,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===$1,flipSided:w.side===o2,useDepthPacking:!!w.depthPacking,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionDerivatives:w.extensions&&w.extensions.derivatives,extensionFragDepth:w.extensions&&w.extensions.fragDepth,extensionDrawBuffers:w.extensions&&w.extensions.drawBuffers,extensionShaderTextureLOD:w.extensions&&w.extensions.shaderTextureLOD,rendererExtensionFragDepth:u||a.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||a.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||a.has("EXT_shader_texture_lod"),customProgramCacheKey:w.customProgramCacheKey()}}function p(w){const H=[];if(w.shaderID?H.push(w.shaderID):(H.push(w.customVertexShaderID),H.push(w.customFragmentShaderID)),w.defines!==void 0)for(const P in w.defines)H.push(P),H.push(w.defines[P]);return w.isRawShaderMaterial===!1&&(x(H,w),z(H,w),H.push(o.outputEncoding)),H.push(w.customProgramCacheKey),H.join()}function x(w,H){w.push(H.precision),w.push(H.outputEncoding),w.push(H.envMapMode),w.push(H.envMapCubeUVHeight),w.push(H.combine),w.push(H.vertexUvs),w.push(H.fogExp2),w.push(H.sizeAttenuation),w.push(H.morphTargetsCount),w.push(H.morphAttributeCount),w.push(H.numDirLights),w.push(H.numPointLights),w.push(H.numSpotLights),w.push(H.numHemiLights),w.push(H.numRectAreaLights),w.push(H.numDirLightShadows),w.push(H.numPointLightShadows),w.push(H.numSpotLightShadows),w.push(H.shadowMapType),w.push(H.toneMapping),w.push(H.numClippingPlanes),w.push(H.numClipIntersection),w.push(H.depthPacking)}function z(w,H){s.disableAll(),H.isWebGL2&&s.enable(0),H.supportsVertexTextures&&s.enable(1),H.instancing&&s.enable(2),H.instancingColor&&s.enable(3),H.map&&s.enable(4),H.matcap&&s.enable(5),H.envMap&&s.enable(6),H.lightMap&&s.enable(7),H.aoMap&&s.enable(8),H.emissiveMap&&s.enable(9),H.bumpMap&&s.enable(10),H.normalMap&&s.enable(11),H.objectSpaceNormalMap&&s.enable(12),H.tangentSpaceNormalMap&&s.enable(13),H.clearcoat&&s.enable(14),H.clearcoatMap&&s.enable(15),H.clearcoatRoughnessMap&&s.enable(16),H.clearcoatNormalMap&&s.enable(17),H.iridescence&&s.enable(18),H.iridescenceMap&&s.enable(19),H.iridescenceThicknessMap&&s.enable(20),H.displacementMap&&s.enable(21),H.specularMap&&s.enable(22),H.roughnessMap&&s.enable(23),H.metalnessMap&&s.enable(24),H.gradientMap&&s.enable(25),H.alphaMap&&s.enable(26),H.alphaTest&&s.enable(27),H.vertexColors&&s.enable(28),H.vertexAlphas&&s.enable(29),H.vertexUvs&&s.enable(30),H.vertexTangents&&s.enable(31),H.uvsVertexOnly&&s.enable(32),H.fog&&s.enable(33),w.push(s.mask),s.disableAll(),H.useFog&&s.enable(0),H.flatShading&&s.enable(1),H.logarithmicDepthBuffer&&s.enable(2),H.skinning&&s.enable(3),H.morphTargets&&s.enable(4),H.morphNormals&&s.enable(5),H.morphColors&&s.enable(6),H.premultipliedAlpha&&s.enable(7),H.shadowMapEnabled&&s.enable(8),H.physicallyCorrectLights&&s.enable(9),H.doubleSided&&s.enable(10),H.flipSided&&s.enable(11),H.useDepthPacking&&s.enable(12),H.dithering&&s.enable(13),H.specularIntensityMap&&s.enable(14),H.specularColorMap&&s.enable(15),H.transmission&&s.enable(16),H.transmissionMap&&s.enable(17),H.thicknessMap&&s.enable(18),H.sheen&&s.enable(19),H.sheenColorMap&&s.enable(20),H.sheenRoughnessMap&&s.enable(21),H.decodeVideoTexture&&s.enable(22),H.opaque&&s.enable(23),w.push(s.mask)}function y(w){const H=m[w.type];let P;if(H){const O=h0[H];P=f9.clone(O.uniforms)}else P=w.uniforms;return P}function M(w,H){let P;for(let O=0,d1=h.length;O<d1;O++){const w1=h[O];if(w1.cacheKey===H){P=w1,++P.usedTimes;break}}return P===void 0&&(P=new kc(o,H,w,c),h.push(P)),P}function C(w){if(--w.usedTimes===0){const H=h.indexOf(w);h[H]=h[h.length-1],h.pop(),w.destroy()}}function b(w){l.remove(w)}function E(){l.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:y,acquireProgram:M,releaseProgram:C,releaseShaderCache:b,programs:h,dispose:E}}function Xc(){let o=new WeakMap;function t(c){let r=o.get(c);return r===void 0&&(r={},o.set(c,r)),r}function e(c){o.delete(c)}function a(c,r,s){o.get(c)[r]=s}function i(){o=new WeakMap}return{get:t,remove:e,update:a,dispose:i}}function $c(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.material.id!==t.material.id?o.material.id-t.material.id:o.z!==t.z?o.z-t.z:o.id-t.id}function T7(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.z!==t.z?t.z-o.z:o.id-t.id}function E7(){const o=[];let t=0;const e=[],a=[],i=[];function c(){t=0,e.length=0,a.length=0,i.length=0}function r(d,f,v,m,g,p){let x=o[t];return x===void 0?(x={id:d.id,object:d,geometry:f,material:v,groupOrder:m,renderOrder:d.renderOrder,z:g,group:p},o[t]=x):(x.id=d.id,x.object=d,x.geometry=f,x.material=v,x.groupOrder=m,x.renderOrder=d.renderOrder,x.z=g,x.group=p),t++,x}function s(d,f,v,m,g,p){const x=r(d,f,v,m,g,p);v.transmission>0?a.push(x):v.transparent===!0?i.push(x):e.push(x)}function l(d,f,v,m,g,p){const x=r(d,f,v,m,g,p);v.transmission>0?a.unshift(x):v.transparent===!0?i.unshift(x):e.unshift(x)}function h(d,f){e.length>1&&e.sort(d||$c),a.length>1&&a.sort(f||T7),i.length>1&&i.sort(f||T7)}function u(){for(let d=t,f=o.length;d<f;d++){const v=o[d];if(v.id===null)break;v.id=null,v.object=null,v.geometry=null,v.material=null,v.group=null}}return{opaque:e,transmissive:a,transparent:i,init:c,push:s,unshift:l,finish:u,sort:h}}function Yc(){let o=new WeakMap;function t(a,i){let c;return o.has(a)===!1?(c=new E7,o.set(a,[c])):i>=o.get(a).length?(c=new E7,o.get(a).push(c)):c=o.get(a)[i],c}function e(){o=new WeakMap}return{get:t,dispose:e}}function jc(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new S,color:new D1};break;case"SpotLight":e={position:new S,direction:new S,color:new D1,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new S,color:new D1,distance:0,decay:0};break;case"HemisphereLight":e={direction:new S,skyColor:new D1,groundColor:new D1};break;case"RectAreaLight":e={color:new D1,position:new S,halfWidth:new S,halfHeight:new S};break}return o[t.id]=e,e}}}function Jc(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new c1};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new c1};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new c1,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[t.id]=e,e}}}let Kc=0;function Qc(o,t){return(t.castShadow?1:0)-(o.castShadow?1:0)}function tr(o,t){const e=new jc,a=Jc(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotShadow:[],spotShadowMap:[],spotShadowMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[]};for(let u=0;u<9;u++)i.probe.push(new S);const c=new S,r=new O2,s=new O2;function l(u,d){let f=0,v=0,m=0;for(let H=0;H<9;H++)i.probe[H].set(0,0,0);let g=0,p=0,x=0,z=0,y=0,M=0,C=0,b=0;u.sort(Qc);const E=d!==!0?Math.PI:1;for(let H=0,P=u.length;H<P;H++){const O=u[H],d1=O.color,w1=O.intensity,k=O.distance,r1=O.shadow&&O.shadow.map?O.shadow.map.texture:null;if(O.isAmbientLight)f+=d1.r*w1*E,v+=d1.g*w1*E,m+=d1.b*w1*E;else if(O.isLightProbe)for(let Y=0;Y<9;Y++)i.probe[Y].addScaledVector(O.sh.coefficients[Y],w1);else if(O.isDirectionalLight){const Y=e.get(O);if(Y.color.copy(O.color).multiplyScalar(O.intensity*E),O.castShadow){const g1=O.shadow,v1=a.get(O);v1.shadowBias=g1.bias,v1.shadowNormalBias=g1.normalBias,v1.shadowRadius=g1.radius,v1.shadowMapSize=g1.mapSize,i.directionalShadow[g]=v1,i.directionalShadowMap[g]=r1,i.directionalShadowMatrix[g]=O.shadow.matrix,M++}i.directional[g]=Y,g++}else if(O.isSpotLight){const Y=e.get(O);if(Y.position.setFromMatrixPosition(O.matrixWorld),Y.color.copy(d1).multiplyScalar(w1*E),Y.distance=k,Y.coneCos=Math.cos(O.angle),Y.penumbraCos=Math.cos(O.angle*(1-O.penumbra)),Y.decay=O.decay,O.castShadow){const g1=O.shadow,v1=a.get(O);v1.shadowBias=g1.bias,v1.shadowNormalBias=g1.normalBias,v1.shadowRadius=g1.radius,v1.shadowMapSize=g1.mapSize,i.spotShadow[x]=v1,i.spotShadowMap[x]=r1,i.spotShadowMatrix[x]=O.shadow.matrix,b++}i.spot[x]=Y,x++}else if(O.isRectAreaLight){const Y=e.get(O);Y.color.copy(d1).multiplyScalar(w1),Y.halfWidth.set(O.width*.5,0,0),Y.halfHeight.set(0,O.height*.5,0),i.rectArea[z]=Y,z++}else if(O.isPointLight){const Y=e.get(O);if(Y.color.copy(O.color).multiplyScalar(O.intensity*E),Y.distance=O.distance,Y.decay=O.decay,O.castShadow){const g1=O.shadow,v1=a.get(O);v1.shadowBias=g1.bias,v1.shadowNormalBias=g1.normalBias,v1.shadowRadius=g1.radius,v1.shadowMapSize=g1.mapSize,v1.shadowCameraNear=g1.camera.near,v1.shadowCameraFar=g1.camera.far,i.pointShadow[p]=v1,i.pointShadowMap[p]=r1,i.pointShadowMatrix[p]=O.shadow.matrix,C++}i.point[p]=Y,p++}else if(O.isHemisphereLight){const Y=e.get(O);Y.skyColor.copy(O.color).multiplyScalar(w1*E),Y.groundColor.copy(O.groundColor).multiplyScalar(w1*E),i.hemi[y]=Y,y++}}z>0&&(t.isWebGL2||o.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=B1.LTC_FLOAT_1,i.rectAreaLTC2=B1.LTC_FLOAT_2):o.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=B1.LTC_HALF_1,i.rectAreaLTC2=B1.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=f,i.ambient[1]=v,i.ambient[2]=m;const w=i.hash;(w.directionalLength!==g||w.pointLength!==p||w.spotLength!==x||w.rectAreaLength!==z||w.hemiLength!==y||w.numDirectionalShadows!==M||w.numPointShadows!==C||w.numSpotShadows!==b)&&(i.directional.length=g,i.spot.length=x,i.rectArea.length=z,i.point.length=p,i.hemi.length=y,i.directionalShadow.length=M,i.directionalShadowMap.length=M,i.pointShadow.length=C,i.pointShadowMap.length=C,i.spotShadow.length=b,i.spotShadowMap.length=b,i.directionalShadowMatrix.length=M,i.pointShadowMatrix.length=C,i.spotShadowMatrix.length=b,w.directionalLength=g,w.pointLength=p,w.spotLength=x,w.rectAreaLength=z,w.hemiLength=y,w.numDirectionalShadows=M,w.numPointShadows=C,w.numSpotShadows=b,i.version=Kc++)}function h(u,d){let f=0,v=0,m=0,g=0,p=0;const x=d.matrixWorldInverse;for(let z=0,y=u.length;z<y;z++){const M=u[z];if(M.isDirectionalLight){const C=i.directional[f];C.direction.setFromMatrixPosition(M.matrixWorld),c.setFromMatrixPosition(M.target.matrixWorld),C.direction.sub(c),C.direction.transformDirection(x),f++}else if(M.isSpotLight){const C=i.spot[m];C.position.setFromMatrixPosition(M.matrixWorld),C.position.applyMatrix4(x),C.direction.setFromMatrixPosition(M.matrixWorld),c.setFromMatrixPosition(M.target.matrixWorld),C.direction.sub(c),C.direction.transformDirection(x),m++}else if(M.isRectAreaLight){const C=i.rectArea[g];C.position.setFromMatrixPosition(M.matrixWorld),C.position.applyMatrix4(x),s.identity(),r.copy(M.matrixWorld),r.premultiply(x),s.extractRotation(r),C.halfWidth.set(M.width*.5,0,0),C.halfHeight.set(0,M.height*.5,0),C.halfWidth.applyMatrix4(s),C.halfHeight.applyMatrix4(s),g++}else if(M.isPointLight){const C=i.point[v];C.position.setFromMatrixPosition(M.matrixWorld),C.position.applyMatrix4(x),v++}else if(M.isHemisphereLight){const C=i.hemi[p];C.direction.setFromMatrixPosition(M.matrixWorld),C.direction.transformDirection(x),p++}}}return{setup:l,setupView:h,state:i}}function G7(o,t){const e=new tr(o,t),a=[],i=[];function c(){a.length=0,i.length=0}function r(d){a.push(d)}function s(d){i.push(d)}function l(d){e.setup(a,d)}function h(d){e.setupView(a,d)}return{init:c,state:{lightsArray:a,shadowsArray:i,lights:e},setupLights:l,setupLightsView:h,pushLight:r,pushShadow:s}}function er(o,t){let e=new WeakMap;function a(c,r=0){let s;return e.has(c)===!1?(s=new G7(o,t),e.set(c,[s])):r>=e.get(c).length?(s=new G7(o,t),e.get(c).push(s)):s=e.get(c)[r],s}function i(){e=new WeakMap}return{get:a,dispose:i}}class R7 extends _t{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=d2,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class P7 extends _t{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new S,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.referencePosition.copy(t.referencePosition),this.nearDistance=t.nearDistance,this.farDistance=t.farDistance,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const nr=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ar=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function ir(o,t,e){let a=new se;const i=new c1,c=new c1,r=new S1,s=new R7({depthPacking:w2}),l=new P7,h={},u=e.maxTextureSize,d={0:o2,1:t2,2:$1},f=new N0({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new c1},radius:{value:4}},vertexShader:nr,fragmentShader:ar}),v=f.clone();v.defines.HORIZONTAL_PASS=1;const m=new Y2;m.setAttribute("position",new b3(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new S6(m,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=r4,this.render=function(M,C,b){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||M.length===0)return;const E=o.getRenderTarget(),w=o.getActiveCubeFace(),H=o.getActiveMipmapLevel(),P=o.state;P.setBlending(s4),P.buffers.color.setClear(1,1,1,1),P.buffers.depth.setTest(!0),P.setScissorTest(!1);for(let O=0,d1=M.length;O<d1;O++){const w1=M[O],k=w1.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",w1,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;i.copy(k.mapSize);const r1=k.getFrameExtents();if(i.multiply(r1),c.copy(k.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(c.x=Math.floor(u/r1.x),i.x=c.x*r1.x,k.mapSize.x=c.x),i.y>u&&(c.y=Math.floor(u/r1.y),i.y=c.y*r1.y,k.mapSize.y=c.y)),k.map===null){const g1=this.type!==E1?{minFilter:h2,magFilter:h2}:{};k.map=new F2(i.x,i.y,g1),k.map.texture.name=w1.name+".shadowMap",k.camera.updateProjectionMatrix()}o.setRenderTarget(k.map),o.clear();const Y=k.getViewportCount();for(let g1=0;g1<Y;g1++){const v1=k.getViewport(g1);r.set(c.x*v1.x,c.y*v1.y,c.x*v1.z,c.y*v1.w),P.viewport(r),k.updateMatrices(w1,g1),a=k.getFrustum(),y(C,b,k.camera,w1,this.type)}k.isPointLightShadow!==!0&&this.type===E1&&x(k,b),k.needsUpdate=!1}p.needsUpdate=!1,o.setRenderTarget(E,w,H)};function x(M,C){const b=t.update(g);f.defines.VSM_SAMPLES!==M.blurSamples&&(f.defines.VSM_SAMPLES=M.blurSamples,v.defines.VSM_SAMPLES=M.blurSamples,f.needsUpdate=!0,v.needsUpdate=!0),M.mapPass===null&&(M.mapPass=new F2(i.x,i.y)),f.uniforms.shadow_pass.value=M.map.texture,f.uniforms.resolution.value=M.mapSize,f.uniforms.radius.value=M.radius,o.setRenderTarget(M.mapPass),o.clear(),o.renderBufferDirect(C,null,b,f,g,null),v.uniforms.shadow_pass.value=M.mapPass.texture,v.uniforms.resolution.value=M.mapSize,v.uniforms.radius.value=M.radius,o.setRenderTarget(M.map),o.clear(),o.renderBufferDirect(C,null,b,v,g,null)}function z(M,C,b,E,w,H){let P=null;const O=b.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(O!==void 0?P=O:P=b.isPointLight===!0?l:s,o.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0){const d1=P.uuid,w1=C.uuid;let k=h[d1];k===void 0&&(k={},h[d1]=k);let r1=k[w1];r1===void 0&&(r1=P.clone(),k[w1]=r1),P=r1}return P.visible=C.visible,P.wireframe=C.wireframe,H===E1?P.side=C.shadowSide!==null?C.shadowSide:C.side:P.side=C.shadowSide!==null?C.shadowSide:d[C.side],P.alphaMap=C.alphaMap,P.alphaTest=C.alphaTest,P.clipShadows=C.clipShadows,P.clippingPlanes=C.clippingPlanes,P.clipIntersection=C.clipIntersection,P.displacementMap=C.displacementMap,P.displacementScale=C.displacementScale,P.displacementBias=C.displacementBias,P.wireframeLinewidth=C.wireframeLinewidth,P.linewidth=C.linewidth,b.isPointLight===!0&&P.isMeshDistanceMaterial===!0&&(P.referencePosition.setFromMatrixPosition(b.matrixWorld),P.nearDistance=E,P.farDistance=w),P}function y(M,C,b,E,w){if(M.visible===!1)return;if(M.layers.test(C.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&w===E1)&&(!M.frustumCulled||a.intersectsObject(M))){M.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,M.matrixWorld);const O=t.update(M),d1=M.material;if(Array.isArray(d1)){const w1=O.groups;for(let k=0,r1=w1.length;k<r1;k++){const Y=w1[k],g1=d1[Y.materialIndex];if(g1&&g1.visible){const v1=z(M,g1,E,b.near,b.far,w);o.renderBufferDirect(b,null,O,v1,M,Y)}}}else if(d1.visible){const w1=z(M,d1,E,b.near,b.far,w);o.renderBufferDirect(b,null,O,w1,M,null)}}const P=M.children;for(let O=0,d1=P.length;O<d1;O++)y(P[O],C,b,E,w)}}function cr(o,t,e){const a=e.isWebGL2;function i(){let D=!1;const W1=new S1;let a1=null;const U1=new S1(0,0,0,0);return{setMask:function(O1){a1!==O1&&!D&&(o.colorMask(O1,O1,O1,O1),a1=O1)},setLocked:function(O1){D=O1},setClear:function(O1,p4,F3,g3,W0){W0===!0&&(O1*=g3,p4*=g3,F3*=g3),W1.set(O1,p4,F3,g3),U1.equals(W1)===!1&&(o.clearColor(O1,p4,F3,g3),U1.copy(W1))},reset:function(){D=!1,a1=null,U1.set(-1,0,0,0)}}}function c(){let D=!1,W1=null,a1=null,U1=null;return{setTest:function(O1){O1?j2(2929):v2(2929)},setMask:function(O1){W1!==O1&&!D&&(o.depthMask(O1),W1=O1)},setFunc:function(O1){if(a1!==O1){if(O1)switch(O1){case e0:o.depthFunc(512);break;case n0:o.depthFunc(519);break;case d6:o.depthFunc(513);break;case U6:o.depthFunc(515);break;case I6:o.depthFunc(514);break;case f6:o.depthFunc(518);break;case A6:o.depthFunc(516);break;case V6:o.depthFunc(517);break;default:o.depthFunc(515)}else o.depthFunc(515);a1=O1}},setLocked:function(O1){D=O1},setClear:function(O1){U1!==O1&&(o.clearDepth(O1),U1=O1)},reset:function(){D=!1,W1=null,a1=null,U1=null}}}function r(){let D=!1,W1=null,a1=null,U1=null,O1=null,p4=null,F3=null,g3=null,W0=null;return{setTest:function(s3){D||(s3?j2(2960):v2(2960))},setMask:function(s3){W1!==s3&&!D&&(o.stencilMask(s3),W1=s3)},setFunc:function(s3,H0,O6){(a1!==s3||U1!==H0||O1!==O6)&&(o.stencilFunc(s3,H0,O6),a1=s3,U1=H0,O1=O6)},setOp:function(s3,H0,O6){(p4!==s3||F3!==H0||g3!==O6)&&(o.stencilOp(s3,H0,O6),p4=s3,F3=H0,g3=O6)},setLocked:function(s3){D=s3},setClear:function(s3){W0!==s3&&(o.clearStencil(s3),W0=s3)},reset:function(){D=!1,W1=null,a1=null,U1=null,O1=null,p4=null,F3=null,g3=null,W0=null}}}const s=new i,l=new c,h=new r,u=new WeakMap,d=new WeakMap;let f={},v={},m=new WeakMap,g=[],p=null,x=!1,z=null,y=null,M=null,C=null,b=null,E=null,w=null,H=!1,P=null,O=null,d1=null,w1=null,k=null;const r1=o.getParameter(35661);let Y=!1,g1=0;const v1=o.getParameter(7938);v1.indexOf("WebGL")!==-1?(g1=parseFloat(/^WebGL (\d)/.exec(v1)[1]),Y=g1>=1):v1.indexOf("OpenGL ES")!==-1&&(g1=parseFloat(/^OpenGL ES (\d)/.exec(v1)[1]),Y=g1>=2);let j=null,n1={};const y1=o.getParameter(3088),z1=o.getParameter(2978),F1=new S1().fromArray(y1),J1=new S1().fromArray(z1);function _2(D,W1,a1){const U1=new Uint8Array(4),O1=o.createTexture();o.bindTexture(D,O1),o.texParameteri(D,10241,9728),o.texParameteri(D,10240,9728);for(let p4=0;p4<a1;p4++)o.texImage2D(W1+p4,0,6408,1,1,0,6408,5121,U1);return O1}const o1={};o1[3553]=_2(3553,3553,1),o1[34067]=_2(34067,34069,6),s.setClear(0,0,0,1),l.setClear(1),h.setClear(0),j2(2929),l.setFunc(U6),G1(!1),B2(X1),j2(2884),H1(s4);function j2(D){f[D]!==!0&&(o.enable(D),f[D]=!0)}function v2(D){f[D]!==!1&&(o.disable(D),f[D]=!1)}function S2(D,W1){return v[D]!==W1?(o.bindFramebuffer(D,W1),v[D]=W1,a&&(D===36009&&(v[36160]=W1),D===36160&&(v[36009]=W1)),!0):!1}function R1(D,W1){let a1=g,U1=!1;if(D)if(a1=m.get(W1),a1===void 0&&(a1=[],m.set(W1,a1)),D.isWebGLMultipleRenderTargets){const O1=D.texture;if(a1.length!==O1.length||a1[0]!==36064){for(let p4=0,F3=O1.length;p4<F3;p4++)a1[p4]=36064+p4;a1.length=O1.length,U1=!0}}else a1[0]!==36064&&(a1[0]=36064,U1=!0);else a1[0]!==1029&&(a1[0]=1029,U1=!0);U1&&(e.isWebGL2?o.drawBuffers(a1):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(a1))}function i4(D){return p!==D?(o.useProgram(D),p=D,!0):!1}const h1={[R4]:32774,[C4]:32778,[P4]:32779};if(a)h1[N1]=32775,h1[$]=32776;else{const D=t.get("EXT_blend_minmax");D!==null&&(h1[N1]=D.MIN_EXT,h1[$]=D.MAX_EXT)}const s1={[K]:0,[b1]:1,[e2]:768,[R2]:770,[u6]:776,[j3]:774,[B3]:772,[G2]:769,[B4]:771,[H6]:775,[Y3]:773};function H1(D,W1,a1,U1,O1,p4,F3,g3){if(D===s4){x===!0&&(v2(3042),x=!1);return}if(x===!1&&(j2(3042),x=!0),D!==y3){if(D!==z||g3!==H){if((y!==R4||b!==R4)&&(o.blendEquation(32774),y=R4,b=R4),g3)switch(D){case c4:o.blendFuncSeparate(1,771,1,771);break;case Q4:o.blendFunc(1,1);break;case a3:o.blendFuncSeparate(0,769,0,1);break;case p3:o.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case c4:o.blendFuncSeparate(770,771,1,771);break;case Q4:o.blendFunc(770,1);break;case a3:o.blendFuncSeparate(0,769,0,1);break;case p3:o.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}M=null,C=null,E=null,w=null,z=D,H=g3}return}O1=O1||W1,p4=p4||a1,F3=F3||U1,(W1!==y||O1!==b)&&(o.blendEquationSeparate(h1[W1],h1[O1]),y=W1,b=O1),(a1!==M||U1!==C||p4!==E||F3!==w)&&(o.blendFuncSeparate(s1[a1],s1[U1],s1[p4],s1[F3]),M=a1,C=U1,E=p4,w=F3),z=D,H=null}function i2(D,W1){D.side===$1?v2(2884):j2(2884);let a1=D.side===o2;W1&&(a1=!a1),G1(a1),D.blending===c4&&D.transparent===!1?H1(s4):H1(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.premultipliedAlpha),l.setFunc(D.depthFunc),l.setTest(D.depthTest),l.setMask(D.depthWrite),s.setMask(D.colorWrite);const U1=D.stencilWrite;h.setTest(U1),U1&&(h.setMask(D.stencilWriteMask),h.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),h.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),f2(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?j2(32926):v2(32926)}function G1(D){P!==D&&(D?o.frontFace(2304):o.frontFace(2305),P=D)}function B2(D){D!==E2?(j2(2884),D!==O&&(D===X1?o.cullFace(1029):D===_1?o.cullFace(1028):o.cullFace(1032))):v2(2884),O=D}function m2(D){D!==d1&&(Y&&o.lineWidth(D),d1=D)}function f2(D,W1,a1){D?(j2(32823),(w1!==W1||k!==a1)&&(o.polygonOffset(W1,a1),w1=W1,k=a1)):v2(32823)}function Y4(D){D?j2(3089):v2(3089)}function F4(D){D===void 0&&(D=33984+r1-1),j!==D&&(o.activeTexture(D),j=D)}function I(D,W1){j===null&&F4();let a1=n1[j];a1===void 0&&(a1={type:void 0,texture:void 0},n1[j]=a1),(a1.type!==D||a1.texture!==W1)&&(o.bindTexture(D,W1||o1[D]),a1.type=D,a1.texture=W1)}function _(){const D=n1[j];D!==void 0&&D.type!==void 0&&(o.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function Q(){try{o.compressedTexImage2D.apply(o,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function M1(){try{o.texSubImage2D.apply(o,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function I1(){try{o.texSubImage3D.apply(o,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function P1(){try{o.compressedTexSubImage2D.apply(o,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function b2(){try{o.texStorage2D.apply(o,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function t1(){try{o.texStorage3D.apply(o,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function c2(){try{o.texImage2D.apply(o,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function q1(){try{o.texImage3D.apply(o,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function l2(D){F1.equals(D)===!1&&(o.scissor(D.x,D.y,D.z,D.w),F1.copy(D))}function Y1(D){J1.equals(D)===!1&&(o.viewport(D.x,D.y,D.z,D.w),J1.copy(D))}function W2(D,W1){let a1=d.get(W1);a1===void 0&&(a1=new WeakMap,d.set(W1,a1));let U1=a1.get(D);U1===void 0&&(U1=o.getUniformBlockIndex(W1,D.name),a1.set(D,U1))}function _4(D,W1){const U1=d.get(W1).get(D);u.get(D)!==U1&&(o.uniformBlockBinding(W1,U1,D.__bindingPointIndex),u.set(D,U1))}function v3(){o.disable(3042),o.disable(2884),o.disable(2929),o.disable(32823),o.disable(3089),o.disable(2960),o.disable(32926),o.blendEquation(32774),o.blendFunc(1,0),o.blendFuncSeparate(1,0,1,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(513),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(519,0,4294967295),o.stencilOp(7680,7680,7680),o.clearStencil(0),o.cullFace(1029),o.frontFace(2305),o.polygonOffset(0,0),o.activeTexture(33984),o.bindFramebuffer(36160,null),a===!0&&(o.bindFramebuffer(36009,null),o.bindFramebuffer(36008,null)),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),f={},j=null,n1={},v={},m=new WeakMap,g=[],p=null,x=!1,z=null,y=null,M=null,C=null,b=null,E=null,w=null,H=!1,P=null,O=null,d1=null,w1=null,k=null,F1.set(0,0,o.canvas.width,o.canvas.height),J1.set(0,0,o.canvas.width,o.canvas.height),s.reset(),l.reset(),h.reset()}return{buffers:{color:s,depth:l,stencil:h},enable:j2,disable:v2,bindFramebuffer:S2,drawBuffers:R1,useProgram:i4,setBlending:H1,setMaterial:i2,setFlipSided:G1,setCullFace:B2,setLineWidth:m2,setPolygonOffset:f2,setScissorTest:Y4,activeTexture:F4,bindTexture:I,unbindTexture:_,compressedTexImage2D:Q,texImage2D:c2,texImage3D:q1,updateUBOMapping:W2,uniformBlockBinding:_4,texStorage2D:b2,texStorage3D:t1,texSubImage2D:M1,texSubImage3D:I1,compressedTexSubImage2D:P1,scissor:l2,viewport:Y1,reset:v3}}function rr(o,t,e,a,i,c,r){const s=i.isWebGL2,l=i.maxTextures,h=i.maxCubemapSize,u=i.maxTextureSize,d=i.maxSamples,f=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,v=/OculusBrowser/g.test(navigator.userAgent),m=new WeakMap;let g;const p=new WeakMap;let x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function z(I,_){return x?new OffscreenCanvas(I,_):I0("canvas")}function y(I,_,Q,M1){let I1=1;if((I.width>M1||I.height>M1)&&(I1=M1/Math.max(I.width,I.height)),I1<1||_===!0)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap){const P1=_?dt:Math.floor,b2=P1(I1*I.width),t1=P1(I1*I.height);g===void 0&&(g=z(b2,t1));const c2=Q?z(b2,t1):g;return c2.width=b2,c2.height=t1,c2.getContext("2d").drawImage(I,0,0,b2,t1),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+I.width+"x"+I.height+") to ("+b2+"x"+t1+")."),c2}else return"data"in I&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+I.width+"x"+I.height+")."),I;return I}function M(I){return ut(I.width)&&ut(I.height)}function C(I){return s?!1:I.wrapS!==s2||I.wrapT!==s2||I.minFilter!==h2&&I.minFilter!==u2}function b(I,_){return I.generateMipmaps&&_&&I.minFilter!==h2&&I.minFilter!==u2}function E(I){o.generateMipmap(I)}function w(I,_,Q,M1,I1=!1){if(s===!1)return _;if(I!==null){if(o[I]!==void 0)return o[I];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let P1=_;return _===6403&&(Q===5126&&(P1=33326),Q===5131&&(P1=33325),Q===5121&&(P1=33321)),_===33319&&(Q===5126&&(P1=33328),Q===5131&&(P1=33327),Q===5121&&(P1=33323)),_===6408&&(Q===5126&&(P1=34836),Q===5131&&(P1=34842),Q===5121&&(P1=M1===C1&&I1===!1?35907:32856),Q===32819&&(P1=32854),Q===32820&&(P1=32855)),(P1===33325||P1===33326||P1===33327||P1===33328||P1===34842||P1===34836)&&t.get("EXT_color_buffer_float"),P1}function H(I,_,Q){return b(I,Q)===!0||I.isFramebufferTexture&&I.minFilter!==h2&&I.minFilter!==u2?Math.log2(Math.max(_.width,_.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?_.mipmaps.length:1}function P(I){return I===h2||I===K2||I===Q2?9728:9729}function O(I){const _=I.target;_.removeEventListener("dispose",O),w1(_),_.isVideoTexture&&m.delete(_)}function d1(I){const _=I.target;_.removeEventListener("dispose",d1),r1(_)}function w1(I){const _=a.get(I);if(_.__webglInit===void 0)return;const Q=I.source,M1=p.get(Q);if(M1){const I1=M1[_.__cacheKey];I1.usedTimes--,I1.usedTimes===0&&k(I),Object.keys(M1).length===0&&p.delete(Q)}a.remove(I)}function k(I){const _=a.get(I);o.deleteTexture(_.__webglTexture);const Q=I.source,M1=p.get(Q);delete M1[_.__cacheKey],r.memory.textures--}function r1(I){const _=I.texture,Q=a.get(I),M1=a.get(_);if(M1.__webglTexture!==void 0&&(o.deleteTexture(M1.__webglTexture),r.memory.textures--),I.depthTexture&&I.depthTexture.dispose(),I.isWebGLCubeRenderTarget)for(let I1=0;I1<6;I1++)o.deleteFramebuffer(Q.__webglFramebuffer[I1]),Q.__webglDepthbuffer&&o.deleteRenderbuffer(Q.__webglDepthbuffer[I1]);else{if(o.deleteFramebuffer(Q.__webglFramebuffer),Q.__webglDepthbuffer&&o.deleteRenderbuffer(Q.__webglDepthbuffer),Q.__webglMultisampledFramebuffer&&o.deleteFramebuffer(Q.__webglMultisampledFramebuffer),Q.__webglColorRenderbuffer)for(let I1=0;I1<Q.__webglColorRenderbuffer.length;I1++)Q.__webglColorRenderbuffer[I1]&&o.deleteRenderbuffer(Q.__webglColorRenderbuffer[I1]);Q.__webglDepthRenderbuffer&&o.deleteRenderbuffer(Q.__webglDepthRenderbuffer)}if(I.isWebGLMultipleRenderTargets)for(let I1=0,P1=_.length;I1<P1;I1++){const b2=a.get(_[I1]);b2.__webglTexture&&(o.deleteTexture(b2.__webglTexture),r.memory.textures--),a.remove(_[I1])}a.remove(_),a.remove(I)}let Y=0;function g1(){Y=0}function v1(){const I=Y;return I>=l&&console.warn("THREE.WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+l),Y+=1,I}function j(I){const _=[];return _.push(I.wrapS),_.push(I.wrapT),_.push(I.magFilter),_.push(I.minFilter),_.push(I.anisotropy),_.push(I.internalFormat),_.push(I.format),_.push(I.type),_.push(I.generateMipmaps),_.push(I.premultiplyAlpha),_.push(I.flipY),_.push(I.unpackAlignment),_.push(I.encoding),_.join()}function n1(I,_){const Q=a.get(I);if(I.isVideoTexture&&Y4(I),I.isRenderTargetTexture===!1&&I.version>0&&Q.__version!==I.version){const M1=I.image;if(M1===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(M1.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{v2(Q,I,_);return}}e.activeTexture(33984+_),e.bindTexture(3553,Q.__webglTexture)}function y1(I,_){const Q=a.get(I);if(I.version>0&&Q.__version!==I.version){v2(Q,I,_);return}e.activeTexture(33984+_),e.bindTexture(35866,Q.__webglTexture)}function z1(I,_){const Q=a.get(I);if(I.version>0&&Q.__version!==I.version){v2(Q,I,_);return}e.activeTexture(33984+_),e.bindTexture(32879,Q.__webglTexture)}function F1(I,_){const Q=a.get(I);if(I.version>0&&Q.__version!==I.version){S2(Q,I,_);return}e.activeTexture(33984+_),e.bindTexture(34067,Q.__webglTexture)}const J1={[r2]:10497,[s2]:33071,[P2]:33648},_2={[h2]:9728,[K2]:9984,[Q2]:9986,[u2]:9729,[l3]:9985,[k1]:9987};function o1(I,_,Q){if(Q?(o.texParameteri(I,10242,J1[_.wrapS]),o.texParameteri(I,10243,J1[_.wrapT]),(I===32879||I===35866)&&o.texParameteri(I,32882,J1[_.wrapR]),o.texParameteri(I,10240,_2[_.magFilter]),o.texParameteri(I,10241,_2[_.minFilter])):(o.texParameteri(I,10242,33071),o.texParameteri(I,10243,33071),(I===32879||I===35866)&&o.texParameteri(I,32882,33071),(_.wrapS!==s2||_.wrapT!==s2)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),o.texParameteri(I,10240,P(_.magFilter)),o.texParameteri(I,10241,P(_.minFilter)),_.minFilter!==h2&&_.minFilter!==u2&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),t.has("EXT_texture_filter_anisotropic")===!0){const M1=t.get("EXT_texture_filter_anisotropic");if(_.type===X2&&t.has("OES_texture_float_linear")===!1||s===!1&&_.type===E3&&t.has("OES_texture_half_float_linear")===!1)return;(_.anisotropy>1||a.get(_).__currentAnisotropy)&&(o.texParameterf(I,M1.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,i.getMaxAnisotropy())),a.get(_).__currentAnisotropy=_.anisotropy)}}function j2(I,_){let Q=!1;I.__webglInit===void 0&&(I.__webglInit=!0,_.addEventListener("dispose",O));const M1=_.source;let I1=p.get(M1);I1===void 0&&(I1={},p.set(M1,I1));const P1=j(_);if(P1!==I.__cacheKey){I1[P1]===void 0&&(I1[P1]={texture:o.createTexture(),usedTimes:0},r.memory.textures++,Q=!0),I1[P1].usedTimes++;const b2=I1[I.__cacheKey];b2!==void 0&&(I1[I.__cacheKey].usedTimes--,b2.usedTimes===0&&k(_)),I.__cacheKey=P1,I.__webglTexture=I1[P1].texture}return Q}function v2(I,_,Q){let M1=3553;_.isDataArrayTexture&&(M1=35866),_.isData3DTexture&&(M1=32879);const I1=j2(I,_),P1=_.source;if(e.activeTexture(33984+Q),e.bindTexture(M1,I.__webglTexture),P1.version!==P1.__currentVersion||I1===!0){o.pixelStorei(37440,_.flipY),o.pixelStorei(37441,_.premultiplyAlpha),o.pixelStorei(3317,_.unpackAlignment),o.pixelStorei(37443,0);const b2=C(_)&&M(_.image)===!1;let t1=y(_.image,b2,!1,u);t1=F4(_,t1);const c2=M(t1)||s,q1=c.convert(_.format,_.encoding);let l2=c.convert(_.type),Y1=w(_.internalFormat,q1,l2,_.encoding,_.isVideoTexture);o1(M1,_,c2);let W2;const _4=_.mipmaps,v3=s&&_.isVideoTexture!==!0,D=P1.__currentVersion===void 0||I1===!0,W1=H(_,t1,c2);if(_.isDepthTexture)Y1=6402,s?_.type===X2?Y1=36012:_.type===M4?Y1=33190:_.type===V4?Y1=35056:Y1=33189:_.type===X2&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),_.format===V1&&Y1===6402&&_.type!==N3&&_.type!==M4&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),_.type=M4,l2=c.convert(_.type)),_.format===Z1&&Y1===6402&&(Y1=34041,_.type!==V4&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),_.type=V4,l2=c.convert(_.type))),D&&(v3?e.texStorage2D(3553,1,Y1,t1.width,t1.height):e.texImage2D(3553,0,Y1,t1.width,t1.height,0,q1,l2,null));else if(_.isDataTexture)if(_4.length>0&&c2){v3&&D&&e.texStorage2D(3553,W1,Y1,_4[0].width,_4[0].height);for(let a1=0,U1=_4.length;a1<U1;a1++)W2=_4[a1],v3?e.texSubImage2D(3553,a1,0,0,W2.width,W2.height,q1,l2,W2.data):e.texImage2D(3553,a1,Y1,W2.width,W2.height,0,q1,l2,W2.data);_.generateMipmaps=!1}else v3?(D&&e.texStorage2D(3553,W1,Y1,t1.width,t1.height),e.texSubImage2D(3553,0,0,0,t1.width,t1.height,q1,l2,t1.data)):e.texImage2D(3553,0,Y1,t1.width,t1.height,0,q1,l2,t1.data);else if(_.isCompressedTexture){v3&&D&&e.texStorage2D(3553,W1,Y1,_4[0].width,_4[0].height);for(let a1=0,U1=_4.length;a1<U1;a1++)W2=_4[a1],_.format!==N?q1!==null?v3?e.compressedTexSubImage2D(3553,a1,0,0,W2.width,W2.height,q1,W2.data):e.compressedTexImage2D(3553,a1,Y1,W2.width,W2.height,0,W2.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):v3?e.texSubImage2D(3553,a1,0,0,W2.width,W2.height,q1,l2,W2.data):e.texImage2D(3553,a1,Y1,W2.width,W2.height,0,q1,l2,W2.data)}else if(_.isDataArrayTexture)v3?(D&&e.texStorage3D(35866,W1,Y1,t1.width,t1.height,t1.depth),e.texSubImage3D(35866,0,0,0,0,t1.width,t1.height,t1.depth,q1,l2,t1.data)):e.texImage3D(35866,0,Y1,t1.width,t1.height,t1.depth,0,q1,l2,t1.data);else if(_.isData3DTexture)v3?(D&&e.texStorage3D(32879,W1,Y1,t1.width,t1.height,t1.depth),e.texSubImage3D(32879,0,0,0,0,t1.width,t1.height,t1.depth,q1,l2,t1.data)):e.texImage3D(32879,0,Y1,t1.width,t1.height,t1.depth,0,q1,l2,t1.data);else if(_.isFramebufferTexture){if(D)if(v3)e.texStorage2D(3553,W1,Y1,t1.width,t1.height);else{let a1=t1.width,U1=t1.height;for(let O1=0;O1<W1;O1++)e.texImage2D(3553,O1,Y1,a1,U1,0,q1,l2,null),a1>>=1,U1>>=1}}else if(_4.length>0&&c2){v3&&D&&e.texStorage2D(3553,W1,Y1,_4[0].width,_4[0].height);for(let a1=0,U1=_4.length;a1<U1;a1++)W2=_4[a1],v3?e.texSubImage2D(3553,a1,0,0,q1,l2,W2):e.texImage2D(3553,a1,Y1,q1,l2,W2);_.generateMipmaps=!1}else v3?(D&&e.texStorage2D(3553,W1,Y1,t1.width,t1.height),e.texSubImage2D(3553,0,0,0,q1,l2,t1)):e.texImage2D(3553,0,Y1,q1,l2,t1);b(_,c2)&&E(M1),P1.__currentVersion=P1.version,_.onUpdate&&_.onUpdate(_)}I.__version=_.version}function S2(I,_,Q){if(_.image.length!==6)return;const M1=j2(I,_),I1=_.source;if(e.activeTexture(33984+Q),e.bindTexture(34067,I.__webglTexture),I1.version!==I1.__currentVersion||M1===!0){o.pixelStorei(37440,_.flipY),o.pixelStorei(37441,_.premultiplyAlpha),o.pixelStorei(3317,_.unpackAlignment),o.pixelStorei(37443,0);const P1=_.isCompressedTexture||_.image[0].isCompressedTexture,b2=_.image[0]&&_.image[0].isDataTexture,t1=[];for(let a1=0;a1<6;a1++)!P1&&!b2?t1[a1]=y(_.image[a1],!1,!0,h):t1[a1]=b2?_.image[a1].image:_.image[a1],t1[a1]=F4(_,t1[a1]);const c2=t1[0],q1=M(c2)||s,l2=c.convert(_.format,_.encoding),Y1=c.convert(_.type),W2=w(_.internalFormat,l2,Y1,_.encoding),_4=s&&_.isVideoTexture!==!0,v3=I1.__currentVersion===void 0||M1===!0;let D=H(_,c2,q1);o1(34067,_,q1);let W1;if(P1){_4&&v3&&e.texStorage2D(34067,D,W2,c2.width,c2.height);for(let a1=0;a1<6;a1++){W1=t1[a1].mipmaps;for(let U1=0;U1<W1.length;U1++){const O1=W1[U1];_.format!==N?l2!==null?_4?e.compressedTexSubImage2D(34069+a1,U1,0,0,O1.width,O1.height,l2,O1.data):e.compressedTexImage2D(34069+a1,U1,W2,O1.width,O1.height,0,O1.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):_4?e.texSubImage2D(34069+a1,U1,0,0,O1.width,O1.height,l2,Y1,O1.data):e.texImage2D(34069+a1,U1,W2,O1.width,O1.height,0,l2,Y1,O1.data)}}}else{W1=_.mipmaps,_4&&v3&&(W1.length>0&&D++,e.texStorage2D(34067,D,W2,t1[0].width,t1[0].height));for(let a1=0;a1<6;a1++)if(b2){_4?e.texSubImage2D(34069+a1,0,0,0,t1[a1].width,t1[a1].height,l2,Y1,t1[a1].data):e.texImage2D(34069+a1,0,W2,t1[a1].width,t1[a1].height,0,l2,Y1,t1[a1].data);for(let U1=0;U1<W1.length;U1++){const p4=W1[U1].image[a1].image;_4?e.texSubImage2D(34069+a1,U1+1,0,0,p4.width,p4.height,l2,Y1,p4.data):e.texImage2D(34069+a1,U1+1,W2,p4.width,p4.height,0,l2,Y1,p4.data)}}else{_4?e.texSubImage2D(34069+a1,0,0,0,l2,Y1,t1[a1]):e.texImage2D(34069+a1,0,W2,l2,Y1,t1[a1]);for(let U1=0;U1<W1.length;U1++){const O1=W1[U1];_4?e.texSubImage2D(34069+a1,U1+1,0,0,l2,Y1,O1.image[a1]):e.texImage2D(34069+a1,U1+1,W2,l2,Y1,O1.image[a1])}}}b(_,q1)&&E(34067),I1.__currentVersion=I1.version,_.onUpdate&&_.onUpdate(_)}I.__version=_.version}function R1(I,_,Q,M1,I1){const P1=c.convert(Q.format,Q.encoding),b2=c.convert(Q.type),t1=w(Q.internalFormat,P1,b2,Q.encoding);a.get(_).__hasExternalTextures||(I1===32879||I1===35866?e.texImage3D(I1,0,t1,_.width,_.height,_.depth,0,P1,b2,null):e.texImage2D(I1,0,t1,_.width,_.height,0,P1,b2,null)),e.bindFramebuffer(36160,I),f2(_)?f.framebufferTexture2DMultisampleEXT(36160,M1,I1,a.get(Q).__webglTexture,0,m2(_)):o.framebufferTexture2D(36160,M1,I1,a.get(Q).__webglTexture,0),e.bindFramebuffer(36160,null)}function i4(I,_,Q){if(o.bindRenderbuffer(36161,I),_.depthBuffer&&!_.stencilBuffer){let M1=33189;if(Q||f2(_)){const I1=_.depthTexture;I1&&I1.isDepthTexture&&(I1.type===X2?M1=36012:I1.type===M4&&(M1=33190));const P1=m2(_);f2(_)?f.renderbufferStorageMultisampleEXT(36161,P1,M1,_.width,_.height):o.renderbufferStorageMultisample(36161,P1,M1,_.width,_.height)}else o.renderbufferStorage(36161,M1,_.width,_.height);o.framebufferRenderbuffer(36160,36096,36161,I)}else if(_.depthBuffer&&_.stencilBuffer){const M1=m2(_);Q&&f2(_)===!1?o.renderbufferStorageMultisample(36161,M1,35056,_.width,_.height):f2(_)?f.renderbufferStorageMultisampleEXT(36161,M1,35056,_.width,_.height):o.renderbufferStorage(36161,34041,_.width,_.height),o.framebufferRenderbuffer(36160,33306,36161,I)}else{const M1=_.isWebGLMultipleRenderTargets===!0?_.texture:[_.texture];for(let I1=0;I1<M1.length;I1++){const P1=M1[I1],b2=c.convert(P1.format,P1.encoding),t1=c.convert(P1.type),c2=w(P1.internalFormat,b2,t1,P1.encoding),q1=m2(_);Q&&f2(_)===!1?o.renderbufferStorageMultisample(36161,q1,c2,_.width,_.height):f2(_)?f.renderbufferStorageMultisampleEXT(36161,q1,c2,_.width,_.height):o.renderbufferStorage(36161,c2,_.width,_.height)}}o.bindRenderbuffer(36161,null)}function h1(I,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(36160,I),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!a.get(_.depthTexture).__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),n1(_.depthTexture,0);const M1=a.get(_.depthTexture).__webglTexture,I1=m2(_);if(_.depthTexture.format===V1)f2(_)?f.framebufferTexture2DMultisampleEXT(36160,36096,3553,M1,0,I1):o.framebufferTexture2D(36160,36096,3553,M1,0);else if(_.depthTexture.format===Z1)f2(_)?f.framebufferTexture2DMultisampleEXT(36160,33306,3553,M1,0,I1):o.framebufferTexture2D(36160,33306,3553,M1,0);else throw new Error("Unknown depthTexture format")}function s1(I){const _=a.get(I),Q=I.isWebGLCubeRenderTarget===!0;if(I.depthTexture&&!_.__autoAllocateDepthBuffer){if(Q)throw new Error("target.depthTexture not supported in Cube render targets");h1(_.__webglFramebuffer,I)}else if(Q){_.__webglDepthbuffer=[];for(let M1=0;M1<6;M1++)e.bindFramebuffer(36160,_.__webglFramebuffer[M1]),_.__webglDepthbuffer[M1]=o.createRenderbuffer(),i4(_.__webglDepthbuffer[M1],I,!1)}else e.bindFramebuffer(36160,_.__webglFramebuffer),_.__webglDepthbuffer=o.createRenderbuffer(),i4(_.__webglDepthbuffer,I,!1);e.bindFramebuffer(36160,null)}function H1(I,_,Q){const M1=a.get(I);_!==void 0&&R1(M1.__webglFramebuffer,I,I.texture,36064,3553),Q!==void 0&&s1(I)}function i2(I){const _=I.texture,Q=a.get(I),M1=a.get(_);I.addEventListener("dispose",d1),I.isWebGLMultipleRenderTargets!==!0&&(M1.__webglTexture===void 0&&(M1.__webglTexture=o.createTexture()),M1.__version=_.version,r.memory.textures++);const I1=I.isWebGLCubeRenderTarget===!0,P1=I.isWebGLMultipleRenderTargets===!0,b2=M(I)||s;if(I1){Q.__webglFramebuffer=[];for(let t1=0;t1<6;t1++)Q.__webglFramebuffer[t1]=o.createFramebuffer()}else{if(Q.__webglFramebuffer=o.createFramebuffer(),P1)if(i.drawBuffers){const t1=I.texture;for(let c2=0,q1=t1.length;c2<q1;c2++){const l2=a.get(t1[c2]);l2.__webglTexture===void 0&&(l2.__webglTexture=o.createTexture(),r.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(s&&I.samples>0&&f2(I)===!1){const t1=P1?_:[_];Q.__webglMultisampledFramebuffer=o.createFramebuffer(),Q.__webglColorRenderbuffer=[],e.bindFramebuffer(36160,Q.__webglMultisampledFramebuffer);for(let c2=0;c2<t1.length;c2++){const q1=t1[c2];Q.__webglColorRenderbuffer[c2]=o.createRenderbuffer(),o.bindRenderbuffer(36161,Q.__webglColorRenderbuffer[c2]);const l2=c.convert(q1.format,q1.encoding),Y1=c.convert(q1.type),W2=w(q1.internalFormat,l2,Y1,q1.encoding),_4=m2(I);o.renderbufferStorageMultisample(36161,_4,W2,I.width,I.height),o.framebufferRenderbuffer(36160,36064+c2,36161,Q.__webglColorRenderbuffer[c2])}o.bindRenderbuffer(36161,null),I.depthBuffer&&(Q.__webglDepthRenderbuffer=o.createRenderbuffer(),i4(Q.__webglDepthRenderbuffer,I,!0)),e.bindFramebuffer(36160,null)}}if(I1){e.bindTexture(34067,M1.__webglTexture),o1(34067,_,b2);for(let t1=0;t1<6;t1++)R1(Q.__webglFramebuffer[t1],I,_,36064,34069+t1);b(_,b2)&&E(34067),e.unbindTexture()}else if(P1){const t1=I.texture;for(let c2=0,q1=t1.length;c2<q1;c2++){const l2=t1[c2],Y1=a.get(l2);e.bindTexture(3553,Y1.__webglTexture),o1(3553,l2,b2),R1(Q.__webglFramebuffer,I,l2,36064+c2,3553),b(l2,b2)&&E(3553)}e.unbindTexture()}else{let t1=3553;(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(s?t1=I.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(t1,M1.__webglTexture),o1(t1,_,b2),R1(Q.__webglFramebuffer,I,_,36064,t1),b(_,b2)&&E(t1),e.unbindTexture()}I.depthBuffer&&s1(I)}function G1(I){const _=M(I)||s,Q=I.isWebGLMultipleRenderTargets===!0?I.texture:[I.texture];for(let M1=0,I1=Q.length;M1<I1;M1++){const P1=Q[M1];if(b(P1,_)){const b2=I.isWebGLCubeRenderTarget?34067:3553,t1=a.get(P1).__webglTexture;e.bindTexture(b2,t1),E(b2),e.unbindTexture()}}}function B2(I){if(s&&I.samples>0&&f2(I)===!1){const _=I.isWebGLMultipleRenderTargets?I.texture:[I.texture],Q=I.width,M1=I.height;let I1=16384;const P1=[],b2=I.stencilBuffer?33306:36096,t1=a.get(I),c2=I.isWebGLMultipleRenderTargets===!0;if(c2)for(let q1=0;q1<_.length;q1++)e.bindFramebuffer(36160,t1.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(36160,36064+q1,36161,null),e.bindFramebuffer(36160,t1.__webglFramebuffer),o.framebufferTexture2D(36009,36064+q1,3553,null,0);e.bindFramebuffer(36008,t1.__webglMultisampledFramebuffer),e.bindFramebuffer(36009,t1.__webglFramebuffer);for(let q1=0;q1<_.length;q1++){P1.push(36064+q1),I.depthBuffer&&P1.push(b2);const l2=t1.__ignoreDepthValues!==void 0?t1.__ignoreDepthValues:!1;if(l2===!1&&(I.depthBuffer&&(I1|=256),I.stencilBuffer&&(I1|=1024)),c2&&o.framebufferRenderbuffer(36008,36064,36161,t1.__webglColorRenderbuffer[q1]),l2===!0&&(o.invalidateFramebuffer(36008,[b2]),o.invalidateFramebuffer(36009,[b2])),c2){const Y1=a.get(_[q1]).__webglTexture;o.framebufferTexture2D(36009,36064,3553,Y1,0)}o.blitFramebuffer(0,0,Q,M1,0,0,Q,M1,I1,9728),v&&o.invalidateFramebuffer(36008,P1)}if(e.bindFramebuffer(36008,null),e.bindFramebuffer(36009,null),c2)for(let q1=0;q1<_.length;q1++){e.bindFramebuffer(36160,t1.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(36160,36064+q1,36161,t1.__webglColorRenderbuffer[q1]);const l2=a.get(_[q1]).__webglTexture;e.bindFramebuffer(36160,t1.__webglFramebuffer),o.framebufferTexture2D(36009,36064+q1,3553,l2,0)}e.bindFramebuffer(36009,t1.__webglMultisampledFramebuffer)}}function m2(I){return Math.min(d,I.samples)}function f2(I){const _=a.get(I);return s&&I.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function Y4(I){const _=r.render.frame;m.get(I)!==_&&(m.set(I,_),I.update())}function F4(I,_){const Q=I.encoding,M1=I.format,I1=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||I.format===$6||Q!==L1&&(Q===C1?s===!1?t.has("EXT_sRGB")===!0&&M1===N?(I.format=$6,I.minFilter=u2,I.generateMipmaps=!1):_=L8.sRGBToLinear(_):(M1!==N||I1!==U2)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",Q)),_}this.allocateTextureUnit=v1,this.resetTextureUnits=g1,this.setTexture2D=n1,this.setTexture2DArray=y1,this.setTexture3D=z1,this.setTextureCube=F1,this.rebindTextures=H1,this.setupRenderTarget=i2,this.updateRenderTargetMipmap=G1,this.updateMultisampleRenderTarget=B2,this.setupDepthRenderbuffer=s1,this.setupFrameBufferTexture=R1,this.useMultisampledRTT=f2}function sr(o,t,e){const a=e.isWebGL2;function i(c,r=null){let s;if(c===U2)return 5121;if(c===$2)return 32819;if(c===r6)return 32820;if(c===D4)return 5120;if(c===D3)return 5122;if(c===N3)return 5123;if(c===O3)return 5124;if(c===M4)return 5125;if(c===X2)return 5126;if(c===E3)return a?5131:(s=t.get("OES_texture_half_float"),s!==null?s.HALF_FLOAT_OES:null);if(c===T6)return 6406;if(c===N)return 6408;if(c===p1)return 6409;if(c===A1)return 6410;if(c===V1)return 6402;if(c===Z1)return 34041;if(c===A2)return 6403;if(c===Z)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(c===$6)return s=t.get("EXT_sRGB"),s!==null?s.SRGB_ALPHA_EXT:null;if(c===K1)return 36244;if(c===z2)return 33319;if(c===L2)return 33320;if(c===g2)return 36249;if(c===Q1||c===a2||c===D2||c===o4)if(r===C1)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(c===Q1)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(c===a2)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(c===D2)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(c===o4)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(c===Q1)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(c===a2)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(c===D2)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(c===o4)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(c===N2||c===C2||c===V2||c===n4)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(c===N2)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(c===C2)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(c===V2)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(c===n4)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(c===w4)return s=t.get("WEBGL_compressed_texture_etc1"),s!==null?s.COMPRESSED_RGB_ETC1_WEBGL:null;if(c===Z2||c===l4)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(c===Z2)return r===C1?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(c===l4)return r===C1?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(c===h4||c===Z4||c===W4||c===j4||c===i3||c===J4||c===J3||c===b4||c===h3||c===s6||c===o6||c===g6||c===K3||c===E6)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(c===h4)return r===C1?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(c===Z4)return r===C1?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(c===W4)return r===C1?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(c===j4)return r===C1?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(c===i3)return r===C1?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(c===J4)return r===C1?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(c===J3)return r===C1?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(c===b4)return r===C1?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(c===h3)return r===C1?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(c===s6)return r===C1?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(c===o6)return r===C1?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(c===g6)return r===C1?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(c===K3)return r===C1?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(c===E6)return r===C1?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(c===W6)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(c===W6)return r===C1?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;return c===V4?a?34042:(s=t.get("WEBGL_depth_texture"),s!==null?s.UNSIGNED_INT_24_8_WEBGL:null):o[c]!==void 0?o[c]:null}return{convert:i}}class or extends R3{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class c8 extends A3{constructor(){super(),this.isGroup=!0,this.type="Group"}}const lr={type:"move"};class ge{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new c8,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new c8,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new S,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new S),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new c8,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new S,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new S),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,a){let i=null,c=null,r=null;const s=this._targetRay,l=this._grip,h=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(h&&t.hand){r=!0;for(const g of t.hand.values()){const p=e.getJointPose(g,a);if(h.joints[g.jointName]===void 0){const z=new c8;z.matrixAutoUpdate=!1,z.visible=!1,h.joints[g.jointName]=z,h.add(z)}const x=h.joints[g.jointName];p!==null&&(x.matrix.fromArray(p.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.jointRadius=p.radius),x.visible=p!==null}const u=h.joints["index-finger-tip"],d=h.joints["thumb-tip"],f=u.position.distanceTo(d.position),v=.02,m=.005;h.inputState.pinching&&f>v+m?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!h.inputState.pinching&&f<=v-m&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(c=e.getPose(t.gripSpace,a),c!==null&&(l.matrix.fromArray(c.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),c.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(c.linearVelocity)):l.hasLinearVelocity=!1,c.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(c.angularVelocity)):l.hasAngularVelocity=!1));s!==null&&(i=e.getPose(t.targetRaySpace,a),i===null&&c!==null&&(i=c),i!==null&&(s.matrix.fromArray(i.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),i.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(i.linearVelocity)):s.hasLinearVelocity=!1,i.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(i.angularVelocity)):s.hasAngularVelocity=!1,this.dispatchEvent(lr)))}return s!==null&&(s.visible=i!==null),l!==null&&(l.visible=c!==null),h!==null&&(h.visible=r!==null),this}}class hr extends I2{constructor(t,e,a,i,c,r,s,l,h,u){if(u=u!==void 0?u:V1,u!==V1&&u!==Z1)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");a===void 0&&u===V1&&(a=M4),a===void 0&&u===Z1&&(a=V4),super(null,i,c,r,s,l,u,a,h),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=s!==void 0?s:h2,this.minFilter=l!==void 0?l:h2,this.flipY=!1,this.generateMipmaps=!1}}class ur extends W3{constructor(t,e){super();const a=this;let i=null,c=1,r=null,s="local-floor",l=null,h=null,u=null,d=null,f=null,v=null;const m=e.getContextAttributes();let g=null,p=null;const x=[],z=[],y=new R3;y.layers.enable(1),y.viewport=new S1;const M=new R3;M.layers.enable(2),M.viewport=new S1;const C=[y,M],b=new or;b.layers.enable(1),b.layers.enable(2);let E=null,w=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let n1=x[j];return n1===void 0&&(n1=new ge,x[j]=n1),n1.getTargetRaySpace()},this.getControllerGrip=function(j){let n1=x[j];return n1===void 0&&(n1=new ge,x[j]=n1),n1.getGripSpace()},this.getHand=function(j){let n1=x[j];return n1===void 0&&(n1=new ge,x[j]=n1),n1.getHandSpace()};function H(j){const n1=z.indexOf(j.inputSource);if(n1===-1)return;const y1=x[n1];y1!==void 0&&y1.dispatchEvent({type:j.type,data:j.inputSource})}function P(){i.removeEventListener("select",H),i.removeEventListener("selectstart",H),i.removeEventListener("selectend",H),i.removeEventListener("squeeze",H),i.removeEventListener("squeezestart",H),i.removeEventListener("squeezeend",H),i.removeEventListener("end",P),i.removeEventListener("inputsourceschange",O);for(let j=0;j<x.length;j++){const n1=z[j];n1!==null&&(z[j]=null,x[j].disconnect(n1))}E=null,w=null,t.setRenderTarget(g),f=null,d=null,u=null,i=null,p=null,v1.stop(),a.isPresenting=!1,a.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){c=j,a.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){s=j,a.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||r},this.setReferenceSpace=function(j){l=j},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return v},this.getSession=function(){return i},this.setSession=async function(j){if(i=j,i!==null){if(g=t.getRenderTarget(),i.addEventListener("select",H),i.addEventListener("selectstart",H),i.addEventListener("selectend",H),i.addEventListener("squeeze",H),i.addEventListener("squeezestart",H),i.addEventListener("squeezeend",H),i.addEventListener("end",P),i.addEventListener("inputsourceschange",O),m.xrCompatible!==!0&&await e.makeXRCompatible(),i.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const n1={antialias:i.renderState.layers===void 0?m.antialias:!0,alpha:m.alpha,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:c};f=new XRWebGLLayer(i,e,n1),i.updateRenderState({baseLayer:f}),p=new F2(f.framebufferWidth,f.framebufferHeight,{format:N,type:U2,encoding:t.outputEncoding})}else{let n1=null,y1=null,z1=null;m.depth&&(z1=m.stencil?35056:33190,n1=m.stencil?Z1:V1,y1=m.stencil?V4:M4);const F1={colorFormat:32856,depthFormat:z1,scaleFactor:c};u=new XRWebGLBinding(i,e),d=u.createProjectionLayer(F1),i.updateRenderState({layers:[d]}),p=new F2(d.textureWidth,d.textureHeight,{format:N,type:U2,depthTexture:new hr(d.textureWidth,d.textureHeight,y1,void 0,void 0,void 0,void 0,void 0,void 0,n1),stencilBuffer:m.stencil,encoding:t.outputEncoding,samples:m.antialias?4:0});const J1=t.properties.get(p);J1.__ignoreDepthValues=d.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(1),l=null,r=await i.requestReferenceSpace(s),v1.setContext(i),v1.start(),a.isPresenting=!0,a.dispatchEvent({type:"sessionstart"})}};function O(j){for(let n1=0;n1<j.removed.length;n1++){const y1=j.removed[n1],z1=z.indexOf(y1);z1>=0&&(z[z1]=null,x[z1].dispatchEvent({type:"disconnected",data:y1}))}for(let n1=0;n1<j.added.length;n1++){const y1=j.added[n1];let z1=z.indexOf(y1);if(z1===-1){for(let J1=0;J1<x.length;J1++)if(J1>=z.length){z.push(y1),z1=J1;break}else if(z[J1]===null){z[J1]=y1,z1=J1;break}if(z1===-1)break}const F1=x[z1];F1&&F1.dispatchEvent({type:"connected",data:y1})}}const d1=new S,w1=new S;function k(j,n1,y1){d1.setFromMatrixPosition(n1.matrixWorld),w1.setFromMatrixPosition(y1.matrixWorld);const z1=d1.distanceTo(w1),F1=n1.projectionMatrix.elements,J1=y1.projectionMatrix.elements,_2=F1[14]/(F1[10]-1),o1=F1[14]/(F1[10]+1),j2=(F1[9]+1)/F1[5],v2=(F1[9]-1)/F1[5],S2=(F1[8]-1)/F1[0],R1=(J1[8]+1)/J1[0],i4=_2*S2,h1=_2*R1,s1=z1/(-S2+R1),H1=s1*-S2;n1.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(H1),j.translateZ(s1),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert();const i2=_2+s1,G1=o1+s1,B2=i4-H1,m2=h1+(z1-H1),f2=j2*o1/G1*i2,Y4=v2*o1/G1*i2;j.projectionMatrix.makePerspective(B2,m2,f2,Y4,i2,G1)}function r1(j,n1){n1===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(n1.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(i===null)return;b.near=M.near=y.near=j.near,b.far=M.far=y.far=j.far,(E!==b.near||w!==b.far)&&(i.updateRenderState({depthNear:b.near,depthFar:b.far}),E=b.near,w=b.far);const n1=j.parent,y1=b.cameras;r1(b,n1);for(let F1=0;F1<y1.length;F1++)r1(y1[F1],n1);b.matrixWorld.decompose(b.position,b.quaternion,b.scale),j.position.copy(b.position),j.quaternion.copy(b.quaternion),j.scale.copy(b.scale),j.matrix.copy(b.matrix),j.matrixWorld.copy(b.matrixWorld);const z1=j.children;for(let F1=0,J1=z1.length;F1<J1;F1++)z1[F1].updateMatrixWorld(!0);y1.length===2?k(b,y,M):b.projectionMatrix.copy(y.projectionMatrix)},this.getCamera=function(){return b},this.getFoveation=function(){if(d!==null)return d.fixedFoveation;if(f!==null)return f.fixedFoveation},this.setFoveation=function(j){d!==null&&(d.fixedFoveation=j),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=j)};let Y=null;function g1(j,n1){if(h=n1.getViewerPose(l||r),v=n1,h!==null){const y1=h.views;f!==null&&(t.setRenderTargetFramebuffer(p,f.framebuffer),t.setRenderTarget(p));let z1=!1;y1.length!==b.cameras.length&&(b.cameras.length=0,z1=!0);for(let F1=0;F1<y1.length;F1++){const J1=y1[F1];let _2=null;if(f!==null)_2=f.getViewport(J1);else{const j2=u.getViewSubImage(d,J1);_2=j2.viewport,F1===0&&(t.setRenderTargetTextures(p,j2.colorTexture,d.ignoreDepthValues?void 0:j2.depthStencilTexture),t.setRenderTarget(p))}let o1=C[F1];o1===void 0&&(o1=new R3,o1.layers.enable(F1),o1.viewport=new S1,C[F1]=o1),o1.matrix.fromArray(J1.transform.matrix),o1.projectionMatrix.fromArray(J1.projectionMatrix),o1.viewport.set(_2.x,_2.y,_2.width,_2.height),F1===0&&b.matrix.copy(o1.matrix),z1===!0&&b.cameras.push(o1)}}for(let y1=0;y1<x.length;y1++){const z1=z[y1],F1=x[y1];z1!==null&&F1!==void 0&&F1.update(z1,n1,l||r)}Y&&Y(j,n1),v=null}const v1=new o7;v1.setAnimationLoop(g1),this.setAnimationLoop=function(j){Y=j},this.dispose=function(){}}}function dr(o,t){function e(g,p){g.fogColor.value.copy(p.color),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function a(g,p,x,z,y){p.isMeshBasicMaterial||p.isMeshLambertMaterial?i(g,p):p.isMeshToonMaterial?(i(g,p),u(g,p)):p.isMeshPhongMaterial?(i(g,p),h(g,p)):p.isMeshStandardMaterial?(i(g,p),d(g,p),p.isMeshPhysicalMaterial&&f(g,p,y)):p.isMeshMatcapMaterial?(i(g,p),v(g,p)):p.isMeshDepthMaterial?i(g,p):p.isMeshDistanceMaterial?(i(g,p),m(g,p)):p.isMeshNormalMaterial?i(g,p):p.isLineBasicMaterial?(c(g,p),p.isLineDashedMaterial&&r(g,p)):p.isPointsMaterial?s(g,p,x,z):p.isSpriteMaterial?l(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function i(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map),p.alphaMap&&(g.alphaMap.value=p.alphaMap),p.bumpMap&&(g.bumpMap.value=p.bumpMap,g.bumpScale.value=p.bumpScale,p.side===o2&&(g.bumpScale.value*=-1)),p.displacementMap&&(g.displacementMap.value=p.displacementMap,g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap),p.normalMap&&(g.normalMap.value=p.normalMap,g.normalScale.value.copy(p.normalScale),p.side===o2&&g.normalScale.value.negate()),p.specularMap&&(g.specularMap.value=p.specularMap),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);const x=t.get(p).envMap;if(x&&(g.envMap.value=x,g.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap){g.lightMap.value=p.lightMap;const M=o.physicallyCorrectLights!==!0?Math.PI:1;g.lightMapIntensity.value=p.lightMapIntensity*M}p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity);let z;p.map?z=p.map:p.specularMap?z=p.specularMap:p.displacementMap?z=p.displacementMap:p.normalMap?z=p.normalMap:p.bumpMap?z=p.bumpMap:p.roughnessMap?z=p.roughnessMap:p.metalnessMap?z=p.metalnessMap:p.alphaMap?z=p.alphaMap:p.emissiveMap?z=p.emissiveMap:p.clearcoatMap?z=p.clearcoatMap:p.clearcoatNormalMap?z=p.clearcoatNormalMap:p.clearcoatRoughnessMap?z=p.clearcoatRoughnessMap:p.iridescenceMap?z=p.iridescenceMap:p.iridescenceThicknessMap?z=p.iridescenceThicknessMap:p.specularIntensityMap?z=p.specularIntensityMap:p.specularColorMap?z=p.specularColorMap:p.transmissionMap?z=p.transmissionMap:p.thicknessMap?z=p.thicknessMap:p.sheenColorMap?z=p.sheenColorMap:p.sheenRoughnessMap&&(z=p.sheenRoughnessMap),z!==void 0&&(z.isWebGLRenderTarget&&(z=z.texture),z.matrixAutoUpdate===!0&&z.updateMatrix(),g.uvTransform.value.copy(z.matrix));let y;p.aoMap?y=p.aoMap:p.lightMap&&(y=p.lightMap),y!==void 0&&(y.isWebGLRenderTarget&&(y=y.texture),y.matrixAutoUpdate===!0&&y.updateMatrix(),g.uv2Transform.value.copy(y.matrix))}function c(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity}function r(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function s(g,p,x,z){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*x,g.scale.value=z*.5,p.map&&(g.map.value=p.map),p.alphaMap&&(g.alphaMap.value=p.alphaMap),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);let y;p.map?y=p.map:p.alphaMap&&(y=p.alphaMap),y!==void 0&&(y.matrixAutoUpdate===!0&&y.updateMatrix(),g.uvTransform.value.copy(y.matrix))}function l(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map),p.alphaMap&&(g.alphaMap.value=p.alphaMap),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);let x;p.map?x=p.map:p.alphaMap&&(x=p.alphaMap),x!==void 0&&(x.matrixAutoUpdate===!0&&x.updateMatrix(),g.uvTransform.value.copy(x.matrix))}function h(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function u(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function d(g,p){g.roughness.value=p.roughness,g.metalness.value=p.metalness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap),p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap),t.get(p).envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function f(g,p,x){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap)),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap),p.clearcoatNormalMap&&(g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),g.clearcoatNormalMap.value=p.clearcoatNormalMap,p.side===o2&&g.clearcoatNormalScale.value.negate())),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap)),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=x.texture,g.transmissionSamplerSize.value.set(x.width,x.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap)}function v(g,p){p.matcap&&(g.matcap.value=p.matcap)}function m(g,p){g.referencePosition.value.copy(p.referencePosition),g.nearDistance.value=p.nearDistance,g.farDistance.value=p.farDistance}return{refreshFogUniforms:e,refreshMaterialUniforms:a}}function fr(o,t,e,a){let i={},c={},r=[];const s=e.isWebGL2?o.getParameter(35375):0;function l(z,y){const M=y.program;a.uniformBlockBinding(z,M)}function h(z,y){let M=i[z.id];M===void 0&&(m(z),M=u(z),i[z.id]=M,z.addEventListener("dispose",p));const C=y.program;a.updateUBOMapping(z,C);const b=t.render.frame;c[z.id]!==b&&(f(z),c[z.id]=b)}function u(z){const y=d();z.__bindingPointIndex=y;const M=o.createBuffer(),C=z.__size,b=z.usage;return o.bindBuffer(35345,M),o.bufferData(35345,C,b),o.bindBuffer(35345,null),o.bindBufferBase(35345,y,M),M}function d(){for(let z=0;z<s;z++)if(r.indexOf(z)===-1)return r.push(z),z;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(z){const y=i[z.id],M=z.uniforms,C=z.__cache;o.bindBuffer(35345,y);for(let b=0,E=M.length;b<E;b++){const w=M[b];if(v(w,b,C)===!0){const H=w.value,P=w.__offset;typeof H=="number"?(w.__data[0]=H,o.bufferSubData(35345,P,w.__data)):(w.value.isMatrix3?(w.__data[0]=w.value.elements[0],w.__data[1]=w.value.elements[1],w.__data[2]=w.value.elements[2],w.__data[3]=w.value.elements[0],w.__data[4]=w.value.elements[3],w.__data[5]=w.value.elements[4],w.__data[6]=w.value.elements[5],w.__data[7]=w.value.elements[0],w.__data[8]=w.value.elements[6],w.__data[9]=w.value.elements[7],w.__data[10]=w.value.elements[8],w.__data[11]=w.value.elements[0]):H.toArray(w.__data),o.bufferSubData(35345,P,w.__data))}}o.bindBuffer(35345,null)}function v(z,y,M){const C=z.value;if(M[y]===void 0)return typeof C=="number"?M[y]=C:M[y]=C.clone(),!0;if(typeof C=="number"){if(M[y]!==C)return M[y]=C,!0}else{const b=M[y];if(b.equals(C)===!1)return b.copy(C),!0}return!1}function m(z){const y=z.uniforms;let M=0;const C=16;let b=0;for(let E=0,w=y.length;E<w;E++){const H=y[E],P=g(H);if(H.__data=new Float32Array(P.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=M,E>0){b=M%C;const O=C-b;b!==0&&O-P.boundary<0&&(M+=C-b,H.__offset=M)}M+=P.storage}return b=M%C,b>0&&(M+=C-b),z.__size=M,z.__cache={},this}function g(z){const y=z.value,M={boundary:0,storage:0};return typeof y=="number"?(M.boundary=4,M.storage=4):y.isVector2?(M.boundary=8,M.storage=8):y.isVector3||y.isColor?(M.boundary=16,M.storage=12):y.isVector4?(M.boundary=16,M.storage=16):y.isMatrix3?(M.boundary=48,M.storage=48):y.isMatrix4?(M.boundary=64,M.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),M}function p(z){const y=z.target;y.removeEventListener("dispose",p);const M=r.indexOf(y.__bindingPointIndex);r.splice(M,1),o.deleteBuffer(i[y.id]),delete i[y.id],delete c[y.id]}function x(){for(const z in i)o.deleteBuffer(i[z]);r=[],i={},c={}}return{bind:l,update:h,dispose:x}}function vr(){const o=I0("canvas");return o.style.display="block",o}function D7(o={}){this.isWebGLRenderer=!0;const t=o.canvas!==void 0?o.canvas:vr(),e=o.context!==void 0?o.context:null,a=o.depth!==void 0?o.depth:!0,i=o.stencil!==void 0?o.stencil:!0,c=o.antialias!==void 0?o.antialias:!1,r=o.premultipliedAlpha!==void 0?o.premultipliedAlpha:!0,s=o.preserveDrawingBuffer!==void 0?o.preserveDrawingBuffer:!1,l=o.powerPreference!==void 0?o.powerPreference:"default",h=o.failIfMajorPerformanceCaveat!==void 0?o.failIfMajorPerformanceCaveat:!1;let u;e!==null?u=e.getContextAttributes().alpha:u=o.alpha!==void 0?o.alpha:!1;let d=null,f=null;const v=[],m=[];this.domElement=t,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=L1,this.physicallyCorrectLights=!1,this.toneMapping=m3,this.toneMappingExposure=1,Object.defineProperties(this,{gammaFactor:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaFactor has been removed."),2},set:function(){console.warn("THREE.WebGLRenderer: .gammaFactor has been removed.")}}});const g=this;let p=!1,x=0,z=0,y=null,M=-1,C=null;const b=new S1,E=new S1;let w=null,H=t.width,P=t.height,O=1,d1=null,w1=null;const k=new S1(0,0,H,P),r1=new S1(0,0,H,P);let Y=!1;const g1=new se;let v1=!1,j=!1,n1=null;const y1=new O2,z1=new c1,F1=new S,J1={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function _2(){return y===null?O:1}let o1=e;function j2(L,W){for(let e1=0;e1<L.length;e1++){const X=L[e1],u1=t.getContext(X,W);if(u1!==null)return u1}return null}try{const L={alpha:!0,depth:a,stencil:i,antialias:c,premultipliedAlpha:r,preserveDrawingBuffer:s,powerPreference:l,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${m1}`),t.addEventListener("webglcontextlost",W2,!1),t.addEventListener("webglcontextrestored",_4,!1),t.addEventListener("webglcontextcreationerror",v3,!1),o1===null){const W=["webgl2","webgl","experimental-webgl"];if(g.isWebGL1Renderer===!0&&W.shift(),o1=j2(W,L),o1===null)throw j2(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}o1.getShaderPrecisionFormat===void 0&&(o1.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(L){throw console.error("THREE.WebGLRenderer: "+L.message),L}let v2,S2,R1,i4,h1,s1,H1,i2,G1,B2,m2,f2,Y4,F4,I,_,Q,M1,I1,P1,b2,t1,c2,q1;function l2(){v2=new Li(o1),S2=new wi(o1,v2,o),v2.init(S2),t1=new sr(o1,v2,S2),R1=new cr(o1,v2,S2),i4=new Ai,h1=new Xc,s1=new rr(o1,v2,R1,h1,S2,t1,i4),H1=new Ci(g),i2=new bi(g),G1=new M9(o1,S2),c2=new xi(o1,v2,G1,S2),B2=new Hi(o1,G1,i4,c2),m2=new Bi(o1,B2,G1,i4),I1=new Fi(o1,S2,s1),_=new yi(h1),f2=new qc(g,H1,i2,v2,S2,c2,_),Y4=new dr(g,h1),F4=new Yc,I=new er(v2,S2),M1=new zi(g,H1,R1,m2,u,r),Q=new ir(g,m2,S2),q1=new fr(o1,i4,S2,R1),P1=new Mi(o1,v2,i4,S2),b2=new Ii(o1,v2,i4,S2),i4.programs=f2.programs,g.capabilities=S2,g.extensions=v2,g.properties=h1,g.renderLists=F4,g.shadowMap=Q,g.state=R1,g.info=i4}l2();const Y1=new ur(g,o1);this.xr=Y1,this.getContext=function(){return o1},this.getContextAttributes=function(){return o1.getContextAttributes()},this.forceContextLoss=function(){const L=v2.get("WEBGL_lose_context");L&&L.loseContext()},this.forceContextRestore=function(){const L=v2.get("WEBGL_lose_context");L&&L.restoreContext()},this.getPixelRatio=function(){return O},this.setPixelRatio=function(L){L!==void 0&&(O=L,this.setSize(H,P,!1))},this.getSize=function(L){return L.set(H,P)},this.setSize=function(L,W,e1){if(Y1.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}H=L,P=W,t.width=Math.floor(L*O),t.height=Math.floor(W*O),e1!==!1&&(t.style.width=L+"px",t.style.height=W+"px"),this.setViewport(0,0,L,W)},this.getDrawingBufferSize=function(L){return L.set(H*O,P*O).floor()},this.setDrawingBufferSize=function(L,W,e1){H=L,P=W,O=e1,t.width=Math.floor(L*e1),t.height=Math.floor(W*e1),this.setViewport(0,0,L,W)},this.getCurrentViewport=function(L){return L.copy(b)},this.getViewport=function(L){return L.copy(k)},this.setViewport=function(L,W,e1,X){L.isVector4?k.set(L.x,L.y,L.z,L.w):k.set(L,W,e1,X),R1.viewport(b.copy(k).multiplyScalar(O).floor())},this.getScissor=function(L){return L.copy(r1)},this.setScissor=function(L,W,e1,X){L.isVector4?r1.set(L.x,L.y,L.z,L.w):r1.set(L,W,e1,X),R1.scissor(E.copy(r1).multiplyScalar(O).floor())},this.getScissorTest=function(){return Y},this.setScissorTest=function(L){R1.setScissorTest(Y=L)},this.setOpaqueSort=function(L){d1=L},this.setTransparentSort=function(L){w1=L},this.getClearColor=function(L){return L.copy(M1.getClearColor())},this.setClearColor=function(){M1.setClearColor.apply(M1,arguments)},this.getClearAlpha=function(){return M1.getClearAlpha()},this.setClearAlpha=function(){M1.setClearAlpha.apply(M1,arguments)},this.clear=function(L=!0,W=!0,e1=!0){let X=0;L&&(X|=16384),W&&(X|=256),e1&&(X|=1024),o1.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",W2,!1),t.removeEventListener("webglcontextrestored",_4,!1),t.removeEventListener("webglcontextcreationerror",v3,!1),F4.dispose(),I.dispose(),h1.dispose(),H1.dispose(),i2.dispose(),m2.dispose(),c2.dispose(),q1.dispose(),f2.dispose(),Y1.dispose(),Y1.removeEventListener("sessionstart",p4),Y1.removeEventListener("sessionend",F3),n1&&(n1.dispose(),n1=null),g3.stop()};function W2(L){L.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),p=!0}function _4(){console.log("THREE.WebGLRenderer: Context Restored."),p=!1;const L=i4.autoReset,W=Q.enabled,e1=Q.autoUpdate,X=Q.needsUpdate,u1=Q.type;l2(),i4.autoReset=L,Q.enabled=W,Q.autoUpdate=e1,Q.needsUpdate=X,Q.type=u1}function v3(L){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",L.statusMessage)}function D(L){const W=L.target;W.removeEventListener("dispose",D),W1(W)}function W1(L){a1(L),h1.remove(L)}function a1(L){const W=h1.get(L).programs;W!==void 0&&(W.forEach(function(e1){f2.releaseProgram(e1)}),L.isShaderMaterial&&f2.releaseShaderCache(L))}this.renderBufferDirect=function(L,W,e1,X,u1,y2){W===null&&(W=J1);const T2=u1.isMesh&&u1.matrixWorld.determinant()<0,J2=co(L,W,e1,X,u1);R1.setMaterial(X,T2);let q2=e1.index;const I4=e1.attributes.position;if(q2===null){if(I4===void 0||I4.count===0)return}else if(q2.count===0)return;let v4=1;X.wireframe===!0&&(q2=B2.getWireframeAttribute(e1),v4=2),c2.setup(u1,X,J2,e1,q2);let m4,o3=P1;q2!==null&&(m4=G1.get(q2),o3=b2,o3.setIndex(m4));const lt=q2!==null?q2.count:I4.count,Wt=e1.drawRange.start*v4,qt=e1.drawRange.count*v4,f0=y2!==null?y2.start*v4:0,S4=y2!==null?y2.count*v4:1/0,Xt=Math.max(Wt,f0),w3=Math.min(lt,Wt+qt,f0+S4)-1,k6=Math.max(0,w3-Xt+1);if(k6!==0){if(u1.isMesh)X.wireframe===!0?(R1.setLineWidth(X.wireframeLinewidth*_2()),o3.setMode(1)):o3.setMode(4);else if(u1.isLine){let q0=X.linewidth;q0===void 0&&(q0=1),R1.setLineWidth(q0*_2()),u1.isLineSegments?o3.setMode(1):u1.isLineLoop?o3.setMode(2):o3.setMode(3)}else u1.isPoints?o3.setMode(0):u1.isSprite&&o3.setMode(4);if(u1.isInstancedMesh)o3.renderInstances(Xt,k6,u1.count);else if(e1.isInstancedBufferGeometry){const q0=Math.min(e1.instanceCount,e1._maxInstanceCount);o3.renderInstances(Xt,k6,q0)}else o3.render(Xt,k6)}},this.compile=function(L,W){f=I.get(L),f.init(),m.push(f),L.traverseVisible(function(e1){e1.isLight&&e1.layers.test(W.layers)&&(f.pushLight(e1),e1.castShadow&&f.pushShadow(e1))}),f.setupLights(g.physicallyCorrectLights),L.traverse(function(e1){const X=e1.material;if(X)if(Array.isArray(X))for(let u1=0;u1<X.length;u1++){const y2=X[u1];Ue(y2,L,e1)}else Ue(X,L,e1)}),m.pop(),f=null};let U1=null;function O1(L){U1&&U1(L)}function p4(){g3.stop()}function F3(){g3.start()}const g3=new o7;g3.setAnimationLoop(O1),typeof self<"u"&&g3.setContext(self),this.setAnimationLoop=function(L){U1=L,Y1.setAnimationLoop(L),L===null?g3.stop():g3.start()},Y1.addEventListener("sessionstart",p4),Y1.addEventListener("sessionend",F3),this.render=function(L,W){if(W!==void 0&&W.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(p===!0)return;L.autoUpdate===!0&&L.updateMatrixWorld(),W.parent===null&&W.updateMatrixWorld(),Y1.enabled===!0&&Y1.isPresenting===!0&&(Y1.cameraAutoUpdate===!0&&Y1.updateCamera(W),W=Y1.getCamera()),L.isScene===!0&&L.onBeforeRender(g,L,W,y),f=I.get(L,m.length),f.init(),m.push(f),y1.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),g1.setFromProjectionMatrix(y1),j=this.localClippingEnabled,v1=_.init(this.clippingPlanes,j,W),d=F4.get(L,v.length),d.init(),v.push(d),W0(L,W,0,g.sortObjects),d.finish(),g.sortObjects===!0&&d.sort(d1,w1),v1===!0&&_.beginShadows();const e1=f.state.shadowsArray;if(Q.render(e1,L,W),v1===!0&&_.endShadows(),this.info.autoReset===!0&&this.info.reset(),M1.render(d,L),f.setupLights(g.physicallyCorrectLights),W.isArrayCamera){const X=W.cameras;for(let u1=0,y2=X.length;u1<y2;u1++){const T2=X[u1];s3(d,L,T2,T2.viewport)}}else s3(d,L,W);y!==null&&(s1.updateMultisampleRenderTarget(y),s1.updateRenderTargetMipmap(y)),L.isScene===!0&&L.onAfterRender(g,L,W),c2.resetDefaultState(),M=-1,C=null,m.pop(),m.length>0?f=m[m.length-1]:f=null,v.pop(),v.length>0?d=v[v.length-1]:d=null};function W0(L,W,e1,X){if(L.visible===!1)return;if(L.layers.test(W.layers)){if(L.isGroup)e1=L.renderOrder;else if(L.isLOD)L.autoUpdate===!0&&L.update(W);else if(L.isLight)f.pushLight(L),L.castShadow&&f.pushShadow(L);else if(L.isSprite){if(!L.frustumCulled||g1.intersectsSprite(L)){X&&F1.setFromMatrixPosition(L.matrixWorld).applyMatrix4(y1);const T2=m2.update(L),J2=L.material;J2.visible&&d.push(L,T2,J2,e1,F1.z,null)}}else if((L.isMesh||L.isLine||L.isPoints)&&(L.isSkinnedMesh&&L.skeleton.frame!==i4.render.frame&&(L.skeleton.update(),L.skeleton.frame=i4.render.frame),!L.frustumCulled||g1.intersectsObject(L))){X&&F1.setFromMatrixPosition(L.matrixWorld).applyMatrix4(y1);const T2=m2.update(L),J2=L.material;if(Array.isArray(J2)){const q2=T2.groups;for(let I4=0,v4=q2.length;I4<v4;I4++){const m4=q2[I4],o3=J2[m4.materialIndex];o3&&o3.visible&&d.push(L,T2,o3,e1,F1.z,m4)}}else J2.visible&&d.push(L,T2,J2,e1,F1.z,null)}}const y2=L.children;for(let T2=0,J2=y2.length;T2<J2;T2++)W0(y2[T2],W,e1,X)}function s3(L,W,e1,X){const u1=L.opaque,y2=L.transmissive,T2=L.transparent;f.setupLightsView(e1),y2.length>0&&H0(u1,W,e1),X&&R1.viewport(b.copy(X)),u1.length>0&&O6(u1,W,e1),y2.length>0&&O6(y2,W,e1),T2.length>0&&O6(T2,W,e1),R1.buffers.depth.setTest(!0),R1.buffers.depth.setMask(!0),R1.buffers.color.setMask(!0),R1.setPolygonOffset(!1)}function H0(L,W,e1){const X=S2.isWebGL2;n1===null&&(n1=new F2(1,1,{generateMipmaps:!0,type:v2.has("EXT_color_buffer_half_float")?E3:U2,minFilter:k1,samples:X&&c===!0?4:0})),g.getDrawingBufferSize(z1),X?n1.setSize(z1.x,z1.y):n1.setSize(dt(z1.x),dt(z1.y));const u1=g.getRenderTarget();g.setRenderTarget(n1),g.clear();const y2=g.toneMapping;g.toneMapping=m3,O6(L,W,e1),g.toneMapping=y2,s1.updateMultisampleRenderTarget(n1),s1.updateRenderTargetMipmap(n1),g.setRenderTarget(u1)}function O6(L,W,e1){const X=W.isScene===!0?W.overrideMaterial:null;for(let u1=0,y2=L.length;u1<y2;u1++){const T2=L[u1],J2=T2.object,q2=T2.geometry,I4=X===null?T2.material:X,v4=T2.group;J2.layers.test(e1.layers)&&io(J2,W,e1,q2,I4,v4)}}function io(L,W,e1,X,u1,y2){L.onBeforeRender(g,W,e1,X,u1,y2),L.modelViewMatrix.multiplyMatrices(e1.matrixWorldInverse,L.matrixWorld),L.normalMatrix.getNormalMatrix(L.modelViewMatrix),u1.onBeforeRender(g,W,e1,X,L,y2),u1.transparent===!0&&u1.side===$1?(u1.side=o2,u1.needsUpdate=!0,g.renderBufferDirect(e1,W,X,u1,L,y2),u1.side=t2,u1.needsUpdate=!0,g.renderBufferDirect(e1,W,X,u1,L,y2),u1.side=$1):g.renderBufferDirect(e1,W,X,u1,L,y2),L.onAfterRender(g,W,e1,X,u1,y2)}function Ue(L,W,e1){W.isScene!==!0&&(W=J1);const X=h1.get(L),u1=f.state.lights,y2=f.state.shadowsArray,T2=u1.state.version,J2=f2.getParameters(L,u1.state,y2,W,e1),q2=f2.getProgramCacheKey(J2);let I4=X.programs;X.environment=L.isMeshStandardMaterial?W.environment:null,X.fog=W.fog,X.envMap=(L.isMeshStandardMaterial?i2:H1).get(L.envMap||X.environment),I4===void 0&&(L.addEventListener("dispose",D),I4=new Map,X.programs=I4);let v4=I4.get(q2);if(v4!==void 0){if(X.currentProgram===v4&&X.lightsStateVersion===T2)return t9(L,J2),v4}else J2.uniforms=f2.getUniforms(L),L.onBuild(e1,J2,g),L.onBeforeCompile(J2,g),v4=f2.acquireProgram(J2,q2),I4.set(q2,v4),X.uniforms=J2.uniforms;const m4=X.uniforms;(!L.isShaderMaterial&&!L.isRawShaderMaterial||L.clipping===!0)&&(m4.clippingPlanes=_.uniform),t9(L,J2),X.needsLights=so(L),X.lightsStateVersion=T2,X.needsLights&&(m4.ambientLightColor.value=u1.state.ambient,m4.lightProbe.value=u1.state.probe,m4.directionalLights.value=u1.state.directional,m4.directionalLightShadows.value=u1.state.directionalShadow,m4.spotLights.value=u1.state.spot,m4.spotLightShadows.value=u1.state.spotShadow,m4.rectAreaLights.value=u1.state.rectArea,m4.ltc_1.value=u1.state.rectAreaLTC1,m4.ltc_2.value=u1.state.rectAreaLTC2,m4.pointLights.value=u1.state.point,m4.pointLightShadows.value=u1.state.pointShadow,m4.hemisphereLights.value=u1.state.hemi,m4.directionalShadowMap.value=u1.state.directionalShadowMap,m4.directionalShadowMatrix.value=u1.state.directionalShadowMatrix,m4.spotShadowMap.value=u1.state.spotShadowMap,m4.spotShadowMatrix.value=u1.state.spotShadowMatrix,m4.pointShadowMap.value=u1.state.pointShadowMap,m4.pointShadowMatrix.value=u1.state.pointShadowMatrix);const o3=v4.getUniforms(),lt=Y8.seqWithValue(o3.seq,m4);return X.currentProgram=v4,X.uniformsList=lt,v4}function t9(L,W){const e1=h1.get(L);e1.outputEncoding=W.outputEncoding,e1.instancing=W.instancing,e1.skinning=W.skinning,e1.morphTargets=W.morphTargets,e1.morphNormals=W.morphNormals,e1.morphColors=W.morphColors,e1.morphTargetsCount=W.morphTargetsCount,e1.numClippingPlanes=W.numClippingPlanes,e1.numIntersection=W.numClipIntersection,e1.vertexAlphas=W.vertexAlphas,e1.vertexTangents=W.vertexTangents,e1.toneMapping=W.toneMapping}function co(L,W,e1,X,u1){W.isScene!==!0&&(W=J1),s1.resetTextureUnits();const y2=W.fog,T2=X.isMeshStandardMaterial?W.environment:null,J2=y===null?g.outputEncoding:y.isXRRenderTarget===!0?y.texture.encoding:L1,q2=(X.isMeshStandardMaterial?i2:H1).get(X.envMap||T2),I4=X.vertexColors===!0&&!!e1.attributes.color&&e1.attributes.color.itemSize===4,v4=!!X.normalMap&&!!e1.attributes.tangent,m4=!!e1.morphAttributes.position,o3=!!e1.morphAttributes.normal,lt=!!e1.morphAttributes.color,Wt=X.toneMapped?g.toneMapping:m3,qt=e1.morphAttributes.position||e1.morphAttributes.normal||e1.morphAttributes.color,f0=qt!==void 0?qt.length:0,S4=h1.get(X),Xt=f.state.lights;if(v1===!0&&(j===!0||L!==C)){const L6=L===C&&X.id===M;_.setState(X,L,L6)}let w3=!1;X.version===S4.__version?(S4.needsLights&&S4.lightsStateVersion!==Xt.state.version||S4.outputEncoding!==J2||u1.isInstancedMesh&&S4.instancing===!1||!u1.isInstancedMesh&&S4.instancing===!0||u1.isSkinnedMesh&&S4.skinning===!1||!u1.isSkinnedMesh&&S4.skinning===!0||S4.envMap!==q2||X.fog===!0&&S4.fog!==y2||S4.numClippingPlanes!==void 0&&(S4.numClippingPlanes!==_.numPlanes||S4.numIntersection!==_.numIntersection)||S4.vertexAlphas!==I4||S4.vertexTangents!==v4||S4.morphTargets!==m4||S4.morphNormals!==o3||S4.morphColors!==lt||S4.toneMapping!==Wt||S2.isWebGL2===!0&&S4.morphTargetsCount!==f0)&&(w3=!0):(w3=!0,S4.__version=X.version);let k6=S4.currentProgram;w3===!0&&(k6=Ue(X,W,u1));let q0=!1,y8=!1,Ze=!1;const c6=k6.getUniforms(),C8=S4.uniforms;if(R1.useProgram(k6.program)&&(q0=!0,y8=!0,Ze=!0),X.id!==M&&(M=X.id,y8=!0),q0||C!==L){if(c6.setValue(o1,"projectionMatrix",L.projectionMatrix),S2.logarithmicDepthBuffer&&c6.setValue(o1,"logDepthBufFC",2/(Math.log(L.far+1)/Math.LN2)),C!==L&&(C=L,y8=!0,Ze=!0),X.isShaderMaterial||X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshStandardMaterial||X.envMap){const L6=c6.map.cameraPosition;L6!==void 0&&L6.setValue(o1,F1.setFromMatrixPosition(L.matrixWorld))}(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&c6.setValue(o1,"isOrthographic",L.isOrthographicCamera===!0),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial||X.isShadowMaterial||u1.isSkinnedMesh)&&c6.setValue(o1,"viewMatrix",L.matrixWorldInverse)}if(u1.isSkinnedMesh){c6.setOptional(o1,u1,"bindMatrix"),c6.setOptional(o1,u1,"bindMatrixInverse");const L6=u1.skeleton;L6&&(S2.floatVertexTextures?(L6.boneTexture===null&&L6.computeBoneTexture(),c6.setValue(o1,"boneTexture",L6.boneTexture,s1),c6.setValue(o1,"boneTextureSize",L6.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const We=e1.morphAttributes;if((We.position!==void 0||We.normal!==void 0||We.color!==void 0&&S2.isWebGL2===!0)&&I1.update(u1,e1,X,k6),(y8||S4.receiveShadow!==u1.receiveShadow)&&(S4.receiveShadow=u1.receiveShadow,c6.setValue(o1,"receiveShadow",u1.receiveShadow)),y8&&(c6.setValue(o1,"toneMappingExposure",g.toneMappingExposure),S4.needsLights&&ro(C8,Ze),y2&&X.fog===!0&&Y4.refreshFogUniforms(C8,y2),Y4.refreshMaterialUniforms(C8,X,O,P,n1),Y8.upload(o1,S4.uniformsList,C8,s1)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(Y8.upload(o1,S4.uniformsList,C8,s1),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&c6.setValue(o1,"center",u1.center),c6.setValue(o1,"modelViewMatrix",u1.modelViewMatrix),c6.setValue(o1,"normalMatrix",u1.normalMatrix),c6.setValue(o1,"modelMatrix",u1.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){const L6=X.uniformsGroups;for(let qe=0,oo=L6.length;qe<oo;qe++)if(S2.isWebGL2){const e9=L6[qe];q1.update(e9,k6),q1.bind(e9,k6)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return k6}function ro(L,W){L.ambientLightColor.needsUpdate=W,L.lightProbe.needsUpdate=W,L.directionalLights.needsUpdate=W,L.directionalLightShadows.needsUpdate=W,L.pointLights.needsUpdate=W,L.pointLightShadows.needsUpdate=W,L.spotLights.needsUpdate=W,L.spotLightShadows.needsUpdate=W,L.rectAreaLights.needsUpdate=W,L.hemisphereLights.needsUpdate=W}function so(L){return L.isMeshLambertMaterial||L.isMeshToonMaterial||L.isMeshPhongMaterial||L.isMeshStandardMaterial||L.isShadowMaterial||L.isShaderMaterial&&L.lights===!0}this.getActiveCubeFace=function(){return x},this.getActiveMipmapLevel=function(){return z},this.getRenderTarget=function(){return y},this.setRenderTargetTextures=function(L,W,e1){h1.get(L.texture).__webglTexture=W,h1.get(L.depthTexture).__webglTexture=e1;const X=h1.get(L);X.__hasExternalTextures=!0,X.__hasExternalTextures&&(X.__autoAllocateDepthBuffer=e1===void 0,X.__autoAllocateDepthBuffer||v2.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),X.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(L,W){const e1=h1.get(L);e1.__webglFramebuffer=W,e1.__useDefaultFramebuffer=W===void 0},this.setRenderTarget=function(L,W=0,e1=0){y=L,x=W,z=e1;let X=!0;if(L){const q2=h1.get(L);q2.__useDefaultFramebuffer!==void 0?(R1.bindFramebuffer(36160,null),X=!1):q2.__webglFramebuffer===void 0?s1.setupRenderTarget(L):q2.__hasExternalTextures&&s1.rebindTextures(L,h1.get(L.texture).__webglTexture,h1.get(L.depthTexture).__webglTexture)}let u1=null,y2=!1,T2=!1;if(L){const q2=L.texture;(q2.isData3DTexture||q2.isDataArrayTexture)&&(T2=!0);const I4=h1.get(L).__webglFramebuffer;L.isWebGLCubeRenderTarget?(u1=I4[W],y2=!0):S2.isWebGL2&&L.samples>0&&s1.useMultisampledRTT(L)===!1?u1=h1.get(L).__webglMultisampledFramebuffer:u1=I4,b.copy(L.viewport),E.copy(L.scissor),w=L.scissorTest}else b.copy(k).multiplyScalar(O).floor(),E.copy(r1).multiplyScalar(O).floor(),w=Y;if(R1.bindFramebuffer(36160,u1)&&S2.drawBuffers&&X&&R1.drawBuffers(L,u1),R1.viewport(b),R1.scissor(E),R1.setScissorTest(w),y2){const q2=h1.get(L.texture);o1.framebufferTexture2D(36160,36064,34069+W,q2.__webglTexture,e1)}else if(T2){const q2=h1.get(L.texture),I4=W||0;o1.framebufferTextureLayer(36160,36064,q2.__webglTexture,e1||0,I4)}M=-1},this.readRenderTargetPixels=function(L,W,e1,X,u1,y2,T2){if(!(L&&L.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let J2=h1.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&T2!==void 0&&(J2=J2[T2]),J2){R1.bindFramebuffer(36160,J2);try{const q2=L.texture,I4=q2.format,v4=q2.type;if(I4!==N&&t1.convert(I4)!==o1.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const m4=v4===E3&&(v2.has("EXT_color_buffer_half_float")||S2.isWebGL2&&v2.has("EXT_color_buffer_float"));if(v4!==U2&&t1.convert(v4)!==o1.getParameter(35738)&&!(v4===X2&&(S2.isWebGL2||v2.has("OES_texture_float")||v2.has("WEBGL_color_buffer_float")))&&!m4){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=L.width-X&&e1>=0&&e1<=L.height-u1&&o1.readPixels(W,e1,X,u1,t1.convert(I4),t1.convert(v4),y2)}finally{const q2=y!==null?h1.get(y).__webglFramebuffer:null;R1.bindFramebuffer(36160,q2)}}},this.copyFramebufferToTexture=function(L,W,e1=0){const X=Math.pow(2,-e1),u1=Math.floor(W.image.width*X),y2=Math.floor(W.image.height*X);s1.setTexture2D(W,0),o1.copyTexSubImage2D(3553,e1,0,0,L.x,L.y,u1,y2),R1.unbindTexture()},this.copyTextureToTexture=function(L,W,e1,X=0){const u1=W.image.width,y2=W.image.height,T2=t1.convert(e1.format),J2=t1.convert(e1.type);s1.setTexture2D(e1,0),o1.pixelStorei(37440,e1.flipY),o1.pixelStorei(37441,e1.premultiplyAlpha),o1.pixelStorei(3317,e1.unpackAlignment),W.isDataTexture?o1.texSubImage2D(3553,X,L.x,L.y,u1,y2,T2,J2,W.image.data):W.isCompressedTexture?o1.compressedTexSubImage2D(3553,X,L.x,L.y,W.mipmaps[0].width,W.mipmaps[0].height,T2,W.mipmaps[0].data):o1.texSubImage2D(3553,X,L.x,L.y,T2,J2,W.image),X===0&&e1.generateMipmaps&&o1.generateMipmap(3553),R1.unbindTexture()},this.copyTextureToTexture3D=function(L,W,e1,X,u1=0){if(g.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const y2=L.max.x-L.min.x+1,T2=L.max.y-L.min.y+1,J2=L.max.z-L.min.z+1,q2=t1.convert(X.format),I4=t1.convert(X.type);let v4;if(X.isData3DTexture)s1.setTexture3D(X,0),v4=32879;else if(X.isDataArrayTexture)s1.setTexture2DArray(X,0),v4=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}o1.pixelStorei(37440,X.flipY),o1.pixelStorei(37441,X.premultiplyAlpha),o1.pixelStorei(3317,X.unpackAlignment);const m4=o1.getParameter(3314),o3=o1.getParameter(32878),lt=o1.getParameter(3316),Wt=o1.getParameter(3315),qt=o1.getParameter(32877),f0=e1.isCompressedTexture?e1.mipmaps[0]:e1.image;o1.pixelStorei(3314,f0.width),o1.pixelStorei(32878,f0.height),o1.pixelStorei(3316,L.min.x),o1.pixelStorei(3315,L.min.y),o1.pixelStorei(32877,L.min.z),e1.isDataTexture||e1.isData3DTexture?o1.texSubImage3D(v4,u1,W.x,W.y,W.z,y2,T2,J2,q2,I4,f0.data):e1.isCompressedTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),o1.compressedTexSubImage3D(v4,u1,W.x,W.y,W.z,y2,T2,J2,q2,f0.data)):o1.texSubImage3D(v4,u1,W.x,W.y,W.z,y2,T2,J2,q2,I4,f0),o1.pixelStorei(3314,m4),o1.pixelStorei(32878,o3),o1.pixelStorei(3316,lt),o1.pixelStorei(3315,Wt),o1.pixelStorei(32877,qt),u1===0&&X.generateMipmaps&&o1.generateMipmap(v4),R1.unbindTexture()},this.initTexture=function(L){L.isCubeTexture?s1.setTextureCube(L,0):L.isData3DTexture?s1.setTexture3D(L,0):L.isDataArrayTexture?s1.setTexture2DArray(L,0):s1.setTexture2D(L,0),R1.unbindTexture()},this.resetState=function(){x=0,z=0,y=null,R1.reset(),c2.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class gr extends D7{}gr.prototype.isWebGL1Renderer=!0;class pe{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new D1(t),this.density=e}clone(){return new pe(this.color,this.density)}toJSON(){return{type:"FogExp2",color:this.color.getHex(),density:this.density}}}class me{constructor(t,e=1,a=1e3){this.isFog=!0,this.name="",this.color=new D1(t),this.near=e,this.far=a}clone(){return new me(this.color,this.near,this.far)}toJSON(){return{type:"Fog",color:this.color.getHex(),near:this.near,far:this.far}}}class N7 extends A3{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.overrideMaterial=null,this.autoUpdate=!0,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.autoUpdate=t.autoUpdate,this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e}}class O7{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=O4,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=H4()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,a){t*=this.stride,a*=e.stride;for(let i=0,c=this.stride;i<c;i++)this.array[t+i]=e.array[a+i];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=H4()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),a=new this.constructor(e,this.stride);return a.setUsage(this.usage),a}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=H4()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const i6=new S;class Tt{constructor(t,e,a,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=a,this.normalized=i===!0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,a=this.data.count;e<a;e++)i6.fromBufferAttribute(this,e),i6.applyMatrix4(t),this.setXYZ(e,i6.x,i6.y,i6.z);return this}applyNormalMatrix(t){for(let e=0,a=this.count;e<a;e++)i6.fromBufferAttribute(this,e),i6.applyNormalMatrix(t),this.setXYZ(e,i6.x,i6.y,i6.z);return this}transformDirection(t){for(let e=0,a=this.count;e<a;e++)i6.fromBufferAttribute(this,e),i6.transformDirection(t),this.setXYZ(e,i6.x,i6.y,i6.z);return this}setX(t,e){return this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){return this.data.array[t*this.data.stride+this.offset]}getY(t){return this.data.array[t*this.data.stride+this.offset+1]}getZ(t){return this.data.array[t*this.data.stride+this.offset+2]}getW(t){return this.data.array[t*this.data.stride+this.offset+3]}setXY(t,e,a){return t=t*this.data.stride+this.offset,this.data.array[t+0]=e,this.data.array[t+1]=a,this}setXYZ(t,e,a,i){return t=t*this.data.stride+this.offset,this.data.array[t+0]=e,this.data.array[t+1]=a,this.data.array[t+2]=i,this}setXYZW(t,e,a,i,c){return t=t*this.data.stride+this.offset,this.data.array[t+0]=e,this.data.array[t+1]=a,this.data.array[t+2]=i,this.data.array[t+3]=c,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will deinterleave buffer data.");const e=[];for(let a=0;a<this.count;a++){const i=a*this.data.stride+this.offset;for(let c=0;c<this.itemSize;c++)e.push(this.data.array[i+c])}return new b3(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Tt(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will deinterleave buffer data.");const e=[];for(let a=0;a<this.count;a++){const i=a*this.data.stride+this.offset;for(let c=0;c<this.itemSize;c++)e.push(this.data.array[i+c])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class k7 extends null{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new D1(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Et;const r8=new S,Gt=new S,Rt=new S,Pt=new c1,s8=new c1,U7=new O2,j8=new S,o8=new S,J8=new S,Z7=new c1,ze=new c1,W7=new c1;class pr extends null{constructor(t){if(super(),this.isSprite=!0,this.type="Sprite",Et===void 0){Et=new Y2;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),a=new O7(e,5);Et.setIndex([0,1,2,0,2,3]),Et.setAttribute("position",new Tt(a,3,0,!1)),Et.setAttribute("uv",new Tt(a,2,3,!1))}this.geometry=Et,this.material=t!==void 0?t:new k7,this.center=new c1(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Gt.setFromMatrixScale(this.matrixWorld),U7.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Rt.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Gt.multiplyScalar(-Rt.z);const a=this.material.rotation;let i,c;a!==0&&(c=Math.cos(a),i=Math.sin(a));const r=this.center;K8(j8.set(-.5,-.5,0),Rt,r,Gt,i,c),K8(o8.set(.5,-.5,0),Rt,r,Gt,i,c),K8(J8.set(.5,.5,0),Rt,r,Gt,i,c),Z7.set(0,0),ze.set(1,0),W7.set(1,1);let s=t.ray.intersectTriangle(j8,o8,J8,!1,r8);if(s===null&&(K8(o8.set(-.5,.5,0),Rt,r,Gt,i,c),ze.set(0,1),s=t.ray.intersectTriangle(j8,J8,o8,!1,r8),s===null))return;const l=t.ray.origin.distanceTo(r8);l<t.near||l>t.far||e.push({distance:l,point:r8.clone(),uv:Q6.getUV(r8,j8,o8,J8,Z7,ze,W7,new c1),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function K8(o,t,e,a,i,c){Pt.subVectors(o,e).addScalar(.5).multiply(a),i!==void 0?(s8.x=c*Pt.x-i*Pt.y,s8.y=i*Pt.x+c*Pt.y):s8.copy(Pt),o.copy(t),o.x+=s8.x,o.y+=s8.y,o.applyMatrix4(U7)}const Q8=new S,q7=new S;class mr extends null{constructor(){super(),this._currentLevel=0,this.type="LOD",Object.defineProperties(this,{levels:{enumerable:!0,value:[]},isLOD:{value:!0}}),this.autoUpdate=!0}copy(t){super.copy(t,!1);const e=t.levels;for(let a=0,i=e.length;a<i;a++){const c=e[a];this.addLevel(c.object.clone(),c.distance)}return this.autoUpdate=t.autoUpdate,this}addLevel(t,e=0){e=Math.abs(e);const a=this.levels;let i;for(i=0;i<a.length&&!(e<a[i].distance);i++);return a.splice(i,0,{distance:e,object:t}),this.add(t),this}getCurrentLevel(){return this._currentLevel}getObjectForDistance(t){const e=this.levels;if(e.length>0){let a,i;for(a=1,i=e.length;a<i&&!(t<e[a].distance);a++);return e[a-1].object}return null}raycast(t,e){if(this.levels.length>0){Q8.setFromMatrixPosition(this.matrixWorld);const i=t.ray.origin.distanceTo(Q8);this.getObjectForDistance(i).raycast(t,e)}}update(t){const e=this.levels;if(e.length>1){Q8.setFromMatrixPosition(t.matrixWorld),q7.setFromMatrixPosition(this.matrixWorld);const a=Q8.distanceTo(q7)/t.zoom;e[0].object.visible=!0;let i,c;for(i=1,c=e.length;i<c&&a>=e[i].distance;i++)e[i-1].object.visible=!1,e[i].object.visible=!0;for(this._currentLevel=i-1;i<c;i++)e[i].object.visible=!1}}toJSON(t){const e=super.toJSON(t);this.autoUpdate===!1&&(e.object.autoUpdate=!1),e.object.levels=[];const a=this.levels;for(let i=0,c=a.length;i<c;i++){const r=a[i];e.object.levels.push({object:r.object.uuid,distance:r.distance})}return e}}const X7=new S,$7=new S1,Y7=new S1,zr=new S,j7=new O2;class xr extends null{constructor(t,e){super(t,e),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new O2,this.bindMatrixInverse=new O2}copy(t,e){return super.copy(t,e),this.bindMode=t.bindMode,this.bindMatrix.copy(t.bindMatrix),this.bindMatrixInverse.copy(t.bindMatrixInverse),this.skeleton=t.skeleton,this}bind(t,e){this.skeleton=t,e===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),e=this.matrixWorld),this.bindMatrix.copy(e),this.bindMatrixInverse.copy(e).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const t=new S1,e=this.geometry.attributes.skinWeight;for(let a=0,i=e.count;a<i;a++){t.fromBufferAttribute(e,a);const c=1/t.manhattanLength();c!==1/0?t.multiplyScalar(c):t.set(1,0,0,0),e.setXYZW(a,t.x,t.y,t.z,t.w)}}updateMatrixWorld(t){super.updateMatrixWorld(t),this.bindMode==="attached"?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode==="detached"?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}boneTransform(t,e){const a=this.skeleton,i=this.geometry;$7.fromBufferAttribute(i.attributes.skinIndex,t),Y7.fromBufferAttribute(i.attributes.skinWeight,t),X7.copy(e).applyMatrix4(this.bindMatrix),e.set(0,0,0);for(let c=0;c<4;c++){const r=Y7.getComponent(c);if(r!==0){const s=$7.getComponent(c);j7.multiplyMatrices(a.bones[s].matrixWorld,a.boneInverses[s]),e.addScaledVector(zr.copy(X7).applyMatrix4(j7),r)}}return e.applyMatrix4(this.bindMatrixInverse)}}class J7 extends null{constructor(){super(),this.isBone=!0,this.type="Bone"}}class l8 extends null{constructor(t=null,e=1,a=1,i,c,r,s,l,h=h2,u=h2,d,f){super(null,r,s,l,h,u,i,c,d,f),this.isDataTexture=!0,this.image={data:t,width:e,height:a},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const K7=new O2,Mr=new O2;class xe{constructor(t=[],e=[]){this.uuid=H4(),this.bones=t.slice(0),this.boneInverses=e,this.boneMatrices=null,this.boneTexture=null,this.boneTextureSize=0,this.frame=-1,this.init()}init(){const t=this.bones,e=this.boneInverses;if(this.boneMatrices=new Float32Array(t.length*16),e.length===0)this.calculateInverses();else if(t.length!==e.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let a=0,i=this.bones.length;a<i;a++)this.boneInverses.push(new O2)}}calculateInverses(){this.boneInverses.length=0;for(let t=0,e=this.bones.length;t<e;t++){const a=new O2;this.bones[t]&&a.copy(this.bones[t].matrixWorld).invert(),this.boneInverses.push(a)}}pose(){for(let t=0,e=this.bones.length;t<e;t++){const a=this.bones[t];a&&a.matrixWorld.copy(this.boneInverses[t]).invert()}for(let t=0,e=this.bones.length;t<e;t++){const a=this.bones[t];a&&(a.parent&&a.parent.isBone?(a.matrix.copy(a.parent.matrixWorld).invert(),a.matrix.multiply(a.matrixWorld)):a.matrix.copy(a.matrixWorld),a.matrix.decompose(a.position,a.quaternion,a.scale))}}update(){const t=this.bones,e=this.boneInverses,a=this.boneMatrices,i=this.boneTexture;for(let c=0,r=t.length;c<r;c++){const s=t[c]?t[c].matrixWorld:Mr;K7.multiplyMatrices(s,e[c]),K7.toArray(a,c*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new xe(this.bones,this.boneInverses)}computeBoneTexture(){let t=Math.sqrt(this.bones.length*4);t=$t(t),t=Math.max(t,4);const e=new Float32Array(t*t*4);e.set(this.boneMatrices);const a=new l8(e,t,t,N,X2);return a.needsUpdate=!0,this.boneMatrices=e,this.boneTexture=a,this.boneTextureSize=t,this}getBoneByName(t){for(let e=0,a=this.bones.length;e<a;e++){const i=this.bones[e];if(i.name===t)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(t,e){this.uuid=t.uuid;for(let a=0,i=t.bones.length;a<i;a++){const c=t.bones[a];let r=e[c];r===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",c),r=new J7),this.bones.push(r),this.boneInverses.push(new O2().fromArray(t.boneInverses[a]))}return this.init(),this}toJSON(){const t={metadata:{version:4.5,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};t.uuid=this.uuid;const e=this.bones,a=this.boneInverses;for(let i=0,c=e.length;i<c;i++){const r=e[i];t.bones.push(r.uuid);const s=a[i];t.boneInverses.push(s.toArray())}return t}}class h8 extends null{constructor(t,e,a,i=1){typeof a=="number"&&(i=a,a=!1,console.error("THREE.InstancedBufferAttribute: The constructor now expects normalized as the third argument.")),super(t,e,a),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Q7=new O2,tn=new O2,t5=null,u8=new S6;class wr extends null{constructor(t,e,a){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new h8(new Float32Array(a*16),16),this.instanceColor=null,this.count=a,this.frustumCulled=!1}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}raycast(t,e){const a=this.matrixWorld,i=this.count;if(u8.geometry=this.geometry,u8.material=this.material,u8.material!==void 0)for(let c=0;c<i;c++){this.getMatrixAt(c,Q7),tn.multiplyMatrices(a,Q7),u8.matrixWorld=tn,u8.raycast(t,t5);for(let r=0,s=t5.length;r<s;r++){const l=t5[r];l.instanceId=c,l.object=this,e.push(l)}t5.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new h8(new Float32Array(this.instanceMatrix.count*3),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class b6 extends null{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new D1(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const en=new S,nn=new S,an=new O2,Me=new B8,e5=new xt;class n5 extends null{constructor(t=new Y2,e=new b6){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,a=[0];for(let i=1,c=e.count;i<c;i++)en.fromBufferAttribute(e,i-1),nn.fromBufferAttribute(e,i),a[i]=a[i-1],a[i]+=en.distanceTo(nn);t.setAttribute("lineDistance",new j1(a,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const a=this.geometry,i=this.matrixWorld,c=t.params.Line.threshold,r=a.drawRange;if(a.boundingSphere===null&&a.computeBoundingSphere(),e5.copy(a.boundingSphere),e5.applyMatrix4(i),e5.radius+=c,t.ray.intersectsSphere(e5)===!1)return;an.copy(i).invert(),Me.copy(t.ray).applyMatrix4(an);const s=c/((this.scale.x+this.scale.y+this.scale.z)/3),l=s*s,h=new S,u=new S,d=new S,f=new S,v=this.isLineSegments?2:1,m=a.index,p=a.attributes.position;if(m!==null){const x=Math.max(0,r.start),z=Math.min(m.count,r.start+r.count);for(let y=x,M=z-1;y<M;y+=v){const C=m.getX(y),b=m.getX(y+1);if(h.fromBufferAttribute(p,C),u.fromBufferAttribute(p,b),Me.distanceSqToSegment(h,u,f,d)>l)continue;f.applyMatrix4(this.matrixWorld);const w=t.ray.origin.distanceTo(f);w<t.near||w>t.far||e.push({distance:w,point:d.clone().applyMatrix4(this.matrixWorld),index:y,face:null,faceIndex:null,object:this})}}else{const x=Math.max(0,r.start),z=Math.min(p.count,r.start+r.count);for(let y=x,M=z-1;y<M;y+=v){if(h.fromBufferAttribute(p,y),u.fromBufferAttribute(p,y+1),Me.distanceSqToSegment(h,u,f,d)>l)continue;f.applyMatrix4(this.matrixWorld);const b=t.ray.origin.distanceTo(f);b<t.near||b>t.far||e.push({distance:b,point:d.clone().applyMatrix4(this.matrixWorld),index:y,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const e=this.geometry.morphAttributes,a=Object.keys(e);if(a.length>0){const i=e[a[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,r=i.length;c<r;c++){const s=i[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=c}}}}}const cn=new S,rn=new S;class sn extends null{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,a=[];for(let i=0,c=e.count;i<c;i+=2)cn.fromBufferAttribute(e,i),rn.fromBufferAttribute(e,i+1),a[i]=i===0?0:a[i-1],a[i+1]=a[i]+cn.distanceTo(rn);t.setAttribute("lineDistance",new j1(a,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class yr extends null{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}}class we extends _t{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new D1(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const on=new O2,ye=new B8,a5=new xt,i5=new S;class ln extends A3{constructor(t=new Y2,e=new we){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=t.material,this.geometry=t.geometry,this}raycast(t,e){const a=this.geometry,i=this.matrixWorld,c=t.params.Points.threshold,r=a.drawRange;if(a.boundingSphere===null&&a.computeBoundingSphere(),a5.copy(a.boundingSphere),a5.applyMatrix4(i),a5.radius+=c,t.ray.intersectsSphere(a5)===!1)return;on.copy(i).invert(),ye.copy(t.ray).applyMatrix4(on);const s=c/((this.scale.x+this.scale.y+this.scale.z)/3),l=s*s,h=a.index,d=a.attributes.position;if(h!==null){const f=Math.max(0,r.start),v=Math.min(h.count,r.start+r.count);for(let m=f,g=v;m<g;m++){const p=h.getX(m);i5.fromBufferAttribute(d,p),hn(i5,p,l,i,t,e,this)}}else{const f=Math.max(0,r.start),v=Math.min(d.count,r.start+r.count);for(let m=f,g=v;m<g;m++)i5.fromBufferAttribute(d,m),hn(i5,m,l,i,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,a=Object.keys(e);if(a.length>0){const i=e[a[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,r=i.length;c<r;c++){const s=i[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=c}}}}}function hn(o,t,e,a,i,c,r){const s=ye.distanceSqToPoint(o);if(s<e){const l=new S;ye.closestPointToPoint(o,l),l.applyMatrix4(a);const h=i.ray.origin.distanceTo(l);if(h<i.near||h>i.far)return;c.push({distance:h,distanceToRay:Math.sqrt(s),point:l,index:t,face:null,object:r})}}class Yo extends null{constructor(t,e,a,i,c,r,s,l,h){super(t,e,a,i,c,r,s,l,h),this.isVideoTexture=!0,this.minFilter=r!==void 0?r:u2,this.magFilter=c!==void 0?c:u2,this.generateMipmaps=!1;const u=this;function d(){u.needsUpdate=!0,t.requestVideoFrameCallback(d)}"requestVideoFrameCallback"in t&&t.requestVideoFrameCallback(d)}clone(){return new this.constructor(this.image).copy(this)}update(){const t=this.image;"requestVideoFrameCallback"in t===!1&&t.readyState>=t.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}}class jo extends null{constructor(t,e,a){super({width:t,height:e}),this.isFramebufferTexture=!0,this.format=a,this.magFilter=h2,this.minFilter=h2,this.generateMipmaps=!1,this.needsUpdate=!0}}class Cr extends null{constructor(t,e,a,i,c,r,s,l,h,u,d,f){super(null,r,s,l,h,u,i,c,d,f),this.isCompressedTexture=!0,this.image={width:e,height:a},this.mipmaps=t,this.flipY=!1,this.generateMipmaps=!1}}class Jo extends null{constructor(t,e,a,i,c,r,s,l,h){super(t,e,a,i,c,r,s,l,h),this.isCanvasTexture=!0,this.needsUpdate=!0}}class u0{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const a=this.getUtoTmapping(t);return this.getPoint(a,e)}getPoints(t=5){const e=[];for(let a=0;a<=t;a++)e.push(this.getPoint(a/t));return e}getSpacedPoints(t=5){const e=[];for(let a=0;a<=t;a++)e.push(this.getPointAt(a/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let a,i=this.getPoint(0),c=0;e.push(0);for(let r=1;r<=t;r++)a=this.getPoint(r/t),c+=a.distanceTo(i),e.push(c),i=a;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const a=this.getLengths();let i=0;const c=a.length;let r;e?r=e:r=t*a[c-1];let s=0,l=c-1,h;for(;s<=l;)if(i=Math.floor(s+(l-s)/2),h=a[i]-r,h<0)s=i+1;else if(h>0)l=i-1;else{l=i;break}if(i=l,a[i]===r)return i/(c-1);const u=a[i],f=a[i+1]-u,v=(r-u)/f;return(i+v)/(c-1)}getTangent(t,e){let i=t-1e-4,c=t+1e-4;i<0&&(i=0),c>1&&(c=1);const r=this.getPoint(i),s=this.getPoint(c),l=e||(r.isVector2?new c1:new S);return l.copy(s).sub(r).normalize(),l}getTangentAt(t,e){const a=this.getUtoTmapping(t);return this.getTangent(a,e)}computeFrenetFrames(t,e){const a=new S,i=[],c=[],r=[],s=new S,l=new O2;for(let v=0;v<=t;v++){const m=v/t;i[v]=this.getTangentAt(m,new S)}c[0]=new S,r[0]=new S;let h=Number.MAX_VALUE;const u=Math.abs(i[0].x),d=Math.abs(i[0].y),f=Math.abs(i[0].z);u<=h&&(h=u,a.set(1,0,0)),d<=h&&(h=d,a.set(0,1,0)),f<=h&&a.set(0,0,1),s.crossVectors(i[0],a).normalize(),c[0].crossVectors(i[0],s),r[0].crossVectors(i[0],c[0]);for(let v=1;v<=t;v++){if(c[v]=c[v-1].clone(),r[v]=r[v-1].clone(),s.crossVectors(i[v-1],i[v]),s.length()>Number.EPSILON){s.normalize();const m=Math.acos(U4(i[v-1].dot(i[v]),-1,1));c[v].applyMatrix4(l.makeRotationAxis(s,m))}r[v].crossVectors(i[v],c[v])}if(e===!0){let v=Math.acos(U4(c[0].dot(c[t]),-1,1));v/=t,i[0].dot(s.crossVectors(c[0],c[t]))>0&&(v=-v);for(let m=1;m<=t;m++)c[m].applyMatrix4(l.makeRotationAxis(i[m],v*m)),r[m].crossVectors(i[m],c[m])}return{tangents:i,normals:c,binormals:r}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.5,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Ce extends u0{constructor(t=0,e=0,a=1,i=1,c=0,r=Math.PI*2,s=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=a,this.yRadius=i,this.aStartAngle=c,this.aEndAngle=r,this.aClockwise=s,this.aRotation=l}getPoint(t,e){const a=e||new c1,i=Math.PI*2;let c=this.aEndAngle-this.aStartAngle;const r=Math.abs(c)<Number.EPSILON;for(;c<0;)c+=i;for(;c>i;)c-=i;c<Number.EPSILON&&(r?c=0:c=i),this.aClockwise===!0&&!r&&(c===i?c=-i:c=c-i);const s=this.aStartAngle+t*c;let l=this.aX+this.xRadius*Math.cos(s),h=this.aY+this.yRadius*Math.sin(s);if(this.aRotation!==0){const u=Math.cos(this.aRotation),d=Math.sin(this.aRotation),f=l-this.aX,v=h-this.aY;l=f*u-v*d+this.aX,h=f*d+v*u+this.aY}return a.set(l,h)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class _r extends Ce{constructor(t,e,a,i,c,r){super(t,e,a,a,i,c,r),this.isArcCurve=!0,this.type="ArcCurve"}}function _e(){let o=0,t=0,e=0,a=0;function i(c,r,s,l){o=c,t=s,e=-3*c+3*r-2*s-l,a=2*c-2*r+s+l}return{initCatmullRom:function(c,r,s,l,h){i(r,s,h*(s-c),h*(l-r))},initNonuniformCatmullRom:function(c,r,s,l,h,u,d){let f=(r-c)/h-(s-c)/(h+u)+(s-r)/u,v=(s-r)/u-(l-r)/(u+d)+(l-s)/d;f*=u,v*=u,i(r,s,f,v)},calc:function(c){const r=c*c,s=r*c;return o+t*c+e*r+a*s}}}const c5=new S,Se=new _e,be=new _e,Le=new _e;class Sr extends u0{constructor(t=[],e=!1,a="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=a,this.tension=i}getPoint(t,e=new S){const a=e,i=this.points,c=i.length,r=(c-(this.closed?0:1))*t;let s=Math.floor(r),l=r-s;this.closed?s+=s>0?0:(Math.floor(Math.abs(s)/c)+1)*c:l===0&&s===c-1&&(s=c-2,l=1);let h,u;this.closed||s>0?h=i[(s-1)%c]:(c5.subVectors(i[0],i[1]).add(i[0]),h=c5);const d=i[s%c],f=i[(s+1)%c];if(this.closed||s+2<c?u=i[(s+2)%c]:(c5.subVectors(i[c-1],i[c-2]).add(i[c-1]),u=c5),this.curveType==="centripetal"||this.curveType==="chordal"){const v=this.curveType==="chordal"?.5:.25;let m=Math.pow(h.distanceToSquared(d),v),g=Math.pow(d.distanceToSquared(f),v),p=Math.pow(f.distanceToSquared(u),v);g<1e-4&&(g=1),m<1e-4&&(m=g),p<1e-4&&(p=g),Se.initNonuniformCatmullRom(h.x,d.x,f.x,u.x,m,g,p),be.initNonuniformCatmullRom(h.y,d.y,f.y,u.y,m,g,p),Le.initNonuniformCatmullRom(h.z,d.z,f.z,u.z,m,g,p)}else this.curveType==="catmullrom"&&(Se.initCatmullRom(h.x,d.x,f.x,u.x,this.tension),be.initCatmullRom(h.y,d.y,f.y,u.y,this.tension),Le.initCatmullRom(h.z,d.z,f.z,u.z,this.tension));return a.set(Se.calc(l),be.calc(l),Le.calc(l)),a}copy(t){super.copy(t),this.points=[];for(let e=0,a=t.points.length;e<a;e++){const i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,a=this.points.length;e<a;e++){const i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,a=t.points.length;e<a;e++){const i=t.points[e];this.points.push(new S().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function un(o,t,e,a,i){const c=(a-t)*.5,r=(i-e)*.5,s=o*o,l=o*s;return(2*e-2*a+c+r)*l+(-3*e+3*a-2*c-r)*s+c*o+e}function br(o,t){const e=1-o;return e*e*t}function Lr(o,t){return 2*(1-o)*o*t}function Hr(o,t){return o*o*t}function d8(o,t,e,a){return br(o,t)+Lr(o,e)+Hr(o,a)}function Ir(o,t){const e=1-o;return e*e*e*t}function Ar(o,t){const e=1-o;return 3*e*e*o*t}function Vr(o,t){return 3*(1-o)*o*o*t}function Fr(o,t){return o*o*o*t}function f8(o,t,e,a,i){return Ir(o,t)+Ar(o,e)+Vr(o,a)+Fr(o,i)}class dn extends u0{constructor(t=new c1,e=new c1,a=new c1,i=new c1){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=a,this.v3=i}getPoint(t,e=new c1){const a=e,i=this.v0,c=this.v1,r=this.v2,s=this.v3;return a.set(f8(t,i.x,c.x,r.x,s.x),f8(t,i.y,c.y,r.y,s.y)),a}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Br extends u0{constructor(t=new S,e=new S,a=new S,i=new S){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=a,this.v3=i}getPoint(t,e=new S){const a=e,i=this.v0,c=this.v1,r=this.v2,s=this.v3;return a.set(f8(t,i.x,c.x,r.x,s.x),f8(t,i.y,c.y,r.y,s.y),f8(t,i.z,c.z,r.z,s.z)),a}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class He extends u0{constructor(t=new c1,e=new c1){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new c1){const a=e;return t===1?a.copy(this.v2):(a.copy(this.v2).sub(this.v1),a.multiplyScalar(t).add(this.v1)),a}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e){const a=e||new c1;return a.copy(this.v2).sub(this.v1).normalize(),a}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Tr extends u0{constructor(t=new S,e=new S){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new S){const a=e;return t===1?a.copy(this.v2):(a.copy(this.v2).sub(this.v1),a.multiplyScalar(t).add(this.v1)),a}getPointAt(t,e){return this.getPoint(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class fn extends u0{constructor(t=new c1,e=new c1,a=new c1){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=a}getPoint(t,e=new c1){const a=e,i=this.v0,c=this.v1,r=this.v2;return a.set(d8(t,i.x,c.x,r.x),d8(t,i.y,c.y,r.y)),a}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class vn extends u0{constructor(t=new S,e=new S,a=new S){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=a}getPoint(t,e=new S){const a=e,i=this.v0,c=this.v1,r=this.v2;return a.set(d8(t,i.x,c.x,r.x),d8(t,i.y,c.y,r.y),d8(t,i.z,c.z,r.z)),a}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class gn extends u0{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new c1){const a=e,i=this.points,c=(i.length-1)*t,r=Math.floor(c),s=c-r,l=i[r===0?r:r-1],h=i[r],u=i[r>i.length-2?i.length-1:r+1],d=i[r>i.length-3?i.length-1:r+2];return a.set(un(s,l.x,h.x,u.x,d.x),un(s,l.y,h.y,u.y,d.y)),a}copy(t){super.copy(t),this.points=[];for(let e=0,a=t.points.length;e<a;e++){const i=t.points[e];this.points.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,a=this.points.length;e<a;e++){const i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,a=t.points.length;e<a;e++){const i=t.points[e];this.points.push(new c1().fromArray(i))}return this}}var Ie=Object.freeze({__proto__:null,ArcCurve:_r,CatmullRomCurve3:Sr,CubicBezierCurve:dn,CubicBezierCurve3:Br,EllipseCurve:Ce,LineCurve:He,LineCurve3:Tr,QuadraticBezierCurve:fn,QuadraticBezierCurve3:vn,SplineCurve:gn});class Er extends u0{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);t.equals(e)||this.curves.push(new He(e,t))}getPoint(t,e){const a=t*this.getLength(),i=this.getCurveLengths();let c=0;for(;c<i.length;){if(i[c]>=a){const r=i[c]-a,s=this.curves[c],l=s.getLength(),h=l===0?0:1-r/l;return s.getPointAt(h,e)}c++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let a=0,i=this.curves.length;a<i;a++)e+=this.curves[a].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let a=0;a<=t;a++)e.push(this.getPoint(a/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let a;for(let i=0,c=this.curves;i<c.length;i++){const r=c[i],s=r.isEllipseCurve?t*2:r.isLineCurve||r.isLineCurve3?1:r.isSplineCurve?t*r.points.length:t,l=r.getPoints(s);for(let h=0;h<l.length;h++){const u=l[h];a&&a.equals(u)||(e.push(u),a=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,a=t.curves.length;e<a;e++){const i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,a=this.curves.length;e<a;e++){const i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,a=t.curves.length;e<a;e++){const i=t.curves[e];this.curves.push(new Ie[i.type]().fromJSON(i))}return this}}class r5 extends Er{constructor(t){super(),this.type="Path",this.currentPoint=new c1,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,a=t.length;e<a;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const a=new He(this.currentPoint.clone(),new c1(t,e));return this.curves.push(a),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,a,i){const c=new fn(this.currentPoint.clone(),new c1(t,e),new c1(a,i));return this.curves.push(c),this.currentPoint.set(a,i),this}bezierCurveTo(t,e,a,i,c,r){const s=new dn(this.currentPoint.clone(),new c1(t,e),new c1(a,i),new c1(c,r));return this.curves.push(s),this.currentPoint.set(c,r),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),a=new gn(e);return this.curves.push(a),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,a,i,c,r){const s=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+s,e+l,a,i,c,r),this}absarc(t,e,a,i,c,r){return this.absellipse(t,e,a,a,i,c,r),this}ellipse(t,e,a,i,c,r,s,l){const h=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+h,e+u,a,i,c,r,s,l),this}absellipse(t,e,a,i,c,r,s,l){const h=new Ce(t,e,a,i,c,r,s,l);if(this.curves.length>0){const d=h.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(h);const u=h.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class v8 extends Y2{constructor(t=[new c1(0,-.5),new c1(.5,0),new c1(0,.5)],e=12,a=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:a,phiLength:i},e=Math.floor(e),i=U4(i,0,Math.PI*2);const c=[],r=[],s=[],l=[],h=[],u=1/e,d=new S,f=new c1,v=new S,m=new S,g=new S;let p=0,x=0;for(let z=0;z<=t.length-1;z++)switch(z){case 0:p=t[z+1].x-t[z].x,x=t[z+1].y-t[z].y,v.x=x*1,v.y=-p,v.z=x*0,g.copy(v),v.normalize(),l.push(v.x,v.y,v.z);break;case t.length-1:l.push(g.x,g.y,g.z);break;default:p=t[z+1].x-t[z].x,x=t[z+1].y-t[z].y,v.x=x*1,v.y=-p,v.z=x*0,m.copy(v),v.x+=g.x,v.y+=g.y,v.z+=g.z,v.normalize(),l.push(v.x,v.y,v.z),g.copy(m)}for(let z=0;z<=e;z++){const y=a+z*u*i,M=Math.sin(y),C=Math.cos(y);for(let b=0;b<=t.length-1;b++){d.x=t[b].x*M,d.y=t[b].y,d.z=t[b].x*C,r.push(d.x,d.y,d.z),f.x=z/e,f.y=b/(t.length-1),s.push(f.x,f.y);const E=l[3*b+0]*M,w=l[3*b+1],H=l[3*b+0]*C;h.push(E,w,H)}}for(let z=0;z<e;z++)for(let y=0;y<t.length-1;y++){const M=y+z*t.length,C=M,b=M+t.length,E=M+t.length+1,w=M+1;c.push(C,b,w),c.push(E,w,b)}this.setIndex(c),this.setAttribute("position",new j1(r,3)),this.setAttribute("uv",new j1(s,2)),this.setAttribute("normal",new j1(h,3))}static fromJSON(t){return new v8(t.points,t.segments,t.phiStart,t.phiLength)}}class s5 extends v8{constructor(t=1,e=1,a=4,i=8){const c=new r5;c.absarc(0,-e/2,t,Math.PI*1.5,0),c.absarc(0,e/2,t,0,Math.PI*.5),super(c.getPoints(a),i),this.type="CapsuleGeometry",this.parameters={radius:t,height:e,capSegments:a,radialSegments:i}}static fromJSON(t){return new s5(t.radius,t.length,t.capSegments,t.radialSegments)}}class o5 extends Y2{constructor(t=1,e=8,a=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:a,thetaLength:i},e=Math.max(3,e);const c=[],r=[],s=[],l=[],h=new S,u=new c1;r.push(0,0,0),s.push(0,0,1),l.push(.5,.5);for(let d=0,f=3;d<=e;d++,f+=3){const v=a+d/e*i;h.x=t*Math.cos(v),h.y=t*Math.sin(v),r.push(h.x,h.y,h.z),s.push(0,0,1),u.x=(r[f]/t+1)/2,u.y=(r[f+1]/t+1)/2,l.push(u.x,u.y)}for(let d=1;d<=e;d++)c.push(d,d+1,0);this.setIndex(c),this.setAttribute("position",new j1(r,3)),this.setAttribute("normal",new j1(s,3)),this.setAttribute("uv",new j1(l,2))}static fromJSON(t){return new o5(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Dt extends Y2{constructor(t=1,e=1,a=1,i=8,c=1,r=!1,s=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:a,radialSegments:i,heightSegments:c,openEnded:r,thetaStart:s,thetaLength:l};const h=this;i=Math.floor(i),c=Math.floor(c);const u=[],d=[],f=[],v=[];let m=0;const g=[],p=a/2;let x=0;z(),r===!1&&(t>0&&y(!0),e>0&&y(!1)),this.setIndex(u),this.setAttribute("position",new j1(d,3)),this.setAttribute("normal",new j1(f,3)),this.setAttribute("uv",new j1(v,2));function z(){const M=new S,C=new S;let b=0;const E=(e-t)/a;for(let w=0;w<=c;w++){const H=[],P=w/c,O=P*(e-t)+t;for(let d1=0;d1<=i;d1++){const w1=d1/i,k=w1*l+s,r1=Math.sin(k),Y=Math.cos(k);C.x=O*r1,C.y=-P*a+p,C.z=O*Y,d.push(C.x,C.y,C.z),M.set(r1,E,Y).normalize(),f.push(M.x,M.y,M.z),v.push(w1,1-P),H.push(m++)}g.push(H)}for(let w=0;w<i;w++)for(let H=0;H<c;H++){const P=g[H][w],O=g[H+1][w],d1=g[H+1][w+1],w1=g[H][w+1];u.push(P,O,w1),u.push(O,d1,w1),b+=6}h.addGroup(x,b,0),x+=b}function y(M){const C=m,b=new c1,E=new S;let w=0;const H=M===!0?t:e,P=M===!0?1:-1;for(let d1=1;d1<=i;d1++)d.push(0,p*P,0),f.push(0,P,0),v.push(.5,.5),m++;const O=m;for(let d1=0;d1<=i;d1++){const k=d1/i*l+s,r1=Math.cos(k),Y=Math.sin(k);E.x=H*Y,E.y=p*P,E.z=H*r1,d.push(E.x,E.y,E.z),f.push(0,P,0),b.x=r1*.5+.5,b.y=Y*.5*P+.5,v.push(b.x,b.y),m++}for(let d1=0;d1<i;d1++){const w1=C+d1,k=O+d1;M===!0?u.push(k,k+1,w1):u.push(k+1,k,w1),w+=3}h.addGroup(x,w,M===!0?1:2),x+=w}}static fromJSON(t){return new Dt(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class l5 extends Dt{constructor(t=1,e=1,a=8,i=1,c=!1,r=0,s=Math.PI*2){super(0,t,e,a,i,c,r,s),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:a,heightSegments:i,openEnded:c,thetaStart:r,thetaLength:s}}static fromJSON(t){return new l5(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class O0 extends Y2{constructor(t=[],e=[],a=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:a,detail:i};const c=[],r=[];s(i),h(a),u(),this.setAttribute("position",new j1(c,3)),this.setAttribute("normal",new j1(c.slice(),3)),this.setAttribute("uv",new j1(r,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function s(z){const y=new S,M=new S,C=new S;for(let b=0;b<e.length;b+=3)v(e[b+0],y),v(e[b+1],M),v(e[b+2],C),l(y,M,C,z)}function l(z,y,M,C){const b=C+1,E=[];for(let w=0;w<=b;w++){E[w]=[];const H=z.clone().lerp(M,w/b),P=y.clone().lerp(M,w/b),O=b-w;for(let d1=0;d1<=O;d1++)d1===0&&w===b?E[w][d1]=H:E[w][d1]=H.clone().lerp(P,d1/O)}for(let w=0;w<b;w++)for(let H=0;H<2*(b-w)-1;H++){const P=Math.floor(H/2);H%2===0?(f(E[w][P+1]),f(E[w+1][P]),f(E[w][P])):(f(E[w][P+1]),f(E[w+1][P+1]),f(E[w+1][P]))}}function h(z){const y=new S;for(let M=0;M<c.length;M+=3)y.x=c[M+0],y.y=c[M+1],y.z=c[M+2],y.normalize().multiplyScalar(z),c[M+0]=y.x,c[M+1]=y.y,c[M+2]=y.z}function u(){const z=new S;for(let y=0;y<c.length;y+=3){z.x=c[y+0],z.y=c[y+1],z.z=c[y+2];const M=p(z)/2/Math.PI+.5,C=x(z)/Math.PI+.5;r.push(M,1-C)}m(),d()}function d(){for(let z=0;z<r.length;z+=6){const y=r[z+0],M=r[z+2],C=r[z+4],b=Math.max(y,M,C),E=Math.min(y,M,C);b>.9&&E<.1&&(y<.2&&(r[z+0]+=1),M<.2&&(r[z+2]+=1),C<.2&&(r[z+4]+=1))}}function f(z){c.push(z.x,z.y,z.z)}function v(z,y){const M=z*3;y.x=t[M+0],y.y=t[M+1],y.z=t[M+2]}function m(){const z=new S,y=new S,M=new S,C=new S,b=new c1,E=new c1,w=new c1;for(let H=0,P=0;H<c.length;H+=9,P+=6){z.set(c[H+0],c[H+1],c[H+2]),y.set(c[H+3],c[H+4],c[H+5]),M.set(c[H+6],c[H+7],c[H+8]),b.set(r[P+0],r[P+1]),E.set(r[P+2],r[P+3]),w.set(r[P+4],r[P+5]),C.copy(z).add(y).add(M).divideScalar(3);const O=p(C);g(b,P+0,z,O),g(E,P+2,y,O),g(w,P+4,M,O)}}function g(z,y,M,C){C<0&&z.x===1&&(r[y]=z.x-1),M.x===0&&M.z===0&&(r[y]=C/2/Math.PI+.5)}function p(z){return Math.atan2(z.z,-z.x)}function x(z){return Math.atan2(-z.y,Math.sqrt(z.x*z.x+z.z*z.z))}}static fromJSON(t){return new O0(t.vertices,t.indices,t.radius,t.details)}}class h5 extends O0{constructor(t=1,e=0){const a=(1+Math.sqrt(5))/2,i=1/a,c=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-i,-a,0,-i,a,0,i,-a,0,i,a,-i,-a,0,-i,a,0,i,-a,0,i,a,0,-a,0,-i,a,0,-i,-a,0,i,a,0,i],r=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(c,r,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new h5(t.radius,t.detail)}}const u5=new S,d5=new S,Ae=new S,f5=new Q6;class Gr extends Y2{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){const i=Math.pow(10,4),c=Math.cos(Y6*e),r=t.getIndex(),s=t.getAttribute("position"),l=r?r.count:s.count,h=[0,0,0],u=["a","b","c"],d=new Array(3),f={},v=[];for(let m=0;m<l;m+=3){r?(h[0]=r.getX(m),h[1]=r.getX(m+1),h[2]=r.getX(m+2)):(h[0]=m,h[1]=m+1,h[2]=m+2);const{a:g,b:p,c:x}=f5;if(g.fromBufferAttribute(s,h[0]),p.fromBufferAttribute(s,h[1]),x.fromBufferAttribute(s,h[2]),f5.getNormal(Ae),d[0]=`${Math.round(g.x*i)},${Math.round(g.y*i)},${Math.round(g.z*i)}`,d[1]=`${Math.round(p.x*i)},${Math.round(p.y*i)},${Math.round(p.z*i)}`,d[2]=`${Math.round(x.x*i)},${Math.round(x.y*i)},${Math.round(x.z*i)}`,!(d[0]===d[1]||d[1]===d[2]||d[2]===d[0]))for(let z=0;z<3;z++){const y=(z+1)%3,M=d[z],C=d[y],b=f5[u[z]],E=f5[u[y]],w=`${M}_${C}`,H=`${C}_${M}`;H in f&&f[H]?(Ae.dot(f[H].normal)<=c&&(v.push(b.x,b.y,b.z),v.push(E.x,E.y,E.z)),f[H]=null):w in f||(f[w]={index0:h[z],index1:h[y],normal:Ae.clone()})}}for(const m in f)if(f[m]){const{index0:g,index1:p}=f[m];u5.fromBufferAttribute(s,g),d5.fromBufferAttribute(s,p),v.push(u5.x,u5.y,u5.z),v.push(d5.x,d5.y,d5.z)}this.setAttribute("position",new j1(v,3))}}}class Nt extends r5{constructor(t){super(t),this.uuid=H4(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let a=0,i=this.holes.length;a<i;a++)e[a]=this.holes[a].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,a=t.holes.length;e<a;e++){const i=t.holes[e];this.holes.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,a=this.holes.length;e<a;e++){const i=this.holes[e];t.holes.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,a=t.holes.length;e<a;e++){const i=t.holes[e];this.holes.push(new r5().fromJSON(i))}return this}}const Rr={triangulate:function(o,t,e=2){const a=t&&t.length,i=a?t[0]*e:o.length;let c=pn(o,0,i,e,!0);const r=[];if(!c||c.next===c.prev)return r;let s,l,h,u,d,f,v;if(a&&(c=kr(o,t,c,e)),o.length>80*e){s=h=o[0],l=u=o[1];for(let m=e;m<i;m+=e)d=o[m],f=o[m+1],d<s&&(s=d),f<l&&(l=f),d>h&&(h=d),f>u&&(u=f);v=Math.max(h-s,u-l),v=v!==0?1/v:0}return g8(c,r,e,s,l,v),r}};function pn(o,t,e,a,i){let c,r;if(i===Qr(o,t,e,a)>0)for(c=t;c<e;c+=a)r=xn(c,o[c],o[c+1],r);else for(c=e-a;c>=t;c-=a)r=xn(c,o[c],o[c+1],r);return r&&v5(r,r.next)&&(m8(r),r=r.next),r}function k0(o,t){if(!o)return o;t||(t=o);let e=o,a;do if(a=!1,!e.steiner&&(v5(e,e.next)||e3(e.prev,e,e.next)===0)){if(m8(e),e=t=e.prev,e===e.next)break;a=!0}else e=e.next;while(a||e!==t);return t}function g8(o,t,e,a,i,c,r){if(!o)return;!r&&c&&Xr(o,a,i,c);let s=o,l,h;for(;o.prev!==o.next;){if(l=o.prev,h=o.next,c?Dr(o,a,i,c):Pr(o)){t.push(l.i/e),t.push(o.i/e),t.push(h.i/e),m8(o),o=h.next,s=h.next;continue}if(o=h,o===s){r?r===1?(o=Nr(k0(o),t,e),g8(o,t,e,a,i,c,2)):r===2&&Or(o,t,e,a,i,c):g8(k0(o),t,e,a,i,c,1);break}}}function Pr(o){const t=o.prev,e=o,a=o.next;if(e3(t,e,a)>=0)return!1;let i=o.next.next;for(;i!==o.prev;){if(Ot(t.x,t.y,e.x,e.y,a.x,a.y,i.x,i.y)&&e3(i.prev,i,i.next)>=0)return!1;i=i.next}return!0}function Dr(o,t,e,a){const i=o.prev,c=o,r=o.next;if(e3(i,c,r)>=0)return!1;const s=i.x<c.x?i.x<r.x?i.x:r.x:c.x<r.x?c.x:r.x,l=i.y<c.y?i.y<r.y?i.y:r.y:c.y<r.y?c.y:r.y,h=i.x>c.x?i.x>r.x?i.x:r.x:c.x>r.x?c.x:r.x,u=i.y>c.y?i.y>r.y?i.y:r.y:c.y>r.y?c.y:r.y,d=Ve(s,l,t,e,a),f=Ve(h,u,t,e,a);let v=o.prevZ,m=o.nextZ;for(;v&&v.z>=d&&m&&m.z<=f;){if(v!==o.prev&&v!==o.next&&Ot(i.x,i.y,c.x,c.y,r.x,r.y,v.x,v.y)&&e3(v.prev,v,v.next)>=0||(v=v.prevZ,m!==o.prev&&m!==o.next&&Ot(i.x,i.y,c.x,c.y,r.x,r.y,m.x,m.y)&&e3(m.prev,m,m.next)>=0))return!1;m=m.nextZ}for(;v&&v.z>=d;){if(v!==o.prev&&v!==o.next&&Ot(i.x,i.y,c.x,c.y,r.x,r.y,v.x,v.y)&&e3(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;m&&m.z<=f;){if(m!==o.prev&&m!==o.next&&Ot(i.x,i.y,c.x,c.y,r.x,r.y,m.x,m.y)&&e3(m.prev,m,m.next)>=0)return!1;m=m.nextZ}return!0}function Nr(o,t,e){let a=o;do{const i=a.prev,c=a.next.next;!v5(i,c)&&mn(i,a,a.next,c)&&p8(i,c)&&p8(c,i)&&(t.push(i.i/e),t.push(a.i/e),t.push(c.i/e),m8(a),m8(a.next),a=o=c),a=a.next}while(a!==o);return k0(a)}function Or(o,t,e,a,i,c){let r=o;do{let s=r.next.next;for(;s!==r.prev;){if(r.i!==s.i&&jr(r,s)){let l=zn(r,s);r=k0(r,r.next),l=k0(l,l.next),g8(r,t,e,a,i,c),g8(l,t,e,a,i,c);return}s=s.next}r=r.next}while(r!==o)}function kr(o,t,e,a){const i=[];let c,r,s,l,h;for(c=0,r=t.length;c<r;c++)s=t[c]*a,l=c<r-1?t[c+1]*a:o.length,h=pn(o,s,l,a,!1),h===h.next&&(h.steiner=!0),i.push(Yr(h));for(i.sort(Ur),c=0;c<i.length;c++)Zr(i[c],e),e=k0(e,e.next);return e}function Ur(o,t){return o.x-t.x}function Zr(o,t){if(t=Wr(o,t),t){const e=zn(t,o);k0(t,t.next),k0(e,e.next)}}function Wr(o,t){let e=t;const a=o.x,i=o.y;let c=-1/0,r;do{if(i<=e.y&&i>=e.next.y&&e.next.y!==e.y){const f=e.x+(i-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=a&&f>c){if(c=f,f===a){if(i===e.y)return e;if(i===e.next.y)return e.next}r=e.x<e.next.x?e:e.next}}e=e.next}while(e!==t);if(!r)return null;if(a===c)return r;const s=r,l=r.x,h=r.y;let u=1/0,d;e=r;do a>=e.x&&e.x>=l&&a!==e.x&&Ot(i<h?a:c,i,l,h,i<h?c:a,i,e.x,e.y)&&(d=Math.abs(i-e.y)/(a-e.x),p8(e,o)&&(d<u||d===u&&(e.x>r.x||e.x===r.x&&qr(r,e)))&&(r=e,u=d)),e=e.next;while(e!==s);return r}function qr(o,t){return e3(o.prev,o,t.prev)<0&&e3(t.next,o,o.next)<0}function Xr(o,t,e,a){let i=o;do i.z===null&&(i.z=Ve(i.x,i.y,t,e,a)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==o);i.prevZ.nextZ=null,i.prevZ=null,$r(i)}function $r(o){let t,e,a,i,c,r,s,l,h=1;do{for(e=o,o=null,c=null,r=0;e;){for(r++,a=e,s=0,t=0;t<h&&(s++,a=a.nextZ,!!a);t++);for(l=h;s>0||l>0&&a;)s!==0&&(l===0||!a||e.z<=a.z)?(i=e,e=e.nextZ,s--):(i=a,a=a.nextZ,l--),c?c.nextZ=i:o=i,i.prevZ=c,c=i;e=a}c.nextZ=null,h*=2}while(r>1);return o}function Ve(o,t,e,a,i){return o=32767*(o-e)*i,t=32767*(t-a)*i,o=(o|o<<8)&16711935,o=(o|o<<4)&252645135,o=(o|o<<2)&858993459,o=(o|o<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,o|t<<1}function Yr(o){let t=o,e=o;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==o);return e}function Ot(o,t,e,a,i,c,r,s){return(i-r)*(t-s)-(o-r)*(c-s)>=0&&(o-r)*(a-s)-(e-r)*(t-s)>=0&&(e-r)*(c-s)-(i-r)*(a-s)>=0}function jr(o,t){return o.next.i!==t.i&&o.prev.i!==t.i&&!Jr(o,t)&&(p8(o,t)&&p8(t,o)&&Kr(o,t)&&(e3(o.prev,o,t.prev)||e3(o,t.prev,t))||v5(o,t)&&e3(o.prev,o,o.next)>0&&e3(t.prev,t,t.next)>0)}function e3(o,t,e){return(t.y-o.y)*(e.x-t.x)-(t.x-o.x)*(e.y-t.y)}function v5(o,t){return o.x===t.x&&o.y===t.y}function mn(o,t,e,a){const i=p5(e3(o,t,e)),c=p5(e3(o,t,a)),r=p5(e3(e,a,o)),s=p5(e3(e,a,t));return!!(i!==c&&r!==s||i===0&&g5(o,e,t)||c===0&&g5(o,a,t)||r===0&&g5(e,o,a)||s===0&&g5(e,t,a))}function g5(o,t,e){return t.x<=Math.max(o.x,e.x)&&t.x>=Math.min(o.x,e.x)&&t.y<=Math.max(o.y,e.y)&&t.y>=Math.min(o.y,e.y)}function p5(o){return o>0?1:o<0?-1:0}function Jr(o,t){let e=o;do{if(e.i!==o.i&&e.next.i!==o.i&&e.i!==t.i&&e.next.i!==t.i&&mn(e,e.next,o,t))return!0;e=e.next}while(e!==o);return!1}function p8(o,t){return e3(o.prev,o,o.next)<0?e3(o,t,o.next)>=0&&e3(o,o.prev,t)>=0:e3(o,t,o.prev)<0||e3(o,o.next,t)<0}function Kr(o,t){let e=o,a=!1;const i=(o.x+t.x)/2,c=(o.y+t.y)/2;do e.y>c!=e.next.y>c&&e.next.y!==e.y&&i<(e.next.x-e.x)*(c-e.y)/(e.next.y-e.y)+e.x&&(a=!a),e=e.next;while(e!==o);return a}function zn(o,t){const e=new Fe(o.i,o.x,o.y),a=new Fe(t.i,t.x,t.y),i=o.next,c=t.prev;return o.next=t,t.prev=o,e.next=i,i.prev=e,a.next=e,e.prev=a,c.next=a,a.prev=c,a}function xn(o,t,e,a){const i=new Fe(o,t,e);return a?(i.next=a.next,i.prev=a,a.next.prev=i,a.next=i):(i.prev=i,i.next=i),i}function m8(o){o.next.prev=o.prev,o.prev.next=o.next,o.prevZ&&(o.prevZ.nextZ=o.nextZ),o.nextZ&&(o.nextZ.prevZ=o.prevZ)}function Fe(o,t,e){this.i=o,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=null,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Qr(o,t,e,a){let i=0;for(let c=t,r=e-a;c<e;c+=a)i+=(o[r]-o[c])*(o[c+1]+o[r+1]),r=c;return i}class S0{static area(t){const e=t.length;let a=0;for(let i=e-1,c=0;c<e;i=c++)a+=t[i].x*t[c].y-t[c].x*t[i].y;return a*.5}static isClockWise(t){return S0.area(t)<0}static triangulateShape(t,e){const a=[],i=[],c=[];Mn(t),wn(a,t);let r=t.length;e.forEach(Mn);for(let l=0;l<e.length;l++)i.push(r),r+=e[l].length,wn(a,e[l]);const s=Rr.triangulate(a,i);for(let l=0;l<s.length;l+=3)c.push(s.slice(l,l+3));return c}}function Mn(o){const t=o.length;t>2&&o[t-1].equals(o[0])&&o.pop()}function wn(o,t){for(let e=0;e<t.length;e++)o.push(t[e].x),o.push(t[e].y)}class m5 extends Y2{constructor(t=new Nt([new c1(.5,.5),new c1(-.5,.5),new c1(-.5,-.5),new c1(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const a=this,i=[],c=[];for(let s=0,l=t.length;s<l;s++){const h=t[s];r(h)}this.setAttribute("position",new j1(i,3)),this.setAttribute("uv",new j1(c,2)),this.computeVertexNormals();function r(s){const l=[],h=e.curveSegments!==void 0?e.curveSegments:12,u=e.steps!==void 0?e.steps:1,d=e.depth!==void 0?e.depth:1;let f=e.bevelEnabled!==void 0?e.bevelEnabled:!0,v=e.bevelThickness!==void 0?e.bevelThickness:.2,m=e.bevelSize!==void 0?e.bevelSize:v-.1,g=e.bevelOffset!==void 0?e.bevelOffset:0,p=e.bevelSegments!==void 0?e.bevelSegments:3;const x=e.extrudePath,z=e.UVGenerator!==void 0?e.UVGenerator:ts;let y,M=!1,C,b,E,w;x&&(y=x.getSpacedPoints(u),M=!0,f=!1,C=x.computeFrenetFrames(u,!1),b=new S,E=new S,w=new S),f||(p=0,v=0,m=0,g=0);const H=s.extractPoints(h);let P=H.shape;const O=H.holes;if(!S0.isClockWise(P)){P=P.reverse();for(let h1=0,s1=O.length;h1<s1;h1++){const H1=O[h1];S0.isClockWise(H1)&&(O[h1]=H1.reverse())}}const w1=S0.triangulateShape(P,O),k=P;for(let h1=0,s1=O.length;h1<s1;h1++){const H1=O[h1];P=P.concat(H1)}function r1(h1,s1,H1){return s1||console.error("THREE.ExtrudeGeometry: vec does not exist"),s1.clone().multiplyScalar(H1).add(h1)}const Y=P.length,g1=w1.length;function v1(h1,s1,H1){let i2,G1,B2;const m2=h1.x-s1.x,f2=h1.y-s1.y,Y4=H1.x-h1.x,F4=H1.y-h1.y,I=m2*m2+f2*f2,_=m2*F4-f2*Y4;if(Math.abs(_)>Number.EPSILON){const Q=Math.sqrt(I),M1=Math.sqrt(Y4*Y4+F4*F4),I1=s1.x-f2/Q,P1=s1.y+m2/Q,b2=H1.x-F4/M1,t1=H1.y+Y4/M1,c2=((b2-I1)*F4-(t1-P1)*Y4)/(m2*F4-f2*Y4);i2=I1+m2*c2-h1.x,G1=P1+f2*c2-h1.y;const q1=i2*i2+G1*G1;if(q1<=2)return new c1(i2,G1);B2=Math.sqrt(q1/2)}else{let Q=!1;m2>Number.EPSILON?Y4>Number.EPSILON&&(Q=!0):m2<-Number.EPSILON?Y4<-Number.EPSILON&&(Q=!0):Math.sign(f2)===Math.sign(F4)&&(Q=!0),Q?(i2=-f2,G1=m2,B2=Math.sqrt(I)):(i2=m2,G1=f2,B2=Math.sqrt(I/2))}return new c1(i2/B2,G1/B2)}const j=[];for(let h1=0,s1=k.length,H1=s1-1,i2=h1+1;h1<s1;h1++,H1++,i2++)H1===s1&&(H1=0),i2===s1&&(i2=0),j[h1]=v1(k[h1],k[H1],k[i2]);const n1=[];let y1,z1=j.concat();for(let h1=0,s1=O.length;h1<s1;h1++){const H1=O[h1];y1=[];for(let i2=0,G1=H1.length,B2=G1-1,m2=i2+1;i2<G1;i2++,B2++,m2++)B2===G1&&(B2=0),m2===G1&&(m2=0),y1[i2]=v1(H1[i2],H1[B2],H1[m2]);n1.push(y1),z1=z1.concat(y1)}for(let h1=0;h1<p;h1++){const s1=h1/p,H1=v*Math.cos(s1*Math.PI/2),i2=m*Math.sin(s1*Math.PI/2)+g;for(let G1=0,B2=k.length;G1<B2;G1++){const m2=r1(k[G1],j[G1],i2);j2(m2.x,m2.y,-H1)}for(let G1=0,B2=O.length;G1<B2;G1++){const m2=O[G1];y1=n1[G1];for(let f2=0,Y4=m2.length;f2<Y4;f2++){const F4=r1(m2[f2],y1[f2],i2);j2(F4.x,F4.y,-H1)}}}const F1=m+g;for(let h1=0;h1<Y;h1++){const s1=f?r1(P[h1],z1[h1],F1):P[h1];M?(E.copy(C.normals[0]).multiplyScalar(s1.x),b.copy(C.binormals[0]).multiplyScalar(s1.y),w.copy(y[0]).add(E).add(b),j2(w.x,w.y,w.z)):j2(s1.x,s1.y,0)}for(let h1=1;h1<=u;h1++)for(let s1=0;s1<Y;s1++){const H1=f?r1(P[s1],z1[s1],F1):P[s1];M?(E.copy(C.normals[h1]).multiplyScalar(H1.x),b.copy(C.binormals[h1]).multiplyScalar(H1.y),w.copy(y[h1]).add(E).add(b),j2(w.x,w.y,w.z)):j2(H1.x,H1.y,d/u*h1)}for(let h1=p-1;h1>=0;h1--){const s1=h1/p,H1=v*Math.cos(s1*Math.PI/2),i2=m*Math.sin(s1*Math.PI/2)+g;for(let G1=0,B2=k.length;G1<B2;G1++){const m2=r1(k[G1],j[G1],i2);j2(m2.x,m2.y,d+H1)}for(let G1=0,B2=O.length;G1<B2;G1++){const m2=O[G1];y1=n1[G1];for(let f2=0,Y4=m2.length;f2<Y4;f2++){const F4=r1(m2[f2],y1[f2],i2);M?j2(F4.x,F4.y+y[u-1].y,y[u-1].x+H1):j2(F4.x,F4.y,d+H1)}}}J1(),_2();function J1(){const h1=i.length/3;if(f){let s1=0,H1=Y*s1;for(let i2=0;i2<g1;i2++){const G1=w1[i2];v2(G1[2]+H1,G1[1]+H1,G1[0]+H1)}s1=u+p*2,H1=Y*s1;for(let i2=0;i2<g1;i2++){const G1=w1[i2];v2(G1[0]+H1,G1[1]+H1,G1[2]+H1)}}else{for(let s1=0;s1<g1;s1++){const H1=w1[s1];v2(H1[2],H1[1],H1[0])}for(let s1=0;s1<g1;s1++){const H1=w1[s1];v2(H1[0]+Y*u,H1[1]+Y*u,H1[2]+Y*u)}}a.addGroup(h1,i.length/3-h1,0)}function _2(){const h1=i.length/3;let s1=0;o1(k,s1),s1+=k.length;for(let H1=0,i2=O.length;H1<i2;H1++){const G1=O[H1];o1(G1,s1),s1+=G1.length}a.addGroup(h1,i.length/3-h1,1)}function o1(h1,s1){let H1=h1.length;for(;--H1>=0;){const i2=H1;let G1=H1-1;G1<0&&(G1=h1.length-1);for(let B2=0,m2=u+p*2;B2<m2;B2++){const f2=Y*B2,Y4=Y*(B2+1),F4=s1+i2+f2,I=s1+G1+f2,_=s1+G1+Y4,Q=s1+i2+Y4;S2(F4,I,_,Q)}}}function j2(h1,s1,H1){l.push(h1),l.push(s1),l.push(H1)}function v2(h1,s1,H1){R1(h1),R1(s1),R1(H1);const i2=i.length/3,G1=z.generateTopUV(a,i,i2-3,i2-2,i2-1);i4(G1[0]),i4(G1[1]),i4(G1[2])}function S2(h1,s1,H1,i2){R1(h1),R1(s1),R1(i2),R1(s1),R1(H1),R1(i2);const G1=i.length/3,B2=z.generateSideWallUV(a,i,G1-6,G1-3,G1-2,G1-1);i4(B2[0]),i4(B2[1]),i4(B2[3]),i4(B2[1]),i4(B2[2]),i4(B2[3])}function R1(h1){i.push(l[h1*3+0]),i.push(l[h1*3+1]),i.push(l[h1*3+2])}function i4(h1){c.push(h1.x),c.push(h1.y)}}}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,a=this.parameters.options;return es(e,a,t)}static fromJSON(t,e){const a=[];for(let c=0,r=t.shapes.length;c<r;c++){const s=e[t.shapes[c]];a.push(s)}const i=t.options.extrudePath;return i!==void 0&&(t.options.extrudePath=new Ie[i.type]().fromJSON(i)),new m5(a,t.options)}}const ts={generateTopUV:function(o,t,e,a,i){const c=t[e*3],r=t[e*3+1],s=t[a*3],l=t[a*3+1],h=t[i*3],u=t[i*3+1];return[new c1(c,r),new c1(s,l),new c1(h,u)]},generateSideWallUV:function(o,t,e,a,i,c){const r=t[e*3],s=t[e*3+1],l=t[e*3+2],h=t[a*3],u=t[a*3+1],d=t[a*3+2],f=t[i*3],v=t[i*3+1],m=t[i*3+2],g=t[c*3],p=t[c*3+1],x=t[c*3+2];return Math.abs(s-u)<Math.abs(r-h)?[new c1(r,1-l),new c1(h,1-d),new c1(f,1-m),new c1(g,1-x)]:[new c1(s,1-l),new c1(u,1-d),new c1(v,1-m),new c1(p,1-x)]}};function es(o,t,e){if(e.shapes=[],Array.isArray(o))for(let a=0,i=o.length;a<i;a++){const c=o[a];e.shapes.push(c.uuid)}else e.shapes.push(o.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class z5 extends O0{constructor(t=1,e=0){const a=(1+Math.sqrt(5))/2,i=[-1,a,0,1,a,0,-1,-a,0,1,-a,0,0,-1,a,0,1,a,0,-1,-a,0,1,-a,a,0,-1,a,0,1,-a,0,-1,-a,0,1],c=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,c,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new z5(t.radius,t.detail)}}class z8 extends O0{constructor(t=1,e=0){const a=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(a,i,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new z8(t.radius,t.detail)}}class x5 extends Y2{constructor(t=.5,e=1,a=8,i=1,c=0,r=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:a,phiSegments:i,thetaStart:c,thetaLength:r},a=Math.max(3,a),i=Math.max(1,i);const s=[],l=[],h=[],u=[];let d=t;const f=(e-t)/i,v=new S,m=new c1;for(let g=0;g<=i;g++){for(let p=0;p<=a;p++){const x=c+p/a*r;v.x=d*Math.cos(x),v.y=d*Math.sin(x),l.push(v.x,v.y,v.z),h.push(0,0,1),m.x=(v.x/e+1)/2,m.y=(v.y/e+1)/2,u.push(m.x,m.y)}d+=f}for(let g=0;g<i;g++){const p=g*(a+1);for(let x=0;x<a;x++){const z=x+p,y=z,M=z+a+1,C=z+a+2,b=z+1;s.push(y,M,b),s.push(M,C,b)}}this.setIndex(s),this.setAttribute("position",new j1(l,3)),this.setAttribute("normal",new j1(h,3)),this.setAttribute("uv",new j1(u,2))}static fromJSON(t){return new x5(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class M5 extends Y2{constructor(t=new Nt([new c1(0,.5),new c1(-.5,-.5),new c1(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const a=[],i=[],c=[],r=[];let s=0,l=0;if(Array.isArray(t)===!1)h(t);else for(let u=0;u<t.length;u++)h(t[u]),this.addGroup(s,l,u),s+=l,l=0;this.setIndex(a),this.setAttribute("position",new j1(i,3)),this.setAttribute("normal",new j1(c,3)),this.setAttribute("uv",new j1(r,2));function h(u){const d=i.length/3,f=u.extractPoints(e);let v=f.shape;const m=f.holes;S0.isClockWise(v)===!1&&(v=v.reverse());for(let p=0,x=m.length;p<x;p++){const z=m[p];S0.isClockWise(z)===!0&&(m[p]=z.reverse())}const g=S0.triangulateShape(v,m);for(let p=0,x=m.length;p<x;p++){const z=m[p];v=v.concat(z)}for(let p=0,x=v.length;p<x;p++){const z=v[p];i.push(z.x,z.y,0),c.push(0,0,1),r.push(z.x,z.y)}for(let p=0,x=g.length;p<x;p++){const z=g[p],y=z[0]+d,M=z[1]+d,C=z[2]+d;a.push(y,M,C),l+=3}}}toJSON(){const t=super.toJSON(),e=this.parameters.shapes;return ns(e,t)}static fromJSON(t,e){const a=[];for(let i=0,c=t.shapes.length;i<c;i++){const r=e[t.shapes[i]];a.push(r)}return new M5(a,t.curveSegments)}}function ns(o,t){if(t.shapes=[],Array.isArray(o))for(let e=0,a=o.length;e<a;e++){const i=o[e];t.shapes.push(i.uuid)}else t.shapes.push(o.uuid);return t}class x8 extends Y2{constructor(t=1,e=32,a=16,i=0,c=Math.PI*2,r=0,s=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:a,phiStart:i,phiLength:c,thetaStart:r,thetaLength:s},e=Math.max(3,Math.floor(e)),a=Math.max(2,Math.floor(a));const l=Math.min(r+s,Math.PI);let h=0;const u=[],d=new S,f=new S,v=[],m=[],g=[],p=[];for(let x=0;x<=a;x++){const z=[],y=x/a;let M=0;x==0&&r==0?M=.5/e:x==a&&l==Math.PI&&(M=-.5/e);for(let C=0;C<=e;C++){const b=C/e;d.x=-t*Math.cos(i+b*c)*Math.sin(r+y*s),d.y=t*Math.cos(r+y*s),d.z=t*Math.sin(i+b*c)*Math.sin(r+y*s),m.push(d.x,d.y,d.z),f.copy(d).normalize(),g.push(f.x,f.y,f.z),p.push(b+M,1-y),z.push(h++)}u.push(z)}for(let x=0;x<a;x++)for(let z=0;z<e;z++){const y=u[x][z+1],M=u[x][z],C=u[x+1][z],b=u[x+1][z+1];(x!==0||r>0)&&v.push(y,M,b),(x!==a-1||l<Math.PI)&&v.push(M,C,b)}this.setIndex(v),this.setAttribute("position",new j1(m,3)),this.setAttribute("normal",new j1(g,3)),this.setAttribute("uv",new j1(p,2))}static fromJSON(t){return new x8(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class w5 extends O0{constructor(t=1,e=0){const a=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],i=[2,1,0,0,3,2,1,3,0,2,3,1];super(a,i,t,e),this.type="TetrahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new w5(t.radius,t.detail)}}class y5 extends Y2{constructor(t=1,e=.4,a=8,i=6,c=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:a,tubularSegments:i,arc:c},a=Math.floor(a),i=Math.floor(i);const r=[],s=[],l=[],h=[],u=new S,d=new S,f=new S;for(let v=0;v<=a;v++)for(let m=0;m<=i;m++){const g=m/i*c,p=v/a*Math.PI*2;d.x=(t+e*Math.cos(p))*Math.cos(g),d.y=(t+e*Math.cos(p))*Math.sin(g),d.z=e*Math.sin(p),s.push(d.x,d.y,d.z),u.x=t*Math.cos(g),u.y=t*Math.sin(g),f.subVectors(d,u).normalize(),l.push(f.x,f.y,f.z),h.push(m/i),h.push(v/a)}for(let v=1;v<=a;v++)for(let m=1;m<=i;m++){const g=(i+1)*v+m-1,p=(i+1)*(v-1)+m-1,x=(i+1)*(v-1)+m,z=(i+1)*v+m;r.push(g,p,z),r.push(p,x,z)}this.setIndex(r),this.setAttribute("position",new j1(s,3)),this.setAttribute("normal",new j1(l,3)),this.setAttribute("uv",new j1(h,2))}static fromJSON(t){return new y5(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class C5 extends Y2{constructor(t=1,e=.4,a=64,i=8,c=2,r=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:t,tube:e,tubularSegments:a,radialSegments:i,p:c,q:r},a=Math.floor(a),i=Math.floor(i);const s=[],l=[],h=[],u=[],d=new S,f=new S,v=new S,m=new S,g=new S,p=new S,x=new S;for(let y=0;y<=a;++y){const M=y/a*c*Math.PI*2;z(M,c,r,t,v),z(M+.01,c,r,t,m),p.subVectors(m,v),x.addVectors(m,v),g.crossVectors(p,x),x.crossVectors(g,p),g.normalize(),x.normalize();for(let C=0;C<=i;++C){const b=C/i*Math.PI*2,E=-e*Math.cos(b),w=e*Math.sin(b);d.x=v.x+(E*x.x+w*g.x),d.y=v.y+(E*x.y+w*g.y),d.z=v.z+(E*x.z+w*g.z),l.push(d.x,d.y,d.z),f.subVectors(d,v).normalize(),h.push(f.x,f.y,f.z),u.push(y/a),u.push(C/i)}}for(let y=1;y<=a;y++)for(let M=1;M<=i;M++){const C=(i+1)*(y-1)+(M-1),b=(i+1)*y+(M-1),E=(i+1)*y+M,w=(i+1)*(y-1)+M;s.push(C,b,w),s.push(b,E,w)}this.setIndex(s),this.setAttribute("position",new j1(l,3)),this.setAttribute("normal",new j1(h,3)),this.setAttribute("uv",new j1(u,2));function z(y,M,C,b,E){const w=Math.cos(y),H=Math.sin(y),P=C/M*y,O=Math.cos(P);E.x=b*(2+O)*.5*w,E.y=b*(2+O)*H*.5,E.z=b*Math.sin(P)*.5}}static fromJSON(t){return new C5(t.radius,t.tube,t.tubularSegments,t.radialSegments,t.p,t.q)}}class _5 extends Y2{constructor(t=new vn(new S(-1,-1,0),new S(-1,1,0),new S(1,1,0)),e=64,a=1,i=8,c=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:a,radialSegments:i,closed:c};const r=t.computeFrenetFrames(e,c);this.tangents=r.tangents,this.normals=r.normals,this.binormals=r.binormals;const s=new S,l=new S,h=new c1;let u=new S;const d=[],f=[],v=[],m=[];g(),this.setIndex(m),this.setAttribute("position",new j1(d,3)),this.setAttribute("normal",new j1(f,3)),this.setAttribute("uv",new j1(v,2));function g(){for(let y=0;y<e;y++)p(y);p(c===!1?e:0),z(),x()}function p(y){u=t.getPointAt(y/e,u);const M=r.normals[y],C=r.binormals[y];for(let b=0;b<=i;b++){const E=b/i*Math.PI*2,w=Math.sin(E),H=-Math.cos(E);l.x=H*M.x+w*C.x,l.y=H*M.y+w*C.y,l.z=H*M.z+w*C.z,l.normalize(),f.push(l.x,l.y,l.z),s.x=u.x+a*l.x,s.y=u.y+a*l.y,s.z=u.z+a*l.z,d.push(s.x,s.y,s.z)}}function x(){for(let y=1;y<=e;y++)for(let M=1;M<=i;M++){const C=(i+1)*(y-1)+(M-1),b=(i+1)*y+(M-1),E=(i+1)*y+M,w=(i+1)*(y-1)+M;m.push(C,b,w),m.push(b,E,w)}}function z(){for(let y=0;y<=e;y++)for(let M=0;M<=i;M++)h.x=y/e,h.y=M/i,v.push(h.x,h.y)}}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new _5(new Ie[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class as extends Y2{constructor(t=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:t},t!==null){const e=[],a=new Set,i=new S,c=new S;if(t.index!==null){const r=t.attributes.position,s=t.index;let l=t.groups;l.length===0&&(l=[{start:0,count:s.count,materialIndex:0}]);for(let h=0,u=l.length;h<u;++h){const d=l[h],f=d.start,v=d.count;for(let m=f,g=f+v;m<g;m+=3)for(let p=0;p<3;p++){const x=s.getX(m+p),z=s.getX(m+(p+1)%3);i.fromBufferAttribute(r,x),c.fromBufferAttribute(r,z),yn(i,c,a)===!0&&(e.push(i.x,i.y,i.z),e.push(c.x,c.y,c.z))}}}else{const r=t.attributes.position;for(let s=0,l=r.count/3;s<l;s++)for(let h=0;h<3;h++){const u=3*s+h,d=3*s+(h+1)%3;i.fromBufferAttribute(r,u),c.fromBufferAttribute(r,d),yn(i,c,a)===!0&&(e.push(i.x,i.y,i.z),e.push(c.x,c.y,c.z))}}this.setAttribute("position",new j1(e,3))}}}function yn(o,t,e){const a=`${o.x},${o.y},${o.z}-${t.x},${t.y},${t.z}`,i=`${t.x},${t.y},${t.z}-${o.x},${o.y},${o.z}`;return e.has(a)===!0||e.has(i)===!0?!1:(e.add(a),e.add(i),!0)}var Cn=Object.freeze({__proto__:null,BoxGeometry:Q0,BoxBufferGeometry:Q0,CapsuleGeometry:s5,CapsuleBufferGeometry:s5,CircleGeometry:o5,CircleBufferGeometry:o5,ConeGeometry:l5,ConeBufferGeometry:l5,CylinderGeometry:Dt,CylinderBufferGeometry:Dt,DodecahedronGeometry:h5,DodecahedronBufferGeometry:h5,EdgesGeometry:Gr,ExtrudeGeometry:m5,ExtrudeBufferGeometry:m5,IcosahedronGeometry:z5,IcosahedronBufferGeometry:z5,LatheGeometry:v8,LatheBufferGeometry:v8,OctahedronGeometry:z8,OctahedronBufferGeometry:z8,PlaneGeometry:a8,PlaneBufferGeometry:a8,PolyhedronGeometry:O0,PolyhedronBufferGeometry:O0,RingGeometry:x5,RingBufferGeometry:x5,ShapeGeometry:M5,ShapeBufferGeometry:M5,SphereGeometry:x8,SphereBufferGeometry:x8,TetrahedronGeometry:w5,TetrahedronBufferGeometry:w5,TorusGeometry:y5,TorusBufferGeometry:y5,TorusKnotGeometry:C5,TorusKnotBufferGeometry:C5,TubeGeometry:_5,TubeBufferGeometry:_5,WireframeGeometry:as});class is extends null{constructor(t){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new D1(0),this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.fog=t.fog,this}}class cs extends null{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class rs extends null{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new D1(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new D1(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=x2,this.normalScale=new c1(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class ss extends null{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new c1(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return U4(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new D1(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=0,this.attenuationColor=new D1(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new D1(1,1,1),this.specularColorMap=null,this._sheen=0,this._clearcoat=0,this._iridescence=0,this._transmission=0,this.setValues(t)}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class os extends null{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new D1(16777215),this.specular=new D1(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new D1(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=x2,this.normalScale=new c1(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=P3,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class ls extends null{constructor(t){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new D1(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new D1(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=x2,this.normalScale=new c1(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.gradientMap=t.gradientMap,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}class hs extends null{constructor(t){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=x2,this.normalScale=new c1(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(t)}copy(t){return super.copy(t),this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.flatShading=t.flatShading,this}}class us extends null{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new D1(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new D1(0),this.emissiveIntensity=1,this.emissiveMap=null,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=P3,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}class ds extends null{constructor(t){super(),this.isMeshMatcapMaterial=!0,this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new D1(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=x2,this.normalScale=new c1(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={MATCAP:""},this.color.copy(t.color),this.matcap=t.matcap,this.map=t.map,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.flatShading=t.flatShading,this.fog=t.fog,this}}class fs extends null{constructor(t){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(t)}copy(t){return super.copy(t),this.scale=t.scale,this.dashSize=t.dashSize,this.gapSize=t.gapSize,this}}function N6(o,t,e){return Be(o)?new o.constructor(o.subarray(t,e!==void 0?e:o.length)):o.slice(t,e)}function at(o,t,e){return!o||!e&&o.constructor===t?o:typeof t.BYTES_PER_ELEMENT=="number"?new t(o):Array.prototype.slice.call(o)}function Be(o){return ArrayBuffer.isView(o)&&!(o instanceof DataView)}function _n(o){function t(i,c){return o[i]-o[c]}const e=o.length,a=new Array(e);for(let i=0;i!==e;++i)a[i]=i;return a.sort(t),a}function Te(o,t,e){const a=o.length,i=new o.constructor(a);for(let c=0,r=0;r!==a;++c){const s=e[c]*t;for(let l=0;l!==t;++l)i[r++]=o[s+l]}return i}function Ee(o,t,e,a){let i=1,c=o[0];for(;c!==void 0&&c[a]===void 0;)c=o[i++];if(c===void 0)return;let r=c[a];if(r!==void 0)if(Array.isArray(r))do r=c[a],r!==void 0&&(t.push(c.time),e.push.apply(e,r)),c=o[i++];while(c!==void 0);else if(r.toArray!==void 0)do r=c[a],r!==void 0&&(t.push(c.time),r.toArray(e,e.length)),c=o[i++];while(c!==void 0);else do r=c[a],r!==void 0&&(t.push(c.time),e.push(r)),c=o[i++];while(c!==void 0)}function vs(o,t,e,a,i=30){const c=o.clone();c.name=t;const r=[];for(let l=0;l<c.tracks.length;++l){const h=c.tracks[l],u=h.getValueSize(),d=[],f=[];for(let v=0;v<h.times.length;++v){const m=h.times[v]*i;if(!(m<e||m>=a)){d.push(h.times[v]);for(let g=0;g<u;++g)f.push(h.values[v*u+g])}}d.length!==0&&(h.times=at(d,h.times.constructor),h.values=at(f,h.values.constructor),r.push(h))}c.tracks=r;let s=1/0;for(let l=0;l<c.tracks.length;++l)s>c.tracks[l].times[0]&&(s=c.tracks[l].times[0]);for(let l=0;l<c.tracks.length;++l)c.tracks[l].shift(-1*s);return c.resetDuration(),c}function gs(o,t=0,e=o,a=30){a<=0&&(a=30);const i=e.tracks.length,c=t/a;for(let r=0;r<i;++r){const s=e.tracks[r],l=s.ValueTypeName;if(l==="bool"||l==="string")continue;const h=o.tracks.find(function(x){return x.name===s.name&&x.ValueTypeName===l});if(h===void 0)continue;let u=0;const d=s.getValueSize();s.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(u=d/3);let f=0;const v=h.getValueSize();h.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(f=v/3);const m=s.times.length-1;let g;if(c<=s.times[0]){const x=u,z=d-u;g=N6(s.values,x,z)}else if(c>=s.times[m]){const x=m*d+u,z=x+d-u;g=N6(s.values,x,z)}else{const x=s.createInterpolant(),z=u,y=d-u;x.evaluate(c),g=N6(x.resultBuffer,z,y)}l==="quaternion"&&new h6().fromArray(g).normalize().conjugate().toArray(g);const p=h.times.length;for(let x=0;x<p;++x){const z=x*v+f;if(l==="quaternion")h6.multiplyQuaternionsFlat(h.values,z,g,0,h.values,z);else{const y=v-f*2;for(let M=0;M<y;++M)h.values[z+M]-=g[M]}}}return o.blendMode=B,o}var Ko=Object.freeze({__proto__:null,arraySlice:N6,convertArray:at,isTypedArray:Be,getKeyframeOrder:_n,sortedArray:Te,flattenJSON:Ee,subclip:vs,makeClipAdditive:gs});class S5{constructor(t,e,a,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(a),this.sampleValues=e,this.valueSize=a,this.settings=null,this.DefaultSettings_={}}evaluate(t){const e=this.parameterPositions;let a=this._cachedIndex,i=e[a],c=e[a-1];t:{e:{let r;n:{a:if(!(t<i)){for(let s=a+2;;){if(i===void 0){if(t<c)break a;return a=e.length,this._cachedIndex=a,this.copySampleValue_(a-1)}if(a===s)break;if(c=i,i=e[++a],t<i)break e}r=e.length;break n}if(!(t>=c)){const s=e[1];t<s&&(a=2,c=s);for(let l=a-2;;){if(c===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(a===l)break;if(i=c,c=e[--a-1],t>=c)break e}r=a,a=0;break n}break t}for(;a<r;){const s=a+r>>>1;t<e[s]?r=s:a=s+1}if(i=e[a],c=e[a-1],c===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return a=e.length,this._cachedIndex=a,this.copySampleValue_(a-1)}this._cachedIndex=a,this.intervalChanged_(a,c,i)}return this.interpolate_(a,c,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){const e=this.resultBuffer,a=this.sampleValues,i=this.valueSize,c=t*i;for(let r=0;r!==i;++r)e[r]=a[c+r];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class ps extends S5{constructor(t,e,a,i){super(t,e,a,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:z6,endingEnd:z6}}intervalChanged_(t,e,a){const i=this.parameterPositions;let c=t-2,r=t+1,s=i[c],l=i[r];if(s===void 0)switch(this.getSettings_().endingStart){case T:c=t,s=2*e-a;break;case F:c=i.length-2,s=e+i[c]-i[c+1];break;default:c=t,s=a}if(l===void 0)switch(this.getSettings_().endingEnd){case T:r=t,l=2*a-e;break;case F:r=1,l=a+i[1]-i[0];break;default:r=t-1,l=e}const h=(a-e)*.5,u=this.valueSize;this._weightPrev=h/(e-s),this._weightNext=h/(l-a),this._offsetPrev=c*u,this._offsetNext=r*u}interpolate_(t,e,a,i){const c=this.resultBuffer,r=this.sampleValues,s=this.valueSize,l=t*s,h=l-s,u=this._offsetPrev,d=this._offsetNext,f=this._weightPrev,v=this._weightNext,m=(a-e)/(i-e),g=m*m,p=g*m,x=-f*p+2*f*g-f*m,z=(1+f)*p+(-1.5-2*f)*g+(-.5+f)*m+1,y=(-1-v)*p+(1.5+v)*g+.5*m,M=v*p-v*g;for(let C=0;C!==s;++C)c[C]=x*r[u+C]+z*r[h+C]+y*r[l+C]+M*r[d+C];return c}}class Sn extends S5{constructor(t,e,a,i){super(t,e,a,i)}interpolate_(t,e,a,i){const c=this.resultBuffer,r=this.sampleValues,s=this.valueSize,l=t*s,h=l-s,u=(a-e)/(i-e),d=1-u;for(let f=0;f!==s;++f)c[f]=r[h+f]*d+r[l+f]*u;return c}}class ms extends S5{constructor(t,e,a,i){super(t,e,a,i)}interpolate_(t){return this.copySampleValue_(t-1)}}class d0{constructor(t,e,a,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=at(e,this.TimeBufferType),this.values=at(a,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){const e=t.constructor;let a;if(e.toJSON!==this.toJSON)a=e.toJSON(t);else{a={name:t.name,times:at(t.times,Array),values:at(t.values,Array)};const i=t.getInterpolation();i!==t.DefaultInterpolation&&(a.interpolation=i)}return a.type=t.ValueTypeName,a}InterpolantFactoryMethodDiscrete(t){return new ms(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Sn(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new ps(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case p6:e=this.InterpolantFactoryMethodDiscrete;break;case q6:e=this.InterpolantFactoryMethodLinear;break;case m6:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){const a="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(a);return console.warn("THREE.KeyframeTrack:",a),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return p6;case this.InterpolantFactoryMethodLinear:return q6;case this.InterpolantFactoryMethodSmooth:return m6}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){const e=this.times;for(let a=0,i=e.length;a!==i;++a)e[a]+=t}return this}scale(t){if(t!==1){const e=this.times;for(let a=0,i=e.length;a!==i;++a)e[a]*=t}return this}trim(t,e){const a=this.times,i=a.length;let c=0,r=i-1;for(;c!==i&&a[c]<t;)++c;for(;r!==-1&&a[r]>e;)--r;if(++r,c!==0||r!==i){c>=r&&(r=Math.max(r,1),c=r-1);const s=this.getValueSize();this.times=N6(a,c,r),this.values=N6(this.values,c*s,r*s)}return this}validate(){let t=!0;const e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);const a=this.times,i=this.values,c=a.length;c===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let r=null;for(let s=0;s!==c;s++){const l=a[s];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,s,l),t=!1;break}if(r!==null&&r>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,s,l,r),t=!1;break}r=l}if(i!==void 0&&Be(i))for(let s=0,l=i.length;s!==l;++s){const h=i[s];if(isNaN(h)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,s,h),t=!1;break}}return t}optimize(){const t=N6(this.times),e=N6(this.values),a=this.getValueSize(),i=this.getInterpolation()===m6,c=t.length-1;let r=1;for(let s=1;s<c;++s){let l=!1;const h=t[s],u=t[s+1];if(h!==u&&(s!==1||h!==t[0]))if(i)l=!0;else{const d=s*a,f=d-a,v=d+a;for(let m=0;m!==a;++m){const g=e[d+m];if(g!==e[f+m]||g!==e[v+m]){l=!0;break}}}if(l){if(s!==r){t[r]=t[s];const d=s*a,f=r*a;for(let v=0;v!==a;++v)e[f+v]=e[d+v]}++r}}if(c>0){t[r]=t[c];for(let s=c*a,l=r*a,h=0;h!==a;++h)e[l+h]=e[s+h];++r}return r!==t.length?(this.times=N6(t,0,r),this.values=N6(e,0,r*a)):(this.times=t,this.values=e),this}clone(){const t=N6(this.times,0),e=N6(this.values,0),a=this.constructor,i=new a(this.name,t,e);return i.createInterpolant=this.createInterpolant,i}}d0.prototype.TimeBufferType=Float32Array,d0.prototype.ValueBufferType=Float32Array,d0.prototype.DefaultInterpolation=q6;class kt extends d0{}kt.prototype.ValueTypeName="bool",kt.prototype.ValueBufferType=Array,kt.prototype.DefaultInterpolation=p6,kt.prototype.InterpolantFactoryMethodLinear=void 0,kt.prototype.InterpolantFactoryMethodSmooth=void 0;class bn extends d0{}bn.prototype.ValueTypeName="color";class b5 extends d0{}b5.prototype.ValueTypeName="number";class zs extends S5{constructor(t,e,a,i){super(t,e,a,i)}interpolate_(t,e,a,i){const c=this.resultBuffer,r=this.sampleValues,s=this.valueSize,l=(a-e)/(i-e);let h=t*s;for(let u=h+s;h!==u;h+=4)h6.slerpFlat(c,0,r,h-s,r,h,l);return c}}class M8 extends d0{InterpolantFactoryMethodLinear(t){return new zs(this.times,this.values,this.getValueSize(),t)}}M8.prototype.ValueTypeName="quaternion",M8.prototype.DefaultInterpolation=q6,M8.prototype.InterpolantFactoryMethodSmooth=void 0;class Ut extends d0{}Ut.prototype.ValueTypeName="string",Ut.prototype.ValueBufferType=Array,Ut.prototype.DefaultInterpolation=p6,Ut.prototype.InterpolantFactoryMethodLinear=void 0,Ut.prototype.InterpolantFactoryMethodSmooth=void 0;class L5 extends d0{}L5.prototype.ValueTypeName="vector";class H5{constructor(t,e=-1,a,i=R){this.name=t,this.tracks=a,this.duration=e,this.blendMode=i,this.uuid=H4(),this.duration<0&&this.resetDuration()}static parse(t){const e=[],a=t.tracks,i=1/(t.fps||1);for(let r=0,s=a.length;r!==s;++r)e.push(Ms(a[r]).scale(i));const c=new this(t.name,t.duration,e,t.blendMode);return c.uuid=t.uuid,c}static toJSON(t){const e=[],a=t.tracks,i={name:t.name,duration:t.duration,tracks:e,uuid:t.uuid,blendMode:t.blendMode};for(let c=0,r=a.length;c!==r;++c)e.push(d0.toJSON(a[c]));return i}static CreateFromMorphTargetSequence(t,e,a,i){const c=e.length,r=[];for(let s=0;s<c;s++){let l=[],h=[];l.push((s+c-1)%c,s,(s+1)%c),h.push(0,1,0);const u=_n(l);l=Te(l,1,u),h=Te(h,1,u),!i&&l[0]===0&&(l.push(c),h.push(h[0])),r.push(new b5(".morphTargetInfluences["+e[s].name+"]",l,h).scale(1/a))}return new this(t,-1,r)}static findByName(t,e){let a=t;if(!Array.isArray(t)){const i=t;a=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<a.length;i++)if(a[i].name===e)return a[i];return null}static CreateClipsFromMorphTargetSequences(t,e,a){const i={},c=/^([\w-]*?)([\d]+)$/;for(let s=0,l=t.length;s<l;s++){const h=t[s],u=h.name.match(c);if(u&&u.length>1){const d=u[1];let f=i[d];f||(i[d]=f=[]),f.push(h)}}const r=[];for(const s in i)r.push(this.CreateFromMorphTargetSequence(s,i[s],e,a));return r}static parseAnimation(t,e){if(!t)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const a=function(d,f,v,m,g){if(v.length!==0){const p=[],x=[];Ee(v,p,x,m),p.length!==0&&g.push(new d(f,p,x))}},i=[],c=t.name||"default",r=t.fps||30,s=t.blendMode;let l=t.length||-1;const h=t.hierarchy||[];for(let d=0;d<h.length;d++){const f=h[d].keys;if(!(!f||f.length===0))if(f[0].morphTargets){const v={};let m;for(m=0;m<f.length;m++)if(f[m].morphTargets)for(let g=0;g<f[m].morphTargets.length;g++)v[f[m].morphTargets[g]]=-1;for(const g in v){const p=[],x=[];for(let z=0;z!==f[m].morphTargets.length;++z){const y=f[m];p.push(y.time),x.push(y.morphTarget===g?1:0)}i.push(new b5(".morphTargetInfluence["+g+"]",p,x))}l=v.length*r}else{const v=".bones["+e[d].name+"]";a(L5,v+".position",f,"pos",i),a(M8,v+".quaternion",f,"rot",i),a(L5,v+".scale",f,"scl",i)}}return i.length===0?null:new this(c,l,i,s)}resetDuration(){const t=this.tracks;let e=0;for(let a=0,i=t.length;a!==i;++a){const c=this.tracks[a];e=Math.max(e,c.times[c.times.length-1])}return this.duration=e,this}trim(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].trim(0,this.duration);return this}validate(){let t=!0;for(let e=0;e<this.tracks.length;e++)t=t&&this.tracks[e].validate();return t}optimize(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].optimize();return this}clone(){const t=[];for(let e=0;e<this.tracks.length;e++)t.push(this.tracks[e].clone());return new this.constructor(this.name,this.duration,t,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function xs(o){switch(o.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return b5;case"vector":case"vector2":case"vector3":case"vector4":return L5;case"color":return bn;case"quaternion":return M8;case"bool":case"boolean":return kt;case"string":return Ut}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+o)}function Ms(o){if(o.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const t=xs(o.type);if(o.times===void 0){const e=[],a=[];Ee(o.keys,e,a,"value"),o.times=e,o.values=a}return t.parse!==void 0?t.parse(o):new t(o.name,o.times,o.values,o.interpolation)}const Zt={enabled:!1,files:{},add:function(o,t){this.enabled!==!1&&(this.files[o]=t)},get:function(o){if(this.enabled!==!1)return this.files[o]},remove:function(o){delete this.files[o]},clear:function(){this.files={}}};class Ln{constructor(t,e,a){const i=this;let c=!1,r=0,s=0,l;const h=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=a,this.itemStart=function(u){s++,c===!1&&i.onStart!==void 0&&i.onStart(u,r,s),c=!0},this.itemEnd=function(u){r++,i.onProgress!==void 0&&i.onProgress(u,r,s),r===s&&(c=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,d){return h.push(u,d),this},this.removeHandler=function(u){const d=h.indexOf(u);return d!==-1&&h.splice(d,2),this},this.getHandler=function(u){for(let d=0,f=h.length;d<f;d+=2){const v=h[d],m=h[d+1];if(v.global&&(v.lastIndex=0),v.test(u))return m}return null}}}const ws=new Ln;class Hn{constructor(t){this.manager=t!==void 0?t:ws,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const a=this;return new Promise(function(i,c){a.load(t,i,e,c)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}const b0={};class ys extends Error{constructor(t,e){super(t),this.response=e}}class U0 extends null{constructor(t){super(t)}load(t,e,a,i){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const c=Zt.get(t);if(c!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(c),this.manager.itemEnd(t)},0),c;if(b0[t]!==void 0){b0[t].push({onLoad:e,onProgress:a,onError:i});return}b0[t]=[],b0[t].push({onLoad:e,onProgress:a,onError:i});const r=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),s=this.mimeType,l=this.responseType;fetch(r).then(h=>{if(h.status===200||h.status===0){if(h.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||h.body===void 0||h.body.getReader===void 0)return h;const u=b0[t],d=h.body.getReader(),f=h.headers.get("Content-Length"),v=f?parseInt(f):0,m=v!==0;let g=0;const p=new ReadableStream({start(x){z();function z(){d.read().then(({done:y,value:M})=>{if(y)x.close();else{g+=M.byteLength;const C=new ProgressEvent("progress",{lengthComputable:m,loaded:g,total:v});for(let b=0,E=u.length;b<E;b++){const w=u[b];w.onProgress&&w.onProgress(C)}x.enqueue(M),z()}})}}});return new Response(p)}else throw new ys(`fetch for "${h.url}" responded with ${h.status}: ${h.statusText}`,h)}).then(h=>{switch(l){case"arraybuffer":return h.arrayBuffer();case"blob":return h.blob();case"document":return h.text().then(u=>new DOMParser().parseFromString(u,s));case"json":return h.json();default:if(s===void 0)return h.text();{const d=/charset="?([^;"\s]*)"?/i.exec(s),f=d&&d[1]?d[1].toLowerCase():void 0,v=new TextDecoder(f);return h.arrayBuffer().then(m=>v.decode(m))}}}).then(h=>{Zt.add(t,h);const u=b0[t];delete b0[t];for(let d=0,f=u.length;d<f;d++){const v=u[d];v.onLoad&&v.onLoad(h)}}).catch(h=>{const u=b0[t];if(u===void 0)throw this.manager.itemError(t),h;delete b0[t];for(let d=0,f=u.length;d<f;d++){const v=u[d];v.onError&&v.onError(h)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}}class Qo extends null{constructor(t){super(t)}load(t,e,a,i){const c=this,r=new U0(this.manager);r.setPath(this.path),r.setRequestHeader(this.requestHeader),r.setWithCredentials(this.withCredentials),r.load(t,function(s){try{e(c.parse(JSON.parse(s)))}catch(l){i?i(l):console.error(l),c.manager.itemError(t)}},a,i)}parse(t){const e=[];for(let a=0;a<t.length;a++){const i=H5.parse(t[a]);e.push(i)}return e}}class tl extends null{constructor(t){super(t)}load(t,e,a,i){const c=this,r=[],s=new Cr,l=new U0(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(c.withCredentials);let h=0;function u(d){l.load(t[d],function(f){const v=c.parse(f,!0);r[d]={width:v.width,height:v.height,format:v.format,mipmaps:v.mipmaps},h+=1,h===6&&(v.mipmapCount===1&&(s.minFilter=u2),s.image=r,s.format=v.format,s.needsUpdate=!0,e&&e(s))},a,i)}if(Array.isArray(t))for(let d=0,f=t.length;d<f;++d)u(d);else l.load(t,function(d){const f=c.parse(d,!0);if(f.isCubemap){const v=f.mipmaps.length/f.mipmapCount;for(let m=0;m<v;m++){r[m]={mipmaps:[]};for(let g=0;g<f.mipmapCount;g++)r[m].mipmaps.push(f.mipmaps[m*f.mipmapCount+g]),r[m].format=f.format,r[m].width=f.width,r[m].height=f.height}s.image=r}else s.image.width=f.width,s.image.height=f.height,s.mipmaps=f.mipmaps;f.mipmapCount===1&&(s.minFilter=u2),s.format=f.format,s.needsUpdate=!0,e&&e(s)},a,i);return s}}class I5 extends Hn{constructor(t){super(t)}load(t,e,a,i){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const c=this,r=Zt.get(t);if(r!==void 0)return c.manager.itemStart(t),setTimeout(function(){e&&e(r),c.manager.itemEnd(t)},0),r;const s=I0("img");function l(){u(),Zt.add(t,this),e&&e(this),c.manager.itemEnd(t)}function h(d){u(),i&&i(d),c.manager.itemError(t),c.manager.itemEnd(t)}function u(){s.removeEventListener("load",l,!1),s.removeEventListener("error",h,!1)}return s.addEventListener("load",l,!1),s.addEventListener("error",h,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(s.crossOrigin=this.crossOrigin),c.manager.itemStart(t),s.src=t,s}}class el extends null{constructor(t){super(t)}load(t,e,a,i){const c=new W8,r=new I5(this.manager);r.setCrossOrigin(this.crossOrigin),r.setPath(this.path);let s=0;function l(h){r.load(t[h],function(u){c.images[h]=u,s++,s===6&&(c.needsUpdate=!0,e&&e(c))},void 0,i)}for(let h=0;h<t.length;++h)l(h);return c}}class nl extends null{constructor(t){super(t)}load(t,e,a,i){const c=this,r=new l8,s=new U0(this.manager);return s.setResponseType("arraybuffer"),s.setRequestHeader(this.requestHeader),s.setPath(this.path),s.setWithCredentials(c.withCredentials),s.load(t,function(l){const h=c.parse(l);!h||(h.image!==void 0?r.image=h.image:h.data!==void 0&&(r.image.width=h.width,r.image.height=h.height,r.image.data=h.data),r.wrapS=h.wrapS!==void 0?h.wrapS:s2,r.wrapT=h.wrapT!==void 0?h.wrapT:s2,r.magFilter=h.magFilter!==void 0?h.magFilter:u2,r.minFilter=h.minFilter!==void 0?h.minFilter:u2,r.anisotropy=h.anisotropy!==void 0?h.anisotropy:1,h.encoding!==void 0&&(r.encoding=h.encoding),h.flipY!==void 0&&(r.flipY=h.flipY),h.format!==void 0&&(r.format=h.format),h.type!==void 0&&(r.type=h.type),h.mipmaps!==void 0&&(r.mipmaps=h.mipmaps,r.minFilter=k1),h.mipmapCount===1&&(r.minFilter=u2),h.generateMipmaps!==void 0&&(r.generateMipmaps=h.generateMipmaps),r.needsUpdate=!0,e&&e(r,h))},a,i),r}}class Cs extends Hn{constructor(t){super(t)}load(t,e,a,i){const c=new I2,r=new I5(this.manager);return r.setCrossOrigin(this.crossOrigin),r.setPath(this.path),r.load(t,function(s){c.image=s,c.needsUpdate=!0,e!==void 0&&e(c)},a,i),c}}class al extends null{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new D1(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}}class _s extends null{constructor(t,e,a){super(t,a),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(A3.DefaultUp),this.updateMatrix(),this.groundColor=new D1(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const In=new O2,An=new S,Vn=new S;class il{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new c1(512,512),this.map=null,this.mapPass=null,this.matrix=new O2,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new se,this._frameExtents=new c1(1,1),this._viewportCount=1,this._viewports=[new S1(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,a=this.matrix;An.setFromMatrixPosition(t.matrixWorld),e.position.copy(An),Vn.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Vn),e.updateMatrixWorld(),In.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(In),a.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),a.multiply(e.projectionMatrix),a.multiply(e.matrixWorldInverse)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class Ss extends null{constructor(){super(new R3(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){const e=this.camera,a=g0*2*t.angle*this.focus,i=this.mapSize.width/this.mapSize.height,c=t.distance||e.far;(a!==e.fov||i!==e.aspect||c!==e.far)&&(e.fov=a,e.aspect=i,e.far=c,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class bs extends null{constructor(t,e,a=0,i=Math.PI/3,c=0,r=1){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(A3.DefaultUp),this.updateMatrix(),this.target=new A3,this.distance=a,this.angle=i,this.penumbra=c,this.decay=r,this.shadow=new Ss}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}const Fn=new O2,w8=new S,Ge=new S;class Ls extends null{constructor(){super(new R3(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new c1(4,2),this._viewportCount=6,this._viewports=[new S1(2,1,1,1),new S1(0,1,1,1),new S1(3,1,1,1),new S1(1,1,1,1),new S1(3,0,1,1),new S1(1,0,1,1)],this._cubeDirections=[new S(1,0,0),new S(-1,0,0),new S(0,0,1),new S(0,0,-1),new S(0,1,0),new S(0,-1,0)],this._cubeUps=[new S(0,1,0),new S(0,1,0),new S(0,1,0),new S(0,1,0),new S(0,0,1),new S(0,0,-1)]}updateMatrices(t,e=0){const a=this.camera,i=this.matrix,c=t.distance||a.far;c!==a.far&&(a.far=c,a.updateProjectionMatrix()),w8.setFromMatrixPosition(t.matrixWorld),a.position.copy(w8),Ge.copy(a.position),Ge.add(this._cubeDirections[e]),a.up.copy(this._cubeUps[e]),a.lookAt(Ge),a.updateMatrixWorld(),i.makeTranslation(-w8.x,-w8.y,-w8.z),Fn.multiplyMatrices(a.projectionMatrix,a.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Fn)}}class Hs extends null{constructor(t,e,a=0,i=1){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=a,this.decay=i,this.shadow=new Ls}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class Is extends null{constructor(){super(new oe(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class As extends null{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(A3.DefaultUp),this.updateMatrix(),this.target=new A3,this.shadow=new Is}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Vs extends null{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class Fs extends null{constructor(t,e,a=10,i=10){super(t,e),this.isRectAreaLight=!0,this.type="RectAreaLight",this.width=a,this.height=i}get power(){return this.intensity*this.width*this.height*Math.PI}set power(t){this.intensity=t/(this.width*this.height*Math.PI)}copy(t){return super.copy(t),this.width=t.width,this.height=t.height,this}toJSON(t){const e=super.toJSON(t);return e.object.width=this.width,e.object.height=this.height,e}}class Bs{constructor(){this.isSphericalHarmonics3=!0,this.coefficients=[];for(let t=0;t<9;t++)this.coefficients.push(new S)}set(t){for(let e=0;e<9;e++)this.coefficients[e].copy(t[e]);return this}zero(){for(let t=0;t<9;t++)this.coefficients[t].set(0,0,0);return this}getAt(t,e){const a=t.x,i=t.y,c=t.z,r=this.coefficients;return e.copy(r[0]).multiplyScalar(.282095),e.addScaledVector(r[1],.488603*i),e.addScaledVector(r[2],.488603*c),e.addScaledVector(r[3],.488603*a),e.addScaledVector(r[4],1.092548*(a*i)),e.addScaledVector(r[5],1.092548*(i*c)),e.addScaledVector(r[6],.315392*(3*c*c-1)),e.addScaledVector(r[7],1.092548*(a*c)),e.addScaledVector(r[8],.546274*(a*a-i*i)),e}getIrradianceAt(t,e){const a=t.x,i=t.y,c=t.z,r=this.coefficients;return e.copy(r[0]).multiplyScalar(.886227),e.addScaledVector(r[1],2*.511664*i),e.addScaledVector(r[2],2*.511664*c),e.addScaledVector(r[3],2*.511664*a),e.addScaledVector(r[4],2*.429043*a*i),e.addScaledVector(r[5],2*.429043*i*c),e.addScaledVector(r[6],.743125*c*c-.247708),e.addScaledVector(r[7],2*.429043*a*c),e.addScaledVector(r[8],.429043*(a*a-i*i)),e}add(t){for(let e=0;e<9;e++)this.coefficients[e].add(t.coefficients[e]);return this}addScaledSH(t,e){for(let a=0;a<9;a++)this.coefficients[a].addScaledVector(t.coefficients[a],e);return this}scale(t){for(let e=0;e<9;e++)this.coefficients[e].multiplyScalar(t);return this}lerp(t,e){for(let a=0;a<9;a++)this.coefficients[a].lerp(t.coefficients[a],e);return this}equals(t){for(let e=0;e<9;e++)if(!this.coefficients[e].equals(t.coefficients[e]))return!1;return!0}copy(t){return this.set(t.coefficients)}clone(){return new this.constructor().copy(this)}fromArray(t,e=0){const a=this.coefficients;for(let i=0;i<9;i++)a[i].fromArray(t,e+i*3);return this}toArray(t=[],e=0){const a=this.coefficients;for(let i=0;i<9;i++)a[i].toArray(t,e+i*3);return t}static getBasisAt(t,e){const a=t.x,i=t.y,c=t.z;e[0]=.282095,e[1]=.488603*i,e[2]=.488603*c,e[3]=.488603*a,e[4]=1.092548*a*i,e[5]=1.092548*i*c,e[6]=.315392*(3*c*c-1),e[7]=1.092548*a*c,e[8]=.546274*(a*a-i*i)}}class Ts extends null{constructor(t=new Bs,e=1){super(void 0,e),this.isLightProbe=!0,this.sh=t}copy(t){return super.copy(t),this.sh.copy(t.sh),this}fromJSON(t){return this.intensity=t.intensity,this.sh.fromArray(t.sh),this}toJSON(t){const e=super.toJSON(t);return e.object.sh=this.sh.toArray(),e}}class Re extends null{constructor(t){super(t),this.textures={}}load(t,e,a,i){const c=this,r=new U0(c.manager);r.setPath(c.path),r.setRequestHeader(c.requestHeader),r.setWithCredentials(c.withCredentials),r.load(t,function(s){try{e(c.parse(JSON.parse(s)))}catch(l){i?i(l):console.error(l),c.manager.itemError(t)}},a,i)}parse(t){const e=this.textures;function a(c){return e[c]===void 0&&console.warn("THREE.MaterialLoader: Undefined texture",c),e[c]}const i=Re.createMaterialFromType(t.type);if(t.uuid!==void 0&&(i.uuid=t.uuid),t.name!==void 0&&(i.name=t.name),t.color!==void 0&&i.color!==void 0&&i.color.setHex(t.color),t.roughness!==void 0&&(i.roughness=t.roughness),t.metalness!==void 0&&(i.metalness=t.metalness),t.sheen!==void 0&&(i.sheen=t.sheen),t.sheenColor!==void 0&&(i.sheenColor=new D1().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(i.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&i.emissive!==void 0&&i.emissive.setHex(t.emissive),t.specular!==void 0&&i.specular!==void 0&&i.specular.setHex(t.specular),t.specularIntensity!==void 0&&(i.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&i.specularColor!==void 0&&i.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(i.shininess=t.shininess),t.clearcoat!==void 0&&(i.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=t.clearcoatRoughness),t.iridescence!==void 0&&(i.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(i.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(i.transmission=t.transmission),t.thickness!==void 0&&(i.thickness=t.thickness),t.attenuationDistance!==void 0&&(i.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&i.attenuationColor!==void 0&&i.attenuationColor.setHex(t.attenuationColor),t.fog!==void 0&&(i.fog=t.fog),t.flatShading!==void 0&&(i.flatShading=t.flatShading),t.blending!==void 0&&(i.blending=t.blending),t.combine!==void 0&&(i.combine=t.combine),t.side!==void 0&&(i.side=t.side),t.shadowSide!==void 0&&(i.shadowSide=t.shadowSide),t.opacity!==void 0&&(i.opacity=t.opacity),t.transparent!==void 0&&(i.transparent=t.transparent),t.alphaTest!==void 0&&(i.alphaTest=t.alphaTest),t.depthTest!==void 0&&(i.depthTest=t.depthTest),t.depthWrite!==void 0&&(i.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(i.colorWrite=t.colorWrite),t.stencilWrite!==void 0&&(i.stencilWrite=t.stencilWrite),t.stencilWriteMask!==void 0&&(i.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(i.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(i.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(i.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(i.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(i.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(i.stencilZPass=t.stencilZPass),t.wireframe!==void 0&&(i.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(i.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(i.rotation=t.rotation),t.linewidth!==1&&(i.linewidth=t.linewidth),t.dashSize!==void 0&&(i.dashSize=t.dashSize),t.gapSize!==void 0&&(i.gapSize=t.gapSize),t.scale!==void 0&&(i.scale=t.scale),t.polygonOffset!==void 0&&(i.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(i.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(i.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(i.dithering=t.dithering),t.alphaToCoverage!==void 0&&(i.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(i.premultipliedAlpha=t.premultipliedAlpha),t.visible!==void 0&&(i.visible=t.visible),t.toneMapped!==void 0&&(i.toneMapped=t.toneMapped),t.userData!==void 0&&(i.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?i.vertexColors=t.vertexColors>0:i.vertexColors=t.vertexColors),t.uniforms!==void 0)for(const c in t.uniforms){const r=t.uniforms[c];switch(i.uniforms[c]={},r.type){case"t":i.uniforms[c].value=a(r.value);break;case"c":i.uniforms[c].value=new D1().setHex(r.value);break;case"v2":i.uniforms[c].value=new c1().fromArray(r.value);break;case"v3":i.uniforms[c].value=new S().fromArray(r.value);break;case"v4":i.uniforms[c].value=new S1().fromArray(r.value);break;case"m3":i.uniforms[c].value=new q3().fromArray(r.value);break;case"m4":i.uniforms[c].value=new O2().fromArray(r.value);break;default:i.uniforms[c].value=r.value}}if(t.defines!==void 0&&(i.defines=t.defines),t.vertexShader!==void 0&&(i.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(i.fragmentShader=t.fragmentShader),t.extensions!==void 0)for(const c in t.extensions)i.extensions[c]=t.extensions[c];if(t.shading!==void 0&&(i.flatShading=t.shading===1),t.size!==void 0&&(i.size=t.size),t.sizeAttenuation!==void 0&&(i.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(i.map=a(t.map)),t.matcap!==void 0&&(i.matcap=a(t.matcap)),t.alphaMap!==void 0&&(i.alphaMap=a(t.alphaMap)),t.bumpMap!==void 0&&(i.bumpMap=a(t.bumpMap)),t.bumpScale!==void 0&&(i.bumpScale=t.bumpScale),t.normalMap!==void 0&&(i.normalMap=a(t.normalMap)),t.normalMapType!==void 0&&(i.normalMapType=t.normalMapType),t.normalScale!==void 0){let c=t.normalScale;Array.isArray(c)===!1&&(c=[c,c]),i.normalScale=new c1().fromArray(c)}return t.displacementMap!==void 0&&(i.displacementMap=a(t.displacementMap)),t.displacementScale!==void 0&&(i.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(i.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(i.roughnessMap=a(t.roughnessMap)),t.metalnessMap!==void 0&&(i.metalnessMap=a(t.metalnessMap)),t.emissiveMap!==void 0&&(i.emissiveMap=a(t.emissiveMap)),t.emissiveIntensity!==void 0&&(i.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(i.specularMap=a(t.specularMap)),t.specularIntensityMap!==void 0&&(i.specularIntensityMap=a(t.specularIntensityMap)),t.specularColorMap!==void 0&&(i.specularColorMap=a(t.specularColorMap)),t.envMap!==void 0&&(i.envMap=a(t.envMap)),t.envMapIntensity!==void 0&&(i.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(i.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(i.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(i.lightMap=a(t.lightMap)),t.lightMapIntensity!==void 0&&(i.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(i.aoMap=a(t.aoMap)),t.aoMapIntensity!==void 0&&(i.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(i.gradientMap=a(t.gradientMap)),t.clearcoatMap!==void 0&&(i.clearcoatMap=a(t.clearcoatMap)),t.clearcoatRoughnessMap!==void 0&&(i.clearcoatRoughnessMap=a(t.clearcoatRoughnessMap)),t.clearcoatNormalMap!==void 0&&(i.clearcoatNormalMap=a(t.clearcoatNormalMap)),t.clearcoatNormalScale!==void 0&&(i.clearcoatNormalScale=new c1().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(i.iridescenceMap=a(t.iridescenceMap)),t.iridescenceThicknessMap!==void 0&&(i.iridescenceThicknessMap=a(t.iridescenceThicknessMap)),t.transmissionMap!==void 0&&(i.transmissionMap=a(t.transmissionMap)),t.thicknessMap!==void 0&&(i.thicknessMap=a(t.thicknessMap)),t.sheenColorMap!==void 0&&(i.sheenColorMap=a(t.sheenColorMap)),t.sheenRoughnessMap!==void 0&&(i.sheenRoughnessMap=a(t.sheenRoughnessMap)),i}setTextures(t){return this.textures=t,this}static createMaterialFromType(t){const e={ShadowMaterial:is,SpriteMaterial:k7,RawShaderMaterial:cs,ShaderMaterial:N0,PointsMaterial:we,MeshPhysicalMaterial:ss,MeshStandardMaterial:rs,MeshPhongMaterial:os,MeshToonMaterial:ls,MeshNormalMaterial:hs,MeshLambertMaterial:us,MeshDepthMaterial:R7,MeshDistanceMaterial:P7,MeshBasicMaterial:K0,MeshMatcapMaterial:ds,LineDashedMaterial:fs,LineBasicMaterial:b6,Material:_t};return new e[t]}}class Bn{static decodeText(t){if(typeof TextDecoder<"u")return new TextDecoder().decode(t);let e="";for(let a=0,i=t.length;a<i;a++)e+=String.fromCharCode(t[a]);try{return decodeURIComponent(escape(e))}catch{return e}}static extractUrlBase(t){const e=t.lastIndexOf("/");return e===-1?"./":t.slice(0,e+1)}static resolveURL(t,e){return typeof t!="string"||t===""?"":(/^https?:\/\//i.test(e)&&/^\//.test(t)&&(e=e.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(t)||/^data:.*,.*$/i.test(t)||/^blob:.*$/i.test(t)?t:e+t)}}class Es extends null{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}clone(){return new this.constructor().copy(this)}toJSON(){const t=super.toJSON(this);return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}}class Gs extends null{constructor(t){super(t)}load(t,e,a,i){const c=this,r=new U0(c.manager);r.setPath(c.path),r.setRequestHeader(c.requestHeader),r.setWithCredentials(c.withCredentials),r.load(t,function(s){try{e(c.parse(JSON.parse(s)))}catch(l){i?i(l):console.error(l),c.manager.itemError(t)}},a,i)}parse(t){const e={},a={};function i(v,m){if(e[m]!==void 0)return e[m];const p=v.interleavedBuffers[m],x=c(v,p.buffer),z=X3(p.type,x),y=new O7(z,p.stride);return y.uuid=p.uuid,e[m]=y,y}function c(v,m){if(a[m]!==void 0)return a[m];const p=v.arrayBuffers[m],x=new Uint32Array(p).buffer;return a[m]=x,x}const r=t.isInstancedBufferGeometry?new Es:new Y2,s=t.data.index;if(s!==void 0){const v=X3(s.type,s.array);r.setIndex(new b3(v,1))}const l=t.data.attributes;for(const v in l){const m=l[v];let g;if(m.isInterleavedBufferAttribute){const p=i(t.data,m.data);g=new Tt(p,m.itemSize,m.offset,m.normalized)}else{const p=X3(m.type,m.array),x=m.isInstancedBufferAttribute?h8:b3;g=new x(p,m.itemSize,m.normalized)}m.name!==void 0&&(g.name=m.name),m.usage!==void 0&&g.setUsage(m.usage),m.updateRange!==void 0&&(g.updateRange.offset=m.updateRange.offset,g.updateRange.count=m.updateRange.count),r.setAttribute(v,g)}const h=t.data.morphAttributes;if(h)for(const v in h){const m=h[v],g=[];for(let p=0,x=m.length;p<x;p++){const z=m[p];let y;if(z.isInterleavedBufferAttribute){const M=i(t.data,z.data);y=new Tt(M,z.itemSize,z.offset,z.normalized)}else{const M=X3(z.type,z.array);y=new b3(M,z.itemSize,z.normalized)}z.name!==void 0&&(y.name=z.name),g.push(y)}r.morphAttributes[v]=g}t.data.morphTargetsRelative&&(r.morphTargetsRelative=!0);const d=t.data.groups||t.data.drawcalls||t.data.offsets;if(d!==void 0)for(let v=0,m=d.length;v!==m;++v){const g=d[v];r.addGroup(g.start,g.count,g.materialIndex)}const f=t.data.boundingSphere;if(f!==void 0){const v=new S;f.center!==void 0&&v.fromArray(f.center),r.boundingSphere=new xt(v,f.radius)}return t.name&&(r.name=t.name),t.userData&&(r.userData=t.userData),r}}class cl extends null{constructor(t){super(t)}load(t,e,a,i){const c=this,r=this.path===""?Bn.extractUrlBase(t):this.path;this.resourcePath=this.resourcePath||r;const s=new U0(this.manager);s.setPath(this.path),s.setRequestHeader(this.requestHeader),s.setWithCredentials(this.withCredentials),s.load(t,function(l){let h=null;try{h=JSON.parse(l)}catch(d){i!==void 0&&i(d),console.error("THREE:ObjectLoader: Can't parse "+t+".",d.message);return}const u=h.metadata;if(u===void 0||u.type===void 0||u.type.toLowerCase()==="geometry"){console.error("THREE.ObjectLoader: Can't load "+t);return}c.parse(h,e)},a,i)}async loadAsync(t,e){const a=this,i=this.path===""?Bn.extractUrlBase(t):this.path;this.resourcePath=this.resourcePath||i;const c=new U0(this.manager);c.setPath(this.path),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials);const r=await c.loadAsync(t,e),s=JSON.parse(r),l=s.metadata;if(l===void 0||l.type===void 0||l.type.toLowerCase()==="geometry")throw new Error("THREE.ObjectLoader: Can't load "+t);return await a.parseAsync(s)}parse(t,e){const a=this.parseAnimations(t.animations),i=this.parseShapes(t.shapes),c=this.parseGeometries(t.geometries,i),r=this.parseImages(t.images,function(){e!==void 0&&e(h)}),s=this.parseTextures(t.textures,r),l=this.parseMaterials(t.materials,s),h=this.parseObject(t.object,c,l,s,a),u=this.parseSkeletons(t.skeletons,h);if(this.bindSkeletons(h,u),e!==void 0){let d=!1;for(const f in r)if(r[f].data instanceof HTMLImageElement){d=!0;break}d===!1&&e(h)}return h}async parseAsync(t){const e=this.parseAnimations(t.animations),a=this.parseShapes(t.shapes),i=this.parseGeometries(t.geometries,a),c=await this.parseImagesAsync(t.images),r=this.parseTextures(t.textures,c),s=this.parseMaterials(t.materials,r),l=this.parseObject(t.object,i,s,r,e),h=this.parseSkeletons(t.skeletons,l);return this.bindSkeletons(l,h),l}parseShapes(t){const e={};if(t!==void 0)for(let a=0,i=t.length;a<i;a++){const c=new Nt().fromJSON(t[a]);e[c.uuid]=c}return e}parseSkeletons(t,e){const a={},i={};if(e.traverse(function(c){c.isBone&&(i[c.uuid]=c)}),t!==void 0)for(let c=0,r=t.length;c<r;c++){const s=new xe().fromJSON(t[c],i);a[s.uuid]=s}return a}parseGeometries(t,e){const a={};if(t!==void 0){const i=new Gs;for(let c=0,r=t.length;c<r;c++){let s;const l=t[c];switch(l.type){case"BufferGeometry":case"InstancedBufferGeometry":s=i.parse(l);break;case"Geometry":console.error("THREE.ObjectLoader: The legacy Geometry type is no longer supported.");break;default:l.type in Cn?s=Cn[l.type].fromJSON(l,e):console.warn(`THREE.ObjectLoader: Unsupported geometry type "${l.type}"`)}s.uuid=l.uuid,l.name!==void 0&&(s.name=l.name),s.isBufferGeometry===!0&&l.userData!==void 0&&(s.userData=l.userData),a[l.uuid]=s}}return a}parseMaterials(t,e){const a={},i={};if(t!==void 0){const c=new Re;c.setTextures(e);for(let r=0,s=t.length;r<s;r++){const l=t[r];if(l.type==="MultiMaterial"){const h=[];for(let u=0;u<l.materials.length;u++){const d=l.materials[u];a[d.uuid]===void 0&&(a[d.uuid]=c.parse(d)),h.push(a[d.uuid])}i[l.uuid]=h}else a[l.uuid]===void 0&&(a[l.uuid]=c.parse(l)),i[l.uuid]=a[l.uuid]}}return i}parseAnimations(t){const e={};if(t!==void 0)for(let a=0;a<t.length;a++){const i=t[a],c=H5.parse(i);e[c.uuid]=c}return e}parseImages(t,e){const a=this,i={};let c;function r(l){return a.manager.itemStart(l),c.load(l,function(){a.manager.itemEnd(l)},void 0,function(){a.manager.itemError(l),a.manager.itemEnd(l)})}function s(l){if(typeof l=="string"){const h=l,u=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(h)?h:a.resourcePath+h;return r(u)}else return l.data?{data:X3(l.type,l.data),width:l.width,height:l.height}:null}if(t!==void 0&&t.length>0){const l=new Ln(e);c=new I5(l),c.setCrossOrigin(this.crossOrigin);for(let h=0,u=t.length;h<u;h++){const d=t[h],f=d.url;if(Array.isArray(f)){const v=[];for(let m=0,g=f.length;m<g;m++){const p=f[m],x=s(p);x!==null&&(x instanceof HTMLImageElement?v.push(x):v.push(new l8(x.data,x.width,x.height)))}i[d.uuid]=new V0(v)}else{const v=s(d.url);i[d.uuid]=new V0(v)}}}return i}async parseImagesAsync(t){const e=this,a={};let i;async function c(r){if(typeof r=="string"){const s=r,l=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(s)?s:e.resourcePath+s;return await i.loadAsync(l)}else return r.data?{data:X3(r.type,r.data),width:r.width,height:r.height}:null}if(t!==void 0&&t.length>0){i=new I5(this.manager),i.setCrossOrigin(this.crossOrigin);for(let r=0,s=t.length;r<s;r++){const l=t[r],h=l.url;if(Array.isArray(h)){const u=[];for(let d=0,f=h.length;d<f;d++){const v=h[d],m=await c(v);m!==null&&(m instanceof HTMLImageElement?u.push(m):u.push(new l8(m.data,m.width,m.height)))}a[l.uuid]=new V0(u)}else{const u=await c(l.url);a[l.uuid]=new V0(u)}}}return a}parseTextures(t,e){function a(c,r){return typeof c=="number"?c:(console.warn("THREE.ObjectLoader.parseTexture: Constant should be in numeric form.",c),r[c])}const i={};if(t!==void 0)for(let c=0,r=t.length;c<r;c++){const s=t[c];s.image===void 0&&console.warn('THREE.ObjectLoader: No "image" specified for',s.uuid),e[s.image]===void 0&&console.warn("THREE.ObjectLoader: Undefined image",s.image);const l=e[s.image],h=l.data;let u;Array.isArray(h)?(u=new W8,h.length===6&&(u.needsUpdate=!0)):(h&&h.data?u=new l8:u=new I2,h&&(u.needsUpdate=!0)),u.source=l,u.uuid=s.uuid,s.name!==void 0&&(u.name=s.name),s.mapping!==void 0&&(u.mapping=a(s.mapping,Rs)),s.offset!==void 0&&u.offset.fromArray(s.offset),s.repeat!==void 0&&u.repeat.fromArray(s.repeat),s.center!==void 0&&u.center.fromArray(s.center),s.rotation!==void 0&&(u.rotation=s.rotation),s.wrap!==void 0&&(u.wrapS=a(s.wrap[0],Tn),u.wrapT=a(s.wrap[1],Tn)),s.format!==void 0&&(u.format=s.format),s.type!==void 0&&(u.type=s.type),s.encoding!==void 0&&(u.encoding=s.encoding),s.minFilter!==void 0&&(u.minFilter=a(s.minFilter,En)),s.magFilter!==void 0&&(u.magFilter=a(s.magFilter,En)),s.anisotropy!==void 0&&(u.anisotropy=s.anisotropy),s.flipY!==void 0&&(u.flipY=s.flipY),s.premultiplyAlpha!==void 0&&(u.premultiplyAlpha=s.premultiplyAlpha),s.unpackAlignment!==void 0&&(u.unpackAlignment=s.unpackAlignment),s.userData!==void 0&&(u.userData=s.userData),i[s.uuid]=u}return i}parseObject(t,e,a,i,c){let r;function s(f){return e[f]===void 0&&console.warn("THREE.ObjectLoader: Undefined geometry",f),e[f]}function l(f){if(f!==void 0){if(Array.isArray(f)){const v=[];for(let m=0,g=f.length;m<g;m++){const p=f[m];a[p]===void 0&&console.warn("THREE.ObjectLoader: Undefined material",p),v.push(a[p])}return v}return a[f]===void 0&&console.warn("THREE.ObjectLoader: Undefined material",f),a[f]}}function h(f){return i[f]===void 0&&console.warn("THREE.ObjectLoader: Undefined texture",f),i[f]}let u,d;switch(t.type){case"Scene":r=new N7,t.background!==void 0&&(Number.isInteger(t.background)?r.background=new D1(t.background):r.background=h(t.background)),t.environment!==void 0&&(r.environment=h(t.environment)),t.fog!==void 0&&(t.fog.type==="Fog"?r.fog=new me(t.fog.color,t.fog.near,t.fog.far):t.fog.type==="FogExp2"&&(r.fog=new pe(t.fog.color,t.fog.density)));break;case"PerspectiveCamera":r=new R3(t.fov,t.aspect,t.near,t.far),t.focus!==void 0&&(r.focus=t.focus),t.zoom!==void 0&&(r.zoom=t.zoom),t.filmGauge!==void 0&&(r.filmGauge=t.filmGauge),t.filmOffset!==void 0&&(r.filmOffset=t.filmOffset),t.view!==void 0&&(r.view=Object.assign({},t.view));break;case"OrthographicCamera":r=new oe(t.left,t.right,t.top,t.bottom,t.near,t.far),t.zoom!==void 0&&(r.zoom=t.zoom),t.view!==void 0&&(r.view=Object.assign({},t.view));break;case"AmbientLight":r=new Vs(t.color,t.intensity);break;case"DirectionalLight":r=new As(t.color,t.intensity);break;case"PointLight":r=new Hs(t.color,t.intensity,t.distance,t.decay);break;case"RectAreaLight":r=new Fs(t.color,t.intensity,t.width,t.height);break;case"SpotLight":r=new bs(t.color,t.intensity,t.distance,t.angle,t.penumbra,t.decay);break;case"HemisphereLight":r=new _s(t.color,t.groundColor,t.intensity);break;case"LightProbe":r=new Ts().fromJSON(t);break;case"SkinnedMesh":u=s(t.geometry),d=l(t.material),r=new xr(u,d),t.bindMode!==void 0&&(r.bindMode=t.bindMode),t.bindMatrix!==void 0&&r.bindMatrix.fromArray(t.bindMatrix),t.skeleton!==void 0&&(r.skeleton=t.skeleton);break;case"Mesh":u=s(t.geometry),d=l(t.material),r=new S6(u,d);break;case"InstancedMesh":u=s(t.geometry),d=l(t.material);const f=t.count,v=t.instanceMatrix,m=t.instanceColor;r=new wr(u,d,f),r.instanceMatrix=new h8(new Float32Array(v.array),16),m!==void 0&&(r.instanceColor=new h8(new Float32Array(m.array),m.itemSize));break;case"LOD":r=new mr;break;case"Line":r=new n5(s(t.geometry),l(t.material));break;case"LineLoop":r=new yr(s(t.geometry),l(t.material));break;case"LineSegments":r=new sn(s(t.geometry),l(t.material));break;case"PointCloud":case"Points":r=new ln(s(t.geometry),l(t.material));break;case"Sprite":r=new pr(l(t.material));break;case"Group":r=new c8;break;case"Bone":r=new J7;break;default:r=new A3}if(r.uuid=t.uuid,t.name!==void 0&&(r.name=t.name),t.matrix!==void 0?(r.matrix.fromArray(t.matrix),t.matrixAutoUpdate!==void 0&&(r.matrixAutoUpdate=t.matrixAutoUpdate),r.matrixAutoUpdate&&r.matrix.decompose(r.position,r.quaternion,r.scale)):(t.position!==void 0&&r.position.fromArray(t.position),t.rotation!==void 0&&r.rotation.fromArray(t.rotation),t.quaternion!==void 0&&r.quaternion.fromArray(t.quaternion),t.scale!==void 0&&r.scale.fromArray(t.scale)),t.castShadow!==void 0&&(r.castShadow=t.castShadow),t.receiveShadow!==void 0&&(r.receiveShadow=t.receiveShadow),t.shadow&&(t.shadow.bias!==void 0&&(r.shadow.bias=t.shadow.bias),t.shadow.normalBias!==void 0&&(r.shadow.normalBias=t.shadow.normalBias),t.shadow.radius!==void 0&&(r.shadow.radius=t.shadow.radius),t.shadow.mapSize!==void 0&&r.shadow.mapSize.fromArray(t.shadow.mapSize),t.shadow.camera!==void 0&&(r.shadow.camera=this.parseObject(t.shadow.camera))),t.visible!==void 0&&(r.visible=t.visible),t.frustumCulled!==void 0&&(r.frustumCulled=t.frustumCulled),t.renderOrder!==void 0&&(r.renderOrder=t.renderOrder),t.userData!==void 0&&(r.userData=t.userData),t.layers!==void 0&&(r.layers.mask=t.layers),t.children!==void 0){const f=t.children;for(let v=0;v<f.length;v++)r.add(this.parseObject(f[v],e,a,i,c))}if(t.animations!==void 0){const f=t.animations;for(let v=0;v<f.length;v++){const m=f[v];r.animations.push(c[m])}}if(t.type==="LOD"){t.autoUpdate!==void 0&&(r.autoUpdate=t.autoUpdate);const f=t.levels;for(let v=0;v<f.length;v++){const m=f[v],g=r.getObjectByProperty("uuid",m.object);g!==void 0&&r.addLevel(g,m.distance)}}return r}bindSkeletons(t,e){Object.keys(e).length!==0&&t.traverse(function(a){if(a.isSkinnedMesh===!0&&a.skeleton!==void 0){const i=e[a.skeleton];i===void 0?console.warn("THREE.ObjectLoader: No skeleton found with UUID:",a.skeleton):a.bind(i,a.bindMatrix)}})}}const Rs={UVMapping:H3,CubeReflectionMapping:T3,CubeRefractionMapping:q,EquirectangularReflectionMapping:f1,EquirectangularRefractionMapping:l1,CubeUVReflectionMapping:n2},Tn={RepeatWrapping:r2,ClampToEdgeWrapping:s2,MirroredRepeatWrapping:P2},En={NearestFilter:h2,NearestMipmapNearestFilter:K2,NearestMipmapLinearFilter:Q2,LinearFilter:u2,LinearMipmapNearestFilter:l3,LinearMipmapLinearFilter:k1};class rl extends null{constructor(t){super(t),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(t){return this.options=t,this}load(t,e,a,i){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const c=this,r=Zt.get(t);if(r!==void 0)return c.manager.itemStart(t),setTimeout(function(){e&&e(r),c.manager.itemEnd(t)},0),r;const s={};s.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",s.headers=this.requestHeader,fetch(t,s).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(c.options,{colorSpaceConversion:"none"}))}).then(function(l){Zt.add(t,l),e&&e(l),c.manager.itemEnd(t)}).catch(function(l){i&&i(l),c.manager.itemError(t),c.manager.itemEnd(t)}),c.manager.itemStart(t)}}let A5;const Gn={getContext:function(){return A5===void 0&&(A5=new(window.AudioContext||window.webkitAudioContext)),A5},setContext:function(o){A5=o}};class sl extends null{constructor(t){super(t)}load(t,e,a,i){const c=this,r=new U0(this.manager);r.setResponseType("arraybuffer"),r.setPath(this.path),r.setRequestHeader(this.requestHeader),r.setWithCredentials(this.withCredentials),r.load(t,function(s){try{const l=s.slice(0);Gn.getContext().decodeAudioData(l,function(u){e(u)})}catch(l){i?i(l):console.error(l),c.manager.itemError(t)}},a,i)}}class ol extends null{constructor(t,e,a=1){super(void 0,a),this.isHemisphereLightProbe=!0;const i=new D1().set(t),c=new D1().set(e),r=new S(i.r,i.g,i.b),s=new S(c.r,c.g,c.b),l=Math.sqrt(Math.PI),h=l*Math.sqrt(.75);this.sh.coefficients[0].copy(r).add(s).multiplyScalar(l),this.sh.coefficients[1].copy(r).sub(s).multiplyScalar(h)}}class ll extends null{constructor(t,e=1){super(void 0,e),this.isAmbientLightProbe=!0;const a=new D1().set(t);this.sh.coefficients[0].set(a.r,a.g,a.b).multiplyScalar(2*Math.sqrt(Math.PI))}}const Rn=new O2,Pn=new O2,it=new O2;class hl{constructor(){this.type="StereoCamera",this.aspect=1,this.eyeSep=.064,this.cameraL=new R3,this.cameraL.layers.enable(1),this.cameraL.matrixAutoUpdate=!1,this.cameraR=new R3,this.cameraR.layers.enable(2),this.cameraR.matrixAutoUpdate=!1,this._cache={focus:null,fov:null,aspect:null,near:null,far:null,zoom:null,eyeSep:null}}update(t){const e=this._cache;if(e.focus!==t.focus||e.fov!==t.fov||e.aspect!==t.aspect*this.aspect||e.near!==t.near||e.far!==t.far||e.zoom!==t.zoom||e.eyeSep!==this.eyeSep){e.focus=t.focus,e.fov=t.fov,e.aspect=t.aspect*this.aspect,e.near=t.near,e.far=t.far,e.zoom=t.zoom,e.eyeSep=this.eyeSep,it.copy(t.projectionMatrix);const i=e.eyeSep/2,c=i*e.near/e.focus,r=e.near*Math.tan(Y6*e.fov*.5)/e.zoom;let s,l;Pn.elements[12]=-i,Rn.elements[12]=i,s=-r*e.aspect+c,l=r*e.aspect+c,it.elements[0]=2*e.near/(l-s),it.elements[8]=(l+s)/(l-s),this.cameraL.projectionMatrix.copy(it),s=-r*e.aspect-c,l=r*e.aspect-c,it.elements[0]=2*e.near/(l-s),it.elements[8]=(l+s)/(l-s),this.cameraR.projectionMatrix.copy(it)}this.cameraL.matrixWorld.copy(t.matrixWorld).multiply(Pn),this.cameraR.matrixWorld.copy(t.matrixWorld).multiply(Rn)}}class Dn{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Nn(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=Nn();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function Nn(){return(typeof performance>"u"?Date:performance).now()}const ct=new S,On=new h6,Ps=new S,rt=new S;class ul extends null{constructor(){super(),this.type="AudioListener",this.context=Gn.getContext(),this.gain=this.context.createGain(),this.gain.connect(this.context.destination),this.filter=null,this.timeDelta=0,this._clock=new Dn}getInput(){return this.gain}removeFilter(){return this.filter!==null&&(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination),this.gain.connect(this.context.destination),this.filter=null),this}getFilter(){return this.filter}setFilter(t){return this.filter!==null?(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination)):this.gain.disconnect(this.context.destination),this.filter=t,this.gain.connect(this.filter),this.filter.connect(this.context.destination),this}getMasterVolume(){return this.gain.gain.value}setMasterVolume(t){return this.gain.gain.setTargetAtTime(t,this.context.currentTime,.01),this}updateMatrixWorld(t){super.updateMatrixWorld(t);const e=this.context.listener,a=this.up;if(this.timeDelta=this._clock.getDelta(),this.matrixWorld.decompose(ct,On,Ps),rt.set(0,0,-1).applyQuaternion(On),e.positionX){const i=this.context.currentTime+this.timeDelta;e.positionX.linearRampToValueAtTime(ct.x,i),e.positionY.linearRampToValueAtTime(ct.y,i),e.positionZ.linearRampToValueAtTime(ct.z,i),e.forwardX.linearRampToValueAtTime(rt.x,i),e.forwardY.linearRampToValueAtTime(rt.y,i),e.forwardZ.linearRampToValueAtTime(rt.z,i),e.upX.linearRampToValueAtTime(a.x,i),e.upY.linearRampToValueAtTime(a.y,i),e.upZ.linearRampToValueAtTime(a.z,i)}else e.setPosition(ct.x,ct.y,ct.z),e.setOrientation(rt.x,rt.y,rt.z,a.x,a.y,a.z)}}class dl extends null{constructor(t){super(),this.type="Audio",this.listener=t,this.context=t.context,this.gain=this.context.createGain(),this.gain.connect(t.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(t){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=t,this.connect(),this}setMediaElementSource(t){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(t),this.connect(),this}setMediaStreamSource(t){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(t),this.connect(),this}setBuffer(t){return this.buffer=t,this.sourceType="buffer",this.autoplay&&this.play(),this}play(t=0){if(this.isPlaying===!0){console.warn("THREE.Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+t;const e=this.context.createBufferSource();return e.buffer=this.buffer,e.loop=this.loop,e.loopStart=this.loopStart,e.loopEnd=this.loopEnd,e.onended=this.onEnded.bind(this),e.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=e,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this}stop(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this._progress=0,this.source.stop(),this.source.onended=null,this.isPlaying=!1,this}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let t=1,e=this.filters.length;t<e;t++)this.filters[t-1].connect(this.filters[t]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let t=1,e=this.filters.length;t<e;t++)this.filters[t-1].disconnect(this.filters[t]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}getFilters(){return this.filters}setFilters(t){return t||(t=[]),this._connected===!0?(this.disconnect(),this.filters=t.slice(),this.connect()):this.filters=t.slice(),this}setDetune(t){if(this.detune=t,this.source.detune!==void 0)return this.isPlaying===!0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(t){return this.setFilters(t?[t]:[])}setPlaybackRate(t){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.playbackRate=t,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1}getLoop(){return this.hasPlaybackControl===!1?(console.warn("THREE.Audio: this Audio has no playback control."),!1):this.loop}setLoop(t){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.loop=t,this.isPlaying===!0&&(this.source.loop=this.loop),this}setLoopStart(t){return this.loopStart=t,this}setLoopEnd(t){return this.loopEnd=t,this}getVolume(){return this.gain.gain.value}setVolume(t){return this.gain.gain.setTargetAtTime(t,this.context.currentTime,.01),this}}const st=new S,kn=new h6,Ds=new S,ot=new S;class fl extends null{constructor(t){super(t),this.panner=this.context.createPanner(),this.panner.panningModel="HRTF",this.panner.connect(this.gain)}disconnect(){super.disconnect(),this.panner.disconnect(this.gain)}getOutput(){return this.panner}getRefDistance(){return this.panner.refDistance}setRefDistance(t){return this.panner.refDistance=t,this}getRolloffFactor(){return this.panner.rolloffFactor}setRolloffFactor(t){return this.panner.rolloffFactor=t,this}getDistanceModel(){return this.panner.distanceModel}setDistanceModel(t){return this.panner.distanceModel=t,this}getMaxDistance(){return this.panner.maxDistance}setMaxDistance(t){return this.panner.maxDistance=t,this}setDirectionalCone(t,e,a){return this.panner.coneInnerAngle=t,this.panner.coneOuterAngle=e,this.panner.coneOuterGain=a,this}updateMatrixWorld(t){if(super.updateMatrixWorld(t),this.hasPlaybackControl===!0&&this.isPlaying===!1)return;this.matrixWorld.decompose(st,kn,Ds),ot.set(0,0,1).applyQuaternion(kn);const e=this.panner;if(e.positionX){const a=this.context.currentTime+this.listener.timeDelta;e.positionX.linearRampToValueAtTime(st.x,a),e.positionY.linearRampToValueAtTime(st.y,a),e.positionZ.linearRampToValueAtTime(st.z,a),e.orientationX.linearRampToValueAtTime(ot.x,a),e.orientationY.linearRampToValueAtTime(ot.y,a),e.orientationZ.linearRampToValueAtTime(ot.z,a)}else e.setPosition(st.x,st.y,st.z),e.setOrientation(ot.x,ot.y,ot.z)}}class vl{constructor(t,e=2048){this.analyser=t.context.createAnalyser(),this.analyser.fftSize=e,this.data=new Uint8Array(this.analyser.frequencyBinCount),t.getOutput().connect(this.analyser)}getFrequencyData(){return this.analyser.getByteFrequencyData(this.data),this.data}getAverageFrequency(){let t=0;const e=this.getFrequencyData();for(let a=0;a<e.length;a++)t+=e[a];return t/e.length}}class Ns{constructor(t,e,a){this.binding=t,this.valueSize=a;let i,c,r;switch(e){case"quaternion":i=this._slerp,c=this._slerpAdditive,r=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(a*6),this._workIndex=5;break;case"string":case"bool":i=this._select,c=this._select,r=this._setAdditiveIdentityOther,this.buffer=new Array(a*5);break;default:i=this._lerp,c=this._lerpAdditive,r=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(a*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=c,this._setIdentity=r,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(t,e){const a=this.buffer,i=this.valueSize,c=t*i+i;let r=this.cumulativeWeight;if(r===0){for(let s=0;s!==i;++s)a[c+s]=a[s];r=e}else{r+=e;const s=e/r;this._mixBufferRegion(a,c,0,s,i)}this.cumulativeWeight=r}accumulateAdditive(t){const e=this.buffer,a=this.valueSize,i=a*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(e,i,0,t,a),this.cumulativeWeightAdditive+=t}apply(t){const e=this.valueSize,a=this.buffer,i=t*e+e,c=this.cumulativeWeight,r=this.cumulativeWeightAdditive,s=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,c<1){const l=e*this._origIndex;this._mixBufferRegion(a,i,l,1-c,e)}r>0&&this._mixBufferRegionAdditive(a,i,this._addIndex*e,1,e);for(let l=e,h=e+e;l!==h;++l)if(a[l]!==a[l+e]){s.setValue(a,i);break}}saveOriginalState(){const t=this.binding,e=this.buffer,a=this.valueSize,i=a*this._origIndex;t.getValue(e,i);for(let c=a,r=i;c!==r;++c)e[c]=e[i+c%a];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const t=this.valueSize*3;this.binding.setValue(this.buffer,t)}_setAdditiveIdentityNumeric(){const t=this._addIndex*this.valueSize,e=t+this.valueSize;for(let a=t;a<e;a++)this.buffer[a]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const t=this._origIndex*this.valueSize,e=this._addIndex*this.valueSize;for(let a=0;a<this.valueSize;a++)this.buffer[e+a]=this.buffer[t+a]}_select(t,e,a,i,c){if(i>=.5)for(let r=0;r!==c;++r)t[e+r]=t[a+r]}_slerp(t,e,a,i){h6.slerpFlat(t,e,t,e,t,a,i)}_slerpAdditive(t,e,a,i,c){const r=this._workIndex*c;h6.multiplyQuaternionsFlat(t,r,t,e,t,a),h6.slerpFlat(t,e,t,e,t,r,i)}_lerp(t,e,a,i,c){const r=1-i;for(let s=0;s!==c;++s){const l=e+s;t[l]=t[l]*r+t[a+s]*i}}_lerpAdditive(t,e,a,i,c){for(let r=0;r!==c;++r){const s=e+r;t[s]=t[s]+t[a+r]*i}}}const Pe="\\[\\]\\.:\\/",Os=new RegExp("["+Pe+"]","g"),De="[^"+Pe+"]",ks="[^"+Pe.replace("\\.","")+"]",Us=/((?:WC+[\/:])*)/.source.replace("WC",De),Zs=/(WCOD+)?/.source.replace("WCOD",ks),Ws=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",De),qs=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",De),Xs=new RegExp("^"+Us+Zs+Ws+qs+"$"),$s=["material","materials","bones"];class Ys{constructor(t,e,a){const i=a||g4.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();const a=this._targetGroup.nCachedObjects_,i=this._bindings[a];i!==void 0&&i.getValue(t,e)}setValue(t,e){const a=this._bindings;for(let i=this._targetGroup.nCachedObjects_,c=a.length;i!==c;++i)a[i].setValue(t,e)}bind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,a=t.length;e!==a;++e)t[e].bind()}unbind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,a=t.length;e!==a;++e)t[e].unbind()}}class g4{constructor(t,e,a){this.path=e,this.parsedPath=a||g4.parseTrackName(e),this.node=g4.findNode(t,this.parsedPath.nodeName)||t,this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,a){return t&&t.isAnimationObjectGroup?new g4.Composite(t,e,a):new g4(t,e,a)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Os,"")}static parseTrackName(t){const e=Xs.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);const a={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=a.nodeName&&a.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const c=a.nodeName.substring(i+1);$s.indexOf(c)!==-1&&(a.nodeName=a.nodeName.substring(0,i),a.objectName=c)}if(a.propertyName===null||a.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return a}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){const a=t.skeleton.getBoneByName(e);if(a!==void 0)return a}if(t.children){const a=function(c){for(let r=0;r<c.length;r++){const s=c[r];if(s.name===e||s.uuid===e)return s;const l=a(s.children);if(l)return l}return null},i=a(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){const a=this.resolvedProperty;for(let i=0,c=a.length;i!==c;++i)t[e++]=a[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){const a=this.resolvedProperty;for(let i=0,c=a.length;i!==c;++i)a[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){const a=this.resolvedProperty;for(let i=0,c=a.length;i!==c;++i)a[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){const a=this.resolvedProperty;for(let i=0,c=a.length;i!==c;++i)a[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node;const e=this.parsedPath,a=e.objectName,i=e.propertyName;let c=e.propertyIndex;if(t||(t=g4.findNode(this.rootNode,e.nodeName)||this.rootNode,this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.error("THREE.PropertyBinding: Trying to update node for track: "+this.path+" but it wasn't found.");return}if(a){let h=e.objectIndex;switch(a){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===h){h=u;break}break;default:if(t[a]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[a]}if(h!==void 0){if(t[h]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[h]}}const r=t[i];if(r===void 0){const h=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+h+"."+i+" but it wasn't found.",t);return}let s=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?s=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(s=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(c!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[c]!==void 0&&(c=t.morphTargetDictionary[c])}l=this.BindingType.ArrayElement,this.resolvedProperty=r,this.propertyIndex=c}else r.fromArray!==void 0&&r.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=r):Array.isArray(r)?(l=this.BindingType.EntireArray,this.resolvedProperty=r):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][s]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}g4.Composite=Ys,g4.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},g4.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},g4.prototype.GetterByBindingType=[g4.prototype._getValue_direct,g4.prototype._getValue_array,g4.prototype._getValue_arrayElement,g4.prototype._getValue_toArray],g4.prototype.SetterByBindingTypeAndVersioning=[[g4.prototype._setValue_direct,g4.prototype._setValue_direct_setNeedsUpdate,g4.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[g4.prototype._setValue_array,g4.prototype._setValue_array_setNeedsUpdate,g4.prototype._setValue_array_setMatrixWorldNeedsUpdate],[g4.prototype._setValue_arrayElement,g4.prototype._setValue_arrayElement_setNeedsUpdate,g4.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[g4.prototype._setValue_fromArray,g4.prototype._setValue_fromArray_setNeedsUpdate,g4.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class gl{constructor(){this.isAnimationObjectGroup=!0,this.uuid=H4(),this._objects=Array.prototype.slice.call(arguments),this.nCachedObjects_=0;const t={};this._indicesByUUID=t;for(let a=0,i=arguments.length;a!==i;++a)t[arguments[a].uuid]=a;this._paths=[],this._parsedPaths=[],this._bindings=[],this._bindingsIndicesByPath={};const e=this;this.stats={objects:{get total(){return e._objects.length},get inUse(){return this.total-e.nCachedObjects_}},get bindingsPerObject(){return e._bindings.length}}}add(){const t=this._objects,e=this._indicesByUUID,a=this._paths,i=this._parsedPaths,c=this._bindings,r=c.length;let s,l=t.length,h=this.nCachedObjects_;for(let u=0,d=arguments.length;u!==d;++u){const f=arguments[u],v=f.uuid;let m=e[v];if(m===void 0){m=l++,e[v]=m,t.push(f);for(let g=0,p=r;g!==p;++g)c[g].push(new g4(f,a[g],i[g]))}else if(m<h){s=t[m];const g=--h,p=t[g];e[p.uuid]=m,t[m]=p,e[v]=g,t[g]=f;for(let x=0,z=r;x!==z;++x){const y=c[x],M=y[g];let C=y[m];y[m]=M,C===void 0&&(C=new g4(f,a[x],i[x])),y[g]=C}}else t[m]!==s&&console.error("THREE.AnimationObjectGroup: Different objects with the same UUID detected. Clean the caches or recreate your infrastructure when reloading scenes.")}this.nCachedObjects_=h}remove(){const t=this._objects,e=this._indicesByUUID,a=this._bindings,i=a.length;let c=this.nCachedObjects_;for(let r=0,s=arguments.length;r!==s;++r){const l=arguments[r],h=l.uuid,u=e[h];if(u!==void 0&&u>=c){const d=c++,f=t[d];e[f.uuid]=u,t[u]=f,e[h]=d,t[d]=l;for(let v=0,m=i;v!==m;++v){const g=a[v],p=g[d],x=g[u];g[u]=p,g[d]=x}}}this.nCachedObjects_=c}uncache(){const t=this._objects,e=this._indicesByUUID,a=this._bindings,i=a.length;let c=this.nCachedObjects_,r=t.length;for(let s=0,l=arguments.length;s!==l;++s){const h=arguments[s],u=h.uuid,d=e[u];if(d!==void 0)if(delete e[u],d<c){const f=--c,v=t[f],m=--r,g=t[m];e[v.uuid]=d,t[d]=v,e[g.uuid]=f,t[f]=g,t.pop();for(let p=0,x=i;p!==x;++p){const z=a[p],y=z[f],M=z[m];z[d]=y,z[f]=M,z.pop()}}else{const f=--r,v=t[f];f>0&&(e[v.uuid]=d),t[d]=v,t.pop();for(let m=0,g=i;m!==g;++m){const p=a[m];p[d]=p[f],p.pop()}}}this.nCachedObjects_=c}subscribe_(t,e){const a=this._bindingsIndicesByPath;let i=a[t];const c=this._bindings;if(i!==void 0)return c[i];const r=this._paths,s=this._parsedPaths,l=this._objects,h=l.length,u=this.nCachedObjects_,d=new Array(h);i=c.length,a[t]=i,r.push(t),s.push(e),c.push(d);for(let f=u,v=l.length;f!==v;++f){const m=l[f];d[f]=new g4(m,t,e)}return d}unsubscribe_(t){const e=this._bindingsIndicesByPath,a=e[t];if(a!==void 0){const i=this._paths,c=this._parsedPaths,r=this._bindings,s=r.length-1,l=r[s],h=t[s];e[h]=a,r[a]=l,r.pop(),c[a]=c[s],c.pop(),i[a]=i[s],i.pop()}}}class js{constructor(t,e,a=null,i=e.blendMode){this._mixer=t,this._clip=e,this._localRoot=a,this.blendMode=i;const c=e.tracks,r=c.length,s=new Array(r),l={endingStart:z6,endingEnd:z6};for(let h=0;h!==r;++h){const u=c[h].createInterpolant(null);s[h]=u,u.settings=l}this._interpolantSettings=l,this._interpolants=s,this._propertyBindings=new Array(r),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=c0,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(t){return this._startTime=t,this}setLoop(t,e){return this.loop=t,this.repetitions=e,this}setEffectiveWeight(t){return this.weight=t,this._effectiveWeight=this.enabled?t:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(t){return this._scheduleFading(t,0,1)}fadeOut(t){return this._scheduleFading(t,1,0)}crossFadeFrom(t,e,a){if(t.fadeOut(e),this.fadeIn(e),a){const i=this._clip.duration,c=t._clip.duration,r=c/i,s=i/c;t.warp(1,r,e),this.warp(s,1,e)}return this}crossFadeTo(t,e,a){return t.crossFadeFrom(this,e,a)}stopFading(){const t=this._weightInterpolant;return t!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(t)),this}setEffectiveTimeScale(t){return this.timeScale=t,this._effectiveTimeScale=this.paused?0:t,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(t){return this.timeScale=this._clip.duration/t,this.stopWarping()}syncWith(t){return this.time=t.time,this.timeScale=t.timeScale,this.stopWarping()}halt(t){return this.warp(this._effectiveTimeScale,0,t)}warp(t,e,a){const i=this._mixer,c=i.time,r=this.timeScale;let s=this._timeScaleInterpolant;s===null&&(s=i._lendControlInterpolant(),this._timeScaleInterpolant=s);const l=s.parameterPositions,h=s.sampleValues;return l[0]=c,l[1]=c+a,h[0]=t/r,h[1]=e/r,this}stopWarping(){const t=this._timeScaleInterpolant;return t!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(t)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(t,e,a,i){if(!this.enabled){this._updateWeight(t);return}const c=this._startTime;if(c!==null){const l=(t-c)*a;if(l<0||a===0)return;this._startTime=null,e=a*l}e*=this._updateTimeScale(t);const r=this._updateTime(e),s=this._updateWeight(t);if(s>0){const l=this._interpolants,h=this._propertyBindings;switch(this.blendMode){case B:for(let u=0,d=l.length;u!==d;++u)l[u].evaluate(r),h[u].accumulateAdditive(s);break;case R:default:for(let u=0,d=l.length;u!==d;++u)l[u].evaluate(r),h[u].accumulate(i,s)}}}_updateWeight(t){let e=0;if(this.enabled){e=this.weight;const a=this._weightInterpolant;if(a!==null){const i=a.evaluate(t)[0];e*=i,t>a.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=e,e}_updateTimeScale(t){let e=0;if(!this.paused){e=this.timeScale;const a=this._timeScaleInterpolant;a!==null&&(e*=a.evaluate(t)[0],t>a.parameterPositions[1]&&(this.stopWarping(),e===0?this.paused=!0:this.timeScale=e))}return this._effectiveTimeScale=e,e}_updateTime(t){const e=this._clip.duration,a=this.loop;let i=this.time+t,c=this._loopCount;const r=a===r0;if(t===0)return c===-1?i:r&&(c&1)===1?e-i:i;if(a===v0){c===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));t:{if(i>=e)i=e;else if(i<0)i=0;else{this.time=i;break t}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:t<0?-1:1})}}else{if(c===-1&&(t>=0?(c=0,this._setEndings(!0,this.repetitions===0,r)):this._setEndings(this.repetitions===0,!0,r)),i>=e||i<0){const s=Math.floor(i/e);i-=e*s,c+=Math.abs(s);const l=this.repetitions-c;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=t>0?e:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:t>0?1:-1});else{if(l===1){const h=t<0;this._setEndings(h,!h,r)}else this._setEndings(!1,!1,r);this._loopCount=c,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:s})}}else this.time=i;if(r&&(c&1)===1)return e-i}return i}_setEndings(t,e,a){const i=this._interpolantSettings;a?(i.endingStart=T,i.endingEnd=T):(t?i.endingStart=this.zeroSlopeAtStart?T:z6:i.endingStart=F,e?i.endingEnd=this.zeroSlopeAtEnd?T:z6:i.endingEnd=F)}_scheduleFading(t,e,a){const i=this._mixer,c=i.time;let r=this._weightInterpolant;r===null&&(r=i._lendControlInterpolant(),this._weightInterpolant=r);const s=r.parameterPositions,l=r.sampleValues;return s[0]=c,l[0]=e,s[1]=c+t,l[1]=a,this}}const Js=new Float32Array(1);class pl extends null{constructor(t){super(),this._root=t,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(t,e){const a=t._localRoot||this._root,i=t._clip.tracks,c=i.length,r=t._propertyBindings,s=t._interpolants,l=a.uuid,h=this._bindingsByRootAndName;let u=h[l];u===void 0&&(u={},h[l]=u);for(let d=0;d!==c;++d){const f=i[d],v=f.name;let m=u[v];if(m!==void 0)++m.referenceCount,r[d]=m;else{if(m=r[d],m!==void 0){m._cacheIndex===null&&(++m.referenceCount,this._addInactiveBinding(m,l,v));continue}const g=e&&e._propertyBindings[d].binding.parsedPath;m=new Ns(g4.create(a,v,g),f.ValueTypeName,f.getValueSize()),++m.referenceCount,this._addInactiveBinding(m,l,v),r[d]=m}s[d].resultBuffer=m.buffer}}_activateAction(t){if(!this._isActiveAction(t)){if(t._cacheIndex===null){const a=(t._localRoot||this._root).uuid,i=t._clip.uuid,c=this._actionsByClip[i];this._bindAction(t,c&&c.knownActions[0]),this._addInactiveAction(t,i,a)}const e=t._propertyBindings;for(let a=0,i=e.length;a!==i;++a){const c=e[a];c.useCount++===0&&(this._lendBinding(c),c.saveOriginalState())}this._lendAction(t)}}_deactivateAction(t){if(this._isActiveAction(t)){const e=t._propertyBindings;for(let a=0,i=e.length;a!==i;++a){const c=e[a];--c.useCount===0&&(c.restoreOriginalState(),this._takeBackBinding(c))}this._takeBackAction(t)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const t=this;this.stats={actions:{get total(){return t._actions.length},get inUse(){return t._nActiveActions}},bindings:{get total(){return t._bindings.length},get inUse(){return t._nActiveBindings}},controlInterpolants:{get total(){return t._controlInterpolants.length},get inUse(){return t._nActiveControlInterpolants}}}}_isActiveAction(t){const e=t._cacheIndex;return e!==null&&e<this._nActiveActions}_addInactiveAction(t,e,a){const i=this._actions,c=this._actionsByClip;let r=c[e];if(r===void 0)r={knownActions:[t],actionByRoot:{}},t._byClipCacheIndex=0,c[e]=r;else{const s=r.knownActions;t._byClipCacheIndex=s.length,s.push(t)}t._cacheIndex=i.length,i.push(t),r.actionByRoot[a]=t}_removeInactiveAction(t){const e=this._actions,a=e[e.length-1],i=t._cacheIndex;a._cacheIndex=i,e[i]=a,e.pop(),t._cacheIndex=null;const c=t._clip.uuid,r=this._actionsByClip,s=r[c],l=s.knownActions,h=l[l.length-1],u=t._byClipCacheIndex;h._byClipCacheIndex=u,l[u]=h,l.pop(),t._byClipCacheIndex=null;const d=s.actionByRoot,f=(t._localRoot||this._root).uuid;delete d[f],l.length===0&&delete r[c],this._removeInactiveBindingsForAction(t)}_removeInactiveBindingsForAction(t){const e=t._propertyBindings;for(let a=0,i=e.length;a!==i;++a){const c=e[a];--c.referenceCount===0&&this._removeInactiveBinding(c)}}_lendAction(t){const e=this._actions,a=t._cacheIndex,i=this._nActiveActions++,c=e[i];t._cacheIndex=i,e[i]=t,c._cacheIndex=a,e[a]=c}_takeBackAction(t){const e=this._actions,a=t._cacheIndex,i=--this._nActiveActions,c=e[i];t._cacheIndex=i,e[i]=t,c._cacheIndex=a,e[a]=c}_addInactiveBinding(t,e,a){const i=this._bindingsByRootAndName,c=this._bindings;let r=i[e];r===void 0&&(r={},i[e]=r),r[a]=t,t._cacheIndex=c.length,c.push(t)}_removeInactiveBinding(t){const e=this._bindings,a=t.binding,i=a.rootNode.uuid,c=a.path,r=this._bindingsByRootAndName,s=r[i],l=e[e.length-1],h=t._cacheIndex;l._cacheIndex=h,e[h]=l,e.pop(),delete s[c],Object.keys(s).length===0&&delete r[i]}_lendBinding(t){const e=this._bindings,a=t._cacheIndex,i=this._nActiveBindings++,c=e[i];t._cacheIndex=i,e[i]=t,c._cacheIndex=a,e[a]=c}_takeBackBinding(t){const e=this._bindings,a=t._cacheIndex,i=--this._nActiveBindings,c=e[i];t._cacheIndex=i,e[i]=t,c._cacheIndex=a,e[a]=c}_lendControlInterpolant(){const t=this._controlInterpolants,e=this._nActiveControlInterpolants++;let a=t[e];return a===void 0&&(a=new Sn(new Float32Array(2),new Float32Array(2),1,Js),a.__cacheIndex=e,t[e]=a),a}_takeBackControlInterpolant(t){const e=this._controlInterpolants,a=t.__cacheIndex,i=--this._nActiveControlInterpolants,c=e[i];t.__cacheIndex=i,e[i]=t,c.__cacheIndex=a,e[a]=c}clipAction(t,e,a){const i=e||this._root,c=i.uuid;let r=typeof t=="string"?H5.findByName(i,t):t;const s=r!==null?r.uuid:t,l=this._actionsByClip[s];let h=null;if(a===void 0&&(r!==null?a=r.blendMode:a=R),l!==void 0){const d=l.actionByRoot[c];if(d!==void 0&&d.blendMode===a)return d;h=l.knownActions[0],r===null&&(r=h._clip)}if(r===null)return null;const u=new js(this,r,e,a);return this._bindAction(u,h),this._addInactiveAction(u,s,c),u}existingAction(t,e){const a=e||this._root,i=a.uuid,c=typeof t=="string"?H5.findByName(a,t):t,r=c?c.uuid:t,s=this._actionsByClip[r];return s!==void 0&&s.actionByRoot[i]||null}stopAllAction(){const t=this._actions,e=this._nActiveActions;for(let a=e-1;a>=0;--a)t[a].stop();return this}update(t){t*=this.timeScale;const e=this._actions,a=this._nActiveActions,i=this.time+=t,c=Math.sign(t),r=this._accuIndex^=1;for(let h=0;h!==a;++h)e[h]._update(i,t,c,r);const s=this._bindings,l=this._nActiveBindings;for(let h=0;h!==l;++h)s[h].apply(r);return this}setTime(t){this.time=0;for(let e=0;e<this._actions.length;e++)this._actions[e].time=0;return this.update(t)}getRoot(){return this._root}uncacheClip(t){const e=this._actions,a=t.uuid,i=this._actionsByClip,c=i[a];if(c!==void 0){const r=c.knownActions;for(let s=0,l=r.length;s!==l;++s){const h=r[s];this._deactivateAction(h);const u=h._cacheIndex,d=e[e.length-1];h._cacheIndex=null,h._byClipCacheIndex=null,d._cacheIndex=u,e[u]=d,e.pop(),this._removeInactiveBindingsForAction(h)}delete i[a]}}uncacheRoot(t){const e=t.uuid,a=this._actionsByClip;for(const r in a){const s=a[r].actionByRoot,l=s[e];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}const i=this._bindingsByRootAndName,c=i[e];if(c!==void 0)for(const r in c){const s=c[r];s.restoreOriginalState(),this._removeInactiveBinding(s)}}uncacheAction(t,e){const a=this.existingAction(t,e);a!==null&&(this._deactivateAction(a),this._removeInactiveAction(a))}}class Un{constructor(t){typeof t=="string"&&(console.warn("THREE.Uniform: Type parameter is no longer needed."),t=arguments[1]),this.value=t}clone(){return new Un(this.value.clone===void 0?this.value:this.value.clone())}}let Ks=0;class ml extends null{constructor(){super(),this.isUniformsGroup=!0,Object.defineProperty(this,"id",{value:Ks++}),this.name="",this.usage=O4,this.uniforms=[]}add(t){return this.uniforms.push(t),this}remove(t){const e=this.uniforms.indexOf(t);return e!==-1&&this.uniforms.splice(e,1),this}setName(t){return this.name=t,this}setUsage(t){return this.usage=t,this}dispose(){return this.dispatchEvent({type:"dispose"}),this}copy(t){this.name=t.name,this.usage=t.usage;const e=t.uniforms;this.uniforms.length=0;for(let a=0,i=e.length;a<i;a++)this.uniforms.push(e[a].clone());return this}clone(){return new this.constructor().copy(this)}}class zl extends null{constructor(t,e,a=1){super(t,e),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=a}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}clone(t){const e=super.clone(t);return e.meshPerAttribute=this.meshPerAttribute,e}toJSON(t){const e=super.toJSON(t);return e.isInstancedInterleavedBuffer=!0,e.meshPerAttribute=this.meshPerAttribute,e}}class xl{constructor(t,e,a,i,c){this.isGLBufferAttribute=!0,this.buffer=t,this.type=e,this.itemSize=a,this.elementSize=i,this.count=c,this.version=0}set needsUpdate(t){t===!0&&this.version++}setBuffer(t){return this.buffer=t,this}setType(t,e){return this.type=t,this.elementSize=e,this}setItemSize(t){return this.itemSize=t,this}setCount(t){return this.count=t,this}}class Ml{constructor(t,e,a=0,i=1/0){this.ray=new B8(t,e),this.near=a,this.far=i,this.camera=null,this.layers=new $5,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}intersectObject(t,e=!0,a=[]){return Ne(t,this,a,e),a.sort(Zn),a}intersectObjects(t,e=!0,a=[]){for(let i=0,c=t.length;i<c;i++)Ne(t[i],this,a,e);return a.sort(Zn),a}}function Zn(o,t){return o.distance-t.distance}function Ne(o,t,e,a){if(o.layers.test(t.layers)&&o.raycast(t,e),a===!0){const i=o.children;for(let c=0,r=i.length;c<r;c++)Ne(i[c],t,e,!0)}}class Qs{constructor(t=1,e=0,a=0){return this.radius=t,this.phi=e,this.theta=a,this}set(t,e,a){return this.radius=t,this.phi=e,this.theta=a,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,a){return this.radius=Math.sqrt(t*t+e*e+a*a),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,a),this.phi=Math.acos(U4(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class wl{constructor(t=1,e=0,a=0){return this.radius=t,this.theta=e,this.y=a,this}set(t,e,a){return this.radius=t,this.theta=e,this.y=a,this}copy(t){return this.radius=t.radius,this.theta=t.theta,this.y=t.y,this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,a){return this.radius=Math.sqrt(t*t+a*a),this.theta=Math.atan2(t,a),this.y=e,this}clone(){return new this.constructor().copy(this)}}const Wn=new c1;class yl{constructor(t=new c1(1/0,1/0),e=new c1(-1/0,-1/0)){this.isBox2=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromPoints(t){this.makeEmpty();for(let e=0,a=t.length;e<a;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const a=Wn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(a),this.max.copy(t).add(a),this}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(t){return this.isEmpty()?t.set(0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y)}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return Wn.copy(t).clamp(this.min,this.max).sub(t).length()}intersect(t){return this.min.max(t.min),this.max.min(t.max),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const qn=new S,V5=new S;class Cl{constructor(t=new S,e=new S){this.start=t,this.end=e}set(t,e){return this.start.copy(t),this.end.copy(e),this}copy(t){return this.start.copy(t.start),this.end.copy(t.end),this}getCenter(t){return t.addVectors(this.start,this.end).multiplyScalar(.5)}delta(t){return t.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(t,e){return this.delta(e).multiplyScalar(t).add(this.start)}closestPointToPointParameter(t,e){qn.subVectors(t,this.start),V5.subVectors(this.end,this.start);const a=V5.dot(V5);let c=V5.dot(qn)/a;return e&&(c=U4(c,0,1)),c}closestPointToPoint(t,e,a){const i=this.closestPointToPointParameter(t,e);return this.delta(a).multiplyScalar(i).add(this.start)}applyMatrix4(t){return this.start.applyMatrix4(t),this.end.applyMatrix4(t),this}equals(t){return t.start.equals(this.start)&&t.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}const Xn=new S;class _l extends null{constructor(t,e){super(),this.light=t,this.light.updateMatrixWorld(),this.matrix=t.matrixWorld,this.matrixAutoUpdate=!1,this.color=e;const a=new Y2,i=[0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,-1,0,1,0,0,0,0,1,1,0,0,0,0,-1,1];for(let r=0,s=1,l=32;r<l;r++,s++){const h=r/l*Math.PI*2,u=s/l*Math.PI*2;i.push(Math.cos(h),Math.sin(h),1,Math.cos(u),Math.sin(u),1)}a.setAttribute("position",new j1(i,3));const c=new b6({fog:!1,toneMapped:!1});this.cone=new sn(a,c),this.add(this.cone),this.update()}dispose(){this.cone.geometry.dispose(),this.cone.material.dispose()}update(){this.light.updateMatrixWorld();const t=this.light.distance?this.light.distance:1e3,e=t*Math.tan(this.light.angle);this.cone.scale.set(e,e,t),Xn.setFromMatrixPosition(this.light.target.matrixWorld),this.cone.lookAt(Xn),this.color!==void 0?this.cone.material.color.set(this.color):this.cone.material.color.copy(this.light.color)}}const Z0=new S,F5=new O2,Oe=new O2;class Sl extends null{constructor(t){const e=$n(t),a=new Y2,i=[],c=[],r=new D1(0,0,1),s=new D1(0,1,0);for(let h=0;h<e.length;h++){const u=e[h];u.parent&&u.parent.isBone&&(i.push(0,0,0),i.push(0,0,0),c.push(r.r,r.g,r.b),c.push(s.r,s.g,s.b))}a.setAttribute("position",new j1(i,3)),a.setAttribute("color",new j1(c,3));const l=new b6({vertexColors:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,transparent:!0});super(a,l),this.isSkeletonHelper=!0,this.type="SkeletonHelper",this.root=t,this.bones=e,this.matrix=t.matrixWorld,this.matrixAutoUpdate=!1}updateMatrixWorld(t){const e=this.bones,a=this.geometry,i=a.getAttribute("position");Oe.copy(this.root.matrixWorld).invert();for(let c=0,r=0;c<e.length;c++){const s=e[c];s.parent&&s.parent.isBone&&(F5.multiplyMatrices(Oe,s.matrixWorld),Z0.setFromMatrixPosition(F5),i.setXYZ(r,Z0.x,Z0.y,Z0.z),F5.multiplyMatrices(Oe,s.parent.matrixWorld),Z0.setFromMatrixPosition(F5),i.setXYZ(r+1,Z0.x,Z0.y,Z0.z),r+=2)}a.getAttribute("position").needsUpdate=!0,super.updateMatrixWorld(t)}}function $n(o){const t=[];o.isBone===!0&&t.push(o);for(let e=0;e<o.children.length;e++)t.push.apply(t,$n(o.children[e]));return t}class bl extends null{constructor(t,e,a){const i=new x8(e,4,2),c=new K0({wireframe:!0,fog:!1,toneMapped:!1});super(i,c),this.light=t,this.light.updateMatrixWorld(),this.color=a,this.type="PointLightHelper",this.matrix=this.light.matrixWorld,this.matrixAutoUpdate=!1,this.update()}dispose(){this.geometry.dispose(),this.material.dispose()}update(){this.color!==void 0?this.material.color.set(this.color):this.material.color.copy(this.light.color)}}const to=new S,Yn=new D1,jn=new D1;class Ll extends null{constructor(t,e,a){super(),this.light=t,this.light.updateMatrixWorld(),this.matrix=t.matrixWorld,this.matrixAutoUpdate=!1,this.color=a;const i=new z8(e);i.rotateY(Math.PI*.5),this.material=new K0({wireframe:!0,fog:!1,toneMapped:!1}),this.color===void 0&&(this.material.vertexColors=!0);const c=i.getAttribute("position"),r=new Float32Array(c.count*3);i.setAttribute("color",new b3(r,3)),this.add(new S6(i,this.material)),this.update()}dispose(){this.children[0].geometry.dispose(),this.children[0].material.dispose()}update(){const t=this.children[0];if(this.color!==void 0)this.material.color.set(this.color);else{const e=t.geometry.getAttribute("color");Yn.copy(this.light.color),jn.copy(this.light.groundColor);for(let a=0,i=e.count;a<i;a++){const c=a<i/2?Yn:jn;e.setXYZ(a,c.r,c.g,c.b)}e.needsUpdate=!0}t.lookAt(to.setFromMatrixPosition(this.light.matrixWorld).negate())}}class Hl extends null{constructor(t=10,e=10,a=4473924,i=8947848){a=new D1(a),i=new D1(i);const c=e/2,r=t/e,s=t/2,l=[],h=[];for(let f=0,v=0,m=-s;f<=e;f++,m+=r){l.push(-s,0,m,s,0,m),l.push(m,0,-s,m,0,s);const g=f===c?a:i;g.toArray(h,v),v+=3,g.toArray(h,v),v+=3,g.toArray(h,v),v+=3,g.toArray(h,v),v+=3}const u=new Y2;u.setAttribute("position",new j1(l,3)),u.setAttribute("color",new j1(h,3));const d=new b6({vertexColors:!0,toneMapped:!1});super(u,d),this.type="GridHelper"}}class Il extends null{constructor(t=10,e=16,a=8,i=64,c=4473924,r=8947848){c=new D1(c),r=new D1(r);const s=[],l=[];for(let d=0;d<=e;d++){const f=d/e*(Math.PI*2),v=Math.sin(f)*t,m=Math.cos(f)*t;s.push(0,0,0),s.push(v,0,m);const g=d&1?c:r;l.push(g.r,g.g,g.b),l.push(g.r,g.g,g.b)}for(let d=0;d<=a;d++){const f=d&1?c:r,v=t-t/a*d;for(let m=0;m<i;m++){let g=m/i*(Math.PI*2),p=Math.sin(g)*v,x=Math.cos(g)*v;s.push(p,0,x),l.push(f.r,f.g,f.b),g=(m+1)/i*(Math.PI*2),p=Math.sin(g)*v,x=Math.cos(g)*v,s.push(p,0,x),l.push(f.r,f.g,f.b)}}const h=new Y2;h.setAttribute("position",new j1(s,3)),h.setAttribute("color",new j1(l,3));const u=new b6({vertexColors:!0,toneMapped:!1});super(h,u),this.type="PolarGridHelper"}}const Jn=new S,B5=new S,Kn=new S;class Al extends null{constructor(t,e,a){super(),this.light=t,this.light.updateMatrixWorld(),this.matrix=t.matrixWorld,this.matrixAutoUpdate=!1,this.color=a,e===void 0&&(e=1);let i=new Y2;i.setAttribute("position",new j1([-e,e,0,e,e,0,e,-e,0,-e,-e,0,-e,e,0],3));const c=new b6({fog:!1,toneMapped:!1});this.lightPlane=new n5(i,c),this.add(this.lightPlane),i=new Y2,i.setAttribute("position",new j1([0,0,0,0,0,1],3)),this.targetLine=new n5(i,c),this.add(this.targetLine),this.update()}dispose(){this.lightPlane.geometry.dispose(),this.lightPlane.material.dispose(),this.targetLine.geometry.dispose(),this.targetLine.material.dispose()}update(){Jn.setFromMatrixPosition(this.light.matrixWorld),B5.setFromMatrixPosition(this.light.target.matrixWorld),Kn.subVectors(B5,Jn),this.lightPlane.lookAt(B5),this.color!==void 0?(this.lightPlane.material.color.set(this.color),this.targetLine.material.color.set(this.color)):(this.lightPlane.material.color.copy(this.light.color),this.targetLine.material.color.copy(this.light.color)),this.targetLine.lookAt(B5),this.targetLine.scale.z=Kn.length()}}const T5=new S,r3=new ce;class Vl extends null{constructor(t){const e=new Y2,a=new b6({color:16777215,vertexColors:!0,toneMapped:!1}),i=[],c=[],r={};s("n1","n2"),s("n2","n4"),s("n4","n3"),s("n3","n1"),s("f1","f2"),s("f2","f4"),s("f4","f3"),s("f3","f1"),s("n1","f1"),s("n2","f2"),s("n3","f3"),s("n4","f4"),s("p","n1"),s("p","n2"),s("p","n3"),s("p","n4"),s("u1","u2"),s("u2","u3"),s("u3","u1"),s("c","t"),s("p","c"),s("cn1","cn2"),s("cn3","cn4"),s("cf1","cf2"),s("cf3","cf4");function s(m,g){l(m),l(g)}function l(m){i.push(0,0,0),c.push(0,0,0),r[m]===void 0&&(r[m]=[]),r[m].push(i.length/3-1)}e.setAttribute("position",new j1(i,3)),e.setAttribute("color",new j1(c,3)),super(e,a),this.type="CameraHelper",this.camera=t,this.camera.updateProjectionMatrix&&this.camera.updateProjectionMatrix(),this.matrix=t.matrixWorld,this.matrixAutoUpdate=!1,this.pointMap=r,this.update();const h=new D1(16755200),u=new D1(16711680),d=new D1(43775),f=new D1(16777215),v=new D1(3355443);this.setColors(h,u,d,f,v)}setColors(t,e,a,i,c){const s=this.geometry.getAttribute("color");s.setXYZ(0,t.r,t.g,t.b),s.setXYZ(1,t.r,t.g,t.b),s.setXYZ(2,t.r,t.g,t.b),s.setXYZ(3,t.r,t.g,t.b),s.setXYZ(4,t.r,t.g,t.b),s.setXYZ(5,t.r,t.g,t.b),s.setXYZ(6,t.r,t.g,t.b),s.setXYZ(7,t.r,t.g,t.b),s.setXYZ(8,t.r,t.g,t.b),s.setXYZ(9,t.r,t.g,t.b),s.setXYZ(10,t.r,t.g,t.b),s.setXYZ(11,t.r,t.g,t.b),s.setXYZ(12,t.r,t.g,t.b),s.setXYZ(13,t.r,t.g,t.b),s.setXYZ(14,t.r,t.g,t.b),s.setXYZ(15,t.r,t.g,t.b),s.setXYZ(16,t.r,t.g,t.b),s.setXYZ(17,t.r,t.g,t.b),s.setXYZ(18,t.r,t.g,t.b),s.setXYZ(19,t.r,t.g,t.b),s.setXYZ(20,t.r,t.g,t.b),s.setXYZ(21,t.r,t.g,t.b),s.setXYZ(22,t.r,t.g,t.b),s.setXYZ(23,t.r,t.g,t.b),s.setXYZ(24,e.r,e.g,e.b),s.setXYZ(25,e.r,e.g,e.b),s.setXYZ(26,e.r,e.g,e.b),s.setXYZ(27,e.r,e.g,e.b),s.setXYZ(28,e.r,e.g,e.b),s.setXYZ(29,e.r,e.g,e.b),s.setXYZ(30,e.r,e.g,e.b),s.setXYZ(31,e.r,e.g,e.b),s.setXYZ(32,a.r,a.g,a.b),s.setXYZ(33,a.r,a.g,a.b),s.setXYZ(34,a.r,a.g,a.b),s.setXYZ(35,a.r,a.g,a.b),s.setXYZ(36,a.r,a.g,a.b),s.setXYZ(37,a.r,a.g,a.b),s.setXYZ(38,i.r,i.g,i.b),s.setXYZ(39,i.r,i.g,i.b),s.setXYZ(40,c.r,c.g,c.b),s.setXYZ(41,c.r,c.g,c.b),s.setXYZ(42,c.r,c.g,c.b),s.setXYZ(43,c.r,c.g,c.b),s.setXYZ(44,c.r,c.g,c.b),s.setXYZ(45,c.r,c.g,c.b),s.setXYZ(46,c.r,c.g,c.b),s.setXYZ(47,c.r,c.g,c.b),s.setXYZ(48,c.r,c.g,c.b),s.setXYZ(49,c.r,c.g,c.b),s.needsUpdate=!0}update(){const t=this.geometry,e=this.pointMap,a=1,i=1;r3.projectionMatrixInverse.copy(this.camera.projectionMatrixInverse),f3("c",e,t,r3,0,0,-1),f3("t",e,t,r3,0,0,1),f3("n1",e,t,r3,-a,-i,-1),f3("n2",e,t,r3,a,-i,-1),f3("n3",e,t,r3,-a,i,-1),f3("n4",e,t,r3,a,i,-1),f3("f1",e,t,r3,-a,-i,1),f3("f2",e,t,r3,a,-i,1),f3("f3",e,t,r3,-a,i,1),f3("f4",e,t,r3,a,i,1),f3("u1",e,t,r3,a*.7,i*1.1,-1),f3("u2",e,t,r3,-a*.7,i*1.1,-1),f3("u3",e,t,r3,0,i*2,-1),f3("cf1",e,t,r3,-a,0,1),f3("cf2",e,t,r3,a,0,1),f3("cf3",e,t,r3,0,-i,1),f3("cf4",e,t,r3,0,i,1),f3("cn1",e,t,r3,-a,0,-1),f3("cn2",e,t,r3,a,0,-1),f3("cn3",e,t,r3,0,-i,-1),f3("cn4",e,t,r3,0,i,-1),t.getAttribute("position").needsUpdate=!0}dispose(){this.geometry.dispose(),this.material.dispose()}}function f3(o,t,e,a,i,c,r){T5.set(i,c,r).unproject(a);const s=t[o];if(s!==void 0){const l=e.getAttribute("position");for(let h=0,u=s.length;h<u;h++)l.setXYZ(s[h],T5.x,T5.y,T5.z)}}const E5=new gt;class Fl extends null{constructor(t,e=16776960){const a=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),i=new Float32Array(8*3),c=new Y2;c.setIndex(new b3(a,1)),c.setAttribute("position",new b3(i,3)),super(c,new b6({color:e,toneMapped:!1})),this.object=t,this.type="BoxHelper",this.matrixAutoUpdate=!1,this.update()}update(t){if(t!==void 0&&console.warn("THREE.BoxHelper: .update() has no longer arguments."),this.object!==void 0&&E5.setFromObject(this.object),E5.isEmpty())return;const e=E5.min,a=E5.max,i=this.geometry.attributes.position,c=i.array;c[0]=a.x,c[1]=a.y,c[2]=a.z,c[3]=e.x,c[4]=a.y,c[5]=a.z,c[6]=e.x,c[7]=e.y,c[8]=a.z,c[9]=a.x,c[10]=e.y,c[11]=a.z,c[12]=a.x,c[13]=a.y,c[14]=e.z,c[15]=e.x,c[16]=a.y,c[17]=e.z,c[18]=e.x,c[19]=e.y,c[20]=e.z,c[21]=a.x,c[22]=e.y,c[23]=e.z,i.needsUpdate=!0,this.geometry.computeBoundingSphere()}setFromObject(t){return this.object=t,this.update(),this}copy(t,e){return super.copy(t,e),this.object=t.object,this}}class Bl extends null{constructor(t,e=16776960){const a=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),i=[1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,-1,-1,1,-1,-1,-1,-1,1,-1,-1],c=new Y2;c.setIndex(new b3(a,1)),c.setAttribute("position",new j1(i,3)),super(c,new b6({color:e,toneMapped:!1})),this.box=t,this.type="Box3Helper",this.geometry.computeBoundingSphere()}updateMatrixWorld(t){const e=this.box;e.isEmpty()||(e.getCenter(this.position),e.getSize(this.scale),this.scale.multiplyScalar(.5),super.updateMatrixWorld(t))}}class Tl extends null{constructor(t,e=1,a=16776960){const i=a,c=[1,-1,0,-1,1,0,-1,-1,0,1,1,0,-1,1,0,-1,-1,0,1,-1,0,1,1,0],r=new Y2;r.setAttribute("position",new j1(c,3)),r.computeBoundingSphere(),super(r,new b6({color:i,toneMapped:!1})),this.type="PlaneHelper",this.plane=t,this.size=e;const s=[1,1,0,-1,1,0,-1,-1,0,1,1,0,-1,-1,0,1,-1,0],l=new Y2;l.setAttribute("position",new j1(s,3)),l.computeBoundingSphere(),this.add(new S6(l,new K0({color:i,opacity:.2,transparent:!0,depthWrite:!1,toneMapped:!1})))}updateMatrixWorld(t){this.position.set(0,0,0),this.scale.set(.5*this.size,.5*this.size,1),this.lookAt(this.plane.normal),this.translateZ(-this.plane.constant),super.updateMatrixWorld(t)}}const Qn=new S;let G5,ke;class El extends null{constructor(t=new S(0,0,1),e=new S(0,0,0),a=1,i=16776960,c=a*.2,r=c*.2){super(),this.type="ArrowHelper",G5===void 0&&(G5=new Y2,G5.setAttribute("position",new j1([0,0,0,0,1,0],3)),ke=new Dt(0,.5,1,5,1),ke.translate(0,-.5,0)),this.position.copy(e),this.line=new n5(G5,new b6({color:i,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new S6(ke,new K0({color:i,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(t),this.setLength(a,c,r)}setDirection(t){if(t.y>.99999)this.quaternion.set(0,0,0,1);else if(t.y<-.99999)this.quaternion.set(1,0,0,0);else{Qn.set(t.z,0,-t.x).normalize();const e=Math.acos(t.y);this.quaternion.setFromAxisAngle(Qn,e)}}setLength(t,e=t*.2,a=e*.2){this.line.scale.set(1,Math.max(1e-4,t-e),1),this.line.updateMatrix(),this.cone.scale.set(a,e,a),this.cone.position.y=t,this.cone.updateMatrix()}setColor(t){this.line.material.color.set(t),this.cone.material.color.set(t)}copy(t){return super.copy(t,!1),this.line.copy(t.line),this.cone.copy(t.cone),this}}class Gl extends null{constructor(t=1){const e=[0,0,0,t,0,0,0,0,0,0,t,0,0,0,0,0,0,t],a=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],i=new Y2;i.setAttribute("position",new j1(e,3)),i.setAttribute("color",new j1(a,3));const c=new b6({vertexColors:!0,toneMapped:!1});super(i,c),this.type="AxesHelper"}setColors(t,e,a){const i=new D1,c=this.geometry.attributes.color.array;return i.set(t),i.toArray(c,0),i.toArray(c,3),i.set(e),i.toArray(c,6),i.toArray(c,9),i.set(a),i.toArray(c,12),i.toArray(c,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class Rl{constructor(){this.type="ShapePath",this.color=new D1,this.subPaths=[],this.currentPath=null}moveTo(t,e){return this.currentPath=new r5,this.subPaths.push(this.currentPath),this.currentPath.moveTo(t,e),this}lineTo(t,e){return this.currentPath.lineTo(t,e),this}quadraticCurveTo(t,e,a,i){return this.currentPath.quadraticCurveTo(t,e,a,i),this}bezierCurveTo(t,e,a,i,c,r){return this.currentPath.bezierCurveTo(t,e,a,i,c,r),this}splineThru(t){return this.currentPath.splineThru(t),this}toShapes(t,e){function a(z){const y=[];for(let M=0,C=z.length;M<C;M++){const b=z[M],E=new Nt;E.curves=b.curves,y.push(E)}return y}function i(z,y){const M=y.length;let C=!1;for(let b=M-1,E=0;E<M;b=E++){let w=y[b],H=y[E],P=H.x-w.x,O=H.y-w.y;if(Math.abs(O)>Number.EPSILON){if(O<0&&(w=y[E],P=-P,H=y[b],O=-O),z.y<w.y||z.y>H.y)continue;if(z.y===w.y){if(z.x===w.x)return!0}else{const d1=O*(z.x-w.x)-P*(z.y-w.y);if(d1===0)return!0;if(d1<0)continue;C=!C}}else{if(z.y!==w.y)continue;if(H.x<=z.x&&z.x<=w.x||w.x<=z.x&&z.x<=H.x)return!0}}return C}const c=S0.isClockWise,r=this.subPaths;if(r.length===0)return[];if(e===!0)return a(r);let s,l,h;const u=[];if(r.length===1)return l=r[0],h=new Nt,h.curves=l.curves,u.push(h),u;let d=!c(r[0].getPoints());d=t?!d:d;const f=[],v=[];let m=[],g=0,p;v[g]=void 0,m[g]=[];for(let z=0,y=r.length;z<y;z++)l=r[z],p=l.getPoints(),s=c(p),s=t?!s:s,s?(!d&&v[g]&&g++,v[g]={s:new Nt,p},v[g].s.curves=l.curves,d&&g++,m[g]=[]):m[g].push({h:l,p:p[0]});if(!v[0])return a(r);if(v.length>1){let z=!1,y=0;for(let M=0,C=v.length;M<C;M++)f[M]=[];for(let M=0,C=v.length;M<C;M++){const b=m[M];for(let E=0;E<b.length;E++){const w=b[E];let H=!0;for(let P=0;P<v.length;P++)i(w.p,v[P].p)&&(M!==P&&y++,H?(H=!1,f[P].push(w)):z=!0);H&&f[M].push(w)}}y>0&&z===!1&&(m=f)}let x;for(let z=0,y=v.length;z<y;z++){h=v[z].s,u.push(h),x=m[z];for(let M=0,C=x.length;M<C;M++)h.holes.push(x[M].h)}return u}}const L0=eo();function eo(){const o=new ArrayBuffer(4),t=new Float32Array(o),e=new Uint32Array(o),a=new Uint32Array(512),i=new Uint32Array(512);for(let l=0;l<256;++l){const h=l-127;h<-27?(a[l]=0,a[l|256]=32768,i[l]=24,i[l|256]=24):h<-14?(a[l]=1024>>-h-14,a[l|256]=1024>>-h-14|32768,i[l]=-h-1,i[l|256]=-h-1):h<=15?(a[l]=h+15<<10,a[l|256]=h+15<<10|32768,i[l]=13,i[l|256]=13):h<128?(a[l]=31744,a[l|256]=64512,i[l]=24,i[l|256]=24):(a[l]=31744,a[l|256]=64512,i[l]=13,i[l|256]=13)}const c=new Uint32Array(2048),r=new Uint32Array(64),s=new Uint32Array(64);for(let l=1;l<1024;++l){let h=l<<13,u=0;for(;(h&8388608)===0;)h<<=1,u-=8388608;h&=-8388609,u+=947912704,c[l]=h|u}for(let l=1024;l<2048;++l)c[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)r[l]=l<<23;r[31]=1199570944,r[32]=2147483648;for(let l=33;l<63;++l)r[l]=2147483648+(l-32<<23);r[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(s[l]=1024);return{floatView:t,uint32View:e,baseTable:a,shiftTable:i,mantissaTable:c,exponentTable:r,offsetTable:s}}function no(o){Math.abs(o)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),o=U4(o,-65504,65504),L0.floatView[0]=o;const t=L0.uint32View[0],e=t>>23&511;return L0.baseTable[e]+((t&8388607)>>L0.shiftTable[e])}function ao(o){const t=o>>10;return L0.uint32View[0]=L0.mantissaTable[L0.offsetTable[t]+(o&1023)]+L0.exponentTable[t],L0.floatView[0]}var Pl=Object.freeze({__proto__:null,toHalfFloat:no,fromHalfFloat:ao});class Dl extends null{constructor(){console.error("THREE.ParametricGeometry has been moved to /examples/jsm/geometries/ParametricGeometry.js"),super()}}class Nl extends null{constructor(){console.error("THREE.TextGeometry has been moved to /examples/jsm/geometries/TextGeometry.js"),super()}}function Ol(){console.error("THREE.FontLoader has been moved to /examples/jsm/loaders/FontLoader.js")}function kl(){console.error("THREE.Font has been moved to /examples/jsm/loaders/FontLoader.js")}function Ul(){console.error("THREE.ImmediateRenderObject has been removed.")}class Zl extends null{constructor(t,e,a){console.error('THREE.WebGLMultisampleRenderTarget has been removed. Use a normal render target and set the "samples" property to greater 0 to enable multisampling.'),super(t,e,a),this.samples=4}}class Wl extends null{constructor(t,e,a,i){console.warn("THREE.DataTexture2DArray has been renamed to DataArrayTexture."),super(t,e,a,i)}}class ql extends null{constructor(t,e,a,i){console.warn("THREE.DataTexture3D has been renamed to Data3DTexture."),super(t,e,a,i)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:m1}})),typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=m1)},69365:function(t0,n3,J){J.d(n3,{z:function(){return X1}});var m1=J(99477);const G={type:"change"},M2={type:"start"},E2={type:"end"};class X1 extends m1.pBf{constructor(i1,r4){super(),r4===void 0&&console.warn('THREE.OrbitControls: The second parameter "domElement" is now mandatory.'),r4===document&&console.error('THREE.OrbitControls: "document" should not be used as the target "domElement". Please use "renderer.domElement" instead.'),this.object=i1,this.domElement=r4,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new m1.Pa4,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:m1.RsA.ROTATE,MIDDLE:m1.RsA.DOLLY,RIGHT:m1.RsA.PAN},this.touches={ONE:m1.QmN.ROTATE,TWO:m1.QmN.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return $1.phi},this.getAzimuthalAngle=function(){return $1.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(U){U.addEventListener("keydown",P2),this._domElementKeyEvents=U},this.saveState=function(){V.target0.copy(V.target),V.position0.copy(V.object.position),V.zoom0=V.object.zoom},this.reset=function(){V.target.copy(V.target0),V.object.position.copy(V.position0),V.object.zoom=V.zoom0,V.object.updateProjectionMatrix(),V.dispatchEvent(G),V.update(),t2=E1.NONE},this.update=function(){const U=new m1.Pa4,k1=new m1._fP().setFromUnitVectors(i1.up,new m1.Pa4(0,1,0)),e4=k1.clone().invert(),U2=new m1.Pa4,D4=new m1._fP,D3=2*Math.PI;return function(){const O3=V.object.position;U.copy(O3).sub(V.target),U.applyQuaternion(k1),$1.setFromVector3(U),V.autoRotate&&t2===E1.NONE&&R2(e2()),V.enableDamping?($1.theta+=k2.theta*V.dampingFactor,$1.phi+=k2.phi*V.dampingFactor):($1.theta+=k2.theta,$1.phi+=k2.phi);let M4=V.minAzimuthAngle,X2=V.maxAzimuthAngle;return isFinite(M4)&&isFinite(X2)&&(M4<-Math.PI?M4+=D3:M4>Math.PI&&(M4-=D3),X2<-Math.PI?X2+=D3:X2>Math.PI&&(X2-=D3),M4<=X2?$1.theta=Math.max(M4,Math.min(X2,$1.theta)):$1.theta=$1.theta>(M4+X2)/2?Math.max(M4,$1.theta):Math.min(X2,$1.theta)),$1.phi=Math.max(V.minPolarAngle,Math.min(V.maxPolarAngle,$1.phi)),$1.makeSafe(),$1.radius*=L3,$1.radius=Math.max(V.minDistance,Math.min(V.maxDistance,$1.radius)),V.enableDamping===!0?V.target.addScaledVector(s4,V.dampingFactor):V.target.add(s4),U.setFromSpherical($1),U.applyQuaternion(e4),O3.copy(V.target).add(U),V.object.lookAt(V.target),V.enableDamping===!0?(k2.theta*=1-V.dampingFactor,k2.phi*=1-V.dampingFactor,s4.multiplyScalar(1-V.dampingFactor)):(k2.set(0,0,0),s4.set(0,0,0)),L3=1,c4||U2.distanceToSquared(V.object.position)>o2||8*(1-D4.dot(V.object.quaternion))>o2?(V.dispatchEvent(G),U2.copy(V.object.position),D4.copy(V.object.quaternion),c4=!1,!0):!1}}(),this.dispose=function(){V.domElement.removeEventListener("contextmenu",A4),V.domElement.removeEventListener("pointerdown",T3),V.domElement.removeEventListener("pointercancel",l1),V.domElement.removeEventListener("wheel",s2),V.domElement.removeEventListener("pointermove",q),V.domElement.removeEventListener("pointerup",f1),V._domElementKeyEvents!==null&&V._domElementKeyEvents.removeEventListener("keydown",P2)};const V=this,E1={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let t2=E1.NONE;const o2=1e-6,$1=new m1.$V,k2=new m1.$V;let L3=1;const s4=new m1.Pa4;let c4=!1;const Q4=new m1.FM8,a3=new m1.FM8,p3=new m1.FM8,y3=new m1.FM8,R4=new m1.FM8,C4=new m1.FM8,P4=new m1.FM8,N1=new m1.FM8,$=new m1.FM8,K=[],b1={};function e2(){return 2*Math.PI/60/60*V.autoRotateSpeed}function G2(){return Math.pow(.95,V.zoomSpeed)}function R2(U){k2.theta-=U}function B4(U){k2.phi-=U}const B3=function(){const U=new m1.Pa4;return function(e4,U2){U.setFromMatrixColumn(U2,0),U.multiplyScalar(-e4),s4.add(U)}}(),Y3=function(){const U=new m1.Pa4;return function(e4,U2){V.screenSpacePanning===!0?U.setFromMatrixColumn(U2,1):(U.setFromMatrixColumn(U2,0),U.crossVectors(V.object.up,U)),U.multiplyScalar(e4),s4.add(U)}}(),j3=function(){const U=new m1.Pa4;return function(e4,U2){const D4=V.domElement;if(V.object.isPerspectiveCamera){const D3=V.object.position;U.copy(D3).sub(V.target);let N3=U.length();N3*=Math.tan(V.object.fov/2*Math.PI/180),B3(2*e4*N3/D4.clientHeight,V.object.matrix),Y3(2*U2*N3/D4.clientHeight,V.object.matrix)}else V.object.isOrthographicCamera?(B3(e4*(V.object.right-V.object.left)/V.object.zoom/D4.clientWidth,V.object.matrix),Y3(U2*(V.object.top-V.object.bottom)/V.object.zoom/D4.clientHeight,V.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),V.enablePan=!1)}}();function H6(U){V.object.isPerspectiveCamera?L3/=U:V.object.isOrthographicCamera?(V.object.zoom=Math.max(V.minZoom,Math.min(V.maxZoom,V.object.zoom*U)),V.object.updateProjectionMatrix(),c4=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),V.enableZoom=!1)}function u6(U){V.object.isPerspectiveCamera?L3*=U:V.object.isOrthographicCamera?(V.object.zoom=Math.max(V.minZoom,Math.min(V.maxZoom,V.object.zoom/U)),V.object.updateProjectionMatrix(),c4=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),V.enableZoom=!1)}function e0(U){Q4.set(U.clientX,U.clientY)}function n0(U){P4.set(U.clientX,U.clientY)}function d6(U){y3.set(U.clientX,U.clientY)}function U6(U){a3.set(U.clientX,U.clientY),p3.subVectors(a3,Q4).multiplyScalar(V.rotateSpeed);const k1=V.domElement;R2(2*Math.PI*p3.x/k1.clientHeight),B4(2*Math.PI*p3.y/k1.clientHeight),Q4.copy(a3),V.update()}function I6(U){N1.set(U.clientX,U.clientY),$.subVectors(N1,P4),$.y>0?H6(G2()):$.y<0&&u6(G2()),P4.copy(N1),V.update()}function f6(U){R4.set(U.clientX,U.clientY),C4.subVectors(R4,y3).multiplyScalar(V.panSpeed),j3(C4.x,C4.y),y3.copy(R4),V.update()}function A6(U){U.deltaY<0?u6(G2()):U.deltaY>0&&H6(G2()),V.update()}function V6(U){let k1=!1;switch(U.code){case V.keys.UP:j3(0,V.keyPanSpeed),k1=!0;break;case V.keys.BOTTOM:j3(0,-V.keyPanSpeed),k1=!0;break;case V.keys.LEFT:j3(V.keyPanSpeed,0),k1=!0;break;case V.keys.RIGHT:j3(-V.keyPanSpeed,0),k1=!0;break}k1&&(U.preventDefault(),V.update())}function P3(){if(K.length===1)Q4.set(K[0].pageX,K[0].pageY);else{const U=.5*(K[0].pageX+K[1].pageX),k1=.5*(K[0].pageY+K[1].pageY);Q4.set(U,k1)}}function a0(){if(K.length===1)y3.set(K[0].pageX,K[0].pageY);else{const U=.5*(K[0].pageX+K[1].pageX),k1=.5*(K[0].pageY+K[1].pageY);y3.set(U,k1)}}function Z6(){const U=K[0].pageX-K[1].pageX,k1=K[0].pageY-K[1].pageY,e4=Math.sqrt(U*U+k1*k1);P4.set(0,e4)}function m3(){V.enableZoom&&Z6(),V.enablePan&&a0()}function z3(){V.enableZoom&&Z6(),V.enableRotate&&P3()}function F6(U){if(K.length==1)a3.set(U.pageX,U.pageY);else{const e4=l3(U),U2=.5*(U.pageX+e4.x),D4=.5*(U.pageY+e4.y);a3.set(U2,D4)}p3.subVectors(a3,Q4).multiplyScalar(V.rotateSpeed);const k1=V.domElement;R2(2*Math.PI*p3.x/k1.clientHeight),B4(2*Math.PI*p3.y/k1.clientHeight),Q4.copy(a3)}function B6(U){if(K.length===1)R4.set(U.pageX,U.pageY);else{const k1=l3(U),e4=.5*(U.pageX+k1.x),U2=.5*(U.pageY+k1.y);R4.set(e4,U2)}C4.subVectors(R4,y3).multiplyScalar(V.panSpeed),j3(C4.x,C4.y),y3.copy(R4)}function v6(U){const k1=l3(U),e4=U.pageX-k1.x,U2=U.pageY-k1.y,D4=Math.sqrt(e4*e4+U2*U2);N1.set(0,D4),$.set(0,Math.pow(N1.y/P4.y,V.zoomSpeed)),H6($.y),P4.copy(N1)}function i0(U){V.enableZoom&&v6(U),V.enablePan&&B6(U)}function H3(U){V.enableZoom&&v6(U),V.enableRotate&&F6(U)}function T3(U){V.enabled!==!1&&(K.length===0&&(V.domElement.setPointerCapture(U.pointerId),V.domElement.addEventListener("pointermove",q),V.domElement.addEventListener("pointerup",f1)),Q2(U),U.pointerType==="touch"?h2(U):n2(U))}function q(U){V.enabled!==!1&&(U.pointerType==="touch"?K2(U):r2(U))}function f1(U){x4(U),K.length===0&&(V.domElement.releasePointerCapture(U.pointerId),V.domElement.removeEventListener("pointermove",q),V.domElement.removeEventListener("pointerup",f1)),V.dispatchEvent(E2),t2=E1.NONE}function l1(U){x4(U)}function n2(U){let k1;switch(U.button){case 0:k1=V.mouseButtons.LEFT;break;case 1:k1=V.mouseButtons.MIDDLE;break;case 2:k1=V.mouseButtons.RIGHT;break;default:k1=-1}switch(k1){case m1.RsA.DOLLY:if(V.enableZoom===!1)return;n0(U),t2=E1.DOLLY;break;case m1.RsA.ROTATE:if(U.ctrlKey||U.metaKey||U.shiftKey){if(V.enablePan===!1)return;d6(U),t2=E1.PAN}else{if(V.enableRotate===!1)return;e0(U),t2=E1.ROTATE}break;case m1.RsA.PAN:if(U.ctrlKey||U.metaKey||U.shiftKey){if(V.enableRotate===!1)return;e0(U),t2=E1.ROTATE}else{if(V.enablePan===!1)return;d6(U),t2=E1.PAN}break;default:t2=E1.NONE}t2!==E1.NONE&&V.dispatchEvent(M2)}function r2(U){switch(t2){case E1.ROTATE:if(V.enableRotate===!1)return;U6(U);break;case E1.DOLLY:if(V.enableZoom===!1)return;I6(U);break;case E1.PAN:if(V.enablePan===!1)return;f6(U);break}}function s2(U){V.enabled===!1||V.enableZoom===!1||t2!==E1.NONE||(U.preventDefault(),V.dispatchEvent(M2),A6(U),V.dispatchEvent(E2))}function P2(U){V.enabled===!1||V.enablePan===!1||V6(U)}function h2(U){switch(u2(U),K.length){case 1:switch(V.touches.ONE){case m1.QmN.ROTATE:if(V.enableRotate===!1)return;P3(),t2=E1.TOUCH_ROTATE;break;case m1.QmN.PAN:if(V.enablePan===!1)return;a0(),t2=E1.TOUCH_PAN;break;default:t2=E1.NONE}break;case 2:switch(V.touches.TWO){case m1.QmN.DOLLY_PAN:if(V.enableZoom===!1&&V.enablePan===!1)return;m3(),t2=E1.TOUCH_DOLLY_PAN;break;case m1.QmN.DOLLY_ROTATE:if(V.enableZoom===!1&&V.enableRotate===!1)return;z3(),t2=E1.TOUCH_DOLLY_ROTATE;break;default:t2=E1.NONE}break;default:t2=E1.NONE}t2!==E1.NONE&&V.dispatchEvent(M2)}function K2(U){switch(u2(U),t2){case E1.TOUCH_ROTATE:if(V.enableRotate===!1)return;F6(U),V.update();break;case E1.TOUCH_PAN:if(V.enablePan===!1)return;B6(U),V.update();break;case E1.TOUCH_DOLLY_PAN:if(V.enableZoom===!1&&V.enablePan===!1)return;i0(U),V.update();break;case E1.TOUCH_DOLLY_ROTATE:if(V.enableZoom===!1&&V.enableRotate===!1)return;H3(U),V.update();break;default:t2=E1.NONE}}function A4(U){V.enabled!==!1&&U.preventDefault()}function Q2(U){K.push(U)}function x4(U){delete b1[U.pointerId];for(let k1=0;k1<K.length;k1++)if(K[k1].pointerId==U.pointerId){K.splice(k1,1);return}}function u2(U){let k1=b1[U.pointerId];k1===void 0&&(k1=new m1.FM8,b1[U.pointerId]=k1),k1.set(U.pageX,U.pageY)}function l3(U){const k1=U.pointerId===K[0].pointerId?K[1]:K[0];return b1[k1.pointerId]}V.domElement.addEventListener("contextmenu",A4),V.domElement.addEventListener("pointerdown",T3),V.domElement.addEventListener("pointercancel",l1),V.domElement.addEventListener("wheel",s2,{passive:!1}),this.update()}}class _1 extends null{constructor(i1,r4){super(i1,r4),this.screenSpacePanning=!1,this.mouseButtons.LEFT=MOUSE.PAN,this.mouseButtons.RIGHT=MOUSE.ROTATE,this.touches.ONE=TOUCH.PAN,this.touches.TWO=TOUCH.DOLLY_ROTATE}}}}]);