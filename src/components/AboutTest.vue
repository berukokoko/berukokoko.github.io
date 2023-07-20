<template>
  <header>
  <div>
        <nav>
          <ul>
            <li>
              <i class="fa fa-home" aria-hidden="true">
             </i>
           <router-link to="/">ご挨拶</router-link>
              </li>
              <li>
              <i class="fa fa-user" aria-hidden="true">
              </i>
                <router-link to="/about">アカウント</router-link>
              </li>
               <li>
              <i class="fa fa-comment" aria-hidden="true">
              </i>
                <router-link to="/qa">作品</router-link>
              </li>
              <li>
              <i class="fa fa-edit" aria-hidden="true">
              </i>
                <router-link to="/contact">プロフィール</router-link>
              </li>     
               <li>
              <i class="fa fa-edit" aria-hidden="true">
              </i>
                <router-link to="/search">スキル</router-link>
              </li>      
          </ul>
        </nav>
  </div>
</header>

   <div class="wrapper">


    <div class="wrapper">
    <div class="contens">
    <div class="contenscenter">
<div class="area">
  <h2 id="area_id">アカウント</h2>
  <div class="area_class">
  <table class="btable">
    <tr>
      <th>
        <a href="https://github.com/berukokoko/" target="_blank">
        <i class="fab fa-5x fa-github"></i></a>
      </th>
      <td>github
      </td>
    </tr>

    <tr>
      <th>
        <a href="http://twilog.org/purogram001" target="_blank">
        <i class="fab fa-5x fa-twitter"></i>
        </a>
      </th>
      <td>twitter
      </td>
    </tr>

    <tr>
      <th>
        <a href="https://qiita.com/berukokoko" target="_blank">
        <i class="fas fa-5x fa-pencil-alt"></i>
        </a>
      </th>
      <td>Qiita
      </td>
    </tr>

    <tr>
      <th>
        <a href="http://berukokoko.hatenablog.jp/" target="_blank">
        <i class="fab fa-5x fa-blogger"></i>
        </a>
      </th>
      <td>blog
      </td>
    </tr>

    <tr>
      <th>
        <a href="https://techbookfest.org/event/tbf04/circle/13820005" target="_blank">
        <i class="fas fa-5x fa-book"></i>
        </a>
      </th>
      <td>技術書店
      </td>
    </tr>

  </table>
</div>
</div>
    </div></div></div>
</div>
</template>


<script>



</script>


<style>


textarea {
width:100%;
height:100px;
outline: none;
border-radius: 4px;
border: 1px solid #032b4e;
}


.cp_iptxt {
	position: relative;
	width: 80%;
	margin: 20px 3%;
}

.cp_iptxt2 {
	width: 100%;
}


.cp_iptxt input[type=text] {
	font: 15px/24px sans-serif;
	box-sizing: border-box;
	width: 100%;
	margin: 8px 0;
	padding: 0.3em;
	transition: 0.3s;
	border: 1px solid #032b4e;
	border-radius: 4px;
	outline: none;
}
.cp_iptxt input[type=text]:focus {
	color: #03066e;
}
.cp_iptxt input[type=text] {
	padding-left: 40px;
}
.cp_iptxt i {
	position: absolute;
  top: 10px;
  left: 3px;
	padding: 9px 8px;
	transition: 0.3s;
	color: #03066e;
}
.cp_iptxt input[type=text]:focus + i {
	color: #03066e;
}




#search{
  margin: 10px;
}

.table{
    width: 90%;
    margin: 0 auto;
    padding: 10px;
    text-align: center;
}

