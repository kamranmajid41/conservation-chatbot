(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function t(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(o){if(o.ep)return;o.ep=!0;const a=t(o);fetch(o.href,a)}})();var H;(function(e){e.STRING="STRING",e.NUMBER="NUMBER",e.INTEGER="INTEGER",e.BOOLEAN="BOOLEAN",e.ARRAY="ARRAY",e.OBJECT="OBJECT"})(H||(H={}));/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var U;(function(e){e.LANGUAGE_UNSPECIFIED="language_unspecified",e.PYTHON="python"})(U||(U={}));var F;(function(e){e.OUTCOME_UNSPECIFIED="outcome_unspecified",e.OUTCOME_OK="outcome_ok",e.OUTCOME_FAILED="outcome_failed",e.OUTCOME_DEADLINE_EXCEEDED="outcome_deadline_exceeded"})(F||(F={}));/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $=["user","model","function","system"];var B;(function(e){e.HARM_CATEGORY_UNSPECIFIED="HARM_CATEGORY_UNSPECIFIED",e.HARM_CATEGORY_HATE_SPEECH="HARM_CATEGORY_HATE_SPEECH",e.HARM_CATEGORY_SEXUALLY_EXPLICIT="HARM_CATEGORY_SEXUALLY_EXPLICIT",e.HARM_CATEGORY_HARASSMENT="HARM_CATEGORY_HARASSMENT",e.HARM_CATEGORY_DANGEROUS_CONTENT="HARM_CATEGORY_DANGEROUS_CONTENT"})(B||(B={}));var Y;(function(e){e.HARM_BLOCK_THRESHOLD_UNSPECIFIED="HARM_BLOCK_THRESHOLD_UNSPECIFIED",e.BLOCK_LOW_AND_ABOVE="BLOCK_LOW_AND_ABOVE",e.BLOCK_MEDIUM_AND_ABOVE="BLOCK_MEDIUM_AND_ABOVE",e.BLOCK_ONLY_HIGH="BLOCK_ONLY_HIGH",e.BLOCK_NONE="BLOCK_NONE"})(Y||(Y={}));var K;(function(e){e.HARM_PROBABILITY_UNSPECIFIED="HARM_PROBABILITY_UNSPECIFIED",e.NEGLIGIBLE="NEGLIGIBLE",e.LOW="LOW",e.MEDIUM="MEDIUM",e.HIGH="HIGH"})(K||(K={}));var q;(function(e){e.BLOCKED_REASON_UNSPECIFIED="BLOCKED_REASON_UNSPECIFIED",e.SAFETY="SAFETY",e.OTHER="OTHER"})(q||(q={}));var T;(function(e){e.FINISH_REASON_UNSPECIFIED="FINISH_REASON_UNSPECIFIED",e.STOP="STOP",e.MAX_TOKENS="MAX_TOKENS",e.SAFETY="SAFETY",e.RECITATION="RECITATION",e.OTHER="OTHER"})(T||(T={}));var j;(function(e){e.TASK_TYPE_UNSPECIFIED="TASK_TYPE_UNSPECIFIED",e.RETRIEVAL_QUERY="RETRIEVAL_QUERY",e.RETRIEVAL_DOCUMENT="RETRIEVAL_DOCUMENT",e.SEMANTIC_SIMILARITY="SEMANTIC_SIMILARITY",e.CLASSIFICATION="CLASSIFICATION",e.CLUSTERING="CLUSTERING"})(j||(j={}));var z;(function(e){e.MODE_UNSPECIFIED="MODE_UNSPECIFIED",e.AUTO="AUTO",e.ANY="ANY",e.NONE="NONE"})(z||(z={}));/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m extends Error{constructor(n){super(`[GoogleGenerativeAI Error]: ${n}`)}}class S extends m{constructor(n,t){super(n),this.response=t}}class te extends m{constructor(n,t,s,o){super(n),this.status=t,this.statusText=s,this.errorDetails=o}}class w extends m{}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ce="https://generativelanguage.googleapis.com",de="v1beta",le="0.14.1",ue="genai-js";var C;(function(e){e.GENERATE_CONTENT="generateContent",e.STREAM_GENERATE_CONTENT="streamGenerateContent",e.COUNT_TOKENS="countTokens",e.EMBED_CONTENT="embedContent",e.BATCH_EMBED_CONTENTS="batchEmbedContents"})(C||(C={}));class he{constructor(n,t,s,o,a){this.model=n,this.task=t,this.apiKey=s,this.stream=o,this.requestOptions=a}toString(){var n,t;const s=((n=this.requestOptions)===null||n===void 0?void 0:n.apiVersion)||de;let a=`${((t=this.requestOptions)===null||t===void 0?void 0:t.baseUrl)||ce}/${s}/${this.model}:${this.task}`;return this.stream&&(a+="?alt=sse"),a}}function pe(e){const n=[];return e!=null&&e.apiClient&&n.push(e.apiClient),n.push(`${ue}/${le}`),n.join(" ")}async function fe(e){var n;const t=new Headers;t.append("Content-Type","application/json"),t.append("x-goog-api-client",pe(e.requestOptions)),t.append("x-goog-api-key",e.apiKey);let s=(n=e.requestOptions)===null||n===void 0?void 0:n.customHeaders;if(s){if(!(s instanceof Headers))try{s=new Headers(s)}catch(o){throw new w(`unable to convert customHeaders value ${JSON.stringify(s)} to Headers: ${o.message}`)}for(const[o,a]of s.entries()){if(o==="x-goog-api-key")throw new w(`Cannot set reserved header name ${o}`);if(o==="x-goog-api-client")throw new w(`Header name ${o} can only be set using the apiClient field`);t.append(o,a)}}return t}async function ge(e,n,t,s,o,a){const i=new he(e,n,t,s,a);return{url:i.toString(),fetchOptions:Object.assign(Object.assign({},Ee(a)),{method:"POST",headers:await fe(i),body:o})}}async function I(e,n,t,s,o,a,i=fetch){const{url:r,fetchOptions:d}=await ge(e,n,t,s,o,a);return me(r,d,i)}async function me(e,n,t=fetch){let s;try{s=await t(e,n)}catch(o){be(o,e)}return s.ok||await ve(s,e),s}function be(e,n){let t=e;throw e instanceof te||e instanceof w||(t=new m(`Error fetching from ${n.toString()}: ${e.message}`),t.stack=e.stack),t}async function ve(e,n){let t="",s;try{const o=await e.json();t=o.error.message,o.error.details&&(t+=` ${JSON.stringify(o.error.details)}`,s=o.error.details)}catch{}throw new te(`Error fetching from ${n.toString()}: [${e.status} ${e.statusText}] ${t}`,e.status,e.statusText,s)}function Ee(e){const n={};if((e==null?void 0:e.timeout)>=0){const t=new AbortController,s=t.signal;setTimeout(()=>t.abort(),e.timeout),n.signal=s}return n}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L(e){return e.text=()=>{if(e.candidates&&e.candidates.length>0){if(e.candidates.length>1&&console.warn(`This response had ${e.candidates.length} candidates. Returning text from the first candidate only. Access response.candidates directly to use the other candidates.`),O(e.candidates[0]))throw new S(`${v(e)}`,e);return ye(e)}else if(e.promptFeedback)throw new S(`Text not available. ${v(e)}`,e);return""},e.functionCall=()=>{if(e.candidates&&e.candidates.length>0){if(e.candidates.length>1&&console.warn(`This response had ${e.candidates.length} candidates. Returning function calls from the first candidate only. Access response.candidates directly to use the other candidates.`),O(e.candidates[0]))throw new S(`${v(e)}`,e);return console.warn("response.functionCall() is deprecated. Use response.functionCalls() instead."),V(e)[0]}else if(e.promptFeedback)throw new S(`Function call not available. ${v(e)}`,e)},e.functionCalls=()=>{if(e.candidates&&e.candidates.length>0){if(e.candidates.length>1&&console.warn(`This response had ${e.candidates.length} candidates. Returning function calls from the first candidate only. Access response.candidates directly to use the other candidates.`),O(e.candidates[0]))throw new S(`${v(e)}`,e);return V(e)}else if(e.promptFeedback)throw new S(`Function call not available. ${v(e)}`,e)},e}function ye(e){var n,t,s,o;const a=[];if(!((t=(n=e.candidates)===null||n===void 0?void 0:n[0].content)===null||t===void 0)&&t.parts)for(const i of(o=(s=e.candidates)===null||s===void 0?void 0:s[0].content)===null||o===void 0?void 0:o.parts)i.text&&a.push(i.text),i.executableCode&&a.push("\n```python\n"+i.executableCode.code+"\n```\n"),i.codeExecutionResult&&a.push("\n```\n"+i.codeExecutionResult.output+"\n```\n");return a.length>0?a.join(""):""}function V(e){var n,t,s,o;const a=[];if(!((t=(n=e.candidates)===null||n===void 0?void 0:n[0].content)===null||t===void 0)&&t.parts)for(const i of(o=(s=e.candidates)===null||s===void 0?void 0:s[0].content)===null||o===void 0?void 0:o.parts)i.functionCall&&a.push(i.functionCall);if(a.length>0)return a}const we=[T.RECITATION,T.SAFETY];function O(e){return!!e.finishReason&&we.includes(e.finishReason)}function v(e){var n,t,s;let o="";if((!e.candidates||e.candidates.length===0)&&e.promptFeedback)o+="Response was blocked",!((n=e.promptFeedback)===null||n===void 0)&&n.blockReason&&(o+=` due to ${e.promptFeedback.blockReason}`),!((t=e.promptFeedback)===null||t===void 0)&&t.blockReasonMessage&&(o+=`: ${e.promptFeedback.blockReasonMessage}`);else if(!((s=e.candidates)===null||s===void 0)&&s[0]){const a=e.candidates[0];O(a)&&(o+=`Candidate was blocked due to ${a.finishReason}`,a.finishMessage&&(o+=`: ${a.finishMessage}`))}return o}function _(e){return this instanceof _?(this.v=e,this):new _(e)}function Ce(e,n,t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var s=t.apply(e,n||[]),o,a=[];return o={},i("next"),i("throw"),i("return"),o[Symbol.asyncIterator]=function(){return this},o;function i(c){s[c]&&(o[c]=function(p){return new Promise(function(E,g){a.push([c,p,E,g])>1||r(c,p)})})}function r(c,p){try{d(s[c](p))}catch(E){l(a[0][3],E)}}function d(c){c.value instanceof _?Promise.resolve(c.value.v).then(f,h):l(a[0][2],c)}function f(c){r("next",c)}function h(c){r("throw",c)}function l(c,p){c(p),a.shift(),a.length&&r(a[0][0],a[0][1])}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const J=/^data\: (.*)(?:\n\n|\r\r|\r\n\r\n)/;function xe(e){const n=e.body.pipeThrough(new TextDecoderStream("utf8",{fatal:!0})),t=Ae(n),[s,o]=t.tee();return{stream:_e(s),response:Se(o)}}async function Se(e){const n=[],t=e.getReader();for(;;){const{done:s,value:o}=await t.read();if(s)return L(Ie(n));n.push(o)}}function _e(e){return Ce(this,arguments,function*(){const t=e.getReader();for(;;){const{value:s,done:o}=yield _(t.read());if(o)break;yield yield _(L(s))}})}function Ae(e){const n=e.getReader();return new ReadableStream({start(s){let o="";return a();function a(){return n.read().then(({value:i,done:r})=>{if(r){if(o.trim()){s.error(new m("Failed to parse stream"));return}s.close();return}o+=i;let d=o.match(J),f;for(;d;){try{f=JSON.parse(d[1])}catch{s.error(new m(`Error parsing JSON response: "${d[1]}"`));return}s.enqueue(f),o=o.substring(d[0].length),d=o.match(J)}return a()})}}})}function Ie(e){const n=e[e.length-1],t={promptFeedback:n==null?void 0:n.promptFeedback};for(const s of e){if(s.candidates)for(const o of s.candidates){const a=o.index;if(t.candidates||(t.candidates=[]),t.candidates[a]||(t.candidates[a]={index:o.index}),t.candidates[a].citationMetadata=o.citationMetadata,t.candidates[a].finishReason=o.finishReason,t.candidates[a].finishMessage=o.finishMessage,t.candidates[a].safetyRatings=o.safetyRatings,o.content&&o.content.parts){t.candidates[a].content||(t.candidates[a].content={role:o.content.role||"user",parts:[]});const i={};for(const r of o.content.parts)r.text&&(i.text=r.text),r.functionCall&&(i.functionCall=r.functionCall),r.executableCode&&(i.executableCode=r.executableCode),r.codeExecutionResult&&(i.codeExecutionResult=r.codeExecutionResult),Object.keys(i).length===0&&(i.text=""),t.candidates[a].content.parts.push(i)}}s.usageMetadata&&(t.usageMetadata=s.usageMetadata)}return t}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ne(e,n,t,s){const o=await I(n,C.STREAM_GENERATE_CONTENT,e,!0,JSON.stringify(t),s);return xe(o)}async function oe(e,n,t,s){const a=await(await I(n,C.GENERATE_CONTENT,e,!1,JSON.stringify(t),s)).json();return{response:L(a)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function se(e){if(e!=null){if(typeof e=="string")return{role:"system",parts:[{text:e}]};if(e.text)return{role:"system",parts:[e]};if(e.parts)return e.role?e:{role:"system",parts:e.parts}}}function A(e){let n=[];if(typeof e=="string")n=[{text:e}];else for(const t of e)typeof t=="string"?n.push({text:t}):n.push(t);return Re(n)}function Re(e){const n={role:"user",parts:[]},t={role:"function",parts:[]};let s=!1,o=!1;for(const a of e)"functionResponse"in a?(t.parts.push(a),o=!0):(n.parts.push(a),s=!0);if(s&&o)throw new m("Within a single message, FunctionResponse cannot be mixed with other type of part in the request for sending chat message.");if(!s&&!o)throw new m("No content is provided for sending chat message.");return s?n:t}function Oe(e,n){let t={};const s=e.generateContentRequest!=null;if(e.contents){if(s)throw new w("CountTokensRequest must have one of contents or generateContentRequest, not both.");t=Object.assign({},e)}else if(s)t=Object.assign({},e),t.generateContentRequest.model=n;else{const o=A(e);t.contents=[o]}return t}function W(e){let n;return e.contents?n=e:n={contents:[A(e)]},e.systemInstruction&&(n.systemInstruction=se(e.systemInstruction)),n}function Te(e){return typeof e=="string"||Array.isArray(e)?{content:A(e)}:e}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const X=["text","inlineData","functionCall","functionResponse","executableCode","codeExecutionResult"],Ne={user:["text","inlineData"],function:["functionResponse"],model:["text","functionCall","executableCode","codeExecutionResult"],system:["text"]};function ke(e){let n=!1;for(const t of e){const{role:s,parts:o}=t;if(!n&&s!=="user")throw new m(`First content should be with role 'user', got ${s}`);if(!$.includes(s))throw new m(`Each item should include role field. Got ${s} but valid roles are: ${JSON.stringify($)}`);if(!Array.isArray(o))throw new m("Content should have 'parts' property with an array of Parts");if(o.length===0)throw new m("Each Content should have at least one part");const a={text:0,inlineData:0,functionCall:0,functionResponse:0,fileData:0,executableCode:0,codeExecutionResult:0};for(const r of o)for(const d of X)d in r&&(a[d]+=1);const i=Ne[s];for(const r of X)if(!i.includes(r)&&a[r]>0)throw new m(`Content with role '${s}' can't contain '${r}' part`);n=!0}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Q="SILENT_ERROR";class Me{constructor(n,t,s,o){this.model=t,this.params=s,this.requestOptions=o,this._history=[],this._sendPromise=Promise.resolve(),this._apiKey=n,s!=null&&s.history&&(ke(s.history),this._history=s.history)}async getHistory(){return await this._sendPromise,this._history}async sendMessage(n){var t,s,o,a,i,r;await this._sendPromise;const d=A(n),f={safetySettings:(t=this.params)===null||t===void 0?void 0:t.safetySettings,generationConfig:(s=this.params)===null||s===void 0?void 0:s.generationConfig,tools:(o=this.params)===null||o===void 0?void 0:o.tools,toolConfig:(a=this.params)===null||a===void 0?void 0:a.toolConfig,systemInstruction:(i=this.params)===null||i===void 0?void 0:i.systemInstruction,cachedContent:(r=this.params)===null||r===void 0?void 0:r.cachedContent,contents:[...this._history,d]};let h;return this._sendPromise=this._sendPromise.then(()=>oe(this._apiKey,this.model,f,this.requestOptions)).then(l=>{var c;if(l.response.candidates&&l.response.candidates.length>0){this._history.push(d);const p=Object.assign({parts:[],role:"model"},(c=l.response.candidates)===null||c===void 0?void 0:c[0].content);this._history.push(p)}else{const p=v(l.response);p&&console.warn(`sendMessage() was unsuccessful. ${p}. Inspect response object for details.`)}h=l}),await this._sendPromise,h}async sendMessageStream(n){var t,s,o,a,i,r;await this._sendPromise;const d=A(n),f={safetySettings:(t=this.params)===null||t===void 0?void 0:t.safetySettings,generationConfig:(s=this.params)===null||s===void 0?void 0:s.generationConfig,tools:(o=this.params)===null||o===void 0?void 0:o.tools,toolConfig:(a=this.params)===null||a===void 0?void 0:a.toolConfig,systemInstruction:(i=this.params)===null||i===void 0?void 0:i.systemInstruction,cachedContent:(r=this.params)===null||r===void 0?void 0:r.cachedContent,contents:[...this._history,d]},h=ne(this._apiKey,this.model,f,this.requestOptions);return this._sendPromise=this._sendPromise.then(()=>h).catch(l=>{throw new Error(Q)}).then(l=>l.response).then(l=>{if(l.candidates&&l.candidates.length>0){this._history.push(d);const c=Object.assign({},l.candidates[0].content);c.role||(c.role="model"),this._history.push(c)}else{const c=v(l);c&&console.warn(`sendMessageStream() was unsuccessful. ${c}. Inspect response object for details.`)}}).catch(l=>{l.message!==Q&&console.error(l)}),h}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Pe(e,n,t,s){return(await I(n,C.COUNT_TOKENS,e,!1,JSON.stringify(t),s)).json()}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Le(e,n,t,s){return(await I(n,C.EMBED_CONTENT,e,!1,JSON.stringify(t),s)).json()}async function Ge(e,n,t,s){const o=t.requests.map(i=>Object.assign(Object.assign({},i),{model:n}));return(await I(n,C.BATCH_EMBED_CONTENTS,e,!1,JSON.stringify({requests:o}),s)).json()}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z{constructor(n,t,s){this.apiKey=n,t.model.includes("/")?this.model=t.model:this.model=`models/${t.model}`,this.generationConfig=t.generationConfig||{},this.safetySettings=t.safetySettings||[],this.tools=t.tools,this.toolConfig=t.toolConfig,this.systemInstruction=se(t.systemInstruction),this.cachedContent=t.cachedContent,this.requestOptions=s||{}}async generateContent(n){var t;const s=W(n);return oe(this.apiKey,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:(t=this.cachedContent)===null||t===void 0?void 0:t.name},s),this.requestOptions)}async generateContentStream(n){var t;const s=W(n);return ne(this.apiKey,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:(t=this.cachedContent)===null||t===void 0?void 0:t.name},s),this.requestOptions)}startChat(n){var t;return new Me(this.apiKey,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:(t=this.cachedContent)===null||t===void 0?void 0:t.name},n),this.requestOptions)}async countTokens(n){const t=Oe(n,this.model);return Pe(this.apiKey,this.model,t,this.requestOptions)}async embedContent(n){const t=Te(n);return Le(this.apiKey,this.model,t,this.requestOptions)}async batchEmbedContents(n){return Ge(this.apiKey,this.model,n,this.requestOptions)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class De{constructor(n){this.apiKey=n}getGenerativeModel(n,t){if(!n.model)throw new m("Must provide a model name. Example: genai.getGenerativeModel({ model: 'my-model-name' })");return new Z(this.apiKey,n,t)}getGenerativeModelFromCachedContent(n,t){if(!n.name)throw new w("Cached content must contain a `name` field.");if(!n.model)throw new w("Cached content must contain a `model` field.");const s={model:n.model,tools:n.tools,toolConfig:n.toolConfig,systemInstruction:n.systemInstruction,cachedContent:n};return new Z(this.apiKey,s,t)}}const He="AIzaSyAH8coSXAFQolBXBg_JdSPn1e6h2MQCTk0",P="gemini-1.5-flash";function Ue(e,n,t,s){const{name:o,species:a,conservationStatus:i,location:r}=e;let d=`You are ${o}, a ${a} who lives in ${r}. Your primary goal is to educate people and inspire them to act for conservation. You are ${i}.`;return t?d+=` Your personality is: "${t}".`:d+=` Adopt the charming and characteristic personality of a ${a}.`,s&&s.length>0&&(d+=` You know these key facts about yourself and your species: ${s.join(". ")}. Incorporate these naturally when relevant.`),d+=" Speak directly as the animal. Use a warm, engaging, and slightly playful tone. Be concise and keep your responses short, ideally under 2-3 sentences. Focus on high-impact information related to your life, threats, or how humans can help. Avoid verbose greetings or closings.",d+=`

User asks: "${n}"`,d+=`
${o} responds:`,d}function Fe({animal:e,photo:n,customPersonality:t,facts:s,userPromptHook:o}){if(!e||!e.name||!e.species||!e.conservationStatus||!e.location)throw new Error("Invalid 'animal' object provided. It must contain name, species, conservationStatus, and location.");n||console.warn("No 'photo' provided for the chatbot. The UI may not display an avatar.");const i=new De(He).getGenerativeModel({model:P});return{respondTo:async h=>{let l=h;o&&(l=o(h));const c=Ue(e,l,t,s);try{return(await(await i.generateContent({contents:[{role:"user",parts:[{text:c}]}],generationConfig:{maxOutputTokens:100,temperature:.7,topP:.9,topK:40}})).response).text()}catch(p){return console.error("Error communicating with Gemini API:",p),p.name==="GoogleGenerativeAIFetchError"&&p.message.includes("404")?(console.error(`Attempted model: "${P}"`),`I'm sorry, the AI model I need (${P}) isn't available or configured correctly. Please check your API key and try again.`):"I'm sorry, I'm having a little trouble communicating right now. Please try again later!"}},getAnimalName:()=>e.name,getAnimalPhoto:()=>n}}const $e=`
    /* Base styles for the main container of the chatbot */
    #conservation-chatbot-container {
        font-family: Arial, sans-serif;
        position: fixed; /* Positions the chat window relative to the viewport */
        bottom: 20px;    /* 20px from the bottom edge of the viewport */
        right: 20px;     /* 20px from the right edge of the viewport */
        width: 320px;    /* Fixed width for the chat window */
        height: 450px;   /* Fixed height for the chat window */
        border: 1px solid rgba(255, 255, 255, 0.3); /* Soft, semi-transparent white border for glass effect */
        border-radius: 12px; /* Rounded corners for a modern, glassy look */
        
        /* Core "Liquid Glass" effect properties */
        background: rgba(255, 255, 255, 0.2); /* Semi-transparent white background */
        backdrop-filter: blur(10px) saturate(180%); /* Blurs and saturates content behind the element */
        -webkit-backdrop-filter: blur(10px) saturate(180%); /* Vendor prefix for Safari compatibility */
        
        /* Box shadow for depth and an inner highlight */
        box-shadow: 0 4px 12px rgba(0,0,0,0.2), inset 0 0 0 1px rgba(255, 255, 255, 0.1);
        
        /* Initial state for animations (hidden and scaled down) */
        display: none; /* Starts hidden to prevent flash of unstyled content */
        flex-direction: column; /* Arranges content vertically when visible */
        overflow: hidden; /* Hides content that overflows the container */
        
        /* Transition properties for smooth expand/collapse animation */
        transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
        transform: translateY(100%) scale(0.8); /* Starts off-screen (bottom) and slightly smaller */
        opacity: 0; /* Starts fully transparent */
        pointer-events: none; /* Prevents interaction when hidden */
        z-index: 10000; /* Ensures the chatbot is on top of most other page content */
    }

    /* Styles for when the chat window is in its expanded (visible) state */
    #conservation-chatbot-container.expanded {
        display: flex; /* Makes the chat window visible (overrides display: none) */
        transform: translateY(0) scale(1); /* Moves into view and to full size */
        opacity: 1; /* Makes it fully opaque */
        pointer-events: all; /* Allows interaction */
    }

    /* Styles for the collapsed chatbot "launcher" button (the small circle) */
    #conservation-chatbot-launcher {
        position: fixed; /* Positions the launcher relative to the viewport */
        bottom: 20px;    /* Same bottom position as the chat window */
        right: 20px;     /* Same right position as the chat window */
        width: 60px;     /* Width of the circular launcher */
        height: 60px;    /* Height of the circular launcher */
        border-radius: 50%; /* Makes the element a perfect circle */
        background-color: #6a0dad; /* A solid purple background */
        display: flex;   /* Uses flexbox for centering content */
        justify-content: center; /* Centers content horizontally */
        align-items: center; /* Centers content vertically */
        cursor: pointer; /* Changes cursor to a pointer on hover, indicating interactivity */
        box-shadow: 0 2px 10px rgba(0,0,0,0.2); /* Shadow for a floating effect */
        transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out; /* Smooth hide/show animation */
        z-index: 10001; /* Ensures the launcher is above the chat window when collapsed */
    }

    /* Styles for when the launcher is hidden (chat window is open) */
    #conservation-chatbot-launcher.hidden {
        opacity: 0; /* Makes the launcher fully transparent */
        pointer-events: none; /* Prevents interaction when hidden */
        transform: scale(0.5); /* Shrinks the launcher slightly as it disappears */
    }

    /* Styles for the animal photo within the launcher button */
    #conservation-chatbot-launcher img {
        width: 50px; /* Size of the animal photo */
        height: 50px; /* Size of the animal photo */
        border-radius: 50%; /* Makes the photo circular */
        object-fit: cover; /* Ensures the image covers the area without distortion */
        border: 2px solid white; /* A white border around the photo */
    }

    /* Styles for the header section of the chat window */
    .conservation-chatbot-header {
        display: flex; /* Uses flexbox for layout */
        align-items: center; /* Aligns items vertically in the center */
        padding: 10px; /* Padding inside the header */
        background-color: rgba(106, 13, 173, 0.7); /* Semi-transparent purple header background */
        backdrop-filter: blur(5px); /* Blurs content behind the header */
        -webkit-backdrop-filter: blur(5px); /* Safari prefix */
        color: white; /* White text color for header content */
        border-top-left-radius: 10px; /* Matches container's border-radius */
        border-top-right-radius: 10px; /* Matches container's border-radius */
        justify-content: space-between; /* Distributes space between title group and close button */
        border-bottom: 1px solid rgba(255, 255, 255, 0.2); /* Subtle bottom border */
        box-shadow: 0 1px 0 rgba(255, 255, 255, 0.1) inset; /* Subtle inner shadow */
    }

    /* Groups the avatar and title in the header */
    .conservation-chatbot-header .title-group {
        display: flex;
        align-items: center;
    }

    /* Chatbot title (animal's name) in the header */
    .conservation-chatbot-header h3 {
        margin: 0; /* Removes default margin */
        font-size: 16px; /* Font size for the title */
        white-space: nowrap; /* Prevents text from wrapping */
        overflow: hidden; /* Hides overflowing text */
        text-overflow: ellipsis; /* Adds ellipsis if text overflows */
    }

    /* Avatar within the chat window header */
    .conservation-chatbot-avatar {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        object-fit: cover;
        margin-right: 10px;
        border: 2px solid rgba(255, 255, 255, 0.8); /* Slightly transparent white border */
    }

    /* Close button in the chat header */
    .conservation-chatbot-close-button {
        background: none; /* No background */
        border: none; /* No border */
        color: white; /* White 'x' symbol */
        font-size: 24px; /* Large font size for visibility */
        cursor: pointer; /* Pointer cursor on hover */
        line-height: 1; /* Ensures 'x' is vertically centered */
        margin-left: auto; /* Pushes button to the far right */
        padding: 0; /* Removes default padding */
    }

    .conservation-chatbot-close-button:hover {
        opacity: 0.8; /* Slight fade on hover */
    }

    /* Container for chat messages */
    .conservation-chatbot-messages {
        flex-grow: 1; /* Allows this section to take up available vertical space */
        overflow-y: auto; /* Enables vertical scrolling if messages overflow */
        padding: 10px; /* Padding inside the messages area */
        display: flex;
        flex-direction: column; /* Stacks messages vertically */
        gap: 8px; /* Space between individual messages */
        background-color: transparent; /* Makes background transparent to show backdrop-filter */
    }

    /* Base styles for individual chat messages */
    .conservation-chatbot-message {
        max-width: 75%; /* Limits message width to 75% of container */
        padding: 8px 12px; /* Padding inside the message bubble */
        border-radius: 18px; /* Rounded corners for message bubbles */
        word-wrap: break-word; /* Wraps long words */
        white-space: pre-wrap; /* Preserves whitespace and line breaks */
    }

    /* Styles for chatbot's messages */
    .conservation-chatbot-message.bot {
        align-self: flex-start; /* Aligns bot messages to the left */
        background-color: rgba(255, 255, 255, 0.4); /* Translucent white background for bot messages */
        color: #333; /* Darker text for readability on light background */
        border-bottom-left-radius: 4px; /* Adjusts one corner for a chat bubble look */
        border: 1px solid rgba(255, 255, 255, 0.5); /* Subtle border */
        box-shadow: 0 1px 2px rgba(0,0,0,0.05); /* Subtle shadow */
    }

    /* Styles for user's messages */
    .conservation-chatbot-message.user {
        align-self: flex-end; /* Aligns user messages to the right */
        background-color: rgba(106, 13, 173, 0.6); /* Translucent purple background for user messages */
        color: white; /* White text for contrast */
        border-bottom-right-radius: 4px; /* Adjusts one corner for a chat bubble look */
        border: 1px solid rgba(255, 255, 255, 0.3); /* Subtle border */
        box-shadow: 0 1px 2px rgba(0,0,0,0.05); /* Subtle shadow */
    }

    /* Container for the input field and send button */
    .conservation-chatbot-input-container {
        display: flex; /* Uses flexbox */
        flex-wrap: wrap; /* Allows items (prompts, input) to wrap to new lines */
        padding: 10px; /* Padding around input elements */
        border-top: 1px solid rgba(255, 255, 255, 0.3); /* Translucent top border */
        background-color: rgba(255, 255, 255, 0.3); /* Translucent input background */
        backdrop-filter: blur(5px); /* Applies blur to the input area too */
        -webkit-backdrop-filter: blur(5px); /* Safari prefix */
        border-bottom-left-radius: 8px; /* Matches container's border-radius */
        border-bottom-right-radius: 8px; /* Matches container's border-radius */
        gap: 8px; /* Space between flex items */
    }

    /* Container for default prompt buttons */
    .conservation-chatbot-default-prompts {
        width: 100%; /* Takes full width of its parent container */
        display: flex;
        flex-wrap: wrap; /* Allows buttons to wrap to new line */
        gap: 5px; /* Space between prompt buttons */
        justify-content: center; /* Centers the buttons horizontally */
        margin-bottom: 5px; /* Space below prompt buttons */
        transition: opacity 0.3s ease; /* For smooth disabling effect */
    }

    /* Styling for individual default prompt buttons */
    .conservation-chatbot-default-prompts .default-prompt-btn {
        background-color: rgba(106, 13, 173, 0.6); /* Translucent purple background */
        color: white; /* White text */
        border: 1px solid rgba(255, 255, 255, 0.3); /* Subtle border */
        border-radius: 15px; /* More rounded button shape */
        padding: 6px 12px; /* Padding inside buttons */
        font-size: 13px; /* Smaller font size */
        cursor: pointer; /* Pointer cursor on hover */
        transition: background-color 0.2s ease, opacity 0.2s ease; /* Smooth hover and disable transitions */
        flex-shrink: 0; /* Prevents buttons from shrinking */
        white-space: nowrap; /* Keeps button text on a single line */
    }

    .conservation-chatbot-default-prompts .default-prompt-btn:hover {
        background-color: #5a0aaa; /* Darker purple on hover */
    }

    .conservation-chatbot-default-prompts .default-prompt-btn:active {
        transform: translateY(1px); /* Simple press down effect on click */
    }

    .conservation-chatbot-default-prompts .default-prompt-btn:disabled {
        background-color: rgba(106, 13, 173, 0.3); /* Lighter, less opaque when disabled */
        cursor: not-allowed; /* Not-allowed cursor when disabled */
    }

    /* Chat input field */
    .conservation-chatbot-input {
        flex-grow: 1; /* Allows input to take up available horizontal space */
        padding: 8px; /* Padding inside the input field */
        border: 1px solid rgba(255, 255, 255, 0.5); /* Semi-transparent border */
        background-color: rgba(255, 255, 255, 0.6); /* Slightly more opaque background for input */
        color: #333; /* Dark text for input */
        border-radius: 20px; /* Rounded input field */
        margin-right: 8px; /* Space between input and send button */
        font-size: 14px; /* Font size for input text */
        outline: none; /* Removes outline on focus */
        min-width: 0; /* Allows the input field to shrink on smaller screens */
    }

    /* Placeholder text style for the input field */
    .conservation-chatbot-input::placeholder {
        color: rgba(0,0,0,0.5); /* Semi-transparent placeholder text */
    }

    /* Send button styles */
    .conservation-chatbot-send-button {
        background-color: #6a0dad; /* Purple background */
        color: white; /* White text */
        border: none; /* No border */
        border-radius: 20px; /* Rounded button */
        padding: 8px 15px; /* Padding inside the button */
        cursor: pointer; /* Pointer cursor on hover */
        font-size: 14px; /* Font size */
        transition: background-color 0.2s ease; /* Smooth hover effect */
        flex-shrink: 0; /* Prevents button from shrinking */
    }

    .conservation-chatbot-send-button:hover {
        background-color: #5a0aaa; /* Darker purple on hover */
    }

    .conservation-chatbot-send-button:disabled {
        background-color: #cccccc; /* Grey background when disabled */
        cursor: not-allowed; /* Not-allowed cursor when disabled */
    }

    /* Thinking Indicator (typing animation) */
    .conservation-chatbot-message.bot.thinking {
        display: inline-flex; /* Uses flex to align dots horizontally */
        align-items: center; /* Centers dots vertically */
        /* Reuses styles from .conservation-chatbot-message.bot for consistency */
        background-color: rgba(255, 255, 255, 0.4);
        color: #333;
        border-bottom-left-radius: 4px;
        border: 1px solid rgba(255, 255, 255, 0.5);
        box-shadow: 0 1px 2px rgba(0,0,0,0.05);
        padding: 8px 12px;
        max-width: 75%;
        align-self: flex-start;
        border-radius: 18px;
    }

    .conservation-chatbot-message.bot.thinking .dot {
        width: 8px;      /* Size of each dot */
        height: 8px;     /* Size of each dot */
        background-color: #555; /* Color of the dots */
        border-radius: 50%; /* Makes dots circular */
        margin: 0 2px;   /* Space between dots */
        animation: blink 1.4s infinite ease-in-out both; /* Applies blinking animation */
    }

    /* Individual animation delays for cascading blink effect */
    .conservation-chatbot-message.bot.thinking .dot:nth-child(1) { animation-delay: 0s; }
    .conservation-chatbot-message.bot.thinking .dot:nth-child(2) { animation-delay: 0.2s; }
    .conservation-chatbot-message.bot.thinking .dot:nth-child(3) { animation-delay: 0.4s; }

    /* Keyframes for the blinking animation */
    @keyframes blink {
        0%, 80%, 100% { opacity: 0; } /* Invisible at start, 80%, and end */
        40% { opacity: 1; } /* Fully visible at 40% of animation */
    }
`;function Be(e,n){if(!e){console.error("Conservation Chatbot: Container element not found for chatbot UI. Please provide a valid HTMLElement.");return}if(!n||typeof n.respondTo!="function"){console.error("Conservation Chatbot: Invalid chatbot instance provided. The 'chatbotInstance' must be an object with a 'respondTo' function.");return}if(!document.getElementById("conservation-chatbot-styles")){const u=document.createElement("style");u.id="conservation-chatbot-styles",u.textContent=$e,document.head.appendChild(u)}const t=document.createElement("div");t.id="conservation-chatbot-launcher";const s=document.createElement("img");s.src=n.getAnimalPhoto(),s.alt=`${n.getAnimalName()} Avatar`,t.appendChild(s),document.body.appendChild(t);const o=document.createElement("div");o.id="conservation-chatbot-container";const a=document.createElement("div");a.className="conservation-chatbot-header";const i=document.createElement("div");i.className="title-group";const r=document.createElement("img");r.src=n.getAnimalPhoto(),r.alt=`${n.getAnimalName()} Avatar`,r.className="conservation-chatbot-avatar";const d=document.createElement("h3");d.textContent=`Talk to ${n.getAnimalName()}`;const f=document.createElement("button");f.className="conservation-chatbot-close-button",f.innerHTML="&times;",i.appendChild(r),i.appendChild(d),a.appendChild(i),a.appendChild(f),o.appendChild(a);const h=document.createElement("div");h.className="conservation-chatbot-messages",o.appendChild(h);const l=document.createElement("div");l.className="conservation-chatbot-input-container";const c=document.createElement("div");c.className="conservation-chatbot-default-prompts";const p=[{text:"Fun Fact",prompt:"Tell me a fun fact!"},{text:"Threats",prompt:"What's your biggest threat?"},{text:"Help",prompt:"How can I help protect you?"}],E=[];p.forEach(u=>{const b=document.createElement("button");b.className="default-prompt-btn",b.textContent=u.text,b.dataset.prompt=u.prompt,c.appendChild(b),E.push(b)}),l.appendChild(c);const g=document.createElement("input");g.type="text",g.className="conservation-chatbot-input",g.placeholder="Ask me anything...",l.appendChild(g);const x=document.createElement("button");x.className="conservation-chatbot-send-button",x.textContent="Send",l.appendChild(x),o.appendChild(l),e.appendChild(o);let N=!1;const G=()=>{N=!N,N?(o.style.display="flex",requestAnimationFrame(()=>{o.classList.add("expanded"),t.classList.add("hidden")}),(h.children.length===0||h.children.length===1&&h.children[0].classList.contains("thinking"))&&R(`Hello! I'm ${n.getAnimalName()}. What would you like to know about me and my conservation?`,"bot"),g.focus()):(o.classList.remove("expanded"),t.classList.remove("hidden"),setTimeout(()=>{o.style.display="none"},300))};t.addEventListener("click",G),f.addEventListener("click",G);function R(u,b){const y=document.createElement("div");return y.classList.add("conservation-chatbot-message",b),y.textContent=u,h.appendChild(y),h.scrollTop=h.scrollHeight,y}function re(){const u=document.createElement("div");return u.classList.add("conservation-chatbot-message","bot","thinking"),u.innerHTML=`
            <div class="dot"></div>
            <div class="dot"></div>
            <div class="dot"></div>
        `,h.appendChild(u),h.scrollTop=h.scrollHeight,u}function D(u){u&&u.parentNode&&u.parentNode.removeChild(u)}const k=async u=>{const b=u||g.value.trim();if(b){R(b,"user"),g.value="",x.disabled=!0,g.disabled=!0,c.style.pointerEvents="none",c.style.opacity="0.5";const y=re();try{const M=await n.respondTo(b);D(y),R(M,"bot")}catch(M){console.error("Error getting chatbot response:",M),D(y),R("Oops! I'm having trouble responding right now. Please try again later.","bot")}finally{x.disabled=!1,g.disabled=!1,c.style.pointerEvents="auto",c.style.opacity="1",g.focus()}}};x.addEventListener("click",()=>k()),g.addEventListener("keypress",u=>{u.key==="Enter"&&k()}),E.forEach(u=>{u.addEventListener("click",()=>{const b=u.dataset.prompt;k(b)})})}const ae=[{id:"philippine-eagle",name:"Tala",species:"Philippine Eagle",conservationStatus:"Critically Endangered",location:"Philippines",photo:"https://picsum.photos/id/1084/100/100"},{id:"amur-leopard",name:"Leo",species:"Amur Leopard",conservationStatus:"Critically Endangered",location:"Russian Far East",photo:"https://picsum.photos/id/237/100/100"},{id:"javan-rhino",name:"Rino",species:"Javan Rhino",conservationStatus:"Critically Endangered",location:"Indonesia",photo:"https://picsum.photos/id/1020/100/100"},{id:"orangutan",name:"Orangie",species:"Orangutan",conservationStatus:"Critically Endangered",location:"Borneo and Sumatra",photo:"https://picsum.photos/id/1024/100/100"},{id:"vaquita",name:"Vicky",species:"Vaquita",conservationStatus:"Critically Endangered",location:"Gulf of California",photo:"https://picsum.photos/id/1031/100/100"}],ie=document.getElementById("animalSelect"),Ye=document.getElementById("startChatButton"),Ke=document.getElementById("chatbot-ui-placeholder");let ee=null;ae.forEach(e=>{const n=document.createElement("option");n.value=e.id,n.textContent=e.name+" ("+e.species+")",ie.appendChild(n)});const qe=()=>{ee&&(Ke.innerHTML="");const e=ie.value,n=ae.find(t=>t.id===e);if(n){const t=Fe({animal:{name:n.name,species:n.species,conservationStatus:n.conservationStatus,location:n.location},photo:n.photo});ee=t,Be(document.body,t),document.querySelector(".controls").style.display="none",document.querySelector("main").style.display="none"}else alert("Please select an animal!")};Ye.addEventListener("click",qe);
