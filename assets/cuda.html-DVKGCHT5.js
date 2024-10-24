import{_ as n,c as e,d as i,e as t,o as l,r as p}from"./app-B1ulbHlc.js";const r="/assets/%E4%B8%8B%E8%BD%BD%E5%9C%B0%E5%9D%80-DHlv0-VG.png",o="/assets/CUDA%20%E6%94%AF%E6%8C%81%E6%9D%A1%E4%BB%B6-CEhbak5M.png",c="/assets/CUDA%20%E5%AE%89%E8%A3%85%E4%BD%8D%E7%BD%AE-n-vhxkPJ.png",d="/assets/%E5%AE%89%E8%A3%85%E7%95%8C%E9%9D%A2-DUjsPpuz.png",u="/assets/%E5%90%8C%E6%84%8F%E8%AE%B8%E5%8F%AF%E5%8D%8F%E8%AE%AE-DNUwavqg.png",g="/assets/%E9%80%89%E6%8B%A9%E5%AE%89%E8%A3%85%E9%80%89%E9%A1%B9-B81r6EYr.png",m="/assets/%E9%80%89%E6%8B%A9%E7%BB%84%E4%BB%B6-DefnPQ76.png",h="/assets/%E7%BB%84%E4%BB%B6%E5%AE%89%E8%A3%85%E4%BD%8D%E7%BD%AE-JqTrU1CX.png",v="/assets/%E5%AE%89%E8%A3%85%E5%AE%8C%E6%88%90%E7%95%8C%E9%9D%A2-BsD7qe6m.png",f="/assets/%E5%85%B3%E9%97%AD%20CUDA%20%E5%AE%89%E8%A3%85%E7%A8%8B%E5%BA%8F-DPPca4Iq.png",b={};function k(A,a){const s=p("Share");return l(),e("div",null,[a[0]||(a[0]=i('<h2 id="简介" tabindex="-1"><a class="header-anchor" href="#简介"><span>简介</span></a></h2><p><strong>Introduction</strong></p><p>统一计算设备架构（Compute Unified Device Architecture, CUDA），是由 NVIDIA 推出的通用并行计算架构。解决的是用更加廉价的设备资源，实现更高效的并行计算。</p><p>Compute Unified Device Architecture (CUDA) is a general-purpose parallel computing architecture introduced by NVIDIA. It addresses the need for more efficient parallel computing using more affordable device resources.</p><p>你可以简单理解为并行计算提高运行效率，因此 NVIDIA 的 GPU 能引领 AI 时代，但是现在的大部分云厂商和厂商都开始去 CUDA 化。</p><div class="hint-container tip"><p class="hint-container-title">去 CUDA 化</p></div><h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装"><span>安装</span></a></h2><h3 id="windows-的安装" tabindex="-1"><a class="header-anchor" href="#windows-的安装"><span>Windows 的安装</span></a></h3><p>应该保证安装 Microsoft Visual Studio 的 gcc 编译器，Windows 编译器如下表所示。</p><table><thead><tr><th>编译器</th><th>IDE</th><th>C++ Dialect</th></tr></thead><tbody><tr><td>MSVC Version 193x</td><td>Visual Studio 2022 17.x</td><td>C++14 (default), C++17, C++20</td></tr><tr><td>MSVC Version 192x</td><td>Visual Studio 2019 16.x</td><td>C++14 (default), C++17</td></tr><tr><td>MSVC Version 191x</td><td>Visual Studio 2017 15.x (RTW and all updates)</td><td>C++14 (default), C++17, C++20</td></tr></tbody></table><div class="hint-container tip"><p class="hint-container-title">关于很多文章关于查询 CUDA 版本的说明</p><p>在 NVIDIA 的官方文章中 <a href="https://docs.nvidia.com/cuda/cuda-installation-guide-microsoft-windows/index.html" target="_blank" rel="noopener noreferrer">CUDA Installation Guide for Microsoft Windows</a></p><p>在第二节中仅仅有验证系统是否具有支持 CUDA 的 GPU，一般只有是 40 系的 N 卡，基本都可以运行新版 CUDA，类似于计算机运行程序，运行高版本都是可以的，只是出问题，用不了是不可能的。</p></div><p>你需要保证你的显卡是 NVIDIA 的显卡并升级到最新的驱动，之后在来到 NVIDIA 的官网下载 CUDA 的安装包，选择自己需要的版本。</p><figure><img src="'+r+'" alt="下载地址" tabindex="0" loading="lazy"><figcaption>下载地址</figcaption></figure><div class="hint-container tip"><p class="hint-container-title">本地和 network 的选择</p><p>更推荐 local 版本，因为在后续的安装过程中不会出现因为网络问题造成安装失败。</p></div><p>很多国内的介绍都说需要查看 NVIDIA 的控制面板来确定版本，但是实际上在官方的要求中，你只需要查看你的 GPU 是否支持即可。</p><figure><img src="'+o+'" alt="CUDA 支持条件" tabindex="0" loading="lazy"><figcaption>CUDA 支持条件</figcaption></figure><p>打开 exe 文件之后选择需要安装的位置。</p><figure><img src="'+c+'" alt="打开安装位置" tabindex="0" loading="lazy"><figcaption>打开安装位置</figcaption></figure><p>等待打开安装界面，等待初始化完成。</p><figure><img src="'+d+'" alt="安装界面" tabindex="0" loading="lazy"><figcaption>安装界面</figcaption></figure><p>同意许可协议。</p><figure><img src="'+u+'" alt="同意许可协议" tabindex="0" loading="lazy"><figcaption>同意许可协议</figcaption></figure><p>选择需要的安装模式，如果你选择自定义模式，则可以选择自己希望安装的组件。</p><figure><img src="'+g+'" alt="选择安装选项" tabindex="0" loading="lazy"><figcaption>选择安装选项</figcaption></figure><p>如果选择自定义，则选择需要的组件。</p><figure><img src="'+m+'" alt="选择组件" tabindex="0" loading="lazy"><figcaption>选择组件</figcaption></figure><p>选择组件安装位置。</p><figure><img src="'+h+'" alt="组件安装位置" tabindex="0" loading="lazy"><figcaption>组件安装位置</figcaption></figure><p>等待安装完成即可。</p><figure><img src="'+v+'" alt="Visual Studio 未安装" tabindex="0" loading="lazy"><figcaption>Visual Studio 未安装</figcaption></figure><p>关闭 CUDA 安装程序，你可选择自己需要的选项。</p><figure><img src="'+f+`" alt="CUDA 安装程序" tabindex="0" loading="lazy"><figcaption>CUDA 安装程序</figcaption></figure><p>你可以在命令行中使用 <code>nvcc -V</code> 来验证是否安装成功，如果提示 <code>nvcc 不是内部或外部命令，也不是可运行的程序或批处理文件</code>，需要设置环境变量，如果你并不懂这里，可以选择重新安装。</p><h3 id="wsl-的安装" tabindex="-1"><a class="header-anchor" href="#wsl-的安装"><span>WSL 的安装</span></a></h3><p>先决条件是你安装了 Docker。</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 为 NVIDIA 容器工具包设置稳定存储库</span></span>
<span class="line"><span class="token assign-left variable">distribution</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token builtin class-name">.</span> /etc/os-release<span class="token punctuation">;</span><span class="token builtin class-name">echo</span> $ID$VERSION_ID<span class="token variable">)</span></span></span>
<span class="line"></span>
<span class="line"><span class="token function">curl</span> <span class="token parameter variable">-s</span> <span class="token parameter variable">-L</span> https://nvidia.github.io/nvidia-docker/gpgkey <span class="token operator">|</span> <span class="token function">sudo</span> gpg <span class="token parameter variable">--dearmor</span> <span class="token parameter variable">-o</span> /usr/share/keyrings/nvidia-docker-keyring.gpg</span>
<span class="line"></span>
<span class="line"><span class="token function">curl</span> <span class="token parameter variable">-s</span> <span class="token parameter variable">-L</span> https://nvidia.github.io/nvidia-docker/<span class="token variable">$distribution</span>/nvidia-docker.list <span class="token operator">|</span> <span class="token function">sed</span> <span class="token string">&#39;s#deb https://#deb [signed-by=/usr/share/keyrings/nvidia-docker-keyring.gpg] https://#g&#39;</span> <span class="token operator">|</span> <span class="token function">sudo</span> <span class="token function">tee</span> /etc/apt/sources.list.d/nvidia-docker.list</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 安装 NVIDIA 运行时包和依赖项</span></span>
<span class="line"><span class="token function">sudo</span> <span class="token function">apt-get</span> update</span>
<span class="line"><span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> <span class="token parameter variable">-y</span> nvidia-docker2</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 运行机器学习框架容器示例</span></span>
<span class="line"><span class="token function">docker</span> run <span class="token parameter variable">--gpus</span> all <span class="token parameter variable">-it</span> --shm-size<span class="token operator">=</span>1g <span class="token parameter variable">--ulimit</span> <span class="token assign-left variable">memlock</span><span class="token operator">=</span>-1 <span class="token parameter variable">--ulimit</span> <span class="token assign-left variable">stack</span><span class="token operator">=</span><span class="token number">67108864</span> nvcr.io/nvidia/tensorflow:20.03-tf2-py3</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="linux-安装" tabindex="-1"><a class="header-anchor" href="#linux-安装"><span>Linux 安装</span></a></h3><p>以 Ubuntu 为例，首先需要安装驱动，你应该安装 C/C++ 编译器，如果没有可参考其他内容。不太推荐，因为一些比较冷门的 Linux 发行版可能出现很多的 bug。</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">$ <span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> ubuntu-drivers-common</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>安装软件包。</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">$ <span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> nvidia-driver-535</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>重新启动计算机。</p><p>安装 CUDA。</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">$ <span class="token function">wget</span> https://developer.download.nvidia.com/compute/cuda/12.4.1/local_installers/cuda_12.4.1_550.54.15_linux.run</span>
<span class="line">$ <span class="token function">sudo</span> <span class="token function">sh</span> cuda_12.4.1_550.54.15_linux.run</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>设置环境变量。</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token builtin class-name">echo</span> <span class="token string">&#39;export PATH=/usr/local/cuda/bin\${PATH:+:\${PATH}}&#39;</span> <span class="token operator">&gt;&gt;</span> ~/.bashrc</span>
<span class="line"><span class="token builtin class-name">source</span> ~/.bashrc</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div>`,46)),t(s,{colorful:""})])}const E=n(b,[["render",k],["__file","cuda.html.vue"]]),C=JSON.parse('{"path":"/ai/nvidia/cuda.html","title":"CUDA","lang":"zh-CN","frontmatter":{"title":"CUDA","icon":"/assets/icon/cuda.svg","description":"CUDA 的安装和基本介绍","isOriginal":true,"order":1,"category":["AI"],"tag":["入门","AI 基础"],"head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/ai/nvidia/cuda.html"}],["meta",{"property":"og:site_name","content":"博客演示"}],["meta",{"property":"og:title","content":"CUDA"}],["meta",{"property":"og:description","content":"CUDA 的安装和基本介绍"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-23T13:01:20.000Z"}],["meta",{"property":"article:tag","content":"入门"}],["meta",{"property":"article:tag","content":"AI 基础"}],["meta",{"property":"article:modified_time","content":"2024-10-23T13:01:20.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"CUDA\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-10-23T13:01:20.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"皮皮萌宝\\",\\"url\\":\\"https://pandaymx.github.io\\",\\"email\\":\\"panda1943575780@outlook.com\\"}]}"]]},"headers":[{"level":2,"title":"简介","slug":"简介","link":"#简介","children":[]},{"level":2,"title":"安装","slug":"安装","link":"#安装","children":[{"level":3,"title":"Windows 的安装","slug":"windows-的安装","link":"#windows-的安装","children":[]},{"level":3,"title":"WSL 的安装","slug":"wsl-的安装","link":"#wsl-的安装","children":[]},{"level":3,"title":"Linux 安装","slug":"linux-安装","link":"#linux-安装","children":[]}]}],"git":{"createdTime":1729688480000,"updatedTime":1729688480000,"contributors":[{"name":"皮皮萌宝","email":"panda1943575780@outlook.com","commits":1}]},"readingTime":{"minutes":3.52,"words":1056},"filePathRelative":"ai/nvidia/cuda.md","localizedDate":"2024年10月23日","excerpt":"<h2>简介</h2>\\n<p><strong>Introduction</strong></p>\\n<p>统一计算设备架构（Compute Unified Device Architecture, CUDA），是由 NVIDIA 推出的通用并行计算架构。解决的是用更加廉价的设备资源，实现更高效的并行计算。</p>\\n<p>Compute Unified Device Architecture (CUDA) is a general-purpose parallel computing architecture introduced by NVIDIA. It addresses the need for more efficient parallel computing using more affordable device resources.</p>"}');export{E as comp,C as data};