:root {
    --border-radius: 4px;
    --color-text: #333;
    --color-primary: #7026b9;
    --color-code-bg: #fff4db;
    --color-code: #8a6534;
    --font-sans: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial,
      sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
    --font-mono: SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono",
      "Courier New", monospace;
    --font-lg: 18px;
    --font-md: 16px;
    --font-sm: 14px;
    --font-sx: 12px;
    --line-height-loose: 1.75;
    --line-height-normal: 1.5;
    --line-height-dense: 1.1;
    --space-1: 4px;
    --space-2: 8px;
    --space-3: 16px;
    --space-4: 24px;
    --space-5: 32px;
    --space-6: 64px;
    --size-content: 54rem;
    --size-gutter: var(--space-5);
    --size-gap: var(--space-6);
  }
  html {
    -webkit-text-size-adjust: 100%;
    box-sizing: border-box;
    font: sans-serif;
    font-size: var(--font-md);
    line-height: var(--line-height-normal);
    overflow-y: scroll;
  }
  body {
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    color: var(--color-text);
    font-family: sans-serif;
    font-family: var(--font-sans);
    font-weight: normal;
    margin: 0;
    word-wrap: break-word;
  }
  a {
    background-color: transparent;
    color: var(--color-primary);
    text-decoration: none;
    font-weight: 500;
    text-decoration: underline;
    text-decoration-thickness: 1.5px;
    text-underline-offset: 2px;
  }
  a:active,
  a:hover {
    outline-width: 0;
    text-decoration: none;
  }
  abbr[title] {
    border-bottom: 1px dotted hsla(0, 0%, 0%, 0.5);
    cursor: help;
    text-decoration: none;
  }
  b,
  strong {
    font-weight: inherit;
    font-weight: bolder;
  }
  dfn {
    font-style: italic;
  }
  h1 {
    margin: 0;
    margin-bottom: 3rem;
    padding: 0;
    line-height: var(--line-height-dense);
    letter-spacing: -0.01em;
  }
  h1 > b {
    color: var(--color-primary);
  }
  img {
    border-style: none;
    max-width: 100%;
  }
  code,
  kbd,
  pre,
  samp {
    font-family: var(--font-mono);
    font-size: 1em;
    line-height: inherit;
  }
  hr {
    box-sizing: content-box;
    overflow: visible;
    margin-left: 0;
    margin-right: 0;
    margin-top: 0;
    padding: 0;
    margin-bottom: calc(var(--space-4) - 1px);
    background: hsla(0, 0%, 0%, 0.2);
    border: none;
    height: 1px;
  }
  * {
    box-sizing: inherit;
  }
  *:before {
    box-sizing: inherit;
  }
  *:after {
    box-sizing: inherit;
  }
  hgroup,
  img,
  figure,
  fieldset,
  ul,
  ol,
  dl,
  dd,
  p {
    margin: 0;
    padding: 0;
  }
  ul,
  ol {
    margin-left: var(--space-4);
    list-style-position: outside;
    list-style-image: none;
  }
  pre {
    margin-left: 0;
    margin-right: 0;
    margin-top: 0;
    margin-bottom: var(--space-4);
    font-size: 0.875rem;
    line-height: var(--line-height-normal);
    background: hsla(0, 0%, 0%, 0.04);
    border-radius: var(--border-radius);
    overflow: auto;
    word-wrap: normal;
    padding: var(--space-4);
  }
  b,
  strong,
  dt,
  th {
    font-weight: bold;
  }
  li {
    margin-bottom: calc(var(--space-4) / 2);
  }
  ol li,
  ul li {
    padding-left: 0;
  }
  li > ol,
  li > ul {
    margin-bottom: calc(var(--space-4) / 2);
    margin-left: var(--space-4);
    margin-top: calc(var(--space-4) / 2);
  }
  blockquote *:last-child {
    margin-bottom: 0;
  }
  li *:last-child {
    margin-bottom: 0;
  }
  p *:last-child {
    margin-bottom: 0;
  }
  li > p {
    margin-bottom: calc(var(--space-4) / 2);
  }
  p {
    max-width: 680px;
  }
  code {
    font-size: 0.875rem;
  }
  kbd {
    font-size: 0.875rem;
  }
  samp {
    font-size: 0.875rem;
  }
  abbr {
    border-bottom: 1px dotted hsla(0, 0%, 0%, 0.5);
    cursor: help;
  }
  acronym {
    border-bottom: 1px dotted hsla(0, 0%, 0%, 0.5);
    cursor: help;
  }
  tt,
  code {
    background-color: var(--color-code-bg);
    border-radius: var(--border-radius);
    color: var(--color-code);
    font-family: var(--font-mono);
    padding-bottom: 0.25em;
    padding-top: 0.25em;
    word-break: normal;
  }
  pre code {
    background: none;
  }
  code:before,
  code:after,
  tt:before,
  tt:after {
    content: "\00a0";
    letter-spacing: -0.2em;
  }
  pre code:before,
  pre code:after,
  pre tt:before,
  pre tt:after {
    content: none;
  }
  
  /* add */
  
  
  body {
    font-family: "Hiragino Kaku Gothic Pro", "ヒラギノ角ゴ Pro W3", メイリオ, Meiryo, "ＭＳ Ｐゴシック", "Helvetica Neue", Helvetica, Arial, sans-serif;
    background-color: #b7d3ec;
  }
  header {
    padding: 30px 4% 10px;
    top: 0;
    width: 100%;
    background-color: #fff;
    display: flex;
    align-items: center;
  }
  
  footer {
      width: 100%;
      background-color: #fff;
      display: flex;
      align-items: center;
      bottom: 0;
      width: 100%;
  }
  
  
  a {	
    text-decoration: none;
    color: #4b4b4b;
  }
  nav {
    margin: 0 0 0 auto;
  }
  header ul,footer ul {
    list-style: none;
    margin: 0;
    display: flex;
  }
  li {
    margin: 0 0 0 15px;
    font-size: 14px;
  }
  
  .contens{
    width: 90%;
    margin: 0 auto;
    max-width: 630px;
    padding: 10px;
  }
  
  
  .buttonRound {
    width: 100%;
    max-width: 320px;
    height: 64px;
    padding: 20px 100px 20px 100px;
    font-size: 16px;
    color: #fff;
    text-align: center;
    overflow-wrap: anywhere;
    background-color: #0e164d;
    border-radius: 32px;
  }
  
  
  .contenscenter{
      width: 90%;
      margin: 0 auto;
      padding: 10px;
      text-align: center;
  }
  
  .buttoncenter{
    padding: 25px;
    margin:10px;
  }
  
  
  
  ul {
    list-style: none;
    margin: 0;
  
  }
  
  
  .triangle{
    width: 0;
    height: 0;
    border-left: 30px solid transparent;
    border-right: 30px solid transparent;
    border-top: 30px solid rgb(21, 20, 73);
  }
  
  .trianglecenter{
    width: 13%;
    margin: 0 auto;
    padding: 10px;
    text-align: center;
  }
  
  
  
  
  
  
  
  
  
  .wrapper{
    min-height: 100vh;
  }
  
  footer{
    width: 100%;
    bottom: 0; /*下に固定*/
  }
  
  .qa_ul{
    display: flex;
  }
  
  .qa_ul li{
    margin: 0 auto;
    padding-bottom: 20px;
  }
  
  
  /* ボタン */
  @import "https://use.fontawesome.com/releases/v5.13.0/css/all.css";
  
  *,
  *:before,
  *:after {
    -webkit-box-sizing: inherit;
    box-sizing: inherit;
  }
  
  html {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    font-size: 62.5%;
  }
  
  .btn,
  a.btn,
  button.btn {
    font-size: 1.6rem;
    font-weight: 700;
    line-height: 1.5;
    position: relative;
    display: inline-block;
    padding: 1rem 4rem;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    -webkit-transition: all 0.3s;
    transition: all 0.3s;
    text-align: center;
    vertical-align: middle;
    text-decoration: none;
    letter-spacing: 0.1em;
    color: #212529;
    border-radius: 0.5rem;
  }
  
  a.btn-custom01 {
    margin-bottom: 0.5rem;
    padding: 0;
    border-radius: 0.75rem;
  }
  
  
  a.btn-custom01:after {
    font-family: "Font Awesome 5 Free";
    font-size: 2rem;
    font-weight: normal;
    line-height: 1;
    position: absolute;
    top: calc(50% - 1rem);
    left: 1.5rem;
    margin: 0;
    padding: 0;
    content: "\f0e0";
  }
  
  .btn-custom01-front {
    position: relative;
    display: block;
    padding: 1.5rem 5rem 1.5rem 5rem;
  
    -webkit-transition: all 0.3s;
    transition: all 0.3s;
    border: 2px solid #000;
    border-radius: inherit;
    background: #98beff;;
  }
  
  .fa-position-left {
    position: absolute;
    top: calc(50% - 0.5em);
    left: 1rem;
  }
  
  .fa-position-right {
    position: absolute;
    top: calc(50% - 0.5em);
    right: 1rem;
  }
  
  
  
  @media screen and (max-width: 480px) {
      /* （スマホ用） */
    .buttonRound {
      padding: 20px 25px 20px 25px;
  }
  
  .btn-custom01-front {
    padding: 15px 50px 15px 50px;
  }
  
  .qa_ul{
    display: inline;
  }
  
  }
</style>
