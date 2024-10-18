import{_ as s,c as a,d as e,o as i}from"./app-CU_1QvHP.js";const l={};function t(p,n){return i(),a("div",null,n[0]||(n[0]=[e(`<p>你可以查看在这个地址查看 Markdown 文件，通过其他软件来查看该文件的预览效果。</p><h2 id="标题" tabindex="-1"><a class="header-anchor" href="#标题"><span>标题</span></a></h2><p>在单词或短语前添加 <code>#</code> 创建标题，<code>#</code> 的数量表示标题的级别，最多支持六级标题。</p><div class="language-markdown line-numbers-mode" data-highlighter="prismjs" data-ext="md" data-title="md"><pre><code><span class="line"><span class="token title important"><span class="token punctuation">#</span> Heading level 1</span></span>
<span class="line"></span>
<span class="line"><span class="token title important"><span class="token punctuation">##</span> Heading level 2</span></span>
<span class="line"></span>
<span class="line"><span class="token title important"><span class="token punctuation">###</span> Heading level 3</span></span>
<span class="line"></span>
<span class="line"><span class="token title important"><span class="token punctuation">####</span> Heading level 4</span></span>
<span class="line"></span>
<span class="line"><span class="token title important"><span class="token punctuation">#####</span> Heading level 5</span></span>
<span class="line"></span>
<span class="line"><span class="token title important"><span class="token punctuation">######</span> Heading level 6</span></span>
<span class="line"></span>
<span class="line"><span class="token title important">Heading level 1</span>
<span class="line"><span class="token punctuation">------</span></span></span>
<span class="line"></span>
<span class="line"><span class="token title important">Heading level 2</span>
<span class="line"><span class="token punctuation">=====</span></span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip"><p class="hint-container-title">可选语法</p><p>你可以选择在文本下添加任意数量的 <code>=</code> 来标识一级标题，或者使用 <code>-</code> 标识二级标题，但是不推荐使用这种写法。</p></div><div class="hint-container tip"><p class="hint-container-title">最佳实践</p><p>在 <code>#</code> 和标题之间进行分割。</p></div><h2 id="段落" tabindex="-1"><a class="header-anchor" href="#段落"><span>段落</span></a></h2><p>使用空白行将文本进行分割即可。</p><div class="language-markdown line-numbers-mode" data-highlighter="prismjs" data-ext="md" data-title="md"><pre><code><span class="line">你好</span>
<span class="line"></span>
<span class="line">世界</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip"><p class="hint-container-title">最佳实践</p><p>不要使用首行缩进。</p></div><h2 id="换行" tabindex="-1"><a class="header-anchor" href="#换行"><span>换行</span></a></h2><p>在一行的末尾添加两个或多个空格，使用回车键。</p><div class="language-markdown line-numbers-mode" data-highlighter="prismjs" data-ext="md" data-title="md"><pre><code><span class="line">你好 </span>
<span class="line">世界</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip"><p class="hint-container-title">提示</p><p>推荐使用 <code>&lt;br&gt;</code> 标签进行换行，你可以简单理解为段落是两个回车，换行是一个回车。</p></div><h2 id="强调" tabindex="-1"><a class="header-anchor" href="#强调"><span>强调</span></a></h2><p>斜体使用一个 <code>*</code> 包裹文本，粗体使用两个 <code>*</code> 进行包裹，粗斜体使用三个 <code>*</code> 包裹。</p><div class="language-markdown line-numbers-mode" data-highlighter="prismjs" data-ext="md" data-title="md"><pre><code><span class="line"><span class="token italic"><span class="token punctuation">*</span><span class="token content">斜体</span><span class="token punctuation">*</span></span></span>
<span class="line"></span>
<span class="line"><span class="token bold"><span class="token punctuation">**</span><span class="token content">粗体</span><span class="token punctuation">**</span></span></span>
<span class="line"></span>
<span class="line"><span class="token bold"><span class="token punctuation">**</span><span class="token content"><span class="token italic"><span class="token punctuation">*</span><span class="token content">粗斜体</span><span class="token punctuation">*</span></span></span><span class="token punctuation">**</span></span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="引用" tabindex="-1"><a class="header-anchor" href="#引用"><span>引用</span></a></h2><p>创建块引用使用 <code>&gt;</code> 。</p><p>块引用可以包含多个段落，在段落的空白处也加上 <code>&gt;</code>。</p><p>块引用可以和其他的标签进行嵌套。</p><div class="language-markdown line-numbers-mode" data-highlighter="prismjs" data-ext="md" data-title="md"><pre><code><span class="line"><span class="token blockquote punctuation">&gt;</span> 你好</span>
<span class="line"></span>
<span class="line"><span class="token blockquote punctuation">&gt;</span> 你好</span>
<span class="line"><span class="token blockquote punctuation">&gt;</span></span>
<span class="line"><span class="token blockquote punctuation">&gt;</span> 你好</span>
<span class="line"></span>
<span class="line"><span class="token blockquote punctuation">&gt;</span> 你好</span>
<span class="line"><span class="token blockquote punctuation">&gt;</span> </span>
<span class="line"><span class="token blockquote punctuation">&gt; &gt;</span> 你好</span>
<span class="line"><span class="token blockquote punctuation">&gt;</span> <span class="token title important"><span class="token punctuation">#</span> 你好</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip"><p class="hint-container-title">最佳实践</p><p><code>&gt;</code> 建议和文本之间使用空格进行分割。</p></div><h2 id="列表" tabindex="-1"><a class="header-anchor" href="#列表"><span>列表</span></a></h2><h3 id="有序列表" tabindex="-1"><a class="header-anchor" href="#有序列表"><span>有序列表</span></a></h3><p>有序列表通过使用数字 + <code>.</code> 进行排序。</p><div class="language-markdown line-numbers-mode" data-highlighter="prismjs" data-ext="md" data-title="md"><pre><code><span class="line"><span class="token list punctuation">1.</span> 你好</span>
<span class="line"><span class="token list punctuation">2.</span> 你好</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="无序列表" tabindex="-1"><a class="header-anchor" href="#无序列表"><span>无序列表</span></a></h3><p>无序列表在列表前添加 <code>-</code>、<code>*</code>、<code>+</code> 进行创建。</p><div class="language-markdown line-numbers-mode" data-highlighter="prismjs" data-ext="md" data-title="md"><pre><code><span class="line"><span class="token list punctuation">-</span> 你好</span>
<span class="line"><span class="token list punctuation">-</span> 你好</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="列表嵌套" tabindex="-1"><a class="header-anchor" href="#列表嵌套"><span>列表嵌套</span></a></h3><p>嵌套其他元素需要缩进四个字符。</p><div class="language-markdown line-numbers-mode" data-highlighter="prismjs" data-ext="md" data-title="md"><pre><code><span class="line"><span class="token list punctuation">-</span> 你好</span>
<span class="line">    <span class="token list punctuation">1.</span> 你好</span>
<span class="line">    Hello</span>
<span class="line">    &gt; 你是谁</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="最佳实践" tabindex="-1"><a class="header-anchor" href="#最佳实践"><span>最佳实践</span></a></h3><p>在有序列表和无序列表中标签和文字之间需要使用空格进行分割。</p><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码"><span>代码</span></a></h2><p>使用 \` 包裹代码即可。</p><div class="language-markdown line-numbers-mode" data-highlighter="prismjs" data-ext="md" data-title="md"><pre><code><span class="line"><span class="token code-snippet code keyword">\`code\`</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="分割线" tabindex="-1"><a class="header-anchor" href="#分割线"><span>分割线</span></a></h2><p>在单独一行中创建多个 <code>-</code>。</p><div class="language-markdown line-numbers-mode" data-highlighter="prismjs" data-ext="md" data-title="md"><pre><code><span class="line"><span class="token hr punctuation">---</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><div class="hint-container tip"><p class="hint-container-title">最佳实践</p><p>在分割线的前后添加空白行。</p></div><h2 id="链接" tabindex="-1"><a class="header-anchor" href="#链接"><span>链接</span></a></h2><p>链接文本放在中括号内，链接地址放在后面的括号中，链接title可选。如果是网站和 Email 可以直接使用尖括号。</p><p>链接中可以直接进行强调。</p><div class="language-markdown line-numbers-mode" data-highlighter="prismjs" data-ext="md" data-title="md"><pre><code><span class="line"><span class="token url">[<span class="token content">超链接显示名</span>](<span class="token url">超链接地址</span> <span class="token string">&quot;超链接title&quot;</span>)</span></span>
<span class="line"></span>
<span class="line">这是一个链接 <span class="token url">[<span class="token content">Markdown语法</span>](<span class="token url">https://markdown.com.cn</span> <span class="token string">&quot;最好的markdown教程&quot;</span>)</span>。</span>
<span class="line"></span>
<span class="line">&lt;https://www.baidu.com&gt;</span>
<span class="line"></span>
<span class="line"><span class="token bold"><span class="token punctuation">**</span><span class="token content"><span class="token url">[<span class="token content">超链接显示名</span>](<span class="token url">超链接地址</span> <span class="token string">&quot;超链接title&quot;</span>)</span></span><span class="token punctuation">**</span></span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="图片" tabindex="-1"><a class="header-anchor" href="#图片"><span>图片</span></a></h2><p>图片链接和超链接类似，不同的是相比链接添加了一个 <code>!</code>。</p><div class="language-markdown line-numbers-mode" data-highlighter="prismjs" data-ext="md" data-title="md"><pre><code><span class="line"><span class="token url"><span class="token operator">!</span>[<span class="token content">这是图片</span>](<span class="token url">/assets/img/philly-magic-garden.jpg</span> <span class="token string">&quot;Magic Gardens&quot;</span>)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="转义字符" tabindex="-1"><a class="header-anchor" href="#转义字符"><span>转义字符</span></a></h2><p>显示原本用于格式化的字符，在字符前添加 <code>\\</code>。</p><div class="language-markdown line-numbers-mode" data-highlighter="prismjs" data-ext="md" data-title="md"><pre><code><span class="line"><span class="token list punctuation">*</span> \\*你好<span class="token italic"><span class="token punctuation">*</span><span class="token content">Hello</span><span class="token punctuation">*</span></span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>如果需要使用 HTML 中的 <code>&lt;</code> 和 <code>&amp;</code>，你需要使用 HTML 的实义字符进行输出。</p><h2 id="html-标签" tabindex="-1"><a class="header-anchor" href="#html-标签"><span>HTML 标签</span></a></h2><p>大部分 HTML 标签都能被正常解析。</p><div class="language-markdown line-numbers-mode" data-highlighter="prismjs" data-ext="md" data-title="md"><pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://www.baidu.com<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>百度一下，你就知道<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div>`,56)]))}const d=s(l,[["render",t],["__file","basic.html.vue"]]),o=JSON.parse('{"path":"/technology/markdown/basic.html","title":"基础","lang":"zh-CN","frontmatter":{"title":"基础","icon":"/assets/icon/basic.svg","order":2,"category":["实用技术","Markdown"],"tag":["基础"],"isOriginal":true,"description":"你可以查看在这个地址查看 Markdown 文件，通过其他软件来查看该文件的预览效果。 标题 在单词或短语前添加 # 创建标题，# 的数量表示标题的级别，最多支持六级标题。 可选语法 你可以选择在文本下添加任意数量的 = 来标识一级标题，或者使用 - 标识二级标题，但是不推荐使用这种写法。 最佳实践 在 # 和标题之间进行分割。 段落 使用空白行将文本...","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/technology/markdown/basic.html"}],["meta",{"property":"og:site_name","content":"博客演示"}],["meta",{"property":"og:title","content":"基础"}],["meta",{"property":"og:description","content":"你可以查看在这个地址查看 Markdown 文件，通过其他软件来查看该文件的预览效果。 标题 在单词或短语前添加 # 创建标题，# 的数量表示标题的级别，最多支持六级标题。 可选语法 你可以选择在文本下添加任意数量的 = 来标识一级标题，或者使用 - 标识二级标题，但是不推荐使用这种写法。 最佳实践 在 # 和标题之间进行分割。 段落 使用空白行将文本..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://mister-hope.github.io/assets/img/philly-magic-garden.jpg \\"Magic Gardens\\""}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-17T14:33:12.000Z"}],["meta",{"property":"article:tag","content":"基础"}],["meta",{"property":"article:modified_time","content":"2024-10-17T14:33:12.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"基础\\",\\"image\\":[\\"https://mister-hope.github.io/assets/img/philly-magic-garden.jpg \\\\\\"Magic Gardens\\\\\\"\\"],\\"dateModified\\":\\"2024-10-17T14:33:12.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Hope\\",\\"url\\":\\"https://mister-hope.com\\"}]}"]]},"headers":[{"level":2,"title":"标题","slug":"标题","link":"#标题","children":[]},{"level":2,"title":"段落","slug":"段落","link":"#段落","children":[]},{"level":2,"title":"换行","slug":"换行","link":"#换行","children":[]},{"level":2,"title":"强调","slug":"强调","link":"#强调","children":[]},{"level":2,"title":"引用","slug":"引用","link":"#引用","children":[]},{"level":2,"title":"列表","slug":"列表","link":"#列表","children":[{"level":3,"title":"有序列表","slug":"有序列表","link":"#有序列表","children":[]},{"level":3,"title":"无序列表","slug":"无序列表","link":"#无序列表","children":[]},{"level":3,"title":"列表嵌套","slug":"列表嵌套","link":"#列表嵌套","children":[]},{"level":3,"title":"最佳实践","slug":"最佳实践","link":"#最佳实践","children":[]}]},{"level":2,"title":"代码","slug":"代码","link":"#代码","children":[]},{"level":2,"title":"分割线","slug":"分割线","link":"#分割线","children":[]},{"level":2,"title":"链接","slug":"链接","link":"#链接","children":[]},{"level":2,"title":"图片","slug":"图片","link":"#图片","children":[]},{"level":2,"title":"转义字符","slug":"转义字符","link":"#转义字符","children":[]},{"level":2,"title":"HTML 标签","slug":"html-标签","link":"#html-标签","children":[]}],"git":{"createdTime":1729175592000,"updatedTime":1729175592000,"contributors":[{"name":"皮皮萌宝","email":"panda1943575780@outlook.com","commits":1}]},"readingTime":{"minutes":2.54,"words":762},"filePathRelative":"technology/markdown/basic.md","localizedDate":"2024年10月17日","excerpt":"<p>你可以查看在这个地址查看 Markdown 文件，通过其他软件来查看该文件的预览效果。</p>\\n<h2>标题</h2>\\n<p>在单词或短语前添加 <code>#</code> 创建标题，<code>#</code> 的数量表示标题的级别，最多支持六级标题。</p>\\n<div class=\\"language-markdown line-numbers-mode\\" data-highlighter=\\"prismjs\\" data-ext=\\"md\\" data-title=\\"md\\"><pre><code><span class=\\"line\\"><span class=\\"token title important\\"><span class=\\"token punctuation\\">#</span> Heading level 1</span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"><span class=\\"token title important\\"><span class=\\"token punctuation\\">##</span> Heading level 2</span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"><span class=\\"token title important\\"><span class=\\"token punctuation\\">###</span> Heading level 3</span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"><span class=\\"token title important\\"><span class=\\"token punctuation\\">####</span> Heading level 4</span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"><span class=\\"token title important\\"><span class=\\"token punctuation\\">#####</span> Heading level 5</span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"><span class=\\"token title important\\"><span class=\\"token punctuation\\">######</span> Heading level 6</span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"><span class=\\"token title important\\">Heading level 1</span>\\n<span class=\\"line\\"><span class=\\"token punctuation\\">------</span></span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"><span class=\\"token title important\\">Heading level 2</span>\\n<span class=\\"line\\"><span class=\\"token punctuation\\">=====</span></span></span>\\n<span class=\\"line\\"></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{d as comp,o as data};