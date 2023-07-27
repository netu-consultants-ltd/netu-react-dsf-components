/*! For license information please see stories-Introduction-mdx.47d53272.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_netu_consultants_ltd_netu_react_dsf_components=self.webpackChunk_netu_consultants_ltd_netu_react_dsf_components||[]).push([[799],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./src/stories/Introduction.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>Introduction});__webpack_require__("./node_modules/react/index.js");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs");__webpack_require__.p,__webpack_require__.p,__webpack_require__.p,__webpack_require__.p,__webpack_require__.p,__webpack_require__.p,__webpack_require__.p,__webpack_require__.p;function _createMdxContent(props){const _components=Object.assign({h1:"h1",p:"p",a:"a",h2:"h2",pre:"pre",code:"code",h3:"h3",ul:"ul",li:"li"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{title:"Welcome"}),"\n",(0,jsx_runtime.jsx)(_components.h1,{id:"netu-react-dsf-components",children:"netu-react-dsf-components"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["An implementation of the ",(0,jsx_runtime.jsx)(_components.a,{href:"https://gov-cy.github.io/govcy-design-system-docs/",target:"_blank",rel:"nofollow noopener noreferrer",children:"GOV-CY Design System"})," in ",(0,jsx_runtime.jsx)(_components.a,{href:"https://reactjs.org",target:"_blank",rel:"nofollow noopener noreferrer",children:"React"})]}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"usage",children:"Usage"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-sh",children:"npm install govuk-react styled-components @types/styled-components --save\n"})}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:"import { Button } from 'govuk-react';\n\nconst MyComponent = ({ title }) => (\n  <div>\n    <h1>{title}</h1>\n    <Button />\n  </div>\n);\n"})}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["See the ",(0,jsx_runtime.jsx)(_components.a,{href:"https://govuk-react.github.io/govuk-react",target:"_blank",rel:"nofollow noopener noreferrer",children:"Storybook"})," for examples of all available components."]}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"related-sites-and-projects",children:"Related sites and projects"}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"gov-cy",children:"GOV-CY"}),"\n",(0,jsx_runtime.jsxs)(_components.ul,{children:["\n",(0,jsx_runtime.jsxs)(_components.li,{children:[(0,jsx_runtime.jsx)(_components.a,{href:"https://gov-cy.github.io/govcy-design-system-docs/",target:"_blank",rel:"nofollow noopener noreferrer",children:"GOV-CY Design System"})," (",(0,jsx_runtime.jsx)(_components.a,{href:"https://github.com/gov-cy/govcy-design-system",target:"_blank",rel:"nofollow noopener noreferrer",children:"GitHub Repo"}),")"]}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.a,{href:"https://dsf.dmrid.gov.cy/",target:"_blank",rel:"nofollow noopener noreferrer",children:"Digital Services Factory"})}),"\n"]})]})}const Introduction=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent(props)}},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);