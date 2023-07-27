/*! For license information please see components-DSFFieldSet-DSFFieldSet-stories.fb1338e8.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_netu_consultants_ltd_netu_react_dsf_components=self.webpackChunk_netu_consultants_ltd_netu_react_dsf_components||[]).push([[21],{"./src/components/DSFFieldSet/DSFFieldSet.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{WithFormGroupAndCheckboxes:()=>WithFormGroupAndCheckboxes,WithHeaderLegend:()=>WithHeaderLegend,WithStringLegend:()=>WithStringLegend,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var _DSFFieldSet__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/DSFFieldSet/DSFFieldSet.tsx"),_DSFFormGroup_DSFFormGroup__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/DSFFormGroup/DSFFormGroup.tsx"),_DSFCheckbox_DSFCheckbox__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/DSFCheckbox/DSFCheckbox.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={component:_DSFFieldSet__WEBPACK_IMPORTED_MODULE_1__.Z,title:"form/DSFFieldSet",argTypes:{}},WithStringLegend=args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_DSFFieldSet__WEBPACK_IMPORTED_MODULE_1__.Z,{...args});WithStringLegend.displayName="WithStringLegend",WithStringLegend.args={legend:"This is a normal string legend"};const WithHeaderLegend=args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_DSFFieldSet__WEBPACK_IMPORTED_MODULE_1__.Z,{...args});WithHeaderLegend.displayName="WithHeaderLegend",WithHeaderLegend.args={legend:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("h1",{children:"This is a header legend"})};const WithFormGroupAndCheckboxes=args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_DSFFieldSet__WEBPACK_IMPORTED_MODULE_1__.Z,{...args,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_DSFFormGroup_DSFFormGroup__WEBPACK_IMPORTED_MODULE_2__.Z,{name:"nationality",hint:"Select at least one nationality",error:"Select at least one nationality",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_DSFCheckbox_DSFCheckbox__WEBPACK_IMPORTED_MODULE_3__.Z,{id:"nationality",hint:"Select this for Greece",children:"Greece"}),",",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_DSFCheckbox_DSFCheckbox__WEBPACK_IMPORTED_MODULE_3__.Z,{hint:"Select this for Austria",children:"Austria"}),","]})});WithFormGroupAndCheckboxes.displayName="WithFormGroupAndCheckboxes",WithFormGroupAndCheckboxes.args={legend:"Select your nationality"},WithStringLegend.parameters={...WithStringLegend.parameters,docs:{...WithStringLegend.parameters?.docs,source:{originalSource:"(args: React.JSX.IntrinsicAttributes & DSFFieldSetProps) => <DSFFieldSet {...args}></DSFFieldSet>",...WithStringLegend.parameters?.docs?.source}}},WithHeaderLegend.parameters={...WithHeaderLegend.parameters,docs:{...WithHeaderLegend.parameters?.docs,source:{originalSource:"(args: React.JSX.IntrinsicAttributes & DSFFieldSetProps) => <DSFFieldSet {...args}></DSFFieldSet>",...WithHeaderLegend.parameters?.docs?.source}}},WithFormGroupAndCheckboxes.parameters={...WithFormGroupAndCheckboxes.parameters,docs:{...WithFormGroupAndCheckboxes.parameters?.docs,source:{originalSource:'(args: React.JSX.IntrinsicAttributes & DSFFieldSetProps) => <DSFFieldSet {...args}>\r\n    <DSFFormGroup name="nationality" hint="Select at least one nationality" error="Select at least one nationality">\r\n      <DSFCheckbox id="nationality" hint="Select this for Greece">\r\n        Greece\r\n      </DSFCheckbox>\r\n      ,<DSFCheckbox hint="Select this for Austria">Austria</DSFCheckbox>,\r\n    </DSFFormGroup>\r\n  </DSFFieldSet>',...WithFormGroupAndCheckboxes.parameters?.docs?.source}}};const __namedExportsOrder=["WithStringLegend","WithHeaderLegend","WithFormGroupAndCheckboxes"]},"./src/components/DSFCheckbox/DSFCheckbox.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_DSFFormGroup_DSFFormGroup__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./src/resources/css/dsf.main.min.css"),__webpack_require__("./src/components/DSFFormGroup/DSFFormGroup.tsx")),_DSFHintText__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/DSFHintText/index.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react/jsx-runtime.js");const DSFCheckbox=(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((({children,hint,className,id,...props},ref)=>{const{error,errorId}=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_DSFFormGroup_DSFFormGroup__WEBPACK_IMPORTED_MODULE_2__.P);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div",{className:"govcy-form",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div",{className:"govcy-form-control",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("label",{className:"govcy-checkbox "+(className||""),children:[children,(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("input",{className:"govcy-checkbox-input",type:"checkbox",id,...error?{"aria-describedby":errorId}:{},...props,ref}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span",{className:"govcy-tickbox"}),hint&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_DSFHintText__WEBPACK_IMPORTED_MODULE_3__.Z,{className:"govcy-mt-2",children:hint})]})})})}));DSFCheckbox.displayName="Checkbox",DSFCheckbox.defaultProps={hint:void 0,className:void 0,id:void 0};const __WEBPACK_DEFAULT_EXPORT__=DSFCheckbox;try{Checkbox.displayName="Checkbox",Checkbox.__docgenInfo={description:"",displayName:"Checkbox",props:{id:{defaultValue:{value:"undefined"},description:"React Node to be displayed on the button, can be a string or any other react node",name:"id",required:!1,type:{name:"string"}},hint:{defaultValue:{value:"undefined"},description:"Hint text",name:"hint",required:!1,type:{name:"ReactNode"}},children:{defaultValue:null,description:"React Node to be displayed as label, can be a combination of compnents",name:"children",required:!0,type:{name:"ReactNode"}},className:{defaultValue:{value:"undefined"},description:"Custom style class to be added in the checkbox",name:"className",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/DSFCheckbox/DSFCheckbox.tsx#Checkbox"]={docgenInfo:Checkbox.__docgenInfo,name:"Checkbox",path:"src/components/DSFCheckbox/DSFCheckbox.tsx#Checkbox"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/DSFErrorText/DSFErrorText.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./src/resources/css/dsf.main.min.css");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const DSFErrorText=({id,children,className})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("p",{className:"govcy-input-error-msg "+className,id,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span",{className:"govcy-visually-hidden-error",children:"Error: "}),children]})});DSFErrorText.defaultProps={id:void 0},DSFErrorText.displayName="DSFErrorText";const __WEBPACK_DEFAULT_EXPORT__=DSFErrorText;try{DSFErrorText.displayName="DSFErrorText",DSFErrorText.__docgenInfo={description:"",displayName:"DSFErrorText",props:{id:{defaultValue:{value:"undefined"},description:"",name:"id",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/DSFErrorText/DSFErrorText.tsx#DSFErrorText"]={docgenInfo:DSFErrorText.__docgenInfo,name:"DSFErrorText",path:"src/components/DSFErrorText/DSFErrorText.tsx#DSFErrorText"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/DSFFieldSet/DSFFieldSet.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./src/resources/css/dsf.main.min.css");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const DSFFieldSet=({legend,children})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("fieldset",{className:"govcy-fieldset",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("legend",{className:"govcy-legend",children:legend}),children]});DSFFieldSet.displayName="DSFFieldSet",DSFFieldSet.defaultProps={legend:void 0,children:void 0},DSFFieldSet.displayName="DSFFieldSet";const __WEBPACK_DEFAULT_EXPORT__=DSFFieldSet;try{DSFFieldSet.displayName="DSFFieldSet",DSFFieldSet.__docgenInfo={description:"",displayName:"DSFFieldSet",props:{legend:{defaultValue:{value:"undefined"},description:"",name:"legend",required:!1,type:{name:"ReactNode"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/DSFFieldSet/DSFFieldSet.tsx#DSFFieldSet"]={docgenInfo:DSFFieldSet.__docgenInfo,name:"DSFFieldSet",path:"src/components/DSFFieldSet/DSFFieldSet.tsx#DSFFieldSet"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/DSFFormGroup/DSFFormGroup.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{P:()=>FormGroupContext,Z:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_DSFHintText_DSFHintText__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./src/resources/css/dsf.main.min.css"),__webpack_require__("./src/components/DSFHintText/DSFHintText.tsx")),_DSFErrorText_DSFErrorText__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/DSFErrorText/DSFErrorText.tsx"),_lib_utils__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./src/lib/utils.tsx"),_DSFFieldSet_DSFFieldSet__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/DSFFieldSet/DSFFieldSet.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/react/jsx-runtime.js");const FormGroupContext=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({error:"",errorId:"",childrenCount:0}),DSFFormGroup=({name,label,error,hint,children})=>{const errorId=(0,_lib_utils__WEBPACK_IMPORTED_MODULE_6__.i)(name),count=react__WEBPACK_IMPORTED_MODULE_0__.Children.count(children);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(FormGroupContext.Provider,{value:{error,errorId,childrenCount:count},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div",{className:"govcy-form",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_DSFFieldSet_DSFFieldSet__WEBPACK_IMPORTED_MODULE_4__.Z,{legend:label,children:[hint&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_DSFHintText_DSFHintText__WEBPACK_IMPORTED_MODULE_2__.Z,{className:"govcy-mt-2",children:hint}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div",{className:"govcy-form-control"+(error?" govcy-form-control-error":""),children:[!!error&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_DSFErrorText_DSFErrorText__WEBPACK_IMPORTED_MODULE_3__.Z,{id:errorId,children:error}),children]})]})})})};DSFFormGroup.displayName="DSFFormGroup",DSFFormGroup.displayName="DSFFormGroup",DSFFormGroup.defaultProps={error:void 0,hint:void 0,children:void 0};const __WEBPACK_DEFAULT_EXPORT__=DSFFormGroup;try{DSFFormGroup.displayName="DSFFormGroup",DSFFormGroup.__docgenInfo={description:"",displayName:"DSFFormGroup",props:{label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},error:{defaultValue:{value:"undefined"},description:"",name:"error",required:!1,type:{name:"string"}},hint:{defaultValue:{value:"undefined"},description:"",name:"hint",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/DSFFormGroup/DSFFormGroup.tsx#DSFFormGroup"]={docgenInfo:DSFFormGroup.__docgenInfo,name:"DSFFormGroup",path:"src/components/DSFFormGroup/DSFFormGroup.tsx#DSFFormGroup"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/DSFHintText/DSFHintText.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./src/resources/css/dsf.main.min.css");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const DSFHintText=({children,className,id})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span",{className:"govcy-hint "+className,id,children})});DSFHintText.displayName="DSFHintText";const __WEBPACK_DEFAULT_EXPORT__=DSFHintText;try{DSFHintText.displayName="DSFHintText",DSFHintText.__docgenInfo={description:"",displayName:"DSFHintText",props:{id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/DSFHintText/DSFHintText.tsx#DSFHintText"]={docgenInfo:DSFHintText.__docgenInfo,name:"DSFHintText",path:"src/components/DSFHintText/DSFHintText.tsx#DSFHintText"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/DSFHintText/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>_DSFHintText__WEBPACK_IMPORTED_MODULE_0__.Z});var _DSFHintText__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/DSFHintText/DSFHintText.tsx")},"./src/lib/utils.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{i:()=>getErrorId});const getErrorId=id=>id+"Error";try{getErrorId.displayName="getErrorId",getErrorId.__docgenInfo={description:"",displayName:"getErrorId",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/lib/utils.tsx#getErrorId"]={docgenInfo:getErrorId.__docgenInfo,name:"getErrorId",path:"src/lib/utils.tsx#getErrorId"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/css-loader/dist/runtime/api.js":module=>{module.exports=function(cssWithMappingToString){var list=[];return list.toString=function toString(){return this.map((function(item){var content="",needLayer=void 0!==item[5];return item[4]&&(content+="@supports (".concat(item[4],") {")),item[2]&&(content+="@media ".concat(item[2]," {")),needLayer&&(content+="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {")),content+=cssWithMappingToString(item),needLayer&&(content+="}"),item[2]&&(content+="}"),item[4]&&(content+="}"),content})).join("")},list.i=function i(modules,media,dedupe,supports,layer){"string"==typeof modules&&(modules=[[null,modules,void 0]]);var alreadyImportedModules={};if(dedupe)for(var k=0;k<this.length;k++){var id=this[k][0];null!=id&&(alreadyImportedModules[id]=!0)}for(var _k=0;_k<modules.length;_k++){var item=[].concat(modules[_k]);dedupe&&alreadyImportedModules[item[0]]||(void 0!==layer&&(void 0===item[5]||(item[1]="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {").concat(item[1],"}")),item[5]=layer),media&&(item[2]?(item[1]="@media ".concat(item[2]," {").concat(item[1],"}"),item[2]=media):item[2]=media),supports&&(item[4]?(item[1]="@supports (".concat(item[4],") {").concat(item[1],"}"),item[4]=supports):item[4]="".concat(supports)),list.push(item))}},list}},"./node_modules/css-loader/dist/runtime/getUrl.js":module=>{module.exports=function(url,options){return options||(options={}),url?(url=String(url.__esModule?url.default:url),/^['"].*['"]$/.test(url)&&(url=url.slice(1,-1)),options.hash&&(url+=options.hash),/["'() \t\n]|(%20)/.test(url)||options.needQuotes?'"'.concat(url.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):url):url}},"./node_modules/css-loader/dist/runtime/sourceMaps.js":module=>{module.exports=function(item){var content=item[1],cssMapping=item[3];if(!cssMapping)return content;if("function"==typeof btoa){var base64=btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping)))),data="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64),sourceMapping="/*# ".concat(data," */");return[content].concat([sourceMapping]).join("\n")}return[content].join("\n")}},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")},"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":module=>{var stylesInDOM=[];function getIndexByIdentifier(identifier){for(var result=-1,i=0;i<stylesInDOM.length;i++)if(stylesInDOM[i].identifier===identifier){result=i;break}return result}function modulesToDom(list,options){for(var idCountMap={},identifiers=[],i=0;i<list.length;i++){var item=list[i],id=options.base?item[0]+options.base:item[0],count=idCountMap[id]||0,identifier="".concat(id," ").concat(count);idCountMap[id]=count+1;var indexByIdentifier=getIndexByIdentifier(identifier),obj={css:item[1],media:item[2],sourceMap:item[3],supports:item[4],layer:item[5]};if(-1!==indexByIdentifier)stylesInDOM[indexByIdentifier].references++,stylesInDOM[indexByIdentifier].updater(obj);else{var updater=addElementStyle(obj,options);options.byIndex=i,stylesInDOM.splice(i,0,{identifier,updater,references:1})}identifiers.push(identifier)}return identifiers}function addElementStyle(obj,options){var api=options.domAPI(options);api.update(obj);return function updater(newObj){if(newObj){if(newObj.css===obj.css&&newObj.media===obj.media&&newObj.sourceMap===obj.sourceMap&&newObj.supports===obj.supports&&newObj.layer===obj.layer)return;api.update(obj=newObj)}else api.remove()}}module.exports=function(list,options){var lastIdentifiers=modulesToDom(list=list||[],options=options||{});return function update(newList){newList=newList||[];for(var i=0;i<lastIdentifiers.length;i++){var index=getIndexByIdentifier(lastIdentifiers[i]);stylesInDOM[index].references--}for(var newLastIdentifiers=modulesToDom(newList,options),_i=0;_i<lastIdentifiers.length;_i++){var _index=getIndexByIdentifier(lastIdentifiers[_i]);0===stylesInDOM[_index].references&&(stylesInDOM[_index].updater(),stylesInDOM.splice(_index,1))}lastIdentifiers=newLastIdentifiers}}},"./node_modules/style-loader/dist/runtime/insertBySelector.js":module=>{var memo={};module.exports=function insertBySelector(insert,style){var target=function getTarget(target){if(void 0===memo[target]){var styleTarget=document.querySelector(target);if(window.HTMLIFrameElement&&styleTarget instanceof window.HTMLIFrameElement)try{styleTarget=styleTarget.contentDocument.head}catch(e){styleTarget=null}memo[target]=styleTarget}return memo[target]}(insert);if(!target)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");target.appendChild(style)}},"./node_modules/style-loader/dist/runtime/insertStyleElement.js":module=>{module.exports=function insertStyleElement(options){var element=document.createElement("style");return options.setAttributes(element,options.attributes),options.insert(element,options.options),element}},"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=function setAttributesWithoutAttributes(styleElement){var nonce=__webpack_require__.nc;nonce&&styleElement.setAttribute("nonce",nonce)}},"./node_modules/style-loader/dist/runtime/styleDomAPI.js":module=>{module.exports=function domAPI(options){if("undefined"==typeof document)return{update:function update(){},remove:function remove(){}};var styleElement=options.insertStyleElement(options);return{update:function update(obj){!function apply(styleElement,options,obj){var css="";obj.supports&&(css+="@supports (".concat(obj.supports,") {")),obj.media&&(css+="@media ".concat(obj.media," {"));var needLayer=void 0!==obj.layer;needLayer&&(css+="@layer".concat(obj.layer.length>0?" ".concat(obj.layer):""," {")),css+=obj.css,needLayer&&(css+="}"),obj.media&&(css+="}"),obj.supports&&(css+="}");var sourceMap=obj.sourceMap;sourceMap&&"undefined"!=typeof btoa&&(css+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))))," */")),options.styleTagTransform(css,styleElement,options.options)}(styleElement,options,obj)},remove:function remove(){!function removeStyleElement(styleElement){if(null===styleElement.parentNode)return!1;styleElement.parentNode.removeChild(styleElement)}(styleElement)}}}},"./node_modules/style-loader/dist/runtime/styleTagTransform.js":module=>{module.exports=function styleTagTransform(css,styleElement){if(styleElement.styleSheet)styleElement.styleSheet.cssText=css;else{for(;styleElement.firstChild;)styleElement.removeChild(styleElement.firstChild);styleElement.appendChild(document.createTextNode(css))}}}}]);