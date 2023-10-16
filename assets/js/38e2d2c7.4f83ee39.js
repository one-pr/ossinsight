"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[1695],{8106:(e,t,r)=>{r.d(t,{Z:()=>l});var n=r(67294),s=r(86010),i=r(95999),a=r(25108);const o={copyButtonCopied:"copyButtonCopied__QnY",copyButtonIcons:"copyButtonIcons_FhaS",copyButtonIcon:"copyButtonIcon_phi_",copyButtonSuccessIcon:"copyButtonSuccessIcon_FfTR"};function l(e){let{code:t,className:r}=e;const[l,p]=(0,n.useState)(!1),c=(0,n.useRef)(void 0),d=(0,n.useCallback)((()=>{var e;e=t,navigator.clipboard.writeText(e).catch(a.error),p(!0),c.current=window.setTimeout((()=>{p(!1)}),1e3)}),[t]);return(0,n.useEffect)((()=>()=>window.clearTimeout(c.current)),[]),n.createElement("button",{type:"button","aria-label":l?(0,i.I)({id:"theme.CodeBlock.copied",message:"Copied",description:"The copied button label on code blocks"}):(0,i.I)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),title:(0,i.I)({id:"theme.CodeBlock.copy",message:"Copy",description:"The copy button label on code blocks"}),className:(0,s.Z)("clean-btn",r,o.copyButton,l&&o.copyButtonCopied),onClick:d},n.createElement("span",{className:o.copyButtonIcons,"aria-hidden":"true"},n.createElement("svg",{className:o.copyButtonIcon,viewBox:"0 0 24 24"},n.createElement("path",{d:"M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"})),n.createElement("svg",{className:o.copyButtonSuccessIcon,viewBox:"0 0 24 24"},n.createElement("path",{d:"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"}))))}},99471:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>y,contentTitle:()=>m,default:()=>_,frontMatter:()=>u,metadata:()=>h,toc:()=>f});var n=r(87462),s=(r(67294),r(3905)),i=r(26389),a=r(94891),o=r(75190),l=r(47507),p=r(24310),c=r(63303),d=(r(75035),r(85162));const u={id:"list-pull-request-creators",title:"List pull request creators",description:"Querying the pull request creators list in a given repository.",sidebar_label:"List pull request creators",hide_title:!0,hide_table_of_contents:!0,api:{operationId:"list-pull-request-creators",tags:["Pull Request Creators"],description:"Querying the pull request creators list in a given repository.\n\nThis API provides multiple ways to sort the query results, for example:\n\n- `sort=prs-desc` (Default): Sorted in descending order based on `prs` field (the number of PRs they have contributed), meaning that the contributor with the most PRs is at the top.\n- `sort=first_pr_merged_at-desc`: Sorted in descending order based on `first_pr_merged_at` field (the time of their first merged PR), which means you can got a list of new code contributors of the repository.\n  ",parameters:[{schema:{type:"string",enum:["login","prs","prs-desc","first_pr_opened_at","first_pr_opened_at-desc","first_pr_merged_at","first_pr_merged_at-desc"],default:"prs-desc"},in:"query",name:"sort",required:!1,description:"Specify the field by which to sort the pull request creators list (values with a `-desc` suffix indicate descending sorting)"},{schema:{type:"boolean",default:!0},in:"query",name:"exclude_bots",required:!1,description:"Whether to exclude robot accounts (includes GitHub App and normal users whose username matches the pattern, for example: `ti-chi-bot`)."},{schema:{type:"integer",default:1},in:"query",name:"page",required:!1,description:"Page number of the results to fetch."},{schema:{type:"integer",default:30},in:"query",name:"page_size",required:!1,description:"The number of results per page (max 100)."},{schema:{type:"string"},example:"pingcap",in:"path",name:"owner",required:!0,description:"The owner of the repo."},{schema:{type:"string"},example:"tidb",in:"path",name:"repo",required:!0,description:"The name of the repo."}],responses:{200:{description:"Default Response",content:{"application/json":{schema:{type:"object",required:["type","data"],properties:{type:{type:"string",description:"The type of the endpoint.",enum:["sql_endpoint"],example:"sql_endpoint"},data:{type:"object",required:["columns","rows","result"],properties:{columns:{type:"array",items:{type:"object",required:["col","data_type","nullable"],properties:{col:{type:"string",description:"The name of the column in the query result."},data_type:{type:"string",enum:["CHAR","BIGINT","DECIMAL","INT","UNSIGNED BIGINT","TINYINT","TIMESTAMP","TEXT","VARCHAR","DATETIME","DOUBLE","FLOAT","DATE","TIME","YEAR","MEDIUMINT","SMALLINT","BIT","BINARY","VARBINARY","JSON","ENUM","SET","TINYTEXT","MEDIUMTEXT","LONGTEXT","TINYBLOB","MEDIUMBLOB","BLOB","LONGBLOB"],description:"The data type of the column."},nullable:{type:"boolean",description:"Whether the column is nullable."}},additionalProperties:!0},example:[{col:"id",data_type:"INT",nullable:!1},{col:"login",data_type:"VARCHAR",nullable:!1},{col:"name",data_type:"VARCHAR",nullable:!1},{col:"prs",data_type:"INT",nullable:!0},{col:"first_pr_opened_at",data_type:"DATETIME",nullable:!0},{col:"first_pr_merged_at",data_type:"DATETIME",nullable:!0}]},rows:{type:"array",items:{type:"object",properties:{id:{type:"string",description:"The ID of the pull request creator"},login:{type:"string",description:"The login (username) of the pull request creator"},name:{type:"string",description:"The name of the pull request creator"},prs:{type:"string",description:"The number of pull requests created by the pull request creator"},first_pr_opened_at:{type:"string",description:"The date of the first pull request created by the pull request creator"},first_pr_merged_at:{type:"string",description:"The date of the first merged pull request be merged into the repository"}},additionalProperties:!0},example:[{id:"1420062",login:"tiancaiamao",name:"",prs:"1300",first_pr_opened_at:"2016-06-20 14:08:39",first_pr_merged_at:"2016-06-21 07:45:27"},{id:"3427324",login:"hawkingrei",name:"Weizhen Wang",prs:"927",first_pr_opened_at:"2017-05-17 15:00:50",first_pr_merged_at:"2017-05-22 04:47:11"},{id:"26020263",login:"crazycs520",name:"crazycs",prs:"788",first_pr_opened_at:"2018-06-12 05:02:07",first_pr_merged_at:"2018-06-29 03:01:35"},{id:"891222",login:"coocood",name:"Evan Zhou",prs:"779",first_pr_opened_at:"2015-09-06 05:58:15",first_pr_merged_at:"2015-09-06 07:10:13"},{id:"4242506",login:"zimulala",name:"Lynn",prs:"774",first_pr_opened_at:"2015-09-06 10:51:19",first_pr_merged_at:"2015-09-06 12:32:33"}]},result:{type:"object",properties:{code:{type:"number",description:"The code of the response."},message:{type:"string",description:"The message of the response."},start_ms:{type:"number",description:"The start time of the query in milliseconds."},end_ms:{type:"number",description:"The end time of the query in milliseconds."},latency:{type:"string",description:"The latency of the query."},row_count:{type:"number",description:"The number of rows in the query result."},row_affect:{type:"number",description:"The number of rows affected by the query."},limit:{type:"number",description:"The maximum number of rows in the query result."},databases:{type:"array",description:"The databases used in the query.",items:{type:"string"}}},additionalProperties:!0,example:{code:200,message:"Query OK!",start_ms:1690957407469,end_ms:1690957407499,latency:"30ms",row_count:5,row_affect:0,limit:50,databases:["gharchive_dev"]}}}}}}}}}},method:"get",path:"/repos/{owner}/{repo}/pull_request_creators/",servers:[{url:"https://api.ossinsight.io/v1"}],info:{title:"OSSInsight Public API",description:'\nOSSInsight Public APIs (beta) provide a convenient way to access insight data for open source projects on GitHub, supplementing the existing GitHub API.\n\nIt provides data query in different dimensions, including:\n\n```mdx-code-block\nimport DocCardList from \'@theme/DocCardList\';\nimport {useCurrentSidebarCategory} from \'@docusaurus/theme-common\';\n\n<DocCardList items={useCurrentSidebarCategory().items.filter((item) => {\n    // Exclude Introduction and Showcase pages\n    return item.docId !== \'api/showcase\' && item.docId !== \'api/ossinsight-public-api\';\n})}/>\n```\n\n## Usage\n\nThe OSSInsight Public API is designed to follow the OpenAPI specification and can be accessed by initiating HTTP requests using the command line `curl` or web request libraries in different programming languages.\n\n### Base URL\n\nAll API requests are based on the following URL:\n\n```shell\nhttps://api.ossinsight.io/v1\n```\n\n### Authentication\n\nNo authentication is required for beta version of public APIs, but there are [rate limits](#rate-limit) for API requests.\n\n> Note:\n> We will add authentication way for larger API requests in future releases.\n\n### Rate Limit\n\nFor each IP address, the rate limit allows for up to **600 requests per hour**, which can be checked by the following fields in the Response Header to see the current usage:\n\n```\nx-ratelimit-limit: 600\nx-ratelimit-remaining: 599\n```\n\nIn addition, we have also set up a global rate limit of up to **1000 requests per minute**, which can be checked by the following fields in the Response Header to see the current usage:\n\n```\nx-ratelimit-limit-minute: 1000\nx-ratelimit-remaining-minute: 97\n```\n\n### Example\n\nFor example, if you want to know what countries the stargazers in the `pingcap/tidb` repository are located in, you can make a request using the curl command as follows:\n\n```shell\ncurl https://api.ossinsight.io/v1/repos/pingcap/tidb/stargazers/countries\n```\n\n<details>\n\n<summary>Example Response</summary>\n\n```json\n{\n  "type": "sql_endpoint",\n  "data": {\n    "columns": [\n      {\n        "col": "country_or_area",\n        "data_type": "CHAR",\n        "nullable": true\n      },\n      {\n        "col": "count",\n        "data_type": "BIGINT",\n        "nullable": true\n      },\n      {\n        "col": "percentage",\n        "data_type": "DECIMAL",\n        "nullable": true\n      }\n    ],\n    "rows": [\n      {\n        "count": "9183",\n        "country_or_area": "CN",\n        "percentage": "0.5936"\n      },\n      {\n        "count": "1542",\n        "country_or_area": "US",\n        "percentage": "0.0997"\n      },\n      {\n        "count": "471",\n        "country_or_area": "JP",\n        "percentage": "0.0304"\n      }\n    ],\n    "result": {\n      "code": 200,\n      "message": "Query OK!",\n      "start_ms": 1690351487809,\n      "end_ms": 1690351487930,\n      "latency": "121ms",\n      "row_count": 132,\n      "row_affect": 0,\n      "limit": 300,\n      "databases": [\n        "gharchive_dev"\n      ]\n    }\n  }\n}\n```\n\n</details>\n\n## Request New API \n\nIf the API in the documentation does not meet your query requirements, please contact us as follows:\n\n- Email us at ossinsight@pingcap.com\n- Open an issue in the [OSSInsight GitHub repository](https://github.com/pingcap/ossinsight/issues/new?assignees=&labels=type%2Ffeature&projects=&template=feature_request.md&title=New%20API)\n',version:"v1beta"},postman:{name:"List pull request creators",description:{content:"Querying the pull request creators list in a given repository.\n\nThis API provides multiple ways to sort the query results, for example:\n\n- `sort=prs-desc` (Default): Sorted in descending order based on `prs` field (the number of PRs they have contributed), meaning that the contributor with the most PRs is at the top.\n- `sort=first_pr_merged_at-desc`: Sorted in descending order based on `first_pr_merged_at` field (the time of their first merged PR), which means you can got a list of new code contributors of the repository.\n  ",type:"text/plain"},url:{path:["repos",":owner",":repo","pull_request_creators",""],host:["{{baseUrl}}"],query:[{disabled:!1,description:{content:"Specify the field by which to sort the pull request creators list (values with a `-desc` suffix indicate descending sorting)",type:"text/plain"},key:"sort",value:""},{disabled:!1,description:{content:"Whether to exclude robot accounts (includes GitHub App and normal users whose username matches the pattern, for example: `ti-chi-bot`).",type:"text/plain"},key:"exclude_bots",value:""},{disabled:!1,description:{content:"Page number of the results to fetch.",type:"text/plain"},key:"page",value:""},{disabled:!1,description:{content:"The number of results per page (max 100).",type:"text/plain"},key:"page_size",value:""}],variable:[{disabled:!1,description:{content:"(Required) The owner of the repo.",type:"text/plain"},type:"any",value:"",key:"owner"},{disabled:!1,description:{content:"(Required) The name of the repo.",type:"text/plain"},type:"any",value:"",key:"repo"}]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"docs/api/ossinsight-public-api",custom_edit_url:null},m=void 0,h={unversionedId:"api/list-pull-request-creators",id:"api/list-pull-request-creators",title:"List pull request creators",description:"Querying the pull request creators list in a given repository.",source:"@site/docs/api/list-pull-request-creators.api.mdx",sourceDirName:"api",slug:"/api/list-pull-request-creators",permalink:"/docs/api/list-pull-request-creators",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"list-pull-request-creators",title:"List pull request creators",description:"Querying the pull request creators list in a given repository.",sidebar_label:"List pull request creators",hide_title:!0,hide_table_of_contents:!0,api:{operationId:"list-pull-request-creators",tags:["Pull Request Creators"],description:"Querying the pull request creators list in a given repository.\n\nThis API provides multiple ways to sort the query results, for example:\n\n- `sort=prs-desc` (Default): Sorted in descending order based on `prs` field (the number of PRs they have contributed), meaning that the contributor with the most PRs is at the top.\n- `sort=first_pr_merged_at-desc`: Sorted in descending order based on `first_pr_merged_at` field (the time of their first merged PR), which means you can got a list of new code contributors of the repository.\n  ",parameters:[{schema:{type:"string",enum:["login","prs","prs-desc","first_pr_opened_at","first_pr_opened_at-desc","first_pr_merged_at","first_pr_merged_at-desc"],default:"prs-desc"},in:"query",name:"sort",required:!1,description:"Specify the field by which to sort the pull request creators list (values with a `-desc` suffix indicate descending sorting)"},{schema:{type:"boolean",default:!0},in:"query",name:"exclude_bots",required:!1,description:"Whether to exclude robot accounts (includes GitHub App and normal users whose username matches the pattern, for example: `ti-chi-bot`)."},{schema:{type:"integer",default:1},in:"query",name:"page",required:!1,description:"Page number of the results to fetch."},{schema:{type:"integer",default:30},in:"query",name:"page_size",required:!1,description:"The number of results per page (max 100)."},{schema:{type:"string"},example:"pingcap",in:"path",name:"owner",required:!0,description:"The owner of the repo."},{schema:{type:"string"},example:"tidb",in:"path",name:"repo",required:!0,description:"The name of the repo."}],responses:{200:{description:"Default Response",content:{"application/json":{schema:{type:"object",required:["type","data"],properties:{type:{type:"string",description:"The type of the endpoint.",enum:["sql_endpoint"],example:"sql_endpoint"},data:{type:"object",required:["columns","rows","result"],properties:{columns:{type:"array",items:{type:"object",required:["col","data_type","nullable"],properties:{col:{type:"string",description:"The name of the column in the query result."},data_type:{type:"string",enum:["CHAR","BIGINT","DECIMAL","INT","UNSIGNED BIGINT","TINYINT","TIMESTAMP","TEXT","VARCHAR","DATETIME","DOUBLE","FLOAT","DATE","TIME","YEAR","MEDIUMINT","SMALLINT","BIT","BINARY","VARBINARY","JSON","ENUM","SET","TINYTEXT","MEDIUMTEXT","LONGTEXT","TINYBLOB","MEDIUMBLOB","BLOB","LONGBLOB"],description:"The data type of the column."},nullable:{type:"boolean",description:"Whether the column is nullable."}},additionalProperties:!0},example:[{col:"id",data_type:"INT",nullable:!1},{col:"login",data_type:"VARCHAR",nullable:!1},{col:"name",data_type:"VARCHAR",nullable:!1},{col:"prs",data_type:"INT",nullable:!0},{col:"first_pr_opened_at",data_type:"DATETIME",nullable:!0},{col:"first_pr_merged_at",data_type:"DATETIME",nullable:!0}]},rows:{type:"array",items:{type:"object",properties:{id:{type:"string",description:"The ID of the pull request creator"},login:{type:"string",description:"The login (username) of the pull request creator"},name:{type:"string",description:"The name of the pull request creator"},prs:{type:"string",description:"The number of pull requests created by the pull request creator"},first_pr_opened_at:{type:"string",description:"The date of the first pull request created by the pull request creator"},first_pr_merged_at:{type:"string",description:"The date of the first merged pull request be merged into the repository"}},additionalProperties:!0},example:[{id:"1420062",login:"tiancaiamao",name:"",prs:"1300",first_pr_opened_at:"2016-06-20 14:08:39",first_pr_merged_at:"2016-06-21 07:45:27"},{id:"3427324",login:"hawkingrei",name:"Weizhen Wang",prs:"927",first_pr_opened_at:"2017-05-17 15:00:50",first_pr_merged_at:"2017-05-22 04:47:11"},{id:"26020263",login:"crazycs520",name:"crazycs",prs:"788",first_pr_opened_at:"2018-06-12 05:02:07",first_pr_merged_at:"2018-06-29 03:01:35"},{id:"891222",login:"coocood",name:"Evan Zhou",prs:"779",first_pr_opened_at:"2015-09-06 05:58:15",first_pr_merged_at:"2015-09-06 07:10:13"},{id:"4242506",login:"zimulala",name:"Lynn",prs:"774",first_pr_opened_at:"2015-09-06 10:51:19",first_pr_merged_at:"2015-09-06 12:32:33"}]},result:{type:"object",properties:{code:{type:"number",description:"The code of the response."},message:{type:"string",description:"The message of the response."},start_ms:{type:"number",description:"The start time of the query in milliseconds."},end_ms:{type:"number",description:"The end time of the query in milliseconds."},latency:{type:"string",description:"The latency of the query."},row_count:{type:"number",description:"The number of rows in the query result."},row_affect:{type:"number",description:"The number of rows affected by the query."},limit:{type:"number",description:"The maximum number of rows in the query result."},databases:{type:"array",description:"The databases used in the query.",items:{type:"string"}}},additionalProperties:!0,example:{code:200,message:"Query OK!",start_ms:1690957407469,end_ms:1690957407499,latency:"30ms",row_count:5,row_affect:0,limit:50,databases:["gharchive_dev"]}}}}}}}}}},method:"get",path:"/repos/{owner}/{repo}/pull_request_creators/",servers:[{url:"https://api.ossinsight.io/v1"}],info:{title:"OSSInsight Public API",description:'\nOSSInsight Public APIs (beta) provide a convenient way to access insight data for open source projects on GitHub, supplementing the existing GitHub API.\n\nIt provides data query in different dimensions, including:\n\n```mdx-code-block\nimport DocCardList from \'@theme/DocCardList\';\nimport {useCurrentSidebarCategory} from \'@docusaurus/theme-common\';\n\n<DocCardList items={useCurrentSidebarCategory().items.filter((item) => {\n    // Exclude Introduction and Showcase pages\n    return item.docId !== \'api/showcase\' && item.docId !== \'api/ossinsight-public-api\';\n})}/>\n```\n\n## Usage\n\nThe OSSInsight Public API is designed to follow the OpenAPI specification and can be accessed by initiating HTTP requests using the command line `curl` or web request libraries in different programming languages.\n\n### Base URL\n\nAll API requests are based on the following URL:\n\n```shell\nhttps://api.ossinsight.io/v1\n```\n\n### Authentication\n\nNo authentication is required for beta version of public APIs, but there are [rate limits](#rate-limit) for API requests.\n\n> Note:\n> We will add authentication way for larger API requests in future releases.\n\n### Rate Limit\n\nFor each IP address, the rate limit allows for up to **600 requests per hour**, which can be checked by the following fields in the Response Header to see the current usage:\n\n```\nx-ratelimit-limit: 600\nx-ratelimit-remaining: 599\n```\n\nIn addition, we have also set up a global rate limit of up to **1000 requests per minute**, which can be checked by the following fields in the Response Header to see the current usage:\n\n```\nx-ratelimit-limit-minute: 1000\nx-ratelimit-remaining-minute: 97\n```\n\n### Example\n\nFor example, if you want to know what countries the stargazers in the `pingcap/tidb` repository are located in, you can make a request using the curl command as follows:\n\n```shell\ncurl https://api.ossinsight.io/v1/repos/pingcap/tidb/stargazers/countries\n```\n\n<details>\n\n<summary>Example Response</summary>\n\n```json\n{\n  "type": "sql_endpoint",\n  "data": {\n    "columns": [\n      {\n        "col": "country_or_area",\n        "data_type": "CHAR",\n        "nullable": true\n      },\n      {\n        "col": "count",\n        "data_type": "BIGINT",\n        "nullable": true\n      },\n      {\n        "col": "percentage",\n        "data_type": "DECIMAL",\n        "nullable": true\n      }\n    ],\n    "rows": [\n      {\n        "count": "9183",\n        "country_or_area": "CN",\n        "percentage": "0.5936"\n      },\n      {\n        "count": "1542",\n        "country_or_area": "US",\n        "percentage": "0.0997"\n      },\n      {\n        "count": "471",\n        "country_or_area": "JP",\n        "percentage": "0.0304"\n      }\n    ],\n    "result": {\n      "code": 200,\n      "message": "Query OK!",\n      "start_ms": 1690351487809,\n      "end_ms": 1690351487930,\n      "latency": "121ms",\n      "row_count": 132,\n      "row_affect": 0,\n      "limit": 300,\n      "databases": [\n        "gharchive_dev"\n      ]\n    }\n  }\n}\n```\n\n</details>\n\n## Request New API \n\nIf the API in the documentation does not meet your query requirements, please contact us as follows:\n\n- Email us at ossinsight@pingcap.com\n- Open an issue in the [OSSInsight GitHub repository](https://github.com/pingcap/ossinsight/issues/new?assignees=&labels=type%2Ffeature&projects=&template=feature_request.md&title=New%20API)\n',version:"v1beta"},postman:{name:"List pull request creators",description:{content:"Querying the pull request creators list in a given repository.\n\nThis API provides multiple ways to sort the query results, for example:\n\n- `sort=prs-desc` (Default): Sorted in descending order based on `prs` field (the number of PRs they have contributed), meaning that the contributor with the most PRs is at the top.\n- `sort=first_pr_merged_at-desc`: Sorted in descending order based on `first_pr_merged_at` field (the time of their first merged PR), which means you can got a list of new code contributors of the repository.\n  ",type:"text/plain"},url:{path:["repos",":owner",":repo","pull_request_creators",""],host:["{{baseUrl}}"],query:[{disabled:!1,description:{content:"Specify the field by which to sort the pull request creators list (values with a `-desc` suffix indicate descending sorting)",type:"text/plain"},key:"sort",value:""},{disabled:!1,description:{content:"Whether to exclude robot accounts (includes GitHub App and normal users whose username matches the pattern, for example: `ti-chi-bot`).",type:"text/plain"},key:"exclude_bots",value:""},{disabled:!1,description:{content:"Page number of the results to fetch.",type:"text/plain"},key:"page",value:""},{disabled:!1,description:{content:"The number of results per page (max 100).",type:"text/plain"},key:"page_size",value:""}],variable:[{disabled:!1,description:{content:"(Required) The owner of the repo.",type:"text/plain"},type:"any",value:"",key:"owner"},{disabled:!1,description:{content:"(Required) The name of the repo.",type:"text/plain"},type:"any",value:"",key:"repo"}]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"docs/api/ossinsight-public-api",custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"List organizations of stargazers",permalink:"/docs/api/list-organizations-of-issue-creators"},next:{title:"Pull request creators history",permalink:"/docs/api/pull-request-creators-history"}},y={},f=[{value:"List pull request creators",id:"list-pull-request-creators",level:2}],g={toc:f};function _(e){let{components:t,...r}=e;return(0,s.kt)("wrapper",(0,n.Z)({},g,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"list-pull-request-creators"},"List pull request creators"),(0,s.kt)("p",null,"Querying the pull request creators list in a given repository."),(0,s.kt)("p",null,"This API provides multiple ways to sort the query results, for example:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"sort=prs-desc")," (Default): Sorted in descending order based on ",(0,s.kt)("inlineCode",{parentName:"li"},"prs")," field (the number of PRs they have contributed), meaning that the contributor with the most PRs is at the top."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"sort=first_pr_merged_at-desc"),": Sorted in descending order based on ",(0,s.kt)("inlineCode",{parentName:"li"},"first_pr_merged_at")," field (the time of their first merged PR), which means you can got a list of new code contributors of the repository.")),(0,s.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"Path Parameters")),(0,s.kt)("div",null,(0,s.kt)("ul",null,(0,s.kt)(o.Z,{className:"paramsItem",param:{schema:{type:"string"},example:"pingcap",in:"path",name:"owner",required:!0,description:"The owner of the repo."},mdxType:"ParamsItem"}),(0,s.kt)(o.Z,{className:"paramsItem",param:{schema:{type:"string"},example:"tidb",in:"path",name:"repo",required:!0,description:"The name of the repo."},mdxType:"ParamsItem"})))),(0,s.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"Query Parameters")),(0,s.kt)("div",null,(0,s.kt)("ul",null,(0,s.kt)(o.Z,{className:"paramsItem",param:{schema:{type:"string",enum:["login","prs","prs-desc","first_pr_opened_at","first_pr_opened_at-desc","first_pr_merged_at","first_pr_merged_at-desc"],default:"prs-desc"},in:"query",name:"sort",required:!1,description:"Specify the field by which to sort the pull request creators list (values with a `-desc` suffix indicate descending sorting)"},mdxType:"ParamsItem"}),(0,s.kt)(o.Z,{className:"paramsItem",param:{schema:{type:"boolean",default:!0},in:"query",name:"exclude_bots",required:!1,description:"Whether to exclude robot accounts (includes GitHub App and normal users whose username matches the pattern, for example: `ti-chi-bot`)."},mdxType:"ParamsItem"}),(0,s.kt)(o.Z,{className:"paramsItem",param:{schema:{type:"integer",default:1},in:"query",name:"page",required:!1,description:"Page number of the results to fetch."},mdxType:"ParamsItem"}),(0,s.kt)(o.Z,{className:"paramsItem",param:{schema:{type:"integer",default:30},in:"query",name:"page_size",required:!1,description:"The number of results per page (max 100)."},mdxType:"ParamsItem"})))),(0,s.kt)("div",null,(0,s.kt)(i.Z,{mdxType:"ApiTabs"},(0,s.kt)(d.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"Default Response")),(0,s.kt)("div",null,(0,s.kt)(a.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,s.kt)(d.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,s.kt)(c.Z,{mdxType:"SchemaTabs"},(0,s.kt)(d.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{textAlign:"left"}},(0,s.kt)("strong",null,"Schema")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(p.Z,{collapsible:!1,name:"type",required:!0,schemaName:"string",qualifierMessage:"**Possible values:** [`sql_endpoint`]",schema:{type:"string",description:"The type of the endpoint.",enum:["sql_endpoint"],example:"sql_endpoint"},mdxType:"SchemaItem"}),(0,s.kt)(p.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{}},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"data"),(0,s.kt)("span",{style:{opacity:"0.6"}}," object"),(0,s.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," required")),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)(p.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{}},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"columns"),(0,s.kt)("span",{style:{opacity:"0.6"}}," object[]"),(0,s.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," required")),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)("li",null,(0,s.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,s.kt)(p.Z,{collapsible:!1,name:"col",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The name of the column in the query result."},mdxType:"SchemaItem"}),(0,s.kt)(p.Z,{collapsible:!1,name:"data_type",required:!0,schemaName:"string",qualifierMessage:"**Possible values:** [`CHAR`, `BIGINT`, `DECIMAL`, `INT`, `UNSIGNED BIGINT`, `TINYINT`, `TIMESTAMP`, `TEXT`, `VARCHAR`, `DATETIME`, `DOUBLE`, `FLOAT`, `DATE`, `TIME`, `YEAR`, `MEDIUMINT`, `SMALLINT`, `BIT`, `BINARY`, `VARBINARY`, `JSON`, `ENUM`, `SET`, `TINYTEXT`, `MEDIUMTEXT`, `LONGTEXT`, `TINYBLOB`, `MEDIUMBLOB`, `BLOB`, `LONGBLOB`]",schema:{type:"string",enum:["CHAR","BIGINT","DECIMAL","INT","UNSIGNED BIGINT","TINYINT","TIMESTAMP","TEXT","VARCHAR","DATETIME","DOUBLE","FLOAT","DATE","TIME","YEAR","MEDIUMINT","SMALLINT","BIT","BINARY","VARBINARY","JSON","ENUM","SET","TINYTEXT","MEDIUMTEXT","LONGTEXT","TINYBLOB","MEDIUMBLOB","BLOB","LONGBLOB"],description:"The data type of the column."},mdxType:"SchemaItem"}),(0,s.kt)(p.Z,{collapsible:!1,name:"nullable",required:!0,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean",description:"Whether the column is nullable."},mdxType:"SchemaItem"}),(0,s.kt)("li",null,(0,s.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))),(0,s.kt)(p.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{}},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"rows"),(0,s.kt)("span",{style:{opacity:"0.6"}}," object[]"),(0,s.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," required")),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)("li",null,(0,s.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,s.kt)(p.Z,{collapsible:!1,name:"id",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The ID of the pull request creator"},mdxType:"SchemaItem"}),(0,s.kt)(p.Z,{collapsible:!1,name:"login",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The login (username) of the pull request creator"},mdxType:"SchemaItem"}),(0,s.kt)(p.Z,{collapsible:!1,name:"name",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The name of the pull request creator"},mdxType:"SchemaItem"}),(0,s.kt)(p.Z,{collapsible:!1,name:"prs",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The number of pull requests created by the pull request creator"},mdxType:"SchemaItem"}),(0,s.kt)(p.Z,{collapsible:!1,name:"first_pr_opened_at",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The date of the first pull request created by the pull request creator"},mdxType:"SchemaItem"}),(0,s.kt)(p.Z,{collapsible:!1,name:"first_pr_merged_at",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The date of the first merged pull request be merged into the repository"},mdxType:"SchemaItem"}),(0,s.kt)("li",null,(0,s.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))),(0,s.kt)(p.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{}},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"result"),(0,s.kt)("span",{style:{opacity:"0.6"}}," object"),(0,s.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," required")),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)(p.Z,{collapsible:!1,name:"code",required:!1,schemaName:"number",qualifierMessage:void 0,schema:{type:"number",description:"The code of the response."},mdxType:"SchemaItem"}),(0,s.kt)(p.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The message of the response."},mdxType:"SchemaItem"}),(0,s.kt)(p.Z,{collapsible:!1,name:"start_ms",required:!1,schemaName:"number",qualifierMessage:void 0,schema:{type:"number",description:"The start time of the query in milliseconds."},mdxType:"SchemaItem"}),(0,s.kt)(p.Z,{collapsible:!1,name:"end_ms",required:!1,schemaName:"number",qualifierMessage:void 0,schema:{type:"number",description:"The end time of the query in milliseconds."},mdxType:"SchemaItem"}),(0,s.kt)(p.Z,{collapsible:!1,name:"latency",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The latency of the query."},mdxType:"SchemaItem"}),(0,s.kt)(p.Z,{collapsible:!1,name:"row_count",required:!1,schemaName:"number",qualifierMessage:void 0,schema:{type:"number",description:"The number of rows in the query result."},mdxType:"SchemaItem"}),(0,s.kt)(p.Z,{collapsible:!1,name:"row_affect",required:!1,schemaName:"number",qualifierMessage:void 0,schema:{type:"number",description:"The number of rows affected by the query."},mdxType:"SchemaItem"}),(0,s.kt)(p.Z,{collapsible:!1,name:"limit",required:!1,schemaName:"number",qualifierMessage:void 0,schema:{type:"number",description:"The maximum number of rows in the query result."},mdxType:"SchemaItem"}),(0,s.kt)(p.Z,{collapsible:!1,name:"databases",required:!1,schemaName:"string[]",qualifierMessage:void 0,schema:{type:"array",description:"The databases used in the query.",items:{type:"string"}},mdxType:"SchemaItem"}),(0,s.kt)(p.Z,{name:"property name*",required:!1,schemaName:"any",qualifierMessage:void 0,schema:{type:"object",properties:{code:{type:"number",description:"The code of the response."},message:{type:"string",description:"The message of the response."},start_ms:{type:"number",description:"The start time of the query in milliseconds."},end_ms:{type:"number",description:"The end time of the query in milliseconds."},latency:{type:"string",description:"The latency of the query."},row_count:{type:"number",description:"The number of rows in the query result."},row_affect:{type:"number",description:"The number of rows affected by the query."},limit:{type:"number",description:"The maximum number of rows in the query result."},databases:{type:"array",description:"The databases used in the query.",items:{type:"string"}}},additionalProperties:!0,example:{code:200,message:"Query OK!",start_ms:1690957407469,end_ms:1690957407499,latency:"30ms",row_count:5,row_affect:0,limit:50,databases:["gharchive_dev"]}},collapsible:!1,discriminator:!1,mdxType:"SchemaItem"})))))))))),(0,s.kt)(d.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,s.kt)(l.Z,{responseExample:'{\n  "type": "sql_endpoint",\n  "data": {\n    "columns": [\n      {\n        "col": "id",\n        "data_type": "INT",\n        "nullable": false\n      },\n      {\n        "col": "login",\n        "data_type": "VARCHAR",\n        "nullable": false\n      },\n      {\n        "col": "name",\n        "data_type": "VARCHAR",\n        "nullable": false\n      },\n      {\n        "col": "prs",\n        "data_type": "INT",\n        "nullable": true\n      },\n      {\n        "col": "first_pr_opened_at",\n        "data_type": "DATETIME",\n        "nullable": true\n      },\n      {\n        "col": "first_pr_merged_at",\n        "data_type": "DATETIME",\n        "nullable": true\n      }\n    ],\n    "rows": [\n      {\n        "id": "1420062",\n        "login": "tiancaiamao",\n        "name": "",\n        "prs": "1300",\n        "first_pr_opened_at": "2016-06-20 14:08:39",\n        "first_pr_merged_at": "2016-06-21 07:45:27"\n      },\n      {\n        "id": "3427324",\n        "login": "hawkingrei",\n        "name": "Weizhen Wang",\n        "prs": "927",\n        "first_pr_opened_at": "2017-05-17 15:00:50",\n        "first_pr_merged_at": "2017-05-22 04:47:11"\n      },\n      {\n        "id": "26020263",\n        "login": "crazycs520",\n        "name": "crazycs",\n        "prs": "788",\n        "first_pr_opened_at": "2018-06-12 05:02:07",\n        "first_pr_merged_at": "2018-06-29 03:01:35"\n      },\n      {\n        "id": "891222",\n        "login": "coocood",\n        "name": "Evan Zhou",\n        "prs": "779",\n        "first_pr_opened_at": "2015-09-06 05:58:15",\n        "first_pr_merged_at": "2015-09-06 07:10:13"\n      },\n      {\n        "id": "4242506",\n        "login": "zimulala",\n        "name": "Lynn",\n        "prs": "774",\n        "first_pr_opened_at": "2015-09-06 10:51:19",\n        "first_pr_merged_at": "2015-09-06 12:32:33"\n      }\n    ],\n    "result": {\n      "code": 200,\n      "message": "Query OK!",\n      "start_ms": 1690957407469,\n      "end_ms": 1690957407499,\n      "latency": "30ms",\n      "row_count": 5,\n      "row_affect": 0,\n      "limit": 50,\n      "databases": [\n        "gharchive_dev"\n      ]\n    }\n  }\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}_.isMDXComponent=!0}}]);