



<!DOCTYPE html>
<html lang="en" class="">
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# object: http://ogp.me/ns/object# article: http://ogp.me/ns/article# profile: http://ogp.me/ns/profile#">
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta http-equiv="Content-Language" content="en">
    
    
    <title>jTinder/jquery.jTinder.js at master · do-web/jTinder</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub">
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub">
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-114.png">
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114.png">
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-144.png">
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144.png">
    <meta property="fb:app_id" content="1401488693436528">

      <meta content="@github" name="twitter:site" /><meta content="summary" name="twitter:card" /><meta content="do-web/jTinder" name="twitter:title" /><meta content="jTinder is a javascript library that makes rating people, products, images very easy and fast. It is optimized for mobile touch device but has also a desktop fallback." name="twitter:description" /><meta content="https://avatars1.githubusercontent.com/u/862783?v=3&amp;s=400" name="twitter:image:src" />
<meta content="GitHub" property="og:site_name" /><meta content="object" property="og:type" /><meta content="https://avatars1.githubusercontent.com/u/862783?v=3&amp;s=400" property="og:image" /><meta content="do-web/jTinder" property="og:title" /><meta content="https://github.com/do-web/jTinder" property="og:url" /><meta content="jTinder is a javascript library that makes rating people, products, images very easy and fast. It is optimized for mobile touch device but has also a desktop fallback." property="og:description" />

      <meta name="browser-stats-url" content="/_stats">
    <link rel="assets" href="https://assets-cdn.github.com/">
    <link rel="conduit-xhr" href="https://ghconduit.com:25035">
    <link rel="xhr-socket" href="/_sockets">
    <meta name="pjax-timeout" content="1000">
    <link rel="sudo-modal" href="/sessions/sudo_modal">

    <meta name="msapplication-TileImage" content="/windows-tile.png">
    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="selected-link" value="repo_source" data-pjax-transient>
      <meta name="google-analytics" content="UA-3769691-2">

    <meta content="collector.githubapp.com" name="octolytics-host" /><meta content="collector-cdn.github.com" name="octolytics-script-host" /><meta content="github" name="octolytics-app-id" /><meta content="46243F1A:4D42:13D9069:54AF0AAD" name="octolytics-dimension-request_id" /><meta content="4405650" name="octolytics-actor-id" /><meta content="Riceleg" name="octolytics-actor-login" /><meta content="29be7d0faf06f3a7b4bcafaa05f0b3be30eabdb5f6efd75f6abc66fa6d3dc395" name="octolytics-actor-hash" />
    
    <meta content="Rails, view, blob#show" name="analytics-event" />

    
    
    <link rel="icon" type="image/x-icon" href="https://assets-cdn.github.com/favicon.ico">


    <meta content="authenticity_token" name="csrf-param" />
<meta content="MIpbrrCjbS9CZxCbSca62FHmxm6Z/pxRSuNU7Kn9Wx0CggO6tU7+gOpHCSpx+49fhDbdvS4vV/3vvotI7hvHRA==" name="csrf-token" />

    <link href="https://assets-cdn.github.com/assets/github-7b11ae857921a5314c8c6833845d08859046adf23c764e9f14e31a6dadae9071.css" media="all" rel="stylesheet" type="text/css" />
    <link href="https://assets-cdn.github.com/assets/github2-c81d1566689852c2c43097d424735ea531962a7599ad515afcc4a649ce814da7.css" media="all" rel="stylesheet" type="text/css" />
    
    


    <meta http-equiv="x-pjax-version" content="6dc0cfb0622456e43e51259a1a7749ab">

      
  <meta name="description" content="jTinder is a javascript library that makes rating people, products, images very easy and fast. It is optimized for mobile touch device but has also a desktop fallback.">
  <meta name="go-import" content="github.com/do-web/jTinder git https://github.com/do-web/jTinder.git">

  <meta content="862783" name="octolytics-dimension-user_id" /><meta content="do-web" name="octolytics-dimension-user_login" /><meta content="27259872" name="octolytics-dimension-repository_id" /><meta content="do-web/jTinder" name="octolytics-dimension-repository_nwo" /><meta content="true" name="octolytics-dimension-repository_public" /><meta content="false" name="octolytics-dimension-repository_is_fork" /><meta content="27259872" name="octolytics-dimension-repository_network_root_id" /><meta content="do-web/jTinder" name="octolytics-dimension-repository_network_root_nwo" />
  <link href="https://github.com/do-web/jTinder/commits/master.atom" rel="alternate" title="Recent Commits to jTinder:master" type="application/atom+xml">

  </head>


  <body class="logged_in  env-production macintosh vis-public page-blob">
    <a href="#start-of-content" tabindex="1" class="accessibility-aid js-skip-to-content">Skip to content</a>
    <div class="wrapper">
      
      
      
      


      <div class="header header-logged-in true" role="banner">
  <div class="container clearfix">

    <a class="header-logo-invertocat" href="https://github.com/" data-hotkey="g d" aria-label="Homepage" ga-data-click="Header, go to dashboard, icon:logo">
  <span class="mega-octicon octicon-mark-github"></span>
</a>


      <div class="site-search repo-scope js-site-search" role="search">
          <form accept-charset="UTF-8" action="/do-web/jTinder/search" class="js-site-search-form" data-global-search-url="/search" data-repo-search-url="/do-web/jTinder/search" method="get"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /></div>
  <input type="text"
    class="js-site-search-field is-clearable"
    data-hotkey="s"
    name="q"
    placeholder="Search"
    data-global-scope-placeholder="Search GitHub"
    data-repo-scope-placeholder="Search"
    tabindex="1"
    autocapitalize="off">
  <div class="scope-badge">This repository</div>
</form>
      </div>
      <ul class="header-nav left" role="navigation">
        <li class="header-nav-item explore">
          <a class="header-nav-link" href="/explore" data-ga-click="Header, go to explore, text:explore">Explore</a>
        </li>
          <li class="header-nav-item">
            <a class="header-nav-link" href="https://gist.github.com" data-ga-click="Header, go to gist, text:gist">Gist</a>
          </li>
          <li class="header-nav-item">
            <a class="header-nav-link" href="/blog" data-ga-click="Header, go to blog, text:blog">Blog</a>
          </li>
        <li class="header-nav-item">
          <a class="header-nav-link" href="https://help.github.com" data-ga-click="Header, go to help, text:help">Help</a>
        </li>
      </ul>

    
<ul class="header-nav user-nav right" id="user-links">
  <li class="header-nav-item dropdown js-menu-container">
    <a class="header-nav-link name" href="/Riceleg" data-ga-click="Header, go to profile, text:username">
      <img alt="mike" class="avatar" data-user="4405650" height="20" src="https://avatars2.githubusercontent.com/u/4405650?v=3&amp;s=40" width="20" />
      <span class="css-truncate">
        <span class="css-truncate-target">Riceleg</span>
      </span>
    </a>
  </li>

  <li class="header-nav-item dropdown js-menu-container">
    <a class="header-nav-link js-menu-target tooltipped tooltipped-s" href="#" aria-label="Create new..." data-ga-click="Header, create new, icon:add">
      <span class="octicon octicon-plus"></span>
      <span class="dropdown-caret"></span>
    </a>

    <div class="dropdown-menu-content js-menu-content">
      
<ul class="dropdown-menu">
  <li>
    <a href="/new" data-ga-click="Header, create new repository, icon:repo"><span class="octicon octicon-repo"></span> New repository</a>
  </li>
  <li>
    <a href="/organizations/new" data-ga-click="Header, create new organization, icon:organization"><span class="octicon octicon-organization"></span> New organization</a>
  </li>


    <li class="dropdown-divider"></li>
    <li class="dropdown-header">
      <span title="do-web/jTinder">This repository</span>
    </li>
      <li>
        <a href="/do-web/jTinder/issues/new" data-ga-click="Header, create new issue, icon:issue"><span class="octicon octicon-issue-opened"></span> New issue</a>
      </li>
</ul>

    </div>
  </li>

  <li class="header-nav-item">
        <a href="/notifications" aria-label="You have no unread notifications" class="header-nav-link notification-indicator tooltipped tooltipped-s" data-ga-click="Header, go to notifications, icon:read" data-hotkey="g n">
        <span class="mail-status all-read"></span>
        <span class="octicon octicon-inbox"></span>
</a>
  </li>

  <li class="header-nav-item">
    <a class="header-nav-link tooltipped tooltipped-s" href="/settings/profile" id="account_settings" aria-label="Settings" data-ga-click="Header, go to settings, icon:settings">
      <span class="octicon octicon-gear"></span>
    </a>
  </li>

  <li class="header-nav-item">
    <form accept-charset="UTF-8" action="/logout" class="logout-form" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="HU/nsHCl3Lhvk4f7LhHn2FJQ1vq7MdxLrZvdteASyNNgv/L1U/2SDnf48gIMRMj0orQB7t9f24NmJF/bOjQvmQ==" /></div>
      <button class="header-nav-link sign-out-button tooltipped tooltipped-s" aria-label="Sign out" data-ga-click="Header, sign out, icon:logout">
        <span class="octicon octicon-sign-out"></span>
      </button>
</form>  </li>

</ul>


    
  </div>
</div>

      

        


      <div id="start-of-content" class="accessibility-aid"></div>
          <div class="site" itemscope itemtype="http://schema.org/WebPage">
    <div id="js-flash-container">
      
    </div>
    <div class="pagehead repohead instapaper_ignore readability-menu">
      <div class="container">
        
