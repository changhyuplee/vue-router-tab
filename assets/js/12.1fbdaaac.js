(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{383:function(e,t,a){"use strict";a.r(t);var r=a(27),v=Object(r.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"api-reference"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#api-reference"}},[e._v("#")]),e._v(" API Reference")]),e._v(" "),a("h2",{attrs:{id:"router-tab-props"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#router-tab-props"}},[e._v("#")]),e._v(" "),a("code",[e._v("<router-tab>")]),e._v(" Props")]),e._v(" "),a("h3",{attrs:{id:"tabs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tabs"}},[e._v("#")]),e._v(" tabs")]),e._v(" "),a("p",[a("strong",[e._v("Default Tabs")]),e._v(", The tabs displayed by default when entering the page. Only keep the first tab with the same "),a("code",[e._v("key")]),e._v(".")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("type: "),a("code",[e._v("Array <String | Object>")])]),e._v(" "),a("ul",[a("li",[a("p",[e._v("When the tab item type is "),a("code",[e._v("String")]),e._v(", it should be configured as the "),a("code",[e._v("fullPath")]),e._v(" of the route. The title, icon, prompt and other information of the tab will be obtained from the "),a("code",[e._v("router")]),e._v(" configuration of the corresponding page.")])]),e._v(" "),a("li",[a("p",[e._v("When the tab item type is "),a("code",[e._v("Object")]),e._v(":")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("to: The routing address of the tab is consistent with the "),a("code",[e._v("location")]),e._v(" parameter of "),a("code",[e._v("router.push")]),e._v(", which can be either "),a("code",[e._v("fullPath")]),e._v(" or a "),a("code",[e._v("location")]),e._v(" object - "),a("a",{attrs:{href:"https://router.vuejs.org/guide/essentials/navigation.html#router-push-location-oncomplete-onabort",target:"_blank",rel:"noopener noreferrer"}},[e._v("Reference"),a("OutboundLink")],1)])]),e._v(" "),a("li",[a("p",[e._v("title: Tab title, if the page has a dynamic title of "),a("code",[e._v("routeTab.title")]),e._v(", you can set the final dynamic title value here to avoid inconsistency with the title obtained from "),a("code",[e._v("router")]),e._v(" by default.")])]),e._v(" "),a("li",[a("p",[e._v("closable: Whether the tab is allowed to be closed, the default is "),a("code",[e._v("true")]),e._v(".")])])])])])]),e._v(" "),a("li",[a("p",[e._v("default: "),a("code",[e._v("[]")])])])]),e._v(" "),a("h3",{attrs:{id:"restore"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#restore"}},[e._v("#")]),e._v(" restore")]),e._v(" "),a("p",[a("strong",[e._v("Whether to restore the tabs after the browser refreshes")])]),e._v(" "),a("p",[e._v("If enabled, the previous tabs will be restored after the browser is refreshed.")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("type: "),a("code",[e._v("Boolean | String")])]),e._v(" "),a("ul",[a("li",[e._v("When the type is "),a("code",[e._v("String")]),e._v(" and is not empty, RouterTab will splice this value as the key of SessionStorage to store tabs information locally")])])]),e._v(" "),a("li",[a("p",[e._v("default: "),a("code",[e._v("false")])])])]),e._v(" "),a("h3",{attrs:{id:"restore-watch"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#restore-watch"}},[e._v("#")]),e._v(" restore-watch")]),e._v(" "),a("p",[a("strong",[e._v("Whether to watch the restore parameter to automatic restoration tab")])]),e._v(" "),a("p",[e._v("If enabled, RouterTab will watch the "),a("code",[e._v("restore")]),e._v(" option, and automatically restore the corresponding tabs of the local storage after the change.")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("type: "),a("code",[e._v("Boolean")])])]),e._v(" "),a("li",[a("p",[e._v("default: "),a("code",[e._v("false")])])])]),e._v(" "),a("h3",{attrs:{id:"default-page"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#default-page"}},[e._v("#")]),e._v(" default-page")]),e._v(" "),a("p",[e._v("Default page, the default path to redirect to after the last tab is closed or reset.")]),e._v(" "),a("p",[e._v("The program will automatically obtain the parent routing address of the tab as the default page.")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("type: "),a("code",[e._v("String | Object")]),e._v(" location path.")])]),e._v(" "),a("li",[a("p",[e._v("default: Parent routing path of the tab component.")])])]),e._v(" "),a("h3",{attrs:{id:"tab-transition"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tab-transition"}},[e._v("#")]),e._v(" tab-transition")]),e._v(" "),a("p",[e._v("The transition effect of tab, transition when adding and closing tabs")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("type: "),a("code",[e._v("String | Object")])]),e._v(" "),a("ul",[a("li",[a("p",[e._v("When the type is "),a("code",[e._v("String")]),e._v(", it should be configured as "),a("code",[e._v("transition.name")])])]),e._v(" "),a("li",[a("p",[e._v("When the type is "),a("code",[e._v("Object")]),e._v(", reference: "),a("a",{attrs:{href:"https://vuejs.org/v2/guide/transitions.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Vue - transition"),a("OutboundLink")],1)])])])]),e._v(" "),a("li",[a("p",[e._v("default: "),a("code",[e._v("'router-tab-zoom'")])])])]),e._v(" "),a("h3",{attrs:{id:"page-transition"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#page-transition"}},[e._v("#")]),e._v(" page-transition")]),e._v(" "),a("p",[e._v("The transition effect of tab page.")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("type: "),a("code",[e._v("String | Object")])]),e._v(" "),a("p",[e._v("Same as "),a("a",{attrs:{href:"#tab-transition"}},[a("code",[e._v("tab-transition")])])])]),e._v(" "),a("li",[a("p",[e._v("default: "),a("code",[e._v("{ name: 'router-tab-swap', mode: 'out-in' }")])])])]),e._v(" "),a("h3",{attrs:{id:"contextmenu"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#contextmenu"}},[e._v("#")]),e._v(" contextmenu")]),e._v(" "),a("p",[e._v("Custom contextmenu.")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("type: "),a("code",[e._v("Boolean | Array <String | Object>")])]),e._v(" "),a("ul",[a("li",[a("p",[e._v("Set to "),a("code",[e._v("false")]),e._v(" to disable contextmenu.")])]),e._v(" "),a("li",[a("p",[e._v("Set as an array to customize contextmenu.")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("When the menu item type is "),a("code",[e._v("String")]),e._v(", it matches the built-in menu item")])]),e._v(" "),a("li",[a("p",[e._v("When the menu item type is "),a("code",[e._v("Object")]),e._v(", if the "),a("code",[e._v("id")]),e._v(" matches the built-in menu item, the built-in menu will be extended; otherwise, it will be a custom menu.")])])])])])]),e._v(" "),a("li",[a("p",[e._v("default: "),a("code",[e._v("true")])])])]),e._v(" "),a("p",[a("strong",[e._v("Menu-item options")])]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("Attribute")]),e._v(" "),a("th",[e._v("Description")]),e._v(" "),a("th",[e._v("Type")]),e._v(" "),a("th",[e._v("Default")]),e._v(" "),a("th",[e._v("Required")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("id")]),e._v(" "),a("td",[e._v("id")]),e._v(" "),a("td",[a("code",[e._v("String")])]),e._v(" "),a("td",[e._v("-")]),e._v(" "),a("td",[e._v("✅")])]),e._v(" "),a("tr",[a("td",[e._v("title")]),e._v(" "),a("td",[e._v("text of menu-item")]),e._v(" "),a("td",[a("code",[e._v("String | Function(context)")])]),e._v(" "),a("td",[e._v("-")]),e._v(" "),a("td",[e._v("✅")])]),e._v(" "),a("tr",[a("td",[e._v("icon")]),e._v(" "),a("td",[e._v("icon of menu-item")]),e._v(" "),a("td",[a("code",[e._v("String | Function(context)")])]),e._v(" "),a("td",[e._v("-")]),e._v(" "),a("td",[e._v("-")])]),e._v(" "),a("tr",[a("td",[e._v("tips")]),e._v(" "),a("td",[e._v("tips of menu-item")]),e._v(" "),a("td",[a("code",[e._v("String | Function(context)")])]),e._v(" "),a("td",[e._v("-")]),e._v(" "),a("td",[e._v("-")])]),e._v(" "),a("tr",[a("td",[e._v("class")]),e._v(" "),a("td",[e._v("class")]),e._v(" "),a("td",[a("code",[e._v("String | Array | Object | Function(context)")])]),e._v(" "),a("td",[e._v("-")]),e._v(" "),a("td",[e._v("-")])]),e._v(" "),a("tr",[a("td",[e._v("visible")]),e._v(" "),a("td",[e._v("whether menu-item is visible")]),e._v(" "),a("td",[a("code",[e._v("Function(context) => String")])]),e._v(" "),a("td",[a("code",[e._v("true")])]),e._v(" "),a("td",[e._v("-")])]),e._v(" "),a("tr",[a("td",[e._v("enable")]),e._v(" "),a("td",[e._v("whether menu-item is enable")]),e._v(" "),a("td",[a("code",[e._v("Function(context) => String")])]),e._v(" "),a("td",[a("code",[e._v("true")])]),e._v(" "),a("td",[e._v("-")])]),e._v(" "),a("tr",[a("td",[e._v("handler")]),e._v(" "),a("td",[e._v("callback function when menu-item is clicked")]),e._v(" "),a("td",[a("code",[e._v("Function(context)")])]),e._v(" "),a("td",[e._v("-")]),e._v(" "),a("td",[e._v("✅")])])])]),e._v(" "),a("p",[e._v("Menu-item dynamic parameter "),a("code",[e._v("context")]),e._v(" description:")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("Attribute")]),e._v(" "),a("th",[e._v("Description")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("$tabs")]),e._v(" "),a("td",[e._v("Instance of RouterTab")])]),e._v(" "),a("tr",[a("td",[e._v("$menu")]),e._v(" "),a("td",[e._v("Instance of Menu-item")])]),e._v(" "),a("tr",[a("td",[e._v("target")]),e._v(" "),a("td",[e._v("Instance of the tab-item with the contextmenu activated")])]),e._v(" "),a("tr",[a("td",[e._v("data")]),e._v(" "),a("td",[e._v("data of contextmenu")])])])]),e._v(" "),a("h3",{attrs:{id:"dragsort"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dragsort"}},[e._v("#")]),e._v(" dragsort")]),e._v(" "),a("p",[e._v("Whether to support tab drag and drop sort.")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("type: "),a("code",[e._v("Boolean")])])]),e._v(" "),a("li",[a("p",[e._v("default: "),a("code",[e._v("true")])])])]),e._v(" "),a("h3",{attrs:{id:"append"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#append"}},[e._v("#")]),e._v(" append")]),e._v(" "),a("p",[e._v("Insert position of new tab.")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("type: "),a("code",[e._v("String")])])]),e._v(" "),a("li",[a("p",[e._v("available values: "),a("code",[e._v("'last'")]),e._v(" | "),a("code",[e._v("'next'")])])]),e._v(" "),a("li",[a("p",[e._v("default: "),a("code",[e._v("'last'")])])])]),e._v(" "),a("h3",{attrs:{id:"keep-last-tab"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#keep-last-tab"}},[e._v("#")]),e._v(" keep-last-tab")]),e._v(" "),a("p",[e._v("Whether to keep the last tab and cannot be closed.")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("type: "),a("code",[e._v("Boolean")])])]),e._v(" "),a("li",[a("p",[e._v("default: "),a("code",[e._v("true")])])])]),e._v(" "),a("h3",{attrs:{id:"keep-alive"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#keep-alive"}},[e._v("#")]),e._v(" keep-alive")]),e._v(" "),a("p",[e._v("Whether to cache tabs by default, it can be reset through the routing configuration "),a("code",[e._v("meta.keepAlive")]),e._v(".")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("type: "),a("code",[e._v("Boolean")])])]),e._v(" "),a("li",[a("p",[e._v("default: "),a("code",[e._v("true")])])])]),e._v(" "),a("h3",{attrs:{id:"max-alive"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#max-alive"}},[e._v("#")]),e._v(" max-alive")]),e._v(" "),a("p",[e._v("The maximum number of caches, set "),a("code",[e._v("0")]),e._v(" to not limit.")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("type: "),a("code",[e._v("Number")])])]),e._v(" "),a("li",[a("p",[e._v("default: "),a("code",[e._v("0")])])])]),e._v(" "),a("h3",{attrs:{id:"reuse"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#reuse"}},[e._v("#")]),e._v(" reuse")]),e._v(" "),a("p",[e._v("Whether to reuse routing components, can be reset through the routing configuration "),a("code",[e._v("meta.reuse")]),e._v(".")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("type: "),a("code",[e._v("Boolean")])])]),e._v(" "),a("li",[a("p",[e._v("default: "),a("code",[e._v("false")])])])]),e._v(" "),a("h3",{attrs:{id:"i18n"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#i18n"}},[e._v("#")]),e._v(" i18n")]),e._v(" "),a("p",[e._v("Tab internationalization function.")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("type: "),a("code",[e._v("Function")])])]),e._v(" "),a("li",[a("p",[e._v("parameters:")]),e._v(" "),a("ul",[a("li",[a("p",[a("code",[e._v("{String} [key]")]),e._v(": i18n "),a("code",[e._v("key")])])]),e._v(" "),a("li",[a("p",[a("code",[e._v("{Array} [params]")]),e._v(" List of parameters for internationalized fields")])])])]),e._v(" "),a("li",[a("p",[e._v("returns: "),a("code",[e._v("String")]),e._v(" Internationalized string")])])]),e._v(" "),a("h3",{attrs:{id:"lang"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#lang"}},[e._v("#")]),e._v(" lang")]),e._v(" "),a("p",[e._v("Component language.")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("type: "),a("code",[e._v("String | Object")])]),e._v(" "),a("ul",[a("li",[a("p",[e._v("If the type is "),a("code",[e._v("String")]),e._v(", it can be set to the built-in language "),a("code",[e._v("'zh'")]),e._v(" and "),a("code",[e._v("'en'")]),e._v(".")])]),e._v(" "),a("li",[a("p",[e._v("If the type is "),a("code",[e._v("Object")]),e._v(", you can set a custom language.")])])])]),e._v(" "),a("li",[a("p",[e._v("default: "),a("code",[e._v("'auto'")]),e._v(". Automatically recognize component language according to browser language.")])])]),e._v(" "),a("h2",{attrs:{id:"routertab-instance-properties"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#routertab-instance-properties"}},[e._v("#")]),e._v(" RouterTab Instance Properties")]),e._v(" "),a("p",[e._v("Can be accessed via "),a("code",[e._v("this.$tabs.[prop]")]),e._v(" inside your component.")]),e._v(" "),a("h3",{attrs:{id:"routertab-items"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#routertab-items"}},[e._v("#")]),e._v(" routerTab.items")]),e._v(" "),a("p",[e._v("Data of all tabs.")]),e._v(" "),a("h3",{attrs:{id:"routertab-activetab"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#routertab-activetab"}},[e._v("#")]),e._v(" routerTab.activeTab")]),e._v(" "),a("p",[e._v("Data of the currently activated tab.")]),e._v(" "),a("h3",{attrs:{id:"routertab-activetabid"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#routertab-activetabid"}},[e._v("#")]),e._v(" routerTab.activeTabId")]),e._v(" "),a("p",[e._v("Id of the currently activated tab.")]),e._v(" "),a("h2",{attrs:{id:"routertab-instance-methods"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#routertab-instance-methods"}},[e._v("#")]),e._v(" RouterTab Instance Methods")]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),a("p",[e._v("Inside the Vue instance, you can access the routing tab instance through "),a("code",[e._v("this.$tabs")]),e._v(". For example: call "),a("code",[e._v("this.$tabs.close()")]),e._v(" to close the current tab.")])]),e._v(" "),a("h3",{attrs:{id:"routertab-open"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#routertab-open"}},[e._v("#")]),e._v(" routerTab.open")]),e._v(" "),a("p",[e._v("Open tab with a specified path (new tab by default)")]),e._v(" "),a("ul",[a("li",[e._v("parameters:\n"),a("ul",[a("li",[a("code",[e._v("{String | Object} [path]")]),e._v(" A string path, or a location descriptor object - "),a("a",{attrs:{href:"https://router.vuejs.org/guide/essentials/navigation.html#router-push-location-oncomplete-onabort",target:"_blank",rel:"noopener noreferrer"}},[e._v("Reference"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("code",[e._v("{Boolean} [isReplace = false]")]),e._v(" Whether to open with "),a("code",[e._v("$router.replace")])]),e._v(" "),a("li",[a("code",[e._v("{Boolean} [refresh = true]")]),e._v(" Whether to refresh if the opened tab already exists (the previous tab page cache will be cleared)")])])])]),e._v(" "),a("h3",{attrs:{id:"routertab-close"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#routertab-close"}},[e._v("#")]),e._v(" routerTab.close")]),e._v(" "),a("p",[e._v("Close the target tab")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("call:")]),e._v(" "),a("ol",[a("li",[a("code",[e._v("this.$tabs.close({id, path, match, force, to, refresh})")])]),e._v(" "),a("li",[a("code",[e._v("this.$tabs.close(path, to)")])])])]),e._v(" "),a("li",[a("p",[e._v("parameters:")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("{String} [id]")]),e._v(" Close by tab "),a("code",[e._v("id")])]),e._v(" "),a("li",[a("code",[e._v("{location} [path]")]),e._v(" Close the tab through the routing "),a("code",[e._v("path")]),e._v(", if the "),a("code",[e._v("id")]),e._v(" and "),a("code",[e._v("path")]),e._v(" are not configured, close the current tab")]),e._v(" "),a("li",[a("code",[e._v("{Boolean} [match = true]")]),e._v(" When closed by "),a("code",[e._v("path")]),e._v(", whether to match the fullPath")]),e._v(" "),a("li",[a("code",[e._v("{Boolean} [force = true]")]),e._v(" Whether to force close")]),e._v(" "),a("li",[a("code",[e._v("{location} to")]),e._v(" The path to jump after closing, set "),a("code",[e._v("null")]),e._v(" to not jump")]),e._v(" "),a("li",[a("code",[e._v("{Boolean} [refresh = false]")]),e._v(" Whether to refresh if the opened tab already exists")])])])]),e._v(" "),a("h3",{attrs:{id:"routertab-refresh"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#routertab-refresh"}},[e._v("#")]),e._v(" routerTab.refresh")]),e._v(" "),a("p",[e._v("Refresh the tab of target routing location")]),e._v(" "),a("ul",[a("li",[e._v("parameters:\n"),a("ul",[a("li",[a("code",[e._v("{location} [path]")]),e._v(" A string path, or a location descriptor object - "),a("a",{attrs:{href:"https://router.vuejs.org/guide/essentials/navigation.html#router-push-location-oncomplete-onabort",target:"_blank",rel:"noopener noreferrer"}},[e._v("Reference"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("code",[e._v("{Boolean} [match = true]")]),e._v(" Whether to match fullPath without hash")]),e._v(" "),a("li",[a("code",[e._v("{Boolean} [force = true]")]),e._v(" Whether to force refresh")])])])]),e._v(" "),a("h3",{attrs:{id:"routertab-refreshall"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#routertab-refreshall"}},[e._v("#")]),e._v(" routerTab.refreshAll")]),e._v(" "),a("p",[e._v("Refresh all tabs")]),e._v(" "),a("ul",[a("li",[e._v("parameters:\n"),a("ul",[a("li",[a("code",[e._v("{Boolean} [force = false]")]),e._v(" If "),a("code",[e._v("force")]),e._v(" is set to "),a("code",[e._v("true")]),e._v(", the "),a("code",[e._v("beforePageLeave")]),e._v(" configuration of the page component is ignored and all tabs are forced to refresh")])])])]),e._v(" "),a("h3",{attrs:{id:"routertab-reset"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#routertab-reset"}},[e._v("#")]),e._v(" routerTab.reset")]),e._v(" "),a("p",[e._v("Reset tabs to initial state")]),e._v(" "),a("ul",[a("li",[e._v("parameters:\n"),a("ul",[a("li",[a("code",[e._v("{location} [to]")]),e._v(" The redirected location after reset, default to "),a("code",[e._v("default-page")])])])])]),e._v(" "),a("h3",{attrs:{id:"routertab-openiframe"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#routertab-openiframe"}},[e._v("#")]),e._v(" routerTab.openIframe")]),e._v(" "),a("p",[e._v("Open a iframe tab")]),e._v(" "),a("ul",[a("li",[e._v("parameters:\n"),a("ul",[a("li",[a("code",[e._v("{String} [src]")]),e._v(" The url of the Iframe tab to be opened")]),e._v(" "),a("li",[a("code",[e._v("{String} [title]")]),e._v(" Title of tab")]),e._v(" "),a("li",[a("code",[e._v("{String} [icon]")]),e._v(" Icon of tab")])])])]),e._v(" "),a("h3",{attrs:{id:"routertab-closeiframe"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#routertab-closeiframe"}},[e._v("#")]),e._v(" routerTab.closeIframe")]),e._v(" "),a("p",[e._v("Close the iframe tab")]),e._v(" "),a("ul",[a("li",[e._v("parameters:\n"),a("ul",[a("li",[a("code",[e._v("{String} [src]")]),e._v(" The url of the iframe tab to be closed")])])])]),e._v(" "),a("h3",{attrs:{id:"routertab-refreshiframe"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#routertab-refreshiframe"}},[e._v("#")]),e._v(" routerTab.refreshIframe")]),e._v(" "),a("p",[e._v("Refresh a iframe tab")]),e._v(" "),a("ul",[a("li",[e._v("parameters:\n"),a("ul",[a("li",[a("code",[e._v("{String} [src]")]),e._v(" The url of the iframe tab to be refreshed")])])])]),e._v(" "),a("h2",{attrs:{id:"routertab-events"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#routertab-events"}},[e._v("#")]),e._v(" RouterTab Events")]),e._v(" "),a("h3",{attrs:{id:"iframe-mounted"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#iframe-mounted"}},[e._v("#")]),e._v(" iframe-mounted")]),e._v(" "),a("p",[e._v("Iframe component mounted")]),e._v(" "),a("ul",[a("li",[e._v("parameters:\n"),a("ul",[a("li",[a("code",[e._v("{String} [url]")]),e._v(" The url of the iframe")]),e._v(" "),a("li",[a("code",[e._v("{HTMLIFrameElement} [iframe]")]),e._v(" Html element of iframe")])])])]),e._v(" "),a("h3",{attrs:{id:"iframe-loaded"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#iframe-loaded"}},[e._v("#")]),e._v(" iframe-loaded")]),e._v(" "),a("p",[e._v("iframe content loaded")]),e._v(" "),a("ul",[a("li",[e._v("parameters:\n"),a("ul",[a("li",[a("code",[e._v("{String} [url]")]),e._v(" The url of the iframe")]),e._v(" "),a("li",[a("code",[e._v("{HTMLIFrameElement} [iframe]")]),e._v(" Html element of iframe")])])])]),e._v(" "),a("h2",{attrs:{id:"routertab-slot"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#routertab-slot"}},[e._v("#")]),e._v(" RouterTab Slot")]),e._v(" "),a("p",[e._v("RouterTab supports personalization tab components through the following slots:")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("Slot Name")]),e._v(" "),a("th",[e._v("Scope")]),e._v(" "),a("th",[e._v("Description")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[a("code",[e._v("default")])]),e._v(" "),a("td",[a("code",[e._v("tab")])]),e._v(" "),a("td",[e._v("Tab item")])]),e._v(" "),a("tr",[a("td",[a("code",[e._v("start")])]),e._v(" "),a("td",[e._v("-")]),e._v(" "),a("td",[e._v("Tab bar start")])]),e._v(" "),a("tr",[a("td",[a("code",[e._v("end")])]),e._v(" "),a("td",[e._v("-")]),e._v(" "),a("td",[e._v("Tab bar end")])])])]),e._v(" "),a("h2",{attrs:{id:"router-alive-props"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#router-alive-props"}},[e._v("#")]),e._v(" "),a("code",[e._v("<router-alive>")]),e._v(" Props")]),e._v(" "),a("h3",{attrs:{id:"keep-alive-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#keep-alive-2"}},[e._v("#")]),e._v(" keep-alive")]),e._v(" "),a("p",[e._v("Whether to cache components by default, it can be reset through the routing configuration "),a("code",[e._v("meta.keepAlive")]),e._v(".")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("type: "),a("code",[e._v("Boolean")])])]),e._v(" "),a("li",[a("p",[e._v("default: "),a("code",[e._v("false")])])])]),e._v(" "),a("h3",{attrs:{id:"max"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#max"}},[e._v("#")]),e._v(" max")]),e._v(" "),a("p",[e._v("The maximum number of caches, set "),a("code",[e._v("0")]),e._v(" to not limit.")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("type: "),a("code",[e._v("Number")])])]),e._v(" "),a("li",[a("p",[e._v("default: "),a("code",[e._v("0")])])])]),e._v(" "),a("h3",{attrs:{id:"reuse-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#reuse-2"}},[e._v("#")]),e._v(" reuse")]),e._v(" "),a("p",[e._v("Whether to reuse routing components, can be reset through the routing configuration "),a("code",[e._v("meta.reuse")]),e._v(".")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("type: "),a("code",[e._v("Boolean")])])]),e._v(" "),a("li",[a("p",[e._v("default: "),a("code",[e._v("false")])])])]),e._v(" "),a("h3",{attrs:{id:"page-class"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#page-class"}},[e._v("#")]),e._v(" page-class")]),e._v(" "),a("p",[e._v("class of tab page.")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("type: "),a("code",[e._v("Array | Object | String")])])]),e._v(" "),a("li",[a("p",[e._v("default: "),a("code",[e._v("router-alive-page")])])])]),e._v(" "),a("h3",{attrs:{id:"transition"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#transition"}},[e._v("#")]),e._v(" transition")]),e._v(" "),a("p",[e._v("The transition effect of routing components")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("type: "),a("code",[e._v("String | Object")])]),e._v(" "),a("p",[e._v("Same as "),a("a",{attrs:{href:"#tab-transition"}},[a("code",[e._v("tab-transition")])])])])]),e._v(" "),a("h2",{attrs:{id:"routeralive-instance-methods"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#routeralive-instance-methods"}},[e._v("#")]),e._v(" RouterAlive Instance Methods")]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),a("p",[e._v("In the sub-component of RouterAlive, you can access the RouterAlive instance through "),a("code",[e._v("inject: ['RouterAlive']")]),e._v(".\nThen call "),a("code",[e._v("this.RouterAlive.refresh()")]),e._v(" to refresh the component.")])]),e._v(" "),a("h3",{attrs:{id:"routeralive-remove"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#routeralive-remove"}},[e._v("#")]),e._v(" routerAlive.remove")]),e._v(" "),a("p",[e._v("Remove the cache of component.")]),e._v(" "),a("ul",[a("li",[e._v("parameters:\n"),a("ul",[a("li",[a("code",[e._v("{String} [key]")]),e._v(" The cache key of the component to be removed, default to current component.")])])])]),e._v(" "),a("h3",{attrs:{id:"routeralive-refresh"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#routeralive-refresh"}},[e._v("#")]),e._v(" routerAlive.refresh")]),e._v(" "),a("p",[e._v("Refresh the cache of component.")]),e._v(" "),a("ul",[a("li",[e._v("parameters:\n"),a("ul",[a("li",[a("code",[e._v("{String} [key]")]),e._v(" The cache key of the component to be refreshed, default to current component.")])])])]),e._v(" "),a("h2",{attrs:{id:"routeralive-events"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#routeralive-events"}},[e._v("#")]),e._v(" RouterAlive Events")]),e._v(" "),a("h3",{attrs:{id:"ready"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ready"}},[e._v("#")]),e._v(" ready")]),e._v(" "),a("p",[e._v("RouterAlive component is ready.")]),e._v(" "),a("ul",[a("li",[e._v("parameters:\n"),a("ul",[a("li",[a("code",[e._v("{VueInstance} [alive]")]),e._v(" RouterAlive instance")])])])]),e._v(" "),a("h3",{attrs:{id:"change"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#change"}},[e._v("#")]),e._v(" change")]),e._v(" "),a("p",[e._v("Route cache changes.")]),e._v(" "),a("ul",[a("li",[e._v("parameters:\n"),a("ul",[a("li",[a("code",[e._v("{String} [type]")]),e._v(" type: "),a("code",[e._v("create")]),e._v(" | "),a("code",[e._v("update")])]),e._v(" "),a("li",[a("code",[e._v("{RouteMatch} [routeMatch]")]),e._v(" Route matching information")])])])]),e._v(" "),a("h2",{attrs:{id:"route-meta"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#route-meta"}},[e._v("#")]),e._v(" Route.meta")]),e._v(" "),a("p",[e._v("Through the "),a("code",[e._v("meta")]),e._v(" route, we can configure the title, icon, prompt and cache rule of a route tab.")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("Attribute")]),e._v(" "),a("th",[e._v("Description")]),e._v(" "),a("th",[e._v("Type")]),e._v(" "),a("th",[e._v("Default")]),e._v(" "),a("th",[e._v("Remark")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("key")]),e._v(" "),a("td",[e._v("Routing key")]),e._v(" "),a("td",[a("code",[e._v("String | Function")])]),e._v(" "),a("td",[e._v("-")]),e._v(" "),a("td",[e._v("Key that used for tab id and component cache"),a("br"),e._v("Built-in rules: "),a("code",[e._v("path")]),e._v(" | "),a("code",[e._v("fullPath")])])]),e._v(" "),a("tr",[a("td",[e._v("keepAlive")]),e._v(" "),a("td",[e._v("Whether to cache")]),e._v(" "),a("td",[a("code",[e._v("Boolean")])]),e._v(" "),a("td",[a("code",[e._v("true")])]),e._v(" "),a("td",[e._v("If disabled, the instance will be recreated every time the page is entered")])]),e._v(" "),a("tr",[a("td",[e._v("reuse")]),e._v(" "),a("td",[e._v("Whether to reuse components")]),e._v(" "),a("td",[a("code",[e._v("Boolean")])]),e._v(" "),a("td",[a("code",[e._v("false")])]),e._v(" "),a("td",[e._v("Under the same rules, whether to reuse the previous components after changing the "),a("code",[e._v("params")]),e._v(" or "),a("code",[e._v("query")]),e._v(" of the same route")])]),e._v(" "),a("tr",[a("td",[e._v("title")]),e._v(" "),a("td",[e._v("Title of tab")]),e._v(" "),a("td",[a("code",[e._v("String | Array")])]),e._v(" "),a("td",[a("code",[e._v("'Untitled'")])]),e._v(" "),a("td",[e._v("I18n support"),a("br"),e._v("Reference: "),a("RouterLink",{attrs:{to:"/guide/custom/i18n.html"}},[e._v("Guide - I18n")])],1)]),e._v(" "),a("tr",[a("td",[e._v("tips")]),e._v(" "),a("td",[e._v("Mouse hover tips")]),e._v(" "),a("td",[a("code",[e._v("String | Array")])]),e._v(" "),a("td",[e._v("Same as "),a("code",[e._v("title")])]),e._v(" "),a("td",[e._v("I18n support"),a("br"),e._v("Reference: "),a("RouterLink",{attrs:{to:"/guide/custom/i18n.html"}},[e._v("Guide - I18n")])],1)]),e._v(" "),a("tr",[a("td",[e._v("icon")]),e._v(" "),a("td",[e._v("Icon of tab")]),e._v(" "),a("td",[a("code",[e._v("String")])]),e._v(" "),a("td",[e._v("-")]),e._v(" "),a("td",[e._v("-")])]),e._v(" "),a("tr",[a("td",[e._v("tabClass")]),e._v(" "),a("td",[e._v("Class of tab")]),e._v(" "),a("td",[a("code",[e._v("String")])]),e._v(" "),a("td",[e._v("-")]),e._v(" "),a("td",[e._v("-")])]),e._v(" "),a("tr",[a("td",[e._v("closable")]),e._v(" "),a("td",[e._v("Whether the tab can be closed")]),e._v(" "),a("td",[a("code",[e._v("Boolean")])]),e._v(" "),a("td",[a("code",[e._v("true")])]),e._v(" "),a("td",[e._v("-")])])])]),e._v(" "),a("h2",{attrs:{id:"extends"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#extends"}},[e._v("#")]),e._v(" Extends")]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("Description")]),e._v(" "),a("p",[a("code",[e._v("vm")]),e._v(": Instance of vue component.")]),e._v(" "),a("p",[a("code",[e._v("pageVm")]),e._v(": Instance of page component loaded through RouterTab.")])]),e._v(" "),a("h3",{attrs:{id:"beforepageleave"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#beforepageleave"}},[e._v("#")]),e._v(" beforePageLeave")]),e._v(" "),a("p",[e._v("Page leave confirmation.")]),e._v(" "),a("p",[e._v("Page component options, Same level configuration as "),a("code",[e._v("data")]),e._v(" and "),a("code",[e._v("methods")]),e._v(".")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("parameters:")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("{Object} tab")]),e._v(" Tab data")]),e._v(" "),a("li",[a("code",[e._v("{String} type")]),e._v(" Leave type:\n"),a("ul",[a("li",[a("code",[e._v("close")]),e._v(": tab be closed")]),e._v(" "),a("li",[a("code",[e._v("refresh")]),e._v(": tab be refreshed")]),e._v(" "),a("li",[a("code",[e._v("replace")]),e._v(": tab be replaced")]),e._v(" "),a("li",[a("code",[e._v("leave")]),e._v(": Route leave")]),e._v(" "),a("li",[a("code",[e._v("unload")]),e._v(": Browser refresh or close")])])])])]),e._v(" "),a("li",[a("p",[e._v("Type of return value:")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("{String}")]),e._v(" When the leave type is "),a("code",[e._v("unload")]),e._v(", provide a prompt message for the browser to leave.")]),e._v(" "),a("li",[a("code",[e._v("{Promise}")]),e._v(" Other types, "),a("code",[e._v("resolve")]),e._v(" to leave, "),a("code",[e._v("reject")]),e._v(" to prevent leaving")])])])]),e._v(" "),a("h3",{attrs:{id:"vm-tabs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vm-tabs"}},[e._v("#")]),e._v(" "),a("code",[e._v("vm.$tabs")])]),e._v(" "),a("p",[e._v("Instance of RouterTab.")]),e._v(" "),a("p",[e._v("To facilitate the call, RouterTab mounts the instance on "),a("code",[e._v("Vue.prototype")]),e._v(". Therefore, in all Vue components, you can access the instance of RouterTab through "),a("code",[e._v("this.$tabs")]),e._v(".")]),e._v(" "),a("h3",{attrs:{id:"pagevm-routetab"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pagevm-routetab"}},[e._v("#")]),e._v(" "),a("code",[e._v("pageVm.routeTab")])]),e._v(" "),a("p",[e._v("Current routing tab configuration.")]),e._v(" "),a("p",[e._v("RouterTab updates the title, icon, and prompt of the corresponding tab of the page by watching the "),a("code",[e._v("this.routeTab")]),e._v(" of the page component.")])])}),[],!1,null,null,null);t.default=v.exports}}]);