<ul class="pagehead-actions">

    <li class="subscription">
      <form accept-charset="UTF-8" action="/notifications/subscribe" class="js-social-container" data-autosubmit="true" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="XvjFjrMfYi8GM4OsO6PanNRW/kLCpCtsCY2mGwb3k8YwqwK2RHBm/ysexHLEjzbSLYYh7B6/w47jfNqHzNg4lw==" /></div>  <input id="repository_id" name="repository_id" type="hidden" value="27259872" />

    <div class="select-menu js-menu-container js-select-menu">
      <a class="social-count js-social-count" href="/do-web/jTinder/watchers">
        2
      </a>
      <a href="/do-web/jTinder/subscription"
        class="minibutton select-menu-button with-count js-menu-target" role="button" tabindex="0" aria-haspopup="true">
        <span class="js-select-button">
          <span class="octicon octicon-eye"></span>
          Watch
        </span>
      </a>

      <div class="select-menu-modal-holder">
        <div class="select-menu-modal subscription-menu-modal js-menu-content" aria-hidden="true">
          <div class="select-menu-header">
            <span class="select-menu-title">Notifications</span>
            <span class="octicon octicon-x js-menu-close" role="button" aria-label="Close"></span>
          </div> <!-- /.select-menu-header -->

          <div class="select-menu-list js-navigation-container" role="menu">

            <div class="select-menu-item js-navigation-item selected" role="menuitem" tabindex="0">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <div class="select-menu-item-text">
                <input checked="checked" id="do_included" name="do" type="radio" value="included" />
                <h4>Not watching</h4>
                <span class="description">Be notified when participating or @mentioned.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="octicon octicon-eye"></span>
                  Watch
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

            <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
              <span class="select-menu-item-icon octicon octicon octicon-check"></span>
              <div class="select-menu-item-text">
                <input id="do_subscribed" name="do" type="radio" value="subscribed" />
                <h4>Watching</h4>
                <span class="description">Be notified of all conversations.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="octicon octicon-eye"></span>
                  Unwatch
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

            <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <div class="select-menu-item-text">
                <input id="do_ignore" name="do" type="radio" value="ignore" />
                <h4>Ignoring</h4>
                <span class="description">Never be notified.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="octicon octicon-mute"></span>
                  Stop ignoring
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

          </div> <!-- /.select-menu-list -->

        </div> <!-- /.select-menu-modal -->
      </div> <!-- /.select-menu-modal-holder -->
    </div> <!-- /.select-menu -->

</form>
    </li>

  <li>
    
  <div class="js-toggler-container js-social-container starring-container ">

    <form accept-charset="UTF-8" action="/do-web/jTinder/unstar" class="js-toggler-form starred js-unstar-button" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="vJZek/epkGw1nRNRYvf4zh+ekfNC8lYmEWES2cDNpDtbFP2SPgOzJabg8vBSB9xFyj1FfrYZIX9lOkqKTpNGQQ==" /></div>
      <button
        class="minibutton with-count js-toggler-target star-button"
        aria-label="Unstar this repository" title="Unstar do-web/jTinder">
        <span class="octicon octicon-star"></span>
        Unstar
      </button>
        <a class="social-count js-social-count" href="/do-web/jTinder/stargazers">
          16
        </a>
</form>
    <form accept-charset="UTF-8" action="/do-web/jTinder/star" class="js-toggler-form unstarred js-star-button" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="OOOjWSv0Ki/t/6xaDOw+DG1zxyG67gnQUYdwYYLx63I0Kswbe4g/YfJG/Ewax1ks4Ku3i4vT412FmEiTjjGq0g==" /></div>
      <button
        class="minibutton with-count js-toggler-target star-button"
        aria-label="Star this repository" title="Star do-web/jTinder">
        <span class="octicon octicon-star"></span>
        Star
      </button>
        <a class="social-count js-social-count" href="/do-web/jTinder/stargazers">
          16
        </a>
</form>  </div>

  </li>


        <li>
          <a href="/do-web/jTinder/fork" class="minibutton with-count js-toggler-target fork-button tooltipped-n" title="Fork your own copy of do-web/jTinder to your account" aria-label="Fork your own copy of do-web/jTinder to your account" rel="facebox nofollow">
            <span class="octicon octicon-repo-forked"></span>
            Fork
          </a>
          <a href="/do-web/jTinder/network" class="social-count">4</a>
        </li>

</ul>

        <h1 itemscope itemtype="http://data-vocabulary.org/Breadcrumb" class="entry-title public">
          <span class="mega-octicon octicon-repo"></span>
          <span class="author"><a href="/do-web" class="url fn" itemprop="url" rel="author"><span itemprop="title">do-web</span></a></span><!--
       --><span class="path-divider">/</span><!--
       --><strong><a href="/do-web/jTinder" class="js-current-repository" data-pjax="#js-repo-pjax-container">jTinder</a></strong>

          <span class="page-context-loader">
            <img alt="" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
          </span>

        </h1>
      </div><!-- /.container -->
    </div><!-- /.repohead -->

    <div class="container">
      <div class="repository-with-sidebar repo-container new-discussion-timeline  ">
        <div class="repository-sidebar clearfix">
            
<nav class="sunken-menu repo-nav js-repo-nav js-sidenav-container-pjax js-octicon-loaders"
     role="navigation"
     data-pjax="#js-repo-pjax-container"
     data-issue-count-url="/do-web/jTinder/issues/counts">
  <ul class="sunken-menu-group">
    <li class="tooltipped tooltipped-w" aria-label="Code">
      <a href="/do-web/jTinder" aria-label="Code" class="selected js-selected-navigation-item sunken-menu-item" data-hotkey="g c" data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches /do-web/jTinder">
        <span class="octicon octicon-code"></span> <span class="full-word">Code</span>
        <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>    </li>

      <li class="tooltipped tooltipped-w" aria-label="Issues">
        <a href="/do-web/jTinder/issues" aria-label="Issues" class="js-selected-navigation-item sunken-menu-item" data-hotkey="g i" data-selected-links="repo_issues repo_labels repo_milestones /do-web/jTinder/issues">
          <span class="octicon octicon-issue-opened"></span> <span class="full-word">Issues</span>
          <span class="js-issue-replace-counter"></span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

    <li class="tooltipped tooltipped-w" aria-label="Pull Requests">
      <a href="/do-web/jTinder/pulls" aria-label="Pull Requests" class="js-selected-navigation-item sunken-menu-item" data-hotkey="g p" data-selected-links="repo_pulls /do-web/jTinder/pulls">
          <span class="octicon octicon-git-pull-request"></span> <span class="full-word">Pull Requests</span>
          <span class="js-pull-replace-counter"></span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>    </li>


      <li class="tooltipped tooltipped-w" aria-label="Wiki">
        <a href="/do-web/jTinder/wiki" aria-label="Wiki" class="js-selected-navigation-item sunken-menu-item" data-hotkey="g w" data-selected-links="repo_wiki /do-web/jTinder/wiki">
          <span class="octicon octicon-book"></span> <span class="full-word">Wiki</span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>
  </ul>
  <div class="sunken-menu-separator"></div>
  <ul class="sunken-menu-group">

    <li class="tooltipped tooltipped-w" aria-label="Pulse">
      <a href="/do-web/jTinder/pulse" aria-label="Pulse" class="js-selected-navigation-item sunken-menu-item" data-selected-links="pulse /do-web/jTinder/pulse">
        <span class="octicon octicon-pulse"></span> <span class="full-word">Pulse</span>
        <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>    </li>

    <li class="tooltipped tooltipped-w" aria-label="Graphs">
      <a href="/do-web/jTinder/graphs" aria-label="Graphs" class="js-selected-navigation-item sunken-menu-item" data-selected-links="repo_graphs repo_contributors /do-web/jTinder/graphs">
        <span class="octicon octicon-graph"></span> <span class="full-word">Graphs</span>
        <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>    </li>
  </ul>


</nav>

              <div class="only-with-full-nav">
                
  
<div class="clone-url open"
  data-protocol-type="http"
  data-url="/users/set_protocol?protocol_selector=http&amp;protocol_type=clone">
  <h3><span class="text-emphasized">HTTPS</span> clone URL</h3>
  <div class="input-group js-zeroclipboard-container">
    <input type="text" class="input-mini input-monospace js-url-field js-zeroclipboard-target"
           value="https://github.com/do-web/jTinder.git" readonly="readonly">
    <span class="input-group-button">
      <button aria-label="Copy to clipboard" class="js-zeroclipboard minibutton zeroclipboard-button" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </span>
  </div>
</div>

  
<div class="clone-url "
  data-protocol-type="ssh"
  data-url="/users/set_protocol?protocol_selector=ssh&amp;protocol_type=clone">
  <h3><span class="text-emphasized">SSH</span> clone URL</h3>
  <div class="input-group js-zeroclipboard-container">
    <input type="text" class="input-mini input-monospace js-url-field js-zeroclipboard-target"
           value="git@github.com:do-web/jTinder.git" readonly="readonly">
    <span class="input-group-button">
      <button aria-label="Copy to clipboard" class="js-zeroclipboard minibutton zeroclipboard-button" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </span>
  </div>
</div>

  
<div class="clone-url "
  data-protocol-type="subversion"
  data-url="/users/set_protocol?protocol_selector=subversion&amp;protocol_type=clone">
  <h3><span class="text-emphasized">Subversion</span> checkout URL</h3>
  <div class="input-group js-zeroclipboard-container">
    <input type="text" class="input-mini input-monospace js-url-field js-zeroclipboard-target"
           value="https://github.com/do-web/jTinder" readonly="readonly">
    <span class="input-group-button">
      <button aria-label="Copy to clipboard" class="js-zeroclipboard minibutton zeroclipboard-button" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </span>
  </div>
</div>



<p class="clone-options">You can clone with
  <a href="#" class="js-clone-selector" data-protocol="http">HTTPS</a>, <a href="#" class="js-clone-selector" data-protocol="ssh">SSH</a>, or <a href="#" class="js-clone-selector" data-protocol="subversion">Subversion</a>.
  <a href="https://help.github.com/articles/which-remote-url-should-i-use" class="help tooltipped tooltipped-n" aria-label="Get help on which URL is right for you.">
    <span class="octicon octicon-question"></span>
  </a>
</p>

  <a href="http://mac.github.com" data-url="github-mac://openRepo/https://github.com/do-web/jTinder" class="minibutton sidebar-button js-conduit-rewrite-url" title="Save do-web/jTinder to your computer and use it in GitHub Desktop." aria-label="Save do-web/jTinder to your computer and use it in GitHub Desktop.">
    <span class="octicon octicon-device-desktop"></span>
    Clone in Desktop
  </a>


                <a href="/do-web/jTinder/archive/master.zip"
                   class="minibutton sidebar-button"
                   aria-label="Download the contents of do-web/jTinder as a zip file"
                   title="Download the contents of do-web/jTinder as a zip file"
                   rel="nofollow">
                  <span class="octicon octicon-cloud-download"></span>
                  Download ZIP
                </a>
              </div>
        </div><!-- /.repository-sidebar -->

        <div id="js-repo-pjax-container" class="repository-content context-loader-container" data-pjax-container>
          

<a href="/do-web/jTinder/blob/a16652a3c905e2473ab132e1b20c9c418215741f/js/jquery.jTinder.js" class="hidden js-permalink-shortcut" data-hotkey="y">Permalink</a>

<!-- blob contrib key: blob_contributors:v21:2c925d32f37df1fb75f070c2041ab279 -->

<div class="file-navigation js-zeroclipboard-container">
  
<div class="select-menu js-menu-container js-select-menu left">
  <span class="minibutton select-menu-button js-menu-target css-truncate" data-hotkey="w"
    data-master-branch="master"
    data-ref="master"
    title="master"
    role="button" aria-label="Switch branches or tags" tabindex="0" aria-haspopup="true">
    <span class="octicon octicon-git-branch"></span>
    <i>branch:</i>
    <span class="js-select-button css-truncate-target">master</span>
  </span>

  <div class="select-menu-modal-holder js-menu-content js-navigation-container" data-pjax aria-hidden="true">

    <div class="select-menu-modal">
      <div class="select-menu-header">
        <span class="select-menu-title">Switch branches/tags</span>
        <span class="octicon octicon-x js-menu-close" role="button" aria-label="Close"></span>
      </div> <!-- /.select-menu-header -->

      <div class="select-menu-filters">
        <div class="select-menu-text-filter">
          <input type="text" aria-label="Filter branches/tags" id="context-commitish-filter-field" class="js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
        </div>
        <div class="select-menu-tabs">
          <ul>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="branches" class="js-select-menu-tab">Branches</a>
            </li>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="tags" class="js-select-menu-tab">Tags</a>
            </li>
          </ul>
        </div><!-- /.select-menu-tabs -->
      </div><!-- /.select-menu-filters -->

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="branches">

        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <div class="select-menu-item js-navigation-item selected">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/do-web/jTinder/blob/master/js/jquery.jTinder.js"
                 data-name="master"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="master">master</a>
            </div> <!-- /.select-menu-item -->
        </div>

          <div class="select-menu-no-results">Nothing to show</div>
      </div> <!-- /.select-menu-list -->

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="tags">
        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


        </div>

        <div class="select-menu-no-results">Nothing to show</div>
      </div> <!-- /.select-menu-list -->

    </div> <!-- /.select-menu-modal -->
  </div> <!-- /.select-menu-modal-holder -->
</div> <!-- /.select-menu -->

  <div class="button-group right">
    <a href="/do-web/jTinder/find/master"
          class="js-show-file-finder minibutton empty-icon tooltipped tooltipped-s"
          data-pjax
          data-hotkey="t"
          aria-label="Quickly jump between files">
      <span class="octicon octicon-list-unordered"></span>
    </a>
    <button aria-label="Copy file path to clipboard" class="js-zeroclipboard minibutton zeroclipboard-button" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
  </div>

  <div class="breadcrumb js-zeroclipboard-target">
    <span class='repo-root js-repo-root'><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/do-web/jTinder" class="" data-branch="master" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">jTinder</span></a></span></span><span class="separator">/</span><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/do-web/jTinder/tree/master/js" class="" data-branch="master" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">js</span></a></span><span class="separator">/</span><strong class="final-path">jquery.jTinder.js</strong>
  </div>
</div>


  <div class="commit file-history-tease">
    <div class="file-history-tease-header">
        <img alt="Dominik Weber" class="avatar" data-user="862783" height="24" src="https://avatars1.githubusercontent.com/u/862783?v=3&amp;s=48" width="24" />
        <span class="author"><a href="/do-web" rel="author">do-web</a></span>
        <time datetime="2014-11-28T09:37:46Z" is="relative-time">Nov 28, 2014</time>
        <div class="commit-title">
            <a href="/do-web/jTinder/commit/4598f6617200ad679792af6e516ddfd615e14817" class="message" data-pjax="true" title="init">init</a>
        </div>
    </div>

    <div class="participation">
      <p class="quickstat">
        <a href="#blob_contributors_box" rel="facebox">
          <strong>1</strong>
           contributor
        </a>
      </p>
      
    </div>
    <div id="blob_contributors_box" style="display:none">
      <h2 class="facebox-header">Users who have contributed to this file</h2>
      <ul class="facebox-user-list">
          <li class="facebox-user-list-item">
            <img alt="Dominik Weber" data-user="862783" height="24" src="https://avatars1.githubusercontent.com/u/862783?v=3&amp;s=48" width="24" />
            <a href="/do-web">do-web</a>
          </li>
      </ul>
    </div>
  </div>

<div class="file-box">
  <div class="file">
    <div class="meta clearfix">
      <div class="info file-name">
          <span>179 lines (157 sloc)</span>
          <span class="meta-divider"></span>
        <span>5.779 kb</span>
      </div>
      <div class="actions">
        <div class="button-group">
          <a href="/do-web/jTinder/raw/master/js/jquery.jTinder.js" class="minibutton " id="raw-url">Raw</a>
            <a href="/do-web/jTinder/blame/master/js/jquery.jTinder.js" class="minibutton js-update-url-with-hash">Blame</a>
          <a href="/do-web/jTinder/commits/master/js/jquery.jTinder.js" class="minibutton " rel="nofollow">History</a>
        </div><!-- /.button-group -->

          <a class="octicon-button tooltipped tooltipped-nw js-conduit-openfile-check"
             href="http://mac.github.com"
             data-url="github-mac://openRepo/https://github.com/do-web/jTinder?branch=master&amp;filepath=js%2Fjquery.jTinder.js"
             aria-label="Open this file in GitHub for Mac"
             data-failed-title="Your version of GitHub for Mac is too old to open this file. Try checking for updates.">
              <span class="octicon octicon-device-desktop"></span>
          </a>

              <a class="octicon-button tooltipped tooltipped-n js-update-url-with-hash"
                 aria-label="Clicking this button will fork this project so you can edit the file"
                 href="/do-web/jTinder/edit/master/js/jquery.jTinder.js"
                 data-method="post" rel="nofollow"><span class="octicon octicon-pencil"></span></a>

            <a class="octicon-button danger tooltipped tooltipped-s"
               href="/do-web/jTinder/delete/master/js/jquery.jTinder.js"
               aria-label="Fork this project and delete file"
               data-method="post" data-test-id="delete-blob-file" rel="nofollow">
          <span class="octicon octicon-trashcan"></span>
        </a>
      </div><!-- /.actions -->
    </div>
    

  <div class="blob-wrapper data type-javascript">
      <table class="highlight tab-size-8 js-file-line-container">
      <tr>
        <td id="L1" class="blob-num js-line-number" data-line-number="1"></td>
        <td id="LC1" class="blob-code js-file-line"><span class="pl-c">/*</span></td>
      </tr>
      <tr>
        <td id="L2" class="blob-num js-line-number" data-line-number="2"></td>
        <td id="LC2" class="blob-code js-file-line"><span class="pl-c"> * jTinder v.1.0.0</span></td>
      </tr>
      <tr>
        <td id="L3" class="blob-num js-line-number" data-line-number="3"></td>
        <td id="LC3" class="blob-code js-file-line"><span class="pl-c"> * https://github.com/do-web/jTinder</span></td>
      </tr>
      <tr>
        <td id="L4" class="blob-num js-line-number" data-line-number="4"></td>
        <td id="LC4" class="blob-code js-file-line"><span class="pl-c"> * Requires jQuery 1.7+, jQuery transform2d</span></td>
      </tr>
      <tr>
        <td id="L5" class="blob-num js-line-number" data-line-number="5"></td>
        <td id="LC5" class="blob-code js-file-line"><span class="pl-c"> *</span></td>
      </tr>
      <tr>
        <td id="L6" class="blob-num js-line-number" data-line-number="6"></td>
        <td id="LC6" class="blob-code js-file-line"><span class="pl-c"> * Copyright (c) 2014, Dominik Weber</span></td>
      </tr>
      <tr>
        <td id="L7" class="blob-num js-line-number" data-line-number="7"></td>
        <td id="LC7" class="blob-code js-file-line"><span class="pl-c"> * Licensed under GPL Version 2.</span></td>
      </tr>
      <tr>
        <td id="L8" class="blob-num js-line-number" data-line-number="8"></td>
        <td id="LC8" class="blob-code js-file-line"><span class="pl-c"> * https://github.com/do-web/jTinder/blob/master/LICENSE</span></td>
      </tr>
      <tr>
        <td id="L9" class="blob-num js-line-number" data-line-number="9"></td>
        <td id="LC9" class="blob-code js-file-line"><span class="pl-c"> */</span></td>
      </tr>
      <tr>
        <td id="L10" class="blob-num js-line-number" data-line-number="10"></td>
        <td id="LC10" class="blob-code js-file-line">;(<span class="pl-st">function</span> (<span class="pl-vpf">$</span>, <span class="pl-vpf">window</span>, <span class="pl-vpf">document</span>, <span class="pl-vpf">undefined</span>) {</td>
      </tr>
      <tr>
        <td id="L11" class="blob-num js-line-number" data-line-number="11"></td>
        <td id="LC11" class="blob-code js-file-line">	<span class="pl-s">var</span> pluginName <span class="pl-k">=</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>jTinder<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L12" class="blob-num js-line-number" data-line-number="12"></td>
        <td id="LC12" class="blob-code js-file-line">		defaults <span class="pl-k">=</span> {</td>
      </tr>
      <tr>
        <td id="L13" class="blob-num js-line-number" data-line-number="13"></td>
        <td id="LC13" class="blob-code js-file-line">			onDislike<span class="pl-k">:</span> <span class="pl-c1">null</span>,</td>
      </tr>
      <tr>
        <td id="L14" class="blob-num js-line-number" data-line-number="14"></td>
        <td id="LC14" class="blob-code js-file-line">			onLike<span class="pl-k">:</span> <span class="pl-c1">null</span>,</td>
      </tr>
      <tr>
        <td id="L15" class="blob-num js-line-number" data-line-number="15"></td>
        <td id="LC15" class="blob-code js-file-line">			animationRevertSpeed<span class="pl-k">:</span> <span class="pl-c1">200</span>,</td>
      </tr>
      <tr>
        <td id="L16" class="blob-num js-line-number" data-line-number="16"></td>
        <td id="LC16" class="blob-code js-file-line">			animationSpeed<span class="pl-k">:</span> <span class="pl-c1">400</span>,</td>
      </tr>
      <tr>
        <td id="L17" class="blob-num js-line-number" data-line-number="17"></td>
        <td id="LC17" class="blob-code js-file-line">			threshold<span class="pl-k">:</span> <span class="pl-c1">1</span>,</td>
      </tr>
      <tr>
        <td id="L18" class="blob-num js-line-number" data-line-number="18"></td>
        <td id="LC18" class="blob-code js-file-line">			likeSelector<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>.like<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L19" class="blob-num js-line-number" data-line-number="19"></td>
        <td id="LC19" class="blob-code js-file-line">			dislikeSelector<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>.dislike<span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L20" class="blob-num js-line-number" data-line-number="20"></td>
        <td id="LC20" class="blob-code js-file-line">		};</td>
      </tr>
      <tr>
        <td id="L21" class="blob-num js-line-number" data-line-number="21"></td>
        <td id="LC21" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L22" class="blob-num js-line-number" data-line-number="22"></td>
        <td id="LC22" class="blob-code js-file-line">	<span class="pl-s">var</span> container <span class="pl-k">=</span> <span class="pl-c1">null</span>;</td>
      </tr>
      <tr>
        <td id="L23" class="blob-num js-line-number" data-line-number="23"></td>
        <td id="LC23" class="blob-code js-file-line">	<span class="pl-s">var</span> panes <span class="pl-k">=</span> <span class="pl-c1">null</span>;</td>
      </tr>
      <tr>
        <td id="L24" class="blob-num js-line-number" data-line-number="24"></td>
        <td id="LC24" class="blob-code js-file-line">	<span class="pl-s">var</span> $that <span class="pl-k">=</span> <span class="pl-c1">null</span>;</td>
      </tr>
      <tr>
        <td id="L25" class="blob-num js-line-number" data-line-number="25"></td>
        <td id="LC25" class="blob-code js-file-line">	<span class="pl-s">var</span> xStart <span class="pl-k">=</span> <span class="pl-c1">0</span>;</td>
      </tr>
      <tr>
        <td id="L26" class="blob-num js-line-number" data-line-number="26"></td>
        <td id="LC26" class="blob-code js-file-line">	<span class="pl-s">var</span> yStart <span class="pl-k">=</span> <span class="pl-c1">0</span>;</td>
      </tr>
      <tr>
        <td id="L27" class="blob-num js-line-number" data-line-number="27"></td>
        <td id="LC27" class="blob-code js-file-line">	<span class="pl-s">var</span> touchStart <span class="pl-k">=</span> <span class="pl-c1">false</span>;</td>
      </tr>
      <tr>
        <td id="L28" class="blob-num js-line-number" data-line-number="28"></td>
        <td id="LC28" class="blob-code js-file-line">	<span class="pl-s">var</span> posX <span class="pl-k">=</span> <span class="pl-c1">0</span>, posY <span class="pl-k">=</span> <span class="pl-c1">0</span>, lastPosX <span class="pl-k">=</span> <span class="pl-c1">0</span>, lastPosY <span class="pl-k">=</span> <span class="pl-c1">0</span>, pane_width <span class="pl-k">=</span> <span class="pl-c1">0</span>, pane_count <span class="pl-k">=</span> <span class="pl-c1">0</span>, current_pane <span class="pl-k">=</span> <span class="pl-c1">0</span>;</td>
      </tr>
      <tr>
        <td id="L29" class="blob-num js-line-number" data-line-number="29"></td>
        <td id="LC29" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L30" class="blob-num js-line-number" data-line-number="30"></td>
        <td id="LC30" class="blob-code js-file-line">	<span class="pl-st">function</span> <span class="pl-en">Plugin</span>(<span class="pl-vpf">element</span>, <span class="pl-vpf">options</span>) {</td>
      </tr>
      <tr>
        <td id="L31" class="blob-num js-line-number" data-line-number="31"></td>
        <td id="LC31" class="blob-code js-file-line">		<span class="pl-v">this</span>.element <span class="pl-k">=</span> element;</td>
      </tr>
      <tr>
        <td id="L32" class="blob-num js-line-number" data-line-number="32"></td>
        <td id="LC32" class="blob-code js-file-line">		<span class="pl-v">this</span>.settings <span class="pl-k">=</span> $.extend({}, defaults, options);</td>
      </tr>
      <tr>
        <td id="L33" class="blob-num js-line-number" data-line-number="33"></td>
        <td id="LC33" class="blob-code js-file-line">		<span class="pl-v">this</span>._defaults <span class="pl-k">=</span> defaults;</td>
      </tr>
      <tr>
        <td id="L34" class="blob-num js-line-number" data-line-number="34"></td>
        <td id="LC34" class="blob-code js-file-line">		<span class="pl-v">this</span>._name <span class="pl-k">=</span> pluginName;</td>
      </tr>
      <tr>
        <td id="L35" class="blob-num js-line-number" data-line-number="35"></td>
        <td id="LC35" class="blob-code js-file-line">		<span class="pl-v">this</span>.init(element);</td>
      </tr>
      <tr>
        <td id="L36" class="blob-num js-line-number" data-line-number="36"></td>
        <td id="LC36" class="blob-code js-file-line">	}</td>
      </tr>
      <tr>
        <td id="L37" class="blob-num js-line-number" data-line-number="37"></td>
        <td id="LC37" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L38" class="blob-num js-line-number" data-line-number="38"></td>
        <td id="LC38" class="blob-code js-file-line">	<span class="pl-s3">Plugin</span>.<span class="pl-sc">prototype</span> <span class="pl-k">=</span> {</td>
      </tr>
      <tr>
        <td id="L39" class="blob-num js-line-number" data-line-number="39"></td>
        <td id="LC39" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L40" class="blob-num js-line-number" data-line-number="40"></td>
        <td id="LC40" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L41" class="blob-num js-line-number" data-line-number="41"></td>
        <td id="LC41" class="blob-code js-file-line">		<span class="pl-en">init</span>: <span class="pl-st">function</span> (<span class="pl-vpf">element</span>) {</td>
      </tr>
      <tr>
        <td id="L42" class="blob-num js-line-number" data-line-number="42"></td>
        <td id="LC42" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L43" class="blob-num js-line-number" data-line-number="43"></td>
        <td id="LC43" class="blob-code js-file-line">			container <span class="pl-k">=</span> $(<span class="pl-s1"><span class="pl-pds">&quot;</span>&gt;ul<span class="pl-pds">&quot;</span></span>, element);</td>
      </tr>
      <tr>
        <td id="L44" class="blob-num js-line-number" data-line-number="44"></td>
        <td id="LC44" class="blob-code js-file-line">			panes <span class="pl-k">=</span> $(<span class="pl-s1"><span class="pl-pds">&quot;</span>&gt;ul&gt;li<span class="pl-pds">&quot;</span></span>, element);</td>
      </tr>
      <tr>
        <td id="L45" class="blob-num js-line-number" data-line-number="45"></td>
        <td id="LC45" class="blob-code js-file-line">			pane_width <span class="pl-k">=</span> container.<span class="pl-sc">width</span>();</td>
      </tr>
      <tr>
        <td id="L46" class="blob-num js-line-number" data-line-number="46"></td>
        <td id="LC46" class="blob-code js-file-line">			pane_count <span class="pl-k">=</span> panes.<span class="pl-sc">length</span>;</td>
      </tr>
      <tr>
        <td id="L47" class="blob-num js-line-number" data-line-number="47"></td>
        <td id="LC47" class="blob-code js-file-line">			current_pane <span class="pl-k">=</span> panes.<span class="pl-sc">length</span> <span class="pl-k">-</span> <span class="pl-c1">1</span>;</td>
      </tr>
      <tr>
        <td id="L48" class="blob-num js-line-number" data-line-number="48"></td>
        <td id="LC48" class="blob-code js-file-line">			$that <span class="pl-k">=</span> <span class="pl-v">this</span>;</td>
      </tr>
      <tr>
        <td id="L49" class="blob-num js-line-number" data-line-number="49"></td>
        <td id="LC49" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L50" class="blob-num js-line-number" data-line-number="50"></td>
        <td id="LC50" class="blob-code js-file-line">			$(element).bind(<span class="pl-s1"><span class="pl-pds">&#39;</span>touchstart mousedown<span class="pl-pds">&#39;</span></span>, <span class="pl-v">this</span>.handler);</td>
      </tr>
      <tr>
        <td id="L51" class="blob-num js-line-number" data-line-number="51"></td>
        <td id="LC51" class="blob-code js-file-line">			$(element).bind(<span class="pl-s1"><span class="pl-pds">&#39;</span>touchmove mousemove<span class="pl-pds">&#39;</span></span>, <span class="pl-v">this</span>.handler);</td>
      </tr>
      <tr>
        <td id="L52" class="blob-num js-line-number" data-line-number="52"></td>
        <td id="LC52" class="blob-code js-file-line">			$(element).bind(<span class="pl-s1"><span class="pl-pds">&#39;</span>touchend mouseup<span class="pl-pds">&#39;</span></span>, <span class="pl-v">this</span>.handler);</td>
      </tr>
      <tr>
        <td id="L53" class="blob-num js-line-number" data-line-number="53"></td>
        <td id="LC53" class="blob-code js-file-line">		},</td>
      </tr>
      <tr>
        <td id="L54" class="blob-num js-line-number" data-line-number="54"></td>
        <td id="LC54" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L55" class="blob-num js-line-number" data-line-number="55"></td>
        <td id="LC55" class="blob-code js-file-line">		<span class="pl-en">showPane</span>: <span class="pl-st">function</span> (<span class="pl-vpf">index</span>) {</td>
      </tr>
      <tr>
        <td id="L56" class="blob-num js-line-number" data-line-number="56"></td>
        <td id="LC56" class="blob-code js-file-line">			panes.eq(current_pane).hide();</td>
      </tr>
      <tr>
        <td id="L57" class="blob-num js-line-number" data-line-number="57"></td>
        <td id="LC57" class="blob-code js-file-line">			current_pane <span class="pl-k">=</span> index;</td>
      </tr>
      <tr>
        <td id="L58" class="blob-num js-line-number" data-line-number="58"></td>
        <td id="LC58" class="blob-code js-file-line">		},</td>
      </tr>
      <tr>
        <td id="L59" class="blob-num js-line-number" data-line-number="59"></td>
        <td id="LC59" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L60" class="blob-num js-line-number" data-line-number="60"></td>
        <td id="LC60" class="blob-code js-file-line">		<span class="pl-en">next</span>: <span class="pl-st">function</span> () {</td>
      </tr>
      <tr>
        <td id="L61" class="blob-num js-line-number" data-line-number="61"></td>
        <td id="LC61" class="blob-code js-file-line">			<span class="pl-k">return</span> <span class="pl-v">this</span>.showPane(current_pane <span class="pl-k">-</span> <span class="pl-c1">1</span>);</td>
      </tr>
      <tr>
        <td id="L62" class="blob-num js-line-number" data-line-number="62"></td>
        <td id="LC62" class="blob-code js-file-line">		},</td>
      </tr>
      <tr>
        <td id="L63" class="blob-num js-line-number" data-line-number="63"></td>
        <td id="LC63" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L64" class="blob-num js-line-number" data-line-number="64"></td>
        <td id="LC64" class="blob-code js-file-line">		<span class="pl-en">dislike</span>: <span class="pl-st">function</span>() {</td>
      </tr>
      <tr>
        <td id="L65" class="blob-num js-line-number" data-line-number="65"></td>
        <td id="LC65" class="blob-code js-file-line">			panes.eq(current_pane).animate({<span class="pl-s1"><span class="pl-pds">&quot;</span>transform<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>translate(-<span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> (pane_width) <span class="pl-k">+</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>px,<span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> (pane_width<span class="pl-k">*-</span><span class="pl-c1">1.5</span>) <span class="pl-k">+</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>px) rotate(-60deg)<span class="pl-pds">&quot;</span></span>}, $that.settings.animationSpeed, <span class="pl-st">function</span> () {</td>
      </tr>
      <tr>
        <td id="L66" class="blob-num js-line-number" data-line-number="66"></td>
        <td id="LC66" class="blob-code js-file-line">				<span class="pl-k">if</span>($that.settings.onDislike) {</td>
      </tr>
      <tr>
        <td id="L67" class="blob-num js-line-number" data-line-number="67"></td>
        <td id="LC67" class="blob-code js-file-line">					$that.settings.onDislike(panes.eq(current_pane));</td>
      </tr>
      <tr>
        <td id="L68" class="blob-num js-line-number" data-line-number="68"></td>
        <td id="LC68" class="blob-code js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L69" class="blob-num js-line-number" data-line-number="69"></td>
        <td id="LC69" class="blob-code js-file-line">				$that.<span class="pl-sc">next</span>();</td>
      </tr>
      <tr>
        <td id="L70" class="blob-num js-line-number" data-line-number="70"></td>
        <td id="LC70" class="blob-code js-file-line">			});</td>
      </tr>
      <tr>
        <td id="L71" class="blob-num js-line-number" data-line-number="71"></td>
        <td id="LC71" class="blob-code js-file-line">		},</td>
      </tr>
      <tr>
        <td id="L72" class="blob-num js-line-number" data-line-number="72"></td>
        <td id="LC72" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L73" class="blob-num js-line-number" data-line-number="73"></td>
        <td id="LC73" class="blob-code js-file-line">		<span class="pl-en">like</span>: <span class="pl-st">function</span>() {</td>
      </tr>
      <tr>
        <td id="L74" class="blob-num js-line-number" data-line-number="74"></td>
        <td id="LC74" class="blob-code js-file-line">			panes.eq(current_pane).animate({<span class="pl-s1"><span class="pl-pds">&quot;</span>transform<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>translate(<span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> (pane_width) <span class="pl-k">+</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>px,<span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> (pane_width<span class="pl-k">*-</span><span class="pl-c1">1.5</span>) <span class="pl-k">+</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>px) rotate(60deg)<span class="pl-pds">&quot;</span></span>}, $that.settings.animationSpeed, <span class="pl-st">function</span> () {</td>
      </tr>
      <tr>
        <td id="L75" class="blob-num js-line-number" data-line-number="75"></td>
        <td id="LC75" class="blob-code js-file-line">				<span class="pl-k">if</span>($that.settings.onLike) {</td>
      </tr>
      <tr>
        <td id="L76" class="blob-num js-line-number" data-line-number="76"></td>
        <td id="LC76" class="blob-code js-file-line">					$that.settings.onLike(panes.eq(current_pane));</td>
      </tr>
      <tr>
        <td id="L77" class="blob-num js-line-number" data-line-number="77"></td>
        <td id="LC77" class="blob-code js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L78" class="blob-num js-line-number" data-line-number="78"></td>
        <td id="LC78" class="blob-code js-file-line">				$that.<span class="pl-sc">next</span>();</td>
      </tr>
      <tr>
        <td id="L79" class="blob-num js-line-number" data-line-number="79"></td>
        <td id="LC79" class="blob-code js-file-line">			});</td>
      </tr>
      <tr>
        <td id="L80" class="blob-num js-line-number" data-line-number="80"></td>
        <td id="LC80" class="blob-code js-file-line">		},</td>
      </tr>
      <tr>
        <td id="L81" class="blob-num js-line-number" data-line-number="81"></td>
        <td id="LC81" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L82" class="blob-num js-line-number" data-line-number="82"></td>
        <td id="LC82" class="blob-code js-file-line">		<span class="pl-en">handler</span>: <span class="pl-st">function</span> (<span class="pl-vpf">ev</span>) {</td>
      </tr>
      <tr>
        <td id="L83" class="blob-num js-line-number" data-line-number="83"></td>
        <td id="LC83" class="blob-code js-file-line">			ev.preventDefault();</td>
      </tr>
      <tr>
        <td id="L84" class="blob-num js-line-number" data-line-number="84"></td>
        <td id="LC84" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L85" class="blob-num js-line-number" data-line-number="85"></td>
        <td id="LC85" class="blob-code js-file-line">			<span class="pl-k">switch</span> (ev.<span class="pl-sc">type</span>) {</td>
      </tr>
      <tr>
        <td id="L86" class="blob-num js-line-number" data-line-number="86"></td>
        <td id="LC86" class="blob-code js-file-line">				<span class="pl-k">case</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>touchstart<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span></td>
      </tr>
      <tr>
        <td id="L87" class="blob-num js-line-number" data-line-number="87"></td>
        <td id="LC87" class="blob-code js-file-line">					<span class="pl-k">if</span>(touchStart <span class="pl-k">===</span> <span class="pl-c1">false</span>) {</td>
      </tr>
      <tr>
        <td id="L88" class="blob-num js-line-number" data-line-number="88"></td>
        <td id="LC88" class="blob-code js-file-line">						touchStart <span class="pl-k">=</span> <span class="pl-c1">true</span>;</td>
      </tr>
      <tr>
        <td id="L89" class="blob-num js-line-number" data-line-number="89"></td>
        <td id="LC89" class="blob-code js-file-line">						xStart <span class="pl-k">=</span> ev.originalEvent.touches[<span class="pl-c1">0</span>].<span class="pl-sc">pageX</span>;</td>
      </tr>
      <tr>
        <td id="L90" class="blob-num js-line-number" data-line-number="90"></td>
        <td id="LC90" class="blob-code js-file-line">						yStart <span class="pl-k">=</span> ev.originalEvent.touches[<span class="pl-c1">0</span>].<span class="pl-sc">pageY</span>;</td>
      </tr>
      <tr>
        <td id="L91" class="blob-num js-line-number" data-line-number="91"></td>
        <td id="LC91" class="blob-code js-file-line">					}</td>
      </tr>
      <tr>
        <td id="L92" class="blob-num js-line-number" data-line-number="92"></td>
        <td id="LC92" class="blob-code js-file-line">				<span class="pl-k">case</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>mousedown<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span></td>
      </tr>
      <tr>
        <td id="L93" class="blob-num js-line-number" data-line-number="93"></td>
        <td id="LC93" class="blob-code js-file-line">					<span class="pl-k">if</span>(touchStart <span class="pl-k">===</span> <span class="pl-c1">false</span>) {</td>
      </tr>
      <tr>
        <td id="L94" class="blob-num js-line-number" data-line-number="94"></td>
        <td id="LC94" class="blob-code js-file-line">						touchStart <span class="pl-k">=</span> <span class="pl-c1">true</span>;</td>
      </tr>
      <tr>
        <td id="L95" class="blob-num js-line-number" data-line-number="95"></td>
        <td id="LC95" class="blob-code js-file-line">						xStart <span class="pl-k">=</span> ev.<span class="pl-sc">pageX</span>;</td>
      </tr>
      <tr>
        <td id="L96" class="blob-num js-line-number" data-line-number="96"></td>
        <td id="LC96" class="blob-code js-file-line">						yStart <span class="pl-k">=</span> ev.<span class="pl-sc">pageY</span>;</td>
      </tr>
      <tr>
        <td id="L97" class="blob-num js-line-number" data-line-number="97"></td>
        <td id="LC97" class="blob-code js-file-line">					}</td>
      </tr>
      <tr>
        <td id="L98" class="blob-num js-line-number" data-line-number="98"></td>
        <td id="LC98" class="blob-code js-file-line">				<span class="pl-k">case</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>mousemove<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span></td>
      </tr>
      <tr>
        <td id="L99" class="blob-num js-line-number" data-line-number="99"></td>
        <td id="LC99" class="blob-code js-file-line">				<span class="pl-k">case</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>touchmove<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span></td>
      </tr>
      <tr>
        <td id="L100" class="blob-num js-line-number" data-line-number="100"></td>
        <td id="LC100" class="blob-code js-file-line">					<span class="pl-k">if</span>(touchStart <span class="pl-k">===</span> <span class="pl-c1">true</span>) {</td>
      </tr>
      <tr>
        <td id="L101" class="blob-num js-line-number" data-line-number="101"></td>
        <td id="LC101" class="blob-code js-file-line">						<span class="pl-s">var</span> pageX <span class="pl-k">=</span> <span class="pl-k">typeof</span> ev.<span class="pl-sc">pageX</span> <span class="pl-k">==</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>undefined<span class="pl-pds">&#39;</span></span> <span class="pl-k">?</span> ev.originalEvent.touches[<span class="pl-c1">0</span>].<span class="pl-sc">pageX</span> <span class="pl-k">:</span> ev.<span class="pl-sc">pageX</span>;</td>
      </tr>
      <tr>
        <td id="L102" class="blob-num js-line-number" data-line-number="102"></td>
        <td id="LC102" class="blob-code js-file-line">						<span class="pl-s">var</span> pageY <span class="pl-k">=</span> <span class="pl-k">typeof</span> ev.<span class="pl-sc">pageY</span> <span class="pl-k">==</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>undefined<span class="pl-pds">&#39;</span></span> <span class="pl-k">?</span> ev.originalEvent.touches[<span class="pl-c1">0</span>].<span class="pl-sc">pageY</span> <span class="pl-k">:</span> ev.<span class="pl-sc">pageY</span>;</td>
      </tr>
      <tr>
        <td id="L103" class="blob-num js-line-number" data-line-number="103"></td>
        <td id="LC103" class="blob-code js-file-line">						<span class="pl-s">var</span> deltaX <span class="pl-k">=</span> <span class="pl-s3">parseInt</span>(pageX) <span class="pl-k">-</span> <span class="pl-s3">parseInt</span>(xStart);</td>
      </tr>
      <tr>
        <td id="L104" class="blob-num js-line-number" data-line-number="104"></td>
        <td id="LC104" class="blob-code js-file-line">						<span class="pl-s">var</span> deltaY <span class="pl-k">=</span> <span class="pl-s3">parseInt</span>(pageY) <span class="pl-k">-</span> <span class="pl-s3">parseInt</span>(yStart);</td>
      </tr>
      <tr>
        <td id="L105" class="blob-num js-line-number" data-line-number="105"></td>
        <td id="LC105" class="blob-code js-file-line">						<span class="pl-s">var</span> percent <span class="pl-k">=</span> ((<span class="pl-c1">100</span> / pane_width) <span class="pl-k">*</span> deltaX) / pane_count;</td>
      </tr>
      <tr>
        <td id="L106" class="blob-num js-line-number" data-line-number="106"></td>
        <td id="LC106" class="blob-code js-file-line">						posX <span class="pl-k">=</span> deltaX <span class="pl-k">+</span> lastPosX;</td>
      </tr>
      <tr>
        <td id="L107" class="blob-num js-line-number" data-line-number="107"></td>
        <td id="LC107" class="blob-code js-file-line">						posY <span class="pl-k">=</span> deltaY <span class="pl-k">+</span> lastPosY;</td>
      </tr>
      <tr>
        <td id="L108" class="blob-num js-line-number" data-line-number="108"></td>
        <td id="LC108" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L109" class="blob-num js-line-number" data-line-number="109"></td>
        <td id="LC109" class="blob-code js-file-line">						panes.eq(current_pane).css(<span class="pl-s1"><span class="pl-pds">&quot;</span>transform<span class="pl-pds">&quot;</span></span>, <span class="pl-s1"><span class="pl-pds">&quot;</span>translate(<span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> posX <span class="pl-k">+</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>px,<span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> posY <span class="pl-k">+</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>px) rotate(<span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> (percent / <span class="pl-c1">2</span>) <span class="pl-k">+</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>deg)<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L110" class="blob-num js-line-number" data-line-number="110"></td>
        <td id="LC110" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L111" class="blob-num js-line-number" data-line-number="111"></td>
        <td id="LC111" class="blob-code js-file-line">						<span class="pl-s">var</span> opa <span class="pl-k">=</span> (<span class="pl-s3">Math</span>.<span class="pl-s3">abs</span>(deltaX) / $that.settings.threshold) / <span class="pl-c1">100</span> <span class="pl-k">+</span> <span class="pl-c1">0.2</span>;</td>
      </tr>
      <tr>
        <td id="L112" class="blob-num js-line-number" data-line-number="112"></td>
        <td id="LC112" class="blob-code js-file-line">						<span class="pl-k">if</span>(opa <span class="pl-k">&gt;</span> <span class="pl-c1">1.0</span>) {</td>
      </tr>
      <tr>
        <td id="L113" class="blob-num js-line-number" data-line-number="113"></td>
        <td id="LC113" class="blob-code js-file-line">							opa <span class="pl-k">=</span> <span class="pl-c1">1.0</span>;</td>
      </tr>
      <tr>
        <td id="L114" class="blob-num js-line-number" data-line-number="114"></td>
        <td id="LC114" class="blob-code js-file-line">						}</td>
      </tr>
      <tr>
        <td id="L115" class="blob-num js-line-number" data-line-number="115"></td>
        <td id="LC115" class="blob-code js-file-line">						<span class="pl-k">if</span> (posX <span class="pl-k">&gt;=</span> <span class="pl-c1">0</span>) {</td>
      </tr>
      <tr>
        <td id="L116" class="blob-num js-line-number" data-line-number="116"></td>
        <td id="LC116" class="blob-code js-file-line">							panes.eq(current_pane).<span class="pl-s3">find</span>($that.settings.likeSelector).css(<span class="pl-s1"><span class="pl-pds">&#39;</span>opacity<span class="pl-pds">&#39;</span></span>, opa);</td>
      </tr>
      <tr>
        <td id="L117" class="blob-num js-line-number" data-line-number="117"></td>
        <td id="LC117" class="blob-code js-file-line">							panes.eq(current_pane).<span class="pl-s3">find</span>($that.settings.dislikeSelector).css(<span class="pl-s1"><span class="pl-pds">&#39;</span>opacity<span class="pl-pds">&#39;</span></span>, <span class="pl-c1">0</span>);</td>
      </tr>
      <tr>
        <td id="L118" class="blob-num js-line-number" data-line-number="118"></td>
        <td id="LC118" class="blob-code js-file-line">						} <span class="pl-k">else</span> <span class="pl-k">if</span> (posX <span class="pl-k">&lt;</span> <span class="pl-c1">0</span>) {</td>
      </tr>
      <tr>
        <td id="L119" class="blob-num js-line-number" data-line-number="119"></td>
        <td id="LC119" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L120" class="blob-num js-line-number" data-line-number="120"></td>
        <td id="LC120" class="blob-code js-file-line">							panes.eq(current_pane).<span class="pl-s3">find</span>($that.settings.dislikeSelector).css(<span class="pl-s1"><span class="pl-pds">&#39;</span>opacity<span class="pl-pds">&#39;</span></span>, opa);</td>
      </tr>
      <tr>
        <td id="L121" class="blob-num js-line-number" data-line-number="121"></td>
        <td id="LC121" class="blob-code js-file-line">							panes.eq(current_pane).<span class="pl-s3">find</span>($that.settings.likeSelector).css(<span class="pl-s1"><span class="pl-pds">&#39;</span>opacity<span class="pl-pds">&#39;</span></span>, <span class="pl-c1">0</span>);</td>
      </tr>
      <tr>
        <td id="L122" class="blob-num js-line-number" data-line-number="122"></td>
        <td id="LC122" class="blob-code js-file-line">						}</td>
      </tr>
      <tr>
        <td id="L123" class="blob-num js-line-number" data-line-number="123"></td>
        <td id="LC123" class="blob-code js-file-line">					}</td>
      </tr>
      <tr>
        <td id="L124" class="blob-num js-line-number" data-line-number="124"></td>
        <td id="LC124" class="blob-code js-file-line">					<span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L125" class="blob-num js-line-number" data-line-number="125"></td>
        <td id="LC125" class="blob-code js-file-line">				<span class="pl-k">case</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>mouseup<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span></td>
      </tr>
      <tr>
        <td id="L126" class="blob-num js-line-number" data-line-number="126"></td>
        <td id="LC126" class="blob-code js-file-line">				<span class="pl-k">case</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>touchend<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span></td>
      </tr>
      <tr>
        <td id="L127" class="blob-num js-line-number" data-line-number="127"></td>
        <td id="LC127" class="blob-code js-file-line">					touchStart <span class="pl-k">=</span> <span class="pl-c1">false</span>;</td>
      </tr>
      <tr>
        <td id="L128" class="blob-num js-line-number" data-line-number="128"></td>
        <td id="LC128" class="blob-code js-file-line">					<span class="pl-s">var</span> pageX <span class="pl-k">=</span> (<span class="pl-k">typeof</span> ev.<span class="pl-sc">pageX</span> <span class="pl-k">==</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>undefined<span class="pl-pds">&#39;</span></span>) <span class="pl-k">?</span> ev.originalEvent.changedTouches[<span class="pl-c1">0</span>].<span class="pl-sc">pageX</span> <span class="pl-k">:</span> ev.<span class="pl-sc">pageX</span>;</td>
      </tr>
      <tr>
        <td id="L129" class="blob-num js-line-number" data-line-number="129"></td>
        <td id="LC129" class="blob-code js-file-line">					<span class="pl-s">var</span> pageY <span class="pl-k">=</span> (<span class="pl-k">typeof</span> ev.<span class="pl-sc">pageY</span> <span class="pl-k">==</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>undefined<span class="pl-pds">&#39;</span></span>) <span class="pl-k">?</span> ev.originalEvent.changedTouches[<span class="pl-c1">0</span>].<span class="pl-sc">pageY</span> <span class="pl-k">:</span> ev.<span class="pl-sc">pageY</span>;</td>
      </tr>
      <tr>
        <td id="L130" class="blob-num js-line-number" data-line-number="130"></td>
        <td id="LC130" class="blob-code js-file-line">					<span class="pl-s">var</span> deltaX <span class="pl-k">=</span> <span class="pl-s3">parseInt</span>(pageX) <span class="pl-k">-</span> <span class="pl-s3">parseInt</span>(xStart);</td>
      </tr>
      <tr>
        <td id="L131" class="blob-num js-line-number" data-line-number="131"></td>
        <td id="LC131" class="blob-code js-file-line">					<span class="pl-s">var</span> deltaY <span class="pl-k">=</span> <span class="pl-s3">parseInt</span>(pageY) <span class="pl-k">-</span> <span class="pl-s3">parseInt</span>(yStart);</td>
      </tr>
      <tr>
        <td id="L132" class="blob-num js-line-number" data-line-number="132"></td>
        <td id="LC132" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L133" class="blob-num js-line-number" data-line-number="133"></td>
        <td id="LC133" class="blob-code js-file-line">					posX <span class="pl-k">=</span> deltaX <span class="pl-k">+</span> lastPosX;</td>
      </tr>
      <tr>
        <td id="L134" class="blob-num js-line-number" data-line-number="134"></td>
        <td id="LC134" class="blob-code js-file-line">					posY <span class="pl-k">=</span> deltaY <span class="pl-k">+</span> lastPosY;</td>
      </tr>
      <tr>
        <td id="L135" class="blob-num js-line-number" data-line-number="135"></td>
        <td id="LC135" class="blob-code js-file-line">					<span class="pl-s">var</span> opa <span class="pl-k">=</span> <span class="pl-s3">Math</span>.<span class="pl-s3">abs</span>((<span class="pl-s3">Math</span>.<span class="pl-s3">abs</span>(deltaX) / $that.settings.threshold) / <span class="pl-c1">100</span> <span class="pl-k">+</span> <span class="pl-c1">0.2</span>);</td>
      </tr>
      <tr>
        <td id="L136" class="blob-num js-line-number" data-line-number="136"></td>
        <td id="LC136" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L137" class="blob-num js-line-number" data-line-number="137"></td>
        <td id="LC137" class="blob-code js-file-line">					<span class="pl-k">if</span> (opa <span class="pl-k">&gt;=</span> <span class="pl-c1">1</span>) {</td>
      </tr>
      <tr>
        <td id="L138" class="blob-num js-line-number" data-line-number="138"></td>
        <td id="LC138" class="blob-code js-file-line">						<span class="pl-k">if</span> (posX <span class="pl-k">&gt;</span> <span class="pl-c1">0</span>) {</td>
      </tr>
      <tr>
        <td id="L139" class="blob-num js-line-number" data-line-number="139"></td>
        <td id="LC139" class="blob-code js-file-line">							panes.eq(current_pane).animate({<span class="pl-s1"><span class="pl-pds">&quot;</span>transform<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>translate(<span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> (pane_width) <span class="pl-k">+</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>px,<span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> (posY <span class="pl-k">+</span> pane_width) <span class="pl-k">+</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>px) rotate(60deg)<span class="pl-pds">&quot;</span></span>}, $that.settings.animationSpeed, <span class="pl-st">function</span> () {</td>
      </tr>
      <tr>
        <td id="L140" class="blob-num js-line-number" data-line-number="140"></td>
        <td id="LC140" class="blob-code js-file-line">								<span class="pl-k">if</span>($that.settings.onLike) {</td>
      </tr>
      <tr>
        <td id="L141" class="blob-num js-line-number" data-line-number="141"></td>
        <td id="LC141" class="blob-code js-file-line">									$that.settings.onLike(panes.eq(current_pane));</td>
      </tr>
      <tr>
        <td id="L142" class="blob-num js-line-number" data-line-number="142"></td>
        <td id="LC142" class="blob-code js-file-line">								}</td>
      </tr>
      <tr>
        <td id="L143" class="blob-num js-line-number" data-line-number="143"></td>
        <td id="LC143" class="blob-code js-file-line">								$that.<span class="pl-sc">next</span>();</td>
      </tr>
      <tr>
        <td id="L144" class="blob-num js-line-number" data-line-number="144"></td>
        <td id="LC144" class="blob-code js-file-line">							});</td>
      </tr>
      <tr>
        <td id="L145" class="blob-num js-line-number" data-line-number="145"></td>
        <td id="LC145" class="blob-code js-file-line">						} <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L146" class="blob-num js-line-number" data-line-number="146"></td>
        <td id="LC146" class="blob-code js-file-line">							panes.eq(current_pane).animate({<span class="pl-s1"><span class="pl-pds">&quot;</span>transform<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>translate(-<span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> (pane_width) <span class="pl-k">+</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>px,<span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> (posY <span class="pl-k">+</span> pane_width) <span class="pl-k">+</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>px) rotate(-60deg)<span class="pl-pds">&quot;</span></span>}, $that.settings.animationSpeed, <span class="pl-st">function</span> () {</td>
      </tr>
      <tr>
        <td id="L147" class="blob-num js-line-number" data-line-number="147"></td>
        <td id="LC147" class="blob-code js-file-line">								<span class="pl-k">if</span>($that.settings.onDislike) {</td>
      </tr>
      <tr>
        <td id="L148" class="blob-num js-line-number" data-line-number="148"></td>
        <td id="LC148" class="blob-code js-file-line">									$that.settings.onDislike(panes.eq(current_pane));</td>
      </tr>
      <tr>
        <td id="L149" class="blob-num js-line-number" data-line-number="149"></td>
        <td id="LC149" class="blob-code js-file-line">								}</td>
      </tr>
      <tr>
        <td id="L150" class="blob-num js-line-number" data-line-number="150"></td>
        <td id="LC150" class="blob-code js-file-line">								$that.<span class="pl-sc">next</span>();</td>
      </tr>
      <tr>
        <td id="L151" class="blob-num js-line-number" data-line-number="151"></td>
        <td id="LC151" class="blob-code js-file-line">							});</td>
      </tr>
      <tr>
        <td id="L152" class="blob-num js-line-number" data-line-number="152"></td>
        <td id="LC152" class="blob-code js-file-line">						}</td>
      </tr>
      <tr>
        <td id="L153" class="blob-num js-line-number" data-line-number="153"></td>
        <td id="LC153" class="blob-code js-file-line">					} <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L154" class="blob-num js-line-number" data-line-number="154"></td>
        <td id="LC154" class="blob-code js-file-line">						lastPosX <span class="pl-k">=</span> <span class="pl-c1">0</span>;</td>
      </tr>
      <tr>
        <td id="L155" class="blob-num js-line-number" data-line-number="155"></td>
        <td id="LC155" class="blob-code js-file-line">						lastPosY <span class="pl-k">=</span> <span class="pl-c1">0</span>;</td>
      </tr>
      <tr>
        <td id="L156" class="blob-num js-line-number" data-line-number="156"></td>
        <td id="LC156" class="blob-code js-file-line">						panes.eq(current_pane).animate({<span class="pl-s1"><span class="pl-pds">&quot;</span>transform<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>translate(0px,0px) rotate(0deg)<span class="pl-pds">&quot;</span></span>}, $that.settings.animationRevertSpeed);</td>
      </tr>
      <tr>
        <td id="L157" class="blob-num js-line-number" data-line-number="157"></td>
        <td id="LC157" class="blob-code js-file-line">						panes.eq(current_pane).<span class="pl-s3">find</span>($that.settings.likeSelector).animate({<span class="pl-s1"><span class="pl-pds">&quot;</span>opacity<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-c1">0</span>}, $that.settings.animationRevertSpeed);</td>
      </tr>
      <tr>
        <td id="L158" class="blob-num js-line-number" data-line-number="158"></td>
        <td id="LC158" class="blob-code js-file-line">						panes.eq(current_pane).<span class="pl-s3">find</span>($that.settings.dislikeSelector).animate({<span class="pl-s1"><span class="pl-pds">&quot;</span>opacity<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-c1">0</span>}, $that.settings.animationRevertSpeed);</td>
      </tr>
      <tr>
        <td id="L159" class="blob-num js-line-number" data-line-number="159"></td>
        <td id="LC159" class="blob-code js-file-line">					}</td>
      </tr>
      <tr>
        <td id="L160" class="blob-num js-line-number" data-line-number="160"></td>
        <td id="LC160" class="blob-code js-file-line">					<span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L161" class="blob-num js-line-number" data-line-number="161"></td>
        <td id="LC161" class="blob-code js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L162" class="blob-num js-line-number" data-line-number="162"></td>
        <td id="LC162" class="blob-code js-file-line">		}</td>
      </tr>
      <tr>
        <td id="L163" class="blob-num js-line-number" data-line-number="163"></td>
        <td id="LC163" class="blob-code js-file-line">	};</td>
      </tr>
      <tr>
        <td id="L164" class="blob-num js-line-number" data-line-number="164"></td>
        <td id="LC164" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L165" class="blob-num js-line-number" data-line-number="165"></td>
        <td id="LC165" class="blob-code js-file-line">	$.fn[ pluginName ] <span class="pl-k">=</span> <span class="pl-st">function</span> (<span class="pl-vpf">options</span>) {</td>
      </tr>
      <tr>
        <td id="L166" class="blob-num js-line-number" data-line-number="166"></td>
        <td id="LC166" class="blob-code js-file-line">		<span class="pl-v">this</span>.each(<span class="pl-st">function</span> () {</td>
      </tr>
      <tr>
        <td id="L167" class="blob-num js-line-number" data-line-number="167"></td>
        <td id="LC167" class="blob-code js-file-line">			<span class="pl-k">if</span> (<span class="pl-k">!</span>$.<span class="pl-sc">data</span>(<span class="pl-v">this</span>, <span class="pl-s1"><span class="pl-pds">&quot;</span>plugin_<span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> pluginName)) {</td>
      </tr>
      <tr>
        <td id="L168" class="blob-num js-line-number" data-line-number="168"></td>
        <td id="LC168" class="blob-code js-file-line">				$.<span class="pl-sc">data</span>(<span class="pl-v">this</span>, <span class="pl-s1"><span class="pl-pds">&quot;</span>plugin_<span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> pluginName, <span class="pl-k">new</span> <span class="pl-en">Plugin</span>(<span class="pl-v">this</span>, options));</td>
      </tr>
      <tr>
        <td id="L169" class="blob-num js-line-number" data-line-number="169"></td>
        <td id="LC169" class="blob-code js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L170" class="blob-num js-line-number" data-line-number="170"></td>
        <td id="LC170" class="blob-code js-file-line">			<span class="pl-k">else</span> <span class="pl-k">if</span> ($.isFunction(<span class="pl-s3">Plugin</span>.<span class="pl-sc">prototype</span>[options])) {</td>
      </tr>
      <tr>
        <td id="L171" class="blob-num js-line-number" data-line-number="171"></td>
        <td id="LC171" class="blob-code js-file-line">				$.<span class="pl-sc">data</span>(<span class="pl-v">this</span>, <span class="pl-s1"><span class="pl-pds">&#39;</span>plugin_<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> pluginName)[options]();</td>
      </tr>
      <tr>
        <td id="L172" class="blob-num js-line-number" data-line-number="172"></td>
        <td id="LC172" class="blob-code js-file-line">		    }</td>
      </tr>
      <tr>
        <td id="L173" class="blob-num js-line-number" data-line-number="173"></td>
        <td id="LC173" class="blob-code js-file-line">		});</td>
      </tr>
      <tr>
        <td id="L174" class="blob-num js-line-number" data-line-number="174"></td>
        <td id="LC174" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L175" class="blob-num js-line-number" data-line-number="175"></td>
        <td id="LC175" class="blob-code js-file-line">		<span class="pl-k">return</span> <span class="pl-v">this</span>;</td>
      </tr>
      <tr>
        <td id="L176" class="blob-num js-line-number" data-line-number="176"></td>
        <td id="LC176" class="blob-code js-file-line">	};</td>
      </tr>
      <tr>
        <td id="L177" class="blob-num js-line-number" data-line-number="177"></td>
        <td id="LC177" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L178" class="blob-num js-line-number" data-line-number="178"></td>
        <td id="LC178" class="blob-code js-file-line">})(jQuery, <span class="pl-s3">window</span>, <span class="pl-s3">document</span>);</td>
      </tr>
</table>

  </div>

  </div>
</div>

<a href="#jump-to-line" rel="facebox[.linejump]" data-hotkey="l" style="display:none">Jump to Line</a>
<div id="jump-to-line" style="display:none">
  <form accept-charset="UTF-8" class="js-jump-to-line-form">
    <input class="linejump-input js-jump-to-line-field" type="text" placeholder="Jump to line&hellip;" autofocus>
    <button type="submit" class="button">Go</button>
  </form>
</div>

        </div>

      </div><!-- /.repo-container -->
      <div class="modal-backdrop"></div>
    </div><!-- /.container -->
  </div><!-- /.site -->


    </div><!-- /.wrapper -->

      <div class="container">
  <div class="site-footer" role="contentinfo">
    <ul class="site-footer-links right">
      <li><a href="https://status.github.com/">Status</a></li>
      <li><a href="https://developer.github.com">API</a></li>
      <li><a href="http://training.github.com">Training</a></li>
      <li><a href="http://shop.github.com">Shop</a></li>
      <li><a href="/blog">Blog</a></li>
      <li><a href="/about">About</a></li>

    </ul>

    <a href="/" aria-label="Homepage">
      <span class="mega-octicon octicon-mark-github" title="GitHub"></span>
    </a>

    <ul class="site-footer-links">
      <li>&copy; 2015 <span title="0.04754s from github-fe131-cp1-prd.iad.github.net">GitHub</span>, Inc.</li>
        <li><a href="/site/terms">Terms</a></li>
        <li><a href="/site/privacy">Privacy</a></li>
        <li><a href="/security">Security</a></li>
        <li><a href="/contact">Contact</a></li>
    </ul>
  </div><!-- /.site-footer -->
</div><!-- /.container -->


    <div class="fullscreen-overlay js-fullscreen-overlay" id="fullscreen_overlay">
  <div class="fullscreen-container js-suggester-container">
    <div class="textarea-wrap">
      <textarea name="fullscreen-contents" id="fullscreen-contents" class="fullscreen-contents js-fullscreen-contents" placeholder=""></textarea>
      <div class="suggester-container">
        <div class="suggester fullscreen-suggester js-suggester js-navigation-container"></div>
      </div>
    </div>
  </div>
  <div class="fullscreen-sidebar">
    <a href="#" class="exit-fullscreen js-exit-fullscreen tooltipped tooltipped-w" aria-label="Exit Zen Mode">
      <span class="mega-octicon octicon-screen-normal"></span>
    </a>
    <a href="#" class="theme-switcher js-theme-switcher tooltipped tooltipped-w"
      aria-label="Switch themes">
      <span class="octicon octicon-color-mode"></span>
    </a>
  </div>
</div>



    <div id="ajax-error-message" class="flash flash-error">
      <span class="octicon octicon-alert"></span>
      <a href="#" class="octicon octicon-x flash-close js-ajax-error-dismiss" aria-label="Dismiss error"></a>
      Something went wrong with that request. Please try again.
    </div>


      <script crossorigin="anonymous" src="https://assets-cdn.github.com/assets/frameworks-2a688ea200a50a474783d34f1f46405acbc687c4d17db98b4b2b769b44174d5d.js" type="text/javascript"></script>
      <script async="async" crossorigin="anonymous" src="https://assets-cdn.github.com/assets/github-5ef71947c9c16f5cc5fb53c5c07bc3e2499a2c1324b2f7806cc977b38e0e11ad.js" type="text/javascript"></script>
      
      
  </body>
</html>
